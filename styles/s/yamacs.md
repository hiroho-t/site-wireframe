# ヤマックス株式会社 ふうのデザイン

- 出典: https://www.yamacs.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／BtoBのサイト／製造業･工業･メーカー･商社･物流

白地に `#0071b9` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 2、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0071b9;
  --sub: #5e6c7b;
  --ink: #111111;
  --ink-rev: #ffffff;
  --on: #0071b9;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Manrope", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1200px;
  --read: 576px;
  --section-y: 80px;
  --gap: 14px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 62% |
| 主色 | `#0071b9` | 7.7% |
| 副色 | `#5e6c7b` | 5.7% |
| 差し色 | `#111111` | 5.4% |
| 差し色 | `#cfd7dd` | 4% |
| 差し色 | `#475b6e` | 3.6% |

文字色は `#111111` / `#ffffff` / `#b4b4b4` / `#0071b9`。

- 主色 `#0071b9` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(67, 67, 67, 0.12) 0px 4px 4px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 25 | 27 | 0 | 3 |
| `#2f4350` | 1 | 0 | 0 | 0 |
| `#111111` | 4 | 75 | 1 | 0 |
| `#dddddd` | 8 | 0 | 0 | 0 |
| `#f3f8fc` | 1 | 0 | 0 | 0 |
| `#b4b4b4` | 0 | 8 | 0 | 0 |
| `#0071b9` | 2 | 1 | 0 | 0 |

- `#0071b9` は面として2箇所、文字として1箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#0071b9` |
| `#dddddd` | `#0071b9` |
| `#2f4350` | `#ffffff` |
| `#111111` | `#ffffff` |

```css
.section{ --on:#0071b9 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Manrope
- ウェイトは 900 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 40px | 1.75 |
| 見出し | 35px | 1.75 |
| 小見出し | 20px | — |
| リード | 17px | — |
| 本文 | 16px | 2 |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 576px
- セクションの上下余白: 80 / 120 / 144 / 40px（基本は 80px）
- 並びの間隔: 4 / 12 / 14 / 20px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1280 / 782 / 781 / 768 / 600px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 16px / 行間 2 |
| 見出し | 40px | 26px / 行間 1.75 |
| セクションの上下余白 | 80px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 14px | 12px |

- 本文は 16px → 16px、セクション余白は 80px → 24px（PCの30%）。
- 文字サイズの段は 17 / 16 / 15 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 50px;
  font-size: 17px; font-weight: 700; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #111111;
  border-radius: 0px; padding: 0px 0px; min-height: 50px;
  font-size: 17px; font-weight: 700; letter-spacing: 0.8px;
}
.btn-sub{
  background: transparent; color: #111111;
  border-radius: 0px; padding: 0px 0px; min-height: 50px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.8px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1840px | — | ヒーロー（画像） | 左 | 左（28:72） |
| 2 | 1240px | — | 5カラム・画像あり | 中央 | 右（27:73） |
| 3 | 1000px | `#ffffff` | 2カラム・画像あり | 左 | 見出しの下 |
| 4 | 900px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 5 | 980px | `#ffffff` | 2カラム・画像あり | 左 | 見出しの下 |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（7） / `#dddddd`（6） / `#2f4350`（1） / `#111111`（1）
- 見出しは左4／中央1。
- 2カラムの分け方は 28:72 / 27:73。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #dddddd;
  border-radius: 24px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #f3f8fc; color: #111111;
  border-radius: 999px; padding: 3px 12px; font-size: 12px;
}
```

## 画像

- 23枚使っている
- 比率は 1:1（13枚）、4:3（6枚）、3:4（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0071b9 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1840px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#dddddd;
  border-radius:24px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:50px;
  font-size:17px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:782px){
  :root{ --fs-body:16px; --section-y:24px; --gap:12px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#0071b9` は文字と小さな部品にだけ使う。
- 余白 80px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 24px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。
