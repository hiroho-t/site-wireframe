# 日本自然保護協会オフィシャルサイト ふうのデザイン

- 出典: https://www.nacsj.or.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／地域･地方創生･政治･行政･自治体･NPO／エコ･SDGs･サステナビリティ･脱炭素

白地に `#8c7d6c` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #8c7d6c;
  --sub: #92a69d;
  --ink: #363640;
  --ink-rev: #ffffff;
  --on: #8c7d6c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "FOT-筑紫A丸ゴシック Std B", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 14px;
  --lh-body: 1;
  --container: 1200px;
  --read: 580px;
  --section-y: 100px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 74.1% |
| 主色 | `#8c7d6c` | 3.3% |
| 副色 | `#92a69d` | 3.1% |
| 差し色 | `#bfc7c1` | 3.1% |
| 差し色 | `#153b31` | 2.6% |
| 差し色 | `#e9ece4` | 2.5% |

文字色は `#363640` / `#ffffff` / `#008e66` / `#004b36`。

- 主色 `#8c7d6c` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 32 | 81 | 0 | 11 |
| `#f1f5f7` | 2 | 0 | 0 | 0 |
| `#fbf8e9` | 1 | 0 | 0 | 0 |
| `#008e66` | 15 | 39 | 20 | 1 |
| `#004b36` | 10 | 12 | 5 | 9 |
| `#363640` | 0 | 166 | 0 | 0 |

- `#8c7d6c` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f1f5f7` | `#8c7d6c` |
| `#ffffff`（地） | `#8c7d6c` |
| `#fbf8e9` | `#8c7d6c` |
| `#004b36` | `#ffffff` |

```css
.section{ --on:#8c7d6c }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: FOT-筑紫A丸ゴシック Std B
- 欧文: Inter
- ウェイトは 400 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 85px | 1 |
| 見出し | 30px | 1 |
| 小見出し | 20px | — |
| リード | 18px | 1.5 |
| リード | 16px | 1.5 |
| 本文 | 14px | 1 |
| 補助 | 12px | — |

- 本文は 14px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 580px
- セクションの上下余白: 100 / 92 / 104 / 60px（基本は 100px）
- 並びの間隔: 5 / 8 / 10 / 15px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1400 / 1100 / 480 / 375 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1 | 12px / 行間 1.5 |
| 見出し | 85px | 20px / 行間 1 |
| セクションの上下余白 | 100px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 10px | 10px |

- 本文は 14px → 12px、セクション余白は 100px → 40px（PCの40%）。
- 文字サイズの段は 14 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #004b36;
  border: 1px solid #004b36;
  border-radius: 9999px; padding: 0px 60px; min-height: 60px;
  font-size: 18px; font-weight: 600; letter-spacing: 0.8px;
}
.btn-sub{
  background: #004b36; color: #ffffff;
  border-radius: 50%; padding: 0px 0px; min-height: 64px;
  font-size: 30px; font-weight: 700; letter-spacing: 0.8px;
}
.btn-sub{
  background: #004b36; color: #ffffff;
  border-radius: 9999px; padding: 0px 0px; min-height: 75px;
  font-size: 20px; font-weight: 300; letter-spacing: 1px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 340px | — | 4カラム・画像あり | 左 | 右（17:83） |
| 3 | 1120px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 900px | — | 1カラム・画像あり | — | 全面 |
| 5 | 760px | — | 4カラム・画像あり | 中央 | 右（18:82） |
| 6 | 3000px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 7 | 1020px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 8 | 1120px | `#fbf8e9` | 1カラム・画像あり | 中央 | 見出しの下 |
| 9 | 1720px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 10 | 720px | `#f1f5f7` | 2カラム | 中央 | — |
| 11 | 580px | — | 1カラム・文字だけ | 左 | — |
| 12 | 620px | `#f1f5f7` | 6カラム・画像あり | 左 | 右（17:83） |
| 13 | 380px | — | 1カラム・画像あり | — | — |
| 14 | 620px | — | 4カラム・画像あり | — | 全幅 |

- 全14セクション。
- 使われている面の色: `#f1f5f7`（2） / `#ffffff`（1） / `#fbf8e9`（1） / `#004b36`（1）
- 見出しは左4／中央6。
- 2カラムの分け方は 17:83 / 18:82 / 17:83。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #004b36; color: #ffffff;
  border-radius: 4px; padding: 5px 5px; font-size: 11px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 7 箇所ある（64px×4、48px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 53枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（31枚）、1:1（3枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#8c7d6c }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#004b36; border-radius:9999px;
  padding:0px 60px; min-height:60px;
  font-size:18px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:480px){
  :root{ --fs-body:12px; --section-y:40px; --gap:10px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#8c7d6c` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
