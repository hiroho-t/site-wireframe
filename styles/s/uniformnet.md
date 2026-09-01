# ユニフォームネット ふうのデザイン

- 出典: https://www.uniform-net.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／BtoBのサイト

#f0f2f4 の地に `#ff7f50` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.15、セクション間 92px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f0f2f4;
  --main: #ff7f50;
  --sub: #f03c2d;
  --ink: #111111;
  --ink-rev: #505050;
  --on: #ff7f50;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.15;
  --container: 1112px;
  --read: 1172px;
  --section-y: 92px;
  --gap: 30px;
  --radius: 30px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f0f2f4` | 87.5% |
| 主色 | `#ff7f50` | 3.9% |
| 副色 | `#f03c2d` | 2% |

文字色は `#111111` / `#505050` / `#ffffff` / `#0069c3`。

- 主色 `#ff7f50` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 51 | 13 | 0 | 40 |
| `#0069c3` | 1 | 4 | 0 | 0 |
| `#111111` | 16 | 105 | 2 | 10 |
| `#505050` | 0 | 13 | 0 | 0 |

- `#ff7f50` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#ff7f50` |
| `#0069c3` | `#505050` |

```css
.section{ --on:#ff7f50 }                     /* 地の面 */
.section--main{ background:var(--main); color:#505050; --on:#505050 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#505050 }
.section--main .btn--fill{ background:#505050; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e8ebed`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 54px | 1.35 |
| 見出し | 42px | 1.2 |
| 小見出し | 24px | 1.5 |
| リード | 18px | — |
| リード | 15px | — |
| 本文 | 14px | 1.15 |
| 補助 | 12px | — |

- 本文は 14px・行間 1.15。

## レイアウト

- コンテンツ幅: 最大 1112px／読ませる段は 1172px
- セクションの上下余白: 92 / 180 / 44 / 52px（基本は 92px）
- 並びの間隔: 6 / 24 / 30 / 45px
- 角丸: 30px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1060 / 769 / 768 / 767 / 567px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.15 | 14px / 行間 1.15 |
| 見出し | 54px | 30px / 行間 1.35 |
| セクションの上下余白 | 92px | 24px |
| 左右の余白 | — | 60px |
| 並びの間隔 | 30px | 18px |

- 本文は 14px → 14px、セクション余白は 92px → 24px（PCの26%）。
- 文字サイズの段は 24 / 18 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #111111;
  border: 1px solid #e8ebed;
  border-radius: 30px; padding: 11px 15px; min-height: 35px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.36px;
}
.btn-sub{
  background: #111111; color: #ffffff;
  border-radius: 90px; padding: 21px 53px; min-height: 60px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #505050;
  border-radius: 0px; padding: 0px 0px; min-height: 30px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.42px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 820px | — | ヒーロー（画像） | — | 全面 |
| 2 | 820px | — | 1カラム・画像あり | — | 全面 |
| 3 | 820px | — | 1カラム・画像あり | — | 全面 |
| 4 | 820px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 820px | — | 1カラム・画像あり | — | 全面 |
| 6 | 820px | — | 1カラム・画像あり | — | 全面 |
| 7 | 820px | — | 1カラム・画像あり | — | 全面 |
| 8 | 820px | — | 1カラム・画像あり | — | 全面 |
| 9 | 820px | — | 1カラム・画像あり | — | 全面 |
| 10 | 820px | — | 1カラム・画像あり | — | 全幅 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（6） / `#0069c3`（1）


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #e8ebed。面によって入れ替える */
  border-radius: 30px;
  padding: 16px 20px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #111111;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 11px 15px; font-size: 12px;
}
```

## 丸いもの

角丸は 30px だが、**完全な円は別扱い**で 10 箇所ある（24px×4、40px×4、64px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 105枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 16:9（33枚）、3:4（32枚）、1:1（20枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ff7f50 }
.container{ width:min(100% - 120px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:820px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#505050; --on:#505050 }
.section--main .btn--fill{ background:#505050; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:30px; padding:16px 20px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#111111; border-radius:30px;
  padding:11px 15px; min-height:35px;
  font-size:12px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:24px; --gap:18px; }
  .container{ width:calc(100% - 120px) }
}
```

## 守ること

やること

- 地は `#f0f2f4` のまま。主色 `#ff7f50` は文字と小さな部品にだけ使う。
- 余白 92px と行間 1.15 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 30px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.15 より詰めない。
- 中途半端な角丸（30px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
