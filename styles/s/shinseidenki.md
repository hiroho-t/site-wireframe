# 新生電機 ふうのデザイン

- 出典: https://www.shinseidenki.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／スタイリッシュ

#fcfcfc の地に `#022a60` を大きな面で置く配色。影を使って浮かせる。本文 15px・行間 2、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #fcfcfc;
  --main: #022a60;
  --sub: #023aa5;
  --ink: #f8f9fa;
  --ink-rev: #2f3639;
  --on: #022a60;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Work Sans", sans-serif;
  --fs-body: 15px;
  --lh-body: 2;
  --container: 1240px;
  --read: 604px;
  --section-y: 40px;
  --gap: 14px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#fcfcfc` | 46.9% |
| 主色 | `#022a60` | 11.6% |
| 副色 | `#023aa5` | 9% |
| 差し色 | `#036ec2` | 6.7% |
| 差し色 | `#010c92` | 5% |
| 差し色 | `#ccd3d5` | 3.9% |

文字色は `#f8f9fa` / `#2f3639` / `#cccccc` / `#008ddb`。

- 主色 `#022a60` は差し色ではなく**面**で使う。画面の12%を占めている。
- 影は`rgba(47, 54, 57, 0.04) 3px 3px 12px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#022a60` | 1 | 1 | 0 | 0 |
| `#fcfcfc` | 7 | 49 | 0 | 0 |
| `#f2f2f2` | 6 | 0 | 1 | 5 |
| `#2f3639` | 0 | 57 | 0 | 0 |
| `#cccccc` | 0 | 6 | 0 | 0 |
| `#008ddb` | 0 | 2 | 0 | 0 |

- `#022a60` は面として1箇所、文字として1箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#022a60`（主色） | `#2f3639` |
| `#fcfcfc`（地） | `#022a60` |

```css
.section{ --on:#022a60 }                     /* 地の面 */
.section--main{ background:var(--main); color:#2f3639; --on:#2f3639 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#2f3639 }
.section--main .btn--fill{ background:#2f3639; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Noto Sans JP
- 欧文: Work Sans
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 34px | — |
| 見出し | 20px | — |
| 小見出し | 16px | 1 |
| 本文 | 15px | 2 |
| 補助 | 14px | — |
| 注記 | 13px | 1 |
| 注記 | 12px | — |

- 本文は 15px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1240px／読ませる段は 604px
- セクションの上下余白: 40 / 48 / 64 / 36px（基本は 40px）
- 並びの間隔: 8 / 10 / 14 / 34px
- 角丸: 0px が基本。大きな面だけ 32px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 1024 / 782 / 767 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 2 | 15px / 行間 2 |
| 見出し | 34px | 14px / 行間 1 |
| セクションの上下余白 | 40px | 32px |
| 左右の余白 | — | 0px |
| 並びの間隔 | 14px | 8px |

- 本文は 15px → 15px、セクション余白は 40px → 32px（PCの80%）。
- 文字サイズの段は 22 / 16 / 15 / 14 / 12px。

## ボタン

```css
.btn{
  background: #f2f2f2; color: #2f3639;
  border-radius: 32px; padding: 0px 64px; min-height: 64px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.75px;
}
.btn-sub{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 68px; min-height: 56px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.75px;
}
.btn-sub{
  background: #f2f2f2; color: #2f3639;
  border-radius: 22px; padding: 0px 24px; min-height: 44px;
  font-size: 15px; font-weight: 700; letter-spacing: 0.75px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1180px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 1120px | — | 2カラム・画像あり | — | 全面 |
| 3 | 2240px | — | 6カラム・画像あり | 右 | 見出しの下 |
| 4 | 1600px | — | 1カラム・画像あり | 右 | 見出しの下 |
| 5 | 460px | — | 1カラム・画像あり | 右 | 左（25:75） |
| 6 | 1480px | — | 1カラム・画像あり | 右 | 見出しの下 |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#022a60` の面が 1 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#022a60`（1） / `#fcfcfc`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 25:75。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #dbdbdb; color: #2f3639;
  border-radius: 999px; padding: 5px 9px; font-size: 12px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 7 箇所ある（16px×4、24px×1、32px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 23枚使っている
- 比率は 3:4（10枚）、4:3（10枚）、3:2（3枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#022a60 }
.container{ width:min(100% - 0px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1180px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#2f3639; --on:#2f3639 }
.section--main .btn--fill{ background:#2f3639; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#f2f2f2; color:#2f3639; border-radius:32px;
  padding:0px 64px; min-height:64px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:15px; --section-y:32px; --gap:8px; }
  .container{ width:calc(100% - 0px) }
}
```

## 守ること

やること

- 地色と主色 `#022a60` の面を全幅で交互に置く。主色は画面の12%を占めるだけ使う。
- 余白 40px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
