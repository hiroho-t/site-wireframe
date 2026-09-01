# 和歌山市の整形外科 ふうのデザイン

- 出典: https://buyo.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／BtoCのサイト／病院･クリニック･歯医者･医療･薬

白地に `#ff9f1c` を大きな面で置く配色。影も枠線もほとんど使わない。本文 16px・行間 null、セクション間 76px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ff9f1c;
  --sub: #fff3e4;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #ff9f1c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Inter", sans-serif;
  --fs-body: 16px;
  --lh-body: null;
  --container: 600px;
  --read: 784px;
  --section-y: 76px;
  --gap: 8px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 54.5% |
| 主色 | `#ff9f1c` | 17.4% |
| 副色 | `#fff3e4` | 12.3% |
| 差し色 | `#e6d5bc` | 5.2% |
| 差し色 | `#e2b47d` | 2.9% |
| 差し色 | `#e6ece8` | 2.7% |

文字色は `#000000` / `#ffffff` / `#ea5504` / `#595757`。

- 主色 `#ff9f1c` は差し色ではなく**面**で使う。画面の17%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#fff3e4` | 25 | 0 | 0 | 3 |
| `#ffffff` | 11 | 18 | 0 | 4 |
| `#ff9f1c` | 8 | 0 | 0 | 0 |
| `#eff4f7` | 3 | 0 | 0 | 1 |
| `#00a24e` | 1 | 0 | 0 | 0 |
| `#000000` | 0 | 203 | 0 | 0 |
| `#ea5504` | 4 | 11 | 0 | 4 |
| `#595757` | 0 | 3 | 0 | 0 |

- `#ff9f1c` は面として8箇所、文字として0箇所。塗りが主役。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#fff3e4` | `#ff9f1c` |
| `#ffffff`（地） | `#ff9f1c` |
| `#ff9d18` | `#ff9f1c` |
| `#eff4f7` | `#ff9f1c` |

```css
.section{ --on:#ff9f1c }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#000000`。ただしその囲みは `#ff9f1c` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Inter
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 23px | 1.05 |
| 見出し | 21px | 1 |
| 小見出し | 19px | 1 |
| リード | 17px | — |
| 本文 | 16px | — |
| 補助 | 15px | — |
| 注記 | 14px | — |

- 本文は 16px・行間 null。

## レイアウト

- コンテンツ幅: 最大 600px／読ませる段は 784px
- セクションの上下余白: 76 / 44 / 96 / 172px（基本は 76px）
- 並びの間隔: 4 / 6 / 8 / 11px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 960 / 959px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px | 15px / 行間 1.6 |
| 見出し | 23px | 18px / 行間 1 |
| セクションの上下余白 | 76px | 48px |
| 左右の余白 | — | 23px |
| 並びの間隔 | 8px | 8px |

- 本文は 16px → 15px、セクション余白は 76px → 48px（PCの63%）。
- 文字サイズの段は 16 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: #ffffff; color: #ea5504;
  border: 1px;
  border-radius: 5px; padding: 11px 19px; min-height: 40px;
  font-size: 15px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #ea5504; color: #ffffff;
  border-radius: 4px; padding: 8px 8px; min-height: 46px;
  font-size: 15px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #fff3e4; color: #000000;
  border-radius: 4px; padding: 8px 8px; min-height: 46px;
  font-size: 15px; font-weight: 500; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1840px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 1640px | — | 6カラム・画像あり | 中央 | — |
| 3 | 1360px | — | 6カラム・画像あり | 左 | 右（16:84） |
| 4 | 640px | — | 1カラム・画像あり | — | 全幅 |
| 5 | 660px | — | 1カラム・画像あり | 左 | 右（90:10） |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#fff3e4`（17） / `#ffffff`（3） / `#ff9d18`（3） / `#eff4f7`（2）
- 見出しは左3／中央1。
- 2カラムの分け方は 16:84 / 90:10。半分ずつには割らない。


## 部品

囲み（8箇所で同じ形）

```css
.card{
  background: #fff3e4;
  border: 1px solid var(--on);   /* 実測は #000000。面によって入れ替える */
  border-radius: 10px;
  padding: 18px 22px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #8ba6b8;
  border-radius: 999px; padding: 10px 16px; font-size: 13px;
}
```

## 画像

- 39枚使っている。うち 8 枚は画面いっぱいに置く
- 比率は 3:2（18枚）、4:3（8枚）、1:1（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ff9f1c }
.container{ width:min(100% - 46px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1840px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#fff3e4; border:1px solid var(--on);
  border-radius:10px; padding:18px 22px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#ea5504; border-radius:5px;
  padding:11px 19px; min-height:40px;
  font-size:15px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:48px; --gap:8px; }
  .container{ width:calc(100% - 46px) }
}
```

## 守ること

やること

- 地色と主色 `#ff9f1c` の面を全幅で交互に置く。主色は画面の17%を占めるだけ使う。
- 余白 76px と行間 null を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を null より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。
