# Meikei High School 茗溪学園中学校高等学校 ふうのデザイン

- 出典: https://meikei.ac.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／BtoCのサイト／学校･教育

白地に `#00175c` を大きな面で置く配色。影を使って浮かせる。本文 17px・行間 1、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #00175c;
  --sub: #4c5c8d;
  --ink: #ffffff;
  --ink-rev: #00175c;
  --on: #00175c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 17px;
  --lh-body: 1;
  --container: 1160px;
  --read: 864px;
  --section-y: 52px;
  --gap: 13px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 64% |
| 主色 | `#00175c` | 25.8% |
| 副色 | `#4c5c8d` | 5.7% |
| 差し色 | `#8391a9` | 1.9% |
| 差し色 | `#d1d9dc` | 1.9% |

文字色は `#ffffff` / `#00175c` / `#1c1c1c` / `#6194d3`。

- 主色 `#00175c` は差し色ではなく**面**で使う。画面の26%を占めている。
- 影は`rgba(0, 23, 92, 0.2) 0px 1px 1px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 35 | 111 | 1 | 0 |
| `#00175c` | 28 | 129 | 0 | 0 |
| `#12286a` | 5 | 0 | 0 | 0 |
| `#6194d3` | 9 | 109 | 0 | 0 |
| `#f2f8ff` | 2 | 0 | 0 | 0 |
| `#1c1c1c` | 0 | 122 | 0 | 0 |

- `#00175c` は文字色として129箇所で使うのが主。面としては28箇所しかないが、1枚が大きく画面の26%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#00175c` |
| `#00175c`（主色） | `#00175c` |
| `#6194d3` | `#00175c` |
| `#12286a` | `#00175c` |

```css
.section{ --on:#00175c }                     /* 地の面 */
.section--main{ background:var(--main); color:#00175c; --on:#00175c }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#00175c }
.section--main .btn--fill{ background:#00175c; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#00175c` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 42px | 1.25 |
| 見出し | 25px | 1.5 |
| 小見出し | 19px | 1.56 |
| 本文 | 17px | 1.5 |
| 補助 | 16px | — |
| 注記 | 15px | — |
| 注記 | 13px | — |

- 本文は 17px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1160px／読ませる段は 864px
- セクションの上下余白: 52 / 168 / 48 / 60px（基本は 52px）
- 並びの間隔: 3 / 12 / 13 / 21px
- 角丸: 0px が基本。大きな面だけ 6px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1025 / 1024px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 1 | 13px / 行間 1 |
| 見出し | 42px | 26px / 行間 1.46 |
| セクションの上下余白 | 52px | 40px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 13px | 8px |

- 本文は 17px → 13px、セクション余白は 52px → 40px（PCの77%）。
- 文字サイズの段は 16 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #00175c;
  border-radius: 0px; padding: 0px 0px; min-height: 31px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 6px; padding: 0px 25px; min-height: 59px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 31px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1800px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 2860px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 800px | `#ffffff` | 1カラム・画像あり | 中央 | — |
| 4 | 1440px | `#f2f8ff` | 2カラム・画像あり | 中央 | — |
| 5 | 5900px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1240px | `#ffffff` | 1カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1520px | `#00175c` | 6カラム・画像あり | 左 | 見出しの下 |
| 8 | 760px | `#ffffff` | 3カラム・画像あり | 左 | 見出しの下 |
| 9 | 300px | `#eef4fb` | 6カラム・画像あり | — | 全面 |
| 10 | 680px | `#00175c` | 2カラム・画像あり | 左 | 全幅 |
| 11 | 900px | — | 1カラム・画像あり | — | 全面 |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#00175c` の面が 8 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（28） / `#00175c`（8） / `#6194d3`（7） / `#12286a`（5）
- 見出しは左4／中央5。


## 部品

囲み（15箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 6px;
  padding: 34px 34px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 72 箇所ある（16px×39、32px×11、232px×8）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 90枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 16:9（31枚）、3:4（30枚）、1:1（24枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#00175c }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#00175c; --on:#00175c }
.section--main .btn--fill{ background:#00175c; color:var(--main) }
.card{ background:#ffffff;
  border-radius:6px; padding:34px 34px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#00175c; border-radius:0px;
  padding:0px 0px; min-height:31px;
  font-size:17px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:40px; --gap:8px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地色と主色 `#00175c` の面を全幅で交互に置く。主色は画面の26%を占めるだけ使う。
- 余白 52px と行間 1 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 6px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 6px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
