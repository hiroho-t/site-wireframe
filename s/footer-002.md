# footer-002｜フッター・FOOTER

濃色。背面に巨大な英字マーキー、中央リード、枠線の巨大ピルCTA、下部にリンク列

- 種類: フッター
- 元ファイル: `footer/footer-002.html`
- 実測: 2026-09-01

このファイルはレイアウトの数値だけ。文言・写真は自分で用意する。

## 枠

- アートボード: 1440×800px
- コンテンツ幅: 1296px（左右 72px）
- 地色: `#2a2a2c`

## 縦の組み立て

上からの位置と高さ。数字はそのまま `top` に使える。

| 上から | 高さ | 中身 |
|---|---|---|
| 64px | 230px | 文字 |
| 190px | 84px | 文字 |
| 355px | 190px | 文字 |
| 716px | 14px | 文字 |

- かたまりの間隔: 81 / 171px
- 最後のかたまりの下端は 730px（下の余白 70px）

## 文字の段

| サイズ | 行間 | 太さ |
|---|---|---|
| 230px | 1 | 700 |
| 40px | 1.3 | 400 |
| 28px | 1.5 | 400 |
| 12px | 1.2 | 500 |

## 元の設計メモ

- 背景をダークにするのは、白抜き文字を成立させるため（視認性の例外）
- マーキー 230px/700・不透明度7%（動かさず中央に静止させた状態）／ リード 28px/400 lh1.5
- ピルCTA  幅1296・高さ190・radius 95・文字40px・丸49

## そのまま使う骨格

```css
.sec{ position:relative; width:1440px; height:800px; background:#2a2a2c }
.sec__g1{ position:absolute; left:0px; top:64px; width:1440px }
.sec__g2{ position:absolute; left:0px; top:190px; width:1440px }
.sec__g3{ position:absolute; left:72px; top:355px; width:1296px }
.sec__g4{ position:absolute; left:72px; top:716px; width:1296px }
```

## 守ること

- 数字を丸めない。左右は 72px、かたまりの上端は上の表のとおりに置く。
- 文字は上の段だけを使う。中間のサイズを足さない。
