# 滋賀のガーデニング・家庭菜園・農業資材専門店 ふうのデザイン

- 出典: https://kawashimaseed.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／農業･畜産業･林業･漁業･園芸／オーソドックス

#ececec の地に `#75c5d3` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 null、セクション間 132px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ececec;
  --main: #75c5d3;
  --sub: #75c5d3;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #75c5d3;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Outfit", sans-serif;
  --fs-body: 15px;
  --lh-body: null;
  --container: 760px;
  --read: 584px;
  --section-y: 132px;
  --gap: 15px;
  --radius: 8px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ececec` | 75.1% |
| 主色 | `#ffffff` | 9.4% |
| 副色 | `#75c5d3` | 1.6% |
| 差し色 | `#cad0c8` | 1.6% |

文字色は `#000000` / `#ffffff` / `#687770` / `#d82129`。

- 主色 `#75c5d3` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#687770` | 1 | 2 | 0 | 0 |
| `#67c7f2` | 4 | 0 | 0 | 0 |
| `#f18c43` | 3 | 0 | 0 | 0 |
| `#ececec` | 18 | 0 | 0 | 17 |
| `#333333` | 7 | 0 | 0 | 7 |
| `#000000` | 0 | 104 | 0 | 0 |
| `#ffffff` | 6 | 34 | 0 | 6 |
| `#d82129` | 0 | 1 | 0 | 0 |

- `#75c5d3` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#67c7f2` | `#75c5d3` |
| `#f18c43` | `#75c5d3` |
| `#39c876` | `#75c5d3` |
| `#cecabc` | `#75c5d3` |

```css
.section{ --on:#75c5d3 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Outfit
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 61px | 1.2 |
| 見出し | 38px | 1.8 |
| 小見出し | 23px | — |
| リード | 19px | — |
| 本文 | 15px | 1.7 |
| 補助 | 13px | — |
| 注記 | 11px | 1.8 |

- 本文は 15px・行間 null。

## レイアウト

- コンテンツ幅: 最大 760px／読ませる段は 584px
- セクションの上下余白: 132 / 48 / 64 / 68px（基本は 132px）
- 並びの間隔: 6 / 8 / 15 / 17px
- 角丸: 8px が基本。大きな面だけ 15px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 800 / 768 / 767 / 640 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px | 14px / 行間 1.7 |
| 見出し | 61px | 32px / 行間 1.2 |
| セクションの上下余白 | 132px | 24px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 15px | 8px |

- 本文は 15px → 14px、セクション余白は 132px → 24px（PCの18%）。
- 文字サイズの段は 20 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ececec; color: #000000;
  border-radius: 8px; padding: 7px 10px; min-height: 33px;
  font-size: 19px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 72px;
  font-size: 19px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #333333; color: #ffffff;
  border-radius: 999px; padding: 15px 11px; min-height: 46px;
  font-size: 13px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 6320px | — | ヒーロー（画像） | 左 | 右（45:55） |
| 2 | 640px | `#687770` | 1カラム・画像あり | — | 全面 |

- 全2セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#67c7f2`（4） / `#f18c43`（3） / `#39c876`（1） / `#cecabc`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 45:55。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #67c7f2;
  border-radius: 15px;
  padding: 28px 22px;
}
```

ラベル・タグ

```css
.chip{
  background: #ececec; color: #000000;
  border-radius: 8px; padding: 7px 11px; font-size: 19px;
}
```

## 画像

- 54枚使っている
- 比率は 1:1（24枚）、3:4（22枚）、4:3（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#75c5d3 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:6320px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#67c7f2;
  border-radius:15px; padding:28px 22px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ececec; color:#000000; border-radius:8px;
  padding:7px 10px; min-height:33px;
  font-size:19px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:800px){
  :root{ --fs-body:14px; --section-y:24px; --gap:8px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#ececec` のまま。主色 `#75c5d3` は文字と小さな部品にだけ使う。
- 余白 132px と行間 null を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 15px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。
- 中途半端な角丸（8px と 15px 以外）を混ぜない。
