# 長崎県大村市の皮膚科・小児皮膚科・美容皮膚科【上田皮ふ科】 ふうのデザイン

- 出典: https://uedahifuka.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／角丸

#f2f3f0 の地に `#eee7ca` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f2f3f0;
  --main: #eee7ca;
  --sub: #c7cfc4;
  --ink: #4f5451;
  --ink-rev: #006f38;
  --on: #eee7ca;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "TazuganeGothicStdN-Book", sans-serif;
  --font-en: "TazuganeGothicStdN-Book", sans-serif;
  --fs-body: 14px;
  --lh-body: 1;
  --container: 952px;
  --read: 852px;
  --section-y: 40px;
  --gap: 27px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f2f3f0` | 79.5% |
| 主色 | `#eee7ca` | 6.8% |
| 副色 | `#c7cfc4` | 2.7% |
| 差し色 | `#48775b` | 2.1% |
| 差し色 | `#cbae91` | 2.1% |
| 差し色 | `#deeae1` | 1.9% |

文字色は `#4f5451` / `#006f38` / `#ffffff` / `#000000`。

- 主色 `#eee7ca` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.3) 0px 1px 4px -1px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 12 | 44 | 1 | 0 |
| `#e5e3df` | 1 | 0 | 0 | 0 |
| `#006f38` | 1 | 72 | 0 | 0 |
| `#b0a37d` | 1 | 0 | 0 | 0 |
| `#4f5451` | 0 | 100 | 0 | 0 |
| `#000000` | 0 | 4 | 0 | 0 |

- `#eee7ca` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#eee7ca` |
| `#e5e3df` | `#eee7ca` |

```css
.section{ --on:#eee7ca }                     /* 地の面 */
.section--main{ background:var(--main); color:#006f38; --on:#006f38 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#006f38 }
.section--main .btn--fill{ background:#006f38; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#d7dbcf`。ただしその囲みは `#f2f3f0` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: TazuganeGothicStdN-Book
- 欧文: TazuganeGothicStdN-Book
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 26px | 1 |
| 見出し | 20px | 1 |
| 小見出し | 16px | — |
| リード | 15px | 1.8 |
| 本文 | 14px | 1 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 14px・行間 1。

## レイアウト

- コンテンツ幅: 最大 952px／読ませる段は 852px
- セクションの上下余白: 40 / 44 / 52 / 120px（基本は 40px）
- 並びの間隔: 6 / 20 / 27 / 28px
- 角丸: 0px が基本。大きな面だけ 2px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1380 / 1340 / 1240 / 1220 / 1200px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1 | 14px / 行間 1 |
| 見出し | 26px | 14px / 行間 1.65 |
| セクションの上下余白 | 40px | 60px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 27px | 6px |

- 本文は 14px → 14px、セクション余白は 40px → 60px（PCの150%）。
- 文字サイズの段は 14 / 13 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 26px;
  font-size: 11px; font-weight: 400; letter-spacing: 0.88px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 7880px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 900px | — | 1カラム・画像あり | 右 | 見出しの下 |

- 全2セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（4） / `#e5e3df`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #d7dbcf。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #b0a37d; color: #ffffff;
  border-radius: 4px; padding: 5px 8px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 1 箇所ある（40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 85枚使っている
- 比率は 1:1（42枚）、3:4（31枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#eee7ca }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:7880px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#006f38; --on:#006f38 }
.section--main .btn--fill{ background:#006f38; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:26px;
  font-size:11px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:60px; --gap:6px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地は `#f2f3f0` のまま。主色 `#eee7ca` は文字と小さな部品にだけ使う。
- 余白 40px と行間 1 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 2px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
