# 旅館・ホテル・宿泊業の集客・経営支援なら株式会社宿力 ふうのデザイン

- 出典: https://yado-riki.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／企画･開発･マーケティング･コンサルティング／オーソドックス

白地に `#98794b` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 19px・行間 1.75、セクション間 112px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #98794b;
  --sub: #98794b;
  --ink: #3d3535;
  --ink-rev: #ffffff;
  --on: #98794b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 19px;
  --lh-body: 1.75;
  --container: 1120px;
  --read: 580px;
  --section-y: 112px;
  --gap: 13px;
  --radius: 2px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 80.8% |
| 主色 | `#2f2d2d` | 9.7% |
| 副色 | `#98794b` | 2.3% |
| 差し色 | `#0d0e0a` | 2% |

文字色は `#3d3535` / `#ffffff` / `#a79b9b` / `#999999`。

- 主色 `#98794b` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 21 | 51 | 2 | 4 |
| `#f7f6f6` | 16 | 0 | 0 | 0 |
| `#2f2d2d` | 1 | 0 | 0 | 0 |
| `#3d3535` | 15 | 35 | 0 | 0 |
| `#a79b9b` | 0 | 13 | 0 | 0 |
| `#999999` | 0 | 5 | 0 | 0 |

- `#98794b` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#98794b` |
| `#f7f6f6` | `#98794b` |
| `#fdf3f3` | `#98794b` |
| `#2f2d2d` | `#ffffff` |

```css
.section{ --on:#98794b }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#dfdfdf`。ただしその囲みは `#fdf3f3` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Roboto
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 45px | 1 |
| 見出し | 40px | 1.7 |
| 小見出し | 23px | 1.7 |
| 本文 | 19px | 1.75 |
| 補助 | 16px | — |
| 注記 | 15px | — |
| 注記 | 14px | — |

- 本文は 19px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1120px／読ませる段は 580px
- セクションの上下余白: 112 / 60 / 68 / 92px（基本は 112px）
- 並びの間隔: 5 / 6 / 13 / 16px
- 角丸: 2px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1599 / 1299 / 1023 / 767 / 567px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 19px / 行間 1.75 | 14px / 行間 1.75 |
| 見出し | 45px | 24px / 行間 1.7 |
| セクションの上下余白 | 112px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 13px | 14px |

- 本文は 19px → 14px、セクション余白は 112px → 32px（PCの29%）。
- 文字サイズの段は 20 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #3d3535;
  border-radius: 0px; padding: 0px 0px; min-height: 55px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.786939px;
}
.btn-sub{
  background: #ffffff; color: #3d3535;
  border: 1px solid #dfdfdf;
  border-radius: 4px; padding: 8px 8px; min-height: 55px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.786939px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px;
  border-radius: 4px; padding: 8px 8px; min-height: 55px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.786939px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#ffffff` | ヒーロー（画像） | — | — |
| 2 | 5920px | — | 3カラム・画像あり | 左 | 全幅 |
| 3 | 1500px | `#ffffff` | 2カラム・画像あり | 中央 | 全幅 |
| 4 | 680px | `#f7f6f6` | 1カラム・画像あり | 左 | — |
| 5 | 1360px | `#ffffff` | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 680px | `#fdf3f3` | 4カラム・画像あり | — | 全面 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（9） / `#f7f6f6`（3） / `#fdf3f3`（2） / `#2f2d2d`（1）
- 見出しは左3／中央1。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #dfdfdf。面によって入れ替える */
  border-radius: 8px;
  padding: 16px 16px;
}
```


## 丸いもの

角丸は 2px だが、**完全な円は別扱い**で 3 箇所ある（104px×2、160px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 42枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 1:1（17枚）、16:9（9枚）、3:2（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#98794b }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:8px; padding:16px 16px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#3d3535; border-radius:0px;
  padding:0px 0px; min-height:55px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:14px; --section-y:32px; --gap:14px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#98794b` は文字と小さな部品にだけ使う。
- 余白 112px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 8px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。
- 中途半端な角丸（2px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
