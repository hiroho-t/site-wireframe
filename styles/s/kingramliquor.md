# お酒買取専門店キングラムリカー ふうのデザイン

- 出典: https://kingram-liquor.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／サービス･アプリ･ツール･SaaS／料理･食べ物･飲み物･食品製造

白地に `#2a5c3f` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.8、セクション間 112px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #2a5c3f;
  --sub: #2a5c3f;
  --ink: #191f20;
  --ink-rev: #ffffff;
  --on: #2a5c3f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter Tight", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1088px;
  --read: 608px;
  --section-y: 112px;
  --gap: 14px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 32.1% |
| 主色 | `#f1f0eb` | 23.6% |
| 副色 | `#2a5c3f` | 18.8% |
| 差し色 | `#191f20` | 8.6% |
| 差し色 | `#34724e` | 7.8% |
| 差し色 | `#eac512` | 5.3% |

文字色は `#191f20` / `#ffffff` / `#a8aeaf` / `#f1f0eb`。

- 主色 `#2a5c3f` は差し色ではなく**面**で使う。画面の19%を占めている。
- 影は`rgba(124, 128, 129, 0.25) 0px 2px 15px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 57 | 29 | 28 | 9 |
| `#f1f0eb` | 9 | 8 | 0 | 1 |
| `#eac512` | 3 | 0 | 0 | 0 |
| `#191f20` | 4 | 177 | 6 | 2 |
| `#3c845a` | 4 | 21 | 0 | 1 |
| `#a8aeaf` | 0 | 15 | 0 | 0 |

- `#2a5c3f` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#2a5c3f` |
| `#f1f0eb` | `#2a5c3f` |
| `#eac512` | `#2a5c3f` |
| `#3c845a` | `#ffffff` |

```css
.section{ --on:#2a5c3f }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#f1f0eb` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Inter Tight
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 53px | 1.6 |
| 見出し | 32px | 1.6 |
| 小見出し | 19px | 1 |
| リード | 18px | — |
| 本文 | 16px | 1.6 |
| 補助 | 14px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1088px／読ませる段は 608px
- セクションの上下余白: 112 / 40 / 76 / 48px（基本は 112px）
- 並びの間隔: 3 / 8 / 14 / 16px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1599 / 1299 / 1023 / 767 / 567px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 14px / 行間 1.8 |
| 見出し | 53px | 32px / 行間 1.6 |
| セクションの上下余白 | 112px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 14px | 10px |

- 本文は 16px → 14px、セクション余白は 112px → 32px（PCの29%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #191f20;
  border: 1px solid #d9dcdd;
  border-radius: 0px; padding: 19px 16px; min-height: 48px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.157388px;
}
.btn-sub{
  background: #ffffff; color: #191f20;
  border: 2px solid #c3c9ca;
  border-radius: 10px; padding: 16px 31px; min-height: 64px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.157388px;
}
.btn-sub{
  background: transparent; color: #191f20;
  border-radius: 0px; padding: 0px 0px; min-height: 47px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.157388px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 720px | — | ヒーロー（画像） | — | 全面 |
| 2 | 320px | `#f1f0eb` | 帯・区切り | 左 | — |
| 3 | 380px | — | 2カラム・画像あり | 右 | 左（21:79） |
| 4 | 1120px | `#f1f0eb` | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 420px | `#eac512` | 2カラム・画像あり | — | 全幅 |
| 6 | 2220px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1960px | — | 6カラム・画像あり | 左 | 左（55:45） |
| 8 | 680px | — | 6カラム・画像あり | 中央 | — |
| 9 | 740px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 10 | 480px | — | 4カラム・画像あり | — | 全面 |
| 11 | 420px | `#eac512` | 2カラム・画像あり | — | 全幅 |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（20） / `#f1f0eb`（5） / `#eac512`（2） / `#3c845a`（1）
- 見出しは左2／中央4。
- 2カラムの分け方は 21:79 / 55:45。半分ずつには割らない。


## 部品

囲み（16箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 2px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 10px;
  padding: 14px 14px;
  box-shadow: rgba(124, 128, 129, 0.25) 0px 2px 15px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #eac512; color: #191f20;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 2px 7px; font-size: 10px;
}
```

## 丸いもの

角丸は 10px だが、**完全な円は別扱い**で 9 箇所ある（32px×4、104px×2、152px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 44枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 1:1（25枚）、21:9（2枚）、16:9（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2a5c3f }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:720px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff; border:2px solid var(--on);
  border-radius:10px; padding:14px 14px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#191f20; border-radius:0px;
  padding:19px 16px; min-height:48px;
  font-size:10px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:14px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#2a5c3f` の面を全幅で交互に置く。主色は画面の19%を占めるだけ使う。
- 余白 112px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 2px の線＋角丸 10px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
