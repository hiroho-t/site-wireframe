# クラウドローン株式会社 ふうのデザイン

- 出典: https://corp.crowdloan.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／金融･投資･保険･士業

#edf3eb の地に `#7cd58a` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1.6、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #edf3eb;
  --main: #7cd58a;
  --sub: #fefffc;
  --ink: #292929;
  --ink-rev: #fefffc;
  --on: #7cd58a;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Manrope", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.6;
  --container: 1160px;
  --read: 660px;
  --section-y: 120px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#edf3eb` | 43.7% |
| 主色 | `#7cd58a` | 16.9% |
| 副色 | `#fefffc` | 15.8% |
| 差し色 | `#292929` | 6.3% |
| 差し色 | `#6fa399` | 4.2% |
| 差し色 | `#d7f6b4` | 4% |

文字色は `#292929` / `#fefffc` / `#444444` / `#38a92d`。

- 主色 `#7cd58a` は差し色ではなく**面**で使う。画面の17%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#66cd76` | 6 | 0 | 5 | 0 |
| `#fefffc` | 25 | 19 | 6 | 0 |
| `#edf3eb` | 1 | 0 | 0 | 0 |
| `#292929` | 7 | 71 | 6 | 5 |
| `#e6ece4` | 3 | 0 | 23 | 0 |
| `#444444` | 0 | 6 | 0 | 0 |
| `#38a92d` | 0 | 3 | 0 | 0 |

- `#7cd58a` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fefffc` | `#7cd58a` |
| `#e6ece4` | `#7cd58a` |
| `#66cd76` | `#7cd58a` |
| `#edf3eb`（地） | `#7cd58a` |

```css
.section{ --on:#7cd58a }                     /* 地の面 */
.section--main{ background:var(--main); color:#fefffc; --on:#fefffc }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#fefffc }
.section--main .btn--fill{ background:#fefffc; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#fefffc`。ただしその囲みは `#66cd76` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Manrope
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 125px | — |
| 見出し | 36px | 1.6 |
| 小見出し | 24px | 1.6 |
| リード | 20px | — |
| リード | 18px | 1.6 |
| 本文 | 16px | 1.6 |
| 補助 | 14px | — |

- 本文は 16px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1160px／読ませる段は 660px
- セクションの上下余白: 120 / 140 / 80 / 40px（基本は 120px）
- 並びの間隔: 6 / 10 / 20 / 40px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.6 | 15px / 行間 1.6 |
| 見出し | 125px | 16px / 行間 1.6 |
| セクションの上下余白 | 120px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 20px | 10px |

- 本文は 16px → 15px、セクション余白は 120px → 32px（PCの27%）。
- 文字サイズの段は 17 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #292929; color: #fefffc;
  border: 1px solid #292929;
  border-radius: 159984px; padding: 10px 10px; min-height: 62px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.8px;
}
.btn-sub{
  background: #292929; color: #fefffc;
  border: 1px solid #292929;
  border-radius: 159984px; padding: 7px 10px; min-height: 51px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #292929;
  border: 1px solid #66cd76;
  border-radius: 159984px; padding: 7px 10px; min-height: 51px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1580px | — | ヒーロー | — | — |
| 2 | 2140px | — | 3カラム・画像あり | 中央 | 全幅 |
| 3 | 1100px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 4 | 820px | — | 4カラム・画像あり | 左 | — |
| 5 | 1060px | — | 1カラム・画像あり | 左 | 右（18:82） |
| 6 | 860px | — | 1カラム・画像あり | 右 | 左（46:54） |
| 7 | 400px | — | 2カラム・画像あり | 左 | 全幅 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fefffc`（5） / `#e6ece4`（3） / `#66cd76`（2） / `#edf3eb`（1）
- 見出しは左3／中央2。
- 2カラムの分け方は 18:82 / 46:54。半分ずつには割らない。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #fefffc。面によって入れ替える */
  border-radius: 0px;
  padding: 40px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #fefffc; color: #292929;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 3px 10px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 31 箇所ある（40px×17、128px×10、32px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 19枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 1:1（14枚）、3:2（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#7cd58a }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1580px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#fefffc; --on:#fefffc }
.section--main .btn--fill{ background:#fefffc; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:40px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#292929; color:#fefffc; border-radius:159984px;
  padding:10px 10px; min-height:62px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#7cd58a` の面を全幅で交互に置く。主色は画面の17%を占めるだけ使う。
- 余白 120px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
