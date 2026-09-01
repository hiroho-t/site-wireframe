# トヨタバッテリー株式会社 ふうのデザイン

- 出典: https://www.toyota-battery.com/jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／車･乗り物･モビリティ

白地に `#db0026` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #db0026;
  --sub: #d2dee2;
  --ink: #000000;
  --ink-rev: #db0026;
  --on: #db0026;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "IBM Plex Sans JP", sans-serif;
  --font-en: "IBM Plex Sans JP", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1348px;
  --read: 652px;
  --section-y: 60px;
  --gap: 8px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 81.8% |
| 主色 | `#000000` | 10.5% |
| 副色 | `#d2dee2` | 2.3% |

文字色は `#000000` / `#db0026` / `#ffffff` / `#888888`。

- 主色 `#db0026` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f6f6f6` | 5 | 0 | 1 | 0 |
| `#ffffff` | 8 | 8 | 0 | 0 |
| `#000000` | 1 | 93 | 0 | 0 |
| `#e8e8e8` | 1 | 0 | 0 | 0 |
| `#db0026` | 1 | 1 | 0 | 1 |
| `#888888` | 0 | 9 | 0 | 0 |

- `#db0026` は面として1箇所、文字として1箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#db0026` |
| `#f6f6f6` | `#db0026` |
| `#000000` | `#db0026` |
| `#e8e8e8` | `#db0026` |

```css
.section{ --on:#db0026 }                     /* 地の面 */
.section--main{ background:var(--main); color:#db0026; --on:#db0026 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#db0026 }
.section--main .btn--fill{ background:#db0026; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: IBM Plex Sans JP
- 欧文: IBM Plex Sans JP
- ウェイトは 500 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 46px | — |
| 見出し | 24px | — |
| 本文 | 16px | 1.8 |
| 補助 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1348px／読ませる段は 652px
- セクションの上下余白: 60 / 152 / 96 / 44px（基本は 60px）
- 並びの間隔: 5 / 7 / 8 / 23px
- 角丸: 0px が基本。大きな面だけ 23px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 14px / 行間 1.8 |
| セクションの上下余白 | 60px | 24px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 8px | 8px |

- 本文は 16px → 14px、セクション余白は 60px → 24px（PCの40%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #db0026; color: #ffffff;
  border-radius: 8px; padding: 8px 35px; min-height: 30px;
  font-size: 14px; font-weight: 400; letter-spacing: 1.12px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1060px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 480px | — | 3カラム・画像あり | 左 | — |
| 3 | 1020px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 1660px | — | 2カラム・画像あり | 中央 | 全幅 |
| 5 | 1440px | — | 2カラム・画像あり | 中央 | 全幅 |
| 6 | 700px | — | 4カラム・画像あり | 左 | 右（17:83） |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（7） / `#f6f6f6`（5） / `#000000`（1） / `#e8e8e8`（1）
- 見出しは左3／中央3。
- 2カラムの分け方は 17:83。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: transparent;
  border-radius: 10px;
  padding: 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 25px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #da1b32;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 12px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 54枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 3:2（12枚）、16:9（8枚）、1:1（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#db0026 }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1060px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#db0026; --on:#db0026 }
.section--main .btn--fill{ background:#db0026; color:var(--main) }
.card{ background:transparent;
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#db0026; color:#ffffff; border-radius:8px;
  padding:8px 35px; min-height:30px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:24px; --gap:8px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#db0026` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 23px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
