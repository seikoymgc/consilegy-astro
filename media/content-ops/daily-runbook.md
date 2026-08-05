# 日次記事生成ランブック（media.consilegy.com）

毎朝9:00（JST）の定期タスクがこの手順に従って日英1記事ずつを生成・公開する。
このファイルはタスクの手順書。変更するとタスクの挙動が変わる。

## 前提ファイル

- `content-ops/topics.md` — 90日分トピック在庫リスト（v2、データ武装版）。ここから未使用トピックを1つ選ぶ。
- `content-ops/sources.md` — 検証済み出典データベース。数字はここか、Web検索で一次まで辿れるものだけ使う。
- `content-ops/article-format.md` — 記事テンプレート・執筆フォーマット。
- `content-ops/published-log.md` — 公開済みトピックの記録。重複回避に使う。毎回追記する。

## 適用スキル（必須）

- `seiko-operating-style` — 判断・トーン・出力基準。
- `article-writer` — 媒体別の構成・見出し・リード・CTA。SEO/GEO最適化。

## 手順

1. **トピック選定**：`topics.md` の未使用トピックから、`published-log.md` に無いものを1つ選ぶ。カテゴリが直近と偏らないようにする（crm/sales/data/japan-gtm/adoption/marketing の6分類をローテーション）。

2. **Notionから要素を取得**：Notionの「contents schedule」系ページ（「投稿計画　最新」「LinkedIn Posting Schedule」「投稿内容の作成（日本語）」「コンテンツカレンダー」）を検索し、そのトピックに対するSeikoの切り口・フック・ポジショニング・言い回しを拾う。Seikoの投稿の主張や視点を記事の芯に使う。該当が無ければトピック側の論点で書く。

3. **日本語記事を執筆（仕上げ切る）**：`article-writer` と `seiko-operating-style` を適用し、本文を最後まで書く。プレースホルダは残さない。

4. **英語記事を執筆**：英語版は「日本市場への参入・運用」にスコープを絞る（EN edition の方針）。日本語の直訳ではなく、外資SaaS/本社向けに組み直す。

5. **数字の鉄則（最重要）**：
   - すべての数字に「調査主体・調査年・母数」の3点を明記する。
   - `sources.md` の検証済みデータか、Web検索で一次資料まで辿れるものだけ使う。
   - 以下の壊れた数字は**絶対に使わない**：「意思決定関与者は平均5.4人」（米CEB、日本のデータではない）、「Gartner 2026年までに75%がRevOps」（原文改変）、「BCG: 成長19%速い/株価71%高い」（帰属矛盾）、「MA導入の90%が失敗」（対談発言、統計ではない）。
   - 検証できる数字が無いトピックは、無理に数字を入れず定性で書くか、別トピックに差し替える。

6. **frontmatter**：`content.config.ts` のスキーマに従う。`title` / `description` / `publishedAt`（当日）/ `category` / `principle` / `canonUrl` / `canonLabel` / `draft: false`。日本語は `src/content/notes/{slug}.md`、英語は `src/content/notes-en/{slug}.md`。スラッグは英語ケバブケース。

6-2. **内部リンク（必須・SEO/GEO）**：本文の末尾に、日本語は `## 関連する記事`、英語は `## Related reading` の節を必ず置く。

   - 日本語：文脈のつながる既存記事へのリンク1本（`/notes/{slug}/`）＋ そのカテゴリのハブへのリンク1本（`/notes/category/{category}/`）。「同じ悩みの記事は「[カテゴリ名](/notes/category/{category}/)」にまとめています。」の形で締める。
   - 英語：文脈のつながる既存EN記事へのリンク1本（`/en/articles/{slug}/`）＋ `/en/` へのリンク1本。
   - リンクを置く理由を1文で書く。「関連記事：〜」と羅列しない。既存記事の一覧は `published-log.md` から取る。
   - カテゴリハブの本文とFAQは `src/data/category-hubs.ts` にある。新しい論点を足したときは、そのカテゴリのFAQを見直す。

7. **アイキャッチ（ブラウザRecraftで生成）**：
   - Claude-in-Chrome で Recraft（プロジェクト https://www.recraft.ai/project/0cef7131-84ca-4262-9bef-01e589c0228d ）を開き、記事内容に合うプロンプトで画像を生成する。トーンは全記事共通で「Contemporary editorial photograph, <被写体>, bright modern office, white walls and light wood, clean neutral colors, soft daylight, crisp sharp focus, minimal and uncluttered, no text, no logo」。アスペクト比は 2:1。
   - トーン注意：`documentary` と `muted calm color palette` は使わない。前者はフィルム調の粒状感、後者は彩度落ちとセピア寄りの色被りを招き、レトロな写真になる（2026-08-04にこの2語が原因と判明し差し替え）。人物を入れると指の破綻が起きやすいので、被写体が主役の記事では `no people, no hands` を付ける。
   - 生成できたら PNG でエクスポート（1536×768, 300DPI）。ファイルは `~/Downloads` に落ちる。
   - `~/Downloads` の最新PNGを `media/public/images/eyecatch-bg/{slug}.png` に移動する（bashで `mv`）。※これには Downloads がサンドボックスから見える必要がある。見えない場合はカテゴリ写真のまま公開し、Recraftプロンプトを `published-log.md` に控えて通知に「画像は手動差し替え待ち」と明記する。
   - 記事専用画像を置かない場合は、ビルド時に `gen-eyecatch.mjs` がカテゴリ写真（`eyecatch-bg/{category}.png`）を自動でアイキャッチにする（フォールバック。追加作業不要）。
   - **`eyecatch-bg/` に置くのは元のPNGのままでよい。** ビルド時に `gen-eyecatch.mjs` が `eyecatch/{slug}.webp`（ページ表示用・約30KB）と `eyecatch/{slug}.jpg`（OGP用）へ変換する。`eyecatch/` にPNGを手で置かないこと（1枚1.5MBになりLCPが壊れる）。
   - 前提：この工程はMac起動＋アプリ＋Chrome（拡張接続）が開いているときのみ動く。閉じている朝はカテゴリ写真で公開される。

8. **公開**：`pgrep -x git >/dev/null || rm -f .git/index.lock .git/HEAD.lock` でロックを掃除してから、
   `git add media/ && git commit && git push`。GitHub Actions がビルド（アイキャッチ自動生成含む）してデプロイする。
   **`git add -A` は使わないこと。** このリポジトリは本体サイト（consilegy.com）と共用で、
   他セッションの未コミット作業を記事コミットに巻き込む事故が起きる。

9. **記録**：`published-log.md` に日付・スラッグ・カテゴリ・使用トピック・使った出典・（あれば）Recraftプロンプトを追記。

10. **通知**：Seikoに、公開したJA/ENのタイトルとURL、使った数字と出典、注意点（数字を落とした/差し替えた等）を1メッセージで報告する。

## ガードレール

- 出典を辿れない数字は載せない。一般論だけの記事は出さない（`seiko-operating-style` の基準）。
- 守秘に触れる実案件の固有情報は出さない。
- 迷ったら公開を止めて `draft: true` にし、Seikoに判断を仰ぐ。
