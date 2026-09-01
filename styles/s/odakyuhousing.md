# 小田急ハウジング ふうのデザイン

- 出典: https://www.odakyuhousing.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／建築･住宅･不動産･空間設計･エクステリア

白地に `#004ea2` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 132px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #004ea2;
  --sub: #a1dcf8;
  --ink: #5d636f;
  --ink-rev: #ffffff;
  --on: #004ea2;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic Antique", sans-serif;
  --font-en: "Barlow", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1120px;
  --read: 864px;
  --section-y: 132px;
  --gap: 14px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 71.9% |
| 主色 | `#004ea2` | 5.3% |
| 副色 | `#a1dcf8` | 3.9% |
| 差し色 | `#bbe6f8` | 2.9% |
| 差し色 | `#dbcf30` | 2.9% |
| 差し色 | `#66bbe6` | 2.6% |

文字色は `#5d636f` / `#ffffff` / `#2f3134` / `#004ea2`。

- 主色 `#004ea2` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 22 | 12 | 3 | 6 |
| `#f4f7fb` | 2 | 0 | 3 | 0 |
| `#004ea2` | 13 | 4 | 5 | 3 |
| `#5d636f` | 0 | 72 | 0 | 0 |
| `#2f3134` | 0 | 17 | 0 | 0 |

- `#004ea2` は面として13箇所、文字として4箇所。塗りが主役。ボタンの地にも使う。枠線にも5箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#004ea2` |
| `#f4f7fb` | `#004ea2` |
| `#004ea2`（主色） | `#ffffff` |

```css
.section{ --on:#004ea2 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f4f7fb` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic Antique
- 欧文: Barlow
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 47px | 1.4 |
| 見出し | 38px | 1.7 |
| 小見出し | 23px | 1.4 |
| リード | 18px | 1.7 |
| リード | 17px | — |
| 本文 | 16px | 2 |
| 補助 | 14px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 864px
- セクションの上下余白: 132 / 36 / 64 / 112px（基本は 132px）
- 並びの間隔: 3 / 8 / 14 / 19px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 782 / 767 / 600 / 567 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 2 |
| 見出し | 47px | 24px / 行間 1.4 |
| セクションの上下余白 | 132px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 14px | 10px |

- 本文は 16px → 14px、セクション余白は 132px → 24px（PCの18%）。
- 文字サイズの段は 24 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 57px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #004ea2; color: #ffffff;
  border-radius: 1440px; padding: 19px 24px; min-height: 57px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #5d636f;
  border-radius: 0px; padding: 0px 0px; min-height: 57px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1700px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 3180px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 3 | 780px | `#f4f7fb` | 1カラム・画像あり | 中央 | 右（44:56） |
| 4 | 1060px | — | 1カラム・画像あり | 左 | 全幅 |
| 5 | 560px | — | 1カラム・画像あり | 左 | — |
| 6 | 500px | — | 1カラム・画像あり | 右 | 左（61:39） |
| 7 | 560px | `#f4f7fb` | 3カラム・画像あり | — | 全面 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（15） / `#f4f7fb`（2） / `#004ea2`（1）
- 見出しは左2／中央2。
- 2カラムの分け方は 44:56 / 61:39。半分ずつには割らない。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 5px;
  padding: 38px 42px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #004ea2;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 7px 7px; font-size: 14px;
}
```

## 丸いもの

角丸は 5px だが、**完全な円は別扱い**で 8 箇所ある（32px×4、56px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 31枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 3:4（11枚）、16:9（5枚）、1:1（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#004ea2 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1700px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:5px; padding:38px 42px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:57px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:14px; --section-y:24px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#004ea2` は文字と小さな部品にだけ使う。
- 余白 132px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 5px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
