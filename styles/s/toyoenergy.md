# TOP ふうのデザイン

- 出典: https://www.toyo-e.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／ノーコードツールで制作されたサイト／ノーコードツール｢Studio｣で制作されたサイト

#f6f7fa の地に `#404460` を大きな面で置く配色。影も枠線もほとんど使わない。本文 18px・行間 2、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f6f7fa;
  --main: #404460;
  --sub: #243dc9;
  --ink: #2a2f4e;
  --ink-rev: #ffffff;
  --on: #404460;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Raleway", sans-serif;
  --fs-body: 18px;
  --lh-body: 2;
  --container: 1356px;
  --read: 656px;
  --section-y: 80px;
  --gap: 130px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f6f7fa` | 64.3% |
| 主色 | `#404460` | 14.4% |
| 副色 | `#243dc9` | 9.1% |
| 差し色 | `#3e54d0` | 5.3% |
| 差し色 | `#b0c8d1` | 1.9% |
| 差し色 | `#162139` | 1.8% |

文字色は `#2a2f4e` / `#ffffff` / `#142fc6` / `#000000`。

- 主色 `#404460` は差し色ではなく**面**で使う。画面の14%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f6f7fa` | 3 | 0 | 0 | 0 |
| `#2a2f4e` | 1 | 57 | 3 | 0 |
| `#142fc6` | 6 | 17 | 0 | 3 |
| `#ffffff` | 8 | 33 | 1 | 7 |
| `#000000` | 0 | 1 | 0 | 0 |

- `#404460` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f6f7fa`（地） | `#404460` |
| `#2a2f4e` | `#ffffff` |

```css
.section{ --on:#404460 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Raleway
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.6 |
| 本文 | 18px | 1.5 |
| 補助 | 16px | — |
| 注記 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 18px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1356px／読ませる段は 656px
- セクションの上下余白: 80 / 200 / 160 / 32px（基本は 80px）
- 並びの間隔: 8 / 11 / 130 / 160px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1141 / 1140 / 840 / 540px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 2 | 14px / 行間 2 |
| セクションの上下余白 | 80px | 28px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 130px | 8px |

- 本文は 18px → 14px、セクション余白は 80px → 28px（PCの35%）。
- 文字サイズの段は 24 / 15 / 14 / 13 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #2a2f4e;
  border-radius: 128px; padding: 0px 20px; min-height: 40px;
  font-size: 15px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #142fc6; color: #ffffff;
  border-radius: 128px; padding: 0px 20px; min-height: 40px;
  font-size: 15px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #142fc6;
  border-radius: 0px; padding: 0px 0px; min-height: 72px;
  font-size: 14px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 140px | — | ヒーロー（画像） | — | — |
| 2 | 900px | — | 1カラム・画像あり | — | 全面 |
| 3 | 1940px | — | 6カラム・画像あり | 右 | 左（57:43） |
| 4 | 1180px | — | 1カラム・画像あり | — | — |
| 5 | 920px | — | 2カラム・画像あり | — | — |
| 6 | 1200px | — | 4カラム・画像あり | 中央 | — |
| 7 | 1140px | `#2a2f4e` | 3カラム・画像あり | — | 全面 |
| 8 | 600px | — | 1カラム・画像あり | — | 全面 |

- 全8セクション。
- 使われている面の色: `#f6f7fa`（2） / `#2a2f4e`（1）
- 見出しは左0／中央1。
- 2カラムの分け方は 57:43。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #333333;
  border-radius: 999px; padding: 0px 20px; font-size: 16px;
}
```

## 画像

- 13枚使っている
- 比率は 1:1（4枚）、3:2（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#404460 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:140px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#2a2f4e; border-radius:128px;
  padding:0px 20px; min-height:40px;
  font-size:15px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:28px; --gap:8px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地色と主色 `#404460` の面を交互に置く。主色は画面の14%を占めるだけ使う。
- 余白 80px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
