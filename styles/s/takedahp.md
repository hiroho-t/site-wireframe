# 武田病院グループ ふうのデザイン

- 出典: https://www.takedahp.or.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／病院･クリニック･歯医者･医療･薬／福祉･介護

#fcf2e5 の地に `#47332f` を大きな面で置く配色。影を使って浮かせる。本文 15px・行間 1.5、セクション間 32px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fcf2e5;
  --main: #47332f;
  --sub: #47332f;
  --ink: #6d5d52;
  --ink-rev: #ffffff;
  --on: #47332f;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "FOT-セザンヌ Pro M", sans-serif;
  --font-en: "Marcellus", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.5;
  --container: 1800px;
  --read: 880px;
  --section-y: 32px;
  --gap: 12px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fcf2e5` | 39.6% |
| 主色 | `#ffffff` | 12.2% |
| 副色 | `#47332f` | 11.2% |
| 差し色 | `#b5cae9` | 9.2% |
| 差し色 | `#8eb0d0` | 5.4% |
| 差し色 | `#426893` | 4.7% |

文字色は `#6d5d52` / `#ffffff` / `#8a4940` / `#733e1b`。

- 主色 `#47332f` は差し色ではなく**面**で使う。画面の11%を占めている。
- 影は`rgba(0, 0, 0, 0.04) 0px 1px 0px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#47332f` | 1 | 0 | 0 | 0 |
| `#ffffff` | 12 | 47 | 6 | 2 |
| `#f8ecde` | 1 | 0 | 0 | 0 |
| `#8a4940` | 2 | 51 | 44 | 0 |
| `#3a2110` | 2 | 0 | 0 | 0 |
| `#6d5d52` | 0 | 36 | 0 | 0 |
| `#733e1b` | 0 | 4 | 4 | 0 |

- `#47332f` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff` | `#47332f` |
| `#f8ecde` | `#47332f` |
| `#47332f`（主色） | `#ffffff` |

```css
.section{ --on:#47332f }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#733e1b`。ただしその囲みは `#fff7ee` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: FOT-セザンヌ Pro M
- 欧文: Marcellus
- ウェイトは 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 26px | 1 |
| 見出し | 20px | — |
| 小見出し | 17px | — |
| リード | 16px | — |
| 本文 | 15px | 1.2 |
| 補助 | 13px | — |
| 注記 | 12px | — |

- 本文は 15px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1800px／読ませる段は 880px
- セクションの上下余白: 32 / 64 / 84 / 80px（基本は 32px）
- 並びの間隔: 8 / 10 / 12 / 32px
- 角丸: 4px が基本。大きな面だけ 16px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1079 / 979 / 871 / 768 / 400px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.5 | 13px / 行間 1.8 |
| 見出し | 26px | 12px / 行間 1.2 |
| セクションの上下余白 | 32px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 12px | 8px |

- 本文は 15px → 13px、セクション余白は 32px → 24px（PCの75%）。
- 文字サイズの段は 15 / 14 / 13 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #6d5d52;
  border: 1px solid #eceae8;
  border-radius: 10px; padding: 5px 9px; min-height: 26px;
  font-size: 12px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 13px; font-weight: 600; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 4px; padding: 9px 16px; min-height: 32px;
  font-size: 13px; font-weight: 600; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 900px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 900px | — | 1カラム・画像あり | — | 全幅 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#47332f` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（6） / `#f8ecde`（1） / `#47332f`（1）


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #733e1b。面によって入れ替える */
  border-radius: 0px;
  padding: 30px 24px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 1px 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: transparent; color: #8a4940;
  border: 1px solid currentColor;
  border-radius: 4px; padding: 2px 7px; font-size: 12px;
}
```

## 画像

- 23枚使っている。うち 7 枚は画面いっぱいに置く
- 比率は 3:2（23枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#47332f }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:0px; padding:30px 24px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#6d5d52; border-radius:10px;
  padding:5px 9px; min-height:26px;
  font-size:12px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:871px){
  :root{ --fs-body:13px; --section-y:24px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#47332f` の面を全幅で交互に置く。主色は画面の11%を占めるだけ使う。
- 余白 32px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。
- 中途半端な角丸（4px と 16px 以外）を混ぜない。
