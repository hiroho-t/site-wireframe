# 株式会社クリーチャーズ ふうのデザイン

- 出典: https://www.creatures.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: コーポレートサイト／デザイン･イラスト･写真･映像･制作／漫画･アニメ･ゲーム

白地に `#ffd916` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 12px・行間 1.8、セクション間 168px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ffd916;
  --sub: #2b2e2e;
  --ink: #34343a;
  --ink-rev: #2a2a30;
  --on: #ffd916;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "YakuHanJP", sans-serif;
  --font-en: "YakuHanJP", sans-serif;
  --fs-body: 12px;
  --lh-body: 1.8;
  --container: 1080px;
  --read: 744px;
  --section-y: 168px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 70.6% |
| 主色 | `#19191d` | 5.9% |
| 副色 | `#2b2e2e` | 4.2% |
| 差し色 | `#d4d4d4` | 4% |
| 差し色 | `#ffd916` | 3.7% |
| 差し色 | `#89847a` | 2.2% |

文字色は `#34343a` / `#2a2a30` / `#ffd916` / `#ffffff`。

- 主色 `#ffd916` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 10 | 12 | 0 | 0 |
| `#2a2a30` | 6 | 6 | 0 | 5 |
| `#f0f0f5` | 16 | 0 | 0 | 0 |
| `#ffd916` | 1 | 1 | 0 | 0 |
| `#1cd6da` | 4 | 0 | 2 | 0 |
| `#34343a` | 0 | 79 | 0 | 0 |

- `#ffd916` は面として1箇所、文字として1箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#ffd916` |
| `#f0f0f5` | `#ffd916` |
| `#dcdce1` | `#ffd916` |
| `#ffd916`（主色） | `#ffd916` |

```css
.section{ --on:#ffd916 }                     /* 地の面 */
.section--main{ background:var(--main); color:#2a2a30; --on:#2a2a30 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#2a2a30 }
.section--main .btn--fill{ background:#2a2a30; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: YakuHanJP
- 欧文: YakuHanJP
- ウェイトは 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 88px | 1 |
| 見出し | 40px | 1 |
| 小見出し | 20px | 1.15 |
| リード | 18px | — |
| リード | 16px | — |
| リード | 14px | 1.8 |
| 本文 | 12px | 1.8 |

- 本文は 12px・行間 1.8。

## レイアウト

- コンテンツ幅: 最大 1080px／読ませる段は 744px
- セクションの上下余白: 168 / 104 / 96 / 100px（基本は 168px）
- 並びの間隔: 3 / 15 / 16 / 40px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1500 / 1024 / 769 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 12px / 行間 1.8 | 12px / 行間 1.75 |
| 見出し | 88px | 14px / 行間 1.8 |
| セクションの上下余白 | 168px | 40px |
| 左右の余白 | — | 24px |
| 並びの間隔 | 16px | 6px |

- 本文は 12px → 12px、セクション余白は 168px → 40px（PCの24%）。
- 文字サイズの段は 40 / 14 / 12 / 10 / 8px。

## ボタン

```css
.btn{
  background: #2a2a30; color: #ffffff;
  border-radius: 1440px; padding: 23px 120px; min-height: 48px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #3b37fd; color: #ffffff;
  border: 1px solid #3b37fd;
  border-radius: 1440px; padding: 8px 20px; min-height: 27px;
  font-size: 14px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 840px | `#ffffff` | ヒーロー（画像） | 右 | 左（76:24） |
| 2 | 2660px | `#2a2a30` | 2カラム・画像あり | 左 | 右（64:36） |
| 3 | 960px | `#ffffff` | 1カラム・画像あり | 左 | 見出しの下 |
| 4 | 1080px | `#ffffff` | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 860px | `#ffffff` | 6カラム・画像あり | 左 | 見出しの下 |
| 6 | 760px | `#ffffff` | 1カラム・画像あり | 左 | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（9） / `#f0f0f5`（9） / `#dcdce1`（1） / `#ffd916`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 76:24 / 64:36。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #f0f0f5;
  border-radius: 0px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #3b37fd; color: #ffffff;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 8px 20px; font-size: 14px;
}
```

## 画像

- 39枚使っている
- 比率は 4:3（15枚）、3:2（7枚）、1:1（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ffd916 }
.container{ width:min(100% - 48px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:840px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#2a2a30; --on:#2a2a30 }
.section--main .btn--fill{ background:#2a2a30; color:var(--main) }
.card{ background:#f0f0f5;
  border-radius:0px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#2a2a30; color:#ffffff; border-radius:1440px;
  padding:23px 120px; min-height:48px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:12px; --section-y:40px; --gap:6px; }
  .container{ width:calc(100% - 48px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ffd916` は文字と小さな部品にだけ使う。
- 余白 168px と行間 1.8 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.8 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。
