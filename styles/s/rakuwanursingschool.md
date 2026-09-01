# 洛和会京都看護学校 ふうのデザイン

- 出典: https://rakuwa-nursingschool.ac.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

白地に `#00205b` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.75、セクション間 56px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #00205b;
  --sub: #d5d4d7;
  --ink: #333333;
  --ink-rev: #00205b;
  --on: #00205b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Lato", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.75;
  --container: 616px;
  --read: 680px;
  --section-y: 56px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 73.7% |
| 主色 | `#e3f7ec` | 7.2% |
| 副色 | `#d5d4d7` | 3.4% |
| 差し色 | `#00205b` | 3.4% |
| 差し色 | `#bccad1` | 3% |
| 差し色 | `#baaaa7` | 2.8% |

文字色は `#333333` / `#00205b` / `#ffffff` / `#737373`。

- 主色 `#00205b` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 24 | 74 | 9 | 2 |
| `#e3f7ec` | 1 | 0 | 0 | 0 |
| `#ebf6ff` | 2 | 0 | 0 | 0 |
| `#00205b` | 5 | 94 | 31 | 2 |
| `#fcf4f0` | 2 | 0 | 0 | 0 |
| `#333333` | 0 | 72 | 0 | 0 |
| `#737373` | 0 | 5 | 0 | 0 |

- `#00205b` は文字色として94箇所で使うのが主。面としては5箇所しかないが、1枚が大きく画面の3%を占める。ボタンの地にも使う。枠線にも31箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#00205b` |
| `#ebf6ff` | `#00205b` |
| `#fcf4f0` | `#00205b` |
| `#fcf5f5` | `#00205b` |

```css
.section{ --on:#00205b }                     /* 地の面 */
.section--main{ background:var(--main); color:#00205b; --on:#00205b }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#00205b }
.section--main .btn--fill{ background:#00205b; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#e3f7ec` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Lato
- ウェイトは 600 / 700 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | — |
| 見出し | 32px | 1.5 |
| 小見出し | 28px | 1.5 |
| リード | 18px | 1.5 |
| リード | 16px | 1.75 |
| 本文 | 14px | 1.75 |
| 補助 | 13px | — |

- 本文は 14px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 616px／読ませる段は 680px
- セクションの上下余白: 56 / 120 / 140 / 80px（基本は 56px）
- 並びの間隔: 8 / 12 / 16 / 20px
- 角丸: 0px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1120 / 1119 / 1024 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.75 | 14px / 行間 1.75 |
| 見出し | 40px | 26px / 行間 1.5 |
| セクションの上下余白 | 56px | 28px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | 8px |

- 本文は 14px → 14px、セクション余白は 56px → 28px（PCの50%）。
- 文字サイズの段は 28 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #00205b;
  border: 1px solid #00205b;
  border-radius: 33554400px; padding: 10px 10px; min-height: 50px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.56px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50px; padding: 8px 16px; min-height: 42px;
  font-size: 16px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #00205b;
  border: 1px;
  border-radius: 33554400px; padding: 17px 20px; min-height: 68px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.64px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 1020px | — | 1カラム・画像あり | 左 | 右（49:51） |
| 3 | 180px | — | 2カラム・画像あり | — | 全面 |
| 4 | 680px | — | 3カラム・画像あり | 左 | 左（58:42） |
| 5 | 2120px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 6 | 240px | — | 6カラム・画像あり | — | 全面 |
| 7 | 660px | — | 2カラム・画像あり | 左 | 左（58:42） |
| 8 | 420px | `#ebf6ff` | 2カラム・画像あり | 左 | 右（42:58） |
| 9 | 1000px | `#e3f7ec` | 5カラム・画像あり | 左 | 見出しの下 |
| 10 | 560px | — | 1カラム・画像あり | — | 全幅 |
| 11 | 580px | — | 3カラム・画像あり | 左 | 左（58:42） |
| 12 | 380px | — | 2カラム・画像あり | 左 | — |

- 全12セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（9） / `#ebf6ff`（2） / `#fcf4f0`（1） / `#fcf5f5`（1）
- 見出しは左7／中央2。
- 2カラムの分け方は 49:51 / 58:42 / 58:42 / 42:58 / 58:42。半分ずつには割らない。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 40px 40px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 8px 16px; font-size: 16px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 46 箇所ある（48px×24、24px×16、32px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 43枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 3:2（15枚）、1:1（14枚）、4:3（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#00205b }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#00205b; --on:#00205b }
.section--main .btn--fill{ background:#00205b; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:40px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#00205b; border-radius:33554400px;
  padding:10px 10px; min-height:50px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:28px; --gap:8px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#00205b` は文字と小さな部品にだけ使う。
- 余白 56px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 50px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
