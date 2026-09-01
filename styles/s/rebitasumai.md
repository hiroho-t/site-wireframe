# リビタの住まい ふうのデザイン

- 出典: https://sumai.rebita.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／建築･住宅･不動産･空間設計･エクステリア／スタイリッシュ

白地に `#10242e` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.75、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #10242e;
  --sub: #c4c4b4;
  --ink: #222222;
  --ink-rev: #ffffff;
  --on: #10242e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "NumberFont", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.75;
  --container: 632px;
  --read: 720px;
  --section-y: 72px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 56.6% |
| 主色 | `#777474` | 8.4% |
| 副色 | `#c4c4b4` | 5.2% |
| 差し色 | `#10242e` | 4.5% |
| 差し色 | `#433e34` | 3.4% |
| 差し色 | `#1d1711` | 3.4% |

文字色は `#222222` / `#ffffff` / `#888888` / `#f0f0f0`。

- 主色 `#10242e` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f0f0f0` | 1 | 2 | 0 | 0 |
| `#ffffff` | 13 | 29 | 0 | 8 |
| `#c4c4b4` | 1 | 0 | 0 | 0 |
| `#10242e` | 1 | 0 | 0 | 0 |
| `#e5e5e5` | 11 | 0 | 12 | 6 |
| `#222222` | 0 | 104 | 1 | 0 |
| `#888888` | 0 | 19 | 2 | 0 |

- `#10242e` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#10242e` |
| `#f0f0f0` | `#10242e` |
| `#c4c4b4` | `#10242e` |
| `#10242e`（主色） | `#ffffff` |

```css
.section{ --on:#10242e }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e5e5e5`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: NumberFont
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 27px | 1.3 |
| 見出し | 20px | — |
| 本文 | 14px | 1.75 |
| 補助 | 13px | — |
| 注記 | 11px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 632px／読ませる段は 720px
- セクションの上下余白: 72 / 56 / 36 / 44px（基本は 72px）
- 並びの間隔: 4 / 7 / 14 / 36px
- 角丸: 0px が基本。大きな面だけ 40px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 782 / 781 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.75 | 12px / 行間 1.8 |
| 見出し | 27px | 23px / 行間 1.3 |
| セクションの上下余白 | 72px | 24px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 14px | 17px |

- 本文は 14px → 12px、セクション余白は 72px → 24px（PCの33%）。
- 文字サイズの段は 23 / 19 / 15 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #222222;
  border: 1px solid #e7e7e7;
  border-radius: 40px; padding: 5px 14px; min-height: 35px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #e5e5e5; color: #222222;
  border-radius: 0px; padding: 0px 0px; min-height: 60px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 22px 0px; min-height: 62px;
  font-size: 13px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1800px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1320px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 3 | 1380px | `#f0f0f0` | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 660px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 5 | 340px | — | 1カラム・画像あり | — | 全面 |
| 6 | 820px | `#c4c4b4` | 2カラム・画像あり | — | 全面 |
| 7 | 340px | `#ffffff` | 2カラム・画像あり | — | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（5） / `#f0f0f0`（1） / `#c4c4b4`（1） / `#10242e`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 2px solid var(--on);   /* 実測は #e5e5e5。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #222222;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 5px 14px; font-size: 13px;
}
```

## 画像

- 31枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（31枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#10242e }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1800px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff; border:2px solid var(--on);
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#222222; border-radius:40px;
  padding:5px 14px; min-height:35px;
  font-size:13px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:12px; --section-y:24px; --gap:17px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#10242e` は文字と小さな部品にだけ使う。
- 余白 72px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 2px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 40px 以外）を混ぜない。
