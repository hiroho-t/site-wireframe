# site-wireframe

Webサイトのセクション単位のワイヤーフレーム テンプレート集（Claude Code スキル）。

白・黒・グレーのみ、テキストは全てダミー。**1440×800 固定**で、実サイトのスクリーンショットを実測してレイアウトだけを再現している。

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
| `mv/` メインビジュアル | 3 |
| `concept/` コンセプト | 1 |
| `about/` 会社紹介 | 1 |
| `report/` レポート | 1 |
| `company/` 会社情報 | 1 |
| `interview/` インタビュー | 1 |
| `service/` サービス | 1 |
| `partner/` パートナー | 1 |
| `case/` 導入事例 | 1 |
| `news/` お知らせ | 3 |
| `career/` 採用 | 1 |
| `contact/` お問い合わせ | 1 |
| `footer/` フッター | 3 |

型の一覧と作り方のルールは [SKILL.md](SKILL.md) を参照。

## 注意

参考にした実サイトのスクリーンショットは他社の著作物のため、このリポジトリには含めない（`.gitignore` で画像を除外している）。
