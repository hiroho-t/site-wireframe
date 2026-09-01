# ALGO ARTIS（アルゴ・アーティス） ふうのデザイン

- 出典: https://www.algo-artis.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／BtoBのサイト／Web･IT･XR･デジタル･テクノロジー

#f2f4f6 の地に `#1054d6` を大きな面で置く配色。影も枠線もほとんど使わない。本文 18px・行間 2.1、セクション間 96px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f2f4f6;
  --main: #1054d6;
  --sub: #0d3ad1;
  --ink: #2c2c2c;
  --ink-rev: #474747;
  --on: #1054d6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 18px;
  --lh-body: 2.1;
  --container: 1360px;
  --read: 604px;
  --section-y: 96px;
  --gap: 10px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f2f4f6` | 83.9% |
| 主色 | `#1054d6` | 10.6% |
| 副色 | `#0d3ad1` | 3.6% |
| 差し色 | `#899ee2` | 1.9% |

文字色は `#2c2c2c` / `#474747` / `#ffffff` / `#0031d3`。

- 主色 `#1054d6` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#0031d3` | 9 | 13 | 0 | 5 |
| `#ffffff` | 23 | 33 | 1 | 1 |
| `#c9e1f2` | 2 | 0 | 0 | 1 |
| `#2c2c2c` | 0 | 40 | 0 | 0 |
| `#474747` | 0 | 7 | 0 | 0 |

- `#1054d6` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#1054d6` |
| `#0031d3` | `#474747` |

```css
.section{ --on:#1054d6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#474747; --on:#474747 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#474747 }
.section--main .btn--fill{ background:#474747; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Inter
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | — |
| 見出し | 28px | — |
| 本文 | 18px | 2.1 |
| 補助 | 15px | 1.5 |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 18px・行間 2.1。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1360px／読ませる段は 604px
- セクションの上下余白: 96 / 64 / 84 / 112px（基本は 96px）
- 並びの間隔: 3 / 4 / 10 / 16px
- 角丸: 10px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1920 / 1536 / 1280 / 1024 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 2.1 | 14px / 行間 2.1 |
| 見出し | 34px | 15px / 行間 1.5 |
| セクションの上下余白 | 96px | 60px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 10px | 10px |

- 本文は 18px → 14px、セクション余白は 96px → 60px（PCの63%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 70px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.3088px;
}
.btn-sub{
  background: #0031d3; color: #ffffff;
  border-radius: 4px; padding: 0px 20px; min-height: 70px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.3088px;
}
.btn-sub{
  background: transparent; color: #2c2c2c;
  border-radius: 0px; padding: 0px 0px; min-height: 35px;
  font-size: 18px; font-weight: 700; letter-spacing: 0.3576px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1520px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 1220px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 3 | 1120px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 4 | 160px | — | 6カラム・画像あり | — | — |
| 5 | 980px | — | 3カラム・画像あり | 左 | 右（48:52） |
| 6 | 740px | — | 1カラム・画像あり | 左 | — |
| 7 | 880px | — | 6カラム・画像あり | 左 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（20） / `#0031d3`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 48:52。半分ずつには割らない。


## 部品

囲み（20箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 10px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #0031d3;
  border: 1px solid currentColor;
  border-radius: 4px; padding: 2px 10px; font-size: 14px;
}
```

## 画像

- 21枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:4（13枚）、4:3（2枚）、3:2（2枚）
- 角丸 10px。画像も箱と同じだけ丸める

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1054d6 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1520px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#474747; --on:#474747 }
.section--main .btn--fill{ background:#474747; color:var(--main) }
.card{ background:#ffffff;
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:70px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:10px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:60px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#1054d6` の面を全幅で交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 96px と行間 2.1 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 10px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2.1 より詰めない。
- 中途半端な角丸（10px と 4px 以外）を混ぜない。
