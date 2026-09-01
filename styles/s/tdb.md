# 株式会社 帝国データバンク[TDB] ふうのデザイン

- 出典: https://www.tdb.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: コーポレートサイト／レスポンシブ／1カラム

白地に `#0044d1` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.4、セクション間 64px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #0044d1;
  --sub: #0044d1;
  --ink: #26282d;
  --ink-rev: #ffffff;
  --on: #0044d1;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Nunito Sans", sans-serif;
  --font-en: "Nunito Sans", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.4;
  --container: 1240px;
  --read: 1028px;
  --section-y: 64px;
  --gap: 16px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 63.9% |
| 主色 | `#1e2025` | 12.2% |
| 副色 | `#0044d1` | 4.5% |
| 差し色 | `#76a0b9` | 4.3% |
| 差し色 | `#eceff5` | 3.9% |
| 差し色 | `#0032b2` | 2.5% |

文字色は `#26282d` / `#ffffff` / `#00339e` / `#6f6f6f`。

- 主色 `#0044d1` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(255, 255, 255) 0px 0px 20px 22px inset`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 36 | 127 | 2 | 2 |
| `#f8f8f8` | 12 | 0 | 0 | 5 |
| `#1e2025` | 1 | 0 | 0 | 0 |
| `#e5ebf5` | 3 | 0 | 0 | 0 |
| `#00339e` | 9 | 61 | 0 | 8 |
| `#26282d` | 0 | 202 | 0 | 0 |
| `#6f6f6f` | 0 | 32 | 0 | 0 |

- `#0044d1` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#e9e9e9` | `#0044d1` |
| `#ffffff`（地） | `#0044d1` |
| `#f8f8f8` | `#0044d1` |
| `#e6e8ef` | `#0044d1` |

```css
.section{ --on:#0044d1 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Nunito Sans
- 欧文: Nunito Sans
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 32px | 1.54 |
| 見出し | 21px | — |
| 小見出し | 16px | 1.75 |
| 本文 | 14px | 1.4 |
| 補助 | 13px | — |
| 注記 | 12px | 1.8 |
| 注記 | 11px | — |

- 本文は 14px・行間 1.4。

## レイアウト

- コンテンツ幅: 最大 1240px／読ませる段は 1028px
- セクションの上下余白: 64 / 96 / 80 / 32px（基本は 64px）
- 並びの間隔: 6 / 8 / 16 / 32px
- 角丸: 0px が基本。大きな面だけ 15px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1220 / 1160 / 1024 / 768px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.4 | 13px / 行間 1.6 |
| 見出し | 32px | 24px / 行間 1.54 |
| セクションの上下余白 | 64px | 24px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 16px | 8px |

- 本文は 14px → 13px、セクション余白は 64px → 24px（PCの38%）。
- 文字サイズの段は 24 / 16 / 14 / 13 / 11px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 9999px; padding: 2px 2px; min-height: 67px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #00339e; color: #ffffff;
  border-radius: 9999px; padding: 22px 28px; min-height: 76px;
  font-size: 16px; font-weight: 700; letter-spacing: 0;
}
.btn-sub{
  background: #f8f8f8; color: #00339e;
  border-radius: 2px; padding: 4px 6px; min-height: 26px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.65px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 720px | `#00339e` | ヒーロー（画像） | — | 全幅 |
| 2 | 220px | `#e6ebf5` | 帯・区切り | 中央 | — |
| 3 | 600px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 4 | 220px | — | 帯・区切り | 中央 | — |
| 5 | 820px | — | 4カラム・画像あり | 中央 | 見出しの下 |
| 6 | 700px | `#f8f8f8` | 6カラム・画像あり | 中央 | 見出しの下 |
| 7 | 700px | — | 4カラム・画像あり | 中央 | — |
| 8 | 700px | `#f8f8f8` | 4カラム・画像あり | 中央 | — |
| 9 | 900px | — | 2カラム・画像あり | 中央 | 見出しの下 |
| 10 | 620px | — | 2カラム・画像あり | — | 全幅 |
| 11 | 840px | — | 2カラム・画像あり | 左 | 見出しの下 |
| 12 | 120px | — | 帯・区切り | — | 全幅 |

- 全12セクション。
- 使われている面の色: `#e9e9e9`（17） / `#ffffff`（16） / `#f8f8f8`（2） / `#e6e8ef`（1）
- 見出しは左2／中央7。


## 部品

囲み（10箇所で同じ形）

```css
.card{
  background: #e9e9e9;
  border-radius: 16px;
  padding: 2px 2px;
}
```


## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 11 箇所ある（40px×6、64px×3、24px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 30枚使っている。うち 2 枚は画面いっぱいに置く
- 比率は 16:9（14枚）、1:1（7枚）、3:2（7枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#0044d1 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:720px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:#e9e9e9;
  border-radius:16px; padding:2px 2px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:9999px;
  padding:2px 2px; min-height:67px;
  font-size:16px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:13px; --section-y:24px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#0044d1` は文字と小さな部品にだけ使う。
- 余白 64px と行間 1.4 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 塗り＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.4 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 15px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
