# 溝田建築設計株式会社 ふうのデザイン

- 出典: https://mizota-ks.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／建築･住宅･不動産･空間設計･エクステリア／スタイリッシュ

#faf3e9 の地に `#51666c` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 2.2、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #faf3e9;
  --main: #51666c;
  --sub: #879397;
  --ink: #362e26;
  --ink-rev: #ffffff;
  --on: #51666c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "FP-こぶりなゴシック StdN W3", sans-serif;
  --font-en: "YakuHanMP", sans-serif;
  --fs-body: 16px;
  --lh-body: 2.2;
  --container: 600px;
  --read: 872px;
  --section-y: 40px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#faf3e9` | 52.6% |
| 主色 | `#544b42` | 27.5% |
| 副色 | `#879397` | 5.3% |
| 差し色 | `#6e6f6c` | 5.1% |
| 差し色 | `#51666c` | 4.1% |
| 差し色 | `#292321` | 2.8% |

文字色は `#362e26` / `#ffffff` / `#645a50` / `#83776a`。

- 主色 `#51666c` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#544b42` | 1 | 0 | 0 | 0 |
| `#fcf5eb` | 4 | 0 | 8 | 0 |
| `#fffcf7` | 8 | 24 | 6 | 0 |
| `#bd7833` | 1 | 0 | 0 | 1 |
| `#362e26` | 0 | 41 | 0 | 0 |
| `#645a50` | 0 | 24 | 0 | 0 |
| `#83776a` | 0 | 7 | 0 | 0 |

- `#51666c` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fffcf7` | `#51666c` |
| `#fcf5eb` | `#51666c` |
| `#544b42` | `#ffffff` |

```css
.section{ --on:#51666c }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#f5efe6`。ただしその囲みは `#fcf5eb` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: FP-こぶりなゴシック StdN W3
- 欧文: YakuHanMP
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 44px | 1 |
| 見出し | 36px | 1 |
| 小見出し | 20px | — |
| 本文 | 16px | 2.2 |
| 補助 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 2.2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 600px／読ませる段は 872px
- セクションの上下余白: 40 / 100 / 60 / 120px（基本は 40px）
- 並びの間隔: 4 / 6 / 10 / 12px
- 角丸: 0px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1240 / 1024 / 880 / 767 / 560px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2.2 | 14px / 行間 2.3 |
| 見出し | 44px | 28px / 行間 1 |
| セクションの上下余白 | 40px | 60px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 10px | 8px |

- 本文は 16px → 14px、セクション余白は 40px → 60px（PCの150%）。
- 文字サイズの段は 15 / 14 / 13 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #645a50;
  border: 1px solid #ded5cb;
  border-radius: 999px; padding: 7px 10px; min-height: 28px;
  font-size: 12px; font-weight: 300; letter-spacing: 0.36px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 999px; padding: 0px 0px; min-height: 42px;
  font-size: 13px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #bd7833; color: #ffffff;
  border-radius: 999px; padding: 16px 22px; min-height: 65px;
  font-size: 18px; font-weight: 300; letter-spacing: 0.54px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 1180px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 820px | `#fcf5eb` | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 920px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 5 | 620px | — | 1カラム・画像あり | — | 全面 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fffcf7`（8） / `#fcf5eb`（3） / `#544b42`（1）
- 見出しは左2／中央1。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #fffcf7;
  border: 1px solid var(--on);   /* 実測は #f5efe6。面によって入れ替える */
  border-radius: 3px;
  padding: 8px 8px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #645a50;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 7px 10px; font-size: 12px;
}
```

## 画像

- 28枚使っている。うち 3 枚は画面いっぱいに置く
- 比率は 4:3（9枚）、1:1（8枚）、3:4（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#51666c }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#fffcf7; border:1px solid var(--on);
  border-radius:3px; padding:8px 8px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#645a50; border-radius:999px;
  padding:7px 10px; min-height:28px;
  font-size:12px; font-weight:300 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:880px){
  :root{ --fs-body:14px; --section-y:60px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#faf3e9` のまま。主色 `#51666c` は文字と小さな部品にだけ使う。
- 余白 40px と行間 2.2 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 3px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 3px 以外）を混ぜない。
