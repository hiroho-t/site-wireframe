# Nue inc. / 株式会社ぬえ ふうのデザイン

- 出典: https://www.nue-inc.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / モノトーン
- 業種: コーポレートサイト／企画･開発･マーケティング･コンサルティング／レスポンシブ

白地に `#d6d6d6` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2.2、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #d6d6d6;
  --ink: #1a1a1a;
  --on: #d6d6d6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 16px;
  --lh-body: 2.2;
  --container: 696px;
  --read: 1152px;
  --section-y: 60px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 85.6% |
| 主色 | `#d6d6d6` | 4.1% |

文字色は `#1a1a1a`。

- 主色 `#d6d6d6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 7 | 0 | 0 | 7 |
| `#494949` | 1 | 0 | 0 | 0 |
| `#1a1a1a` | 0 | 55 | 0 | 0 |

- `#d6d6d6` は

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 26px | 1 |
| 見出し | 25px | — |
| 小見出し | 18px | — |
| 本文 | 16px | 2.2 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 2.2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 696px／読ませる段は 1152px
- セクションの上下余白: 60 / 152 / 292 / 48px（基本は 60px）
- 並びの間隔: px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 880 / 768 / 640 / 430px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.2 | 14px / 行間 2 |
| 見出し | 26px | 28px / 行間 1 |
| セクションの上下余白 | 60px | 28px |
| 左右の余白 | — | 26px |
| 並びの間隔 | 16px | —px |

- 本文は 16px → 14px、セクション余白は 60px → 28px（PCの47%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #1a1a1a;
  border: 1px solid #b1b1b1;
  border-radius: 1440px; padding: 0px 0px; min-height: 36px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.64px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1040px | — | ヒーロー（画像） | 中央 | 全幅 |
| 2 | 180px | — | 帯・区切り | — | — |
| 3 | 8340px | — | 1カラム・画像あり | 左 | 右（55:45） |
| 4 | 520px | — | 2カラム・画像あり | 中央 | 全幅 |
| 5 | 1220px | — | 1カラム・画像あり | — | 全幅 |

- 全5セクション。
- 使われている面の色: 
- 見出しは左1／中央2。
- 2カラムの分け方は 55:45。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 12枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 1:1（7枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d6d6d6 }
.container{ width:min(100% - 52px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1040px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#1a1a1a; border-radius:1440px;
  padding:0px 0px; min-height:36px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:880px){
  :root{ --fs-body:14px; --section-y:28px; }
  .container{ width:calc(100% - 52px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#d6d6d6` は文字と小さな部品にだけ使う。
- 余白 60px と行間 2.2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
