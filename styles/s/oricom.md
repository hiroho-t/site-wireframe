# 株式会社オリコム ORICOM CO.,LTD. ふうのデザイン

- 出典: https://www.oricom.co.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / モノトーン
- 業種: コーポレートサイト／デザイン･イラスト･写真･映像･制作／企画･開発･マーケティング･コンサルティング

白地に `#d8a438` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 16px・行間 2、セクション間 80px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #d8a438;
  --sub: #d8a438;
  --ink: #000000;
  --ink-rev: #ffffff;
  --on: #d8a438;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Arial", sans-serif;
  --font-en: "Arial", sans-serif;
  --fs-body: 16px;
  --lh-body: 2;
  --container: 1280px;
  --read: 800px;
  --section-y: 80px;
  --gap: 10px;
  --radius: 8px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 73.5% |
| 主色 | `#222222` | 20.2% |
| 副色 | `#d8a438` | 1.6% |

文字色は `#000000` / `#ffffff` / `#f5f5f5` / `#333333`。

- 主色 `#d8a438` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.3) 0px -4px 10px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#222222` | 2 | 0 | 0 | 0 |
| `#ffffff` | 9 | 45 | 1 | 0 |
| `#f5f5f5` | 32 | 10 | 0 | 21 |
| `#000000` | 33 | 165 | 6 | 26 |
| `#dddddd` | 0 | 0 | 6 | 0 |
| `#333333` | 0 | 3 | 0 | 0 |

- `#d8a438` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#d8a438` |
| `#222222` | `#ffffff` |
| `#f5f5f5` | `#d8a438` |

```css
.section{ --on:#d8a438 }                     /* 地の面 */
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }   /* 主色の面では反転 */
```

## 文字

- 和文: Arial
- 欧文: Arial
- ウェイトは 700 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 104px | 1.25 |
| 見出し | 64px | 1.2 |
| 小見出し | 24px | 1.75 |
| リード | 20px | — |
| リード | 18px | 1.75 |
| 本文 | 16px | 2 |
| 補助 | 14px | — |

- 本文は 16px・行間 2。日本語をゆったり組むのがこのサイトの要。詰めると別物になる。

## レイアウト

- コンテンツ幅: 最大 1280px／読ませる段は 800px
- セクションの上下余白: 80 / 40 / 64 / 200px（基本は 80px）
- 並びの間隔: 2 / 8 / 10 / 24px
- 角丸: 8px が基本。大きな面だけ 16px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1024 / 900 / 768 / 736 / 414px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 2 | 16px / 行間 2 |
| 見出し | 104px | 18px / 行間 1.75 |
| セクションの上下余白 | 80px | 24px |
| 左右の余白 | — | 16px |
| 並びの間隔 | 10px | 8px |

- 本文は 16px → 16px、セクション余白は 80px → 24px（PCの30%）。
- 文字サイズの段は 18 / 16 / 14 / 13 / 10px。

## ボタン

```css
.btn{
  background: transparent; color: #ffffff;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 10px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #000000; color: #ffffff;
  border-radius: 8px; padding: 4px 16px; min-height: 32px;
  font-size: 10px; font-weight: 400; letter-spacing: 0;
}
.btn-sub{
  background: #f5f5f5; color: #000000;
  border-radius: 8px; padding: 4px 16px; min-height: 32px;
  font-size: 10px; font-weight: 400; letter-spacing: 0;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 240px | — | ヒーロー（画像） | — | 全面 |
| 2 | 240px | — | 帯・区切り | — | 全面 |
| 3 | 240px | — | 帯・区切り | — | 全面 |
| 4 | 240px | — | 帯・区切り | — | 全面 |
| 5 | 240px | — | 帯・区切り | — | 全面 |
| 6 | 240px | — | 帯・区切り | — | 全面 |
| 7 | 240px | — | 帯・区切り | — | 全面 |
| 8 | 240px | — | 帯・区切り | — | 全面 |
| 9 | 240px | — | 帯・区切り | — | 全面 |
| 10 | 240px | — | 帯・区切り | — | 全面 |

- 全10セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（7） / `#222222`（2） / `#f5f5f5`（2）


## 部品

囲み（4箇所で同じ形）

```css
.card{
  background: transparent;
  border: 1px solid var(--on);   /* 実測は #dddddd。面によって入れ替える */
  border-radius: 16px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #000000; color: #ffffff;
  border-radius: 8px; padding: 4px 16px; font-size: 16px;
}
```

## 丸いもの

角丸は 8px だが、**完全な円は別扱い**で 1 箇所ある（16px×1）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 43枚使っている
- 比率は 16:9（41枚）、1:1（2枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d8a438 }
.container{ width:min(100% - 32px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:240px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#ffffff; --on:#ffffff }
.section--main .btn--fill{ background:#ffffff; color:var(--main) }
.card{ background:transparent; border:1px solid var(--on);
  border-radius:16px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#ffffff; border-radius:0px;
  padding:0px 0px; min-height:32px;
  font-size:10px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:16/9; object-fit:cover }

@media (max-width:900px){
  :root{ --fs-body:16px; --section-y:24px; --gap:8px; }
  .container{ width:calc(100% - 32px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#d8a438` は文字と小さな部品にだけ使う。
- 余白 80px と行間 2 を先に決めてから中身を入れる。
- 画像は 16:9 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 1px の線＋角丸 16px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 2 より詰めない。
- 中途半端な角丸（8px と 16px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
