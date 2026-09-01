# sajou no hana Official Website ふうのデザイン

- 出典: https://sajounohanasana.com/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: ポートフォリオサイト･プロフィールサイト／音楽･芸能･映画･テレビ･配信／やさしい･やわらかい配色

白地に `#dfd3ce` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 15px・行間 1.8、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #dfd3ce;
  --sub: #f0eeee;
  --ink: #212121;
  --ink-rev: #000000;
  --on: #dfd3ce;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Overpass", sans-serif;
  --fs-body: 15px;
  --lh-body: 1.8;
  --container: 980px;
  --read: 600px;
  --section-y: 80px;
  --gap: 40px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 65.9% |
| 主色 | `#dfd3ce` | 21.9% |
| 副色 | `#f0eeee` | 10.7% |

文字色は `#212121` / `#000000`。

- 主色 `#dfd3ce` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 25 | 0 | 18 | 16 |
| `#eeeeee` | 1 | 0 | 0 | 0 |
| `#212121` | 0 | 81 | 1 | 0 |
| `#000000` | 0 | 1 | 0 | 0 |

- `#dfd3ce` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#dfd3ce` |
| `#eeeeee` | `#dfd3ce` |

```css
.section{ --on:#dfd3ce }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Hiragino Kaku Gothic ProN（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: Overpass
- ウェイトは 200 / 300 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.4 |
| 見出し | 24px | 1 |
| 小見出し | 18px | — |
| リード | 16px | — |
| 本文 | 15px | 1.8 |
| 補助 | 14px | — |
| 注記 | 12px | — |

- 本文は 15px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 980px／読ませる段は 600px
- セクションの上下余白: 80 / 240 / 56 / 60px（基本は 80px）
- 並びの間隔: 10 / 24 / 40 / 80px
- 角丸: 0px が基本。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 840 / 540px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px / 行間 1.8 | 14px / 行間 1.8 |
| 見出し | 40px | 20px / 行間 1 |
| セクションの上下余白 | 80px | 60px |
| 左右の余白 | — | 21px |
| 並びの間隔 | 40px | 10px |

- 本文は 15px → 14px、セクション余白は 80px → 60px（PCの75%）。
- 文字サイズの段は 42 / 16 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #212121;
  border: 1px solid #ffffff;
  border-radius: 60px; padding: 0px 12px; min-height: 30px;
  font-size: 12px; font-weight: 300; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #212121;
  border: 1px solid #212121;
  border-radius: 60px; padding: 13px 25px; min-height: 44px;
  font-size: 16px; font-weight: 300; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 400px | — | ヒーロー | — | — |
| 2 | 400px | — | 1カラム・文字だけ | — | — |
| 3 | 400px | — | 1カラム・文字だけ | — | — |
| 4 | 400px | — | 1カラム・文字だけ | — | — |
| 5 | 400px | — | 1カラム・文字だけ | — | — |
| 6 | 400px | — | 1カラム・文字だけ | — | — |
| 7 | 400px | — | 1カラム・文字だけ | — | — |
| 8 | 400px | — | 1カラム・文字だけ | — | — |
| 9 | 400px | — | 1カラム・文字だけ | — | — |
| 10 | 400px | — | 1カラム・文字だけ | — | — |
| 11 | 400px | — | 1カラム・文字だけ | — | — |

- 全11セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（6） / `#eeeeee`（1）


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #333333;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 0px 12px; font-size: 16px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 2 箇所ある（24px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 73枚使っている。うち 11 枚は画面いっぱいに置く
- 比率は 1:1（52枚）、4:3（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#dfd3ce }
.container{ width:min(100% - 42px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:400px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#212121; border-radius:60px;
  padding:0px 12px; min-height:30px;
  font-size:12px; font-weight:300 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:840px){
  :root{ --fs-body:14px; --section-y:60px; --gap:10px; }
  .container{ width:calc(100% - 42px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#dfd3ce` は文字と小さな部品にだけ使う。
- 余白 80px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 32px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
