#!/usr/bin/env node
/**
 * 組んだワイヤーから、元原稿の文が落ちていないかを突き合わせる。
 *
 *   node tools/check-copy.mjs 元原稿.html 組んだワイヤー.html
 *
 * 型が受けられる件数を超えた情報を入れようとすると、たいてい原稿のほうを削って
 * 型に収めてしまう。それが起きていないかを最後に必ず見るためのもの。
 *
 * 依存なし。Node 18+ で動く。
 */
import { readFileSync } from 'node:fs';

const BLOCK = 'p|div|section|article|header|footer|nav|main|aside|h[1-6]|li|dt|dd|dl|ul|ol|tr|td|th|span|a|br|figcaption';
const SPLIT = '@@WFSPLIT@@';

/** HTML → ブロック境界で区切ったテキスト片の配列 */
function pieces(html) {
  let s = html;
  s = s.replace(/<!--[\s\S]*?-->/g, '');
  s = s.replace(/<script[\s\S]*?<\/script>/gi, '');
  s = s.replace(/<style[\s\S]*?<\/style>/gi, '');
  s = s.replace(/<head[\s\S]*?<\/head>/gi, '');
  s = s.replace(new RegExp(`</?(?:${BLOCK})\\b[^>]*>`, 'gi'), SPLIT);
  s = s.replace(/<[^>]+>/g, '');
  s = s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  return s.split(SPLIT)
    .map(t => t.replace(/\s+/g, ''))
    .filter(Boolean);
}

/** テキスト片 → 文（。区切り、12文字以上のものだけ見る）
 *  ・「画像：〜」はグレーボックスの差し替え指示なので本文として数えない
 *  ・「A／B／C」と並べた一覧は1件ずつに割って数える（並べ方が変わっても拾えるように） */
function sentences(html) {
  const out = new Set();
  for (const p of pieces(html)) {
    if (/^画像[:：]/.test(p)) continue;
    const chunks = (p.match(/／/g) || []).length >= 3 ? p.split('／') : [p];
    for (const c of chunks) {
      for (const raw of c.split('。')) {
        const t = raw.trim();
        if (t.length >= 12) out.add(t);
      }
    }
  }
  return [...out];
}

/** 比較用に正規化（記号ゆれを吸収） */
const norm = t => t
  .replace(/[〜～]/g, '〜').replace(/[（(]/g, '(').replace(/[）)]/g, ')')
  .replace(/[・･]/g, '・').replace(/[／/]/g, '/').replace(/　/g, '');

const [srcPath, pagePath] = process.argv.slice(2);
if (!srcPath || !pagePath) {
  console.error('使い方: node tools/check-copy.mjs 元原稿.html 組んだワイヤー.html');
  process.exit(2);
}

const src = sentences(readFileSync(srcPath, 'utf8'));
const pageHtml = readFileSync(pagePath, 'utf8');
const page = norm(pieces(pageHtml).join(''));

const missing = src.filter(t => !page.includes(norm(t)));

console.log(`元原稿の文: ${src.length}（12文字以上）`);
console.log(`落ちている文: ${missing.length}`);
if (missing.length) {
  console.log('');
  for (const m of missing) console.log('  ・' + m.slice(0, 78) + (m.length > 78 ? '…' : ''));
  console.log('');
  console.log('→ 型に入らないから削った、という状態になっていないか確認する。');
  console.log('  入らないなら型を選び直す。原稿は削らない。（SELECT.md 6章）');
}

// 全角スペースが残っていないか（共通ルール）
const ideo = (pageHtml.match(/　/g) || []).length;
if (ideo) console.log(`\n※ 全角スペースが ${ideo} 個ある。折り返したとき行頭に残る。.sep か要素分けに置き換える。`);

process.exit(missing.length ? 1 : 0);
