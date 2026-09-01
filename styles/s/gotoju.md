# 純国産てづくりランドセル工房 ごとうじゅうランドセル ふうのデザイン

- 出典: https://www.gotoju.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／ECサイト･オンラインショップ／ファッション･アパレル･アクセサリー･ジュエリー

白地に `#b4a696` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 13px・行間 2、セクション間 88px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #b4a696;
  --sub: #d9d0c7;
  --ink: #60451b;
  --ink-rev: #000000;
  --on: #b4a696;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Jost", sans-serif;
  --fs-body: 13px;
  --lh-body: 2;
  --container: 1108px;
  --read: 940px;
  --section-y: 88px;
  --gap: 11px;
  --radius: 11px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 38.2% |
| 主色 | `#f3eee6` | 24.6% |
| 副色 | `#d9d0c7` | 4.8% |
| 差し色 | `#999991` | 4.8% |
| 差し色 | `#6a6763` | 3.9% |
| 差し色 | `#b4a696` | 3.3% |

文字色は `#60451b` / `#000000` / `#ffffff` / `#f3eee6`。

- 主色 `#b4a696` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f3eee6` | 10 | 2 | 0 | 1 |
| `#ffffff` | 31 | 41 | 1 | 27 |
| `#b8a78c` | 1 | 9 | 30 | 0 |
| `#60451b` | 2 | 118 | 1 | 0 |
| `#ea5514` | 1 | 1 | 0 | 0 |
| `#000000` | 1 | 45 | 0 | 1 |

- `#b4a696` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f3eee6` | `#b4a696` |
| `#ffffff`（地） | `#b4a696` |

```css
.section{ --on:#b4a696 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Jost
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 33px | 1.6 |
| 見出し | 22px | 1 |
| 小見出し | 18px | — |
| リード | 17px | — |
| 本文 | 13px | 2 |
| 補助 | 12px | — |

- 本文は 13px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1108px／読ませる段は 940px
- セクションの上下余白: 88 / 56 / 112 / 32px（基本は 88px）
- 並びの間隔: 6 / 9 / 11 / 22px
- 角丸: 11px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1300 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 2 | 11px / 行間 1.7 |
| 見出し | 33px | 21px / 行間 1.7 |
| セクションの上下余白 | 88px | 52px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 11px | 5px |

- 本文は 13px → 11px、セクション余白は 88px → 52px（PCの59%）。
- 文字サイズの段は 21 / 17 / 15 / 14 / 11px。

## ボタン

```css
.btn{
  background: #ffffff; color: #60451b;
  border: 1px solid #b8a78c;
  border-radius: 33554400px; padding: 5px 33px; min-height: 61px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #60451b;
  border-radius: 0px; padding: 0px 0px; min-height: 61px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #60451b;
  border: 1px solid #b8a78c;
  border-radius: 11px; padding: 0px 0px; min-height: 85px;
  font-size: 17px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 560px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 340px | `#f3eee6` | 1カラム・文字だけ | — | — |
| 3 | 880px | `#f3eee6` | 4カラム・画像あり | — | 全面 |
| 4 | 640px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 640px | — | 1カラム・画像あり | — | 全面 |
| 6 | 560px | — | 4カラム・画像あり | 中央 | — |
| 7 | 3340px | — | 6カラム・画像あり | 左 | 右（24:76） |
| 8 | 560px | — | 3カラム・画像あり | — | 全面 |
| 9 | 1520px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 10 | 620px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 11 | 440px | — | 1カラム・画像あり | 中央 | — |
| 12 | 700px | `#ffffff` | 6カラム・画像あり | 中央 | 見出しの下 |
| 13 | 680px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 14 | 700px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 15 | 620px | `#ffffff` | 5カラム・画像あり | — | 全面 |

- 全15セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f3eee6`（6） / `#ffffff`（3）
- 見出しは左1／中央7。
- 2カラムの分け方は 24:76。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 11px だが、**完全な円は別扱い**で 4 箇所ある（104px×3、40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 122枚使っている。うち 9 枚は画面いっぱいに置く
- 比率は 1:1（57枚）、3:2（15枚）、2:3（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#b4a696 }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:560px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#60451b; border-radius:33554400px;
  padding:5px 33px; min-height:61px;
  font-size:17px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:11px; --section-y:52px; --gap:5px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#b4a696` は文字と小さな部品にだけ使う。
- 余白 88px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（11px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
