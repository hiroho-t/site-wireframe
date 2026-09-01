# Goodpatch Anywhere ふうのデザイン

- 出典: https://anywhere.goodpatch.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: デザイン会社・採用

白地に `#096fca` を大きな面で置く配色。影も枠線もほとんど使わない。本文 20px・行間 2、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #096fca;
  --sub: #e3d7d5;
  --ink: #096fca;
  --ink-rev: #ffffff;
  --on: #096fca;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", "Noto Sans JP", sans-serif;
  --font-en: "Helvetica Neue", sans-serif;
  --fs-body: 20px;
  --lh-body: 2;
  --container: 1376px;
  --read: 672px;
  --section-y: 120px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 49.5% |
| 主色 | `#096fca` | 37.8% |
| 副色 | `#e3d7d5` | 7.1% |

文字色は `#096fca` / `#ffffff` / `#000000`。

- 主色 `#096fca` は差し色ではなく**面**で使う。画面の38%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 8 | 59 | 12 | 0 |
| `#096fca` | 4 | 62 | 4 | 1 |
| `#f9f7f7` | 1 | 0 | 0 | 0 |
| `#000000` | 0 | 1 | 0 | 0 |

- `#096fca` は文字色として62箇所で使うのが主。面としては4箇所しかないが、1枚が大きく画面の38%を占める。ボタンの地にも使う。枠線にも4箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#096fca` |
| `#096fca`（主色） | `#ffffff` |
| `#f9f7f7` | `#096fca` |

```css
.section{ --on:#096fca }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#096fca` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: ゴシックMB101 M JIS2004（有料）→ 無料で近いのは **Zen Kaku Gothic New**、なければ Noto Sans JP
- 欧文: Helvetica Neue
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 72px | 1.6 |
| 見出し | 48px | 1.5 |
| 小見出し | 32px | — |
| 本文 | 20px | 2 |
| 補助 | 18px | — |
| 注記 | 16px | 1.6 |
| 注記 | 13px | — |

- 本文は 20px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1376px／読ませる段は 672px
- セクションの上下余白: 120 / 100 / 140 / 200px（基本は 120px）
- 並びの間隔: 4 / 8 / 16 / 24px
- 角丸: 0px が基本。大きな面だけ 32px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1160 / 768 / 480 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 20px / 行間 2 | 16px |
| 見出し | 72px | 27px / 行間 1.5 |
| セクションの上下余白 | 120px | 48px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 16px | 8px |

- 本文は 20px → 16px、セクション余白は 120px → 48px（PCの40%）。
- 文字サイズの段は 27 / 21 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #096fca; color: #ffffff;
  border-radius: 4px; padding: 0px 48px; min-height: 48px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px; padding: 20px 32px; min-height: 60px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 540px | — | ヒーロー（画像） | — | — |
| 2 | 1220px | `#ffffff` | 2カラム・画像あり | 左 | 見出しの下 |
| 3 | 620px | — | 1カラム・文字だけ | — | — |
| 4 | 940px | `#096fca` | 1カラム・画像あり | — | 全面 |
| 5 | 1940px | `#096fca` | 6カラム・画像あり | 左 | 左（31:69） |
| 6 | 1220px | `#096fca` | 2カラム・画像あり | 左 | 見出しの下 |
| 7 | 480px | — | 1カラム・文字だけ | — | — |
| 8 | 1000px | `#f9f7f7` | 1カラム・画像あり | 左 | 右（57:43） |
| 9 | 980px | — | 6カラム・画像あり | 右 | — |
| 10 | 820px | — | 2カラム・画像あり | — | 全幅 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#096fca` の面が 3 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（6） / `#096fca`（3） / `#f9f7f7`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 31:69 / 57:43。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 32px;
  padding: 64px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 8 箇所ある（16px×8）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 37枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 16:9（22枚）、1:1（7枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#096fca }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:540px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:32px; padding:64px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#096fca; color:#ffffff; border-radius:4px;
  padding:0px 48px; min-height:48px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:48px; --gap:8px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地色と主色 `#096fca` の面を全幅で交互に置く。主色は画面の38%を占めるだけ使う。
- 余白 120px と行間 2 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 32px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
