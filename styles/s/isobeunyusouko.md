# 磯部運輸倉庫株式会社 ふうのデザイン

- 出典: https://isobeunyu-souko.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／オーソドックス

白地に `#c4d7dd` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 11px・行間 1.8、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #c4d7dd;
  --sub: #c4d7dd;
  --ink: #000000;
  --ink-rev: #006532;
  --on: #c4d7dd;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Questrial", sans-serif;
  --fs-body: 11px;
  --lh-body: 1.8;
  --container: 608px;
  --read: 816px;
  --section-y: 64px;
  --gap: 32px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 62.3% |
| 主色 | `#dfebee` | 6.8% |
| 副色 | `#c4d7dd` | 5.7% |
| 差し色 | `#527c85` | 3.3% |
| 差し色 | `#a4bbbf` | 3.2% |
| 差し色 | `#3d515e` | 3% |

文字色は `#000000` / `#006532` / `#ffffff`。

- 主色 `#c4d7dd` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 3 | 1 | 0 | 2 |
| `#f6f6f6` | 1 | 0 | 0 | 0 |
| `#006532` | 2 | 8 | 0 | 1 |
| `#000000` | 0 | 41 | 0 | 0 |
| `#e5f4eb` | 2 | 0 | 8 | 2 |

- `#c4d7dd` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#c4d7dd` |
| `#f6f6f6` | `#c4d7dd` |

```css
.section{ --on:#c4d7dd }                     /* 地の面 */
.section--main{ background:var(--main); color:#006532; --on:#006532 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#006532 }
.section--main .btn--fill{ background:#006532; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Questrial
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 21px | — |
| 見出し | 15px | 1.8 |
| 小見出し | 13px | — |
| リード | 12px | — |
| 本文 | 11px | 1.8 |
| 補助 | 10px | — |

- 本文は 11px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 608px／読ませる段は 816px
- セクションの上下余白: 64 / 72 / 80 / 116px（基本は 64px）
- 並びの間隔: 16 / 24 / 32 / 50px
- 角丸: 0px が基本。大きな面だけ 5px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 840 / 767 / 640 / 600 / 500px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 11px / 行間 1.8 | 11px / 行間 1.7 |
| セクションの上下余白 | 64px | 40px |
| 左右の余白 | — | 25px |
| 並びの間隔 | 32px | 8px |

- 本文は 11px → 11px、セクション余白は 64px → 40px（PCの63%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #006532;
  border-radius: 0px; padding: 0px 0px; min-height: 61px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.52px;
}
.btn-sub{
  background: #ffffff; color: #006532;
  border-radius: 64px; padding: 8px 24px; min-height: 39px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.52px;
}
.btn-sub{
  background: #006532; color: #ffffff;
  border-radius: 5px; padding: 5px 11px; min-height: 61px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.56px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 840px | `#ffffff` | ヒーロー（画像） | — | 全面 |
| 2 | 1460px | — | 2カラム・画像あり | — | 全面 |
| 3 | 900px | — | 4カラム・画像あり | 右 | 見出しの下 |
| 4 | 540px | — | 1カラム・画像あり | 左 | — |
| 5 | 480px | — | 1カラム・画像あり | — | 全面 |
| 6 | 280px | — | 2カラム・画像あり | — | 全面 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（1） / `#f6f6f6`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #006532;
  border-radius: 999px; padding: 8px 24px; font-size: 10px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（48px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 20枚使っている
- 比率は 3:2（6枚）、3:4（6枚）、1:1（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#c4d7dd }
.container{ width:min(100% - 50px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:840px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#006532; --on:#006532 }
.section--main .btn--fill{ background:#006532; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#006532; border-radius:0px;
  padding:0px 0px; min-height:61px;
  font-size:13px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:11px; --section-y:40px; --gap:8px; }
  .container{ width:calc(100% - 50px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#c4d7dd` は文字と小さな部品にだけ使う。
- 余白 64px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 5px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
