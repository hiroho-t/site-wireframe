# 家島建設株式会社 ふうのデザイン

- 出典: https://ieshima.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／建設･インフラ･土木･設備／レスポンシブ

白地に `#658aa2` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 18px・行間 2、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #658aa2;
  --sub: #658aa2;
  --ink: #ffffff;
  --ink-rev: #b2a295;
  --on: #658aa2;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Satoshi", sans-serif;
  --font-en: "Satoshi", sans-serif;
  --fs-body: 18px;
  --lh-body: 2;
  --container: 1292px;
  --read: 692px;
  --section-y: 52px;
  --gap: 10px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 65% |
| 主色 | `#e1eaf2` | 10.3% |
| 副色 | `#658aa2` | 5.8% |
| 差し色 | `#101a22` | 5.6% |
| 差し色 | `#4a7e9f` | 3.8% |
| 差し色 | `#878683` | 2.6% |

文字色は `#ffffff` / `#b2a295` / `#eaf0f5` / `#101a22`。

- 主色 `#658aa2` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#101a22` | 2 | 45 | 1 | 0 |
| `#0b2e4d` | 1 | 0 | 0 | 0 |
| `#021e2e` | 1 | 0 | 0 | 0 |
| `#08121a` | 6 | 0 | 0 | 0 |
| `#f0f0f2` | 0 | 2 | 3 | 0 |
| `#ffffff` | 3 | 76 | 5 | 0 |
| `#b2a295` | 0 | 94 | 1 | 0 |

- `#658aa2` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#08121a` | `#b2a295` |
| `#101a22` | `#b2a295` |
| `#0b2e4d` | `#b2a295` |
| `#021e2e` | `#b2a295` |

```css
.section{ --on:#658aa2 }                     /* 地の面 */
.section--main{ background:var(--main); color:#b2a295; --on:#b2a295 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#b2a295 }
.section--main .btn--fill{ background:#b2a295; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#101a22` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Satoshi
- 欧文: Satoshi
- ウェイトは 600 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 20px | — |
| 本文 | 18px | 1.7 |
| 補助 | 16px | 1.8 |
| 注記 | 15px | 1.6 |
| 注記 | 14px | — |
| 注記 | 13px | — |

- 本文は 18px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1292px／読ませる段は 692px
- セクションの上下余白: 52 / 60 / 72 / 148px（基本は 52px）
- 並びの間隔: 5 / 7 / 10 / 15px
- 角丸: 0px が基本。大きな面だけ 47px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 1024 / 768 / 576 / 414px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 18px / 行間 2 | 14px / 行間 2 |
| 見出し | 20px | 15px / 行間 1.6 |
| セクションの上下余白 | 52px | 32px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 10px | 15px |

- 本文は 18px → 14px、セクション余白は 52px → 32px（PCの62%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #172531; color: #b2a295;
  border-radius: 47px; padding: 20px 50px; min-height: 69px;
  font-size: 18px; font-weight: 400; letter-spacing: 0.18px;
}
.btn-sub{
  background: transparent; color: #b2a295;
  border-radius: 0px; padding: 0px 0px; min-height: 69px;
  font-size: 18px; font-weight: 400; letter-spacing: 0.18px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 840px | — | ヒーロー（画像） | 右 | 左（53:47） |
| 2 | 680px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 960px | `#101a22` | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 2120px | — | 3カラム・画像あり | 左 | 全幅 |
| 5 | 3340px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 1140px | — | 1カラム・画像あり | 左 | 右（13:87） |
| 7 | 4440px | — | 1カラム・画像あり | — | 全幅 |

- 全7セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#08121a`（6） / `#101a22`（2） / `#0b2e4d`（1） / `#021e2e`（1）
- 見出しは左3／中央2。
- 2カラムの分け方は 53:47 / 13:87。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #08121a;
  border-radius: 0px;
  padding: 30px 30px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（112px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 51枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 3:4（23枚）、3:2（18枚）、1:1（5枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#658aa2 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:840px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#b2a295; --on:#b2a295 }
.section--main .btn--fill{ background:#b2a295; color:var(--main) }
.card{ background:#08121a;
  border-radius:0px; padding:30px 30px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#172531; color:#b2a295; border-radius:47px;
  padding:20px 50px; min-height:69px;
  font-size:18px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/4; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:32px; --gap:15px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#658aa2` は文字と小さな部品にだけ使う。
- 余白 52px と行間 2 を先に決めてから中身を入れる。
- 画像は 3:4 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 47px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
