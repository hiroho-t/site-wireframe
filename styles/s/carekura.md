# 一般社団法人ケアと暮らしの編集社 ふうのデザイン

- 出典: https://carekura.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／地域･地方創生･政治･行政･自治体･NPO／レスポンシブ

白地に `#34a9ee` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 2.2、セクション間 128px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #34a9ee;
  --sub: #cfdbe6;
  --ink: #18181b;
  --ink-rev: #34a9ee;
  --on: #34a9ee;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Urbanist", sans-serif;
  --font-en: "Urbanist", sans-serif;
  --fs-body: 16px;
  --lh-body: 2.2;
  --container: 1224px;
  --read: 700px;
  --section-y: 128px;
  --gap: 16px;
  --radius: 8px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 58.8% |
| 主色 | `#34a9ee` | 14.2% |
| 副色 | `#cfdbe6` | 4.5% |
| 差し色 | `#e6ebec` | 3% |
| 差し色 | `#303030` | 3% |
| 差し色 | `#be9077` | 2.8% |

文字色は `#18181b` / `#34a9ee` / `#ffffff` / `#000000`。

- 主色 `#34a9ee` は差し色ではなく**面**で使う。画面の14%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 20 | 29 | 0 | 4 |
| `#34a9ee` | 12 | 29 | 4 | 4 |
| `#fdf2ed` | 2 | 0 | 0 | 0 |
| `#e57547` | 5 | 4 | 0 | 5 |
| `#000000` | 1 | 10 | 0 | 0 |
| `#18181b` | 0 | 56 | 0 | 0 |

- `#34a9ee` は面12箇所・文字29箇所を行き来する。ボタンの地にも使う。枠線にも4箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#34a9ee` |
| `#f9f9f9` | `#34a9ee` |
| `#34a9ee`（主色） | `#34a9ee` |
| `#fdf2ed` | `#34a9ee` |

```css
.section{ --on:#34a9ee }                     /* 地の面 */
.section--main{ background:var(--main); color:#34a9ee; --on:#34a9ee }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#34a9ee }
.section--main .btn--fill{ background:#34a9ee; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e3e1d7`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Urbanist
- 欧文: Urbanist
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 64px | 2.4 |
| 見出し | 44px | — |
| 小見出し | 36px | 2 |
| リード | 22px | 1.5 |
| リード | 20px | — |
| 本文 | 16px | 2.2 |
| 補助 | 15px | 2 |

- 本文は 16px・行間 2.2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1224px／読ませる段は 700px
- セクションの上下余白: 128 / 64 / 32 / 48px（基本は 128px）
- 並びの間隔: 4 / 12 / 16 / 32px
- 角丸: 8px が基本。大きな面だけ 16px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1400 / 992 / 991 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.2 | 14px / 行間 2.2 |
| 見出し | 64px | 36px / 行間 2.2 |
| セクションの上下余白 | 128px | 32px |
| 左右の余白 | — | 29px |
| 並びの間隔 | 16px | 8px |

- 本文は 16px → 14px、セクション余白は 128px → 32px（PCの25%）。
- 文字サイズの段は 14 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #e57547; color: #ffffff;
  border-radius: 300px; padding: 8px 32px; min-height: 80px;
  font-size: 32px; font-weight: 600; letter-spacing: 1.6px;
}
.btn-sub{
  background: #34a9ee; color: #ffffff;
  border-radius: 300px; padding: 14px 32px; min-height: 51px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.8px;
}
.btn-sub{
  background: #ffffff; color: #18181b;
  border: 1px solid #e3e1d7;
  border-radius: 8px; padding: 14px 14px; min-height: 62px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | — | ヒーロー（画像） | 中央 | 右（90:10） |
| 2 | 960px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 3 | 980px | — | 4カラム・画像あり | 左 | 右（14:86） |
| 4 | 2940px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1360px | — | 1カラム・画像あり | 右 | 見出しの下 |
| 6 | 1560px | — | 6カラム・画像あり | 中央 | 全幅 |
| 7 | 500px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 8 | 480px | — | 1カラム・文字だけ | 中央 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#34a9ee` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（5） / `#f9f9f9`（3） / `#34a9ee`（1） / `#fdf2ed`（1）
- 見出しは左2／中央5。
- 2カラムの分け方は 90:10 / 14:86。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #f9f9f9;
  border: 1px solid var(--on);   /* 実測は #e3e1d7。面によって入れ替える */
  border-radius: 8px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #34a9ee; color: #ffffff;
  border-radius: 999px; padding: 1px 17px; font-size: 11px;
}
```

## 丸いもの

角丸は 8px だが、**完全な円は別扱い**で 3 箇所ある（32px×2、64px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 29枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（18枚）、16:9（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#34a9ee }
.container{ width:min(100% - 58px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#34a9ee; --on:#34a9ee }
.section--main .btn--fill{ background:#34a9ee; color:var(--main) }
.card{ background:#f9f9f9; border:1px solid var(--on);
  border-radius:8px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#e57547; color:#ffffff; border-radius:300px;
  padding:8px 32px; min-height:80px;
  font-size:32px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 58px) }
}
```

## 守ること

やること

- 地色と主色 `#34a9ee` の面を全幅で交互に置く。主色は画面の14%を占めるだけ使う。
- 余白 128px と行間 2.2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 8px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2.2 より詰めない。
- 中途半端な角丸（8px と 16px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
