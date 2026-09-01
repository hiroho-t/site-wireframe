# リコアス株式会社 ふうのデザイン

- 出典: https://ricoas.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／BtoCのサイト

#10ad5e の地に `#10ad5e` を大きな面で置く配色。影も枠線もほとんど使わない。本文 14px・行間 1.6、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #10ad5e;
  --main: #10ad5e;
  --sub: #faf7e6;
  --ink: #10ad5e;
  --ink-rev: #ffffff;
  --on: #10ad5e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.6;
  --container: 1120px;
  --read: 1254px;
  --section-y: 100px;
  --gap: 14px;
  --radius: 15px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#10ad5e` | 32.8% |
| 主色 | `#d3f0ef` | 20.1% |
| 副色 | `#faf7e6` | 15% |
| 差し色 | `#109131` | 13.1% |
| 差し色 | `#ffffff` | 5.7% |
| 差し色 | `#32471b` | 3.9% |

文字色は `#10ad5e` / `#ffffff` / `#000000` / `#eb5c38`。

- 主色 `#10ad5e` は差し色ではなく**面**で使う。画面の33%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#10ad5e` | 23 | 183 | 112 | 15 |
| `#ffffff` | 78 | 82 | 17 | 27 |
| `#d3f0ef` | 3 | 0 | 0 | 0 |
| `#faf7e6` | 1 | 0 | 0 | 0 |
| `#000000` | 1 | 56 | 0 | 0 |
| `#eb5c38` | 4 | 9 | 0 | 4 |

- `#10ad5e` は文字色として183箇所で使うのが主。面としては23箇所しかないが、1枚が大きく画面の33%を占める。ボタンの地にも使う。枠線にも112箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#10ad5e` |
| `#10ad5e`（地） | `#ffffff` |
| `#d3f0ef` | `#10ad5e` |
| `#000000` | `#ffffff` |

```css
.section{ --on:#ffffff }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#d3f0ef` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Inter
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 41px | 1.5 |
| 見出し | 32px | 1.5 |
| 小見出し | 28px | 1.6 |
| リード | 24px | 1.5 |
| リード | 18px | — |
| リード | 16px | — |
| リード | 15px | — |

- 本文は 14px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 1254px
- セクションの上下余白: 100 / 76 / 36 / 40px（基本は 100px）
- 並びの間隔: 8 / 12 / 14 / 30px
- 角丸: 15px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1024 / 960 / 959 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.6 | 14px / 行間 1.8 |
| 見出し | 41px | 24px / 行間 1.5 |
| セクションの上下余白 | 100px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 14px | 8px |

- 本文は 14px → 14px、セクション余白は 100px → 32px（PCの32%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #10ad5e;
  border: 1px solid #10ad5e;
  border-radius: 15px; padding: 0px 12px; min-height: 30px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #10ad5e;
  border: 1px solid #10ad5e;
  border-radius: 15px; padding: 0px 16px; min-height: 30px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #10ad5e;
  border: 1px solid #10ad5e;
  border-radius: 15px; padding: 0px 16px; min-height: 30px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 360px | `#10ad5e` | 6カラム・画像あり | — | 全面 |
| 3 | 840px | — | 1カラム・画像あり | 中央 | — |
| 4 | 1440px | `#d3f0ef` | 6カラム・画像あり | 中央 | 右（16:84） |
| 5 | 700px | — | 2カラム・画像あり | 中央 | 右（22:78） |
| 6 | 1700px | `#10ad5e` | 1カラム・画像あり | 中央 | 見出しの下 |
| 7 | 360px | `#10ad5e` | 1カラム・画像あり | 中央 | — |
| 8 | 740px | `#10ad5e` | 5カラム・画像あり | 右 | 左（31:69） |
| 9 | 760px | `#d3f0ef` | 6カラム・画像あり | 中央 | — |
| 10 | 800px | `#d3f0ef` | 6カラム・画像あり | 中央 | 見出しの下 |
| 11 | 700px | — | 2カラム・画像あり | 中央 | 右（22:78） |
| 12 | 2000px | `#faf7e6` | 6カラム・画像あり | 中央 | 見出しの下 |
| 13 | 1040px | `#10ad5e` | 2カラム・画像あり | 中央 | 見出しの下 |
| 14 | 540px | `#10ad5e` | 3カラム・画像あり | 中央 | 見出しの下 |
| 15 | 700px | — | 2カラム・画像あり | 中央 | 右（22:78） |

- 全15セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#10ad5e` の面が 6 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（23） / `#10ad5e`（6） / `#d3f0ef`（3） / `#000000`（1）
- 見出しは左0／中央12。
- 2カラムの分け方は 16:84 / 22:78 / 31:69 / 22:78 / 22:78。半分ずつには割らない。


## 部品

囲み（9箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 12px;
  padding: 30px 30px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #10ad5e;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 12px; font-size: 14px;
}
```

## 丸いもの

角丸は 15px だが、**完全な円は別扱い**で 20 箇所ある（64px×9、40px×8、56px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 55枚使っている。うち 10 枚は画面いっぱいに置く
- 比率は 3:2（32枚）、1:1（6枚）、4:3（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ffffff }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:12px; padding:30px 30px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#10ad5e; border-radius:15px;
  padding:0px 12px; min-height:30px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:640px){
  :root{ --fs-body:14px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#10ad5e` の面を全幅で交互に置く。主色は画面の33%を占めるだけ使う。
- 余白 100px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 12px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（15px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
