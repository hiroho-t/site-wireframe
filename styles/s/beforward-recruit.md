# 採用サイト ふうのデザイン

- 出典: https://corporate.beforward.jp/recruit/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: ゴシック / 余白つまった / 角ばった / 色つき
- 業種: 採用サイト／製造業･工業･メーカー･商社･物流／車･乗り物･モビリティ

#d45608 の地に `#d45608` を大きな面で置く配色。影を使って浮かせる。本文 16px・行間 1.5、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #d45608;
  --main: #d45608;
  --sub: #e07e35;
  --ink: #ffffff;
  --ink-rev: #db680f;
  --on: #d45608;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "Noto Sans JP", sans-serif;
  --font-en: "sans-serif", sans-serif;
  --fs-body: 16px;
  --lh-body: 1.5;
  --container: 1200px;
  --read: 644px;
  --section-y: 52px;
  --gap: 24px;
  --radius: 0px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#d45608` | 78.3% |
| 主色 | `#ffffff` | 8.6% |
| 副色 | `#e07e35` | 2.4% |
| 差し色 | `#f3ebe5` | 2.2% |
| 差し色 | `#eec2a3` | 2.1% |
| 差し色 | `#e7a06c` | 2.1% |

文字色は `#ffffff` / `#db680f` / `#000000` / `#004d8a`。

- 主色 `#d45608` は差し色ではなく**面**で使う。画面の78%を占めている。
- 影は`rgba(0, 0, 0, 0.5) 0px 5px 15px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 6 | 111 | 6 | 4 |
| `#db680f` | 2 | 17 | 2 | 2 |
| `#e66b02` | 3 | 0 | 3 | 3 |
| `#000000` | 0 | 2 | 0 | 0 |
| `#004d8a` | 0 | 1 | 0 | 0 |

- `#d45608` は

## 文字

- 和文: Noto Sans JP
- 欧文: sans-serif
- ウェイトは 900 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 65px | 1.1 |
| 見出し | 54px | 1.1 |
| 小見出し | 32px | 1.1 |
| リード | 24px | — |
| リード | 18px | — |
| 本文 | 16px | 1.5 |
| 補助 | 15px | — |

- 本文は 16px・行間 1.5。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 644px
- セクションの上下余白: 52 / 80 / 200 / 40px（基本は 52px）
- 並びの間隔: 8 / 16 / 24 / 32px
- 角丸: 0px が基本。大きな面だけ 2px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1090 / 767 / 344px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 16px / 行間 1.5 | 14px / 行間 1.5 |
| 見出し | 65px | 30px / 行間 1.1 |
| セクションの上下余白 | 52px | 28px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 24px | 8px |

- 本文は 16px → 14px、セクション余白は 52px → 28px（PCの54%）。
- 文字サイズの段は 18 / 16 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: #e66b02; color: #ffffff;
  border: 1px solid #e66b02;
  border-radius: 0px; padding: 6px 14px; min-height: 36px;
  font-size: 14px; font-weight: 700; letter-spacing: 0.64px;
}
.btn-sub{
  background: #ffffff; color: #db680f;
  border: 3px solid #ffffff;
  border-radius: 2px; padding: 0px 28px; min-height: 50px;
  font-size: 15px; font-weight: 900; letter-spacing: 0.64px;
}
.btn-sub{
  background: #ffffff; color: #db680f;
  border: 3px solid #ffffff;
  border-radius: 2px; padding: 0px 16px; min-height: 60px;
  font-size: 15px; font-weight: 900; letter-spacing: 0.64px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 760px | — | ヒーロー（画像） | — | 全面 |
| 2 | 1080px | — | 1カラム・画像あり | 中央 | 見出しの下 |
| 3 | 1200px | — | 1カラム・画像あり | 左 | 右（62:38） |
| 4 | 1520px | — | 3カラム・画像あり | 中央 | 左（67:33） |
| 5 | 620px | — | 1カラム・画像あり | — | 全幅 |
| 6 | 420px | — | 1カラム・画像あり | 左 | 右（47:53） |
| 7 | 260px | — | 6カラム・画像あり | — | 全面 |
| 8 | 500px | — | 1カラム・画像あり | 中央 | 右（85:15） |
| 9 | 760px | — | 3カラム・画像あり | 中央 | 左（62:38） |

- 全9セクション、すべて全幅。中央に寄せた箱を積むのではなく、色面を全幅で切り替えながら進む。
- 使われている面の色: `#ffffff`（2）
- 見出しは左2／中央4。
- 2カラムの分け方は 62:38 / 67:33 / 47:53 / 85:15 / 62:38。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。


## 画像

- 86枚使っている。うち 6 枚は画面いっぱいに置く
- 比率は 3:2（34枚）、1:1（16枚）、16:9（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#db680f }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:760px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:#e66b02; color:#ffffff; border-radius:0px;
  padding:6px 14px; min-height:36px;
  font-size:14px; font-weight:700 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:3/2; object-fit:cover }

@media (max-width:767px){
  :root{ --fs-body:14px; --section-y:28px; --gap:8px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地色と主色 `#d45608` の面を全幅で交互に置く。主色は画面の78%を占めるだけ使う。
- 余白 52px と行間 1.5 を先に決めてから中身を入れる。
- 画像は 3:2 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を線やボタンだけの差し色に使わない。面で使わないと別物になる。
- 本文の行間を 1.5 より詰めない。角を丸めない。
- 中途半端な角丸（0px と 2px 以外）を混ぜない。
