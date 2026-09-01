#!/usr/bin/env node
/**
 * data/types.json から、型ごとの「レイアウトmd」と詳細ページ、一覧を作る。
 *
 *   node tools/build-gallery.mjs
 *   → s/<id>.md ／ p/<id>.html ／ index.html（ページ丸ごと）／ sections.html（セクション）
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const T = JSON.parse(readFileSync('data/types.json', 'utf8'));
for (const d of ['s', 'p']) if (!existsSync(d)) mkdirSync(d);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const today = new Date().toLocaleDateString('sv-SE');

const RATIO = [[16, 9], [3, 2], [4, 3], [1, 1], [3, 4], [2, 3], [21, 9], [5, 2]];
const nameRatio = r => { if (!r) return '—';
  const k = RATIO.reduce((b, x) => Math.abs(x[0] / x[1] - r) < Math.abs(b[0] / b[1] - r) ? x : b, RATIO[0]);
  return Math.abs(k[0] / k[1] - r) < .12 ? k.join(':') : `${r}:1`; };

/* ---------------- レイアウトmd ---------------- */
function mdFor(t) {
  const head = `# ${t.id}｜${t.cat}${t.name ? `・${t.name}` : ''}\n\n${t.desc ? t.desc + '\n\n' : ''}`
    + `- 種類: ${t.cat}\n- 元ファイル: \`${t.file}\`\n- 実測: ${today}\n\n`
    + `このファイルはレイアウトの数値だけ。文言・写真は自分で用意する。\n\n`;

  if (t.kind === 'page') {
    return head + `## ページの高さ\n\n${t.h}px（幅1440pxのとき）\n\n`
      + `## セクションの並び\n\n| # | 高さ | 地色 | 列 | 見出し | 画像 |\n|---|---|---|---|---|---|\n`
      + (t.sections || []).map((x, i) =>
          `| ${i + 1} | ${x.h}px | ${x.bg ? `\`${x.bg}\`` : '—'} | ${x.cols >= 2 ? `${x.cols}列` : '1列'} | ${x.align || '—'} | ${x.img ? 'あり' : '—'} |`
        ).join('\n') + '\n';
  }

  const g = t.groups || [], c = t.cols?.[0], im = t.imgs || [], ty = t.type || [];
  const gaps = g.slice(1).map((x, i) => x.y - (g[i].y + g[i].h)).filter(n => n > 0);

  let md = head
    + `## 枠\n\n`
    + `- アートボード: ${t.board.w}×${t.board.h}px\n`
    + (t.inner ? `- コンテンツ幅: ${t.inner.w}px（左右 ${t.inner.x}px）\n` : '')
    + `- 地色: \`${t.bg}\`\n\n`
    + `## 縦の組み立て\n\n上からの位置と高さ。数字はそのまま \`top\` に使える。\n\n`
    + `| 上から | 高さ | 中身 |\n|---|---|---|\n`
    + g.map(x => `| ${x.y}px | ${x.h}px | ${x.label}${x.heads > 1 ? `（見出し${x.heads}個）` : ''} |`).join('\n') + '\n'
    + (gaps.length ? `\n- かたまりの間隔: ${[...new Set(gaps)].join(' / ')}px\n` : '')
    + (g.length ? `- 最後のかたまりの下端は ${g[g.length - 1].y + g[g.length - 1].h}px（下の余白 ${t.board.h - (g[g.length - 1].y + g[g.length - 1].h)}px）\n` : '');

  if (c) md += `\n## 横の並び\n\n- ${c.n}列／1列 ${c.cw}px／間隔 ${c.gap}px（${c.n}×${c.cw}＋${c.n - 1}×${c.gap}＝${c.n * c.cw + (c.n - 1) * c.gap}px）\n`
    + `- 置く位置: 左 ${c.x}px・上 ${c.y}px\n`;

  if (im.length) {
    const m = new Map();
    for (const i of im) { const k = `${i.w}x${i.h}`; if (m.has(k)) m.get(k).n++; else m.set(k, { ...i, n: 1 }); }
    md += `\n## 画像の枠\n\n| 大きさ | 比率 | 枚数 | 最初の位置 |\n|---|---|---|---|\n`
      + [...m.values()].slice(0, 4).map(i => `| ${i.w}×${i.h} | ${nameRatio(i.ratio)} | ${i.n} | 左${i.x}・上${i.y} |`).join('\n') + '\n';
  }

  if (ty.length) md += `\n## 文字の段\n\n| サイズ | 行間 | 太さ |\n|---|---|---|\n`
    + ty.map(x => `| ${x.fs}px | ${x.lh ?? '—'} | ${x.weight} |`).join('\n') + '\n';

  if (t.notes?.length) md += `\n## 元の設計メモ\n\n${t.notes.map(n => `- ${n}`).join('\n')}\n`;

  md += `\n## そのまま使う骨格\n\n\`\`\`css\n`
    + `.sec{ position:relative; width:${t.board.w}px; height:${t.board.h}px; background:${t.bg} }\n`
    + g.map((x, i) => `.sec__g${i + 1}{ position:absolute; left:${x.x}px; top:${x.y}px; width:${x.w}px }`).join('\n') + '\n'
    + (c ? `.sec__cols{ display:flex; gap:${c.gap}px }\n.sec__col{ width:${c.cw}px }\n` : '')
    + (im[0] ? `.sec__img{ width:${im[0].w}px; height:${im[0].h}px; background:#d9d9d9 }\n` : '')
    + `\`\`\`\n\n`
    + `## 守ること\n\n`
    + `- 数字を丸めない。${t.inner ? `左右は ${t.inner.x}px、` : ''}かたまりの上端は上の表のとおりに置く。\n`
    + (c ? `- ${c.n}列は等幅（${c.cw}px）。間隔 ${c.gap}px を変えると合計が ${t.inner?.w ?? t.board.w}px に収まらなくなる。\n` : '')
    + `- 文字は上の段だけを使う。中間のサイズを足さない。\n`;
  return md;
}

/* ---------------- 詳細ページ ---------------- */
function pageFor(t) {
  const md = mdFor(t);
  const g = t.groups || [], c = t.cols?.[0];
  const bars = t.kind === 'section' && g.length ? `<div class="board">
      ${g.map((x, i) => `<div class="blk" style="left:${x.x / t.board.w * 100}%;top:${x.y / t.board.h * 100}%;width:${x.w / t.board.w * 100}%;height:${x.h / t.board.h * 100}%">
        <span>${esc(x.label)}</span><em>${x.y} / ${x.h}</em></div>`).join('')}
    </div>` : '';

  return `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(t.id)} のレイアウト｜site-wireframe</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  :root{--bg:#fff;--ink:#141414;--sub:#767676;--line:#e6e4e2;--field:#f4f3f1;--r:6px}
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:var(--bg);color:var(--ink);font-family:"Noto Sans JP",sans-serif;line-height:1.9;-webkit-font-smoothing:antialiased}
  a{color:inherit}
  .top{padding:20px 32px;border-bottom:1px solid var(--line);font-size:12px;color:var(--sub)}
  .top a{text-decoration:none}.top a:hover{text-decoration:underline}
  .wrap{display:grid;grid-template-columns:minmax(0,1fr) 400px;gap:40px;padding:32px;align-items:start}
  section{padding:28px 0;border-top:1px solid var(--line)}
  section:first-of-type{border-top:0;padding-top:0}
  h1{font-size:24px;font-weight:700;line-height:1.5}
  h2{font-size:12px;font-weight:700;letter-spacing:.16em;color:var(--sub);margin-bottom:18px}
  .lead{margin-top:10px;font-size:14px;color:var(--sub);max-width:640px}
  .tags{display:flex;gap:6px;margin-top:14px}
  .tags span{font-size:11px;color:var(--sub);border:1px solid var(--line);border-radius:99px;padding:3px 10px}
  .frame{border:1px solid var(--line);border-radius:10px;overflow:hidden;background:var(--field);aspect-ratio:${t.kind === 'page' ? '1440/900' : '1440/800'}}
  .frame iframe{width:100%;height:100%;border:0;display:block;background:#e9e9e9}
  .board{position:relative;aspect-ratio:1440/800;border:1px solid var(--line);border-radius:8px;background:var(--field);margin-top:16px}
  .blk{position:absolute;border:1px solid var(--ink);background:#fff;display:flex;flex-direction:column;
    align-items:flex-start;justify-content:flex-start;padding:6px 8px;font-size:11px;line-height:1.5;overflow:hidden}
  .blk em{font-style:normal;color:var(--sub);font-size:10px;font-family:ui-monospace,Menlo,monospace}
  table{width:100%;border-collapse:collapse;font-size:13px}
  th{text-align:left;font-weight:500;color:var(--sub);padding:10px 0;width:180px}
  td{padding:10px 0}tr+tr th,tr+tr td{border-top:1px solid var(--line)}
  .note{font-size:12px;color:var(--sub);margin:12px 0}
  aside{position:sticky;top:32px;border:1px solid var(--line);border-radius:10px;overflow:hidden;background:#fff}
  .ahead{display:flex;gap:8px;padding:12px;border-bottom:1px solid var(--line);align-items:center}
  .ahead p{font-size:12px;font-weight:700;flex:1}
  .ahead button,.ahead a{height:32px;padding:0 12px;display:inline-flex;align-items:center;font:inherit;font-size:11px;
    font-weight:700;border-radius:var(--r);cursor:pointer;text-decoration:none;border:1px solid var(--ink);background:var(--ink);color:#fff}
  .ahead a{background:transparent;color:var(--ink);border-color:var(--line);font-weight:500}
  .ahead button.done{background:#fff;color:var(--ink)}
  pre{margin:0;padding:14px;max-height:62vh;overflow:auto;font-size:11px;line-height:1.8;
    font-family:ui-monospace,Menlo,monospace;white-space:pre-wrap;word-break:break-word;color:#333}
  @media (max-width:900px){.wrap{grid-template-columns:1fr;padding:24px 20px}aside{position:static}.top{padding:20px}}
</style></head><body>
<nav class="top"><a href="../${t.kind === 'page' ? 'index.html' : 'sections.html'}">一覧</a> ／ ${esc(t.id)}</nav>
<div class="wrap">
<main>
  <section>
    <div class="frame"><iframe src="../${esc(t.file)}" title="${esc(t.id)} のプレビュー" loading="lazy"></iframe></div>
    <h1 style="margin-top:22px">${esc(t.id)}${t.name ? `｜${esc(t.name)}` : ''}</h1>
    <p class="lead">${esc(t.desc || '')}</p>
    <div class="tags"><span>${esc(t.cat)}</span>${c ? `<span>${c.n}列</span>` : ''}${(t.imgs || []).length ? '<span>画像あり</span>' : ''}</div>
  </section>

  ${t.kind === 'section' ? `<section>
    <h2>縦の組み立て</h2>
    <table>
      <tr><th>枠</th><td>${t.board.w}×${t.board.h}px${t.inner ? `／コンテンツ幅 ${t.inner.w}px（左右 ${t.inner.x}px）` : ''}</td></tr>
      ${g.map((x, i) => `<tr><th>${i + 1}. ${esc(x.label)}</th><td>上から ${x.y}px・高さ ${x.h}px・幅 ${x.w}px</td></tr>`).join('')}
      ${c ? `<tr><th>横の並び</th><td>${c.n}列／1列 ${c.cw}px／間隔 ${c.gap}px</td></tr>` : ''}
    </table>
    ${bars}
    <p class="note">上の図は、実測した位置と高さをそのまま比率で置いたもの。</p>
  </section>` : `<section>
    <h2>セクションの並び</h2>
    <table>${(t.sections || []).map((x, i) => `<tr><th>${i + 1}</th><td>高さ ${x.h}px${x.bg ? `／地色 ${x.bg}` : ''}${x.cols >= 2 ? `／${x.cols}列` : ''}${x.align ? `／見出し${x.align}` : ''}${x.img ? '／画像あり' : ''}</td></tr>`).join('')}</table>
  </section>`}

  ${(t.type || []).length ? `<section><h2>文字の段</h2><table>
    ${t.type.map(x => `<tr><th>${x.fs}px</th><td>行間 ${x.lh ?? '—'}／太さ ${x.weight}</td></tr>`).join('')}
  </table></section>` : ''}
</main>
<aside>
  <div class="ahead"><p>レイアウトmd</p>
    <button id="copy">mdをコピー</button>
    <a href="../${esc(t.file)}" target="_blank" rel="noopener">HTML</a></div>
  <pre id="md">${esc(md)}</pre>
</aside>
</div>
<script>
document.getElementById('copy').addEventListener('click', async e => {
  const b = e.target, t = b.textContent;
  try { await navigator.clipboard.writeText(document.getElementById('md').textContent);
    b.textContent = 'コピーしました'; b.classList.add('done'); }
  catch { b.textContent = 'コピーできません'; }
  setTimeout(() => { b.textContent = t; b.classList.remove('done'); }, 1500);
});
</script>
</body></html>`;
}

/* ---------------- 一覧 ---------------- */
function listPage({ title, intro, items, self, other }) {
  const cats = [...new Set(items.map(t => t.cat))];
  return `<!DOCTYPE html>
<html lang="ja"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}｜site-wireframe</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
<style>
  :root{--bg:#fff;--ink:#141414;--sub:#767676;--line:#e6e4e2;--field:#f4f3f1;--r:6px}
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:var(--bg);color:var(--ink);font-family:"Noto Sans JP",sans-serif;line-height:1.9;-webkit-font-smoothing:antialiased}
  header{padding:40px 32px 24px;border-bottom:1px solid var(--line)}
  h1{font-size:19px;font-weight:700;letter-spacing:.04em}
  header p{margin-top:10px;font-size:13px;color:var(--sub);max-width:680px}
  header a{color:var(--ink)}
  .bar{position:sticky;top:0;z-index:5;display:flex;gap:10px;align-items:center;flex-wrap:wrap;
    padding:14px 32px;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);border-bottom:1px solid var(--line)}
  #q{flex:1 1 220px;max-width:320px;height:38px;padding:0 12px;font:inherit;font-size:13px;
    border:1px solid var(--line);border-radius:var(--r);background:var(--field);color:var(--ink)}
  #q:focus{outline:2px solid var(--ink);outline-offset:-1px;background:#fff}
  .cats{display:flex;gap:6px;flex-wrap:wrap}
  .cats button{font:inherit;font-size:12px;padding:5px 12px;border:1px solid var(--line);border-radius:99px;
    background:#fff;color:var(--ink);cursor:pointer}
  .cats button[aria-pressed=true]{background:var(--ink);color:#fff;border-color:var(--ink)}
  .count{font-size:12px;color:var(--sub);margin-left:auto}
  main{padding:28px 32px 64px}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px}
  .card{border:1px solid var(--line);border-radius:10px;overflow:hidden;background:#fff;display:flex;flex-direction:column}
  .shot{display:block;aspect-ratio:1440/800;background:var(--field);border-bottom:1px solid var(--line);position:relative}
  .shot iframe{width:100%;height:100%;border:0;display:block;pointer-events:none}
  .body{padding:12px 14px 14px;display:flex;flex-direction:column;gap:8px;flex:1}
  .name{font-size:13px;font-weight:700;line-height:1.5}
  .meta{font-size:11px;color:var(--sub);line-height:1.7}
  .act{display:flex;gap:8px;margin-top:auto}
  .act button{flex:1;height:34px;font:inherit;font-size:12px;font-weight:700;border-radius:var(--r);
    border:1px solid var(--ink);background:var(--ink);color:#fff;cursor:pointer}
  .act button:hover{opacity:.78}.act button.done{background:#fff;color:var(--ink)}
  .head{text-decoration:none;color:inherit;display:block}
  .head:hover .name{text-decoration:underline;text-underline-offset:3px}
  footer{border-top:1px solid var(--line);padding:28px 32px 56px;font-size:12px;color:var(--sub)}
  footer a{color:var(--ink)}
  @media (max-width:640px){header,.bar,main,footer{padding-left:20px;padding-right:20px}}
</style></head><body>
<header>
  <h1>${esc(title)}</h1>
  <p>${intro} ／ <a href="${self === 'index.html' ? 'sections.html' : 'index.html'}">${esc(other)}</a></p>
</header>
<div class="bar">
  <input id="q" type="search" placeholder="型番・種類・説明でしぼる" autocomplete="off">
  <div class="cats" id="cats"><button aria-pressed="true" data-c="">すべて</button>${cats.map(c => `<button aria-pressed="false" data-c="${esc(c)}">${esc(c)}</button>`).join('')}</div>
  <span class="count" id="count"></span>
</div>
<main><div class="grid" id="grid"></div></main>
<footer><p>各カードの「mdをコピー」は、その型のレイアウトを数値で書いた指示書をクリップボードに入れます。Claude Code に貼れば、そのまま組み立ての指示になります。</p></footer>
<script>
const DATA = ${JSON.stringify(items.map(t => ({ id: t.id, file: t.file, cat: t.cat, name: t.name || '', desc: t.desc || '' })))};
const grid = document.getElementById('grid'), q = document.getElementById('q'), countEl = document.getElementById('count');
let cat = '';
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function render(){
  const w = q.value.trim().toLowerCase();
  const hit = DATA.filter(t => (!cat || t.cat === cat) &&
    (!w || [t.id, t.cat, t.name, t.desc].join(' ').toLowerCase().includes(w)));
  countEl.textContent = hit.length + ' / ' + DATA.length + ' 型';
  grid.innerHTML = hit.map(t => \`
    <article class="card">
      <a class="shot" href="p/\${esc(t.id)}.html"><iframe data-src="\${esc(t.file)}" title="\${esc(t.id)}" scrolling="no"></iframe></a>
      <div class="body">
        <a class="head" href="p/\${esc(t.id)}.html">
          <p class="name">\${esc(t.id)}\${t.name ? '｜' + esc(t.name) : ''}</p>
          <p class="meta">\${esc(t.cat)}\${t.desc ? ' ／ ' + esc(t.desc) : ''}</p>
        </a>
        <div class="act"><button data-id="\${esc(t.id)}">mdをコピー</button></div>
      </div>
    </article>\`).join('');
  lazy();
}
// プレビューは画面に入ってから読み込む（167枚を一度に開かない）
let io;
function lazy(){
  io?.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const f = e.target; if (f.dataset.src){ f.src = f.dataset.src; delete f.dataset.src; }
    io.unobserve(f);
  }), { rootMargin: '400px' });
  grid.querySelectorAll('iframe[data-src]').forEach(f => io.observe(f));
}
q.addEventListener('input', render);
document.getElementById('cats').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  cat = b.dataset.c;
  document.querySelectorAll('#cats button').forEach(x => x.setAttribute('aria-pressed', x === b));
  render();
});
grid.addEventListener('click', async e => {
  const b = e.target.closest('button[data-id]'); if (!b) return;
  const t = b.textContent;
  try { const md = await fetch('s/' + b.dataset.id + '.md').then(r => r.text());
    await navigator.clipboard.writeText(md); b.textContent = 'コピーしました'; b.classList.add('done'); }
  catch { b.textContent = 'コピーできません'; }
  setTimeout(() => { b.textContent = t; b.classList.remove('done'); }, 1500);
});
render();
</script>
</body></html>`;
}

/* ---------------- 書き出し ---------------- */
const all = Object.values(T);
let n = 0;
for (const t of all) {
  if (t.error || !t.kind) { console.warn('skip', t.id, t.error || 'no measurement'); continue; }
  writeFileSync(`s/${t.id}.md`, mdFor(t));
  writeFileSync(`p/${t.id}.html`, pageFor(t));
  n++;
}
const pages = all.filter(t => t.dir === 'page' && t.kind);
const secs = all.filter(t => t.dir !== 'page' && t.kind);

writeFileSync('index.html', listPage({
  title: 'ページ丸ごとの型',
  intro: '実在サイトのトップページを、白黒グレー・ダミーテキストのルールに整えた完成ページ。カードから<strong>レイアウトmdをコピー</strong>して Claude Code に貼れば、そのまま組み立ての指示になります',
  items: pages, self: 'index.html', other: 'セクションの型を見る',
}));
writeFileSync('sections.html', listPage({
  title: 'セクションの型',
  intro: '1440×800で実測した、セクション単位のワイヤーフレーム。カードから<strong>レイアウトmdをコピー</strong>して Claude Code に貼れば、そのまま組み立ての指示になります',
  items: secs, self: 'sections.html', other: 'ページ丸ごとの型を見る',
}));

console.log(`s/*.md と p/*.html を ${n}件、index.html（${pages.length}）と sections.html（${secs.length}）を更新`);
