# THE LAKOTA HOUSE ふうのデザイン

- 出典: https://lakotahouse.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / モノトーン
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／ファッション･アパレル･アクセサリー･ジュエリー

#f7f5f0 の地に `#765e46` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 1.6、セクション間 200px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f7f5f0;
  --main: #765e46;
  --sub: #765e46;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #765e46;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "neue-haas-grotesk-text", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.6;
  --container: 1340px;
  --read: 672px;
  --section-y: 200px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f7f5f0` | 64.8% |
| 主色 | `#bfbdb7` | 6.1% |
| 副色 | `#765e46` | 5.7% |
| 差し色 | `#1d1210` | 4.5% |
| 差し色 | `#a0a0a0` | 3.9% |
| 差し色 | `#3a2118` | 3.6% |

文字色は `#000000` / `#ffffff`。

- 主色 `#765e46` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#efece5` | 29 | 0 | 0 | 0 |
| `#000000` | 3 | 83 | 0 | 0 |
| `#121212` | 1 | 0 | 0 | 1 |
| `#ffffff` | 0 | 38 | 0 | 0 |

- `#765e46` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#efece5` | `#765e46` |
| `#000000` | `#ffffff` |

```css
.section{ --on:#765e46 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f7f5f0` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Hiragino Kaku Gothic Pro（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: neue-haas-grotesk-text
- ウェイトは 500 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 56px | 1 |
| 見出し | 36px | 1 |
| 小見出し | 20px | 1.63 |
| リード | 16px | — |
| 本文 | 15px | 1.6 |
| 補助 | 13px | — |

- 本文は 15px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1340px／読ませる段は 672px
- セクションの上下余白: 200 / 180 / 112 / 204px（基本は 200px）
- 並びの間隔: 10 / 12 / 20 / 50px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 990 / 989 / 750 / 749px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.6 | 14px / 行間 1.6 |
| 見出し | 56px | 18px / 行間 1.64 |
| セクションの上下余白 | 200px | 400px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 20px | 10px |

- 本文は 15px → 14px、セクション余白は 200px → 400px（PCの200%）。
- 文字サイズの段は 32 / 26 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #121212; color: #ffffff;
  border-radius: 0px; padding: 0px 30px; min-height: 47px;
  font-size: 15px; font-weight: 500; letter-spacing: 1px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 540px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1040px | — | 2カラム・画像あり | 左 | 右（47:53） |
| 4 | 740px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 5 | 560px | — | 1カラム・画像あり | 右 | 左（58:42） |
| 6 | 900px | — | 5カラム・画像あり | 左 | 全幅 |
| 7 | 420px | — | 2カラム・画像あり | 左 | 右（45:55） |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#efece5`（14） / `#000000`（1）
- 見出しは左3／中央2。
- 2カラムの分け方は 47:53 / 58:42 / 45:55。半分ずつには割らない。


## 部品

囲み（23箇所で同じ形）

```css
.card{
  background: #efece5;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 画像

- 59枚使っている。うち 18 枚は画面いっぱいに置く
- 比率は 3:4（33枚）、3:2（21枚）、1:1（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#765e46 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#efece5;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#121212; color:#ffffff; border-radius:0px;
  padding:0px 30px; min-height:47px;
  font-size:15px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:750px){
  :root{ --fs-body:14px; --section-y:400px; --gap:10px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f7f5f0` のまま。主色 `#765e46` は文字と小さな部品にだけ使う。
- 余白 200px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
