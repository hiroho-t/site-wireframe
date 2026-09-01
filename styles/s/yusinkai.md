# 医療法人優心会 大塚歯科医院 ふうのデザイン

- 出典: https://www.yusinkai.or.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ひろい / 角ばった / 色つき
- 業種: ブランドサイト･サービスサイト／病院･クリニック･歯医者･医療･薬／レスポンシブ

白地に `#ff7360` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.7、セクション間 172px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #ff7360;
  --sub: #d2cdd3;
  --ink: #555555;
  --ink-rev: #ff7360;
  --on: #ff7360;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Zen Maru Gothic", sans-serif;
  --font-en: "Robot", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.7;
  --container: 984px;
  --read: 976px;
  --section-y: 172px;
  --gap: 22px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 77.9% |
| 主色 | `#e9e9ef` | 8.1% |
| 副色 | `#d2cdd3` | 6.2% |
| 差し色 | `#929a97` | 2.5% |
| 差し色 | `#161819` | 2.2% |
| 差し色 | `#bbaca4` | 1.7% |

文字色は `#555555` / `#ff7360` / `#ffffff`。

- 主色 `#ff7360` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#effaf8` | 1 | 0 | 0 | 0 |
| `#ffffff` | 3 | 4 | 0 | 1 |
| `#555555` | 4 | 115 | 16 | 0 |
| `#ff7360` | 0 | 3 | 0 | 0 |

- `#ff7360` は文字色として3箇所で使うのが主。面としては0箇所しかないが、1枚が大きく画面の0%を占める。ボタンの地には使っていない。

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#ff7360` |
| `#effaf8` | `#ff7360` |

```css
.section{ --on:#ff7360 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ff7360; --on:#ff7360 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ff7360 }
.section--main .btn--fill{ background:#ff7360; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Zen Maru Gothic
- 欧文: Robot
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 16px | — |
| 見出し | 15px | — |
| 本文 | 14px | 1.7 |
| 補助 | 13px | — |
| 注記 | 12px | — |
| 注記 | 10px | — |

- 本文は 14px・行間 1.7。

## レイアウト

- コンテンツ幅: 最大 984px／読ませる段は 976px
- セクションの上下余白: 172 / 56 / 148px（基本は 172px）
- 並びの間隔: 11 / 19 / 22 / 40px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.7 | 14px / 行間 1.85 |
| セクションの上下余白 | 172px | 40px |
| 左右の余白 | — | 30px |
| 並びの間隔 | 22px | 20px |

- 本文は 14px → 14px、セクション余白は 172px → 40px（PCの23%）。
- 文字サイズの段は 16 / 15 / 14 / 12 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #555555;
  border-radius: 0px; padding: 0px 11px; min-height: 28px;
  font-size: 15px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #ffffff; color: #555555;
  border: 1px solid #555555;
  border-radius: 15px; padding: 4px 10px; min-height: 38px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.29696px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー（画像） | — | — |
| 2 | 4500px | — | 6カラム・画像あり | 右 | 左（63:37） |
| 3 | 720px | — | 1カラム・画像あり | — | — |

- 全3セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（1） / `#effaf8`（1）
- 見出しは**全部左寄せ**。中央寄せは1つもない。
- 2カラムの分け方は 63:37。半分ずつには割らない。


## 部品

囲み（6箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #555555。面によって入れ替える */
  border-radius: 10px;
  padding: 28px 28px;
}
```


## 丸いもの

角丸は 10px だが、**完全な円は別扱い**で 4 箇所ある（40px×4）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 14枚使っている
- 比率は 1:1（6枚）、2:3（3枚）、4:3（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#ff7360 }
.container{ width:min(100% - 60px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ff7360; --on:#ff7360 }
.section--main .btn--fill{ background:#ff7360; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:10px; padding:28px 28px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#555555; border-radius:0px;
  padding:0px 11px; min-height:28px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:40px; --gap:20px; }
  .container{ width:calc(100% - 60px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#ff7360` は文字と小さな部品にだけ使う。
- 余白 172px と行間 1.7 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.7 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
