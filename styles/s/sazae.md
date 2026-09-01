# サザエ食品株式会社 ふうのデザイン

- 出典: https://www.sazae.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／カフェ･飲食店･テイクアウト

白地に `#ffe7c1` を大きな面で置く配色。影も枠線もほとんど使わない。本文 18px・行間 2、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ffe7c1;
  --sub: #f4e6df;
  --ink: #b50d34;
  --ink-rev: #ffffff;
  --on: #ffe7c1;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "TazuganeGothicStdN-Medium", sans-serif;
  --font-en: "TazuganeGothicStdN-Medium", sans-serif;
  --fs-body: 18px;
  --lh-body: 2;
  --container: 716px;
  --read: 720px;
  --section-y: 120px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 59.3% |
| 主色 | `#ffe7c1` | 15.8% |
| 副色 | `#f4e6df` | 15% |
| 差し色 | `#bbb8ae` | 1.5% |

文字色は `#b50d34` / `#ffffff` / `#2d2d2c` / `#c39231`。

- 主色 `#ffe7c1` は差し色ではなく**面**で使う。画面の16%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 41 | 53 | 0 | 0 |
| `#ffe7c1` | 1 | 0 | 0 | 0 |
| `#f4e6df` | 3 | 0 | 0 | 0 |
| `#b50d34` | 30 | 73 | 43 | 17 |
| `#c39231` | 1 | 4 | 1 | 1 |
| `#2d2d2c` | 0 | 16 | 0 | 0 |

- `#ffe7c1` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#ffe7c1` |
| `#f4e6df` | `#ffe7c1` |
| `#ffe7c1`（主色） | `#ffe7c1` |

```css
.section{ --on:#ffe7c1 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f4e6df` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: TazuganeGothicStdN-Medium
- 欧文: TazuganeGothicStdN-Medium
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 26px | 1.5 |
| 本文 | 18px | 2 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 12px | — |
| 注記 | 10px | — |

- 本文は 18px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 716px／読ませる段は 720px
- セクションの上下余白: 120 / 60 / 100 / 80px（基本は 120px）
- 並びの間隔: 5 / 8 / 10 / 30px
- 角丸: 0px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1981 / 812 / 767 / 389 / 350px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 2 | 14px / 行間 1.5 |
| セクションの上下余白 | 120px | 100px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 10px | 5px |

- 本文は 18px → 14px、セクション余白は 120px → 100px（PCの83%）。
- 文字サイズの段は 21 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: #b50d34; color: #ffffff;
  border: 1px solid #b50d34;
  border-radius: 100px; padding: 0px 11px; min-height: 36px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.35px;
}
.btn-sub{
  background: #ac5c79; color: #ffffff;
  border: 1px solid #ac5c79;
  border-radius: 3px; padding: 0px 0px; min-height: 70px;
  font-size: 21px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #c39231; color: #ffffff;
  border: 1px solid #c39231;
  border-radius: 3px; padding: 0px 0px; min-height: 70px;
  font-size: 21px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 460px | `#f4e6df` | 3カラム・画像あり | — | 全面 |
| 3 | 680px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 900px | — | 1カラム・画像あり | 中央 | 全幅 |
| 5 | 900px | — | 2カラム・画像あり | 中央 | 全幅 |
| 6 | 620px | — | 1カラム・画像あり | 中央 | 全幅 |
| 7 | 1020px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 8 | 900px | — | 2カラム・画像あり | 中央 | 全幅 |
| 9 | 620px | — | 1カラム・画像あり | 中央 | 全幅 |
| 10 | 780px | `#f4e6df` | 4カラム・画像あり | 中央 | 見出しの下 |
| 11 | 1860px | `#ffe7c1` | 6カラム・画像あり | 中央 | 見出しの下 |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#ffe7c1` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（5） / `#f4e6df`（3） / `#ffe7c1`（1）
- 見出しは左0／中央9。


## 部品

囲み（7箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #b50d34; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 11px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（48px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 61枚使っている。うち 22 枚は画面いっぱいに置く
- 比率は 16:9（11枚）、3:2（9枚）、4:3（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ffe7c1 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#b50d34; color:#ffffff; border-radius:100px;
  padding:0px 11px; min-height:36px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:812px){
  :root{ --fs-body:14px; --section-y:100px; --gap:5px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#ffe7c1` の面を全幅で交互に置く。主色は画面の16%を占めるだけ使う。
- 余白 120px と行間 2 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 3px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
