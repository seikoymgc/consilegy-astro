# Consilegy Media

`media.consilegy.com` の Astro プロジェクトです。本体サイト（`consilegy.com`）とは独立したプロジェクトですが、同じリポジトリで管理しています。

## 役割分担

| | consilegy.com | media.consilegy.com |
|---|---|---|
| 中身 | サービス、事例、料金、そして**体系と定義** | **現場の記録**（実務ノート） |
| 記事の性質 | 正典。長く読まれ、引用される | 一次情報。その日に判断したことの記録 |
| 更新頻度 | 月1〜2本 | 平日に1本 |
| 文字数 | 4,000〜8,000字 | 800〜1,200字 |

**「レベニューアーキテクチャとは」のような定義ページは本体側に置きます。** サブドメインに分けると検索エンジンに別サイトとして扱われるため、看板になる概念の権威を分散させないための判断です。media 側からは常に本体の該当ページへリンクを返します（`canonUrl` が必須項目になっているのはこのためです）。

## 開発

```bash
cd media
npm install
npm run dev     # http://localhost:4322
npm run build
npm run preview
```

本体サイトは 4321 番、media は 4322 番を使うので、同時に起動できます。

## 記事を書く

`src/content/notes/` に Markdown を置きます。`template.md` を複製するのが早いです。

```bash
cp src/content/notes/template.md src/content/notes/why-crm-input-rate-dropped.md
```

ファイル名がそのまま URL になります（`/notes/why-crm-input-rate-dropped/`）。日本語ファイル名は共有時に壊れるので、英語の短い語にしてください。

### frontmatter

| 項目 | 必須 | 内容 |
|---|---|---|
| `title` | ○ | 60字以内。具体的な事象で書く。「営業プロセス設計のポイント」ではなく「商談ステージを7段階にしたら、入力率が3週間で落ちた」 |
| `description` | ○ | 一覧と検索結果に出る要約 |
| `publishedAt` | ○ | 公開日 |
| `updatedAt` | | 更新したときだけ |
| `category` | ○ | `crm` / `sales` / `data` / `japan-gtm` / `adoption` / `marketing` |
| `principle` | ○ | 一般化できる原則。**1本につき1つだけ。** 2つ以上書くと薄まる |
| `canonUrl` | ○ | 本体サイトの関連ページ URL |
| `canonLabel` | ○ | そのページの表示名 |
| `draft` | | `true` にすると公開されない |

`principle` と `canonUrl` をスキーマ上の必須にしてあります。書き忘れるとビルドが落ちるので、規約が自然に守られます。

### 書く上での規約

- **800〜1,200字。** 超えるなら、それは正典の材料です。ノートには書かず、本体側の記事に回してください
- **冒頭3行で結論が分かること。** 背景説明から始めない
- **一般論を書かない。** 「営業とマーケの連携が重要です」のような、他の場所で読める内容は載せない
- **守秘。** 社名、特定できる数字、担当者名は書かない。業種と規模感まで
- **数字を出すときは、調査主体・調査年・母数の3点を本文に書く。** 出典を辿れない数字は使わない
- 日本語ではエムダッシュを使わない
- カタカナの専門語は、日本語で言えるなら日本語にする

書くことがない日は、過去の案件から1つ掘り出してください。それでもなければ休みます。空の記事を出すより休む方が資産が守られます。

## デプロイ

`main` に push すると GitHub Actions が動きます。`media/` 配下に変更があったときだけ media サイトがビルド・デプロイされる作りなので、本体だけ更新したときに無駄なデプロイは走りません。

### 初回だけ必要な設定

**1. CORESERVER 側でサブドメインを作る**

コントロールパネルで `media.consilegy.com` を追加し、公開ディレクトリを決めます（例: `public_html/media/`）。DNS の A レコードも本体と同じ IP に向けてください。

**2. GitHub の Secrets に公開ディレクトリを登録する**

リポジトリの Settings → Secrets and variables → Actions で、次を追加します。

| 名前 | 値 |
|---|---|
| `MEDIA_REMOTE_TARGET` | 上で決めた公開ディレクトリ（例: `public_html/media/`） |

`SSH_KEY` / `SSH_HOST` / `SSH_USER` / `SSH_PORT` は本体と共通なので、既存のものがそのまま使われます。

**3. lockfile を作る**

初回の `npm install` で `media/package-lock.json` が生成されます。これをコミットしてください。GitHub Actions の `npm ci` がこれを参照します。

## 未対応

- `public/favicon.svg` と `public/images/og-default.png` を置いていません。本体サイトの `public/` からコピーするか、media 用に作ってください。無くてもビルドは通りますが、OGP画像が出ません
- アイキャッチの共通テンプレートは未作成です。Canva か Figma で1つ作り、タイトルを差し替える運用を想定しています
