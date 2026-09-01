# Zoff Recruitment Site ふうのデザイン

- 出典: https://recruit.zoff.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: アイウェア・採用

白地に `#2299e1` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 18px・行間 1.5、セクション間 92px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #2299e1;
  --sub: #2299e1;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #2299e1;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Montserrat", sans-serif;
  --fs-body: 18px;
  --lh-body: 1.5;
  --container: 744px;
  --read: 612px;
  --section-y: 92px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 57.3% |
| 主色 | `#edeff0` | 18.3% |
| 副色 | `#2299e1` | 7.5% |
| 差し色 | `#d3d1ce` | 3.6% |
| 差し色 | `#a5afb1` | 3.5% |
| 差し色 | `#1d262c` | 1.7% |

文字色は `#000000` / `#ffffff` / `#2299e1` / `#666666`。

- 主色 `#2299e1` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#edeff0` | 12 | 0 | 0 | 1 |
| `#2299e1` | 4 | 6 | 0 | 3 |
| `#ffffff` | 28 | 45 | 4 | 23 |
| `#202426` | 10 | 0 | 0 | 9 |
| `#009be4` | 13 | 8 | 0 | 7 |
| `#000000` | 0 | 88 | 0 | 0 |
| `#666666` | 0 | 19 | 0 | 0 |

- `#2299e1` は面4箇所・文字6箇所を行き来する。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ebf2f7` | `#2299e1` |
| `#edeff0` | `#2299e1` |
| `#2299e1`（主色） | `#ffffff` |

```css
.section{ --on:#2299e1 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Montserrat
- ウェイトは 500 / 600 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | — |
| 本文 | 18px | 1.6 |
| 補助 | 16px | 1.5 |
| 注記 | 15px | — |
| 注記 | 14px | 1 |
| 注記 | 12px | — |

- 本文は 18px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 744px／読ませる段は 612px
- セクションの上下余白: 92 / 136 / 112 / 44px（基本は 92px）
- 並びの間隔: 9 / 11 / 14 / 23px
- 角丸: 0px が基本。大きな面だけ 3px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1179 / 1024 / 1023 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 1.5 | 18px / 行間 1.5 |
| 見出し | 24px | 14px / 行間 1 |
| セクションの上下余白 | 92px | 32px |
| 左右の余白 | — | 23px |
| 並びの間隔 | 14px | 12px |

- 本文は 18px → 18px、セクション余白は 92px → 32px（PCの35%）。
- 文字サイズの段は 18 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #000000;
  border-radius: 0px; padding: 0px 0px; min-height: 29px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.78px;
}
.btn-sub{
  background: #ffffff; color: #000000;
  border: 1px solid #dddddd;
  border-radius: 113px; padding: 2px 18px; min-height: 28px;
  font-size: 13px; font-weight: 500; letter-spacing: 0.78px;
}
.btn-sub{
  background: #202426; color: #ffffff;
  border-radius: 68px; padding: 0px 18px; min-height: 58px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.56px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | 全幅 |
| 2 | 460px | — | 4カラム・画像あり | 左 | 見出しの下 |
| 3 | 740px | — | 3カラム・画像あり | 左 | 右（19:81） |
| 4 | 740px | `#2299e1` | 1カラム・画像あり | 中央 | 見出しの下 |
| 5 | 420px | — | 6カラム・画像あり | — | 全面 |
| 6 | 2940px | — | 1カラム・画像あり | 左 | 右（42:58） |
| 7 | 1300px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 8 | 600px | — | 1カラム・画像あり | 左 | — |
| 9 | 1080px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 10 | 860px | `#edeff0` | 6カラム・画像あり | 左 | 見出しの下 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ebf2f7`（5） / `#edeff0`（2） / `#2299e1`（1）
- 見出しは左7／中央1。
- 2カラムの分け方は 19:81 / 42:58。半分ずつには割らない。


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #edeff0;
  border-radius: 6px;
  padding: 34px 22px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #000000;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 2px 18px; font-size: 13px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 3 箇所ある（56px×3）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 68枚使っている。うち 1 枚は画面いっぱいに置く
- 比率は 16:9（18枚）、3:2（11枚）、1:1（4枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#2299e1 }
.container{ width:min(100% - 46px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#edeff0;
  border-radius:6px; padding:34px 22px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#000000; border-radius:0px;
  padding:0px 0px; min-height:29px;
  font-size:13px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:18px; --section-y:32px; --gap:12px; }
  .container{ width:calc(100% - 46px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#2299e1` は文字と小さな部品にだけ使う。
- 余白 92px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 6px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 3px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
