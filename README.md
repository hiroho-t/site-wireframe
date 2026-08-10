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
| `pagetitle/` 下層ページタイトル | 1 |
| `mv/` メインビジュアル | 14 |
| `concept/` コンセプト | 3 |
| `message/` メッセージ | 3 |
| `about/` 会社紹介 | 7 |
| `feature/` 特長 | 8 |
| `report/` レポート | 1 |
| `data/` 数字で見る | 2 |
| `history/` 沿革 | 1 |
| `company/` 会社情報 | 5 |
| `interview/` インタビュー | 5 |
| `service/` サービス | 9 |
| `product/` 商品 | 1 |
| `movie/` ムービー | 1 |
| `gallery/` ギャラリー | 2 |
| `partner/` パートナー | 1 |
| `case/` 導入事例 | 3 |
| `voice/` お客様の声 | 1 |
| `magazine/` メディア | 4 |
| `news/` お知らせ | 10 |
| `career/` 採用 | 5 |
| `banner/` 誘導バナー | 5 |
| `contact/` お問い合わせ | 4 |
| `footer/` フッター | 14 |

型の一覧と作り方のルールは [SKILL.md](SKILL.md) を参照。

## 注意

参考にした実サイトのスクリーンショットは他社の著作物のため、このリポジトリには含めない（`.gitignore` で画像を除外している）。
