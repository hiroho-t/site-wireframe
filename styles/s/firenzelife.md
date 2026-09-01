# 【公式】フィレンツェライフ青山 ふうのデザイン

- 出典: https://www.firenzelife.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／福祉･介護／レスポンシブ

#f5f3ee の地に `#91764a` を大きな面で置く配色。影を使って浮かせる。本文 13px・行間 1.5、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f3ee;
  --main: #91764a;
  --sub: #004f3c;
  --ink: #282b2c;
  --ink-rev: #ffffff;
  --on: #91764a;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Shippori Mincho", sans-serif;
  --font-en: "Shippori Mincho", sans-serif;
  --fs-body: 13px;
  --lh-body: 1.5;
  --container: 1200px;
  --read: 680px;
  --section-y: 120px;
  --gap: 7px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f3ee` | 57.7% |
| 主色 | `#91764a` | 10% |
| 副色 | `#004f3c` | 8.3% |
| 差し色 | `#6b3421` | 4.2% |
| 差し色 | `#1d2521` | 3.9% |
| 差し色 | `#ddd5c2` | 3.5% |

文字色は `#282b2c` / `#ffffff` / `#b0974b` / `#d6be98`。

- 主色 `#91764a` は差し色ではなく**面**で使う。画面の10%を占めている。
- 影は`rgba(0, 0, 0, 0.1) 0px 0px 10px 5px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#004f3c` | 4 | 5 | 0 | 0 |
| `#454545` | 4 | 0 | 0 | 0 |
| `#887241` | 2 | 0 | 0 | 0 |
| `#d6be98` | 1 | 5 | 0 | 0 |
| `#ffffff` | 9 | 52 | 2 | 1 |
| `#282b2c` | 0 | 37 | 0 | 0 |
| `#b0974b` | 8 | 14 | 3 | 2 |

- `#91764a` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#b0974b` | `#91764a` |
| `#454545` | `#ffffff` |
| `#004f3c` | `#ffffff` |
| `#887241` | `#ffffff` |

```css
.section{ --on:#91764a }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#d6be98` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Shippori Mincho
- 欧文: Shippori Mincho
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | — |
| 見出し | 18px | 1.28 |
| 小見出し | 16px | — |
| リード | 15px | — |
| 本文 | 13px | 1.5 |
| 補助 | 12px | — |

- 本文は 13px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 680px
- セクションの上下余白: 120 / 52 / 220 / 260px（基本は 120px）
- 並びの間隔: 4 / 5 / 7 / 15px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1400 / 1280 / 1024 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1.5 | 13px / 行間 1.5 |
| 見出し | 20px | 13px / 行間 1.38 |
| セクションの上下余白 | 120px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 7px | 4px |

- 本文は 13px → 13px、セクション余白は 120px → 32px（PCの27%）。
- 文字サイズの段は 20 / 16 / 15 / 14 / 13px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 50px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.8px;
}
.btn-sub{
  background: #b0974b; color: #ffffff;
  border-radius: 0px; padding: 16px 24px; min-height: 50px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #b0974b;
  border: 1px solid #b0974b;
  border-radius: 0px; padding: 20px 60px; min-height: 77px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.9px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 240px | `#d6be98` | ヒーロー | — | — |
| 2 | 480px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 3 | 2120px | — | 3カラム・画像あり | — | 全面 |
| 4 | 2620px | — | 1カラム・画像あり | 中央 | — |
| 5 | 1760px | — | 4カラム・画像あり | 中央 | 見出しの下 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#b0974b`（5） / `#454545`（4） / `#004f3c`（3） / `#887241`（2）
- 見出しは左1／中央2。


## 部品

囲み（5箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 0px 0px;
}
```


## 画像

- 15枚使っている
- 比率は 4:3（7枚）、3:2（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#91764a }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:240px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:50px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:32px; --gap:4px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#91764a` の面を全幅で交互に置く。主色は画面の10%を占めるだけ使う。
- 余白 120px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
