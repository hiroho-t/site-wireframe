# 治一郎 公式オンラインショップ ふうのデザイン

- 出典: https://www.jiichiro-shop.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: ECサイト･オンラインショップ／料理･食べ物･飲み物･食品製造／オーソドックス

白地に `#ee8d97` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.72、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ee8d97;
  --sub: #ee8d97;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #ee8d97;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "ryo-gothic-plusn", sans-serif;
  --font-en: "ryo-gothic-plusn", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.72;
  --container: 668px;
  --read: 980px;
  --section-y: 40px;
  --gap: 13px;
  --radius: 8px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 51.8% |
| 主色 | `#f8f6e7` | 21.5% |
| 副色 | `#ee8d97` | 5.4% |
| 差し色 | `#dccebc` | 4.7% |
| 差し色 | `#b5a9a6` | 4% |
| 差し色 | `#a3615b` | 3.8% |

文字色は `#000000` / `#ffffff` / `#231815`。

- 主色 `#ee8d97` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f8f6e7` | 2 | 0 | 0 | 0 |
| `#f8f8f8` | 6 | 0 | 0 | 0 |
| `#ffffff` | 0 | 8 | 0 | 0 |
| `#000000` | 0 | 71 | 2 | 0 |
| `#231815` | 0 | 2 | 0 | 0 |

- `#ee8d97` は

## 文字

- 和文: ryo-gothic-plusn
- 欧文: ryo-gothic-plusn
- ウェイトは 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.31 |
| 見出し | 28px | 1.2 |
| 小見出し | 18px | — |
| リード | 15px | — |
| 本文 | 14px | 1.72 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 14px・行間 1.72。

## レイアウト

- コンテンツ幅: 最大 668px／読ませる段は 980px
- セクションの上下余白: 40 / 120 / 140 / 152px（基本は 40px）
- 並びの間隔: 10 / 12 / 13 / 30px
- 角丸: 8px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.72 | 14px / 行間 1.57 |
| 見出し | 32px | 26px / 行間 1.46 |
| セクションの上下余白 | 40px | 36px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 13px | 7px |

- 本文は 14px → 14px、セクション余白は 40px → 36px（PCの90%）。
- 文字サイズの段は 14 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 1px solid #000000;
  border-radius: 4px; padding: 6px 10px; min-height: 33px;
  font-size: 14px; font-weight: 300; letter-spacing: 1.12px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 620px | — | 1カラム・画像あり | 左 | — |
| 3 | 1760px | — | 1カラム・画像あり | 中央 | 全幅 |
| 4 | 700px | — | 6カラム・画像あり | — | — |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f8f6e7`（1）
- 見出しは左1／中央1。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #d9d9d9。面によって入れ替える */
  border-radius: 8px;
  padding: 30px 30px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #000000;
  border: 1px solid currentColor;
  border-radius: 4px; padding: 6px 13px; font-size: 14px;
}
```

## 丸いもの

角丸は 8px だが、**完全な円は別扱い**で 2 箇所ある（16px×1、24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 16枚使っている。うち 14 枚は画面いっぱいに置く
- 比率は 3:2（8枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ee8d97 }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:8px; padding:30px 30px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:4px;
  padding:6px 10px; min-height:33px;
  font-size:14px; font-weight:300 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:36px; --gap:7px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ee8d97` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1.72 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 8px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.72 より詰めない。
- 中途半端な角丸（8px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
