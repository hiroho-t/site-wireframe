# 国立大学協会 ふうのデザイン

- 出典: https://www.janu.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: 学校･教育／オーソドックス／シンプル

白地に `#d0d3b8` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #d0d3b8;
  --sub: #d4b79f;
  --ink: #222222;
  --ink-rev: #0068b7;
  --on: #d0d3b8;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 16px;
  --lh-body: 1;
  --container: 604px;
  --read: 1280px;
  --section-y: 40px;
  --gap: 25px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 73.5% |
| 主色 | `#d0d3b8` | 5.5% |
| 副色 | `#d4b79f` | 4.9% |
| 差し色 | `#e5e2d5` | 4% |
| 差し色 | `#a1958d` | 2.9% |
| 差し色 | `#6b6769` | 2.7% |

文字色は `#222222` / `#0068b7` / `#888888` / `#ffffff`。

- 主色 `#d0d3b8` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.05) 0px 0px 5px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 18 | 3 | 1 | 0 |
| `#f3f2ed` | 4 | 0 | 0 | 0 |
| `#0068b7` | 2 | 32 | 0 | 1 |
| `#222222` | 0 | 69 | 10 | 0 |
| `#888888` | 0 | 4 | 0 | 0 |

- `#d0d3b8` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#d0d3b8` |
| `#f3f2ed` | `#d0d3b8` |

```css
.section{ --on:#d0d3b8 }                     /* 地の面 */
.section--main{ background:var(--main); color:#0068b7; --on:#0068b7 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#0068b7 }
.section--main .btn--fill{ background:#0068b7; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f3f2ed` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 52px | 1.46 |
| 見出し | 36px | 1.2 |
| 本文 | 16px | 1.93 |
| 補助 | 15px | 1.8 |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1。

## レイアウト

- コンテンツ幅: 最大 604px／読ませる段は 1280px
- セクションの上下余白: 40 / 44 / 52 / 60px（基本は 40px）
- 並びの間隔: 6 / 20 / 25 / 55px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 1180 / 1000 / 750 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1 | 14px / 行間 1.85 |
| 見出し | 52px | 28px / 行間 1.2 |
| セクションの上下余白 | 40px | 24px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 25px | 20px |

- 本文は 16px → 14px、セクション余白は 40px → 24px（PCの60%）。
- 文字サイズの段は 28 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #0068b7;
  border-radius: 0px; padding: 0px 0px; min-height: 80px;
  font-size: 12px; font-weight: 700; letter-spacing: 0.6px;
}
.btn-sub{
  background: #0068b7; color: #ffffff;
  border-radius: 9999px; padding: 5px 20px; min-height: 26px;
  font-size: 15px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー（画像） | 中央 | 右（94:6） |
| 2 | 1620px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 3 | 860px | — | 2カラム・画像あり | 左 | — |
| 4 | 640px | — | 6カラム・画像あり | 中央 | 見出しの下 |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（16） / `#f3f2ed`（2）
- 見出しは左2／中央2。
- 2カラムの分け方は 94:6。半分ずつには割らない。


## 部品

囲み（15箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 5px;
  padding: 6px 6px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 5px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 11 箇所ある（40px×6、24px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 42枚使っている
- 比率は 3:2（25枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d0d3b8 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#0068b7; --on:#0068b7 }
.section--main .btn--fill{ background:#0068b7; color:var(--main) }
.card{ background:#ffffff;
  border-radius:5px; padding:6px 6px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#0068b7; border-radius:0px;
  padding:0px 0px; min-height:80px;
  font-size:12px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:750px){
  :root{ --fs-body:14px; --section-y:24px; --gap:20px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#d0d3b8` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 5px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
