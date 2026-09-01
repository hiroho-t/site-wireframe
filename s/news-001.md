# news-001｜お知らせ

- 種類: お知らせ
- 元ファイル: `news/news-001.html`
- 実測: 2026-09-02

このファイルはレイアウトの数値だけ。文言・写真は自分で用意する。

## 枠

- アートボード: 1440×800px
- 地色: `#ffffff`

## 縦の組み立て

上からの位置と高さ。数字はそのまま `top` に使える。

| 上から | 高さ | 中身 |
|---|---|---|
| 95px | 78px | 見出し |
| 235px | 364px | 文字 |
| 645px | 60px | 文字 |

- かたまりの間隔: 62 / 46px
- 最後のかたまりの下端は 705px（下の余白 95px）

## 文字の段

| サイズ | 行間 | 太さ |
|---|---|---|
| 40px | 1 | 700 |
| 24px | 1 | 600 |
| 14px | 1.4 | 400 |
| 14px | 1 | 400 |
| 12px | — | 500 |

## そのまま使う骨格

```css
.sec{ position:relative; width:1440px; height:800px; background:#ffffff }
.sec__g1{ position:absolute; left:72px; top:95px; width:240px }
.sec__g2{ position:absolute; left:72px; top:235px; width:1296px }
.sec__g3{ position:absolute; left:72px; top:645px; width:201px }
```

## 守ること

- 数字を丸めない。かたまりの上端は上の表のとおりに置く。
- 文字は上の段だけを使う。中間のサイズを足さない。
