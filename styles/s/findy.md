# ファインディ株式会社(Findy Inc) ふうのデザイン

- 出典: https://findy.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／自社プロダクト･サービス運営／求人･マッチング･転職･人材ビジネス

白地に `#2061ab` を大きな面で置く配色。影を使って浮かせる。本文 22px・行間 1.8、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #2061ab;
  --sub: #2061ab;
  --ink: #3f3f41;
  --ink-rev: #ffffff;
  --on: #2061ab;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Rubik", sans-serif;
  --fs-body: 22px;
  --lh-body: 1.8;
  --container: 1280px;
  --read: 800px;
  --section-y: 100px;
  --gap: 10px;
  --radius: 8px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 60.6% |
| 主色 | `#3f3f41` | 10.2% |
| 副色 | `#2061ab` | 10% |
| 差し色 | `#d8e3ef` | 4.9% |
| 差し色 | `#b7bbc1` | 3.6% |
| 差し色 | `#4c88be` | 3.3% |

文字色は `#3f3f41` / `#ffffff` / `#155aa8` / `#717173`。

- 主色 `#2061ab` は差し色ではなく**面**で使う。画面の10%を占めている。
- 影は`rgba(21, 90, 168, 0.15) 0px 0px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 6 | 31 | 7 | 1 |
| `#3f3f41` | 1 | 13 | 0 | 0 |
| `#155aa8` | 11 | 12 | 7 | 4 |
| `#003571` | 1 | 0 | 0 | 0 |
| `#1e7ed5` | 1 | 0 | 0 | 0 |
| `#717173` | 0 | 4 | 0 | 0 |

- `#2061ab` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#2061ab` |
| `#3f3f41` | `#ffffff` |

```css
.section{ --on:#2061ab }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Rubik
- ウェイトは 600 / 500 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 100px | 1.4 |
| 見出し | 64px | 1.5 |
| 小見出し | 56px | 1.4 |
| リード | 23px | — |
| 本文 | 22px | 1.8 |
| 補助 | 20px | — |
| 注記 | 18px | — |

- 本文は 22px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 800px
- セクションの上下余白: 100 / 108 / 140 / 156px（基本は 100px）
- 並びの間隔: 4 / 8 / 10 / 12px
- 角丸: 8px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768 / 767 / 600 / 500 / 375px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 22px / 行間 1.8 | 14px / 行間 1.8 |
| 見出し | 100px | 45px / 行間 1.4 |
| セクションの上下余白 | 100px | 32px |
| 左右の余白 | — | 32px |
| 並びの間隔 | 10px | 8px |

- 本文は 22px → 14px、セクション余白は 100px → 32px（PCの32%）。
- 文字サイズの段は 28 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #155aa8; color: #ffffff;
  border-radius: 12px; padding: 24px 24px; min-height: 88px;
  font-size: 20px; font-weight: 700; letter-spacing: 0.64px;
}
.btn-sub{
  background: #155aa8; color: #ffffff;
  border-radius: 1440px; padding: 11px 16px; min-height: 36px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.64px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 88px;
  font-size: 20px; font-weight: 700; letter-spacing: 0.64px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1500px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 700px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 3 | 1880px | — | 6カラム・画像あり | 中央 | 左（62:38） |
| 4 | 1000px | — | 1カラム・画像あり | 左 | 全幅 |
| 5 | 360px | — | 1カラム・文字だけ | 中央 | — |
| 6 | 620px | `#3f3f41` | 1カラム・画像あり | — | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（5） / `#3f3f41`（1）
- 見出しは左2／中央3。
- 2カラムの分け方は 62:38。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 8px;
  padding: 24px 12px;
}
```


## 丸いもの

角丸は 8px だが、**完全な円は別扱い**で 14 箇所ある（40px×5、24px×4、184px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 22枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:2（10枚）、16:9（8枚）、1:1（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2061ab }
.container{ width:min(100% - 64px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1500px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:8px; padding:24px 12px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#155aa8; color:#ffffff; border-radius:12px;
  padding:24px 24px; min-height:88px;
  font-size:20px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 64px) }
}
```

## 守ること

やること

- 地色と主色 `#2061ab` の面を全幅で交互に置く。主色は画面の10%を占めるだけ使う。
- 余白 100px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 8px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。
- 中途半端な角丸（8px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
