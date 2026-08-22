# consilegy-astro

Consilegy のWebサイト。**1つのリポジトリに2つの独立したAstroプロジェクト**が入っている。

| | consilegy.com | media.consilegy.com |
|---|---|---|
| 場所 | リポジトリ直下（`src/`, `public/`） | `media/` |
| 中身 | サービス、事例、料金、体系と定義 | 現場の記録（実務ノート） |
| 性質 | 正典。長く読まれ、引用される | 一次情報。その日に判断したことの記録 |
| 更新 | 月1〜2本 / 4,000〜8,000字 | 平日1本 / 800〜1,200字 |

「レベニューアーキテクチャとは」のような定義ページは**本体側**に置く。
サブドメインに分けると検索エンジンが別サイトとして扱い、看板になる概念の権威が分散するため。
media 側からは常に本体の該当ページへリンクを返す（`canonUrl` が必須項目なのはこのため）。

## デプロイ

**main に push した時点で本番に出る。** `.github/workflows/deploy.yml` が GitHub Actions で自動実行する。
Netlify ではない。CORESERVER への SSH rsync。

| ジョブ | 対象 | 発火条件 |
|---|---|---|
| deploy | `dist/` → `public_html/` | main への push 毎回 |
| deploy-media | `media/dist/` → メディア側 | `media/` 配下に変更があったときだけ |

**rsync は `-avz --delete` で動く。** サーバー側は `dist/` の完全なミラーになる。
ビルド結果に含まれないファイルは、サーバーから消える。
手動でサーバーに置いたファイルは残らない。

デプロイ前にローカルで `npm run build` を通す。ビルドが壊れたまま push すると本番が壊れる。

## 触るときの注意

**画像やアセットを同名で差し替えない。**
Cloudflare が旧ファイルを掴み続けるため、変更が反映されない。
ファイル名を変えて、参照側も同時に更新する。

**ロゴや favicon を変えるときは `media/public` も掃く。**
2サイト構成なので、片方だけ直して終わらせない。原因を1つ見つけたところで止めない。

**アイキャッチ生成は日本語フォントに依存する。**
CI 側で `fonts-noto-cjk` を入れている（`scripts/generate-eyecatches.mjs`、sharp）。

**GTM の コンテナID** は Actions の Variables に `PUBLIC_GTM_ID` として登録する。
Secrets ではなく Variables でよい（HTMLに出る公開情報）。未設定なら計測タグは出力されない。

## ディレクトリ

- `src/` `public/` 本体サイト
- `media/` メディアサイト（独立したAstroプロジェクト）
- `scripts/` SEO監査、リンク監査、WPからの移行、アイキャッチ生成、画像ローカライズ
- `docs/発信/` 投稿計画、看板・サイトコピー、各種調査
- `docs/収益診断/` 収益診断の要件定義、計測設計、結果ページコピー

`README.md` は Astro のテンプレートのまま。中身はない。
