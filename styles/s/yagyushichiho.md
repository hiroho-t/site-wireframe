# 柳生質舗 ふうのデザイン

- 出典: https://yagyu-shop.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／サービス･アプリ･ツール･SaaS／金融･投資･保険･士業

#f8f8f8 の地に `#636e56` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.5、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f8f8f8;
  --main: #636e56;
  --sub: #636e56;
  --ink: #1c1c1c;
  --ink-rev: #ffffff;
  --on: #636e56;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Shippori Mincho", sans-serif;
  --font-en: "Shippori Mincho", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.5;
  --container: 1292px;
  --read: 584px;
  --section-y: 80px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f8f8f8` | 79.3% |
| 主色 | `#d8dbdc` | 7.1% |
| 副色 | `#636e56` | 3.2% |
| 差し色 | `#232322` | 2.3% |
| 差し色 | `#a09080` | 2% |
| 差し色 | `#5d453c` | 1.8% |

文字色は `#1c1c1c` / `#ffffff` / `#f8f8f8` / `#0e7ae0`。

- 主色 `#636e56` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 42 | 15 | 0 | 9 |
| `#1c1c1c` | 2 | 214 | 2 | 0 |
| `#f8f8f8` | 0 | 2 | 0 | 0 |
| `#0e7ae0` | 0 | 1 | 0 | 0 |

- `#636e56` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#636e56` |
| `#fafafa` | `#636e56` |

```css
.section{ --on:#636e56 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f8f8f8` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Shippori Mincho
- 欧文: Shippori Mincho
- ウェイトは 500 / 600 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 58px | 1.5 |
| 見出し | 36px | — |
| 小見出し | 24px | 1 |
| リード | 20px | 1.5 |
| リード | 18px | — |
| 本文 | 16px | 1.5 |
| 補助 | 14px | — |

- 本文は 16px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1292px／読ませる段は 584px
- セクションの上下余白: 80 / 200 / 100 / 176px（基本は 80px）
- 並びの間隔: 5 / 7 / 10 / 20px
- 角丸: 0px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1024 / 768 / 576 / 414px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.5 | 14px / 行間 2.2 |
| 見出し | 58px | 34px / 行間 1.5 |
| セクションの上下余白 | 80px | 48px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 10px | 10px |

- 本文は 16px → 14px、セクション余白は 80px → 48px（PCの60%）。
- 文字サイズの段は 28 / 17 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #1c1c1c;
  border-radius: 40px; padding: 5px 18px; min-height: 30px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #1c1c1c;
  border: 1px solid #1c1c1c;
  border-radius: 2px; padding: 6px 12px; min-height: 37px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1160px | — | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 540px | — | 1カラム・画像あり | 中央 | — |
| 3 | 960px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 900px | — | 6カラム・画像あり | 中央 | — |
| 5 | 1200px | — | 1カラム・画像あり | 中央 | 左（23:77） |
| 6 | 620px | — | 6カラム・画像あり | — | 全面 |
| 7 | 680px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 8 | 780px | `#ffffff` | 1カラム・文字だけ | 左 | — |
| 9 | 1060px | `#ffffff` | 1カラム・画像あり | 中央 | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（9） / `#fafafa`（8）
- 見出しは左1／中央7。
- 2カラムの分け方は 23:77。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 44px 40px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #1c1c1c;
  border-radius: 999px; padding: 5px 18px; font-size: 14px;
}
```

## 画像

- 29枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 3:2（14枚）、1:1（12枚）、2:3（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#636e56 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1160px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:44px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#1c1c1c; border-radius:40px;
  padding:5px 18px; min-height:30px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:48px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#f8f8f8` のまま。主色 `#636e56` は文字と小さな部品にだけ使う。
- 余白 80px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 40px 以外）を混ぜない。
