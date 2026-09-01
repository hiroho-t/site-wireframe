# ファミマTV 日本最大級のリテールサイネージネットワーク ふうのデザイン

- 出典: https://gate-one.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／Web･IT･XR･デジタル･テクノロジー／サービス･アプリ･ツール･SaaS

白地に `#99acb6` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.65、セクション間 72px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #99acb6;
  --sub: #222222;
  --ink: #222222;
  --ink-rev: #ffffff;
  --on: #99acb6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Alata", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.65;
  --container: 1200px;
  --read: 648px;
  --section-y: 72px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 61% |
| 主色 | `#99acb6` | 11.2% |
| 副色 | `#222222` | 9.7% |
| 差し色 | `#564c48` | 5.4% |
| 差し色 | `#057eb7` | 3.1% |
| 差し色 | `#34ad5a` | 2.6% |

文字色は `#222222` / `#ffffff` / `#0279c5` / `#23ab39`。

- 主色 `#99acb6` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は`rgba(172, 171, 171, 0.3) 0px -1px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 22 | 30 | 0 | 3 |
| `#f8f8f8` | 8 | 0 | 1 | 1 |
| `#222222` | 7 | 53 | 0 | 5 |
| `#23ab39` | 6 | 12 | 0 | 1 |
| `#0279c5` | 3 | 16 | 0 | 1 |

- `#99acb6` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#99acb6` |
| `#f8f8f8` | `#99acb6` |
| `#f4f4f4` | `#99acb6` |
| `#222222` | `#ffffff` |

```css
.section{ --on:#99acb6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Alata
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 44px | — |
| 見出し | 36px | 1.4 |
| 小見出し | 24px | 1.65 |
| リード | 20px | — |
| リード | 18px | 1.65 |
| 本文 | 16px | 1.65 |
| 補助 | 14px | — |

- 本文は 16px・行間 1.65。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 648px
- セクションの上下余白: 72 / 80 / 56 / 64px（基本は 72px）
- 並びの間隔: 4 / 12 / 16 / 32px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 768 / 576 / 425 / 389 / 352px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.65 | 16px / 行間 1.65 |
| 見出し | 44px | 26px / 行間 1.4 |
| セクションの上下余白 | 72px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | 12px |

- 本文は 16px → 16px、セクション余白は 72px → 24px（PCの33%）。
- 文字サイズの段は 26 / 18 / 16 / 15 / 14px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 56px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #222222; color: #ffffff;
  border-radius: 4px; padding: 15px 24px; min-height: 56px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #222222;
  border-radius: 4px; padding: 2px 0px; min-height: 26px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 680px | `#222222` | ヒーロー（画像） | 左 | 全幅 |
| 2 | 540px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 3 | 800px | — | 3カラム・画像あり | 右 | 左（33:67） |
| 4 | 560px | `#f8f8f8` | 3カラム・画像あり | 左 | — |
| 5 | 380px | `#ffffff` | 2カラム | — | — |
| 6 | 720px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 7 | 420px | — | 3カラム・画像あり | 中央 | — |
| 8 | 380px | `#ffffff` | 2カラム | — | — |
| 9 | 780px | `#f8f8f8` | 4カラム・画像あり | 中央 | 見出しの下 |
| 10 | 420px | `#f8f8f8` | 1カラム・文字だけ | 左 | — |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（16） / `#f8f8f8`（3） / `#f4f4f4`（3） / `#222222`（2）
- 見出しは左3／中央4。
- 2カラムの分け方は 33:67。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 8px;
  padding: 20px 32px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 4 箇所ある（56px×2、88px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 26枚使っている。うち 11 枚は画面いっぱいに置く
- 比率は 21:9（7枚）、3:2（4枚）、1:1（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#99acb6 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:680px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:8px; padding:20px 32px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:56px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:21/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:24px; --gap:12px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地色と主色 `#99acb6` の面を全幅で交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 72px と行間 1.65 を先に決めてから中身を入れる。
- 画像は 21:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 8px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.65 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
