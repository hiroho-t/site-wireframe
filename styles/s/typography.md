# NPO法人 日本タイポグラフィ協会 ふうのデザイン

- 出典: https://typography.or.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: コーポレートサイト／デザイン･イラスト･写真･映像･制作／地域･地方創生･政治･行政･自治体･NPO

#fafafa の地に `#fafafa` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 11px・行間 1、セクション間 76px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fafafa;
  --main: #fafafa;
  --sub: #e3e3e3;
  --ink: #1f1a17;
  --ink-rev: #000000;
  --on: #fafafa;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Inter", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 11px;
  --lh-body: 1;
  --container: 1260px;
  --read: 616px;
  --section-y: 76px;
  --gap: 9px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fafafa` | 82.4% |
| 主色 | `#bbbbba` | 5.6% |
| 副色 | `#e3e3e3` | 4.3% |
| 差し色 | `#a1a09f` | 3.6% |
| 差し色 | `#d0d0d0` | 3.4% |

文字色は `#1f1a17` / `#000000` / `#666666` / `#ffffff`。

- 主色 `#fafafa` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fafafa` | 1 | 7 | 0 | 1 |
| `#666666` | 0 | 39 | 0 | 0 |
| `#1f1a17` | 0 | 92 | 0 | 0 |
| `#000000` | 0 | 89 | 3 | 0 |

- `#fafafa` は文字色として7箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の82%を占める。ボタンの地にも使う。

## 文字

- 和文: Inter
- 欧文: Inter
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 44px | — |
| 見出し | 22px | — |
| 小見出し | 16px | 1.4 |
| リード | 14px | — |
| リード | 13px | — |
| リード | 12px | — |
| 本文 | 11px | 1 |

- 本文は 11px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1260px／読ませる段は 616px
- セクションの上下余白: 76 / 200 / 152px（基本は 76px）
- 並びの間隔: 5 / 8 / 9 / 16px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1199 / 960 / 959 / 640 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 11px / 行間 1 | 22px |
| 見出し | 44px | 20px |
| セクションの上下余白 | 76px | 76px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 9px | 9px |

- 本文は 11px → 22px、セクション余白は 76px → 76px（PCの100%）。
- 文字サイズの段は 22 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 44px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #fafafa; color: #000000;
  border: 1px solid #000000;
  border-radius: 9999px; padding: 5px 5px; min-height: 44px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 800px | — | ヒーロー（画像） | 右 | 見出しの下 |
| 2 | 1120px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 3 | 860px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 740px | — | 1カラム・画像あり | 左 | — |

- 全4セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: 
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: transparent; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 5px 5px; font-size: 13px;
}
```

## 画像

- 9枚使っている
- 比率は 4:3（8枚）、16:9（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fafafa }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:800px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:0px;
  padding:0px 0px; min-height:44px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:640px){
  :root{ --fs-body:22px; --section-y:76px; --gap:9px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#fafafa` のまま。主色 `#fafafa` は文字と小さな部品にだけ使う。
- 余白 76px と行間 1 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。
