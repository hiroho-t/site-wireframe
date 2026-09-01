# 長野県長野市の総合建設会社 ふうのデザイン

- 出典: https://kakumagumi.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／建設･インフラ･土木･設備

#f5f5f5 の地に `#101760` を大きな面で置く配色。影も枠線もほとんど使わない。本文 18px・行間 null、セクション間 48px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f5f5;
  --main: #101760;
  --sub: #1d2577;
  --ink: #ffffff;
  --ink-rev: #000000;
  --on: #101760;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "FOT-筑紫Aオールド明朝 Pr6 M", sans-serif;
  --font-en: sans-serif;
  --fs-body: 18px;
  --lh-body: null;
  --container: 652px;
  --read: 736px;
  --section-y: 48px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f5f5` | 41.1% |
| 主色 | `#101760` | 14.9% |
| 副色 | `#1d2577` | 10.8% |
| 差し色 | `#6a655a` | 8% |
| 差し色 | `#6e869f` | 5.4% |
| 差し色 | `#b8c0ce` | 4.9% |

文字色は `#ffffff` / `#000000` / `#a7a7a7`。

- 主色 `#101760` は差し色ではなく**面**で使う。画面の15%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#1d2577` | 7 | 0 | 0 | 3 |
| `#101760` | 1 | 0 | 0 | 0 |
| `#eaeaea` | 1 | 0 | 0 | 0 |
| `#ffffff` | 3 | 59 | 3 | 1 |
| `#000000` | 0 | 65 | 0 | 0 |
| `#a7a7a7` | 0 | 3 | 24 | 0 |

- `#101760` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#1d2577` | `#000000` |
| `#ffffff` | `#101760` |
| `#eaeaea` | `#101760` |
| `#101760`（主色） | `#000000` |

```css
.section{ --on:#101760 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: FOT-筑紫Aオールド明朝 Pr6 M
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 38px | — |
| 見出し | 30px | — |
| 小見出し | 29px | — |
| リード | 19px | — |
| 本文 | 18px | — |
| 補助 | 17px | — |
| 注記 | 14px | — |

- 本文は 18px・行間 null。

## レイアウト

- コンテンツ幅: 最大 652px／読ませる段は 736px
- セクションの上下余白: 48 / 124 / 64 / 96px（基本は 48px）
- 並びの間隔: 3 / 6 / 16 / 38px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1440 / 1160 / 1080 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px | 15px |
| 見出し | 38px | 26px |
| セクションの上下余白 | 48px | 32px |
| 左右の余白 | — | 23px |
| 並びの間隔 | 16px | 6px |

- 本文は 18px → 15px、セクション余白は 48px → 32px（PCの67%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border: 1px solid #a7a7a7;
  border-radius: 9999px; padding: 6px 16px; min-height: 29px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #000000;
  border: 1px solid #a7a7a7;
  border-radius: 9999px; padding: 0px 24px; min-height: 55px;
  font-size: 17px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 9999px; padding: 0px 24px; min-height: 55px;
  font-size: 17px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1000px | `#1d2577` | ヒーロー（画像） | — | 全面 |
| 2 | 560px | — | 1カラム・文字だけ | 左 | — |
| 3 | 780px | `#1d2577` | 2カラム・画像あり | 左 | 見出しの下 |
| 4 | 180px | — | 帯・区切り | 中央 | — |
| 5 | 520px | — | 4カラム・画像あり | — | 全面 |
| 6 | 600px | — | 1カラム・画像あり | 左 | 右（41:59） |
| 7 | 660px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 8 | 720px | — | 1カラム・画像あり | 左 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#101760` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#1d2577`（2） / `#ffffff`（1） / `#eaeaea`（1） / `#101760`（1）
- 見出しは左5／中央1。
- 2カラムの分け方は 41:59。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 5px 13px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（40px×2、24px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 16枚使っている
- 比率は 3:2（10枚）、1:1（4枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#101760 }
.container{ width:min(100% - 46px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1000px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:9999px;
  padding:6px 16px; min-height:29px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:32px; --gap:6px; }
  .container{ width:calc(100% - 46px) }
}
```

## 守ること

やること

- 地色と主色 `#101760` の面を全幅で交互に置く。主色は画面の15%を占めるだけ使う。
- 余白 48px と行間 null を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を null より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
