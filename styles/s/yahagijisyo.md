# 矢作地所株式会社 ふうのデザイン

- 出典: https://www.yahagijisyo.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／オーソドックス

白地に `#001524` を大きな面で置く配色。影も枠線もほとんど使わない。本文 18px・行間 1.63、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #001524;
  --sub: #225992;
  --ink: #ffffff;
  --ink-rev: #303030;
  --on: #001524;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Roboto", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.63;
  --container: 1280px;
  --read: 684px;
  --section-y: 64px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 38.6% |
| 主色 | `#001524` | 21.1% |
| 副色 | `#225992` | 5.7% |
| 差し色 | `#6d6b5b` | 5.1% |
| 差し色 | `#373c36` | 4.5% |
| 差し色 | `#4c4d42` | 4.3% |

文字色は `#ffffff` / `#303030` / `#666666`。

- 主色 `#001524` は差し色ではなく**面**で使う。画面の21%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#001524` | 1 | 0 | 0 | 0 |
| `#ffffff` | 1 | 29 | 1 | 0 |
| `#ebebeb` | 2 | 0 | 0 | 0 |
| `#dbdbdb` | 0 | 0 | 6 | 0 |
| `#303030` | 0 | 10 | 0 | 0 |
| `#666666` | 0 | 6 | 0 | 0 |

- `#001524` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#001524` |
| `#001524`（主色） | `#303030` |

```css
.section{ --on:#001524 }                     /* 地の面 */
.section--main{ background:var(--main); color:#303030; --on:#303030 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#303030 }
.section--main .btn--fill{ background:#303030; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: 游ゴシック（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Roboto
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.38 |
| 見出し | 36px | 1.38 |
| 小見出し | 32px | 1 |
| 本文 | 18px | 1.63 |
| 補助 | 16px | — |
| 注記 | 14px | — |
| 注記 | 12px | — |

- 本文は 18px・行間 1.63。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 684px
- セクションの上下余白: 64 / 40 / 56 / 100px（基本は 64px）
- 並びの間隔: 8 / 16 / 24 / 40px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 769 / 768 / 640 / 0px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.63 | 16px / 行間 1 |
| 見出し | 40px | 24px / 行間 1.38 |
| セクションの上下余白 | 64px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 24px | 16px |

- 本文は 18px → 16px、セクション余白は 64px → 24px（PCの38%）。
- 文字サイズの段は 28 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 29px;
  font-size: 18px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 760px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1280px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 3 | 160px | — | 帯・区切り | 左 | — |

- 全3セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#001524` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（1） / `#001524`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #dbdbdb。面によって入れ替える */
  border-radius: 0px;
  padding: 160px 0px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 6 箇所ある（40px×3、80px×2、16px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 8枚使っている。うち 4 枚は画面いっぱいに置く
- 比率は 16:9（4枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#001524 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:760px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#303030; --on:#303030 }
.section--main .btn--fill{ background:#303030; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:160px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:29px;
  font-size:18px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:16px; --section-y:24px; --gap:16px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#001524` の面を全幅で交互に置く。主色は画面の21%を占めるだけ使う。
- 余白 64px と行間 1.63 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.63 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
