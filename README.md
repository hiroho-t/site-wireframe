# site-wireframe

Webサイトのセクション単位のワイヤーフレーム テンプレート集（Claude Code スキル）。

白・黒・グレーのみ、テキストは全てダミー。**1440×800 固定**で、実サイトのスクリーンショットやURLを実測してレイアウトだけを再現している。セクションは**カラム数**で分類している。

## インストール

各端末で1回だけ。

```bash
git clone https://github.com/hiroho-t/site-wireframe.git ~/.claude/skills/site-wireframe
```

`~/.claude/skills/` に置くと、プロジェクトを問わず全セッションで使える。

## 更新

```bash
cd ~/.claude/skills/site-wireframe && git pull
```

## 一覧を見る

- ローカル：`index.html` をブラウザで開く（サーバー不要）
- Web：https://hiroho-t.github.io/site-wireframe/

## 収録

| カテゴリ | 数 |
|---|---|
| `pagetitle/` 下層ページタイトル | 3 |
| `mv/` メインビジュアル | 14 |
| `col1/` 1カラム | 19 |
| `col2/` 2カラム | 49 |
| `col3/` 3カラム | 26 |
| `col4/` 4カラム | 17 |
| `col5/` 5カラム | 10 |
| `news/` お知らせ | 14 |
| `footer/` フッター | 15 |

型の一覧と作り方のルールは [SKILL.md](SKILL.md)、**どの型を選ぶかは [SELECT.md](SELECT.md)** を参照。

実案件のワイヤーとして納品するときは、部品を並べただけにせず **1ページ＝1つのHTML** に組み直す。見出しパターンはMV（ヒーロー）に合わせて統一し、余白も共通の刻みにそろえる。手順は SKILL.md の「型を組み合わせて1ページのワイヤーを作るとき」にある。

## 注意

参考にした実サイトのスクリーンショットは他社の著作物のため、このリポジトリには含めない（`.gitignore` で画像を除外している）。
