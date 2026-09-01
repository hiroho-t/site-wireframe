# 大型旋盤チャックの株式会社カワタテック Kawatate Corp. ふうのデザイン

- 出典: https://kawatatec.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／男性向け･男性的なテイスト／製造業･工業･メーカー･商社･物流

#f1f1f1 の地に `#002f7c` を大きな面で置く配色。影も枠線もほとんど使わない。本文 15px・行間 null、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f1f1f1;
  --main: #002f7c;
  --sub: #1d2b44;
  --ink: #333333;
  --ink-rev: #002f7c;
  --on: #002f7c;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Schibsted Grotesk", sans-serif;
  --fs-body: 15px;
  --lh-body: null;
  --container: 1384px;
  --read: 692px;
  --section-y: 40px;
  --gap: 16px;
  --radius: 4px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f1f1f1` | 60.9% |
| 主色 | `#002f7c` | 12.7% |
| 副色 | `#1d2b44` | 6.7% |
| 差し色 | `#5f6f85` | 4.7% |
| 差し色 | `#324f76` | 4.6% |
| 差し色 | `#8fa0b3` | 4.1% |

文字色は `#333333` / `#002f7c` / `#ffffff`。

- 主色 `#002f7c` は差し色ではなく**面**で使う。画面の13%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#002f7c` | 16 | 73 | 6 | 4 |
| `#ebebeb` | 3 | 0 | 0 | 0 |
| `#ffffff` | 20 | 61 | 7 | 2 |
| `#dddddd` | 3 | 0 | 0 | 0 |
| `#202020` | 1 | 0 | 0 | 0 |
| `#333333` | 0 | 23 | 0 | 0 |

- `#002f7c` は文字色として73箇所で使うのが主。面としては16箇所しかないが、1枚が大きく画面の13%を占める。ボタンの地にも使う。枠線にも6箇所。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#002f7c`（主色） | `#002f7c` |
| `#ffffff` | `#002f7c` |
| `#dddddd` | `#002f7c` |
| `#f1f1f1`（地） | `#002f7c` |

```css
.section{ --on:#002f7c }                     /* 地の面 */
.section--main{ background:var(--main); color:#002f7c; --on:#002f7c }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#002f7c }
.section--main .btn--fill{ background:#002f7c; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は ``。ただしその囲みは `#ebebeb` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Schibsted Grotesk
- ウェイトは 400 / 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 28px | — |
| 見出し | 26px | 1.2 |
| 小見出し | 24px | — |
| リード | 17px | — |
| リード | 16px | — |
| 本文 | 15px | — |
| 補助 | 14px | 1.4 |

- 本文は 15px・行間 null。

## レイアウト

- コンテンツ幅: 最大 1384px／読ませる段は 692px
- セクションの上下余白: 40 / 56 / 60 / 76px（基本は 40px）
- 並びの間隔: 5 / 12 / 16 / 46px
- 角丸: 4px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1366 / 921 / 920 / 768 / 767px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 15px | 13px / 行間 1.8 |
| 見出し | 28px | 16px |
| セクションの上下余白 | 40px | 36px |
| 左右の余白 | — | 36px |
| 並びの間隔 | 16px | 8px |

- 本文は 15px → 13px、セクション余白は 40px → 36px（PCの90%）。
- 文字サイズの段は 24 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #1494f6; color: #ffffff;
  border-radius: 48px; padding: 0px 30px; min-height: 30px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.42px;
}
.btn-sub{
  background: #002f7c; color: #ffffff;
  border-radius: 8px; padding: 18px 18px; min-height: 56px;
  font-size: 14px; font-weight: 400; letter-spacing: 0.42px;
}
.btn-sub{
  background: #002f7c; color: #ffffff;
  border-radius: 8px; padding: 17px 18px; min-height: 56px;
  font-size: 14px; font-weight: 500; letter-spacing: 0.42px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 860px | — | ヒーロー（画像） | 左 | 全幅 |
| 2 | 2440px | — | 6カラム・画像あり | 左 | 全幅 |
| 3 | 540px | — | 3カラム・画像あり | 左 | 見出しの下 |
| 4 | 1100px | — | 1カラム・画像あり | 左 | 見出しの下 |
| 5 | 560px | — | 1カラム・画像あり | 右 | 全幅 |
| 6 | 620px | — | 1カラム・画像あり | 左 | — |

- 全6セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#002f7c` の面が 9 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#002f7c`（9） / `#ffffff`（9） / `#dddddd`（3） / `#f1f1f1`（2）
- 見出しは**全部左寄せ**。中央寄せは1つもない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 4px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 4px だが、**完全な円は別扱い**で 12 箇所ある（40px×12）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 55枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 16:9（26枚）、1:1（14枚）、3:2（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#002f7c }
.container{ width:min(100% - 72px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:860px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#002f7c; --on:#002f7c }
.section--main .btn--fill{ background:#002f7c; color:var(--main) }
.card{ background:#ffffff;
  border-radius:4px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#1494f6; color:#ffffff; border-radius:48px;
  padding:0px 30px; min-height:30px;
  font-size:14px; font-weight:500 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:36px; --gap:8px; }
  .container{ width:calc(100% - 72px) }
}
```

## 守ること

やること

- 地色と主色 `#002f7c` の面を全幅で交互に置く。主色は画面の13%を占めるだけ使う。
- 余白 40px と行間 null を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 4px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を null より詰めない。
- 中途半端な角丸（4px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
