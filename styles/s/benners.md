# 株式会社ベンナーズ ふうのデザイン

- 出典: https://www.benners.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／料理･食べ物･飲み物･食品製造／角丸

白地に `#1fabe8` を大きな面で置く配色。影も枠線もほとんど使わない。本文 18px・行間 1.8、セクション間 100px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #1fabe8;
  --sub: #e9f0f9;
  --ink: #142b3a;
  --ink-rev: #0071bc;
  --on: #1fabe8;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "こぶりなゴシック W6 JIS2004", sans-serif;
  --font-en: "Varela Round", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.8;
  --container: 1200px;
  --read: 588px;
  --section-y: 100px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 66.1% |
| 主色 | `#1fabe8` | 19.3% |
| 副色 | `#e9f0f9` | 7.8% |
| 差し色 | `#cfe1ee` | 3.2% |
| 差し色 | `#7eb7d4` | 1.8% |
| 差し色 | `#87617d` | 1.8% |

文字色は `#142b3a` / `#0071bc` / `#ffffff` / `#333333`。

- 主色 `#1fabe8` は差し色ではなく**面**で使う。画面の19%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 21 | 20 | 0 | 9 |
| `#f4f7fb` | 3 | 0 | 0 | 0 |
| `#1fabe8` | 1 | 0 | 0 | 0 |
| `#e9eff8` | 1 | 0 | 0 | 0 |
| `#0071bc` | 10 | 16 | 4 | 8 |
| `#142b3a` | 1 | 33 | 0 | 1 |
| `#333333` | 0 | 11 | 0 | 0 |

- `#1fabe8` は面として1箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#1fabe8` |
| `#f4f7fb` | `#1fabe8` |
| `#1fabe8`（主色） | `#1fabe8` |
| `#e9eff8` | `#1fabe8` |

```css
.section{ --on:#1fabe8 }                     /* 地の面 */
.section--main{ background:var(--main); color:#0071bc; --on:#0071bc }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#0071bc }
.section--main .btn--fill{ background:#0071bc; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#e4e4e4`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: こぶりなゴシック W6 JIS2004
- 欧文: Varela Round
- ウェイトは 400 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 56px | 1 |
| 見出し | 36px | 1.8 |
| 小見出し | 20px | — |
| 本文 | 18px | 1.8 |
| 補助 | 16px | — |
| 注記 | 14px | 1.4 |
| 注記 | 13px | — |

- 本文は 18px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 588px
- セクションの上下余白: 100 / 140 / 116 / 52px（基本は 100px）
- 並びの間隔: 8 / 16 / 24 / 28px
- 角丸: 0px が基本。大きな面だけ 48px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 840 / 540 / 320px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.8 | 12px / 行間 1.3 |
| 見出し | 56px | 48px / 行間 1 |
| セクションの上下余白 | 100px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 24px | 8px |

- 本文は 18px → 12px、セクション余白は 100px → 32px（PCの32%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #0071bc; color: #ffffff;
  border-radius: 96px; padding: 10px 10px; min-height: 60px;
  font-size: 16px; font-weight: 600; letter-spacing: 1.6px;
}
.btn-sub{
  background: #ffffff; color: #0071bc;
  border: 1px solid #d0dae1;
  border-radius: 48px; padding: 12px 20px; min-height: 42px;
  font-size: 16px; font-weight: 400; letter-spacing: 1.6px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 14px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 880px | `#ffffff` | ヒーロー（画像） | — | 全面 |
| 2 | 1520px | — | 2カラム・画像あり | 左 | 全幅 |
| 3 | 1000px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1260px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 5 | 1440px | `#1fabe8` | 2カラム・画像あり | 左 | 右（71:29） |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#1fabe8` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（6） / `#f4f7fb`（3） / `#1fabe8`（1） / `#e9eff8`（1）
- 見出しは左3／中央1。
- 2カラムの分け方は 71:29。半分ずつには割らない。


## 部品

囲み（2箇所で同じ形）

```css
.card{
  background: #ffffff;
  border: 1px solid var(--on);   /* 実測は #e4e4e4。面によって入れ替える */
  border-radius: 10px;
  padding: 48px 48px;
}
```

ラベル・タグ

```css
.chip{
  background: #0071bc; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 8px 12px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 5 箇所ある（40px×5）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 13枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:2（7枚）、16:9（2枚）、1:1（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#1fabe8 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:880px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#0071bc; --on:#0071bc }
.section--main .btn--fill{ background:#0071bc; color:var(--main) }
.card{ background:#ffffff; border:1px solid var(--on);
  border-radius:10px; padding:48px 48px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#0071bc; color:#ffffff; border-radius:96px;
  padding:10px 10px; min-height:60px;
  font-size:16px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:12px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#1fabe8` の面を全幅で交互に置く。主色は画面の19%を占めるだけ使う。
- 余白 100px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 48px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
