# 横浜 造園土木施工管理 ふうのデザイン

- 出典: https://www.ishii-zouen.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／レスポンシブ

白地に `#f7edde` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 2、セクション間 92px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #f7edde;
  --sub: #d7e6f3;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #f7edde;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 876px;
  --read: 1192px;
  --section-y: 92px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 69.7% |
| 主色 | `#f7edde` | 18% |
| 副色 | `#d7e6f3` | 2.2% |
| 差し色 | `#69684c` | 1.5% |
| 差し色 | `#718875` | 1.5% |
| 差し色 | `#b1b2ad` | 1.5% |

文字色は `#000000` / `#ffffff` / `#118856` / `#846c1d`。

- 主色 `#f7edde` は差し色ではなく**面**で使う。画面の18%を占めている。
- 影は`rgba(0, 0, 0, 0.3) 0px 3px 7px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f7edde` | 5 | 0 | 0 | 0 |
| `#9cda91` | 1 | 0 | 0 | 0 |
| `#ffffff` | 14 | 7 | 0 | 0 |
| `#118856` | 5 | 6 | 0 | 3 |
| `#000000` | 0 | 65 | 0 | 0 |
| `#846c1d` | 0 | 2 | 0 | 0 |

- `#f7edde` は面として5箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f7edde`（主色） | `#f7edde` |
| `#ffffff`（地） | `#f7edde` |
| `#9cda91` | `#f7edde` |

```css
.section{ --on:#f7edde }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 39px | 1 |
| 見出し | 34px | — |
| 小見出し | 23px | — |
| リード | 19px | — |
| リード | 18px | — |
| リード | 17px | — |
| 本文 | 16px | 2 |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 876px／読ませる段は 1192px
- セクションの上下余白: 92 / 112 / 40 / 224px（基本は 92px）
- 並びの間隔: 11 / 16px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 950 / 949 / 782 / 781 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 13px / 行間 1.6 |
| 見出し | 39px | 24px / 行間 1.6 |
| セクションの上下余白 | 92px | 60px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 16px | 5px |

- 本文は 16px → 13px、セクション余白は 92px → 60px（PCの65%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #118856; color: #ffffff;
  border-radius: 100px; padding: 2px 10px; min-height: 27px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #228bcc; color: #ffffff;
  border-radius: 100px; padding: 2px 10px; min-height: 27px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #afa91c; color: #ffffff;
  border-radius: 100px; padding: 2px 10px; min-height: 27px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | `#f7edde` | ヒーロー（画像） | — | 全幅 |
| 2 | 540px | `#f7edde` | 1カラム・画像あり | — | 全面 |
| 3 | 700px | — | 1カラム・画像あり | — | 全面 |
| 4 | 980px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1020px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 6 | 380px | — | 1カラム・文字だけ | 左 | — |
| 7 | 700px | — | 1カラム・画像あり | — | 全幅 |
| 8 | 1580px | — | 1カラム・画像あり | — | 全面 |
| 9 | 1180px | — | 2カラム・画像あり | — | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#f7edde` の面が 5 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#f7edde`（5） / `#ffffff`（2） / `#9cda91`（1）
- 見出しは左1／中央2。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #118856; color: #ffffff;
  border-radius: 999px; padding: 2px 10px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（64px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 123枚使っている。うち 20 枚は画面いっぱいに置く
- 比率は 4:3（55枚）、3:2（24枚）、3:4（19枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#f7edde }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#118856; color:#ffffff; border-radius:100px;
  padding:2px 10px; min-height:27px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:13px; --section-y:60px; --gap:5px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地色と主色 `#f7edde` の面を全幅で交互に置く。主色は画面の18%を占めるだけ使う。
- 余白 92px と行間 2 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
