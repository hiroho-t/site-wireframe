const puppeteer = require('puppeteer-core');
const fs = require('fs');

const TARGET = process.argv[2] || 'https://keeps.homes/';
const OUT    = process.argv[3];
const PNG    = process.argv[4];
const WIDTH  = parseInt(process.argv[5] || '1440', 10);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
// JSで描画されるためHTML+CSSだけでは再現できない要素 → 静止PNGに焼き込む
const DYNAMIC = 'dotlottie-player,lottie-player,canvas,video,model-viewer';

(async () => {
  const browser = await puppeteer.launch({ protocolTimeout: 600000,
    executablePath: CHROME, headless: 'new',
    args: ['--no-sandbox','--disable-dev-shm-usage','--hide-scrollbars','--font-render-hinting=none'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: 1000, deviceScaleFactor: 1 });
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36');
  await page.goto(TARGET, { waitUntil: 'networkidle2', timeout: 90000 });
  await new Promise(r => setTimeout(r, 3000));

  // 全スクロールして遅延読み込み・スクロール発火アニメを全部トリガー
  await page.evaluate(async () => {
    const s = ms => new Promise(r => setTimeout(r, ms));
    const step = Math.round(innerHeight * 0.6);
    const H = document.body.scrollHeight;            // 先に確定させる（伸び続けるページで無限ループになるため）
    const rounds = Math.min(200, Math.ceil((H + innerHeight) / step));
    const t0 = Date.now();
    for (let i = 0; i < rounds; i++) {
      scrollTo(0, i * step); await s(220);
      if (Date.now() - t0 > 60000) break;            // 60秒で打ち切り
    }
    scrollTo(0, document.body.scrollHeight); await s(1200);
    scrollTo(0, 0); await s(1500);
  });
  await new Promise(r => setTimeout(r, 3000));

  // 遅延読み込みの取りこぼしを潰す。
  // Studioは中身が空のSVG（…%3E%3C/svg%3E）を仮置きし、その要素が一定時間視界に入ると実画像に差し替える。
  // 仮置きが残っている要素を名指しで画面中央に出し、消えるまで繰り返す。
  const pending = await page.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const stub = /%3E%3C\/svg%3E|><\/svg>/;
    const sheetText = (st) => {
      let t = st.textContent || '';
      try { const f = st.sheet ? Array.from(st.sheet.cssRules).map(r => r.cssText).join('') : ''; if (f.length > t.length) t = f; } catch (e) {}
      return t;
    };
    const left = () => [
      ...Array.from(document.querySelectorAll('style')).filter(st => stub.test(sheetText(st))).map(st => st.parentElement),
      ...Array.from(document.querySelectorAll('img')).filter(im => stub.test(im.getAttribute('src') || '')),
    ].filter(Boolean);
    // 粘りすぎると1回のevaluateが数分かかりCDPのタイムアウトに当たる。
    // 取り切れなかった分は wire.js 側で「空の箱＝画像スロット」として拾えるので、ここは軽く済ませる。
    const deadline = 25000, t0 = Date.now();
    for (let round = 0; round < 3; round++) {
      const ps = left().slice(0, 10);
      if (!ps.length) break;
      for (const host of ps) {
        if (Date.now() - t0 > deadline) break;
        host.scrollIntoView({ block: 'center', behavior: 'instant' });
        await sleep(700);
      }
      if (Date.now() - t0 > deadline) break;
      await sleep(800);
    }
    scrollTo(0, 0); await sleep(1500);
    return left().length;
  });
  if (pending) console.log('  遅延読み込みの取り残し:', pending, '件');

  // 読み込まれないまま load も error も飛ばない画像が1枚でもあると、ここで永久に止まる。
  // 待つのは15秒まで。取り切れなかった分は wire.js 側で空スロットとして拾える。
  await page.evaluate(() => Promise.race([
    Promise.all(Array.from(document.images).filter(i => !i.complete)
      .map(i => new Promise(r => { i.onload = i.onerror = r; }))),
    new Promise(r => setTimeout(r, 15000)),
  ]));


  // --- 2.5) 疑似要素(::before/::after)の背景画像を、安定した属性のルールに焼き直す
  //   カルーセルはスライドを送るたびに <style> の中身を消して書き直し、
  //   セレクタに使う data-r-<番号> も付け替える。その「消えている一瞬」を撮ると背景が丸ごと失われる。
  //   そこで一定時間サンプリングして、一度でも解決できた値を自前の属性で固定する。
  await page.evaluate(() => { window.__pbg = new Map(); });
  const samplePass = (frac) => page.evaluate(async (f) => {
    const stub = /%3E%3C\/svg%3E|><\/svg>/;
    scrollTo(0, Math.round(document.body.scrollHeight * f));
    await new Promise(r => setTimeout(r, 900));
    document.querySelectorAll('*').forEach(el => {
      // 重いページでは全要素×2疑似要素のgetComputedStyleがタイムアウトの原因になる。
      // 背景画像が乗るのは「一定の大きさがあって、自分では文字を持たない」要素なので、そこだけ見る。
      const r = el.getBoundingClientRect();
      if (r.width < 24 || r.height < 24) return;
      for (const n of el.childNodes) if (n.nodeType === 3 && n.nodeValue.trim()) return;
      ['::before', '::after'].forEach(ps => {
        let bi;
        try { bi = getComputedStyle(el, ps).backgroundImage; } catch (e) { return; }
        if (!bi || bi === 'none' || !/url\(/.test(bi) || stub.test(bi)) return;
        const rec = window.__pbg.get(el) || {};
        if (!rec[ps]) { rec[ps] = bi; window.__pbg.set(el, rec); }
      });
    });
  }, frac);
  for (const f of [0, 0.5, 1]) await samplePass(f);   // 1周ずつ別呼び出しにして長時間の評価を避ける
  const bakedCount = await page.evaluate(() => {
    const rules = [];
    let n = 0;
    for (const [el, rec] of window.__pbg) {
      const id = 'p' + n++;
      el.setAttribute('data-wf-pbg', id);
      for (const ps of Object.keys(rec)) rules.push(`[data-wf-pbg="${id}"]${ps}{background-image:${rec[ps]}!important}`);
    }
    if (rules.length) {
      const st = document.createElement('style');
      st.setAttribute('data-from', 'freeze-pseudo');
      st.textContent = rules.join('\n');
      document.head.appendChild(st);
    }
    scrollTo(0, 0);
    return rules.length;
  });
  console.log('疑似要素の背景を固定:', bakedCount, '件');

  // --- 2.7) アニメーションを止めてから撮る
  //   カルーセルは回り続けるので、止めないと「参照PNG」と「固めたDOM」が別のスライド位置になる。
  await page.evaluate(async () => {
    const st = document.createElement('style');
    st.setAttribute('data-from', 'pause');
    st.textContent = '*,*::before,*::after{animation-play-state:paused!important}';
    document.head.appendChild(st);
    scrollTo(0, 0);
    await new Promise(r => setTimeout(r, 1200));
  });
  if (PNG) await page.screenshot({ path: PNG, fullPage: true });

  // --- 1) 動的要素にマーカーを付ける
  const marks = await page.evaluate((sel) => {
    const out = [];
    document.querySelectorAll(sel).forEach((el, i) => {
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return;
      const id = 'freeze-' + i;
      el.setAttribute('data-freeze-id', id);
      const cs = getComputedStyle(el);
      out.push({ id, tag: el.tagName.toLowerCase(), w: Math.round(r.width), h: Math.round(r.height),
                 disp: cs.display === 'inline' ? 'block' : cs.display,
                 pos: cs.position, top: cs.top, left: cs.left, right: cs.right, bottom: cs.bottom,
                 z: cs.zIndex, fit: cs.objectFit });
    });
    return out;
  }, DYNAMIC);

  // --- 2) 動的要素を静止PNG化する
  //   まず canvas 本体のピクセルを直接吸い出す（重なった要素が写り込まない）
  const shots = await page.evaluate((marks) => {
    const out = {};
    for (const m of marks) {
      const el = document.querySelector(`[data-freeze-id="${m.id}"]`);
      if (!el) continue;
      const root = el.shadowRoot || el;
      const cv = el.tagName === 'CANVAS' ? el : root.querySelector('canvas');
      if (!cv) continue;
      try { const u = cv.toDataURL('image/png'); if (u && u.length > 2000) out[m.id] = u; } catch (e) {}
    }
    return out;
  }, marks);

  //   canvasから取れなかったものだけ、要素スクショで代替
  for (const m of marks) {
    if (shots[m.id]) continue;
    try {
      const h = await page.$(`[data-freeze-id="${m.id}"]`);
      if (!h) continue;
      await h.evaluate(el => el.scrollIntoView({ block: 'center', behavior: 'instant' }));
      await new Promise(r => setTimeout(r, 500));
      shots[m.id] = 'data:image/png;base64,' + await h.screenshot({ encoding: 'base64', omitBackground: true });
      console.log('  (fallback screenshot)', m.id);
    } catch (e) { console.error('  freeze skip', m.id, e.message); }
  }
  await page.evaluate(() => scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 800));
  console.log('frozen dynamic elements:', Object.keys(shots).length, '/', marks.length);

  // --- 3) HTML+CSSを1枚に合体、JSを除去
  const html = await page.evaluate(async ({ base, shots, marks }) => {
    const abs = u => { try { return new URL(u, base).href } catch(e) { return u } };
    const fixCss = (css, href) => css
      .replace(/url\(\s*(['"]?)(?!data:|https?:|\/\/)([^'")]+)\1\s*\)/g,
        (m,q,u) => `url(${q}${(()=>{try{return new URL(u,href).href}catch(e){return u}})()}${q})`)
      .replace(/@import\s+url\(\s*(['"]?)([^'")]+)\1\s*\)/g,
        (m,q,u) => `@import url(${q}${(()=>{try{return new URL(u,href).href}catch(e){return u}})()}${q})`);

    // 動的要素を静止PNGに差し替え
    for (const m of marks) {
      const el = document.querySelector(`[data-freeze-id="${m.id}"]`);
      if (!el || !shots[m.id]) continue;
      const img = document.createElement('img');
      img.src = shots[m.id]; img.alt = ''; img.setAttribute('data-frozen-from', m.tag);
      // 要素サイズ＝撮影サイズなので object-fit:fill で完全一致させる
      img.style.cssText = 'width:100%;height:100%;object-fit:fill;display:block';
      // 要素を別のdivに差し替えると元のCSSが当たらなくなり、サイズをpxで書き直す羽目になる。
      // 1440pxで測った値を焼き込むとレスポンシブが壊れるので、要素は残したまま静止画を見せる。
      if (m.tag === 'video') {
        // poster はJSなしでも表示される
        el.setAttribute('poster', shots[m.id]);
        el.setAttribute('preload', 'none');
        el.setAttribute('data-frozen-from', 'video');
        ['src', 'autoplay', 'loop', 'muted', 'playsinline'].forEach(a => el.removeAttribute(a));
        Array.from(el.querySelectorAll('source, track')).forEach(n => n.remove());
      } else if (m.tag === 'canvas') {
        // JSなしのcanvasは透明なので、背景に敷けば見える
        el.setAttribute('data-frozen-from', 'canvas');
        el.style.backgroundImage = 'url("' + shots[m.id] + '")';
        el.style.backgroundSize = '100% 100%';
        el.style.backgroundRepeat = 'no-repeat';
      } else {
        el.innerHTML = ''; el.appendChild(img);
        el.style.display = m.disp;
        el.style.width = m.w + 'px'; el.style.height = m.h + 'px';
      }
    }

    // 外部CSSを取り込んで<style>化
    for (const link of Array.from(document.querySelectorAll('link[rel="stylesheet"]'))) {
      const href = link.href;
      try {
        const css = fixCss(await (await fetch(href)).text(), href);
        const st = document.createElement('style');
        st.setAttribute('data-from', href); st.textContent = css;
        link.replaceWith(st);
      } catch(e) { link.setAttribute('href', abs(href)); }
    }
    // JSが insertRule() でCSSOMに直接挿したルールは textContent が空のまま。
    // outerHTML にも載らないので、シートから書き戻してから固める。
    for (const st of Array.from(document.querySelectorAll('style'))) {
      if (st.hasAttribute('data-from')) continue;
      let text = st.textContent || '';
      try {
        const fromSheet = st.sheet ? Array.from(st.sheet.cssRules).map(r => r.cssText).join('\n') : '';
        if (fromSheet.length > text.length) text = fromSheet;
      } catch (e) {}
      st.textContent = fixCss(text, base);
    }

    const extra = [];
    for (const sh of Array.from(document.styleSheets)) {
      if (sh.ownerNode && (sh.ownerNode.tagName === 'STYLE' || sh.ownerNode.tagName === 'LINK')) continue;
      try { extra.push(Array.from(sh.cssRules).map(r=>r.cssText).join('\n')) } catch(e) {}
    }
    if (extra.length) {
      const s = document.createElement('style');
      s.setAttribute('data-from','adoptedStyleSheets'); s.textContent = extra.join('\n');
      document.head.appendChild(s);
    }

    // 相対URLを絶対化
    document.querySelectorAll('[src]').forEach(el=>{const v=el.getAttribute('src');if(v&&!/^(data:|https?:|\/\/)/.test(v))el.setAttribute('src',abs(v))});
    document.querySelectorAll('[href]').forEach(el=>{const v=el.getAttribute('href');if(v&&!/^(data:|https?:|\/\/|#|mailto:|tel:)/.test(v))el.setAttribute('href',abs(v))});
    document.querySelectorAll('[srcset]').forEach(el=>{el.setAttribute('srcset',el.getAttribute('srcset').split(',').map(p=>{const t=p.trim().split(/\s+/);if(t[0]&&!/^(data:|https?:|\/\/)/.test(t[0]))t[0]=abs(t[0]);return t.join(' ')}).join(', '))});
    document.querySelectorAll('[style]').forEach(el=>{const v=el.getAttribute('style');if(v&&/url\(/.test(v))el.setAttribute('style',fixCss(v,base))});

    // JSを完全除去
    document.querySelectorAll('script,noscript,link[rel="modulepreload"],link[rel="preload"][as="script"]').forEach(n=>n.remove());
    document.querySelectorAll('*').forEach(el=>{for(const a of Array.from(el.attributes))if(/^on/i.test(a.name))el.removeAttribute(a.name)});

    // 静止化：アニメ停止＋スクロール発火待ちの要素を表示
    const fz = document.createElement('style');
    fz.setAttribute('data-from','static-freeze');
    fz.textContent = `*,*::before,*::after{animation:none!important;transition:none!important}
html{scroll-behavior:auto!important}
[data-frozen-from]{display:block}`;
    document.head.appendChild(fz);
    document.head.insertBefore(document.createComment(` static snapshot of ${base} (${innerWidth}px) — HTML + CSS merged into one file, JS removed, Lottie/canvas frozen to PNG `), document.head.firstChild);
    return '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
  }, { base: TARGET, shots, marks });

  fs.writeFileSync(OUT, html);
  console.log('HTML bytes:', Buffer.byteLength(html));
  await browser.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
