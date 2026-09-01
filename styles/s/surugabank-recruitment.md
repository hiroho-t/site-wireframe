# スルガ銀行 Recruiting Site ふうのデザイン

- 出典: https://www.surugabank.co.jp/surugabank/recruitment/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: 採用サイト／金融･投資･保険･士業／レスポンシブ

白地に `#60adf9` を大きな面で置く配色。影も枠線もほとんど使わない。本文 14px・行間 1.75、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #60adf9;
  --sub: #036dd6;
  --ink: #111111;
  --ink-rev: #000000;
  --on: #60adf9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.75;
  --container: 1040px;
  --read: 1132px;
  --section-y: 72px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 66.7% |
| 主色 | `#60adf9` | 11% |
| 副色 | `#036dd6` | 6.4% |
| 差し色 | `#a2d5f6` | 5.3% |
| 差し色 | `#e4ecf3` | 2.4% |
| 差し色 | `#d7d5d2` | 2.4% |

文字色は `#111111` / `#000000` / `#ffffff` / `#036dd6`。

- 主色 `#60adf9` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 22 | 47 | 0 | 0 |
| `#60adf9` | 2 | 0 | 0 | 0 |
| `#036dd6` | 44 | 14 | 4 | 42 |
| `#fdf6ee` | 3 | 0 | 0 | 0 |
| `#111111` | 0 | 181 | 1 | 0 |
| `#000000` | 0 | 26 | 0 | 0 |

- `#60adf9` は面として2箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#60adf9` |
| `#fffaf5` | `#60adf9` |
| `#60adf9`（主色） | `#60adf9` |
| `#036dd6` | `#000000` |

```css
.section{ --on:#60adf9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Poppins
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 38px | 1.6 |
| 見出し | 24px | — |
| 小見出し | 22px | 1.5 |
| リード | 18px | — |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 1.5 |

- 本文は 14px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1040px／読ませる段は 1132px
- セクションの上下余白: 72 / 120 / 36 / 96px（基本は 72px）
- 並びの間隔: 2 / 10 / 20 / 32px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 1023 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.75 | 14px / 行間 1.75 |
| 見出し | 38px | 16px / 行間 1.5 |
| セクションの上下余白 | 72px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 20px | 2px |

- 本文は 14px → 14px、セクション余白は 72px → 24px（PCの33%）。
- 文字サイズの段は 18 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #036dd6; color: #ffffff;
  border-radius: 1440px; padding: 1px 15px; min-height: 29px;
  font-size: 14px; font-weight: 500; letter-spacing: -0.14px;
}
.btn-sub{
  background: #036dd6; color: #ffffff;
  border: 2px solid #036dd6;
  border-radius: 1440px; padding: 7px 42px; min-height: 42px;
  font-size: 15px; font-weight: 600; letter-spacing: 0.6px;
}
.btn-sub{
  background: #036dd6; color: #ffffff;
  border: 2px solid #036dd6;
  border-radius: 1440px; padding: 8px 48px; min-height: 40px;
  font-size: 15px; font-weight: 600; letter-spacing: 0.6px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 680px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1220px | — | 1カラム・画像あり | 左 | 全幅 |
| 3 | 780px | `#fdf6ee` | 3カラム・画像あり | 中央 | 見出しの下 |
| 4 | 660px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 740px | `#60adf9` | 1カラム・画像あり | 左 | 右（28:72） |
| 6 | 960px | `#60adf9` | 5カラム・画像あり | 中央 | 見出しの下 |
| 7 | 780px | — | 1カラム・文字だけ | 中央 | — |
| 8 | 440px | `#f7f7f7` | 1カラム・画像あり | 左 | — |
| 9 | 640px | — | 5カラム・画像あり | 左 | — |
| 10 | 220px | — | 帯・区切り | 中央 | — |
| 11 | 240px | `#036dd6` | 帯・区切り | 中央 | — |

- 全11セクション。
- 主色 `#60adf9` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（9） / `#fffaf5`（6） / `#60adf9`（2） / `#036dd6`（2）
- 見出しは左5／中央5。
- 2カラムの分け方は 28:72。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 8px;
  padding: 4px 20px;
}
```

ラベル・タグ

```css
.chip{
  background: #036dd6; color: #ffffff;
  border-radius: 999px; padding: 1px 15px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（40px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 50枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:2（40枚）、1:1（3枚）、3:4（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#60adf9 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:680px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:#ffffff;
  border-radius:8px; padding:4px 20px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#036dd6; color:#ffffff; border-radius:1440px;
  padding:1px 15px; min-height:29px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:24px; --gap:2px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地色と主色 `#60adf9` の面を交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 72px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 8px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
