# 福岡女学院大学・短期大学部 ふうのデザイン

- 出典: https://www.fukujo.ac.jp/university/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／女性向け･女性的なテイスト／学校･教育

白地に `#a44858` を大きな面で置く配色。影も枠線もほとんど使わない。本文 15px・行間 1.8、セクション間 160px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #a44858;
  --sub: #f6edee;
  --ink: #444444;
  --ink-rev: #ffffff;
  --on: #a44858;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "dnp-shuei-gothic-gin-std", sans-serif;
  --font-en: "dnp-shuei-gothic-gin-std", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.8;
  --container: 1360px;
  --read: 956px;
  --section-y: 160px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 28.1% |
| 主色 | `#a44858` | 23.6% |
| 副色 | `#f6edee` | 15.3% |
| 差し色 | `#4e6046` | 6.4% |
| 差し色 | `#8b8774` | 4.1% |
| 差し色 | `#413734` | 3.7% |

文字色は `#444444` / `#ffffff` / `#a44858` / `#858585`。

- 主色 `#a44858` は差し色ではなく**面**で使う。画面の24%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#a44858` | 2 | 29 | 1 | 0 |
| `#f6edee` | 29 | 0 | 0 | 27 |
| `#ffffff` | 26 | 57 | 2 | 7 |
| `#444444` | 0 | 111 | 0 | 0 |
| `#858585` | 0 | 17 | 0 | 0 |

- `#a44858` は文字色として29箇所で使うのが主。面としては2箇所しかないが、1枚が大きく画面の24%を占める。ボタンの地には使っていない。枠線にも1箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#a44858` |
| `#a44858`（主色） | `#ffffff` |
| `#f6edee` | `#a44858` |

```css
.section{ --on:#a44858 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f6edee` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: dnp-shuei-gothic-gin-std
- 欧文: dnp-shuei-gothic-gin-std
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 188px | — |
| 見出し | 48px | 1.5 |
| 小見出し | 20px | — |
| リード | 18px | — |
| 本文 | 15px | 1.8 |
| 補助 | 14px | 1.5 |
| 注記 | 13px | — |

- 本文は 15px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1360px／読ませる段は 956px
- セクションの上下余白: 160 / 60 / 100 / 44px（基本は 160px）
- 並びの間隔: 10 / 15 / 20 / 25px
- 角丸: 0px が基本。大きな面だけ 2px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1024 / 768 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.8 | 14px / 行間 1.8 |
| 見出し | 188px | 42px / 行間 1.5 |
| セクションの上下余白 | 160px | 32px |
| 左右の余白 | — | 45px |
| 並びの間隔 | 20px | 10px |

- 本文は 15px → 14px、セクション余白は 160px → 32px（PCの20%）。
- 文字サイズの段は 16 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: #f6edee; color: #a44858;
  border-radius: 999px; padding: 8px 15px; min-height: 37px;
  font-size: 13px; font-weight: 500; letter-spacing: 1.04px;
}
.btn-sub{
  background: #ffffff; color: #444444;
  border-radius: 2px; padding: 14px 55px; min-height: 52px;
  font-size: 15px; font-weight: 500; letter-spacing: 1.2px;
}
.btn-sub{
  background: transparent; color: #444444;
  border: 1px solid #e6dcdd;
  border-radius: 3px; padding: 14px 20px; min-height: 58px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.75px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 700px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 940px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 3 | 1340px | `#a44858` | 2カラム・画像あり | 右 | 左（36:64） |
| 4 | 1000px | `#f6edee` | 5カラム・画像あり | 左 | 右（26:74） |
| 5 | 780px | — | 1カラム・画像あり | — | 全面 |
| 6 | 880px | — | 6カラム・画像あり | 左 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#a44858` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（11） / `#a44858`（2） / `#f6edee`（2）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 36:64 / 26:74。半分ずつには割らない。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 30px 20px;
}
```

ラベル・タグ

```css
.chip{
  background: #f6edee; color: #a44858;
  border-radius: 999px; padding: 8px 15px; font-size: 13px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 8 箇所ある（48px×6、72px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 68枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 3:2（27枚）、2:3（16枚）、3:4（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#a44858 }
.container{ width:min(100% - 90px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:700px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:30px 20px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f6edee; color:#a44858; border-radius:999px;
  padding:8px 15px; min-height:37px;
  font-size:13px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 90px) }
}
```

## 守ること

やること

- 地色と主色 `#a44858` の面を全幅で交互に置く。主色は画面の24%を占めるだけ使う。
- 余白 160px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 2px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
