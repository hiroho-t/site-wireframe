// snap.js の出力を Claude Code に渡せるサイズまで削る
// usage: node slim.js in.html out.html [--width 1440] [--gray] [--keep-media]
const puppeteer = require('puppeteer-core');
const fs = require('fs'), path = require('path');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const IN = process.argv[2], OUT = process.argv[3];
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i+1] : d; };
const has = k => process.argv.includes(k);
const WIDTH = parseInt(arg('--width', '1440'), 10);
const GRAY = has('--gray');          // 画像をグレーボックスに置換
const DROP_MEDIA = has('--drop-media'); // 撮影幅で効かない@mediaを捨てる（レスポンシブを失う）

(async () => {
  const before = fs.statSync(IN).size;
  const browser = await puppeteer.launch({ protocolTimeout: 600000, executablePath: CHROME, headless: 'new',
    args: ['--no-sandbox','--hide-scrollbars','--allow-file-access-from-files'] });
  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: 1000 });
  await page.goto('file://' + path.resolve(IN), { waitUntil: 'networkidle2', timeout: 90000 });
  await new Promise(r => setTimeout(r, 2500));

  const report = await page.evaluate(({ WIDTH, GRAY, DROP_MEDIA }) => {
    const log = {};

    // 1) <head> の余計なメタ情報を落とす（OGP・favicon・preconnect・検証タグ）
    let head0 = document.head.innerHTML.length;
    document.querySelectorAll(
      'meta[property^="og:"],meta[property^="twitter:"],meta[name="google-site-verification"],' +
      'meta[name="generator"],meta[name="robots"],meta[name="format-detection"],meta[name="chrome"],' +
      'meta[name="apple-mobile-web-app-title"],link[rel="icon"],link[rel="apple-touch-icon"],' +
      'link[rel="preconnect"],link[rel="dns-prefetch"],link[rel="canonical"],link[rel="alternate"]'
    ).forEach(n => n.remove());
    log.head = head0 - document.head.innerHTML.length;

    // 2) 使われていないCSSルールを落とす
    const used = [], mediaDropped = [];
    const okSel = sel => {
      const probe = sel.replace(/::?[a-z-]+(\([^)]*\))?/gi, '').replace(/\s*[>+~]\s*$/, '').trim();
      if (!probe) return true;
      try { return !!document.querySelector(probe); } catch (e) { return true; }
    };
    const walk = (rules, out) => {
      for (const r of rules) {
        if (r.type === 1) { if (okSel(r.selectorText)) out.push(r.cssText); }           // style rule
        else if (r.type === 4) {                                                        // @media
          const q = r.conditionText || r.media.mediaText;
          if (DROP_MEDIA && !window.matchMedia(q).matches) { mediaDropped.push(q); continue; }
          const inner = []; walk(r.cssRules, inner);
          if (inner.length) out.push(`@media ${q}{${inner.join('')}}`);
        }
        else if (r.type === 12) {                                                       // @supports
          const inner = []; walk(r.cssRules, inner);
          if (inner.length) out.push(`@supports ${r.conditionText}{${inner.join('')}}`);
        }
        else out.push(r.cssText);                                                       // @font-face 等は残す
      }
    };
    let css0 = 0;
    for (const st of Array.from(document.querySelectorAll('style'))) {
      css0 += st.textContent.length;
      if (st.getAttribute('data-from') === 'static-freeze') { used.push(st.textContent); continue; }
      try { walk(st.sheet.cssRules, used); } catch (e) { used.push(st.textContent); }
      st.remove();
    }
    const merged = document.createElement('style');
    merged.setAttribute('data-from', 'merged');
    merged.textContent = used.join('\n');
    document.head.appendChild(merged);
    log.cssBefore = css0; log.cssAfter = merged.textContent.length;
    log.mediaDropped = mediaDropped.length;

    // 3) data-s-<UUID> を短い連番に振り直す（HTMLとCSSの両方）
    const ids = new Map();
    document.querySelectorAll('*').forEach(el => {
      for (const a of Array.from(el.attributes)) {
        const m = a.name.match(/^data-s-([0-9a-f-]{20,})$/);
        if (!m) continue;
        if (!ids.has(a.name)) ids.set(a.name, 'data-s' + ids.size);
        el.setAttribute(ids.get(a.name), ''); el.removeAttribute(a.name);
      }
    });
    let css = merged.textContent;
    for (const [long, short] of ids) css = css.split(long).join(short);
    merged.textContent = css;
    log.idsRenamed = ids.size;

    // 4) 画像の扱い
    let imgs = 0, frozen = 0;
    document.querySelectorAll('img').forEach(im => {
      const r = im.getBoundingClientRect();
      const w = Math.round(r.width), h = Math.round(r.height);
      const isFrozen = im.hasAttribute('data-frozen-from');
      if (GRAY) {
        // <img>のまま中身だけグレーに差し替える（タグを変えるとCSSが当たらずレイアウトが崩れる）
        const label = isFrozen ? im.getAttribute('data-frozen-from') : (im.getAttribute('alt') || '');
        im.setAttribute('data-placeholder', label || 'image');
        im.setAttribute('data-original-size', w + 'x' + h);
        im.removeAttribute('srcset'); im.removeAttribute('sizes');
        im.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
          `<svg xmlns="http://www.w3.org/2000/svg" width="${w||10}" height="${h||10}"><rect width="100%" height="100%" fill="#d9d9d9"/></svg>`);
        imgs++;
      } else if (isFrozen) {
        im.setAttribute('data-extract', 'frozen-' + (frozen++)); // base64はNode側で外部ファイルへ
      }
    });
    log.imgs = imgs; log.frozen = frozen;

    // 5) 空の属性ゴミを掃除
    document.querySelectorAll('[aria-hidden="true"][data-s0]').forEach(()=>{});
    return log;
  }, { WIDTH, GRAY, DROP_MEDIA });

  let html = '<!DOCTYPE html>\n' + await page.evaluate(() => document.documentElement.outerHTML);
  await browser.close();

  // base64の凍結PNGを外部ファイルへ切り出す（HTMLからトークンを退避）
  const assetDir = OUT.replace(/\.html$/, '_assets');
  let extracted = 0;
  html = html.replace(/(<video[^>]*?)poster="data:image\/png;base64,([A-Za-z0-9+/=]+)"/g, (m, a, b64) => {
    if (!fs.existsSync(assetDir)) fs.mkdirSync(assetDir);
    const name = `frozen-${extracted++}.png`;
    fs.writeFileSync(path.join(assetDir, name), Buffer.from(b64, 'base64'));
    return `${a}poster="${path.basename(assetDir)}/${name}"`;
  });
  html = html.replace(/background-image:\s*url\("data:image\/png;base64,([A-Za-z0-9+/=]+)"\)/g, (m, b64) => {
    if (!fs.existsSync(assetDir)) fs.mkdirSync(assetDir);
    const name = `frozen-${extracted++}.png`;
    fs.writeFileSync(path.join(assetDir, name), Buffer.from(b64, 'base64'));
    return `background-image: url("${path.basename(assetDir)}/${name}")`;
  });
  html = html.replace(/<img([^>]*?)src="data:image\/png;base64,([A-Za-z0-9+/=]+)"([^>]*?)>/g, (m, a, b64, c) => {
    if (!fs.existsSync(assetDir)) fs.mkdirSync(assetDir);
    const name = `frozen-${extracted++}.png`;
    fs.writeFileSync(path.join(assetDir, name), Buffer.from(b64, 'base64'));
    return `<img${a}src="${path.basename(assetDir)}/${name}"${c}>`;
  });

  fs.writeFileSync(OUT, html);
  const after = fs.statSync(OUT).size;
  console.log(`${path.basename(IN)} → ${path.basename(OUT)}`);
  console.log(`  <head>整理     -${(report.head/1024).toFixed(0)}KB`);
  console.log(`  CSS            ${(report.cssBefore/1024).toFixed(0)}KB → ${(report.cssAfter/1024).toFixed(0)}KB  (@media ${report.mediaDropped}件除外${DROP_MEDIA ? ' ※レスポンシブを失う' : ''})`);
  console.log(`  UUID属性短縮   ${report.idsRenamed}種`);
  console.log(`  画像           ${GRAY ? `グレーボックス化 ${report.imgs}枚` : `base64を外出し ${extracted}枚`}`);
  console.log(`  合計 ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (${(100-100*after/before).toFixed(1)}%減 / 約${Math.round(after/4/1000)}kトークン)`);
})().catch(e => { console.error('ERR', e.stack); process.exit(1); });
