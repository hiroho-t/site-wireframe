# footer-010｜フッター・FOOTER

左にロゴ、中央にリンク列。下にポリシーリンクとコピーライト

- 種類: フッター
- 元ファイル: `footer/footer-010.html`
- 実測: 2026-09-02

このファイルはレイアウトの数値だけ。文言・写真は自分で用意する。

## 枠

- アートボード: 1440×800px
- 地色: `#f2f2f2`

## 縦の組み立て

上からの位置と高さ。数字はそのまま `top` に使える。

| 上から | 高さ | 中身 |
|---|---|---|
| 162px | 218px | 文字 |
| 166px | 39px | 文字 |
| 409px | 171px | 文字 |
| 595px | 18px | 文字 |
| 620px | 21px | 文字 |

- かたまりの間隔: 204 / 15 / 7px
- 最後のかたまりの下端は 641px（下の余白 159px）

## 文字の段

| サイズ | 行間 | 太さ |
|---|---|---|
| 26px | — | 700 |
| 18px | 1 | 700 |
| 16px | 1.4 | 700 |
| 14px | 1.7 | 400 |
| 14px | 1.5 | 400 |

## 元の設計メモ

- URLからDOM実測（1440幅・元セクション高900 → 800に収めるため上下を詰める）
- リンク 16px/700 lh22.4（ピッチ36.5）／ ポリシー 14px/400（ピッチ33）
- コピーライト 14px/400 ／ PAGE TOP 18px/700

## そのまま使う骨格

```css
.sec{ position:relative; width:1440px; height:800px; background:#f2f2f2 }
.sec__g1{ position:absolute; left:630px; top:162px; width:210px }
.sec__g2{ position:absolute; left:80px; top:166px; width:79px }
.sec__g3{ position:absolute; left:630px; top:409px; width:182px }
.sec__g4{ position:absolute; left:1193px; top:595px; width:88px }
.sec__g5{ position:absolute; left:80px; top:620px; width:1280px }
```

## 守ること

- 数字を丸めない。かたまりの上端は上の表のとおりに置く。
- 文字は上の段だけを使う。中間のサイズを足さない。
