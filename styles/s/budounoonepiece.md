# ぶどうのワンピース ふうのデザイン

- 出典: https://budou-no-onepiece.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／料理･食べ物･飲み物･食品製造

白地に `#d6c5ab` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 18px・行間 2.25、セクション間 160px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #d6c5ab;
  --sub: #69285a;
  --ink: #69285a;
  --ink-rev: #f4ebce;
  --on: #d6c5ab;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanMP", sans-serif;
  --font-en: "YakuHanMP", sans-serif;
  --fs-body: 18px;
  --lh-body: 2.25;
  --container: 1152px;
  --read: 816px;
  --section-y: 160px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 88.2% |
| 主色 | `#d6c5ab` | 6.6% |
| 副色 | `#69285a` | 3.4% |

文字色は `#69285a` / `#f4ebce` / `#9b927e` / `#ffffff`。

- 主色 `#d6c5ab` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#d6c5ab` | 2 | 0 | 0 | 0 |
| `#f4ebce` | 1 | 10 | 0 | 0 |
| `#f9f9f9` | 1 | 1 | 0 | 0 |
| `#69285a` | 2 | 73 | 0 | 1 |
| `#9b927e` | 0 | 1 | 0 | 0 |

- `#d6c5ab` は面として2箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#d6c5ab`（主色） | `#d6c5ab` |
| `#f4ebce` | `#d6c5ab` |
| `#f9f9f9` | `#d6c5ab` |
| `#69285a` | `#f4ebce` |

```css
.section{ --on:#d6c5ab }                     /* 地の面 */
.section--main{ background:var(--main); color:#f4ebce; --on:#f4ebce }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#f4ebce }
.section--main .btn--fill{ background:#f4ebce; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: YakuHanMP
- 欧文: YakuHanMP
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.3 |
| 見出し | 23px | 1.75 |
| 小見出し | 22px | 1.75 |
| リード | 20px | 1.8 |
| 本文 | 18px | 2.25 |
| 補助 | 16px | — |
| 注記 | 14px | — |

- 本文は 18px・行間 2.25。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1152px／読ませる段は 816px
- セクションの上下余白: 160 / 56 / 64 / 72px（基本は 160px）
- 並びの間隔: px
- 角丸: 0px が基本。大きな面だけ 7px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 990 / 768 / 767 / 750 / 749px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 2.25 | 14px / 行間 2 |
| 見出し | 40px | 28px / 行間 1.3 |
| セクションの上下余白 | 160px | 36px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 16px | —px |

- 本文は 18px → 14px、セクション余白は 160px → 36px（PCの23%）。
- 文字サイズの段は 20 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #69285a; color: #ffffff;
  border-radius: 7px; padding: 0px 30px; min-height: 47px;
  font-size: 15px; font-weight: 400; letter-spacing: 1px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#d6c5ab` | ヒーロー（画像） | — | 全幅 |
| 2 | 2140px | — | 1カラム・画像あり | — | 全面 |
| 3 | 880px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1480px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1820px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 6 | 520px | — | 1カラム・文字だけ | 中央 | — |
| 7 | 500px | `#f9f9f9` | 1カラム・文字だけ | 中央 | — |
| 8 | 1440px | — | 6カラム・画像あり | 中央 | 見出しの下 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#d6c5ab`（2） / `#f4ebce`（1） / `#f9f9f9`（1） / `#69285a`（1）
- 見出しは左0／中央6。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 20枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 1:1（15枚）、3:2（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d6c5ab }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#f4ebce; --on:#f4ebce }
.section--main .btn--fill{ background:#f4ebce; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#69285a; color:#ffffff; border-radius:7px;
  padding:0px 30px; min-height:47px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:36px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#d6c5ab` は文字と小さな部品にだけ使う。
- 余白 160px と行間 2.25 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.25 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 7px 以外）を混ぜない。
