# クリニック杜の里 ふうのデザイン

- 出典: https://c-morinosato.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／オーソドックス

#f5f5ee の地に `#002a1d` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 1.8、セクション間 120px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f5f5ee;
  --main: #002a1d;
  --ink: #002a1d;
  --ink-rev: #349f87;
  --on: #002a1d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Roboto Condensed", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1200px;
  --read: 1020px;
  --section-y: 120px;
  --gap: 20px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f5f5ee` | 91.6% |

文字色は `#002a1d` / `#349f87` / `#ffffff` / `#7b8f85`。

- 主色 `#002a1d` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(73, 120, 103, 0.05) 0px 2px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f5f5ee` | 9 | 0 | 0 | 0 |
| `#fdfdfc` | 11 | 7 | 0 | 0 |
| `#349f87` | 7 | 29 | 9 | 6 |
| `#e6e6d3` | 5 | 0 | 0 | 0 |
| `#002a1d` | 1 | 68 | 0 | 1 |
| `#7b8f85` | 0 | 5 | 6 | 0 |

- `#002a1d` は文字色として68箇所で使うのが主。面としては1箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fdfdfc` | `#002a1d` |
| `#f8f8f3` | `#002a1d` |
| `#f5f3f3` | `#002a1d` |

```css
.section{ --on:#002a1d }                     /* 地の面 */
.section--main{ background:var(--main); color:#349f87; --on:#349f87 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#349f87 }
.section--main .btn--fill{ background:#349f87; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#fdfdfc` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Roboto Condensed
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 46px | 1.5 |
| 見出し | 26px | 1.8 |
| 小見出し | 20px | 1.5 |
| リード | 18px | 1.8 |
| 本文 | 16px | 1.8 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 1020px
- セクションの上下余白: 120 / 32 / 72 / 36px（基本は 120px）
- 並びの間隔: 10 / 20 / 28px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1199 / 1000 / 999 / 767 / 374px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 16px / 行間 1.8 |
| 見出し | 46px | 32px / 行間 1.5 |
| セクションの上下余白 | 120px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 20px | 11px |

- 本文は 16px → 16px、セクション余白は 120px → 40px（PCの33%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #002a1d;
  border: 1px solid #7b8f85;
  border-radius: 0px; padding: 10px 0px; min-height: 40px;
  font-size: 16px; font-weight: 500; letter-spacing: 0.8px;
}
.btn-sub{
  background: #349f87; color: #ffffff;
  border-radius: 10px; padding: 5px 10px; min-height: 50px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.8px;
}
.btn-sub{
  background: #002a1d; color: #ffffff;
  border-radius: 10px; padding: 5px 10px; min-height: 50px;
  font-size: 16px; font-weight: 600; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 780px | — | ヒーロー（画像） | 左 | 右（69:31） |
| 2 | 300px | — | 帯・区切り | 左 | — |
| 3 | 660px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1600px | — | 3カラム・画像あり | 中央 | 右（93:7） |
| 5 | 680px | — | 6カラム・画像あり | 左 | — |
| 6 | 360px | — | 2カラム・画像あり | 左 | — |
| 7 | 520px | — | 1カラム・画像あり | — | 全面 |
| 8 | 1020px | — | 1カラム・画像あり | 中央 | — |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fdfdfc`（2） / `#f8f8f3`（1） / `#f5f3f3`（1）
- 見出しは左4／中央3。
- 2カラムの分け方は 69:31 / 93:7。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #edf7f5;
  border-radius: 10px;
  padding: 22px 18px;
}
```

ラベル・タグ

```css
.chip{
  background: #e6e6d3; color: #002a1d;
  border-radius: 5px; padding: 0px 13px; font-size: 14px;
}
```

## 丸いもの

角丸は 10px だが、**完全な円は別扱い**で 5 箇所ある（16px×4、40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 33枚使っている
- 比率は 4:3（28枚）、3:4（3枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#002a1d }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:780px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#349f87; --on:#349f87 }
.section--main .btn--fill{ background:#349f87; color:var(--main) }
.card{ background:#edf7f5;
  border-radius:10px; padding:22px 18px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#002a1d; border-radius:0px;
  padding:10px 0px; min-height:40px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:16px; --section-y:40px; --gap:11px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#f5f5ee` のまま。主色 `#002a1d` は文字と小さな部品にだけ使う。
- 余白 120px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
