# 採用サイト ふうのデザイン

- 出典: https://recruit.tential.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: 採用サイト／レスポンシブ／1カラム

#e7eff5 の地に `#82909b` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 20px・行間 2.6、セクション間 172px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #e7eff5;
  --main: #82909b;
  --sub: #99a2aa;
  --ink: #294c7a;
  --ink-rev: #ffffff;
  --on: #82909b;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Figtree", sans-serif;
  --fs-body: 20px;
  --lh-body: 2.6;
  --container: 1382px;
  --read: 760px;
  --section-y: 172px;
  --gap: 37px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#e7eff5` | 61.3% |
| 主色 | `#ffffff` | 7.1% |
| 副色 | `#99a2aa` | 5.8% |
| 差し色 | `#82909b` | 5.7% |
| 差し色 | `#5e7583` | 5.6% |
| 差し色 | `#c8cfd6` | 5.6% |

文字色は `#294c7a` / `#ffffff`。

- 主色 `#82909b` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e7eff5` | 1 | 0 | 0 | 0 |
| `#ffffff` | 4 | 30 | 2 | 0 |
| `#294c7a` | 3 | 62 | 2 | 1 |
| `#000000` | 0 | 0 | 3 | 0 |

- `#82909b` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#82909b` |
| `#e7eff5`（地） | `#82909b` |

```css
.section{ --on:#82909b }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Hiragino Kaku Gothic（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Figtree
- ウェイトは 500 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 64px | 1.13 |
| 見出し | 34px | — |
| 本文 | 20px | 2.6 |
| 補助 | 16px | — |
| 注記 | 15px | — |
| 注記 | 13px | — |

- 本文は 20px・行間 2.6。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1382px／読ませる段は 760px
- セクションの上下余白: 172 / 72 / 88 / 92px（基本は 172px）
- 並びの間隔: 15 / 19 / 37 / 40px
- 角丸: 0px が基本。大きな面だけ 4px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1299 / 1024 / 767 / 600 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 20px / 行間 2.6 | 13px |
| 見出し | 64px | 13px |
| セクションの上下余白 | 172px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 37px | 11px |

- 本文は 20px → 13px、セクション余白は 172px → 32px（PCの19%）。
- 文字サイズの段は 32 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #294c7a;
  border: 1px;
  border-radius: 100px; padding: 9px 10px; min-height: 70px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 100px; padding: 9px 10px; min-height: 70px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.8px;
}
.btn-sub{
  background: #294c7a; color: #ffffff;
  border: 1px solid #294c7a;
  border-radius: 100px; padding: 10px 27px; min-height: 45px;
  font-size: 15px; font-weight: 500; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 800px | — | 1カラム・画像あり | 中央 | — |
| 3 | 1340px | — | 1カラム・文字だけ | 中央 | — |
| 4 | 1700px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1160px | `#e7eff5` | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 900px | — | 1カラム・画像あり | 中央 | 全幅 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2） / `#e7eff5`（1）
- 見出しは左1／中央4。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 6 箇所ある（48px×4、64px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 30枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 3:2（16枚）、4:3（10枚）、3:4（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#82909b }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#294c7a; border-radius:100px;
  padding:9px 10px; min-height:70px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:13px; --section-y:32px; --gap:11px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#e7eff5` のまま。主色 `#82909b` は文字と小さな部品にだけ使う。
- 余白 172px と行間 2.6 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2.6 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 4px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
