# amcare ふうのデザイン

- 出典: https://www.amcare.co.jp/recruit/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: 採用サイト／製造業･工業･メーカー･商社･物流／病院･クリニック･歯医者･医療･薬

白地に `#243149` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 16px・行間 1.8、セクション間 140px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #243149;
  --sub: #243149;
  --ink: #30416b;
  --ink-rev: #2a2a2a;
  --on: #243149;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Jost", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.8;
  --container: 1100px;
  --read: 1200px;
  --section-y: 140px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 64% |
| 主色 | `#e8eef7` | 22.3% |
| 副色 | `#243149` | 2.6% |
| 差し色 | `#c8cdd3` | 2.5% |
| 差し色 | `#b6b1b0` | 2.4% |
| 差し色 | `#8b9198` | 2.4% |

文字色は `#30416b` / `#2a2a2a` / `#5a5a5a` / `#ffffff`。

- 主色 `#243149` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#e8eef7` | 10 | 0 | 0 | 6 |
| `#ffffff` | 20 | 12 | 0 | 2 |
| `#30416b` | 4 | 56 | 4 | 1 |
| `#fbf4da` | 9 | 0 | 0 | 9 |
| `#2a2a2a` | 0 | 37 | 0 | 0 |
| `#5a5a5a` | 0 | 8 | 0 | 0 |

- `#243149` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#e8eef7` | `#243149` |
| `#f1f5fa` | `#243149` |
| `#30416b` | `#2a2a2a` |
| `#ffffff`（地） | `#243149` |

```css
.section{ --on:#243149 }                     /* 地の面 */
.section--main{ background:var(--main); color:#2a2a2a; --on:#2a2a2a }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#2a2a2a }
.section--main .btn--fill{ background:#2a2a2a; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Jost
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 56px | 1.6 |
| 見出し | 46px | 1.6 |
| 小見出し | 45px | 1.6 |
| リード | 22px | — |
| リード | 20px | — |
| リード | 18px | — |
| 本文 | 16px | 1.8 |

- 本文は 16px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1100px／読ませる段は 1200px
- セクションの上下余白: 140 / 100 / 112 / 120px（基本は 140px）
- 並びの間隔: 8 / 10 / 16 / 40px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.8 | 14px / 行間 1.6 |
| 見出し | 56px | 24px / 行間 1.6 |
| セクションの上下余白 | 140px | 56px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | 12px |

- 本文は 16px → 14px、セクション余白は 140px → 56px（PCの40%）。
- 文字サイズの段は 18 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #30416b;
  border-radius: 0px; padding: 0px 0px; min-height: 58px;
  font-size: 22px; font-weight: 400; letter-spacing: 0.64px;
}
.btn-sub{
  background: transparent; color: #a55500;
  border-radius: 0px; padding: 0px 0px; min-height: 64px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.64px;
}
.btn-sub{
  background: #fbf4da; color: #a55500;
  border-radius: 9999px; padding: 4px 16px; min-height: 28px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.64px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 740px | — | ヒーロー（画像） | 左 | 右（94:6） |
| 2 | 1080px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 3 | 280px | — | 帯・区切り | 中央 | 見出しの下 |
| 4 | 580px | — | 3カラム・画像あり | — | 全面 |
| 5 | 1940px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 6 | 540px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 7 | 420px | — | 2カラム・画像あり | 右 | 左（43:57） |
| 8 | 860px | — | 1カラム・画像あり | 左 | 右（43:57） |
| 9 | 640px | — | 1カラム・画像あり | 右 | 左（42:58） |
| 10 | 860px | — | 3カラム・画像あり | 中央 | 見出しの下 |
| 11 | 660px | — | 4カラム・画像あり | 中央 | 右（40:60） |
| 12 | 660px | — | 1カラム・文字だけ | 中央 | — |

- 全12セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#e8eef7`（3） / `#f1f5fa`（1） / `#30416b`（1） / `#ffffff`（1）
- 見出しは左3／中央6。
- 2カラムの分け方は 94:6 / 43:57 / 43:57 / 42:58 / 40:60。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #fbf4da; color: #a55500;
  border-radius: 999px; padding: 4px 16px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 21 箇所ある（56px×11、32px×8、96px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 40枚使っている
- 比率は 3:4（9枚）、16:9（8枚）、3:2（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#243149 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:740px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#2a2a2a; --on:#2a2a2a }
.section--main .btn--fill{ background:#2a2a2a; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#30416b; border-radius:0px;
  padding:0px 0px; min-height:58px;
  font-size:22px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:56px; --gap:12px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#243149` は文字と小さな部品にだけ使う。
- 余白 140px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
