# 湯浅建設株式会社 ふうのデザイン

- 出典: https://www.yuasakensetsu.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／建設･インフラ･土木･設備／レスポンシブ

#f6f6f8 の地に `#b0c0c8` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2.5、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f6f6f8;
  --main: #b0c0c8;
  --sub: #93bcd2;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #b0c0c8;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: sans-serif;
  --fs-body: 16px;
  --lh-body: 2.5;
  --container: 1060px;
  --read: 920px;
  --section-y: 56px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f6f6f8` | 80.6% |
| 主色 | `#b0c0c8` | 3.5% |
| 副色 | `#93bcd2` | 3.5% |
| 差し色 | `#89ab9a` | 3.4% |
| 差し色 | `#5a8f86` | 2.5% |
| 差し色 | `#6ba4ad` | 2.2% |

文字色は `#000000` / `#ffffff` / `#9fa0a0`。

- 主色 `#b0c0c8` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f6f6f8` | 8 | 0 | 0 | 0 |
| `#000000` | 3 | 42 | 0 | 2 |
| `#ffffff` | 4 | 16 | 2 | 0 |
| `#ffe109` | 1 | 0 | 0 | 1 |
| `#9fa0a0` | 0 | 9 | 0 | 0 |

- `#b0c0c8` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f6f6f8`（地） | `#b0c0c8` |
| `#ffffff` | `#b0c0c8` |
| `#000000` | `#ffffff` |

```css
.section{ --on:#b0c0c8 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f6f6f8` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | — |
| 見出し | 18px | 2 |
| 本文 | 16px | 2.5 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 2.5。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1060px／読ませる段は 920px
- セクションの上下余白: 56 / 72 / 84 / 104px（基本は 56px）
- 並びの間隔: 6 / 8 / 20 / 25px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1141 / 1023 / 768 / 767 / 479px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.5 | 14px / 行間 2.5 |
| 見出し | 40px | 14px / 行間 2 |
| セクションの上下余白 | 56px | 40px |
| 左右の余白 | — | 35px |
| 並びの間隔 | 20px | 6px |

- 本文は 16px → 14px、セクション余白は 56px → 40px（PCの71%）。
- 文字サイズの段は 22 / 16 / 14 / 10 / 6px。

## ボタン

```css
.btn{
  background: #000000; color: #ffffff;
  border-radius: 1440px; padding: 2px 24px; min-height: 46px;
  font-size: 13px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffe109; color: #000000;
  border-radius: 1440px; padding: 2px 24px; min-height: 34px;
  font-size: 15px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 880px | `#f6f6f8` | ヒーロー（画像） | 右 | 見出しの下 |
| 2 | 560px | `#f6f6f8` | 2カラム・画像あり | — | 全幅 |
| 3 | 1460px | `#f6f6f8` | 4カラム・画像あり | 右 | 左（64:36） |
| 4 | 880px | `#f6f6f8` | 4カラム・画像あり | 左 | 右（64:36） |
| 5 | 980px | — | 2カラム・画像あり | 右 | 全幅 |
| 6 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 540px | `#f6f6f8` | 1カラム・画像あり | — | 全面 |
| 8 | 940px | `#f6f6f8` | 4カラム・画像あり | 右 | 左（50:50） |
| 9 | 900px | `#f6f6f8` | 6カラム・画像あり | 中央 | 右（20:80） |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f6f6f8`（8） / `#ffffff`（4） / `#000000`（1）
- 見出しは左1／中央1。
- 2カラムの分け方は 64:36 / 64:36 / 50:50 / 20:80。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 10px;
  padding: 54px 20px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（24px×4、152px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 44枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 3:2（15枚）、1:1（14枚）、3:4（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b0c0c8 }
.container{ width:min(100% - 70px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:880px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:10px; padding:54px 20px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#000000; color:#ffffff; border-radius:1440px;
  padding:2px 24px; min-height:46px;
  font-size:13px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:40px; --gap:6px; }
  .container{ width:calc(100% - 70px) }
}
```

## 守ること

やること

- 地は `#f6f6f8` のまま。主色 `#b0c0c8` は文字と小さな部品にだけ使う。
- 余白 56px と行間 2.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
