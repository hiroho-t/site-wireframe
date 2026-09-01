# 社会福祉法人グリーンコープ ふうのデザイン

- 出典: https://www.fukushi-greencoop.or.jp/
- 実測: 2026-09-02／ブラウザ幅1440pxで実際に描かれた値を測ったもの
- 印象: 明朝 / 余白つまった / 角丸 / 色つき
- 業種: コーポレートサイト／福祉･介護／オーソドックス

#f7f4e9 の地に `#d9ccb5` を文字と細部だけで効かせる配色。影を使って浮かせる。本文 14px・行間 1.6、セクション間 52px。

このファイルに書いてあるのは色と寸法だけ。文言・写真・ロゴは真似せず、自分で用意すること。

## そのまま使う変数

```css
:root{
  --bg: #f7f4e9;
  --main: #d9ccb5;
  --sub: #b3977f;
  --ink: #453112;
  --ink-rev: #c54117;
  --on: #d9ccb5;   /* いま乗っている面の上で使う線と文字の色。面ごとに入れ替える */
  --font-ja: "dnp-shuei-gothic-gin-std", sans-serif;
  --font-en: "dnp-shuei-gothic-gin-std", sans-serif;
  --fs-body: 14px;
  --lh-body: 1.6;
  --container: 1200px;
  --read: 652px;
  --section-y: 52px;
  --gap: 65px;
  --radius: 30px;
}
```

## 配色

| 役割 | 色 | 画面に占める割合 |
|---|---|---|
| 地 | `#f7f4e9` | 78.1% |
| 主色 | `#d9ccb5` | 4.4% |
| 副色 | `#b3977f` | 3.8% |
| 差し色 | `#684e47` | 3.8% |
| 差し色 | `#acbeb6` | 3.6% |
| 差し色 | `#d6e1de` | 3.3% |

文字色は `#453112` / `#c54117` / `#ffffff` / `#316fad`。

- 主色 `#d9ccb5` は塗りにはほとんど使わない。文字・線・小さな部品だけで効かせる。
- 影は`rgba(0, 0, 0, 0.25) 0px 4px 4px 0px`。

## 色の使い分け

同じ色でも、面に使うのか文字に使うのかで印象が変わる。実際に数えた箇所数。

| 色 | 面 | 文字 | 枠線 | ボタンの地 |
|---|---|---|---|---|
| `#ffffff` | 5 | 7 | 0 | 1 |
| `#f9f8f3` | 8 | 0 | 0 | 7 |
| `#ca4e26` | 2 | 0 | 0 | 1 |
| `#8c5d90` | 1 | 0 | 0 | 0 |
| `#3a77b4` | 1 | 0 | 0 | 0 |
| `#453112` | 1 | 86 | 2 | 1 |
| `#c54117` | 0 | 17 | 0 | 0 |
| `#316fad` | 0 | 2 | 0 | 0 |

- `#d9ccb5` は

## 文字

- 和文: dnp-shuei-gothic-gin-std
- 欧文: dnp-shuei-gothic-gin-std
- ウェイトは 600 / 500 / 400 が中心。太さで強弱をつけず、大きさで差をつける。

| 用途 | サイズ | 行間 |
|---|---|---|
| 大見出し | 36px | 1 |
| 見出し | 22px | 1.4 |
| 小見出し | 18px | — |
| リード | 17px | 1.55 |
| リード | 16px | 1 |
| 本文 | 14px | 1 |
| 補助 | 12px | — |

- 本文は 14px・行間 1.6。

## レイアウト

- コンテンツ幅: 最大 1200px／読ませる段は 652px
- セクションの上下余白: 52 / 80 / 100 / 44px（基本は 52px）
- 並びの間隔: 46 / 65px
- 角丸: 30px が基本。大きな面だけ 8px。中途半端な角丸を混ぜない
- 画面幅の切り替え: 1600 / 1400 / 1380 / 1340 / 1239px

## スマホ（390px）

同じサイトを390px幅で測り直した値。

| | PC 1440px | スマホ 390px |
|---|---|---|
| 本文 | 14px / 行間 1.6 | 14px / 行間 1 |
| 見出し | 36px | 14px / 行間 1.4 |
| セクションの上下余白 | 52px | 80px |
| 左右の余白 | — | 20px |
| 並びの間隔 | 65px | 20px |

- 本文は 14px → 14px、セクション余白は 52px → 80px（PCの154%）。
- 文字サイズの段は 16 / 15 / 14 / 13 / 12px。

## ボタン

```css
.btn{
  background: transparent; color: #453112;
  border-radius: 0px; padding: 0px 0px; min-height: 39px;
  font-size: 15px; font-weight: 600; letter-spacing: 1.8px;
}
.btn-sub{
  background: #f9f8f3; color: #453112;
  border: 1px solid #453112;
  border-radius: 30px; padding: 11px 16px; min-height: 39px;
  font-size: 15px; font-weight: 600; letter-spacing: 1.8px;
}
.btn-sub{
  background: #453112; color: #ffffff;
  border-radius: 0px; padding: 13px 13px; min-height: 39px;
  font-size: 14px; font-weight: 500; letter-spacing: 1.68px;
}
```

## ページの組み立て

上から順に、実際に並んでいたセクション。

| # | 高さ | 地色 | 中身 | 見出し | 画像 |
|---|---|---|---|---|---|
| 1 | 960px | — | ヒーロー（画像） | 左 | 見出しの下 |
| 2 | 820px | — | 1カラム・画像あり | 中央 | 右（45:55） |
| 3 | 480px | — | 5カラム・画像あり | 中央 | — |
| 4 | 1160px | — | 6カラム・画像あり | 左 | 見出しの下 |
| 5 | 280px | — | 帯・区切り | 左 | — |
| 6 | 660px | — | 4カラム・画像あり | — | 全面 |
| 7 | 780px | — | 1カラム・画像あり | — | 全幅 |

- 全7セクション。
- 使われている面の色: `#ffffff`（1）
- 見出しは左3／中央2。
- 2カラムの分け方は 45:55。半分ずつには割らない。


## 部品

囲みらしい繰り返しの箱は見つからなかった。枠で囲まずに余白だけで区切っている。

ラベル・タグ

```css
.chip{
  background: #f9f8f3; color: #453112;
  border: 1px solid currentColor;
  border-radius: 999px; padding: 11px 18px; font-size: 15px;
}
```

## 丸いもの

角丸は 30px だが、**完全な円は別扱い**で 2 箇所ある（72px×2）。
アイコンの地・点・装飾に使う。角を丸めないルールと、円のモチーフは両立する。

## 画像

- 58枚使っている。うち 10 枚は画面いっぱいに置く
- 比率は 4:3（31枚）、16:9（13枚）、3:4（8枚）
- 角丸 0px。切り抜かず四角のまま置く

## すぐ使う骨格

上の `:root` と合わせて、これをそのまま置けば土台になる。

```css
body{ background:var(--bg); color:var(--ink);
  font-family:var(--font-ja); font-size:var(--fs-body); line-height:var(--lh-body) }

.section{ padding:var(--section-y) 0; --on:#d9ccb5 }
.container{ width:min(100% - 40px, var(--container)); margin-inline:auto }
.read{ max-width:var(--read) }

.hero{ min-height:960px; display:grid; align-content:center }
.btn{ display:inline-flex; align-items:center; justify-content:center;
  background:transparent; color:#453112; border-radius:0px;
  padding:0px 0px; min-height:39px;
  font-size:15px; font-weight:600 }

img{ width:100%; height:auto; border-radius:0px; aspect-ratio:4/3; object-fit:cover }

@media (max-width:768px){
  :root{ --fs-body:14px; --section-y:80px; --gap:20px; }
  .container{ width:calc(100% - 40px) }
}
```

## 守ること

やること

- 地は `#f7f4e9` のまま。主色 `#d9ccb5` は文字と小さな部品にだけ使う。
- 余白 52px と行間 1.6 を先に決めてから中身を入れる。
- 画像は 4:3 に統一し、角丸は 0px。
- 線と文字の色は面ごとに入れ替える（`--on` を面のクラスで上書きする）。固定色で書かない。

やらないこと

- 指定以外の影を足さない。
- 主色を大きな面に塗らない。塗った瞬間に別物になる。
- 本文の行間を 1.6 より詰めない。
- 中途半端な角丸（30px と 8px 以外）を混ぜない。完全な円は別枠なので、消さなくてよい。
