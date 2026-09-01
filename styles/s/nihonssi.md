# SBI日本少額短期保険 株式会社：保険の安心をすべての方へ ふうのデザイン

- 出典: https://www.n-ssi.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／金融･投資･保険･士業

白地に `#0058a2` を大きな面で置く配色。影を使って浮かせる。本文 13px・行間 1.8、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0058a2;
  --sub: #d1d9db;
  --ink: #222222;
  --ink-rev: #ffffff;
  --on: #0058a2;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.8;
  --container: 1340px;
  --read: 952px;
  --section-y: 60px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 76.6% |
| 主色 | `#0058a2` | 11.4% |
| 副色 | `#d1d9db` | 4.2% |
| 差し色 | `#434146` | 2.4% |
| 差し色 | `#7e9aa6` | 2% |
| 差し色 | `#d8eaf3` | 1.8% |

文字色は `#222222` / `#ffffff` / `#e4f1fd` / `#0058a2`。

- 主色 `#0058a2` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は`rgba(0, 0, 0, 0.1) 0px 0px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 14 | 68 | 0 | 4 |
| `#0058a2` | 9 | 4 | 5 | 5 |
| `#f0f8ff` | 4 | 0 | 0 | 0 |
| `#f0dbd6` | 2 | 0 | 0 | 0 |
| `#d6e3f0` | 2 | 0 | 0 | 0 |
| `#222222` | 0 | 107 | 0 | 0 |
| `#e4f1fd` | 0 | 3 | 0 | 0 |

- `#0058a2` は面として9箇所、文字として4箇所。塗りが主役。ボタンの地にも使う。枠線にも5箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#0058a2` |
| `#f5f8fe` | `#0058a2` |
| `#0058a2`（主色） | `#ffffff` |
| `#f0f8ff` | `#0058a2` |

```css
.section{ --on:#0058a2 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 68px | 1.35 |
| 見出し | 24px | — |
| 小見出し | 20px | — |
| リード | 18px | — |
| リード | 16px | 1.5 |
| リード | 14px | — |
| 本文 | 13px | 1.8 |

- 本文は 13px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1340px／読ませる段は 952px
- セクションの上下余白: 60 / 160 / 120 / 112px（基本は 60px）
- 並びの間隔: 5 / 8 / 10 / 20px
- 角丸: 0px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1366 / 1024 / 1023 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.8 | 13px / 行間 1.8 |
| 見出し | 68px | 33px / 行間 1.5 |
| セクションの上下余白 | 60px | 60px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 10px | 10px |

- 本文は 13px → 13px、セクション余白は 60px → 60px（PCの100%）。
- 文字サイズの段は 20 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #0058a2; color: #ffffff;
  border: 1px solid #0058a2;
  border-radius: 100px; padding: 0px 0px; min-height: 68px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #222222;
  border: 6px;
  border-radius: 0px; padding: 0px 0px; min-height: 80px;
  font-size: 17px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #222222;
  border: 1px solid #d4d4d4;
  border-radius: 100px; padding: 0px 0px; min-height: 68px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1060px | `#0058a2` | ヒーロー（画像） | — | — |
| 2 | 700px | `#f5f8fe` | 1カラム・文字だけ | 左 | — |
| 3 | 200px | — | 帯・区切り | — | — |
| 4 | 200px | — | 帯・区切り | — | — |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#0058a2` の面が 2 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（9） / `#f5f8fe`（3） / `#0058a2`（2） / `#f0f8ff`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 10px;
  padding: 40px 40px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 30px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #d6e3f0; color: #0058a2;
  border-radius: 4px; padding: 3px 15px; font-size: 12px;
}
```

## 画像

- 28枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（13枚）、3:4（12枚）、3:2（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0058a2 }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1060px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:10px; padding:40px 40px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#0058a2; color:#ffffff; border-radius:100px;
  padding:0px 0px; min-height:68px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:13px; --section-y:60px; --gap:10px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地色と主色 `#0058a2` の面を全幅で交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 60px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 10px 以外）を混ぜない。
