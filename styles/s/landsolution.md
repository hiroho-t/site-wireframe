# ランドソリューション株式会社 ふうのデザイン

- 出典: https://www.landsolution.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／BtoBのサイト／企画･開発･マーケティング･コンサルティング

#f5f8f3 の地に `#508e64` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1、セクション間 60px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f8f3;
  --main: #508e64;
  --sub: #508e64;
  --ink: #2f4243;
  --ink-rev: #ffffff;
  --on: #508e64;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Crimson Text", sans-serif;
  --fs-body: 16px;
  --lh-body: 1;
  --container: 1200px;
  --read: 780px;
  --section-y: 60px;
  --gap: 20px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f8f3` | 66.2% |
| 主色 | `#e6e6de` | 19.4% |
| 副色 | `#508e64` | 4.6% |
| 差し色 | `#c2e9ea` | 4.1% |
| 差し色 | `#abdbc7` | 3.2% |
| 差し色 | `#91b599` | 2.5% |

文字色は `#2f4243` / `#ffffff` / `#3b673d`。

- 主色 `#508e64` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#3b673d` | 8 | 1 | 1 | 1 |
| `#ffffff` | 1 | 13 | 1 | 0 |
| `#2f4243` | 0 | 91 | 0 | 0 |

- `#508e64` は

## 文字

- 和文: Noto Sans JP
- 欧文: Crimson Text
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.14 |
| 見出し | 40px | 1 |
| 小見出し | 24px | — |
| リード | 20px | 1.6 |
| リード | 18px | — |
| 本文 | 16px | 1 |
| 補助 | 14px | — |

- 本文は 16px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 780px
- セクションの上下余白: 60 / 80 / 120 / 92px（基本は 60px）
- 並びの間隔: 13 / 16 / 20 / 60px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1248 / 1100 / 940 / 767 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1 | 16px / 行間 1 |
| 見出し | 48px | 34px / 行間 1.14 |
| セクションの上下余白 | 60px | 40px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 20px | 20px |

- 本文は 16px → 16px、セクション余白は 60px → 40px（PCの67%）。
- 文字サイズの段は 18 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #2f4243;
  border: 1px solid #000000;
  border-radius: 1440px; padding: 0px 18px; min-height: 56px;
  font-size: 18px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #3b673d; color: #ffffff;
  border: 1px solid #3b673d;
  border-radius: 1440px; padding: 0px 0px; min-height: 43px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 1440px; padding: 0px 18px; min-height: 56px;
  font-size: 18px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1120px | — | ヒーロー | 左 | — |
| 2 | 440px | — | 1カラム・画像あり | 右 | 左（20:80） |
| 3 | 1960px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 4 | 700px | — | 1カラム・画像あり | 中央 | 左（10:90） |
| 5 | 760px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 6 | 240px | — | 2カラム・画像あり | — | 全幅 |
| 7 | 1040px | — | 6カラム | 中央 | — |
| 8 | 840px | — | 1カラム・画像あり | 左 | 右（13:87） |
| 9 | 1040px | — | 1カラム・文字だけ | 右 | — |
| 10 | 480px | — | 3カラム・画像あり | 左 | — |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: 
- 見出しは左3／中央4。
- 2カラムの分け方は 20:80 / 10:90 / 13:87。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 8 箇所ある（24px×8）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 18枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 1:1（9枚）、3:2（3枚）、16:9（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#508e64 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1120px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#2f4243; border-radius:1440px;
  padding:0px 18px; min-height:56px;
  font-size:18px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:16px; --section-y:40px; --gap:20px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#f5f8f3` のまま。主色 `#508e64` は文字と小さな部品にだけ使う。
- 余白 60px と行間 1 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
