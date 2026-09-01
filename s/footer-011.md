# footer-011｜フッター・FOOTER

左にロゴ＋タグライン、右にリンク2列。下にポリシーとコピーライト

- 種類: フッター
- 元ファイル: `footer/footer-011.html`
- 実測: 2026-09-01

このファイルはレイアウトの数値だけ。文言・写真は自分で用意する。

## 枠

- アートボード: 1440×800px
- 地色: `#ffffff`

## 縦の組み立て

上からの位置と高さ。数字はそのまま `top` に使える。

| 上から | 高さ | 中身 |
|---|---|---|
| 231px | 27px | 文字 |
| 232px | 226px | 文字 |
| 232px | 181px | 文字 |
| 298px | 18px | 文字 |
| 520px | 19px | 文字 |
| 554px | 18px | 文字 |

- かたまりの間隔: 204 / 15px
- 最後のかたまりの下端は 572px（下の余白 228px）

## 文字の段

| サイズ | 行間 | 太さ |
|---|---|---|
| 22px | 1.23 | 700 |
| 18px | 1 | 600 |
| 12px | 1.6 | 600 |
| 12px | 1.6 | 400 |
| 11px | 1.6 | 400 |

## 元の設計メモ

- URLからDOM実測（1440幅・元セクション高539を800の中央に配置）
- ロゴ LOGOテキスト（22px/700・行高27）／ タグライン 18px/600 ／ リンク 12px/600 lh19.2（ピッチ43）
- ポリシー 12px/400 ／ コピーライト 11px/400

## そのまま使う骨格

```css
.sec{ position:relative; width:1440px; height:800px; background:#ffffff }
.sec__g1{ position:absolute; left:80px; top:231px; width:67px }
.sec__g2{ position:absolute; left:740px; top:232px; width:108px }
.sec__g3{ position:absolute; left:1070px; top:232px; width:72px }
.sec__g4{ position:absolute; left:80px; top:298px; width:180px }
.sec__g5{ position:absolute; left:80px; top:520px; width:179px }
.sec__g6{ position:absolute; left:80px; top:554px; width:1280px }
```

## 守ること

- 数字を丸めない。かたまりの上端は上の表のとおりに置く。
- 文字は上の段だけを使う。中間のサイズを足さない。
