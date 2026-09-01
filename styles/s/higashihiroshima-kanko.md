# 東広島おでかけ観光サイト「ヒガシル」 ふうのデザイン

- 出典: https://higashihiroshima-kanko.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白ふつう / 角ばった / 色つき
- 業種: ポータルサイト･メディア･情報サイト／旅行･観光･遊び／体験･交流

白地に `#987070` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 17px・行間 1.5、セクション間 84px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #ffffff;
  --main: #987070;
  --sub: #c8d0c2;
  --ink: #44575f;
  --ink-rev: #000000;
  --on: #987070;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "Poppins", sans-serif;
  --fs-body: 17px;
  --lh-body: 1.5;
  --container: 632px;
  --read: 1160px;
  --section-y: 84px;
  --gap: 47px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#ffffff` | 92.8% |
| 主色 | `#987070` | 4.2% |
| 副色 | `#c8d0c2` | 2% |

文字色は `#44575f` / `#000000` / `#1e2627` / `#121619`。

- 主色 `#987070` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.1) 0px 2.10835px 12.6501px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 95 | 32 | 22 | 44 |
| `#fff7ee` | 7 | 0 | 0 | 3 |
| `#f3f3f3` | 6 | 0 | 0 | 0 |
| `#0f68a5` | 25 | 42 | 25 | 7 |
| `#878996` | 2 | 0 | 0 | 0 |
| `#44575f` | 0 | 89 | 6 | 0 |
| `#000000` | 0 | 84 | 0 | 0 |
| `#1e2627` | 1 | 85 | 0 | 0 |
| `#121619` | 0 | 34 | 0 | 0 |

- `#987070` は

## 面と線の関係

線・文字・囲みの色は固定ではない。**乗っている面によって入れ替える。**

| 面 | その上に置く線と文字 |
|---|---|
| `#ffffff`（地） | `#987070` |
| `#ebf3f6` | `#987070` |
| `#878996` | `#000000` |
| `#f8f6ed` | `#987070` |

```css
.section{ --on:#987070 }                     /* 地の面 */
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.card{ border:1px solid var(--on) }
.btn--fill{ background:var(--main); color:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }   /* 主色の面では反転 */
```

- 実測した囲みの線は `#ffffff`。ただしその囲みは `#ffffff` の面の上にしか無かった。**別の面に置くときは、その面の反対色にする。**

## 文字

- 和文: Noto Sans JP
- 欧文: Poppins
- ウェイトは 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 25px | — |
| 見出し | 23px | — |
| 小見出し | 21px | — |
| リード | 19px | — |
| 本文 | 17px | 1.5 |
| 補助 | 15px | — |

- 本文は 17px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 632px／読ませる段は 1160px
- セクションの上下余白: 84 / 72 / 48 / 52px（基本は 84px）
- 並びの間隔: 11 / 15 / 47 / 63px
- 角丸: 0px が基本。大きな面だけ 11px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 769 / 768 / 767 / 640 / 480px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 17px / 行間 1.5 | 14px |
| セクションの上下余白 | 84px | 40px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 47px | 14px |

- 本文は 17px → 14px、セクション余白は 84px → 40px（PCの48%）。
- 文字サイズの段は 22 / 20 / 18 / 16 / 14px。

## ボタン

```css
.btn{
  background: #ffffff; color: #44575f;
  border-radius: 11px; padding: 5px 16px; min-height: 33px;
  font-size: 15px; font-weight: 400; letter-spacing: 0.737921px;
}
.btn-sub{
  background: transparent; color: #0f68a5;
  border: 1px solid #0f68a5;
  border-radius: 0px; padding: 0px 0px; min-height: 32px;
  font-size: 17px; font-weight: 700; letter-spacing: 0.737921px;
}
.btn-sub{
  background: #ffffff; color: #0f68a5;
  border-radius: 50%; padding: 0px 0px; min-height: 69px;
  font-size: 34px; font-weight: 700; letter-spacing: 0.737921px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 980px | `#ebf3f6` | ヒーロー（画像） | 中央 | 見出しの下 |
| 2 | 880px | — | 6カラム・画像あり | 中央 | 見出しの下 |
| 3 | 960px | `#0f68a5` | 4カラム・画像あり | 左 | 見出しの下 |
| 4 | 1620px | `#fff7ee` | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 1000px | `#ffffff` | 2カラム・画像あり | 中央 | 見出しの下 |
| 6 | 760px | `#f8f6ed` | 5カラム・画像あり | 左 | 見出しの下 |
| 7 | 780px | `#f8f6ed` | 4カラム・画像あり | 左 | 見出しの下 |
| 8 | 580px | `#ffffff` | 1カラム・文字だけ | 左 | — |
| 9 | 300px | `#ffffff` | 帯・区切り | 左 | 右（44:56） |
| 10 | 440px | `#ffffff` | 2カラム・画像あり | 左 | 右（14:86） |
| 11 | 1500px | `#f3f3f3` | 6カラム・画像あり | 右 | 左（47:53） |
| 12 | 680px | — | 1カラム・文字だけ | 左 | — |
| 13 | 1360px | — | 5カラム・画像あり | 中央 | 見出しの下 |
| 14 | 740px | — | 6カラム・画像あり | — | 全面 |
| 15 | 300px | — | 帯・区切り | — | 全面 |

- 全15セクション。
- 使われている面の色: `#ffffff`（30） / `#ebf3f6`（2） / `#878996`（2） / `#f8f6ed`（2）
- 見出しは左8／中央4。
- 2カラムの分け方は 44:56 / 14:86 / 47:53。半分ずつには割らない。


## 部品

囲み（9箇所で同じ形）

```css
.card{
  background: transparent;
  border: 5px solid var(--on);   /* 実測は #ffffff。面によって入れ替える */
  border-radius: 50px;
  padding: 0px 0px;
}
```

ラベル・タグ

```css
.chip{
  background: #ffffff; color: #1e2627;
  border-radius: 11px; padding: 5px 16px; font-size: 15px;
}
```

## 丸いもの

角丸は 0px だが、**完全な円は別扱い**で 74 箇所ある（32px×20、48px×18、72px×10）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 149枚使っている
- 比率は 3:2（103枚）、1:1（26枚）、2:3（6枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#987070 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:980px; display:grid; align-content:center }
.section--main{ background:var(--main); color:#000000; --on:#000000 }
.section--main .btn--fill{ background:#000000; color:var(--main) }
.card{ background:transparent; border:5px solid var(--on);
  border-radius:50px; padding:0px 0px }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#ffffff; color:#44575f; border-radius:11px;
  padding:5px 16px; min-height:33px;
  font-size:15px; font-weight:400 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:769px){
  :root{ --fs-body:14px; --section-y:40px; --gap:14px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#ffffff` のまま。主色 `#987070` は文字と小さな部品にだけ使う。
- 余白 84px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。
- 囲みは 5px の線＋角丸 50px でそろえる。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 11px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
