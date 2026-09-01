# 【公式】名美興業株式会社 ふうのデザイン

- 出典: https://meibi.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／BtoBのサイト／ビルメンテナンス･清掃･警備

#f5efe9 の地に `#fbefd6` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 18px・行間 2、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5efe9;
  --main: #fbefd6;
  --ink: #14141e;
  --ink-rev: #ffffff;
  --on: #fbefd6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Noto Serif JP", sans-serif;
  --fs-body: 18px;
  --lh-body: 2;
  --container: 1320px;
  --read: 840px;
  --section-y: 120px;
  --gap: 60px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5efe9` | 91.9% |
| 主色 | `#e3ddd7` | 1.8% |

文字色は `#14141e` / `#ffffff`。

- 主色 `#fbefd6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5efe9` | 15 | 0 | 0 | 0 |
| `#e6f3f5` | 2 | 0 | 0 | 0 |
| `#e8e8e7` | 3 | 0 | 0 | 0 |
| `#dae0c9` | 1 | 0 | 0 | 0 |
| `#fbefd6` | 1 | 0 | 0 | 0 |
| `#14141e` | 6 | 88 | 26 | 5 |
| `#ffffff` | 0 | 5 | 0 | 0 |

- `#fbefd6` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f5efe9`（地） | `#fbefd6` |
| `#e6f3f5` | `#fbefd6` |
| `#e8e8e7` | `#fbefd6` |
| `#fcede3` | `#fbefd6` |

```css
.section{ --on:#fbefd6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Noto Serif JP
- ウェイトは 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.75 |
| 見出し | 24px | — |
| 小見出し | 20px | 1.2 |
| 本文 | 18px | 1.5 |
| 補助 | 16px | — |
| 注記 | 14px | — |

- 本文は 18px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1320px／読ませる段は 840px
- セクションの上下余白: 120 / 160 / 56 / 60px（基本は 120px）
- 並びの間隔: 10 / 35 / 60 / 130px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1101 / 1100 / 768 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 2 | 16px / 行間 2 |
| セクションの上下余白 | 120px | 32px |
| 左右の余白 | — | 41px |
| 並びの間隔 | 60px | 10px |

- 本文は 18px → 16px、セクション余白は 120px → 32px（PCの27%）。
- 文字サイズの段は 24 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #14141e;
  border-radius: 0px; padding: 0px 0px; min-height: 80px;
  font-size: 18px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 16px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #14141e; color: #ffffff;
  border: 1px solid #14141e;
  border-radius: 9999px; padding: 10px 23px; min-height: 46px;
  font-size: 16px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 12960px | — | ヒーロー（画像） | 右 | 見出しの下 |

- 全1セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f5efe9`（2） / `#e6f3f5`（1） / `#e8e8e7`（1） / `#fcede3`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #14141e; color: #ffffff;
  border-radius: 999px; padding: 2px 32px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 8 箇所ある（80px×8）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 18枚使っている
- 比率は 3:2（12枚）、3:4（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#fbefd6 }
.container{ width:min(100% - 82px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:12960px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#14141e; border-radius:0px;
  padding:0px 0px; min-height:80px;
  font-size:18px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; --section-y:32px; --gap:10px; }
  .container{ width:calc(100% - 82px) }
}
```

## 守ること

やること

- 地は `#f5efe9` のまま。主色 `#fbefd6` は文字と小さな部品にだけ使う。
- 余白 120px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
