# もりおか眼科 ふうのデザイン

- 出典: https://morioka-ganka.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／BtoCのサイト／ノーコードツールで制作されたサイト

#fbfcf7 の地に `#0000f9` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 17px・行間 1.8、セクション間 132px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fbfcf7;
  --main: #0000f9;
  --ink: #423e3e;
  --ink-rev: #0000f9;
  --on: #0000f9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "あおとゴシック R", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 17px;
  --lh-body: 1.8;
  --container: 632px;
  --read: 856px;
  --section-y: 132px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fbfcf7` | 94.6% |
| 主色 | `#e7ecec` | 2.6% |

文字色は `#423e3e` / `#0000f9` / `#ffffff` / `#b2b1b1`。

- 主色 `#0000f9` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fbfcf7` | 20 | 16 | 9 | 4 |
| `#f3f4ec` | 2 | 0 | 0 | 0 |
| `#014373` | 4 | 0 | 0 | 0 |
| `#423e3e` | 1 | 76 | 5 | 1 |
| `#e5e5e5` | 0 | 0 | 4 | 0 |
| `#0000f9` | 0 | 20 | 8 | 0 |
| `#b2b1b1` | 0 | 10 | 0 | 0 |

- `#0000f9` は文字色として20箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。枠線にも8箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fbfcf7`（地） | `#0000f9` |
| `#ffffff` | `#0000f9` |
| `#014373` | `#0000f9` |
| `#f3f4ec` | `#0000f9` |

```css
.section{ --on:#0000f9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#0000f9; --on:#0000f9 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#0000f9 }
.section--main .btn--fill{ background:#0000f9; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f3f4ec` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: あおとゴシック R
- 欧文: Roboto
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 1.6 |
| 見出し | 26px | 1.6 |
| 小見出し | 24px | 1.6 |
| リード | 20px | — |
| 本文 | 17px | 1.8 |
| 補助 | 16px | — |
| 注記 | 15px | — |

- 本文は 17px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 632px／読ませる段は 856px
- セクションの上下余白: 132 / 112 / 300 / 60px（基本は 132px）
- 並びの間隔: 8 / 12 / 24 / 40px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 840 / 540 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 1.8 | 15px / 行間 1.4 |
| 見出し | 28px | 26px / 行間 1.6 |
| セクションの上下余白 | 132px | 40px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 24px | 16px |

- 本文は 17px → 15px、セクション余白は 132px → 40px（PCの30%）。
- 文字サイズの段は 17 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #423e3e;
  border: 1px solid #423e3e;
  border-radius: 9999px; padding: 6px 18px; min-height: 36px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.8px;
}
.btn-sub{
  background: #423e3e; color: #ffffff;
  border: 1px solid #423e3e;
  border-radius: 9999px; padding: 6px 18px; min-height: 36px;
  font-size: 16px; font-weight: 400; letter-spacing: 1.6px;
}
.btn-sub{
  background: #ffffff; color: #0000f9;
  border: 1px solid #0000f9;
  border-radius: 64px; padding: 8px 20px; min-height: 39px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.75px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 760px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 960px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 520px | — | 3カラム・画像あり | — | — |
| 4 | 1420px | `#f3f4ec` | 4カラム・画像あり | 中央 | 見出しの下 |
| 5 | 3100px | `#fbfcf7` | 1カラム・画像あり | 中央 | 見出しの下 |
| 6 | 820px | `#f3f4ec` | 3カラム・画像あり | 中央 | — |
| 7 | 900px | `#fbfcf7` | 3カラム・画像あり | 中央 | — |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fbfcf7`（7） / `#ffffff`（7） / `#014373`（4） / `#f3f4ec`（2）
- 見出しは左0／中央5。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 66px 66px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 18 箇所ある（32px×17、80px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 15枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 1:1（3枚）、4:3（3枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0000f9 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:760px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#0000f9; --on:#0000f9 }
.section--main .btn--fill{ background:#0000f9; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:66px 66px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#423e3e; border-radius:9999px;
  padding:6px 18px; min-height:36px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:15px; --section-y:40px; --gap:16px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#fbfcf7` のまま。主色 `#0000f9` は文字と小さな部品にだけ使う。
- 余白 132px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
