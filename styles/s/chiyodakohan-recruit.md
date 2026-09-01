# 新卒採用情報 ふうのデザイン

- 出典: https://recruit.chiyodakohan.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: 採用サイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#d9f2f0` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1.5、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #d9f2f0;
  --sub: #2bb9b0;
  --ink: #ffffff;
  --ink-rev: #1c2c43;
  --on: #d9f2f0;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.5;
  --container: 1360px;
  --read: 640px;
  --section-y: 100px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 37.1% |
| 主色 | `#d9f2f0` | 30.4% |
| 副色 | `#2bb9b0` | 16.5% |
| 差し色 | `#74cec2` | 5.6% |
| 差し色 | `#b9cec4` | 3.3% |
| 差し色 | `#293f51` | 2.9% |

文字色は `#ffffff` / `#1c2c43` / `#707070`。

- 主色 `#d9f2f0` は差し色ではなく**面**で使う。画面の30%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#2bb9b0` | 5 | 0 | 2 | 0 |
| `#d9f2f0` | 3 | 0 | 0 | 0 |
| `#ffffff` | 13 | 106 | 6 | 0 |
| `#1c2c43` | 12 | 53 | 0 | 0 |
| `#2ba3b9` | 1 | 0 | 0 | 0 |
| `#707070` | 0 | 3 | 0 | 0 |

- `#d9f2f0` は面として3箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#d9f2f0` |
| `#2bb9b0` | `#d9f2f0` |
| `#d9f2f0`（主色） | `#d9f2f0` |
| `#1c2c43` | `#1c2c43` |

```css
.section{ --on:#d9f2f0 }                     /* 地の面 */
.section--main{ background:var(--main); color:#1c2c43; --on:#1c2c43 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#1c2c43 }
.section--main .btn--fill{ background:#1c2c43; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#2bb9b0` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Poppins
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1 |
| 見出し | 28px | 1.5 |
| 小見出し | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 1.5 |
| 補助 | 14px | — |
| 注記 | 10px | — |

- 本文は 16px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1360px／読ませる段は 640px
- セクションの上下余白: 100 / 120 / 160 / 44px（基本は 100px）
- 並びの間隔: 2 / 3 / 10 / 20px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1025 / 1024 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.5 | 17px / 行間 2 |
| 見出し | 32px | 25px / 行間 1.5 |
| セクションの上下余白 | 100px | 28px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 10px | 14px |

- 本文は 16px → 17px、セクション余白は 100px → 28px（PCの28%）。
- 文字サイズの段は 19 / 17 / 15 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 96px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 760px | — | ヒーロー（画像） | — | 全面 |
| 2 | 820px | `#2bb9b0` | 1カラム・画像あり | 左 | 右（39:61） |
| 3 | 1020px | `#ffffff` | 2カラム・画像あり | 左 | 見出しの下 |
| 4 | 820px | `#d9f2f0` | 1カラム・画像あり | 左 | 全幅 |
| 5 | 1640px | `#2bb9b0` | 3カラム・画像あり | 左 | 右（94:6） |
| 6 | 680px | — | 1カラム・画像あり | 中央 | 右（89:11） |
| 7 | 1520px | `#d9f2f0` | 6カラム・画像あり | 左 | 右（94:6） |
| 8 | 1320px | — | 3カラム・画像あり | 左 | 全幅 |
| 9 | 600px | — | 1カラム・画像あり | — | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#d9f2f0` の面が 3 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（11） / `#2bb9b0`（4） / `#d9f2f0`（3） / `#1c2c43`（2）
- 見出しは左6／中央1。
- 2カラムの分け方は 39:61 / 94:6 / 89:11 / 94:6。半分ずつには割らない。


## 部品

囲み（9箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 24px 32px;
}
```

ラベル・タグ

```css
.chip{
  background: #1c2c43; color: #ffffff;
  border-radius: 999px; padding: 5px 8px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（80px×2、24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 51枚使っている。うち 12 枚は画面いっぱいに置く
- 比率は 3:2（10枚）、16:9（8枚）、2:3（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d9f2f0 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:760px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#1c2c43; --on:#1c2c43 }
.section--main .btn--fill{ background:#1c2c43; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:24px 32px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:96px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:17px; --section-y:28px; --gap:14px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地色と主色 `#d9f2f0` の面を全幅で交互に置く。主色は画面の30%を占めるだけ使う。
- 余白 100px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
