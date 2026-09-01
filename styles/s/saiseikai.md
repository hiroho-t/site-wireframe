# 埼玉県済生会川口総合病院 ふうのデザイン

- 出典: https://www.saiseikai.gr.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／オーソドックス

白地に `#96b9c9` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 68px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #96b9c9;
  --sub: #222222;
  --ink: #222222;
  --ink-rev: #0278c7;
  --on: #96b9c9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Gantari", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1108px;
  --read: 1308px;
  --section-y: 68px;
  --gap: 10px;
  --radius: 22px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 60% |
| 主色 | `#f6f2ea` | 17.6% |
| 副色 | `#222222` | 8.5% |
| 差し色 | `#96b9c9` | 2.4% |
| 差し色 | `#d8d6d4` | 1.9% |
| 差し色 | `#1f90d8` | 1.9% |

文字色は `#222222` / `#0278c7` / `#ffffff` / `#767676`。

- 主色 `#96b9c9` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f6f2ea` | 26 | 0 | 7 | 15 |
| `#ffffff` | 50 | 20 | 0 | 6 |
| `#222222` | 12 | 74 | 0 | 0 |
| `#038dd8` | 7 | 0 | 1 | 2 |
| `#0278c7` | 0 | 21 | 5 | 0 |
| `#767676` | 0 | 11 | 1 | 0 |

- `#96b9c9` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#222222` | `#0278c7` |
| `#ffffff`（地） | `#96b9c9` |
| `#f6f2ea` | `#96b9c9` |

```css
.section{ --on:#96b9c9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#0278c7; --on:#0278c7 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#0278c7 }
.section--main .btn--fill{ background:#0278c7; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f6f2ea` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Gantari
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 31px | 1.6 |
| 見出し | 27px | 1.6 |
| 小見出し | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 1.8 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1108px／読ませる段は 1308px
- セクションの上下余白: 68 / 44 / 72 / 88px（基本は 68px）
- 並びの間隔: 6 / 7 / 10 / 11px
- 角丸: 22px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1300 / 1250 / 1200 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 14px / 行間 1.9 |
| 見出し | 31px | 21px / 行間 1.7 |
| セクションの上下余白 | 68px | 76px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 10px | 10px |

- 本文は 16px → 14px、セクション余白は 68px → 76px（PCの112%）。
- 文字サイズの段は 18 / 15 / 14 / 11 / 10px。

## ボタン

```css
.btn{
  background: #f6f2ea; color: #222222;
  border-radius: 0px; padding: 0px 0px; min-height: 84px;
  font-size: 18px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #f6f2ea; color: #222222;
  border-radius: 1440px; padding: 9px 0px; min-height: 38px;
  font-size: 11px; font-weight: 400; letter-spacing: 0.22152px;
}
.btn-sub{
  background: #ffffff; color: #222222;
  border-radius: 1440px; padding: 10px 22px; min-height: 66px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.310128px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 660px | — | 6カラム・画像あり | — | — |
| 3 | 440px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 4 | 700px | — | 1カラム・画像あり | 中央 | — |
| 5 | 1320px | `#f6f2ea` | 1カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1160px | — | 3カラム・画像あり | 中央 | 全幅 |
| 7 | 900px | — | 1カラム・画像あり | — | 全幅 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#222222`（12） / `#ffffff`（7） / `#f6f2ea`（1）
- 見出しは左0／中央4。


## 部品

囲み（12箇所で同じ形）

```css
.card{
  background: #222222;
  border-radius: 22px;
  padding: 0px 22px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #0278c7;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 1px 16px; font-size: 11px;
}
```

## 丸いもの

角丸は 22px だが、**完全な円は別扱い**で 35 箇所ある（48px×16、56px×6、88px×6）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 38枚使っている。うち 11 枚は画面いっぱいに置く
- 比率は 16:9（6枚）、4:3（6枚）、3:2（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#96b9c9 }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#0278c7; --on:#0278c7 }
.section--main .btn--fill{ background:#0278c7; color:var(--main) }
.card{ background:#222222;
  border-radius:22px; padding:0px 22px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f6f2ea; color:#222222; border-radius:0px;
  padding:0px 0px; min-height:84px;
  font-size:18px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:76px; --gap:10px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#96b9c9` は文字と小さな部品にだけ使う。
- 余白 68px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 22px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。
- 中途半端な角丸（22px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
