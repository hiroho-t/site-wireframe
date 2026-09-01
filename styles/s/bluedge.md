# bluedge ふうのデザイン

- 出典: https://www.bluedge.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／デザイン･イラスト･写真･映像･制作

白地に `#93d1ef` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 84px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #93d1ef;
  --sub: #005aaa;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #93d1ef;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1208px;
  --read: 732px;
  --section-y: 84px;
  --gap: 10px;
  --radius: 12px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 57.8% |
| 主色 | `#93d1ef` | 15.3% |
| 副色 | `#005aaa` | 13.4% |
| 差し色 | `#b1cbf1` | 6.4% |
| 差し色 | `#2771b3` | 1.9% |
| 差し色 | `#97adbf` | 1.9% |

文字色は `#333333` / `#ffffff` / `#005aaa` / `#81baeb`。

- 主色 `#93d1ef` は差し色ではなく**面**で使う。画面の15%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 19 | 39 | 0 | 0 |
| `#b1cbf1` | 1 | 0 | 0 | 0 |
| `#a8dbf4` | 1 | 0 | 0 | 0 |
| `#005aaa` | 9 | 14 | 8 | 2 |
| `#333333` | 0 | 49 | 0 | 0 |
| `#81baeb` | 0 | 5 | 1 | 0 |

- `#93d1ef` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#93d1ef` |
| `#a8dbf4` | `#93d1ef` |
| `#b1cbf1` | `#93d1ef` |
| `#005aaa` | `#ffffff` |

```css
.section{ --on:#93d1ef }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#a8dbf4` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- ウェイトは 700 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 19px | — |
| 見出し | 18px | 1.5 |
| 本文 | 16px | 1 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1208px／読ませる段は 732px
- セクションの上下余白: 84 / 36 / 48 / 52px（基本は 84px）
- 並びの間隔: 5 / 8 / 10 / 20px
- 角丸: 12px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1080 / 960 / 768 / 620 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 15px / 行間 2 |
| 見出し | 19px | 15px / 行間 1.5 |
| セクションの上下余白 | 84px | 36px |
| 左右の余白 | — | 27px |
| 並びの間隔 | 10px | 8px |

- 本文は 16px → 15px、セクション余白は 84px → 36px（PCの43%）。
- 文字サイズの段は 27 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #333333;
  border: 1px solid #c0cedb;
  border-radius: 12px; padding: 0px 40px; min-height: 70px;
  font-size: 16px; font-weight: 700; letter-spacing: 0.96px;
}
.btn-sub{
  background: #005aaa; color: #ffffff;
  border: 1px solid #005aaa;
  border-radius: 12px; padding: 0px 0px; min-height: 70px;
  font-size: 15px; font-weight: 600; letter-spacing: 0.96px;
}
.btn-sub{
  background: transparent; color: #333333;
  border-radius: 0px; padding: 0px 0px; min-height: 84px;
  font-size: 36px; font-weight: 700; letter-spacing: 2.4px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | 中央 | — |
| 2 | 460px | `#ffffff` | 2カラム | 中央 | — |
| 3 | 5220px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 4 | 520px | — | 1カラム・画像あり | 左 | — |
| 5 | 620px | `#005aaa` | 1カラム・画像あり | 中央 | 左（13:87） |

- 全5セクション。
- 使われている面の色: `#ffffff`（3） / `#a8dbf4`（1） / `#b1cbf1`（1） / `#005aaa`（1）
- 見出しは左1／中央4。
- 2カラムの分け方は 13:87。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 12px;
  padding: 38px 36px;
}
```


## 画像

- 8枚使っている
- 比率は 3:2（5枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#93d1ef }
.container{ width:min(100% - 54px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:12px; padding:38px 36px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#333333; border-radius:12px;
  padding:0px 40px; min-height:70px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:36px; --gap:8px; }
  .container{ width:calc(100% - 54px) }
}
```

## 守ること

やること

- 地色と主色 `#93d1ef` の面を交互に置く。主色は画面の15%を占めるだけ使う。
- 余白 84px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 12px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。
- 中途半端な角丸（12px と 0px 以外）を混ぜない。
