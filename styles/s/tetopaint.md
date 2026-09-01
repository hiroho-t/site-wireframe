# tetopaint ふうのデザイン

- 出典: https://tetopaint.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／建築･住宅･不動産･空間設計･エクステリア／オーソドックス

白地に `#61636a` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2.3、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #61636a;
  --sub: #849697;
  --ink: #1b1e29;
  --ink-rev: #ffffff;
  --on: #61636a;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 16px;
  --lh-body: 2.3;
  --container: 1360px;
  --read: 700px;
  --section-y: 52px;
  --gap: 20px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 76.9% |
| 主色 | `#61636a` | 8.1% |
| 副色 | `#849697` | 3.4% |
| 差し色 | `#1b1e29` | 2.5% |
| 差し色 | `#d6ddda` | 1.7% |
| 差し色 | `#758584` | 1.7% |

文字色は `#1b1e29` / `#ffffff` / `#a4a5a9` / `#61636a`。

- 主色 `#61636a` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 20 | 42 | 3 | 2 |
| `#61636a` | 1 | 5 | 0 | 0 |
| `#1b1e29` | 15 | 107 | 11 | 8 |
| `#f2f2f2` | 5 | 0 | 0 | 0 |
| `#e8e8ea` | 3 | 0 | 5 | 0 |
| `#a4a5a9` | 0 | 38 | 0 | 0 |

- `#61636a` は文字色として5箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の8%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#61636a` |
| `#f2f2f2` | `#61636a` |
| `#1b1e29` | `#ffffff` |
| `#61636a`（主色） | `#ffffff` |

```css
.section{ --on:#61636a }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Roboto
- ウェイトは 500 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 75px | 1 |
| 見出し | 55px | 1 |
| 小見出し | 47px | — |
| リード | 45px | — |
| リード | 24px | — |
| リード | 22px | 1.2 |
| 本文 | 16px | 1.6 |

- 本文は 16px・行間 2.3。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1360px／読ませる段は 700px
- セクションの上下余白: 52 / 132 / 152 / 36px（基本は 52px）
- 並びの間隔: 10 / 15 / 20 / 22px
- 角丸: 5px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1025 / 768 / 576 / 414px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.3 | 15px / 行間 2.2 |
| 見出し | 75px | 51px / 行間 1 |
| セクションの上下余白 | 52px | 60px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 20px | 10px |

- 本文は 16px → 15px、セクション余白は 52px → 60px（PCの115%）。
- 文字サイズの段は 27 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #1b1e29; color: #ffffff;
  border: 1px solid #1b1e29;
  border-radius: 5px; padding: 15px 40px; min-height: 58px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.32px;
}
.btn-sub{
  background: transparent; color: #1b1e29;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 18px; font-weight: 500; letter-spacing: 0.96px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 71px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 右 | 全幅 |
| 2 | 1180px | — | 1カラム・画像あり | — | 全面 |
| 3 | 3360px | — | 4カラム・画像あり | 中央 | 左（47:53） |
| 4 | 1120px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 920px | `#61636a` | 4カラム・画像あり | 中央 | 見出しの下 |
| 6 | 500px | — | 3カラム・画像あり | — | 全面 |
| 7 | 780px | — | 5カラム・画像あり | 左 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（9） / `#f2f2f2`（5） / `#1b1e29`（3） / `#61636a`（1）
- 見出しは左1／中央3。
- 2カラムの分け方は 47:53。半分ずつには割らない。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: #f2f2f2;
  border-radius: 5px;
  padding: 30px 16px;
}
```


## 丸いもの

角丸は 5px だが、**完全な円は別扱い**で 15 箇所ある（40px×8、32px×7）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 31枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 4:3（8枚）、3:2（7枚）、1:1（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#61636a }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#f2f2f2;
  border-radius:5px; padding:30px 16px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#1b1e29; color:#ffffff; border-radius:5px;
  padding:15px 40px; min-height:58px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:60px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#61636a` は文字と小さな部品にだけ使う。
- 余白 52px と行間 2.3 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 5px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.3 より詰めない。
- 中途半端な角丸（5px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
