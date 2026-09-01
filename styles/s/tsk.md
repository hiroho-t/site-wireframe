# TSK株式会社 PART OF NEFAB GROUP ふうのデザイン

- 出典: https://tsk-corp.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／レスポンシブ

白地に `#00479d` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 1.9、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #00479d;
  --sub: #d6d1ca;
  --ink: #2c2a25;
  --ink-rev: #ffffff;
  --on: #00479d;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Nunito Sans", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.9;
  --container: 1200px;
  --read: 680px;
  --section-y: 40px;
  --gap: 45px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 49.2% |
| 主色 | `#00479d` | 39.4% |
| 副色 | `#d6d1ca` | 7.8% |

文字色は `#2c2a25` / `#ffffff` / `#00479d` / `#6b6b6b`。

- 主色 `#00479d` は差し色ではなく**面**で使う。画面の39%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#00479d` | 6 | 9 | 0 | 0 |
| `#ffffff` | 7 | 24 | 11 | 3 |
| `#d6d1ca` | 1 | 0 | 0 | 0 |
| `#f6f6f6` | 1 | 0 | 0 | 0 |
| `#2c2a25` | 0 | 28 | 0 | 0 |
| `#6b6b6b` | 0 | 24 | 0 | 0 |

- `#00479d` は面6箇所・文字9箇所を行き来する。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#00479d`（主色） | `#ffffff` |
| `#ffffff`（地） | `#00479d` |
| `#d6d1ca` | `#00479d` |
| `#f6f6f6` | `#00479d` |

```css
.section{ --on:#00479d }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Nunito Sans
- ウェイトは 500 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 24px | 2 |
| 見出し | 18px | — |
| 小見出し | 17px | — |
| 本文 | 16px | 1.9 |
| 補助 | 14px | 1.55 |
| 注記 | 13px | — |
| 注記 | 12px | — |

- 本文は 16px・行間 1.9。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 680px
- セクションの上下余白: 40 / 60 / 80 / 140px（基本は 40px）
- 並びの間隔: 16 / 20 / 45 / 75px
- 角丸: 0px が基本。大きな面だけ 25px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1060 / 782 / 769 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.9 | 14px / 行間 1.9 |
| セクションの上下余白 | 40px | 24px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 45px | 12px |

- 本文は 16px → 14px、セクション余白は 40px → 24px（PCの60%）。
- 文字サイズの段は 18 / 14 / 13 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #2c2a25;
  border: 1px solid #dfdfdf;
  border-radius: 25px; padding: 0px 0px; min-height: 52px;
  font-size: 16px; font-weight: 400; letter-spacing: 1.28px;
}
.btn-sub{
  background: transparent; color: #2c2a25;
  border-radius: 0px; padding: 0px 0px; min-height: 52px;
  font-size: 13px; font-weight: 500; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #2c2a25;
  border: 1px solid #ffffff;
  border-radius: 25px; padding: 0px 0px; min-height: 52px;
  font-size: 13px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1900px | `#00479d` | ヒーロー（画像） | — | 全面 |
| 2 | 1900px | `#ffffff` | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 2220px | — | 6カラム・画像あり | 左 | 全幅 |
| 4 | 660px | `#d6d1ca` | 2カラム・画像あり | 右 | 左（50:50） |
| 5 | 600px | `#ffffff` | 1カラム・文字だけ | 左 | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#00479d` の面が 3 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#00479d`（3） / `#ffffff`（3） / `#d6d1ca`（1） / `#f6f6f6`（1）
- 見出しは左2／中央1。
- 2カラムの分け方は 50:50。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #f1f1f1; color: #6b6b6b;
  border-radius: 999px; padding: 4px 12px; font-size: 10px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 7 箇所ある（32px×4、48px×2、40px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 35枚使っている。うち 5 枚は画面いっぱいに置く
- 比率は 16:9（15枚）、3:2（8枚）、1:1（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#00479d }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#2c2a25; border-radius:25px;
  padding:0px 0px; min-height:52px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:14px; --section-y:24px; --gap:12px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地色と主色 `#00479d` の面を全幅で交互に置く。主色は画面の39%を占めるだけ使う。
- 余白 40px と行間 1.9 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.9 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 25px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
