# 康生会 武田病院 ふうのデザイン

- 出典: https://www.takedahp.or.jp/koseikai/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角丸 / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／スタイリッシュ

白地に `#946d69` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 12px・行間 null、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #946d69;
  --sub: #e2e2df;
  --ink: #454545;
  --ink-rev: #777777;
  --on: #946d69;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "MFW-HiraKakuProN-W3", sans-serif;
  --font-en: "MFW-HiraKakuProN-W3", sans-serif;
  --fs-body: 12px;
  --lh-body: null;
  --container: 1344px;
  --read: 1032px;
  --section-y: 80px;
  --gap: 16px;
  --radius: 24px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 74.8% |
| 主色 | `#b6bdb9` | 9.1% |
| 副色 | `#e2e2df` | 4.2% |
| 差し色 | `#8f9d97` | 3% |
| 差し色 | `#946d69` | 2.8% |
| 差し色 | `#923038` | 2.6% |

文字色は `#454545` / `#777777` / `#222222` / `#ffffff`。

- 主色 `#946d69` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.03) 0px -15px 24px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 56 | 33 | 2 | 22 |
| `#f7f3eb` | 6 | 0 | 0 | 0 |
| `#f8f8f8` | 9 | 0 | 0 | 0 |
| `#e01d1d` | 1 | 0 | 0 | 0 |
| `#eee9df` | 1 | 0 | 22 | 0 |
| `#454545` | 0 | 154 | 0 | 0 |
| `#777777` | 0 | 32 | 0 | 0 |
| `#222222` | 0 | 64 | 0 | 0 |

- `#946d69` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#946d69` |
| `#f8f8f8` | `#946d69` |
| `#f7f3eb` | `#946d69` |
| `#e01d1d` | `#777777` |

```css
.section{ --on:#946d69 }                     /* 地の面 */
.section--main{ background:var(--main); color:#777777; --on:#777777 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#777777 }
.section--main .btn--fill{ background:#777777; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f7f3eb` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: MFW-HiraKakuProN-W3
- 欧文: MFW-HiraKakuProN-W3
- ウェイトは 500 / 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | 1.6 |
| 見出し | 23px | 1 |
| 小見出し | 22px | 1 |
| リード | 20px | 1 |
| リード | 16px | — |
| リード | 15px | — |
| リード | 14px | — |

- 本文は 12px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1344px／読ませる段は 1032px
- セクションの上下余白: 80 / 84 / 128 / 136px（基本は 80px）
- 並びの間隔: 8 / 12 / 16 / 24px
- 角丸: 24px が基本。大きな面だけ 12px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1023 / 768 / 600 / 500 / 400px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px | 12px / 行間 1.6 |
| 見出し | 34px | 24px / 行間 1.6 |
| セクションの上下余白 | 80px | 24px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 16px | 12px |

- 本文は 12px → 12px、セクション余白は 80px → 24px（PCの30%）。
- 文字サイズの段は 15 / 14 / 12 / 11 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #454545;
  border: 1px solid #e8e8e8;
  border-radius: 12px; padding: 7px 12px; min-height: 36px;
  font-size: 14px; font-weight: 300; letter-spacing: 0.56px;
}
.btn-sub{
  background: transparent; color: #555555;
  border: 1px solid #e9e9e9;
  border-radius: 100px; padding: 6px 6px; min-height: 26px;
  font-size: 12px; font-weight: 500; letter-spacing: 0.24px;
}
.btn-sub{
  background: #ffffff; color: #555555;
  border: 1px solid #e2e2e2;
  border-radius: 1440px; padding: 6px 13px; min-height: 27px;
  font-size: 12px; font-weight: 500; letter-spacing: 0.24px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 980px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 520px | `#f7f3eb` | 6カラム・画像あり | 左 | 見出しの下 |
| 3 | 2560px | — | 5カラム・画像あり | 左 | 見出しの下 |
| 4 | 400px | — | 5カラム・画像あり | — | 全面 |
| 5 | 580px | — | 2カラム・画像あり | 左 | 左（10:90） |
| 6 | 1100px | — | 2カラム・画像あり | 左 | 右（33:67） |
| 7 | 960px | — | 6カラム・画像あり | 中央 | 見出しの下 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（26） / `#f8f8f8`（5） / `#f7f3eb`（3） / `#e01d1d`（1）
- 見出しは左5／中央1。
- 2カラムの分け方は 10:90 / 33:67。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 24px;
  padding: 28px 28px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #454545;
  border: 1px solid currentColor;
  border-radius: 12px; padding: 7px 9px; font-size: 14px;
}
```

## 画像

- 35枚使っている。うち 7 枚は画面いっぱいに置く
- 比率は 3:2（23枚）、1:1（6枚）、4:3（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#946d69 }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:980px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#777777; --on:#777777 }
.section--main .btn--fill{ background:#777777; color:var(--main) }
.card{ background:#ffffff;
  border-radius:24px; padding:28px 28px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#454545; border-radius:12px;
  padding:7px 12px; min-height:36px;
  font-size:14px; font-weight:300 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:12px; --section-y:24px; --gap:12px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#946d69` は文字と小さな部品にだけ使う。
- 余白 80px と行間 null を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 24px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。
- 中途半端な角丸（24px と 12px 以外）を混ぜない。
