# 藤原印刷 ふうのデザイン

- 出典: https://www.fujiwara-i.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／ノーコードツールで制作されたサイト／ノーコードツール｢Studio｣で制作されたサイト

#f9f9f9 の地に `#92b34b` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 null、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f9f9f9;
  --main: #92b34b;
  --sub: #e8a100;
  --ink: #ffffff;
  --ink-rev: #393836;
  --on: #92b34b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 1200px;
  --read: 580px;
  --section-y: 120px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f9f9f9` | 51.9% |
| 主色 | `#92b34b` | 9% |
| 副色 | `#e8a100` | 8.9% |
| 差し色 | `#3ca6e1` | 8.9% |
| 差し色 | `#343435` | 7.3% |
| 差し色 | `#e6e6e5` | 6.4% |

文字色は `#ffffff` / `#393836` / `#6e6d6c` / `#a8a7a6`。

- 主色 `#92b34b` は差し色ではなく**面**で使う。画面の9%を占めている。
- 影は`rgba(0, 0, 0, 0.05) 8px 7px 30px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f9f9f9` | 16 | 34 | 13 | 0 |
| `#e5e4e4` | 25 | 0 | 15 | 0 |
| `#f2f1f1` | 1 | 0 | 0 | 0 |
| `#92b34b` | 1 | 0 | 0 | 0 |
| `#e8a100` | 1 | 0 | 0 | 0 |
| `#393836` | 9 | 29 | 0 | 4 |
| `#6e6d6c` | 0 | 12 | 0 | 0 |
| `#a8a7a6` | 0 | 5 | 2 | 0 |

- `#92b34b` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f9f9f9`（地） | `#92b34b` |
| `#e5e4e4` | `#92b34b` |
| `#393836` | `#393836` |
| `#ffffff` | `#92b34b` |

```css
.section{ --on:#92b34b }                     /* 地の面 */
.section--main{ background:var(--main); color:#393836; --on:#393836 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#393836 }
.section--main .btn--fill{ background:#393836; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e5e4e4`。ただしその囲みは `#f9f9f9` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Hiragino Kaku Gothic ProN（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Inter
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | 1.3 |
| 見出し | 18px | — |
| 本文 | 16px | — |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 580px
- セクションの上下余白: 120 / 40 / 32px（基本は 120px）
- 並びの間隔: 4 / 10 / 16 / 40px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 960 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 14px / 行間 1.8 |
| 見出し | 28px | 24px / 行間 1.3 |
| セクションの上下余白 | 120px | 80px |
| 左右の余白 | — | 32px |
| 並びの間隔 | 16px | 4px |

- 本文は 16px → 14px、セクション余白は 120px → 80px（PCの67%）。
- 文字サイズの段は 24 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 3px 4px; min-height: 41px;
  font-size: 28px; font-weight: 500; letter-spacing: 2.8px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 31px;
  font-size: 14px; font-weight: 400; letter-spacing: 1.4px;
}
.btn-sub{
  background: #393836; color: #ffffff;
  border-radius: 4px; padding: 6px 12px; min-height: 31px;
  font-size: 14px; font-weight: 400; letter-spacing: 1.4px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | `#ffffff` | ヒーロー（画像） | — | — |
| 2 | 300px | — | 帯・区切り | 左 | — |
| 3 | 1000px | — | 1カラム・文字だけ | — | — |
| 4 | 2840px | — | 1カラム・画像あり | — | 全面 |
| 5 | 720px | — | 2カラム | 左 | — |
| 6 | 1020px | — | 2カラム・画像あり | — | 全面 |
| 7 | 640px | — | 1カラム・文字だけ | 右 | — |
| 8 | 700px | — | 4カラム | 左 | — |
| 9 | 1100px | `#f2f1f1` | 6カラム・画像あり | — | — |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f9f9f9`（13） / `#e5e4e4`（10） / `#393836`（4） / `#ffffff`（2）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（12箇所で同じ形）

```css
.card{
  background: #f9f9f9;
  border: 1px solid var(--on);   /* 実測は #e5e4e4。面によって入れ替える */
  border-radius: 0px;
  padding: 64px 64px;
}
```

ラベル・タグ

```css
.chip{
  background: #393836; color: #333333;
  border-radius: 4px; padding: 6px 12px; font-size: 16px;
}
```

## 画像

- 5枚使っている
- 比率は 3:4（2枚）、2:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#92b34b }
.container{ width:min(100% - 64px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#393836; --on:#393836 }
.section--main .btn--fill{ background:#393836; color:var(--main) }
.card{ background:#f9f9f9; border:1px solid var(--on);
  border-radius:0px; padding:64px 64px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:3px 4px; min-height:41px;
  font-size:28px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:600px){
  :root{ --fs-body:14px; --section-y:80px; --gap:4px; }
  .container{ width:calc(100% - 64px) }
}
```

## 守ること

やること

- 地色と主色 `#92b34b` の面を全幅で交互に置く。主色は画面の9%を占めるだけ使う。
- 余白 120px と行間 null を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。
