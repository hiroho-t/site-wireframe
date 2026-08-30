#!/usr/bin/env node
/**
 * ページ型のグレーボックスに Unsplash の写真を入れる。
 *
 *   node tools/photofy.mjs page/page-001.html --theme office
 *   node tools/photofy.mjs page/page-0*.html --theme auto
 *
 * 写真がないとレイアウトの良し悪しが判断しづらいので、公開する page/ にも写真を入れる。
 * 入れるのは wire.js が置いたグレーの矩形プレースホルダだけ。
 * アイコン（<path> を持つSVG）とロゴのLOGO表記には触らない。
 *
 * ・Unsplash の画像CDN（images.unsplash.com）を、枠の実寸に合わせて fit=crop で読む
 * ・同じページで同じ写真が続かないよう、テーマ内のIDを順に回す
 * ・小さすぎる枠（辺40px未満）は写真にせず、グレーのまま残す（アイコン枠・区切り線のため）
 *
 * 依存なし。Node 18+。
 */
import { readFileSync, writeFileSync } from 'node:fs';

/** テーマ別の Unsplash 写真ID（2026-08-29に到達性を確認済み） */
const PHOTOS = {
  office:   ['photo-1497366754035-f200968a6e72','photo-1497366811353-6870744d04b2','photo-1497215728101-856f4ea42174','photo-1600607687939-ce8a6c25118c'],
  team:     ['photo-1522071820081-009f0129c71c','photo-1552664730-d307ca884978','photo-1521737711867-e3b97375f902','photo-1517048676732-d65bc937f952','photo-1454165804606-c3d57bc86b40'],
  desk:     ['photo-1531482615713-2afd69097998','photo-1499750310107-5fef28a66643'],
  biz:      ['photo-1600880292203-757bb62b4baf','photo-1573164713988-8665fc963095'],
  building: ['photo-1519494026892-80bbd2d6fd0d','photo-1541888946425-d81bb19240f5','photo-1486406146926-c627a92ad1ab','photo-1493397212122-2b85dda8106b'],
  medical:  ['photo-1576091160399-112ba8d25d1d','photo-1538108149393-fbbd81895907','photo-1584982751601-97dcc096659c'],
  campus:   ['photo-1562774053-701939374585','photo-1541339907198-e08756dedf3f'],
  factory:  ['photo-1581092160562-40aa08e78837','photo-1565043666747-69f6646db940'],
  craft:    ['photo-1504328345606-18bbc8c9d7d1','photo-1441986300917-64674bd600d8'],
  product:  ['photo-1556909212-d5b604d0c90d'],
  city:     ['photo-1503387762-592deb58ef4e'],
};

/** ページIDごとの既定テーマ（page-0NN → テーマの並び。順に回す） */
const BY_PAGE = {
  '001': ['office','team','desk','biz'],
  '002': ['team','office','desk'],
  '003': ['team','biz','office'],
  '004': ['team','biz','office','building'],
  '005': ['desk','city','building','product'],
  '006': ['office','desk','team'],
  '007': ['medical','building','team'],
  '008': ['office','desk','building'],
  '009': ['medical','building'],
  '010': ['craft','product','factory'],
  '011': ['medical','team'],
  '012': ['campus','building','team'],
  '013': ['building','city','product'],
  '014': ['factory','product','building'],
  '015': ['craft','factory','building'],
};

const MIN = 40; // これ未満の辺の枠は写真にしない

function pool(themes) {
  const ids = [];
  for (const t of themes) for (const id of (PHOTOS[t] || [])) ids.push(id);
  return ids.length ? ids : PHOTOS.office;
}

/* アイコン枠に入れる Font Awesome Free の絵柄。
   Webフォントは data:URI のSVGの中では読めないので、wire.js と同じくパスを直接埋める。
   （FA Free 6.5.2 / CC BY 4.0） */
const FA_SQUARE = { vb: '0 0 448 512', d: 'M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z' };
const FA_CIRCLE = { vb: '0 0 512 512', d: 'M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z' };

/** 小さな枠を「アイコンの入る枠」として描く（グレー塗りをやめ、線画だけにする） */
function iconSvg(w, h) {
  const g = (Math.abs(w - h) <= 4) ? FA_CIRCLE : FA_SQUARE;   // 正方形に近い枠は丸、それ以外は角
  const size = Math.min(w, h) * 0.86;
  const [, , vw, vh] = g.vb.split(' ').map(Number);
  const sc = size / Math.max(vw, vh);
  const x = (w - vw * sc) / 2, y = (h - vh * sc) / 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">`
    + `<g transform="translate(${x.toFixed(1)},${y.toFixed(1)}) scale(${sc.toFixed(4)})">`
    + `<path d="${g.d}" fill="#b0b0b0"/></g></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function photofy(html, ids) {
  let i = 0, n = 0, skipped = 0, icons = 0;
  // wire.js が置いたグレー矩形（<rect> だけを持つSVG）を狙う。<path>入り＝アイコンは対象外
  const re = /src="data:image\/svg\+xml;utf8,([^"]*?%3Crect[^"]*?)"/g;
  html = html.replace(re, (m, enc) => {
    const dec = decodeURIComponent(enc);
    // 写真の枠＝「100%塗りの矩形」を持つもの。wire.js はその上に枠アイコン(<path>)も重ねるので、
    // <path> の有無では判別できない。アイコンだけのSVG（矩形なし）は触らない
    if (!/<rect[^>]*width="100%"[^>]*height="100%"/.test(dec)) return m;
    const wm = /width="(\d+)"/.exec(dec), hm = /height="(\d+)"/.exec(dec);
    if (!wm || !hm) return m;
    const w = +wm[1], h = +hm[1];
    // 小さな枠は写真ではなくアイコンの入る枠。線画に置き換える
    if (w < MIN || h < MIN) {
      const thin = w <= 2 || h <= 2;                          // 区切り線・スペーサーは触らない
      const tiny = w < 8 || h < 8;
      const band = (w / h > 3 || h / w > 3) && Math.max(w, h) > 48; // 細長い帯は枠のまま
      if (thin || tiny || band) { skipped++; return m; }
      icons++;
      return `src="${iconSvg(w, h)}"`;
    }
    const id = ids[i++ % ids.length];
    n++;
    const W = Math.min(w, 1600), H = Math.round(H_of(w, h, W));
    return `src="https://images.unsplash.com/${id}?auto=format&amp;fit=crop&amp;w=${W}&amp;h=${H}&amp;q=60"`;
  });
  return { html, n, skipped, icons };
}
const H_of = (w, h, W) => h * (W / w);

const args = process.argv.slice(2);
const ti = args.indexOf('--theme');
const theme = ti >= 0 ? args[ti + 1] : 'auto';
const files = args.filter((a, k) => !a.startsWith('--') && !(ti >= 0 && k === ti + 1));
if (!files.length) {
  console.error('使い方: node tools/photofy.mjs <page/page-0NN.html ...> [--theme auto|office|medical|...]');
  process.exit(2);
}

for (const f of files) {
  const id = (/page-(\d{3})/.exec(f) || [])[1];
  const themes = theme === 'auto' ? (BY_PAGE[id] || ['office']) : [theme];
  const src = readFileSync(f, 'utf8');
  const { html, n, skipped, icons } = photofy(src, pool(themes));
  writeFileSync(f, html);
  console.log(`${f}  写真 ${n}枚（${themes.join('/')}）／ アイコン ${icons}／ 据え置き ${skipped}`);
}
