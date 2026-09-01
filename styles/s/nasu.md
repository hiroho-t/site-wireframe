# NASU デザインで成す会社 ふうのデザイン

- 出典: https://nasu.design/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／デザイン･イラスト･写真･映像･制作／レスポンシブ

白地に `#ffa600` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ffa600;
  --sub: #c6c5c1;
  --ink: #212121;
  --ink-rev: #555555;
  --on: #ffa600;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 612px;
  --read: 1075px;
  --section-y: 60px;
  --gap: 13px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 84.4% |
| 主色 | `#dfdcd2` | 3% |
| 副色 | `#c6c5c1` | 2.7% |
| 差し色 | `#0b0c1e` | 1.7% |
| 差し色 | `#9d958d` | 1.6% |

文字色は `#212121` / `#555555` / `#ffa600` / `#6f6f6f`。

- 主色 `#ffa600` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5f5` | 10 | 0 | 0 | 9 |
| `#111111` | 1 | 0 | 0 | 0 |
| `#ffa600` | 4 | 4 | 0 | 0 |
| `#0b0c1f` | 1 | 0 | 0 | 0 |
| `#212121` | 7 | 184 | 8 | 0 |
| `#555555` | 0 | 74 | 0 | 0 |
| `#6f6f6f` | 0 | 6 | 0 | 0 |

- `#ffa600` は面として4箇所、文字として4箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffa600`（主色） | `#ffa600` |
| `#0b0c1f` | `#555555` |
| `#f5f5f5` | `#ffa600` |
| `#111111` | `#555555` |

```css
.section{ --on:#ffa600 }                     /* 地の面 */
.section--main{ background:var(--main); color:#555555; --on:#555555 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#555555 }
.section--main .btn--fill{ background:#555555; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#d9d9d9`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 600 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.6 |
| 見出し | 28px | 1.5 |
| 小見出し | 23px | — |
| リード | 22px | 1.4 |
| リード | 18px | — |
| リード | 17px | — |
| 本文 | 16px | 1 |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 612px／読ませる段は 1075px
- セクションの上下余白: 60 / 200 / 100 / 52px（基本は 60px）
- 並びの間隔: 7 / 8 / 13 / 18px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1024 / 880 / 768 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 14px / 行間 1.8 |
| 見出し | 32px | 23px / 行間 1.6 |
| セクションの上下余白 | 60px | 32px |
| 左右の余白 | — | 28px |
| 並びの間隔 | 13px | 6px |

- 本文は 16px → 14px、セクション余白は 60px → 32px（PCの53%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #f0f0f0; color: #212121;
  border-radius: 0px; padding: 10px 10px; min-height: 33px;
  font-size: 13px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #212121;
  border: 1px solid #212121;
  border-radius: 0px; padding: 6px 6px; min-height: 26px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #212121;
  border-radius: 0px; padding: 0px 0px; min-height: 52px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.48px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 660px | — | ヒーロー（画像） | — | 全面 |
| 2 | 480px | — | 1カラム・画像あり | — | 全面 |
| 3 | 160px | — | 帯・区切り | — | 全面 |
| 4 | 160px | — | 帯・区切り | — | 全面 |
| 5 | 660px | — | 1カラム・画像あり | — | 全面 |
| 6 | 160px | — | 帯・区切り | — | 全面 |
| 7 | 320px | — | 帯・区切り | — | 全面 |
| 8 | 660px | — | 1カラム・画像あり | — | 全面 |
| 9 | 660px | — | 1カラム・画像あり | — | 全面 |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffa600`（4） / `#0b0c1f`（1） / `#f5f5f5`（1） / `#111111`（1）


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #d9d9d9。面によって入れ替える */
  border-radius: 5px;
  padding: 0px 0px;
}
```


## 画像

- 57枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（39枚）、1:1（13枚）、3:4（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ffa600 }
.container{ width:min(100% - 56px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:660px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#555555; --on:#555555 }
.section--main .btn--fill{ background:#555555; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:5px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f0f0f0; color:#212121; border-radius:0px;
  padding:10px 10px; min-height:33px;
  font-size:13px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:880px){
  :root{ --fs-body:14px; --section-y:32px; --gap:6px; }
  .container{ width:calc(100% - 56px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ffa600` は文字と小さな部品にだけ使う。
- 余白 60px と行間 2 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 5px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。
