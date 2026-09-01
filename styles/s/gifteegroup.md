# ギフティグループ株式会社 ふうのデザイン

- 出典: https://giftee-group.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / モノトーン
- 業種: コーポレートサイト／Web･IT･XR･デジタル･テクノロジー／自社プロダクト･サービス運営

白地に `#3f3f3f` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.75、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #3f3f3f;
  --ink: #232323;
  --ink-rev: #6c6c6c;
  --on: #3f3f3f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Geist", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.75;
  --container: 960px;
  --read: 660px;
  --section-y: 120px;
  --gap: 40px;
  --radius: 5px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 86.8% |
| 主色 | `#3f3f3f` | 8.2% |

文字色は `#232323` / `#6c6c6c` / `#ffffff`。

- 主色 `#3f3f3f` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgb(221, 221, 221) 0px 0px 0px 1px inset`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#3f3f3f` | 4 | 0 | 0 | 1 |
| `#f6f6f6` | 20 | 0 | 0 | 0 |
| `#ffffff` | 11 | 12 | 0 | 1 |
| `#232323` | 0 | 46 | 0 | 0 |
| `#6c6c6c` | 0 | 20 | 0 | 0 |

- `#3f3f3f` は面として4箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#f6f6f6` | `#3f3f3f` |
| `#3f3f3f`（主色） | `#6c6c6c` |

```css
.section{ --on:#3f3f3f }                     /* 地の面 */
.section--main{ background:var(--main); color:#6c6c6c; --on:#6c6c6c }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#6c6c6c }
.section--main .btn--fill{ background:#6c6c6c; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Geist
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.5 |
| 見出し | 20px | — |
| 本文 | 16px | 1.75 |
| 補助 | 14px | — |
| 注記 | 12px | — |
| 注記 | 11px | — |

- 本文は 16px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 960px／読ませる段は 660px
- セクションの上下余白: 120 / 80 / 92 / 160px（基本は 120px）
- 並びの間隔: 10 / 20 / 40 / 60px
- 角丸: 5px が基本。大きな面だけ 10px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.75 | 15px / 行間 1.75 |
| 見出し | 32px | 22px / 行間 1.5 |
| セクションの上下余白 | 120px | 80px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 40px | 20px |

- 本文は 16px → 15px、セクション余白は 120px → 80px（PCの67%）。
- 文字サイズの段は 16 / 15 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: #3f3f3f; color: #ffffff;
  border-radius: 10px; padding: 15px 20px; min-height: 58px;
  font-size: 16px; font-weight: 600; letter-spacing: 0.64px;
}
.btn-sub{
  background: #ffffff; color: #232323;
  border-radius: 10px; padding: 15px 20px; min-height: 58px;
  font-size: 16px; font-weight: 600; letter-spacing: 0.64px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 720px | — | ヒーロー（画像） | — | 全面 |
| 2 | 480px | — | 2カラム・画像あり | 中央 | — |
| 3 | 680px | — | 5カラム・画像あり | 中央 | — |
| 4 | 660px | — | 1カラム・画像あり | 左 | 右（67:33） |
| 5 | 740px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 660px | — | 1カラム・画像あり | 左 | 右（67:33） |
| 7 | 560px | — | 2カラム・画像あり | 右 | 左（46:54） |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#f6f6f6`（4） / `#3f3f3f`（2）
- 見出しは左3／中央2。
- 2カラムの分け方は 67:33 / 67:33 / 46:54。半分ずつには割らない。


## 部品

囲み（20箇所で同じ形）

```css
.card{
  background: #f6f6f6;
  border-radius: 5px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #eeeeee; color: #6c6c6c;
  border-radius: 999px; padding: 1px 10px; font-size: 11px;
}
```

## 画像

- 50枚使っている
- 比率は 3:2（46枚）、16:9（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#3f3f3f }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:720px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#6c6c6c; --on:#6c6c6c }
.section--main .btn--fill{ background:#6c6c6c; color:var(--main) }
.card{ background:#f6f6f6;
  border-radius:5px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#3f3f3f; color:#ffffff; border-radius:10px;
  padding:15px 20px; min-height:58px;
  font-size:16px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:80px; --gap:20px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#3f3f3f` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 5px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。
- 中途半端な角丸（5px と 10px 以外）を混ぜない。
