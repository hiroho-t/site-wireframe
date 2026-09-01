# 明星幼稚園 ふうのデザイン

- 出典: https://www.meisei.ac.jp/kg/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／保育園･幼稚園･こども園／ベビー･子ども･子育て

白地に `#7f3033` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.8、セクション間 48px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #7f3033;
  --sub: #dfd8cf;
  --ink: #222222;
  --ink-rev: #ffffff;
  --on: #7f3033;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Maru Gothic", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1144px;
  --read: 812px;
  --section-y: 48px;
  --gap: 11px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 54.9% |
| 主色 | `#7f3033` | 16.8% |
| 副色 | `#dfd8cf` | 6% |
| 差し色 | `#999282` | 4% |
| 差し色 | `#c8c7bd` | 3.9% |
| 差し色 | `#595c57` | 3.4% |

文字色は `#222222` / `#ffffff` / `#7f3033` / `#666666`。

- 主色 `#7f3033` は差し色ではなく**面**で使う。画面の17%を占めている。
- 影は`rgba(0, 0, 0, 0.05) 9.52381px 13.3333px 51.4286px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f9f3f3` | 7 | 0 | 0 | 0 |
| `#7f3033` | 7 | 18 | 3 | 0 |
| `#ffffff` | 8 | 18 | 0 | 0 |
| `#7bc8bd` | 1 | 0 | 0 | 1 |
| `#ee84b2` | 1 | 1 | 0 | 1 |
| `#222222` | 0 | 107 | 0 | 0 |
| `#666666` | 0 | 13 | 0 | 0 |

- `#7f3033` は面7箇所・文字18箇所を行き来する。ボタンの地には使っていない。枠線にも3箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#7f3033` |
| `#f9f3f3` | `#7f3033` |
| `#7f3033`（主色） | `#ffffff` |

```css
.section{ --on:#7f3033 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#f9f3f3` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Zen Maru Gothic
- 欧文: Inter
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 18px | 1.5 |
| 本文 | 16px | 1.5 |
| 補助 | 15px | — |
| 注記 | 14px | — |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1144px／読ませる段は 812px
- セクションの上下余白: 48 / 56 / 144 / 40px（基本は 48px）
- 並びの間隔: 8 / 10 / 11 / 15px
- 角丸: 0px が基本。大きな面だけ 19px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1201 / 1200 / 1024 / 769 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 14px / 行間 1.8 |
| セクションの上下余白 | 48px | 64px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 11px | 10px |

- 本文は 16px → 14px、セクション余白は 48px → 64px（PCの133%）。
- 文字サイズの段は 16 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: #ee84b2; color: #222222;
  border-radius: 9999px; padding: 10px 16px; min-height: 40px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #f4aa8a; color: #222222;
  border-radius: 9999px; padding: 10px 16px; min-height: 40px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #7bc8bd; color: #222222;
  border-radius: 9999px; padding: 10px 16px; min-height: 40px;
  font-size: 16px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | 右 | 全幅 |
| 2 | 1580px | `#7f3033` | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 340px | — | 4カラム・画像あり | 中央 | 左（9:91） |
| 4 | 1240px | `#f9f3f3` | 3カラム・画像あり | 中央 | 見出しの下 |
| 5 | 1320px | — | 5カラム・画像あり | 左 | 右（72:28） |
| 6 | 720px | — | 2カラム・画像あり | 左 | 右（32:68） |
| 7 | 1000px | `#f9f3f3` | 3カラム・画像あり | 中央 | 見出しの下 |
| 8 | 680px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 9 | 240px | — | 2カラム・画像あり | 中央 | — |
| 10 | 720px | — | 4カラム・画像あり | — | 全面 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#7f3033` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（6） / `#f9f3f3`（3） / `#7f3033`（1）
- 見出しは左3／中央5。
- 2カラムの分け方は 9:91 / 72:28 / 32:68。半分ずつには割らない。


## 部品

囲み（3箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 19px;
  padding: 20px 20px;
}
```

ラベル・タグ

```css
.chip{
  background: #f9f3f3; color: #7f3033;
  border-radius: 999px; padding: 4px 11px; font-size: 14px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 6 箇所ある（112px×3、80px×2、256px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 48枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 3:2（15枚）、1:1（14枚）、4:3（9枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#7f3033 }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:19px; padding:20px 20px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ee84b2; color:#222222; border-radius:9999px;
  padding:10px 16px; min-height:40px;
  font-size:16px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:64px; --gap:10px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地色と主色 `#7f3033` の面を全幅で交互に置く。主色は画面の17%を占めるだけ使う。
- 余白 48px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 19px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 19px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
