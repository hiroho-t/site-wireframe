# footer-001｜フッター

- 種類: フッター
- 元ファイル: `footer/footer-001.html`
- 実測: 2026-09-01

このファイルはレイアウトの数値だけ。文言・写真は自分で用意する。

## 枠

- アートボード: 1440×800px
- 地色: `#ffffff`

## 縦の組み立て

上からの位置と高さ。数字はそのまま `top` に使える。

| 上から | 高さ | 中身 |
|---|---|---|
| 85px | 205px | 3列 |
| 353px | 366px | 文字 |
| 423px | 36px | 文字 |
| 469px | 45px | 文字 |
| 475px | 18px | 文字 |
| 538px | 13px | 文字 |
| 560px | 90px | 文字 |
| 577px | 18px | 文字 |

- かたまりの間隔: 63 / 10 / 45 / 9px
- 最後のかたまりの下端は 595px（下の余白 205px）

## 横の並び

- 3列／1列 412px／間隔 30px（3×412＋2×30＝1296px）
- 置く位置: 左 72px・上 85px

## 画像の枠

| 大きさ | 比率 | 枚数 | 最初の位置 |
|---|---|---|---|
| 412×205 | 2.01:1 | 3 | 左72・上85 |

## 文字の段

| サイズ | 行間 | 太さ |
|---|---|---|
| 36px | 1 | 500 |
| 15px | 1.2 | 400 |
| 14px | — | 500 |
| 13px | 1 | 400 |
| 13px | 1.73 | 400 |
| 13px | 1.4 | 400 |

## そのまま使う骨格

```css
.sec{ position:relative; width:1440px; height:800px; background:#ffffff }
.sec__g1{ position:absolute; left:72px; top:85px; width:1296px }
.sec__g2{ position:absolute; left:720px; top:353px; width:1px }
.sec__g3{ position:absolute; left:922px; top:423px; width:343px }
.sec__g4{ position:absolute; left:72px; top:469px; width:269px }
.sec__g5{ position:absolute; left:922px; top:475px; width:340px }
.sec__g6{ position:absolute; left:72px; top:538px; width:113px }
.sec__g7{ position:absolute; left:909px; top:560px; width:359px }
.sec__g8{ position:absolute; left:72px; top:577px; width:117px }
.sec__cols{ display:flex; gap:30px }
.sec__col{ width:412px }
.sec__img{ width:412px; height:205px; background:#d9d9d9 }
```

## 守ること

- 数字を丸めない。かたまりの上端は上の表のとおりに置く。
- 3列は等幅（412px）。間隔 30px を変えると合計が 1440px に収まらなくなる。
- 文字は上の段だけを使う。中間のサイズを足さない。
