# エージェントグロー ふうのデザイン

- 出典: https://www.agent-grow.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／企画･開発･マーケティング･コンサルティング／自社プロダクト･サービス運営

白地に `#eb322d` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 null、セクション間 96px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #eb322d;
  --sub: #3e424e;
  --ink: #162532;
  --ink-rev: #ffffff;
  --on: #eb322d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Inter", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 14px;
  --lh-body: null;
  --container: 752px;
  --read: 920px;
  --section-y: 96px;
  --gap: 8px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 43.5% |
| 主色 | `#292f33` | 25.5% |
| 副色 | `#3e424e` | 5.3% |
| 差し色 | `#eb322d` | 5% |
| 差し色 | `#6e383a` | 3.8% |
| 差し色 | `#e9e9e9` | 3.5% |

文字色は `#162532` / `#ffffff` / `#7c7c7c` / `#eb322d`。

- 主色 `#eb322d` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 44 | 40 | 4 | 9 |
| `#162532` | 3 | 180 | 11 | 0 |
| `#292f33` | 1 | 0 | 0 | 0 |
| `#383431` | 1 | 0 | 0 | 0 |
| `#eb322d` | 15 | 19 | 6 | 5 |
| `#7c7c7c` | 0 | 24 | 0 | 0 |

- `#eb322d` は面15箇所・文字19箇所を行き来する。ボタンの地にも使う。枠線にも6箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#eb322d` |
| `#162532` | `#ffffff` |
| `#eb322d`（主色） | `#ffffff` |
| `#e9eef1` | `#eb322d` |

```css
.section{ --on:#eb322d }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#d9d9d9`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Inter
- 欧文: Inter
- ウェイトは 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 48px | 1.5 |
| 見出し | 32px | 1.5 |
| 小見出し | 21px | — |
| リード | 18px | 1.5 |
| リード | 16px | — |
| 本文 | 14px | — |
| 補助 | 12px | — |

- 本文は 14px・行間 null。

## レイアウト

- コンテンツ幅: 最大 752px／読ませる段は 920px
- セクションの上下余白: 96 / 40 / 52 / 64px（基本は 96px）
- 並びの間隔: 5 / 6 / 8 / 12px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 1023 / 767 / 640 / 639px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px | 14px / 行間 2.2 |
| 見出し | 48px | 12px / 行間 1.5 |
| セクションの上下余白 | 96px | 40px |
| 左右の余白 | — | 32px |
| 並びの間隔 | 8px | 5px |

- 本文は 14px → 14px、セクション余白は 96px → 40px（PCの42%）。
- 文字サイズの段は 18 / 16 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: #ffffff; color: #eb322d;
  border: 1px solid #d9d9d9;
  border-radius: 30px; padding: 4px 10px; min-height: 28px;
  font-size: 12px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #eb322d; color: #ffffff;
  border: 1px solid #eb322d;
  border-radius: 4px; padding: 12px 6px; min-height: 64px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #162532;
  border: 1px solid #162532;
  border-radius: 4px; padding: 12px 6px; min-height: 64px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 980px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 980px | — | 1カラム・画像あり | — | 全幅 |
| 3 | 980px | — | 1カラム・画像あり | — | 全幅 |
| 4 | 980px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 980px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 980px | — | 1カラム・画像あり | — | 全幅 |
| 7 | 980px | — | 1カラム・画像あり | — | 全幅 |
| 8 | 980px | — | 1カラム・画像あり | — | 全幅 |

- 全8セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（18） / `#162532`（3） / `#eb322d`（3） / `#e9eef1`（1）


## 部品

囲み（7箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #d9d9d9。面によって入れ替える */
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #eb322d;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 4px 10px; font-size: 12px;
}
```

## 画像

- 27枚使っている。うち 18 枚は画面いっぱいに置く
- 比率は 3:2（20枚）、1:1（2枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#eb322d }
.container{ width:min(100% - 64px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:980px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#eb322d; border-radius:30px;
  padding:4px 10px; min-height:28px;
  font-size:12px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:14px; --section-y:40px; --gap:5px; }
  .container{ width:calc(100% - 64px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#eb322d` は文字と小さな部品にだけ使う。
- 余白 96px と行間 null を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を null より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。
