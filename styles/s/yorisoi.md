# ヨリソイ ふうのデザイン

- 出典: https://yado-riki.com/yorisoi/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／企画･開発･マーケティング･コンサルティング／オーソドックス

#fffbed の地に `#d94933` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.75、セクション間 76px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fffbed;
  --main: #d94933;
  --sub: #e7f2f3;
  --ink: #3d3535;
  --ink-rev: #db4933;
  --on: #d94933;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.75;
  --container: 1120px;
  --read: 584px;
  --section-y: 76px;
  --gap: 16px;
  --radius: 7px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fffbed` | 76% |
| 主色 | `#d94933` | 15.1% |
| 副色 | `#e7f2f3` | 5.6% |

文字色は `#3d3535` / `#db4933` / `#fdf6da` / `#ffffff`。

- 主色 `#d94933` は差し色ではなく**面**で使う。画面の15%を占めている。
- 影は`rgb(162, 46, 46) 0px 6px 0px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fffbed` | 26 | 0 | 1 | 5 |
| `#ffffff` | 97 | 33 | 4 | 3 |
| `#db4933` | 25 | 86 | 5 | 2 |
| `#fdf6da` | 5 | 12 | 7 | 2 |
| `#e7f2f3` | 1 | 0 | 0 | 0 |
| `#3d3535` | 0 | 159 | 0 | 0 |

- `#d94933` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#d94933` |
| `#fffbed`（地） | `#d94933` |
| `#db4933` | `#db4933` |
| `#fdf6da` | `#d94933` |

```css
.section{ --on:#d94933 }                     /* 地の面 */
.section--main{ background:var(--main); color:#db4933; --on:#db4933 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#db4933 }
.section--main .btn--fill{ background:#db4933; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#fffbed` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Poppins
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 30px | 1.75 |
| 見出し | 23px | 1.75 |
| 小見出し | 20px | — |
| リード | 19px | — |
| 本文 | 16px | 1.75 |
| 補助 | 14px | — |

- 本文は 16px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 584px
- セクションの上下余白: 76 / 36 / 68 / 96px（基本は 76px）
- 並びの間隔: 8 / 13 / 16 / 56px
- 角丸: 7px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1599 / 1299 / 1023 / 767 / 567px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.75 | 14px / 行間 1.75 |
| 見出し | 30px | 20px / 行間 1.75 |
| セクションの上下余白 | 76px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | 14px |

- 本文は 16px → 14px、セクション余白は 76px → 40px（PCの53%）。
- 文字サイズの段は 20 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #3d3535;
  border-radius: 0px; padding: 0px 0px; min-height: 39px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.786939px;
}
.btn-sub{
  background: transparent; color: #3d3535;
  border: 1px solid #f7d2cd;
  border-radius: 7px; padding: 3px 14px; min-height: 32px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.786939px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 40px;
  font-size: 19px; font-weight: 700; letter-spacing: 0.786939px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | `#fffbed` | ヒーロー（画像） | — | 全面 |
| 2 | 640px | `#ffffff` | 3カラム・画像あり | 左 | 見出しの下 |
| 3 | 920px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 4 | 4560px | `#fffbed` | 5カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1120px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 700px | `#fffbed` | 2カラム・画像あり | 中央 | 見出しの下 |
| 7 | 2580px | `#fffbed` | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 1020px | `#fffbed` | 5カラム・画像あり | 中央 | 見出しの下 |
| 9 | 640px | `#db4933` | 2カラム・画像あり | — | 全面 |
| 10 | 1960px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 11 | 1460px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 12 | 980px | `#fffbed` | 4カラム・画像あり | 中央 | 見出しの下 |
| 13 | 340px | — | 1カラム・文字だけ | — | — |

- 全13セクション。
- 使われている面の色: `#ffffff`（42） / `#fffbed`（9） / `#db4933`（5） / `#fdf6da`（3）
- 見出しは左1／中央9。


## 部品

囲み（7箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 37px;
  padding: 52px 60px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #3d3535;
  border: 1px solid currentColor;
  border-radius: 7px; padding: 3px 14px; font-size: 14px;
}
```

## 丸いもの

角丸は 7px だが、**完全な円は別扱い**で 47 箇所ある（40px×30、48px×16、64px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 63枚使っている
- 比率は 3:4（14枚）、3:2（14枚）、1:1（12枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d94933 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#db4933; --on:#db4933 }
.section--main .btn--fill{ background:#db4933; color:var(--main) }
.card{ background:#ffffff;
  border-radius:37px; padding:52px 60px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#3d3535; border-radius:0px;
  padding:0px 0px; min-height:39px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:14px; --section-y:40px; --gap:14px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#d94933` の面を交互に置く。主色は画面の15%を占めるだけ使う。
- 余白 76px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 37px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.75 より詰めない。
- 中途半端な角丸（7px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
