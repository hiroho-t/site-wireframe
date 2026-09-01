# 株式会社JQ ふうのデザイン

- 出典: https://www.j-q.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／企画･開発･マーケティング･コンサルティング／オーソドックス

#edf0ed の地に `#00afaf` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.75、セクション間 96px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #edf0ed;
  --main: #00afaf;
  --sub: #ffffff;
  --ink: #ffffff;
  --ink-rev: #2b2d2b;
  --on: #00afaf;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "noto-sans-cjk-jp", sans-serif;
  --font-en: "noto-sans-cjk-jp", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.75;
  --container: 1200px;
  --read: 576px;
  --section-y: 96px;
  --gap: 16px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#edf0ed` | 64% |
| 主色 | `#434643` | 16.5% |
| 副色 | `#ffffff` | 9.2% |
| 差し色 | `#d1d4d1` | 2.1% |
| 差し色 | `#8c8783` | 2% |
| 差し色 | `#a6a6a6` | 2% |

文字色は `#ffffff` / `#2b2d2b` / `#d5d8d5` / `#5c5f5c`。

- 主色 `#00afaf` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 60 | 72 | 0 | 0 |
| `#434643` | 3 | 0 | 0 | 0 |
| `#00afaf` | 7 | 0 | 0 | 5 |
| `#008282` | 5 | 0 | 0 | 0 |
| `#edf0ed` | 1 | 0 | 0 | 1 |
| `#2b2d2b` | 0 | 60 | 0 | 0 |
| `#d5d8d5` | 0 | 10 | 3 | 0 |
| `#5c5f5c` | 0 | 39 | 0 | 0 |

- `#00afaf` は面として7箇所、文字として0箇所。塗りが主役。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#00afaf` |
| `#434643` | `#2b2d2b` |

```css
.section{ --on:#00afaf }                     /* 地の面 */
.section--main{ background:var(--main); color:#2b2d2b; --on:#2b2d2b }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#2b2d2b }
.section--main .btn--fill{ background:#2b2d2b; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#edf0ed` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: noto-sans-cjk-jp
- 欧文: noto-sans-cjk-jp
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 160px | — |
| 見出し | 40px | 1.5 |
| 小見出し | 18px | — |
| リード | 16px | 1.2 |
| 本文 | 14px | 1.5 |
| 補助 | 12px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1.75。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 576px
- セクションの上下余白: 96 / 64 / 80 / 120px（基本は 96px）
- 並びの間隔: 2 / 8 / 16 / 24px
- 角丸: 4px が基本。大きな面だけ 2px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1200 / 1024 / 768 / 640px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.75 | 12px / 行間 1.75 |
| 見出し | 160px | 26px / 行間 1.5 |
| セクションの上下余白 | 96px | 80px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | 24px |

- 本文は 14px → 12px、セクション余白は 96px → 80px（PCの83%）。
- 文字サイズの段は 100 / 16 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: #00afaf; color: #ffffff;
  border-radius: 4px; padding: 8px 8px; min-height: 56px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #edf0ed; color: #2b2d2b;
  border-radius: 4px; padding: 14px 16px; min-height: 42px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 940px | — | ヒーロー（画像） | 左 | 左（40:60） |
| 2 | 660px | — | 2カラム・画像あり | 中央 | — |
| 3 | 740px | — | 3カラム・画像あり | 中央 | — |
| 4 | 860px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 480px | — | 6カラム・画像あり | 左 | 右（12:88） |
| 6 | 900px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 7 | 540px | — | 6カラム・画像あり | 左 | 左（39:61） |
| 8 | 1380px | — | 6カラム・画像あり | 中央 | 見出しの下 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（5） / `#434643`（3）
- 見出しは左3／中央5。
- 2カラムの分け方は 40:60 / 12:88 / 39:61。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 4px;
  padding: 32px 32px;
}
```

ラベル・タグ

```css
.chip{
  background: #434643; color: #ffffff;
  border-radius: 999px; padding: 0px 8px; font-size: 12px;
}
```

## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 4 箇所ある（32px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 99枚使っている
- 比率は 16:9（88枚）、3:2（9枚）、3:4（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#00afaf }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:940px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#2b2d2b; --on:#2b2d2b }
.section--main .btn--fill{ background:#2b2d2b; color:var(--main) }
.card{ background:#ffffff;
  border-radius:4px; padding:32px 32px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#00afaf; color:#ffffff; border-radius:4px;
  padding:8px 8px; min-height:56px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:80px; --gap:24px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#edf0ed` のまま。主色 `#00afaf` は文字と小さな部品にだけ使う。
- 余白 96px と行間 1.75 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 4px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.75 より詰めない。
- 中途半端な角丸（4px と 2px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
