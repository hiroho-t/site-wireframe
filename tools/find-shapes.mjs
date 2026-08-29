#!/usr/bin/env node
/**
 * トレースしたワイヤーフレームから「型にする価値のある繰り返しセクション」を洗い出す。
 *
 *   node tools/find-shapes.mjs "参考サイト｜○○/ワイヤーフレーム.html"
 *   node tools/find-shapes.mjs 参考サイト｜＊ /ワイヤーフレーム.html --min 6   （＊はシェルのワイルドカード）
 *
 * ヘッダー・グローバルナビ・フッター・パンくずは除外する（型にしないため）。
 * 出力は「件数 ／ 画像の有無 ／ クラス名 ／ 中身の例」。
 * カタログのどのかたち（SELECT.md 6章の①〜⑤）に当たるかも出す。
 *
 * 依存なし。Node 18+ で動く。
 */
import { readFileSync } from 'node:fs';

const VOID = new Set(['br','img','input','hr','meta','link','source','path','circle','rect','use','col','area','embed','track','wbr']);
const CHROME = /(^|[-_])(g?nav|header|footer|breadcrumb|pankuzu|drawer|hamburger|menu|megamenu|globalnav|utility|sitemap|pagetop|totop|cookie|modal)([-_]|$)/i;

/** ざっくりDOMを組む（属性はclassだけ見る） */
function parse(html) {
  const root = { tag: 'root', cls: '', kids: [], txt: '', hasImg: false };
  const stack = [root];
  const re = /<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>|([^<]+)/g;
  let m;
  while ((m = re.exec(html))) {
    const [, close, tag, attrs, selfClose, text] = m;
    const cur = stack[stack.length - 1];
    if (text !== undefined) { cur.txt += text; continue; }
    const t = tag.toLowerCase();
    if (close) {
      if (VOID.has(t)) continue;
      for (let i = stack.length - 1; i > 0; i--) {
        if (stack[i].tag === t) { stack.length = i; break; }
      }
      continue;
    }
    const cm = /class\s*=\s*["']([^"']*)["']/i.exec(attrs || '');
    const node = { tag: t, cls: cm ? cm[1] : '', kids: [], txt: '', hasImg: t === 'img' };
    cur.kids.push(node);
    if (!VOID.has(t) && !selfClose) stack.push(node);
  }
  return root;
}

/** 子孫のテキストと画像有無を畳み込む */
function fold(n) {
  let txt = n.txt, img = n.hasImg;
  for (const k of n.kids) { const [t, i] = fold(k); txt += t; img = img || i; }
  n.allTxt = txt.replace(/\s+/g, ' ').trim();
  n.allImg = img;
  return [txt, img];
}

const firstClass = c => (c || '').trim().split(/\s+/)[0] || '';
const isChrome = n => CHROME.test(n.cls || '') || ['header','footer','nav'].includes(n.tag);

function shapes(html, min) {
  const body = html.split(/<body[^>]*>/i)[1] ?? html;
  const root = parse(body.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, ''));
  fold(root);
  const out = new Map();
  const walk = (n, inChrome) => {
    const chrome = inChrome || isChrome(n);
    if (!chrome) {
      const groups = new Map();
      for (const k of n.kids) {
        const c = firstClass(k.cls);
        if (!c) continue;
        (groups.get(c) ?? groups.set(c, []).get(c)).push(k);
      }
      for (const [cls, kids] of groups) {
        if (kids.length < min) continue;
        const withText = kids.filter(k => (k.allTxt || '').length >= 2);
        if (withText.length < min) continue;
        const imgs = kids.filter(k => k.allImg).length;
        const prev = out.get(cls);
        if (!prev || kids.length > prev.n) {
          out.set(cls, {
            n: kids.length,
            img: imgs >= kids.length / 2,
            parent: firstClass(n.cls) || n.tag,
            sample: kids.slice(0, 3).map(k => (k.allTxt || '').slice(0, 16)).join(' / '),
          });
        }
      }
    }
    for (const k of n.kids) walk(k, chrome);
  };
  walk(root, false);
  return [...out.entries()].map(([cls, v]) => ({ cls, ...v })).sort((a, b) => b.n - a.n);
}

/** SELECT.md 6章のかたち分類 */
function shapeLabel({ n, img }) {
  if (!img && n >= 8) return '① テキストだけで8件以上  ← 足りていないかたち';
  if (!img && n >= 4) return '② テキストだけで4〜7件';
  if (!img) return '③ テキストだけで2〜3件';
  if (n >= 6) return '④ 画像つき6件以上';
  return '⑤ 画像つき3〜5件（もう足りている）';
}

const args = process.argv.slice(2);
const mi = args.indexOf('--min');
const min = mi >= 0 ? Number(args[mi + 1]) : 4;
const files = args.filter((a, i) => !a.startsWith('--') && i !== mi + 1);
if (!files.length) {
  console.error('使い方: node tools/find-shapes.mjs <ワイヤーフレーム.html> [--min 4]');
  process.exit(2);
}

for (const f of files) {
  const name = f.includes('｜') ? f.split('｜')[1].split('/')[0] : f;
  console.log(`\n=== ${name} ===`);
  let rows;
  try { rows = shapes(readFileSync(f, 'utf8'), min); }
  catch (e) { console.log('  読めない:', e.message); continue; }
  if (!rows.length) { console.log(`  ${min}件以上の繰り返し（ナビ・フッターを除く）：なし`); continue; }
  for (const r of rows.slice(0, 8)) {
    console.log(`  ${String(r.n).padStart(3)}件  ${r.img ? '画像あり' : 'テキスト'}  .${r.cls}  （親 .${r.parent}）`);
    console.log(`        ${shapeLabel(r)}`);
    if (r.sample) console.log(`        例: ${r.sample}`);
  }
}
console.log('');
