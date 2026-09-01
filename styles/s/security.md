# 防犯カメラ・セキュリティシステムの導入なら株式会社セキュリティ【セキュリティハウス姫路】 ふうのデザイン

- 出典: https://security-himeji.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: コーポレートサイト／ブランドサイト･サービスサイト／ビルメンテナンス･清掃･警備

白地に `#003894` を大きな面で置く配色。影も枠線もほとんど使わない。本文 14px・行間 2、セクション間 40px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #003894;
  --sub: #e6ecec;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #003894;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Kaku Gothic New", sans-serif;
  --font-en: "Lexend", sans-serif;
  --fs-body: 14px;
  --lh-body: 2;
  --container: 1380px;
  --read: 720px;
  --section-y: 40px;
  --gap: 11px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 56.9% |
| 主色 | `#003894` | 14.8% |
| 副色 | `#e6ecec` | 10.3% |
| 差し色 | `#c3c7ca` | 3.4% |
| 差し色 | `#6d7b8f` | 2.9% |
| 差し色 | `#1c3155` | 2.7% |

文字色は `#000000` / `#ffffff` / `#003894` / `#df3101`。

- 主色 `#003894` は差し色ではなく**面**で使う。画面の15%を占めている。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#003894` | 13 | 68 | 0 | 1 |
| `#ffffff` | 20 | 44 | 0 | 1 |
| `#f7f7f7` | 4 | 0 | 0 | 0 |
| `#e6ecec` | 3 | 0 | 0 | 0 |
| `#df3101` | 2 | 4 | 0 | 1 |
| `#000000` | 6 | 130 | 0 | 0 |

- `#003894` は文字色として68箇所で使うのが主。面としては13箇所しかないが、1枚が大きく画面の15%を占める。ボタンの地にも使う。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#003894` |
| `#003894`（主色） | `#ffffff` |
| `#e6ecec` | `#003894` |
| `#2e3737` | `#ffffff` |

```css
.section{ --on:#003894 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Kaku Gothic New
- 欧文: Lexend
- ウェイトは 400 / 700 / 500 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 42px | 1.5 |
| 見出し | 30px | 1 |
| 小見出し | 18px | — |
| リード | 17px | 1.6 |
| リード | 16px | — |
| リード | 15px | — |
| 本文 | 14px | 2 |

- 本文は 14px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1380px／読ませる段は 720px
- セクションの上下余白: 40 / 44 / 52 / 68px（基本は 40px）
- 並びの間隔: 5 / 8 / 11 / 23px
- 角丸: 0px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 800 / 768 / 640 / 480 / 450px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 2 | 16px |
| 見出し | 42px | 16px |
| セクションの上下余白 | 40px | 48px |
| 左右の余白 | — | 31px |
| 並びの間隔 | 11px | 8px |

- 本文は 14px → 16px、セクション余白は 40px → 48px（PCの120%）。
- 文字サイズの段は 18 / 17 / 16 / 15 / 13px。

## ボタン

```css
.btn{
  background: #ffffff; color: #ffffff;
  border-radius: 0px; padding: 4px 4px; min-height: 61px;
  font-size: 30px; font-weight: 700; letter-spacing: 0.590476px;
}
.btn-sub{
  background: #003894; color: #ffffff;
  border-radius: 6px; padding: 0px 0px; min-height: 53px;
  font-size: 30px; font-weight: 700; letter-spacing: 0.590476px;
}
.btn-sub{
  background: #bc2900; color: #ffffff;
  border-radius: 95px; padding: 4px 4px; min-height: 61px;
  font-size: 17px; font-weight: 700; letter-spacing: 0.342857px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 1940px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 1960px | `#003894` | 3カラム・画像あり | 左 | 右（35:65） |
| 3 | 920px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 4 | 1700px | `#f7f7f7` | 5カラム・画像あり | 中央 | 全幅 |
| 5 | 500px | — | 3カラム・画像あり | 左 | — |

- 全5セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 主色 `#003894` の面が 3 箇所。地色と主色の面を交互に置くのがリズムのつくり方。
- 使われている面の色: `#ffffff`（7） / `#003894`（3） / `#e6ecec`（2） / `#2e3737`（1）
- 見出しは左3／中央2。
- 2カラムの分け方は 35:65。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: #ffffff;
  border-radius: 0px;
  padding: 4px 4px;
}
```


## 画像

- 63枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 1:1（35枚）、4:3（10枚）、3:2（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#003894 }
.container{ width:min(100% - 62px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:1940px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#ffffff;
  border-radius:0px; padding:4px 4px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#ffffff; border-radius:0px;
  padding:4px 4px; min-height:61px;
  font-size:30px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:800px){
  :root{ --fs-body:16px; --section-y:48px; --gap:8px; }
  .container{ width:calc(100% - 62px) }
}
```

## 守ること

やること

- 地色と主色 `#003894` の面を全幅で交互に置く。主色は画面の15%を占めるだけ使う。
- 余白 40px と行間 2 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 0px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 2 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 8px 以外）を混ぜない。
