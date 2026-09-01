# JINS HOLDINGS ふうのデザイン

- 出典: https://jinsholdings.com/jp/ja
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: アイウェア・コーポレート

白地に `#6a594e` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 18px・行間 1.7、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #6a594e;
  --sub: #252625;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #6a594e;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "TazuganeGothicStdN", sans-serif;
  --font-en: "TazuganeGothicStdN", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.7;
  --container: 1344px;
  --read: 792px;
  --section-y: 52px;
  --gap: 16px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 47% |
| 主色 | `#c9d4de` | 6.7% |
| 副色 | `#252625` | 5.5% |
| 差し色 | `#959fa3` | 5.5% |
| 差し色 | `#6a594e` | 4.8% |
| 差し色 | `#c4c5c6` | 4% |

文字色は `#000000` / `#ffffff` / `#808080` / `#3860be`。

- 主色 `#6a594e` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 1px 1px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f2f2f2` | 23 | 0 | 0 | 15 |
| `#ffffff` | 22 | 34 | 0 | 11 |
| `#3e3a39` | 1 | 0 | 0 | 0 |
| `#1b1b1b` | 4 | 0 | 0 | 0 |
| `#d80024` | 1 | 0 | 1 | 1 |
| `#000000` | 0 | 133 | 0 | 0 |
| `#808080` | 0 | 23 | 0 | 0 |
| `#3860be` | 0 | 1 | 0 | 0 |

- `#6a594e` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#6a594e` |
| `#f2f2f2` | `#6a594e` |

```css
.section{ --on:#6a594e }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: TazuganeGothicStdN
- 欧文: TazuganeGothicStdN
- ウェイトは 750 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.5 |
| 見出し | 24px | 1.5 |
| 本文 | 18px | 1.7 |
| 補助 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 18px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 1344px／読ませる段は 792px
- セクションの上下余白: 52 / 40 / 120 / 288px（基本は 52px）
- 並びの間隔: 4 / 9 / 16 / 40px
- 角丸: 4px が基本。大きな面だけ 50px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1400 / 1024 / 768 / 550 / 390px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.7 | 16px |
| 見出し | 32px | 32px |
| セクションの上下余白 | 52px | —px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | —px |

- 本文は 18px → 16px。
- 文字サイズの段は 32 / 16px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 28px;
  font-size: 12px; font-weight: 350; letter-spacing: 0;
}
.btn-sub{
  background: #f2f2f2; color: #000000;
  border-radius: 4px; padding: 5px 10px; min-height: 28px;
  font-size: 12px; font-weight: 350; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border: 1px solid #e6e6e6;
  border-radius: 50px; padding: 14px 24px; min-height: 48px;
  font-size: 16px; font-weight: 350; letter-spacing: 1%;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 720px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 700px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 360px | — | 6カラム・画像あり | 中央 | — |
| 4 | 1420px | — | 5カラム・画像あり | 左 | 右（28:72） |
| 5 | 740px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 6 | 3660px | — | 2カラム・画像あり | 中央 | 全幅 |
| 7 | 560px | `#f2f2f2` | 4カラム・画像あり | 中央 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（9） / `#f2f2f2`（2）
- 見出しは左1／中央5。
- 2カラムの分け方は 28:72。半分ずつには割らない。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: transparent;
  border-radius: 16px;
  padding: 24px 24px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 0px 6px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #f2f2f2; color: #000000;
  border-radius: 4px; padding: 5px 10px; font-size: 12px;
}
```

## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 1 箇所ある（40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 29枚使っている。うち 10 枚は画面いっぱいに置く
- 比率は 1:1（13枚）、2:3（5枚）、21:9（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#6a594e }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:720px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent;
  border-radius:16px; padding:24px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:0px;
  padding:0px 0px; min-height:28px;
  font-size:12px; font-weight:350 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:16px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#6a594e` は文字と小さな部品にだけ使う。
- 余白 52px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.7 より詰めない。
- 中途半端な角丸（4px と 50px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
