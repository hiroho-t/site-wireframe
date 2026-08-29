// 静止版HTML → 著作権フリーのワイヤーフレーム
// 置き換える：画像・ロゴ・配色・テキスト　／　残す：フォント・レイアウト・アニメーション
// usage: node wire.js in.html out.html [--width 1440]
const puppeteer = require('puppeteer-core');
const fs = require('fs'), path = require('path');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const IN = process.argv[2], OUT = process.argv[3];
const i = process.argv.indexOf('--width');
const WIDTH = parseInt(i > 0 ? process.argv[i+1] : '1440', 10);
const FLAT = process.argv.includes('--flat'); // 塗るだけの装飾を落とす（レイアウトは動かさない）
const MONO = process.argv.includes('--mono'); // 既定では配色を残す（配色は著作物ではない）
const j = process.argv.indexOf('--ref');
const REF = j > 0 ? process.argv[j+1] : null;  // 元サイトのフルページPNG（画像の平均色を採る元）
const { execFileSync } = require('child_process');

// 画像プレースホルダのアイコン（Font Awesome Free 6.5.2 "image" / regular）
// Icons: CC BY 4.0 — 表示義務があるため、生成物のhead先頭にライセンス行を残す
const FA_LICENSE = 'Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com | Icons: CC BY 4.0 - https://fontawesome.com/license/free';
const FA_ICONS = JSON.parse(fs.readFileSync(path.join(__dirname, 'fa_icons.json'), 'utf8'));
const FA_VIEWBOX = '0 0 512 512';
const FA_PATH = 'M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z';

(async () => {
  const browser = await puppeteer.launch({ protocolTimeout: 600000, executablePath: CHROME, headless: 'new',
    args: ['--no-sandbox','--hide-scrollbars','--allow-file-access-from-files'] });
  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: 1000 });
  await page.goto('file://' + path.resolve(IN), { waitUntil: 'networkidle2', timeout: 90000 });
  await new Promise(r => setTimeout(r, 2500));

  const log = await page.evaluate(({ MONO, FLAT, FA_VIEWBOX, FA_PATH, FA_LICENSE, FA_ICONS }) => {
    const L = {};

    /* ---- site-wireframe のパレット（白・黒・グレーのみ） ---- */
    const PALETTE = [
      [0,   '#000000'], [34,  '#222222'], [85,  '#555555'], [128, '#808080'],
      [176, '#b0b0b0'], [220, '#dcdcdc'], [242, '#f2f2f2'], [255, '#ffffff'],
    ];
    const IMG_GRAY = '#d9d9d9', IMG_DARK = '#8c8c8c';
    const NAMED = { white:[255,255,255], black:[0,0,0], red:[255,0,0], blue:[0,0,255],
      green:[0,128,0], gray:[128,128,128], grey:[128,128,128], silver:[192,192,192],
      transparent:null, currentcolor:null, inherit:null, initial:null, unset:null, none:null };

    const snap = (r, g, b) => {
      const lum = Math.round(0.299*r + 0.587*g + 0.114*b);
      let best = PALETTE[0];
      for (const p of PALETTE) if (Math.abs(p[0] - lum) < Math.abs(best[0] - lum)) best = p;
      return best[1];
    };
    // CSS中の色をまとめてモノトーンに寄せる
    const monochrome = (css) => css
      .replace(/#([0-9a-f]{3,8})\b/gi, (m, hex) => {
        let h = hex, a = '';
        if (h.length === 3 || h.length === 4) h = h.split('').map(c => c + c).join('');
        if (h.length === 8) { a = h.slice(6); h = h.slice(0, 6); }
        if (h.length !== 6) return m;
        const [r, g, b] = [0,2,4].map(i => parseInt(h.substr(i, 2), 16));
        return snap(r, g, b) + a;
      })
      .replace(/\brgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)\s*(?:[,/]\s*([\d.%]+))?\s*\)/gi,
        (m, r, g, b, a) => {
          const hex = snap(+r, +g, +b);
          const [R,G,B] = [1,3,5].map(i => parseInt(hex.substr(i, 2), 16));
          return a !== undefined ? `rgba(${R}, ${G}, ${B}, ${a})` : `rgb(${R}, ${G}, ${B})`;
        })
      .replace(/\b(white|black|red|blue|green|gray|grey|silver)\b(?=\s*[;,)}])/gi,
        (m, n) => { const c = NAMED[n.toLowerCase()]; return c ? snap(...c) : m; });

    // CSSのbackground-image（元の写真がここにも入っている）をグレーに潰す
    // 中身が空のSVG（遅延読み込みの仮置き）も画像スロットとみなす。
    // 一方、装飾用の小さなdata URIアイコンは残す（潰すと矢印やチェックが消える）
    const STUB = /%3E%3C\/svg%3E|><\/svg>/i;
    const isImageUrl = (v) => /url\(/.test(v) && (!/url\(\s*['"]?data:/i.test(v) || STUB.test(v));
    const flattenBg = (css) => css.replace(
      /background(?:-image)?\s*:\s*([^;{}]*url\([^)]*\)[^;{}]*)/gi,
      (m, val) => isImageUrl(val) ? `background-image:linear-gradient(${IMG_GRAY},${IMG_GRAY})` : m);

    /* ---- 1. アニメーションの停止を解除（取得できた動きは残す） ---- */
    const fz = document.querySelector('style[data-from="static-freeze"]');
    if (fz) {
      fz.textContent = fz.textContent
        .replace(/\*,\*::before,\*::after\{animation:none!important;transition:none!important\}\n?/, '');
      L.animation = 'restored';
    }

    // --flat：塗るだけの装飾を落とす。ここに並べたものはどれもレイアウトに影響しない。
    // 場所を取る装飾（サイズ・余白・transform・フローに乗った飾り）には触らない。
    if (FLAT) {
      const fl = document.createElement('style');
      fl.setAttribute('data-from', 'wf-flat');
      fl.textContent = '*,*::before,*::after{box-shadow:none!important;text-shadow:none!important;' +
        'filter:none!important;backdrop-filter:none!important;' +
        'mix-blend-mode:normal!important;background-blend-mode:normal!important;' +
        'border-radius:0!important}';
      document.head.appendChild(fl);
      L.flat = true;
    }

    /* ---- 2-0. 背景画像を持つ要素を控える（::before/::after も見る） ---- */
    const bgTargets = [];
    document.querySelectorAll('*').forEach(el => {
      ['', '::before', '::after'].forEach(pseudo => {
        let bi;
        try { bi = getComputedStyle(el, pseudo || null).backgroundImage; } catch (e) { return; }
        if (!bi || bi === 'none' || !isImageUrl(bi)) return;
        const r = el.getBoundingClientRect();
        if (r.width < 4 || r.height < 4) return;
        if (!el.hasAttribute('data-wf-bg')) el.setAttribute('data-wf-bg', 'bg' + bgTargets.length);
        bgTargets.push({
          id: el.getAttribute('data-wf-bg'), pseudo,
          x: Math.round(r.left + scrollX), y: Math.round(r.top + scrollY),
          w: Math.round(r.width), h: Math.round(r.height),
        });
      });
    });
    L.bgTargets = bgTargets;

    /* ---- 2. 配色をモノトーンへ ---- */
    let n = 0;
    const paint = css => MONO ? monochrome(flattenBg(css)) : flattenBg(css);
    document.querySelectorAll('style').forEach(st => { st.textContent = paint(st.textContent); n++; });
    document.querySelectorAll('[style]').forEach(el => el.setAttribute('style', paint(el.getAttribute('style'))));
    document.querySelectorAll('source[srcset]').forEach(el => el.remove());
    L.styleBlocks = n;

    /* ---- 3. 画像をプレースホルダに（平均色＋アイコン＋実寸ラベル） ---- */
    let imgs = 0, logo = 0;
    const isLogo = (im) => {
      const r = im.getBoundingClientRect();
      const src = (im.getAttribute('src') || '') + ' ' + (im.getAttribute('alt') || '') + ' ' + im.className;
      if (/logo/i.test(src)) return true;
      return r.top < 120 && r.width > 60 && r.width < 320 && r.width / Math.max(r.height, 1) > 1.6;
    };
    const shots = [];
    Array.from(document.querySelectorAll('img')).forEach(im => {
      const r = im.getBoundingClientRect();
      const w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
      im.removeAttribute('srcset'); im.removeAttribute('sizes');
      if (isLogo(im) && logo === 0) {
        const span = document.createElement('span');
        span.setAttribute('data-wf-logo', '');
        span.textContent = 'LOGO';
        span.style.cssText = `display:inline-flex;align-items:center;height:${h}px;` +
          `font-family:"Poppins",sans-serif;font-size:20px;font-weight:700;letter-spacing:.08em;line-height:1;color:currentColor`;
        im.replaceWith(span); logo++;
        return;
      }
      const id = 'wf' + imgs++;
      im.setAttribute('data-wf-id', id);
      shots.push({
        id,
        x: Math.round(r.left + scrollX), y: Math.round(r.top + scrollY), w, h,
        nw: im.naturalWidth || w, nh: im.naturalHeight || h,
        svg: /\.svg(\?|$)/i.test(im.getAttribute('src') || ''),
      });
    });
    L.imgs = imgs; L.logo = logo; L.shots = shots;
    /* ---- 3-0. アイコンを全部 Font Awesome に統一する ---- */
    const NS = 'http://www.w3.org/2000/svg';
    const mkIcon = (key) => {
      const ic = FA_ICONS[key]; if (!ic) return null;
      const svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('viewBox', ic.vb);
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('data-wf-icon', key);
      const pt = document.createElementNS(NS, 'path');
      pt.setAttribute('d', ic.d);
      pt.setAttribute('fill', 'currentColor');
      svg.appendChild(pt);
      return svg;
    };
    // アイコンフォントのリガチャ名 → Font Awesome
    const BY_NAME = {
      keyboard_arrow_right: 'solid_chevron-right', chevron_right: 'solid_chevron-right',
      navigate_next: 'solid_chevron-right', arrow_forward_ios: 'solid_chevron-right',
      keyboard_arrow_left: 'solid_chevron-left', chevron_left: 'solid_chevron-left',
      navigate_before: 'solid_chevron-left', arrow_back_ios: 'solid_chevron-left',
      menu: 'solid_bars',
      call_made: 'solid_arrow-up-right-from-square', open_in_new: 'solid_arrow-up-right-from-square',
      launch: 'solid_arrow-up-right-from-square', north_east: 'solid_arrow-up-right-from-square',
      arrow_forward: 'solid_arrow-right', east: 'solid_arrow-right',
      share: 'solid_share-nodes',
    };
    // クラス名のキーワード → Font Awesome（スプライトを<use>で参照している場合）
    const BY_CLASS = [
      [/external|blank/i, 'solid_arrow-up-right-from-square'],
      [/arrow/i,          'solid_arrow-right'],
      [/sns|social|share/i, 'solid_share-nodes'],
      [/icon/i,           'solid_arrow-up-right-from-square'],
    ];
    let icoFont = 0, icoSvg = 0, icoSkip = 0;

    // (a) アイコンフォントのリガチャ
    document.querySelectorAll('*').forEach(el => {
      if (el.children.length) return;
      const t = (el.textContent || '').trim();
      if (!t || t.length > 30) return;
      const ff = getComputedStyle(el).fontFamily || '';
      if (!/material|icon|fontawesome/i.test(ff)) return;
      const svg = mkIcon(BY_NAME[t] || 'solid_circle');
      if (!svg) return;
      svg.style.cssText = 'width:1em;height:1em;vertical-align:-0.125em;display:inline-block';
      el.textContent = '';
      el.appendChild(svg);
      icoFont++;
    });

    // (b) スプライトを<use>で参照しているSVG
    document.querySelectorAll('svg').forEach(svg => {
      if (svg.hasAttribute('data-wf-icon')) return;
      if (!svg.querySelector('use')) return;
      const cls = (svg.getAttribute('class') || '') + ' ' + ((svg.parentElement && svg.parentElement.getAttribute('class')) || '');
      const hit = BY_CLASS.find(([re]) => re.test(cls));
      if (!hit) { icoSkip++; return; }
      const ic = FA_ICONS[hit[1]];
      svg.setAttribute('viewBox', ic.vb);
      svg.setAttribute('data-wf-icon', hit[1]);
      svg.innerHTML = '';
      const pt = document.createElementNS(NS, 'path');
      pt.setAttribute('d', ic.d);
      pt.setAttribute('fill', 'currentColor');
      svg.appendChild(pt);
      // 元の箱は 16×7 のように細長いことが多い。正方形のviewBoxのままだと
      // 短辺に合わせて縮み、絵が小さくなる。グリフの実輪郭までviewBoxを詰めて箱いっぱいに描く。
      try {
        const bb = pt.getBBox();
        if (bb.width > 0 && bb.height > 0) {
          const pad = Math.max(bb.width, bb.height) * 0.04;
          svg.setAttribute('viewBox',
            `${bb.x - pad} ${bb.y - pad} ${bb.width + pad * 2} ${bb.height + pad * 2}`);
        }
      } catch (e) {}
      icoSvg++;
    });
    L.icoFont = icoFont; L.icoSvg = icoSvg; L.icoSkip = icoSkip;

    /* ---- 3-1. video の poster も差し替える（元の映像フレームが残るため） ---- */
    let posters = 0;
    document.querySelectorAll('video[poster]').forEach(v => {
      const r = v.getBoundingClientRect();
      const w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
      v.setAttribute('data-wf-poster', w + 'x' + h);
      v.setAttribute('poster', 'data:image/svg+xml;utf8,' + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">` +
        `<rect width="100%" height="100%" fill="${IMG_GRAY}"/></svg>`));
      posters++;
    });
    L.posters = posters;

    /* ---- 3-2. 中身が空の箱は画像スロットとみなす ---- */
    //   遅延読み込みやカルーセルで実画像を取り逃しても、ワイヤーとしては
    //   「ここに画像が入る」と分かれば足りる。無理に取りにいかず、空の箱に置く。
    let slots = 0;
    document.querySelectorAll('div,figure,span,li').forEach(el => {
      if (el.closest('[data-wf-slot]')) return;                      // 入れ子は親だけでよい
      if (el.hasAttribute('data-wf-id') || el.hasAttribute('data-wf-bg')) return;
      if ((el.textContent || '').trim()) return;
      if (el.querySelector('img,svg,video,canvas,picture,[data-wf-id],[data-wf-bg]')) return;
      const r = el.getBoundingClientRect();
      if (r.width < 80 || r.height < 60) return;
      const cs = getComputedStyle(el);
      if (cs.backgroundImage !== 'none') return;
      const bc = cs.backgroundColor;
      if (bc && bc !== 'transparent' && !/,\s*0\)$/.test(bc)) return;  // 既に色が付いている面は触らない
      el.setAttribute('data-wf-slot', '');
      slots++;
    });
    L.slots = slots;

    /* ---- 4. テキストをダミーに（アイコンフォントのリガチャは除外） ---- */
    const JP = 'ダミーテキスト';
    const isIcon = (el) => {
      const ff = getComputedStyle(el).fontFamily || '';
      return /material|icon|fontawesome|fa-/i.test(ff) || /material|icon|fa-/i.test(el.className || '');
    };
    const dummy = (s) => {
      const t = s.trim();
      if (!t) return s;
      const lead = s.match(/^\s*/)[0], tail = s.match(/\s*$/)[0];
      let out;
      if (/[぀-ヿ一-鿿]/.test(t)) {                       // 和文：長さを合わせて詰める
        out = JP.repeat(Math.ceil(t.length / JP.length)).slice(0, t.length);
        if (/[。．.!！?？]$/.test(t) && out.length > 1) out = out.slice(0, -1) + '。';
      } else if (/\d/.test(t) && t.length <= 14) {          // 数字・日付：0に均す
        out = t.replace(/\d/g, '0');
      } else {                                              // 欧文
        const base = 'Dummy Text ';
        out = base.repeat(Math.ceil(t.length / base.length)).slice(0, t.length).trimEnd();
        out = out.padEnd(t.length, ' ');
      }
      return lead + out + tail;
    };
    let nodes = 0, chars = 0, reflowed = 0;
    const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const p = node.parentElement;
        if (!p) return NodeFilter.FILTER_REJECT;
        if (/^(STYLE|SCRIPT|TITLE)$/.test(p.tagName)) return NodeFilter.FILTER_REJECT;
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (isIcon(p)) return NodeFilter.FILTER_REJECT;
        if (p.closest('[data-wf-logo]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const targets = [];
    while (tw.nextNode()) targets.push(tw.currentNode);
    const lineCount = (t) => { const r = document.createRange(); r.selectNodeContents(t); return r.getClientRects().length; };
    targets.forEach(t => {
      const before = lineCount(t);
      const orig = t.nodeValue;
      chars += orig.trim().length;
      t.nodeValue = dummy(orig);
      // 元より行数が増えたら、収まるまで1文字ずつ詰める（ボタンの意図しない折り返しを防ぐ）
      if (before > 0) {
        let guard = 0;
        while (lineCount(t) > before && t.nodeValue.trim().length > 1 && guard++ < 40) {
          const v = t.nodeValue, lead = v.match(/^\s*/)[0], tail = v.match(/\s*$/)[0];
          let body = v.trim().slice(0, -1);
          if (/[。．.!！?？]$/.test(v.trim()) && body.length > 1) body = body.slice(0, -1) + '。';
          t.nodeValue = lead + body + tail;
        }
        if (guard > 0) reflowed++;
      }
      nodes++;
    });
    L.textNodes = nodes; L.chars = chars; L.reflowed = reflowed;

    /* ---- 4-2. 属性とリンク先も伏せる（aria-label・title・alt・URL） ---- */
    let attrs = 0, links = 0;
    document.querySelectorAll('[aria-label],[title],[alt],[placeholder]').forEach(el => {
      ['aria-label','title','alt','placeholder'].forEach(a => {
        const v = el.getAttribute(a);
        if (!v || !v.trim()) return;
        el.setAttribute(a, el.closest('[data-wf-logo]') ? v : dummy(v)); attrs++;
      });
    });
    // 静止PNGに置き換え済みの動的要素に残っている参照元を外す
    document.querySelectorAll('[data-freeze-id],dotlottie-player,lottie-player').forEach(el => {
      ['src','data-src','background'].forEach(a => el.removeAttribute(a));
    });
    document.querySelectorAll('a[href]').forEach(a => {
      const v = a.getAttribute('href');
      if (!v || v.startsWith('#')) return;
      a.setAttribute('href', '#'); links++;
    });
    L.attrs = attrs; L.links = links;

    /* ---- 4-3. 取りこぼしの掃除（template・遅延読み込み属性・iframe・CSSのurl()・head） ---- */
    const PIX = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    const LAZY = ['data-src','data-srcset','data-lazy-src','data-lazy-srcset','data-original',
      'data-bg','data-background','data-background-image','data-image','data-poster','srcset','sizes'];
    let lazyAttrs = 0, frames = 0, tplNodes = 0, cssUrls = 0, heads = 0;
    document.querySelectorAll('*').forEach(el => {
      LAZY.forEach(a => { if (el.hasAttribute(a)) { el.removeAttribute(a); lazyAttrs++; } });
    });
    document.querySelectorAll('iframe[src],embed[src],object[data],form[action]').forEach(el => {
      if (el.tagName === 'FORM') { el.setAttribute('action', '#'); return; }
      el.removeAttribute('src'); el.removeAttribute('data'); frames++;
    });
    // <template> の中身は querySelectorAll では拾えない（別のDocumentFragment）。ここで別途伏せる
    document.querySelectorAll('template').forEach(tpl => {
      const w = document.createTreeWalker(tpl.content, NodeFilter.SHOW_TEXT, null);
      const list = [];
      while (w.nextNode()) if (w.currentNode.nodeValue.trim()) list.push(w.currentNode);
      list.forEach(t => { t.nodeValue = dummy(t.nodeValue); tplNodes++; });
      tpl.content.querySelectorAll('*').forEach(el => {
        LAZY.forEach(a => el.removeAttribute(a));
        if (el.hasAttribute('href') && !(el.getAttribute('href') || '').startsWith('#')) el.setAttribute('href', '#');
        if (el.hasAttribute('src')) el.setAttribute('src', PIX);
        ['aria-label','title','alt','placeholder'].forEach(a => {
          const v = el.getAttribute(a);
          if (v && v.trim()) el.setAttribute(a, dummy(v));
        });
      });
    });
    // <style>に残った画像URLを透明1pxへ。
    // @font-faceの中は丸ごと触らない。Google Fontsのフォントファイルは拡張子を持たないので、
    // 拡張子で見分けようとすると本文フォントごと消し、行の高さが縮んでページが数百px短くなる。
    const rewriteUrls = css => css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (m, q, u) => {
      if (/^data:/i.test(u)) return m;
      if (/\.(woff2?|ttf|otf|eot)(\?|#|$)/i.test(u)) return m;
      cssUrls++; return 'url("' + PIX + '")';
    });
    const stripUrls = (css) => {
      const re = /@font-face\s*\{[^}]*\}/gi;
      let out = '', i = 0, m;
      while ((m = re.exec(css))) { out += rewriteUrls(css.slice(i, m.index)) + m[0]; i = m.index + m[0].length; }
      return out + rewriteUrls(css.slice(i));
    };
    document.querySelectorAll('style').forEach(st => { st.textContent = stripUrls(st.textContent); });
    document.querySelectorAll('[style]').forEach(el => {
      const v = el.getAttribute('style');
      if (v && /url\(/i.test(v)) el.setAttribute('style', stripUrls(v));
    });
    // head に残る出典サイトの痕跡（favicon・canonical・OGP・keywords）を落とす。表示には影響しない
    document.querySelectorAll('head link[rel]').forEach(l => {
      if (/stylesheet|preconnect|dns-prefetch/i.test(l.getAttribute('rel') || '')) return;
      l.remove(); heads++;
    });
    document.querySelectorAll('head meta[name],head meta[property]').forEach(m => {
      const k = (m.getAttribute('name') || m.getAttribute('property') || '').toLowerCase();
      if (/^(viewport|charset|color-scheme|theme-color|referrer)$/.test(k)) return;
      m.remove(); heads++;
    });
    L.lazyAttrs = lazyAttrs; L.frames = frames; L.tplNodes = tplNodes; L.cssUrls = cssUrls; L.heads = heads;

    /* ---- 5. 仕上げ ---- */
    document.title = 'ワイヤーフレーム';
    Array.from(document.head.childNodes).forEach(n => {
      if (n.nodeType === 8 && /static snapshot/.test(n.nodeValue)) n.remove();
    });
    // ロゴ用にPoppinsだけ足す（本文フォントは触らない）
    const f = document.createElement('link');
    f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
    document.head.appendChild(f);
    document.head.insertBefore(
      document.createComment(' ' + FA_LICENSE + ' '), document.head.firstChild);
    document.head.insertBefore(
      document.createComment(' 参考サイトの構造・レイアウト・フォント・アニメーションのみを残したワイヤーフレーム。' +
        '画像はグレーボックス、ロゴはLOGO表記、配色はモノトーン、文言・リンク先はダミーに置き換え済み。' +
        ' 出典サイトの著作物（写真・イラスト・ロゴ・文章・配色）は含まない。 '),
      document.head.firstChild);
    return L;
  }, { MONO, FLAT, FA_VIEWBOX, FA_PATH, FA_LICENSE, FA_ICONS });

  /* ---- 元サイトのフルページPNGから、画像ごとの平均色を採る ---- */
  let colors = {};
  const sampleList = [...log.shots, ...log.bgTargets.map(b => ({ ...b, id: b.id + b.pseudo }))];
  if (REF && fs.existsSync(REF) && sampleList.length) {
    try {
      colors = JSON.parse(execFileSync('python3', [path.join(__dirname, 'sample_colors.py'), REF],
        { input: JSON.stringify(sampleList), maxBuffer: 1 << 24 }).toString());
    } catch (e) { console.error('  平均色の取得に失敗（グレーで代替）:', e.message); }
  }

  /* ---- プレースホルダを流し込む ---- */
  const placed = await page.evaluate(({ shots, bgTargets, colors, MONO, FA_VIEWBOX, FA_PATH }) => {
    const lum = (c) => 0.299 * c[0] + 0.587 * c[1] + 0.114 * c[2];
    const hex = (c) => '#' + c.map(v => Math.max(0, Math.min(255, v)).toString(16).padStart(2, '0')).join('');
    let n = 0, withColor = 0;
    for (const sh of shots) {
      const im = document.querySelector(`[data-wf-id="${sh.id}"]`);
      if (!im) continue;
      const c = (!MONO && colors[sh.id]) ? colors[sh.id] : [217, 217, 217];
      if (!MONO && colors[sh.id]) withColor++;
      const bg = hex(c);
      const ink = lum(c) > 150 ? '#000000' : '#ffffff';
      const scale = sh.w / sh.nw || 1;            // 表示倍率。画面上の見た目を一定に保つ
      const W = sh.nw, H = sh.nh;
      const fs = Math.max(8, Math.min(Math.round(11 / scale), Math.round(Math.min(W, H) / 4)));
      const pad = fs;
      // 画像であることを示すアイコン（24x24のグリフを自前で描く／外部ライブラリなし）
      const g = Math.min(Math.min(W, H) * 0.32, 88 / scale);   // 画面上で88pxを超えない
      const gx = (W - g) / 2, gy = (H - g) / 2;
      const vb = FA_VIEWBOX.split(' ').map(Number);
      const icon = (sh.w > 56 && sh.h > 44)
        ? `<g transform="translate(${gx.toFixed(1)},${gy.toFixed(1)}) scale(${(g / vb[2]).toFixed(5)})">` +
          `<path d="${FA_PATH}" fill="${ink}" fill-opacity="0.30"/></g>`
        : '';
      const label = (sh.w > fs * 9 * scale && sh.h > fs * 3 * scale)
        ? `<text x="${W - pad}" y="${H - pad}" text-anchor="end" font-family="Poppins,sans-serif" font-size="${fs}" letter-spacing="0.08em" fill="${ink}" fill-opacity="0.55">${W}×${H}</text>`
        : '';
      im.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">` +
        `<rect width="100%" height="100%" fill="${bg}"/>${icon}${label}</svg>`);
      im.setAttribute('alt', '');
      im.setAttribute('data-wf-img', bg);
      n++;
    }
    // CSS背景（::before/::after 含む）にも平均色とアイコンを当てる
    const iconURI = (ink) => 'data:image/svg+xml;utf8,' + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${FA_VIEWBOX}">` +
      `<path d="${FA_PATH}" fill="${ink}" fill-opacity="0.30"/></svg>`);
    const rules = [];
    for (const b of bgTargets) {
      const c = (!MONO && colors[b.id + b.pseudo]) ? colors[b.id + b.pseudo] : [217, 217, 217];
      const bg = hex(c);
      const sel = `[data-wf-bg="${b.id}"]${b.pseudo}`;
      if (b.w > 56 && b.h > 44) {
        const g = Math.round(Math.min(Math.min(b.w, b.h) * 0.32, 88));
        const ink = lum(c) > 150 ? '#000000' : '#ffffff';
        rules.push(`${sel}{background-image:url("${iconURI(ink)}"),linear-gradient(${bg},${bg})!important;` +
          `background-repeat:no-repeat,no-repeat!important;background-position:center,center!important;` +
          `background-size:${g}px ${g}px,auto!important}`);
      } else {
        rules.push(`${sel}{background-image:linear-gradient(${bg},${bg})!important}`);
      }
    }
    if (document.querySelector('[data-wf-slot]')) {
      rules.push(`[data-wf-slot]{background-color:#e4e4e4!important;` +
        `background-image:url("${iconURI('#000000')}")!important;background-repeat:no-repeat!important;` +
        `background-position:center!important;background-size:56px 56px!important}`);
    }
    if (rules.length) {
      const st = document.createElement('style');
      st.setAttribute('data-from', 'wf-bg');
      st.textContent = rules.join('\n');
      document.head.appendChild(st);
    }
    return { n, withColor, bgs: rules.length };
  }, { shots: log.shots, bgTargets: log.bgTargets, colors, MONO, FA_VIEWBOX, FA_PATH });
  log.placed = placed.n; log.withColor = placed.withColor; log.bgs = placed.bgs;

  const html = '<!DOCTYPE html>\n' + await page.evaluate(() => document.documentElement.outerHTML);
  await browser.close();
  fs.writeFileSync(OUT, html);
  console.log(`${path.basename(IN)} → ${path.basename(OUT)}`);
  console.log(`  アイコン  Font Awesomeに統一：フォント ${log.icoFont}件 ／ SVG ${log.icoSvg}件（判別できず据え置き ${log.icoSkip}件）`);
  console.log(`  装飾      ${FLAT ? '影・ぼかし・角丸を除去（--flat）' : '元のまま維持'}`);
  console.log(`  配色      ${MONO ? 'モノトーン化' : '元のまま維持'}（<style> ${log.styleBlocks}ブロック）`);
  console.log(`  画像      ${log.placed}枚を置換（うち ${log.withColor}枚は元画像の平均色）／ CSS背景も平均色に ／ 空スロット ${log.slots}箇所 ／ video poster ${log.posters}件 ／ ロゴ ${log.logo}件をLOGO表記に`);
  console.log(`  テキスト  ${log.textNodes}ノード ${log.chars}文字をダミーに（うち ${log.reflowed}件は折り返さないよう詰めた）`);
  console.log(`  属性      aria-label等 ${log.attrs}件をダミーに ／ リンク先 ${log.links}件を # に`);
  console.log(`  掃除      遅延属性 ${log.lazyAttrs}件 ／ template内 ${log.tplNodes}ノード ／ CSSのurl() ${log.cssUrls}件 ／ iframe等 ${log.frames}件 ／ head ${log.heads}件`);
  console.log(`  アニメ    ${log.animation === 'restored' ? '停止を解除（動きを復元）' : '（停止指定なし）'}`);
  console.log(`  サイズ    ${(fs.statSync(OUT).size/1024).toFixed(0)}KB`);
})().catch(e => { console.error('ERR', e.stack); process.exit(1); });
