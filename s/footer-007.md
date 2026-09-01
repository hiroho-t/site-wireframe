# footer-007｜フッター・FOOTER

左にロゴ、右にサイトマップ3列。下部に小さなポリシーリンク

- 種類: フッター
- 元ファイル: `footer/footer-007.html`
- 実測: 2026-09-01

このファイルはレイアウトの数値だけ。文言・写真は自分で用意する。

## 枠

- アートボード: 1440×800px
- 地色: `#ffffff`

## 縦の組み立て

上からの位置と高さ。数字はそのまま `top` に使える。

| 上から | 高さ | 中身 |
|---|---|---|
| 206px | 74px | 6列 |
| 206px | 206px | 6列 |
| 206px | 160px | 6列 |
| 206px | 178px | 見出し |
| 580px | 18px | 文字 |

- かたまりの間隔: 196px
- 最後のかたまりの下端は 598px（下の余白 202px）

## 横の並び

- 6列／1列 179px／間隔 0px（6×179＋5×0＝1074px）
- 置く位置: 左 789px・上 228px

## 文字の段

| サイズ | 行間 | 太さ |
|---|---|---|
| 26px | 1.31 | 700 |
| 16px | 1.1 | 500 |
| 15px | 1.6 | 500 |
| 14px | 1.6 | 500 |
| 13px | 1.5 | 600 |
| 11px | 1.6 | 400 |

## 元の設計メモ

- URLからDOM実測（1440幅・セクション高505を800の中央に配置）
- ロゴ 326×34＋英字16/500 ／ 列見出し14/500 lh22.4 ／ リンク15/500 lh24（行ピッチ44）
- ポリシーリンク 11/400 lh17.6

## そのまま使う骨格

```css
.sec{ position:relative; width:1440px; height:800px; background:#ffffff }
.sec__g1{ position:absolute; left:72px; top:206px; width:98px }
.sec__g2{ position:absolute; left:513px; top:206px; width:123px }
.sec__g3{ position:absolute; left:789px; top:206px; width:400px }
.sec__g4{ position:absolute; left:1163px; top:206px; width:130px }
.sec__g5{ position:absolute; left:72px; top:580px; width:561px }
.sec__cols{ display:flex; gap:0px }
.sec__col{ width:179px }
```

## 守ること

- 数字を丸めない。かたまりの上端は上の表のとおりに置く。
- 6列は等幅（179px）。間隔 0px を変えると合計が 1440px に収まらなくなる。
- 文字は上の段だけを使う。中間のサイズを足さない。
