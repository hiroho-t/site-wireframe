# Goodpatch グッドパッチ採用サイト ふうのデザイン

- 出典: https://careers.goodpatch.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: デザイン会社・採用

#f7f7f7 の地に `#096fc8` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 15px・行間 1.7、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f7f7f7;
  --main: #096fc8;
  --ink: #393d40;
  --ink-rev: #096fc8;
  --on: #096fc8;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "My Galano Grotesque", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.7;
  --container: 1120px;
  --read: 600px;
  --section-y: 100px;
  --gap: 12px;
  --radius: 12px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f7f7f7` | 86.3% |
| 主色 | `#cec9c4` | 3.1% |

文字色は `#393d40` / `#096fc8` / `#ffffff` / `#333333`。

- 主色 `#096fc8` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 1px 1px 1px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f7f7f7` | 12 | 0 | 0 | 0 |
| `#ffffff` | 15 | 27 | 1 | 4 |
| `#096fc8` | 16 | 30 | 0 | 15 |
| `#ebebed` | 7 | 0 | 1 | 0 |
| `#000000` | 2 | 2 | 0 | 0 |
| `#393d40` | 0 | 174 | 0 | 0 |
| `#333333` | 0 | 2 | 0 | 0 |

- `#096fc8` は面16箇所・文字30箇所を行き来する。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f7f7f7`（地） | `#096fc8` |
| `#ffffff` | `#096fc8` |
| `#ebebed` | `#096fc8` |
| `#000000` | `#096fc8` |

```css
.section{ --on:#096fc8 }                     /* 地の面 */
.section--main{ background:var(--main); color:#096fc8; --on:#096fc8 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#096fc8 }
.section--main .btn--fill{ background:#096fc8; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f7f7f7` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: A+EqpB-游ゴシック体 Pr6N M（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: My Galano Grotesque
- ウェイトは 600 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.2 |
| 見出し | 24px | 1.5 |
| 小見出し | 18px | — |
| リード | 16px | 1.5 |
| 本文 | 15px | 1.7 |
| 補助 | 14px | — |
| 注記 | 13px | — |

- 本文は 15px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 600px
- セクションの上下余白: 100 / 80 / 60 / 32px（基本は 100px）
- 並びの間隔: 6 / 8 / 12 / 16px
- 角丸: 12px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 960 / 736 / 600 / 480 / 414px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.7 | 14px / 行間 1.43 |
| 見出し | 32px | 32px / 行間 1.2 |
| セクションの上下余白 | 100px | 60px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 12px | 8px |

- 本文は 15px → 14px、セクション余白は 100px → 60px（PCの60%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #096fc8; color: #ffffff;
  border-radius: 900px; padding: 8px 16px; min-height: 34px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #096fc8;
  border-radius: 900px; padding: 8px 16px; min-height: 40px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #096fc8; color: #ffffff;
  border-radius: 900px; padding: 8px 16px; min-height: 40px;
  font-size: 18px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1440px | `#f7f7f7` | 2カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1440px | `#ffffff` | 1カラム・画像あり | 中央 | 全幅 |
| 4 | 1520px | `#f7f7f7` | 1カラム・画像あり | — | 全面 |
| 5 | 840px | `#ffffff` | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1520px | `#f7f7f7` | 1カラム・画像あり | — | 全面 |
| 7 | 660px | `#ffffff` | 4カラム・画像あり | 中央 | 見出しの下 |
| 8 | 900px | `#f7f7f7` | 4カラム・画像あり | 中央 | 見出しの下 |
| 9 | 580px | `#f7f7f7` | 2カラム・画像あり | 右 | 左（44:56） |
| 10 | 2240px | `#f7f7f7` | 1カラム・画像あり | — | — |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f7f7f7`（6） / `#ffffff`（5） / `#ebebed`（1） / `#000000`（1）
- 見出しは左0／中央5。
- 2カラムの分け方は 44:56。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 12px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #096fc8; color: #ffffff;
  border-radius: 999px; padding: 8px 16px; font-size: 16px;
}
```

## 丸いもの

角丸は 12px だが、**完全な円は別扱い**で 69 箇所ある（24px×68、32px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 25枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:4（10枚）、16:9（9枚）、4:3（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#096fc8 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#096fc8; --on:#096fc8 }
.section--main .btn--fill{ background:#096fc8; color:var(--main) }
.card{ background:#ffffff;
  border-radius:12px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#096fc8; color:#ffffff; border-radius:900px;
  padding:8px 16px; min-height:34px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:736px){
  :root{ --fs-body:14px; --section-y:60px; --gap:8px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#f7f7f7` のまま。主色 `#096fc8` は文字と小さな部品にだけ使う。
- 余白 100px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 12px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.7 より詰めない。
- 中途半端な角丸（12px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
