#!/usr/bin/env node
/**
 * 型のHTMLを1440×800で開いて、レイアウトの数値だけを測る。
 *
 *   node tools/measure.mjs            … 全部測って data/types.json に書く
 *   node tools/measure.mjs col3/col3-001.html   … 1枚だけ測って表示する
 *
 * 測るのは位置・幅・間隔・文字サイズ。文言も色も持ち出さない（もともとダミー）。
 */
import puppeteer from 'puppeteer-core';
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const DIRS = {
  pagetitle: '下層ページタイトル', mv: 'メインビジュアル',
  col1: '1カラム', col2: '2カラム', col3: '3カラム', col4: '4カラム', col5: '5カラム',
  news: 'お知らせ', footer: 'フッター', page: 'ページ丸ごと',
};

/** <style> の2つめのコメントから、型の名前と説明を取り出す */
function readNote(src) {
  const blocks = [...src.matchAll(/\/\* ={5,}\s*\n([\s\S]*?)\s*={5,} \*\//g)].map(m => m[1]);
  const b = blocks[1] || '';
  const lines = b.split('\n').map(l => l.replace(/^\s+/, '').trim()).filter(Boolean);
  if (!lines.length) return { name: '', desc: '', notes: [] };
  const head = lines[0].replace(/^\d+\s+/, '');
  const [name, desc] = head.split(/\s*\/\s*/);
  return { name: (name || '').trim(), desc: (desc || '').trim(), notes: lines.slice(1) };
}

const measureInPage = () => {
  const wf = document.querySelector('.wf');
  const round = n => Math.round(n);
  const vis = el => { const c = getComputedStyle(el), r = el.getBoundingClientRect();
    return c.display !== 'none' && c.visibility !== 'hidden' && r.width > 0 && r.height > 0; };
  const rgb = v => { const m = /rgba?\(([^)]+)\)/.exec(v || ''); if (!m) return null;
    const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
    if (p.length >= 4 && p[3] < .15) return null;
    return '#' + p.slice(0, 3).map(n => round(n).toString(16).padStart(2, '0')).join(''); };

  // ---- ページ丸ごとの型：セクションの並びを見る ----
  if (!wf) {
    const V = { w: innerWidth };
    let host = null, best = 0;
    for (const el of document.querySelectorAll('body, body *')) {
      let n = 0;
      for (const k of el.children) { const r = k.getBoundingClientRect();
        if (r.width >= V.w * .95 && r.height >= 120 && vis(k)) n++; }
      if (n > best) { best = n; host = el; }
    }
    const sections = [];
    if (host) for (const el of host.children) {
      if (!vis(el)) continue;
      const r = el.getBoundingClientRect();
      if (r.height < 100) continue;
      let cols = 0;
      for (const c of el.querySelectorAll('*')) {
        const cs = getComputedStyle(c);
        if (!/flex|grid/.test(cs.display)) continue;
        const k = [...c.children].filter(vis).map(x => x.getBoundingClientRect());
        if (k.length < 2 || k[0].width < 140 || k[0].height < 80) continue;
        if (k.some(x => Math.abs(x.width - k[0].width) > 12)) continue;
        cols = Math.max(cols, Math.min(k.length, 6));
      }
      const head = [...el.querySelectorAll('h1,h2,h3')].find(h => (h.innerText || '').trim().length > 1);
      let align = null;
      if (head) { const hr = head.getBoundingClientRect();
        const c = (hr.left + hr.right) / 2 - r.left;
        align = Math.abs(c - r.width / 2) < r.width * .06 ? '中央' : (c < r.width / 2 ? '左' : '右'); }
      sections.push({ h: round(r.height / 20) * 20, cols, align,
        img: !!el.querySelector('img,picture,svg'), bg: rgb(getComputedStyle(el).backgroundColor) });
    }
    return { kind: 'page', h: round(document.body.scrollHeight), sections: sections.slice(0, 20) };
  }

  // ---- セクションの型：1440×800のアートボードの中を見る ----
  const R = wf.getBoundingClientRect();
  const rel = el => { const r = el.getBoundingClientRect();
    return { x: round(r.left - R.left), y: round(r.top - R.top), w: round(r.width), h: round(r.height) }; };

  // 横並び（幅のそろった兄弟が2つ以上）
  const cols = [];
  for (const el of wf.querySelectorAll('*')) {
    if (!vis(el)) continue;
    const cs = getComputedStyle(el);
    if (!/flex|grid/.test(cs.display)) continue;
    const kids = [...el.children].filter(vis);
    if (kids.length < 2) continue;
    const b = kids.map(k => k.getBoundingClientRect());
    if (b[0].width < 80 || b.some(x => Math.abs(x.width - b[0].width) > 4)) continue;
    const gap = kids.length > 1 ? round(b[1].left - b[0].right) : 0;
    cols.push({ ...rel(el), n: kids.length, cw: round(b[0].width), gap });   // cw＝1列の幅
  }
  cols.sort((a, b) => b.cw * b.n - a.cw * a.n);

  // 画像の枠
  const imgs = [...wf.querySelectorAll('.img,.ph,img')].filter(vis).map(el => {
    const r = rel(el); return { ...r, ratio: r.h ? +(r.w / r.h).toFixed(2) : null };
  }).filter(i => i.w > 40 && i.h > 40);

  // 直下のかたまり（縦の組み立て）
  const groups = [...wf.children].filter(vis).map(el => {
    const r = rel(el);
    const heads = [...el.querySelectorAll('h1,h2,h3,h4')].filter(vis);
    const col = cols.find(c => c.y >= r.y - 2 && c.y <= r.y + r.h);
    let label = '文字';
    if (col && col.x >= r.x - 2) label = `${col.n}列`;
    else if (heads.length) label = '見出し';
    else if (el.querySelector('.img,.ph,img')) label = '画像';
    return { ...r, label, heads: heads.length };
  }).sort((a, b) => a.y - b.y);

  // 文字の段
  const type = {};
  for (const el of wf.querySelectorAll('*')) {
    if (!vis(el)) continue;
    const own = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join('');
    if (own.length < 2) continue;
    const cs = getComputedStyle(el);
    const fs = round(parseFloat(cs.fontSize));
    const lh = parseFloat(cs.lineHeight);
    const key = `${fs}/${lh ? +(lh / fs).toFixed(2) : '-'}/${cs.fontWeight}`;
    type[key] = (type[key] || 0) + own.length;
  }

  return {
    kind: 'section',
    board: { w: round(R.width), h: round(R.height) },
    bg: rgb(getComputedStyle(wf).backgroundColor) || '#ffffff',
    inner: (() => { const i = wf.querySelector('.wf__inner');
      return i ? { x: round(i.getBoundingClientRect().left - R.left), w: round(i.getBoundingClientRect().width) } : null; })(),
    groups, cols: cols.slice(0, 3), imgs: imgs.slice(0, 6),
    type: Object.entries(type).sort((a, b) => b[1] - a[1]).slice(0, 6)
      .map(([k]) => { const [fs, lh, w] = k.split('/'); return { fs: +fs, lh: lh === '-' ? null : +lh, weight: +w }; })
      .sort((a, b) => b.fs - a.fs),
  };
};

const only = process.argv[2];
const files = only ? [only]
  : Object.keys(DIRS).flatMap(d => existsSync(d)
      ? readdirSync(d).filter(f => f.endsWith('.html')).sort().map(f => `${d}/${f}`) : []);

const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new',
  args: ['--no-sandbox', '--hide-scrollbars'], protocolTimeout: 600000 });
const page = await browser.newPage();
const out = {};
for (const f of files) {
  const dir = f.split('/')[0];
  await page.setViewport({ width: 1440, height: dir === 'page' ? 900 : 800, deviceScaleFactor: 1 });
  await page.goto('file://' + resolve(f), { waitUntil: 'networkidle2', timeout: 60000 }).catch(() => {});
  await new Promise(r => setTimeout(r, dir === 'page' ? 900 : 350));
  const m = await page.evaluate(measureInPage).catch(e => ({ error: String(e) }));
  const id = f.split('/')[1].replace('.html', '');
  out[id] = { id, file: f, dir, cat: DIRS[dir], ...readNote(readFileSync(f, 'utf8')), ...m };
  process.stderr.write(`\r${Object.keys(out).length}/${files.length} ${id}   `);
}
await browser.close();
process.stderr.write('\n');

if (only) { console.log(JSON.stringify(Object.values(out)[0], null, 2)); }
else {
  if (!existsSync('data')) mkdirSync('data');
  writeFileSync('data/types.json', JSON.stringify(out, null, 2));
  console.log(`data/types.json に ${Object.keys(out).length}件`);
}
