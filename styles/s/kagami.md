# KAGAMI ふうのデザイン

- 出典: https://jp.is-kagami.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／BtoBのサイト／ノーコードツールで制作されたサイト

白地に `#c3e6ff` を大きな面で置く配色。影を使って浮かせる。本文 18px・行間 1.4、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #c3e6ff;
  --sub: #2e8de1;
  --ink: #0f1419;
  --ink-rev: #0086cc;
  --on: #c3e6ff;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: sans-serif;
  --fs-body: 18px;
  --lh-body: 1.4;
  --container: 680px;
  --read: 720px;
  --section-y: 32px;
  --gap: 24px;
  --radius: 16px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 52.5% |
| 主色 | `#c3e6ff` | 34.5% |
| 副色 | `#2e8de1` | 2.4% |
| 差し色 | `#4faef2` | 2.1% |
| 差し色 | `#605857` | 2% |
| 差し色 | `#c6c9c7` | 1.6% |

文字色は `#0f1419` / `#0086cc` / `#ffffff` / `#304c5c`。

- 主色 `#c3e6ff` は差し色ではなく**面**で使う。画面の35%を占めている。
- 影は`rgba(95, 131, 175, 0.1) 0px 0px 8px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 56 | 27 | 7 | 3 |
| `#c3e6ff` | 1 | 0 | 0 | 0 |
| `#ebf8fd` | 5 | 0 | 0 | 0 |
| `#e0f2fe` | 8 | 0 | 0 | 0 |
| `#0086cc` | 0 | 34 | 2 | 0 |
| `#0f1419` | 0 | 68 | 0 | 0 |
| `#304c5c` | 0 | 14 | 0 | 0 |

- `#c3e6ff` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#c3e6ff` |
| `#e0f2fe` | `#c3e6ff` |
| `#ebf8fd` | `#c3e6ff` |
| `#c3e6ff`（主色） | `#c3e6ff` |

```css
.section{ --on:#c3e6ff }                     /* 地の面 */
.section--main{ background:var(--main); color:#0086cc; --on:#0086cc }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#0086cc }
.section--main .btn--fill{ background:#0086cc; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | — |
| 見出し | 24px | — |
| 小見出し | 20px | — |
| 本文 | 18px | 1.4 |
| 補助 | 16px | — |
| 注記 | 14px | — |

- 本文は 18px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 680px／読ませる段は 720px
- セクションの上下余白: 32 / 48 / 80 / 240px（基本は 32px）
- 並びの間隔: 12 / 16 / 24 / 40px
- 角丸: 16px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1140 / 840 / 540 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.4 | 14px / 行間 1.9 |
| 見出し | 32px | 16px / 行間 1.4 |
| セクションの上下余白 | 32px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 24px | 16px |

- 本文は 18px → 14px、セクション余白は 32px → 24px（PCの75%）。
- 文字サイズの段は 32 / 20 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 16px; padding: 0px 17px; min-height: 64px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #0086cc;
  border: 1px solid #0086cc;
  border-radius: 16px; padding: 0px 17px; min-height: 64px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #0086cc;
  border-radius: 0px; padding: 0px 0px; min-height: 34px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 760px | — | ヒーロー（画像） | — | 全面 |
| 2 | 160px | — | 帯・区切り | — | — |
| 3 | 940px | — | 6カラム・画像あり | — | 全面 |
| 4 | 8300px | — | 6カラム・画像あり | 左 | 全幅 |
| 5 | 400px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 1440px | — | 2カラム・画像あり | 左 | 右（71:29） |

- 全6セクション。
- 主色 `#c3e6ff` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（28） / `#e0f2fe`（2） / `#ebf8fd`（1） / `#c3e6ff`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 71:29。半分ずつには割らない。


## 部品

囲み（7箇所で同じ形）

```css
.card{
  background: transparent;
  border: 10px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 8px;
  padding: 0px 0px;
  box-shadow: rgba(95, 131, 175, 0.1) 0px 0px 8px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #e0f2fe; color: #333333;
  border-radius: 999px; padding: 2px 16px; font-size: 16px;
}
```

## 丸いもの

角丸は 16px だが、**完全な円は別扱い**で 8 箇所ある（16px×8）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 33枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 1:1（10枚）、16:9（8枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#c3e6ff }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:760px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#0086cc; --on:#0086cc }
.section--main .btn--fill{ background:#0086cc; color:var(--main) }
.card{ background:transparent; border:10px solid var(--on);
  border-radius:8px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:16px;
  padding:0px 17px; min-height:64px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:24px; --gap:16px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地色と主色 `#c3e6ff` の面を交互に置く。主色は画面の35%を占めるだけ使う。
- 余白 32px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 10px の線＋角丸 8px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.4 より詰めない。
- 中途半端な角丸（16px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
