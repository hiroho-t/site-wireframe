---
name: site-wireframe
description: Webサイトのセクション単位のワイヤーフレームをHTMLで作るときに使う。MV（メインビジュアル）・コンセプト・会社紹介・レポート・会社情報・インタビュー・サービス・パートナー・導入事例・お知らせ・採用・お問い合わせ・フッターのセクション型を1440×800のアートボードで持つ。「サイトのワイヤーを作って」「MVのレイアウト案がほしい」「お知らせ一覧の構成を」「フッターのワイヤーを」などの依頼で必ず使うこと。スクリーンショットを渡されてレイアウトを実測・トレースする場面でも使う。明示的に「スキル」と言われなくても、コーポレートサイト・サービスサイトのセクション構成をHTMLで組む場面では積極的に発火させる。
---

# サイトワイヤーフレーム テンプレート集

Webサイトのセクション型を収録している。実在のサイトのスクリーンショットからレイアウトだけを採寸・再現し、テキストはすべてダミー化してある。**新規にゼロから組まず、まずこの中から近い型を選んで流用する。**

## 使い方

1. 下のカタログから、目的とテキスト量に合う型を選ぶ
2. 該当ファイル（例 `mv/mv-001.html`）を読む
3. コピーして、テキストと項目数だけ差し替える
4. 座標・フォントサイズ・配色は原則そのまま。要素が増減するときだけ、同じリズム（行間・余白の刻み）で調整する

新しいスクリーンショットからトレースする場合は、末尾の「新規セクションの作り方」に従う。

## 共通仕様

- セクションは **1440×800 固定**。`.stage` の中の `.wf` に絶対配置し、JSでビューポートに合わせて等倍スケールする
- **CSSは共通ファイルにせず、各HTMLの `<style>` に直書きする**（1ファイル単体で完結させる）。外部読み込みは Google Fonts と Font Awesome の CDN のみ
- **コンテンツ幅は基本 90%**＝ `1440 × 0.9 = 1296px`、左右余白はそれぞれ `72px`。CSS変数 `--wf-content` / `--wf-pad` を使い、数値を直書きしない
- **背景は基本 白**。グレーや黒に変えるのは、そのままだと視認性に問題が出る場合だけ（例：全面画像の上に白抜き文字が乗るMV）
- 色は **白・黒・グレーのみ**
- 和文 **Noto Sans JP** ／ 欧文・数字 **Poppins**（`class="en"`）／ アイコン **Font Awesome 6 無料版**
- 写真・図版はグレーの矩形（`.img`）に置き換える。役割がある場合は `data-l="THUMB"` のようにラベルを付ける（右下に小さく出る）
- ロゴは `LOGO` テキスト（Poppins）。シンボルもグレーボックスも置かない
- 本文はダミーテキスト。**横並びで位置が連動する要素（ヘッダーナビ等）は元の文字数に合わせる**
- コピーライトは `© 20XX Company.` で統一
- 装飾（写真・グラデーション・影・ホバー・アニメーション）は再現しない。角丸と罫線だけ実測で合わせる
- **スライドショー・カルーセル・ティッカー・マーキーは動かさない。中央に静止させた状態でレイアウトだけを見せる**（見切れさせない）

### 縦位置のルール

- **MV とフッター以外のセクションは、アートボードの上下中央に配置する**
  （コンテンツの高さを出し、`top = (800 − コンテンツ高さ) ÷ 2`）
- **MV** は下端揃え（見出し・リード文はアートボード下辺基準）
- **フッター** は実測どおりの縦位置

### 実測から確定している基準サイズ

| 用途 | サイズ | 行間 |
|---|---|---|
| ヘッダーナビ | 12px / 500 | — |
| MV 大見出し | 56px / 700・letter-spacing 0.14em | 70px |
| MV リード文 | 12px | 24px |
| セクション見出し（和文） | 40px / 700 | 1 |
| セクション見出し（欧文 `/ Xxx`） | 24px / 600 | 1 |
| 一覧の日付・カテゴリ・タイトル | 14px | — |
| ボタン内テキスト（小 / 大） | 12px / 14px | — |
| 住所・SNS・コピーライト | 13px | 22.5px |
| 電話番号 | 36px / 500 | 1 |

### 実測済みの共通レイアウト値

| 項目 | 値 |
|---|---|
| コンテンツ枠 | left 72 / 幅 1296（右端 1368） |
| ヘッダー | top 14 / 高さ 60。ロゴ左寄せ、ナビ＋ハンバーガーを右寄せ（gap 30） |
| ヘッダー：白ピルナビ | 794×60 / radius 30、内側 padding-left 25、項目間 gap 32 |
| ヘッダー：CTA（黒） | ピル内 left 660 / top 12 / 117×36 |
| ヘッダー：ハンバーガー | 60×60 円（右端 1368 揃え） |
| 一覧1行（news） | 高さ 91 / 下罫線 1px。行内オフセット：日付 0・カテゴリ 106・タイトル 300 |
| バナー3カラム（footer） | 412×205 / gap 30 / radius 24 |

## カタログ

### MV `mv/`

| id | 背景 | 構造 |
|---|---|---|
| mv-001 | 全面画像（グレー） | 左上ロゴ、右上に白ピルナビ＋黒CTA＋ハンバーガー。左下に大見出し2行、その下に縦罫線つきのリード文3行＋スライドカウンター |
| mv-002 | 白 | 高さ100のヘッダー（ロゴ左／ナビ＋黒ピルCTA右）。中央に64pxのキャッチコピー1行＋サブ、下端にアイコン付きティッカー（中央静止） |
| mv-003 | 明グレー | 高さ101・下罫線のヘッダー（ロゴ／ナビ／言語切替／角型CTA／ハンバーガー）。左に80pxの見出し2行＋サブ、右に大きな画像枠、下端に白のお知らせバー |

### コンセプト `concept/`

| id | 背景 | 構造 |
|---|---|---|
| concept-001 | 白 | 英字ラベル＋36pxのリード3行（強調部分だけグレー）。下段は左に小見出し、右に幅403の補足テキスト |

### 会社紹介 `about/`

| id | 背景 | 構造 |
|---|---|---|
| about-001 | 白 | ドット付きラベル＋英字70pxの見出し。下を2カラムに分け、左に36pxの和文リード2行、右に19px lh37.5 の長文3ブロック |

### レポート `report/`

| id | 背景 | 構造 |
|---|---|---|
| report-001 | 白 | ラベル＋英字70pxの見出し＋18pxのリード2行。下に幅いっぱい・角丸24の大きなビジュアルカード |

### 会社情報 `company/`

| id | 背景 | 構造 |
|---|---|---|
| company-001 | 白 | 左に英字70pxの見出し＋30pxの和文2行＋リード、その下に「サムネ70角＋和文＋英字＋矢印」の103pxリンク行3件。右に大きな画像枠 |

### インタビュー `interview/`

| id | 背景 | 構造 |
|---|---|---|
| interview-001 | 白 | 上にアイキャッチ文＋英字90pxの大見出し＋リード。下に「写真477×330＋テキスト358」のカルーセル1件を中央に静止表示 |

### サービス `service/`

| id | 背景 | 構造 |
|---|---|---|
| service-001 | 白 | 左上に英字90pxの見出し。右73%のカラムに「英字52px＋和文ラベル」の小見出しと、番号8%／タイトル41%／本文44%の行リスト3件（下罫線） |

### パートナー `partner/`

| id | 背景 | 構造 |
|---|---|---|
| partner-001 | 白 | 上に英字90pxの見出し、下に右寄せの大きな画像枠（ロゴ一覧などを想定） |

### 導入事例 `case/`

| id | 背景 | 構造 |
|---|---|---|
| case-001 | 白 | コンパクトな見出し＋3カラムのカード（サムネ／タグ／タイトル／社名・日付）。3枚とも開始位置を揃える |

### 採用 `career/`

| id | 背景 | 構造 |
|---|---|---|
| career-001 | 白 | ラベル＋英字70pxの見出し＋36pxの和文2行、右上に角型ボタン。下に写真4枚のスライダー（中央静止） |

### お問い合わせ `contact/`

| id | 背景 | 構造 |
|---|---|---|
| contact-001 | 白（濃色パネル） | 幅いっぱい・角丸16の濃色パネル。左にラベル＋英字70pxの見出し＋リード2行、右に白い角型ボタン |

### お知らせ `news/`

| id | 背景 | 構造 |
|---|---|---|
| news-001 | 白 | 左上に和文大見出し＋英字サブ。下に「日付／カテゴリピル／タイトル」の1行91pxリスト4件＋下罫線、左下に黒ピルボタン |
| news-002 | 白 | 見出しの下を左右2分割。左に主記事（サムネ＋日付＋32px/900の大見出し）、右に日付＋角タグ＋見出しの一覧5件 |
| news-003 | 白 | 左に英字70pxの見出し＋カテゴリナビ5項目（選択中はグレー面）、右に1行98pxの一覧3件（日付＋角タグ＋見出し＋矢印）と角型ボタン |

### フッター `footer/`

| id | 背景 | 構造 |
|---|---|---|
| footer-001 | 白 | 上部に角丸バナー3カラム（各ラベル白ピル）。下は中央縦罫線で2分割し、左に住所・SNS・コピーライト、右にTEL・営業時間・黒の大ピルボタン |
| footer-002 | 濃色 | 背面に巨大な英字マーキー（中央静止）、中央にリード、幅いっぱいの枠線ピルCTA（高さ190）、下端にリンク列＋SNSアイコン＋コピーライト |
| footer-003 | 濃色 | 左にロゴ・住所・認証マーク、右にサイトマップ2列。右下に Page Top、1px罫線の下にSNSアイコン＋ポリシーリンク＋コピーライト |

## 新規セクションの作り方

1. スクリーンショットを `site-wireframe/<カテゴリ名>/` に置く
2. 実寸を確認する（Retina の2倍解像度なら 1/2 が CSS px）
3. 各要素の座標・サイズ・フォントサイズを**ピクセル単位で実測**する
4. `<カテゴリ名>/<カテゴリ名>-<3桁連番>.html` を作る。下の「ベースCSS」を `<style>` の冒頭にコピーし、その下にセクション固有のCSSを `.カテゴリ名__要素名` で書く（BEM風）
5. **1440×800 でレンダリングし、元スクショと数値を突き合わせて再検証**する。ズレていれば直して再検証
6. `index.html` の `DATA` 配列と、このファイルのカタログ表に1行追加する
7. 検証が通ったら、元スクショを削除する

### 許容誤差

- 座標・サイズは **±2px 以内**
- フォントの字形差（Poppins のスラッシュ幅、カタカナと漢字のインク差など）による見た目のズレは許容する。合わせるのは**送り幅と要素のボックス位置**であって、グリフのインク範囲ではない

### 再検証用コマンド

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --window-size=1440,800 --screenshot=out.png --virtual-time-budget=6000 "file://<絶対パス>/mv/mv-001.html"
```

### ベースCSS（各HTMLの `<style>` 冒頭にコピー）

```css
:root {
  --wf-w: 1440px;
  --wf-h: 800px;
  --wf-content: 1296px;   /* コンテンツ幅 90% */
  --wf-pad: 72px;         /* 左右余白 */

  --c-black: #000;
  --c-text: #222;
  --c-sub: #555;
  --c-mute: #808080;
  --c-light: #b0b0b0;
  --c-line: #dcdcdc;
  --c-bg-gray: #f2f2f2;
  --c-img: #d9d9d9;
  --c-img-dark: #8c8c8c;
  --c-white: #fff;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { height: 100%; }
body {
  background: #e9e9e9;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: 400;
  color: var(--c-text);
  -webkit-font-smoothing: antialiased;
}
ul, ol { list-style: none; }
a { color: inherit; text-decoration: none; }

/* アートボード 1440×800。ビューポートに合わせて等倍スケールする */
.stage { position: fixed; inset: 0; overflow: hidden; }
.wf {
  position: relative;
  width: var(--wf-w); height: var(--wf-h);
  background: var(--c-white); overflow: hidden;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%) scale(var(--s, 1));
  transform-origin: center;
  box-shadow: 0 4px 24px rgba(0,0,0,.18);
}
/* コンテンツ幅90%のインナー枠 */
.wf__inner { position: absolute; left: var(--wf-pad); width: var(--wf-content); }

.en { font-family: "Poppins", sans-serif; }
.img { position: relative; background: var(--c-img); }
.img--dark { background: var(--c-img-dark); }
.img[data-l]::after {   /* グレーボックスの右下に IMAGE / THUMB などのラベルを出す */
  content: attr(data-l);
  position: absolute; right: 10px; bottom: 8px;
  font-family: "Poppins", sans-serif; font-size: 9px; letter-spacing: .08em;
  color: #8a8a8a; line-height: 1;
}
.dot { font-size: 8px; line-height: 1; }
.btn-black {
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--c-black); color: var(--c-white);
  border-radius: 999px; white-space: nowrap;
}
.tag-white {   /* グレー面・画像の上に置くピル */
  display: inline-flex; align-items: center; justify-content: center;
  background: var(--c-white); color: var(--c-text);
  border-radius: 999px; white-space: nowrap;
}
.tag-gray {    /* 白背景の上に置くピル */
  display: inline-flex; align-items: center; justify-content: center;
  background: #e8e8e8; color: var(--c-text);
  border-radius: 999px; white-space: nowrap;
}
```

末尾のスケール用スクリプト：

```html
<script>
  const fit = () => document.documentElement.style.setProperty('--s', Math.min(innerWidth / 1440, innerHeight / 800));
  addEventListener('resize', fit); fit();
</script>
```
