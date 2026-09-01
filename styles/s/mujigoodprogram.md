# MUJI GOOD PROGRAM ふうのデザイン

- 出典: https://www.muji.com/jp/ja/service/goodprogram/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コンテンツページ／サービス･アプリ･ツール･SaaS／オーソドックス

白地に `#7f0019` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.6、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #7f0019;
  --ink: #3c3c43;
  --ink-rev: #1d1d1f;
  --on: #7f0019;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Helvetica Neue", sans-serif;
  --font-en: "Helvetica Neue", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.6;
  --container: 1104px;
  --read: 1020px;
  --section-y: 32px;
  --gap: 18px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 73.3% |
| 主色 | `#f2f1ed` | 22.5% |

文字色は `#3c3c43` / `#1d1d1f` / `#6d6d72` / `#7f0019`。

- 主色 `#7f0019` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f2f1ed` | 7 | 0 | 7 | 0 |
| `#f4eede` | 12 | 0 | 0 | 0 |
| `#ffffff` | 4 | 1 | 0 | 0 |
| `#e8dabf` | 1 | 0 | 0 | 0 |
| `#dde5cf` | 7 | 0 | 9 | 0 |
| `#3c3c43` | 1 | 73 | 1 | 1 |
| `#1d1d1f` | 0 | 38 | 0 | 0 |
| `#6d6d72` | 0 | 10 | 0 | 0 |
| `#7f0019` | 0 | 11 | 0 | 0 |

- `#7f0019` は文字色として11箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f4eede` | `#7f0019` |
| `#f5f5f5` | `#7f0019` |
| `#ffffff`（地） | `#7f0019` |
| `#e8dabf` | `#7f0019` |

```css
.section{ --on:#7f0019 }                     /* 地の面 */
.section--main{ background:var(--main); color:#1d1d1f; --on:#1d1d1f }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#1d1d1f }
.section--main .btn--fill{ background:#1d1d1f; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e6e2d6`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Helvetica Neue
- 欧文: Helvetica Neue
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 38px | 1.6 |
| 見出し | 32px | 1.6 |
| 小見出し | 26px | 1.6 |
| リード | 22px | — |
| リード | 20px | — |
| リード | 18px | 1.6 |
| 本文 | 16px | 1.6 |

- 本文は 16px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1104px／読ませる段は 1020px
- セクションの上下余白: 32 / 40 / 64 / 96px（基本は 32px）
- 並びの間隔: 4 / 16 / 18 / 24px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1000 / 999 / 840 / 600 / 599px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.6 | 14px / 行間 1.61 |
| セクションの上下余白 | 32px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 18px | —px |

- 本文は 16px → 14px、セクション余白は 32px → 40px（PCの125%）。
- 文字サイズの段は 23 / 14 / 12px。

## ボタン

```css
.btn{
  background: #3c3c43; color: #ffffff;
  border: 1px solid #3c3c43;
  border-radius: 4px; padding: 16px 20px; min-height: 60px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1240px | — | ヒーロー（画像） | — | 全面 |
| 2 | 600px | — | 1カラム・画像あり | — | — |
| 3 | 3020px | — | 1カラム・画像あり | 左 | — |
| 4 | 2220px | — | 3カラム・画像あり | 中央 | — |
| 5 | 2240px | `#f2f1ed` | 1カラム・画像あり | 中央 | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f4eede`（9） / `#f5f5f5`（6） / `#ffffff`（2） / `#e8dabf`（1）
- 見出しは左1／中央2。


## 部品

囲み（7箇所で同じ形）

```css
.card{
  background: #f4eede;
  border: 3px solid var(--on);   /* 実測は #e6e2d6。面によって入れ替える */
  border-radius: 4px;
  padding: 38px 22px;
}
```

ラベル・タグ

```css
.chip{
  background: #e0ceaa; color: #3c3c43;
  border-radius: 999px; padding: 2px 14px; font-size: 18px;
}
```

## 画像

- 8枚使っている
- 比率は 3:2（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#7f0019 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1240px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#1d1d1f; --on:#1d1d1f }
.section--main .btn--fill{ background:#1d1d1f; color:var(--main) }
.card{ background:#f4eede; border:3px solid var(--on);
  border-radius:4px; padding:38px 22px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#3c3c43; color:#ffffff; border-radius:4px;
  padding:16px 20px; min-height:60px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:40px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#7f0019` は文字と小さな部品にだけ使う。
- 余白 32px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 3px の線＋角丸 4px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
