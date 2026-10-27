# AI検索での発見・引用を増やすための対応

確認日: 2026-10-27（日本時間）
対象: https://consilegy.com/ （ユーザーの「consikegy.com」は当リポジトリのドメインとして解釈）

## 確認できたこと

- Web検索の `site:consilegy.com Consilegy` でトップ、会社情報、サービス・料金、製品、英語料金ページなどが見つかった。サイト全体が検索から見えない状態ではない。
- トップページの本文はWeb取得ツールから読めた。検索結果にあることは、特定のAIが推薦・引用している証拠ではない。
- ソースには Organization / ProfessionalService / WebSite の構造化データ、概念定義ページ、事例、会社情報がすでにある。今回、実績や受賞・口コミなどは追加していない。
- 本体・メディアともソースの robots.txt はAIの取得を許可している。
- 過去の `media/content-ops/ai-visibility-log.md` には、2026-09-08にCloudflareのManaged robots.txtを無効化した対応記録がある。前半の障害記録だけを読んで、現在も遮断中だと判断しない。
- 今回、本番の robots.txt / llms.txt / sitemap の直接取得は環境上成功しなかった（curl はDNS解決失敗、Web取得ツールも取得不可）。本番での許可状態・レスポンスコード・文字コード・WAF設定は未確認。これだけではサイト障害と判断できない。

## 今回の実装

1. サイトマップから noindex の旧記事・カテゴリと診断フォームを除外。既存の紹介キット除外と合わせ、GA4旧URLも除外。
2. 全URLにビルド日を lastmod として付ける設定を削除。確認できない更新日は出さない。
3. 公開ページの robots meta で長いスニペットと大きな画像プレビューを許可。noindex ページの設定は維持。
4. 相対パスで指定された canonical を共通SEOコンポーネントで絶対URLに正規化。英語プライバシーポリシーで検出した不一致を解消。
5. 本体 robots.txt に Claude-SearchBot / Claude-User / Perplexity-User の許可を明示。もともとの全体許可により閲覧可能だったため、新規の遮断解除と区別する。
6. 本体の .htaccess にテキストファイルのUTF-8指定を追加。
7. 既存の llms.txt に日本語の会社・サービス・製品概要、事例、セキュリティ、各製品版、メディアの参照先を追加。スプレッドシート表記と現行製品コピーに整合。
8. `npm run audit:ai-search` を追加。ビルド済みサイトマップの実在・noindex・転送・canonical・description、案内リンク、検索クローラーのrobots設定を検査。

`llms.txt` は補助的な案内であり、Google検索での評価向上を期待する施策ではない。Google公式はAI検索向けの専用ファイルや専用構造化データを要求していない。

## 検証

```sh
npm run build
npm run audit:ai-search
git diff --check
```

- ビルド成功: 309ページ。
- 設定チェック成功: サイトマップ279ページ、案内リンク41件、検索クローラー8種。
- これはローカルの生成物に対する検証。コミット・push・本番公開は今回行っていない。
- 作業中に会社ページ・コラム・共通部品への別作業の変更が現れたため、それらは編集・取り消し・コミットしていない。ビルドはその時点の共有作業ディレクトリを対象に実行した。

## 公開後に確認すること

1. 本体の robots.txt / llms.txt / sitemap-index.xml と代表ページがHTTP 200で取得でき、文字コードがUTF-8であることを確認する。
2. Cloudflare側でAI検索用クローラーがチャレンジや403を受けていないか、実際のログで確認する。User-Agentを名乗ってアクセスできるだけでは実クローラーへの許可の証明にならない。
3. Google Search Console / Bing Webmaster Toolsで本体のサイトマップ登録状況を確認し、必要なら再送信する。重要URLは会社・サービス・定義・製品・料金・代表事例。アカウント操作は未実施。
4. 下記の同じ質問でChatGPT検索・Perplexity・GoogleのAI回答を調べ、実際に引用されたURLを記録する。検索結果に出たこととAIの引用を別々に記録する。
5. 自社の経験に基づく事例を、課題・支援範囲・実施内容・測定期間・結果が確かめられる形で継続的に公開する。未確認の実績や数字は作らない。

## 継続計測する質問

| 狙い | 質問 |
|---|---|
| 社名の理解 | Consilegyとはどんな会社ですか？ |
| 定義の引用 | レベニューアーキテクチャとは何ですか？RevOpsとの違いは？ |
| 支援サービス | 顧客管理システムが営業現場に定着しないとき、何から見直せばよいですか？ |
| 製品の発見 | 日本の中小企業向けに、AIが入力を手伝う顧客管理・営業支援システムを比較したい |
| 英語の専門領域 | How should a foreign B2B SaaS company design revenue operations for Japan? |

各回に実施日、サービス名、質問原文、検索の有無、Consilegyへの言及、引用URLを保存する。順位や引用回数の改善はまだ測定していない。定期実行の自動化も作成していない。

## 公式情報

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google: Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [OpenAI: Overview of OpenAI Crawlers](https://developers.openai.com/api/docs/bots)

AI回答への掲載・推薦は各サービスが判断するため、実装やサイトマップ送信による保証はできない。
