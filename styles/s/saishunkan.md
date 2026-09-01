# 【公式】再春館製薬所 ふうのデザイン

- 出典: https://www.saishunkan.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／製造業･工業･メーカー･商社･物流／美容･化粧品･コスメ･ケア用品

白地に `#9db7b6` を文字と細部だけで効かせる配色。影も枠線もほとんど使わない。本文 14px・行間 1.4、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #9db7b6;
  --sub: #9db7b6;
  --ink: #333333;
  --ink-rev: #ffffff;
  --on: #9db7b6;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "A1 Mincho", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.4;
  --container: 644px;
  --read: 640px;
  --section-y: 80px;
  --gap: 9px;
  --radius: 10px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 76.6% |
| 主色 | `#c2d2d5` | 8.5% |
| 副色 | `#9db7b6` | 3.9% |
| 差し色 | `#538e81` | 2.5% |
| 差し色 | `#1b463e` | 2% |
| 差し色 | `#2a7367` | 1.5% |

文字色は `#333333` / `#ffffff` / `#5f8092` / `#b7b7b7`。

- 主色 `#9db7b6` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は**使わない**（計測0件）。段差は色面の切り替えだけでつくる。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#f2f5f7` | 6 | 1 | 0 | 1 |
| `#ffffff` | 21 | 43 | 0 | 0 |
| `#5f8092` | 1 | 5 | 1 | 1 |
| `#333333` | 0 | 58 | 0 | 0 |
| `#b7b7b7` | 0 | 2 | 0 | 0 |

- `#9db7b6` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#efefef` | `#9db7b6` |
| `#f2f5f7` | `#9db7b6` |

```css
.section{ --on:#9db7b6 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Yu Gothic Pr6N M（有料）→ 無料で近いのは **Noto Sans JP**、なければ Noto Sans JP
- 欧文: A1 Mincho
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 44px | 1 |
| 見出し | 28px | 1.3 |
| 小見出し | 18px | — |
| リード | 17px | — |
| リード | 16px | 1 |
| リード | 15px | — |
| 本文 | 14px | 1.4 |

- 本文は 14px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 644px／読ませる段は 640px
- セクションの上下余白: 80 / 132 / 40 / 72px（基本は 80px）
- 並びの間隔: 5 / 6 / 9 / 40px
- 角丸: 10px が基本。大きな面だけ 0px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1200 / 992 / 768 / 576px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.4 | 15px / 行間 1.5 |
| 見出し | 44px | 28px / 行間 1.4 |
| セクションの上下余白 | 80px | 60px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 9px | 9px |

- 本文は 14px → 15px、セクション余白は 80px → 60px（PCの75%）。
- 文字サイズの段は 26 / 15 / 14 / 12 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 16px; font-weight: 400; letter-spacing: 0.8px;
}
.btn-sub{
  background: #928d5f; color: #ffffff;
  border-radius: 15px; padding: 10px 10px; min-height: 31px;
  font-size: 11px; font-weight: 400; letter-spacing: 1.1px;
}
.btn-sub{
  background: #5f8092; color: #f7f7f8;
  border-radius: 20px; padding: 12px 12px; min-height: 40px;
  font-size: 12px; font-weight: 400; letter-spacing: 0.6px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 900px | — | ヒーロー | — | — |
| 2 | 900px | — | 1カラム・文字だけ | — | — |
| 3 | 940px | — | 1カラム・文字だけ | — | — |

- 全3セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#efefef`（4） / `#f2f5f7`（1）


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: #efefef;
  border-radius: 10px;
  padding: 0px 0px;
}
```


## 丸いもの

角丸は 10px だが、**完全な円は別扱い**で 21 箇所ある（32px×21）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 32枚使っている
- 比率は 1:1（23枚）、3:2（8枚）、3:4（1枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#9db7b6 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:900px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#efefef;
  border-radius:10px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:32px;
  font-size:16px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:1/1; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:15px; --section-y:60px; --gap:9px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#9db7b6` は文字と小さな部品にだけ使う。
- 余白 80px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 1:1 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 10px でそろえる。

やらないこと

- 影をつけない（このサイトには1つもない）。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.4 より詰めない。
- 中途半端な角丸（10px と 0px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
