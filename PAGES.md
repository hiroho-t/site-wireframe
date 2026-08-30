# ページ丸ごとの型（`page/`）の増やし方

実在サイトのトップページを、このライブラリのルールに整えた「完成ページの型」を `page/` に置いている。
グレーボックスのままだとレイアウトの良し悪しが判断できないので、**写真（Unsplash）とアイコン（Font Awesome）を入れた状態**で置く。
このマニュアルは、**別のモデル・別のセッションでも同じ品質でページ型を増やせるように**手順を全部書いたもの。
判断に迷ったら、このファイルと [SKILL.md](SKILL.md)・[SELECT.md](SELECT.md) の記述が正。

## なぜページ丸ごとか

セクションの型（`col1/`〜`footer/`）だけで1ページを組むと、部品どうしの調和を毎回手でつくることになる。
実測では、同じ原稿から4案を手組みしたとき、ページ共通CSSの一致率が73〜76%までブレた
（同じものを毎回書き直すため、変数名などが揺れる）。
実在サイトはプロが整合させたレイアウトなので、**丸ごと1枚のほうが「違和感のなさ」を最初から持っている**。

- **`page/`** … 骨格。1ページ組むときは、まずここから近い1枚を選ぶ
- **セクションの型** … 差し替え部品。情報量が合わないセクションだけ入れ替える
- 情報量の数え方と差し替えの選び方は SELECT.md 6章

## 前提環境（初回だけ）

- Node 18以上／Google Chrome（`/Applications/Google Chrome.app`）
- puppeteer-core：`~/tools/sitefreeze/` に `npm i puppeteer-core` 済みの環境がある。
  ない場合は `mkdir -p ~/tools/sitefreeze && cd ~/tools/sitefreeze && npm init -y && npm i puppeteer-core`
- **実行前に必ず** `export NODE_PATH="$HOME/tools/sitefreeze/node_modules"` を出す。
  出さないと `Cannot find module 'puppeteer-core'` で即落ちる
- スクリプトはこのリポジトリの `tools/trace/` にある（1_snapshot.js 〜 6_shot.js、fa_icons.json、sample_colors.py）。
  `fa_icons.json` と `sample_colors.py` は 3_wireframe.js と同じ階層に置いたまま動かす

## サイトの選び方

**点数を増やすことが目的ではない。** SELECT.md 6章「まだ薄いかたち」を見て、
足りていないかたち（②テキストのみ4〜7件固定・③2〜3件固定・⑥導線2つ）を持つサイトを狙う。

- SANKOU!（practical/・simple/）はデザインギャラリーなので、写真なしの素朴な一覧（①②③）は
  ほぼ載っていない。**10サイトトレースして取れたのは1件だけ**という実測がある
- ②③を狙うなら業種から直接あたる：病院グループの診療科一覧、大学の学部学科、
  製造業の取扱品目、士業の対応業務、自治体のサービス一覧
- 候補サイトが型を持っているかは、トレース後に `node tools/find-shapes.mjs <ワイヤーフレーム.html>` で機械判定できる

## 手順（サイト1つ＝コマンド6つ）

作業フォルダは `_参考データ/参考サイト｜<サイト名>/`（gitignore済み。公開されない）。

```bash
cd tools/trace
export NODE_PATH="$HOME/tools/sitefreeze/node_modules"
D="../../_参考データ/参考サイト｜<サイト名>"; mkdir -p "$D"

# 1. 実レンダリングで固める（全スクロールして遅延読み込みを起こし、CSSを合体、JSを除去）
node 1_snapshot.js "https://例.com/" "$D/静止版.html" "$D/元サイト.png" 1440

# 2. 軽くする（未使用CSS・メタ・重複属性を落とす。見た目は変えない）
node 2_slim.js "$D/静止版.html" "$D/全幅.html" --width 1440

# 3. 著作物を抜き、モノトーンに寄せる（ページ型は --flat --mono を必ず付ける）
node 3_wireframe.js "$D/全幅.html" /tmp/wire.html --width 1440 --flat --mono

# 4. ライブラリのルールに整える（@font-face除去・Noto Sans JPへ統一・Google Fonts追加・メタ掃除）
node ../pagefy.mjs /tmp/wire.html ../../page/page-0NN.html --title "page-0NN｜<用途>"

# 5. 写真とアイコンを入れる（枠の実寸に合わせて Unsplash を読む。小さな枠はFAの線画に）
node ../photofy.mjs ../../page/page-0NN.html

# 6. 中間生成物を消す（全幅.htmlがあれば作り直せる）
rm -f "$D/静止版.html"
```

`photofy.mjs` の振り分け（枠の実寸で判定する）

| 枠の大きさ | どうするか |
|---|---|
| 辺40px以上 | Unsplash の写真。`page-0NN` ごとのテーマ（`BY_PAGE`）から順に回す |
| 辺8〜40px | **Font Awesome の線画**（正方形に近ければ丸、それ以外は角）。アイコンの入る枠 |
| 辺2px以下／片辺8px未満 | 触らない。区切り線・スペーサー |
| 細長い帯（比3超かつ長辺48px超） | 触らない。小さいロゴ枠など |

- 参考データとして残す通常版（配色・フォントを保持した `ワイヤーフレーム.html`）も欲しければ、
  手順3を `--ref "$D/元サイト.png"` 付き・`--mono` なしでもう1回まわす
- `--flat --mono` の意味は `_参考データ/参考サイト_ワイヤーフレーム化の手順.md` に詳しい
  （--flat＝影・角丸などレイアウトに影響しない装飾を落とす／--mono＝配色をモノトーン8段階へ）

## 命名とカタログ登録

- ファイル名は `page/page-0NN.html` の連番。**`<title>` は `page-0NN｜<用途>`**（用途＝業種・役割。社名は書かない）
- **出典サイトのURL・社名は生成物に書かない。** `_参考データ/参考サイト｜<サイト名>/手順.md` にだけ書く
- 登録先は2つ：
  1. `index.html`（トップページ）… ギャラリーにカードを1枚追加。既存カードをコピーして
     href・src・`page-0NN｜用途`・高さ・KB を差し替える
  2. `SKILL.md` の「ページ丸ごとの型」の表 … id／用途／高さ／サイズを1行追加

## 載せるか落とすかの基準

**トレースできたからといって全部載せない。** 写真を入れて1画面目を見て、次のどれかに当たるなら落とす。
実際、最初の15枚のうち9枚をこれで落とした。

| 落とす理由 | 見分け方 | 例 |
|---|---|---|
| **崩れている** | 1画面目が真っ白／要素が散乱して重なる | GSAPのpin-spacerやスライダーで組んだヒーローは静止版で成立しない |
| **凝りすぎて汎用性がない** | 写真ありきの意匠。全面写真に要素が重なる、斜めに散る | 骨格として他案件に写せない |

残す基準は「**骨格だけ抜き出して他の案件に使えるか**」。デザインの良し悪しではない。

## 検算（3つ。飛ばさない）

**A. 外部参照は許可先だけ。** Google Fonts ／ cdnjs（Font Awesome）／ images.unsplash.com（写真）。

```bash
grep -oE 'https?://[^"'\'' )]+' page/page-0NN.html | grep -vE 'fonts.googleapis|fonts.gstatic|cdnjs.cloudflare|images.unsplash.com|w3.org' | sort -u
# → 何も出ないのが正。出たら pagefy.mjs の掃除パターンに追加する
```

**B. 幅1440・全角スペースゼロ。** ブラウザで開いてコンソールに貼る（複数ページ一括なら iframe 版）：

```js
console.log('w', document.documentElement.scrollWidth, '← 1440 でなければ横にはみ出している');
console.log('全角SP', (document.body.innerText.match(/　/g)||[]).length, '← 0 が正');
```

**C. 目視。とくにヒーロー。** 機械検査で見つからない漏れが実際にあった：

- **`<use xlink:href="#...">` 参照のベクター文字。** 元サイトのキャッチコピーを SVG の
  `<path>` で「図形として」描いていると、テキストのダミー化を素通りして原文が表示される
  （page-007 で発生。`<symbol>` の中身をダミーの `<text>` 2行に差し替えて解消した）。
  スクリーンショットを撮って、**読める単語が「ダミー」「Dummy」以外にないか**を必ず見る
- ロゴが `LOGO` 表記になっているか。**社名をベクターで描いたロゴは要注意**
  （page-008 の「ALGO ARTIS」がこれで残っていた。pagefy.mjs が `class="...logo..."` 内のSVGを潰す）
- **アイコンが豆腐（☒）になっていないか。** 元サイトが Font Awesome Pro（有料）を使っていると
  Free には無いので出ない。pagefy.mjs が Pro→Free＋weight900 に変換する
- `<symbol>` に残る SNS アイコン（Instagram・X）は Font Awesome と同じ扱いなのでそのままでよい

## 著作権の線引き（ページ型はここまで抜く）

| 抜く | 残す |
|---|---|
| 写真・イラスト・ロゴ・**文字を描いたベクター** | レイアウト・余白 |
| 文章・見出し・キャッチコピー | アニメーション |
| aria-label 等の文言、リンク先URL | （配色・フォントも `--mono`＋pagefy でライブラリ標準に置換済み） |

通常の参考データ（`ワイヤーフレーム.html`）は配色とフォントを残すが、
**公開する `page/` はどちらもライブラリ標準に置き換える**。元サイトとの距離を最大にするため。

写真は元サイトのものを一切使わず、**Unsplash の別画像に差し替える**（`photofy.mjs`）。
Unsplash License は商用利用可・帰属表示は任意なので、生成物に出典表記は入れていない。

Font Awesome Free（CC BY 4.0）のライセンス行が `<head>` 先頭に残っているかを確認する（wire.js が自動で入れる）。

## つまずきの記録

- `NODE_PATH` を出し忘れる → `Cannot find module 'puppeteer-core'`
- シェルの `&` でトレースを走らせるとセッション終了で切れる → `nohup` か専用シェルスクリプトで
- 元サイト由来の `preconnect`（例：code.jquery.com）が残る → pagefy.mjs が落とす（2025-08-29に追加済み）
- `@font-face` のデータURIが巨大（1ページで最大1,011個・700KB） → pagefy.mjs が落とす
- 高さ検算は600ms待ってから測る（Webフォントの再レイアウト待ち）
- Font Awesome のCSSを読み込み忘れるとアイコンが全部豆腐（page-005 で256個）→ pagefy.mjs が追加する
- **font-family の一括置換で Font Awesome 自身の指定まで潰さないこと。**
  潰すと CSS を読み込んでも `::before` のグリフが出ない（実際にやらかした）
- 元サイトのフッターに社名が残ることがある（page-006 の "Findy"）→ `--scrub "社名"` で潰す
- `grep -c` は行数を数える。ミニファイされたCSSは1行なので、件数は `grep -o | wc -l` で数える
