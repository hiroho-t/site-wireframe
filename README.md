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
| `pagetitle/` 下層ページタイトル | 1 |
| `mv/` メインビジュアル | 14 |
| `col1/` 1カラム | 15 |
| `col2/` 2カラム | 40 |
| `col3/` 3カラム | 17 |
| `col4/` 4カラム | 10 |
| `col5/` 5カラム | 3 |
| `news/` お知らせ | 13 |
| `footer/` フッター | 14 |

型の一覧と作り方のルールは [SKILL.md](SKILL.md)、**どの型を選ぶかは [SELECT.md](SELECT.md)** を参照。

## 注意

参考にした実サイトのスクリーンショットは他社の著作物のため、このリポジトリには含めない（`.gitignore` で画像を除外している）。
