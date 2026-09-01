# ヒラギノフォント ふうのデザイン

- 出典: https://hiragino.screen.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／BtoBのサイト／デザイン･イラスト･写真･映像･制作

#fcfcfc の地に `#113da4` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.5、セクション間 48px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fcfcfc;
  --main: #113da4;
  --sub: #94989d;
  --ink: #292929;
  --ink-rev: #525252;
  --on: #113da4;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "ui-sans-serif", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.5;
  --container: 1248px;
  --read: 612px;
  --section-y: 48px;
  --gap: 16px;
  --radius: 8px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fcfcfc` | 89.4% |
| 主色 | `#d9d9d9` | 3.2% |
| 副色 | `#94989d` | 1.8% |
| 差し色 | `#b1b6b6` | 1.5% |
| 差し色 | `#cccbc7` | 1.5% |

文字色は `#292929` / `#525252` / `#a3a3a3`。

- 主色 `#113da4` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 59 | 0 | 4 | 14 |
| `#f5f5f5` | 1 | 0 | 0 | 0 |
| `#113da4` | 1 | 0 | 0 | 0 |
| `#eededd` | 1 | 0 | 0 | 0 |
| `#f90102` | 1 | 0 | 0 | 0 |
| `#292929` | 0 | 117 | 0 | 0 |
| `#525252` | 0 | 31 | 0 | 0 |
| `#a3a3a3` | 0 | 1 | 0 | 0 |

- `#113da4` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#113da4` |
| `#f5f5f5` | `#113da4` |

```css
.section{ --on:#113da4 }                     /* 地の面 */
.section--main{ background:var(--main); color:#525252; --on:#525252 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#525252 }
.section--main .btn--fill{ background:#525252; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#d6d6d6`。ただしその囲みは `#fcfcfc` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: ヒラギノUD角ゴ StdN W3（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: ui-sans-serif
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.33 |
| 見出し | 36px | 1.39 |
| 小見出し | 24px | 1.5 |
| リード | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 1.5 |
| 補助 | 14px | — |

- 本文は 16px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1248px／読ませる段は 612px
- セクションの上下余白: 48 / 96px（基本は 48px）
- 並びの間隔: 4 / 6 / 16 / 24px
- 角丸: 8px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1680 / 1440 / 1280 / 960 / 420px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.5 | 14px / 行間 1.79 |
| 見出し | 48px | 30px / 行間 1.43 |
| セクションの上下余白 | 48px | 24px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | 16px |

- 本文は 16px → 14px、セクション余白は 48px → 24px（PCの50%）。
- 文字サイズの段は 24 / 18 / 16 / 14 / 12px。

## ボタン

```css
.btn{
  background: #ffffff; color: #292929;
  border: 1px solid #d6d6d6;
  border-radius: 8px; padding: 0px 12px; min-height: 40px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #292929;
  border: 1px solid #d6d6d6;
  border-radius: 14px; padding: 20px 20px; min-height: 90px;
  font-size: 18px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #292929;
  border-radius: 0px; padding: 0px 0px; min-height: 40px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 300px | — | ヒーロー（画像） | 中央 | — |
| 2 | 560px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 3 | 880px | — | 3カラム・画像あり | 左 | — |
| 4 | 620px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 5 | 620px | — | 3カラム・画像あり | 左 | — |
| 6 | 200px | — | 4カラム・画像あり | 左 | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（6） / `#f5f5f5`（1）
- 見出しは左3／中央3。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #d6d6d6。面によって入れ替える */
  border-radius: 16px;
  padding: 24px 24px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #292929;
  border: 1px solid currentColor;
  border-radius: 8px; padding: 0px 12px; font-size: 14px;
}
```

## 画像

- 4枚使っている
- 比率は 16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#113da4 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:300px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#525252; --on:#525252 }
.section--main .btn--fill{ background:#525252; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:16px; padding:24px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#292929; border-radius:8px;
  padding:0px 12px; min-height:40px;
  font-size:14px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:420px){
  :root{ --fs-body:14px; --section-y:24px; --gap:16px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#fcfcfc` のまま。主色 `#113da4` は文字と小さな部品にだけ使う。
- 余白 48px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（8px と 10px 以外）を混ぜない。
