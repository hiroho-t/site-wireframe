# footer-012｜フッター・FOOTER

上部に採用バナー2枚（アイコン108角＋見出し24px＋丸矢印）、下にロゴとリンク

- 種類: フッター
- 元ファイル: `footer/footer-012.html`
- 実測: 2026-09-01

このファイルはレイアウトの数値だけ。文言・写真は自分で用意する。

## 枠

- アートボード: 1440×800px
- 地色: `#ffffff`

## 縦の組み立て

上からの位置と高さ。数字はそのまま `top` に使える。

| 上から | 高さ | 中身 |
|---|---|---|
| 137px | 180px | 2列（見出し2個） |
| 477px | 44px | 文字 |
| 477px | 69px | 文字 |
| 647px | 18px | 文字 |

- かたまりの間隔: 160 / 101px
- 最後のかたまりの下端は 665px（下の余白 135px）

## 横の並び

- 2列／1列 585px／間隔 30px（2×585＋1×30＝1200px）
- 置く位置: 左 120px・上 137px

## 画像の枠

| 大きさ | 比率 | 枚数 | 最初の位置 |
|---|---|---|---|
| 108×108 | 1:1 | 2 | 左198・上173 |

## 文字の段

| サイズ | 行間 | 太さ |
|---|---|---|
| 24px | 1.5 | 700 |
| 24px | 1.83 | 700 |
| 16px | 1.75 | 700 |
| 14px | 1.5 | 400 |
| 12px | — | 400 |

## 元の設計メモ

- URLからDOM実測（1440幅・元セクション高752 → 800の中央に配置）
- バナー 見出し 24px/700 lh36 ／ ロゴ LOGOテキスト（24px/700・行高44）／ リンク 16px/700・14px/400

## そのまま使う骨格

```css
.sec{ position:relative; width:1440px; height:800px; background:#ffffff }
.sec__g1{ position:absolute; left:120px; top:137px; width:1200px }
.sec__g2{ position:absolute; left:110px; top:477px; width:73px }
.sec__g3{ position:absolute; left:510px; top:477px; width:619px }
.sec__g4{ position:absolute; left:110px; top:647px; width:1220px }
.sec__cols{ display:flex; gap:30px }
.sec__col{ width:585px }
.sec__img{ width:108px; height:108px; background:#d9d9d9 }
```

## 守ること

- 数字を丸めない。かたまりの上端は上の表のとおりに置く。
- 2列は等幅（585px）。間隔 30px を変えると合計が 1440px に収まらなくなる。
- 文字は上の段だけを使う。中間のサイズを足さない。
