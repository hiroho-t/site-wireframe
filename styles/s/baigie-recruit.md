# 採用情報 ふうのデザイン

- 出典: https://recruit.baigie.me/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: 採用サイト／デザイン･イラスト･写真･映像･制作／企画･開発･マーケティング･コンサルティング

白地に `#89826e` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 13px・行間 1、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #89826e;
  --sub: #242422;
  --ink: #242422;
  --ink-rev: #ffffff;
  --on: #89826e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "ryo-gothic-plusn", sans-serif;
  --fs-body: 13px;
  --lh-body: 1;
  --container: 1104px;
  --read: 612px;
  --section-y: 32px;
  --gap: 16px;
  --radius: 8px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 53.7% |
| 主色 | `#eeeeec` | 21.7% |
| 副色 | `#242422` | 6.3% |
| 差し色 | `#89826e` | 3.1% |
| 差し色 | `#5a5f53` | 2.9% |
| 差し色 | `#bfbeaf` | 2.9% |

文字色は `#242422` / `#ffffff` / `#525252` / `#434646`。

- 主色 `#89826e` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 0px 0px 8px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f0f0f0` | 8 | 0 | 7 | 4 |
| `#ffffff` | 8 | 9 | 0 | 1 |
| `#242422` | 6 | 43 | 0 | 2 |
| `#fefa32` | 2 | 0 | 0 | 1 |
| `#cccccc` | 0 | 0 | 2 | 0 |
| `#525252` | 0 | 12 | 0 | 0 |
| `#434646` | 0 | 2 | 0 | 0 |

- `#89826e` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#89826e` |
| `#242422` | `#ffffff` |
| `#f0f0f0` | `#89826e` |
| `#eeeeec` | `#89826e` |

```css
.section{ --on:#89826e }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#eeeeec` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: ryo-gothic-plusn
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 56px | 1.4 |
| 見出し | 19px | 1.5 |
| 小見出し | 16px | — |
| リード | 15px | — |
| リード | 14px | — |
| 本文 | 13px | 1 |
| 補助 | 12px | — |

- 本文は 13px・行間 1。

## レイアウト

- コンテンツ幅: 最大 1104px／読ませる段は 612px
- セクションの上下余白: 32px（基本は 32px）
- 並びの間隔: 8 / 10 / 16 / 24px
- 角丸: 8px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 980 / 540 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 13px / 行間 1 | 14px / 行間 1.7 |
| 見出し | 56px | 32px / 行間 1.4 |
| セクションの上下余白 | 32px | 28px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | 16px |

- 本文は 13px → 14px、セクション余白は 32px → 28px（PCの88%）。
- 文字サイズの段は 16 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: #f7f7f6; color: #242422;
  border: 1px solid #eeeeec;
  border-radius: 8px; padding: 0px 0px; min-height: 66px;
  font-size: 15px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #fefa32; color: #242422;
  border-radius: 6px; padding: 9px 20px; min-height: 36px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.7px;
}
.btn-sub{
  background: transparent; color: #242422;
  border: 1px solid #cdccd2;
  border-radius: 6px; padding: 8px 20px; min-height: 36px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.7px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 3080px | — | ヒーロー（画像） | 左 | 見出しの下 |

- 全1セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（5） / `#242422`（2） / `#f0f0f0`（1） / `#eeeeec`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #242422;
  border-radius: 8px;
  padding: 32px 32px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #333333;
  border: 1px solid currentColor;
  border-radius: 6px; padding: 8px 20px; font-size: 16px;
}
```

## 画像

- 20枚使っている
- 比率は 1:1（20枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#89826e }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:3080px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#242422;
  border-radius:8px; padding:32px 32px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f7f7f6; color:#242422; border-radius:8px;
  padding:0px 0px; min-height:66px;
  font-size:15px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:540px){
  :root{ --fs-body:14px; --section-y:28px; --gap:16px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#89826e` は文字と小さな部品にだけ使う。
- 余白 32px と行間 1 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 8px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。
- 中途半端な角丸（8px と 0px 以外）を混ぜない。
