#!/usr/bin/env node
/**
 * wire.js（--flat --mono）の出力を、このライブラリのルールに揃えた「ページ丸ごとの型」にする。
 *
 *   node tools/pagefy.mjs <wire出力.html> <page/page-0NN.html> --title "page-0NN｜用途"
 *
 * やること（どれもレイアウトの寸法は動かさない）
 *   1. @font-face を全部落とす（データURIのフォントが重い。落とせば次の置換で標準フォントに落ちる）
 *   2. font-family の指定を Noto Sans JP に置き換える（Poppins を含む指定＝ロゴだけ残す）
 *      → 共通仕様「和文 Noto Sans JP／欧文・数字 Poppins」に揃う
 *   3. Google Fonts（Noto Sans JP・Poppins）の読み込みを head に足す
 *   4. <title> を差し替え、description 等の残りメタを落とす
 *
 * 配色は wire.js --mono がモノトーン8段階に寄せ済み。文言・画像・ロゴ・リンク先も
 * wire.js がダミー化済み。ここでは触らない。
 */
import { readFileSync, writeFileSync } from 'node:fs';

const [inPath, outPath] = process.argv.slice(2);
const ti = process.argv.indexOf('--title');
const title = ti > 0 ? process.argv[ti + 1] : 'page';
if (!inPath || !outPath) {
  console.error('使い方: node tools/pagefy.mjs <wire出力.html> <出力.html> --title "page-001｜用途"');
  process.exit(2);
}

let s = readFileSync(inPath, 'utf8');
const before = s.length;

// 1. @font-face を落とす（入れ子の {} を持たないので単純に消せる）
let nFace = 0;
s = s.replace(/@font-face\s*\{[^}]*\}/g, () => { nFace++; return ''; });

// 2. font-family を置き換える（Poppins を含むもの＝ロゴ用は残す）
let nFont = 0;
s = s.replace(/font-family\s*:\s*([^;}"']*(?:"[^"]*"[^;}]*|'[^']*'[^;}]*)*)(?=[;}])/g, (m, val) => {
  if (/poppins/i.test(val)) return m;
  nFont++;
  return 'font-family:"Noto Sans JP",sans-serif';
});

// 3. Google Fonts を head に足す（すでにあれば足さない）
if (!/fonts\.googleapis\.com\/css2\?[^"']*Noto\+Sans\+JP/.test(s)) {
  s = s.replace(/<head([^>]*)>/i, `<head$1>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700;900&family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">`);
}

// 4. title を差し替え、残っていがちなメタを落とす
s = s.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
s = s.replace(/<meta\s+(?:name|property)=["'](?:description|og:[^"']*|twitter:[^"']*|theme-color)["'][^>]*>\s*/gi, '');
s = s.replace(/<link\s+rel=["'](?:canonical|alternate|icon|apple-touch-icon[^"']*)["'][^>]*>\s*/gi, '');
// 元サイト由来の preconnect / prefetch を落とす（残してよいのは Google Fonts だけ）
s = s.replace(/<link\s+rel=["'][^"']*(?:preconnect|prefetch|preload)[^"']*["'][^>]*>\s*/gi,
  m => /fonts\.googleapis|fonts\.gstatic/.test(m) ? m : '');

writeFileSync(outPath, s);
console.log(`${outPath}  ${(before/1024).toFixed(0)}KB → ${(s.length/1024).toFixed(0)}KB  (@font-face ${nFace}件 / font-family ${nFont}件を置換)`);
