# 神戸女子大学 ふうのデザイン

- 出典: https://www.kobe-wu.ac.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／BtoCのサイト／女性向け･女性的なテイスト

白地に `#4996b6` を大きな面で置く配色。影も枠線もほとんど使わない。本文 15px・行間 1.75、セクション間 112px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #4996b6;
  --sub: #3088a5;
  --ink: #ffffff;
  --ink-rev: #1486ad;
  --on: #4996b6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.75;
  --container: 568px;
  --read: 668px;
  --section-y: 112px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 29.9% |
| 主色 | `#4996b6` | 15.5% |
| 副色 | `#3088a5` | 9.1% |
| 差し色 | `#8bc9df` | 6.2% |
| 差し色 | `#d8e6ea` | 5.3% |
| 差し色 | `#b5e0f5` | 4.3% |

文字色は `#ffffff` / `#1486ad` / `#222222` / `#49b266`。

- 主色 `#4996b6` は差し色ではなく**面**で使う。画面の16%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#eef7fb` | 18 | 0 | 0 | 0 |
| `#ffffff` | 26 | 199 | 8 | 18 |
| `#7fc7e2` | 4 | 0 | 0 | 0 |
| `#000000` | 2 | 0 | 0 | 0 |
| `#1486ad` | 6 | 206 | 22 | 0 |
| `#222222` | 0 | 150 | 1 | 0 |
| `#49b266` | 0 | 12 | 0 | 0 |

- `#4996b6` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#eef7fb` | `#4996b6` |
| `#000000` | `#1486ad` |
| `#ffffff`（地） | `#4996b6` |
| `#7fc7e2` | `#4996b6` |

```css
.section{ --on:#4996b6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#1486ad; --on:#1486ad }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#1486ad }
.section--main .btn--fill{ background:#1486ad; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 400 / 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 50px | 1.21 |
| 見出し | 24px | 1.75 |
| 小見出し | 18px | 1.22 |
| 本文 | 15px | 1.22 |
| 補助 | 13px | — |
| 注記 | 12px | 1.22 |
| 注記 | 10px | — |

- 本文は 15px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 568px／読ませる段は 668px
- セクションの上下余白: 112 / 80 / 56 / 64px（基本は 112px）
- 並びの間隔: 5 / 8 / 10 / 20px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1400 / 1300 / 769 / 768 / 576px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.75 | 13px / 行間 1.5 |
| 見出し | 50px | 28px / 行間 1.21 |
| セクションの上下余白 | 112px | 52px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 10px | 10px |

- 本文は 15px → 13px、セクション余白は 112px → 52px（PCの46%）。
- 文字サイズの段は 17 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #1486ad;
  border-radius: 0px; padding: 4px 9px; min-height: 26px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.8px;
}
.btn-sub{
  background: #92bac9; color: #ffffff;
  border-radius: 50%; padding: 0px 0px; min-height: 96px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 26px;
  font-size: 10px; font-weight: 400; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 740px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 600px | — | 4カラム | 左 | — |
| 3 | 400px | — | 6カラム | 中央 | — |
| 4 | 500px | — | 6カラム・画像あり | 左 | 右（30:70） |
| 5 | 640px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 740px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 420px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 8 | 1960px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 9 | 200px | — | 6カラム | 左 | — |

- 全9セクション。
- 使われている面の色: `#eef7fb`（9） / `#000000`（2） / `#ffffff`（1） / `#7fc7e2`（1）
- 見出しは左5／中央3。
- 2カラムの分け方は 30:70。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #eef7fb;
  border-radius: 0px;
  padding: 36px 78px;
}
```

ラベル・タグ

```css
.chip{
  background: #1486ad; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 5px; padding: 2px 7px; font-size: 11px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 41 箇所ある（48px×16、24px×14、96px×8）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 117枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 4:3（60枚）、3:2（26枚）、1:1（25枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#4996b6 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:740px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#1486ad; --on:#1486ad }
.section--main .btn--fill{ background:#1486ad; color:var(--main) }
.card{ background:#eef7fb;
  border-radius:0px; padding:36px 78px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#1486ad; border-radius:0px;
  padding:4px 9px; min-height:26px;
  font-size:15px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:13px; --section-y:52px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#4996b6` の面を交互に置く。主色は画面の16%を占めるだけ使う。
- 余白 112px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
