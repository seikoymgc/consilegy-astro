# Revenue CRM：再クロールとAI引用の追跡

開始日：2026-10-26（日本時間）

## 記録を分ける

| 記録 | 根拠 | 保存項目 |
| --- | --- | --- |
| 公開反映 | 公開URLの本文・構造化データ | 観測日時、反映された変更、URL |
| 再クロール・登録 | Google Search ConsoleのURL検査 | URL、観測日時、登録状態、前回クロール、取得結果、Google選択canonical |
| AI引用 | Bing Webmaster ToolsのAI Performanceなど、実際の引用を確認できる情報 | サービス、集計期間、URL別引用数、クエリ、取得日時、確認できる回答・出典リンク |
| 補助観測 | 公開検索結果・検索ツールの取得内容 | 検索日、検索条件、URL、取得できた文言。AI引用数や再クロール確認に代用しない |

再クロール済み、インデックス登録済み、AI回答への引用あり、はそれぞれ別の状態。公開ページを読めたことや検索結果に出たことだけで、再クロール済みとはしない。確認できない引用数は `null`（未取得）とし、0としない。

## 初回の確認

Search Consoleの既存Chromeログインを使い、主要10URLを検査した。詳細は `crm-crawl-baseline-2026-10-26.json`。日時はSearch Consoleの表示をそのまま記録し、表示のタイムゾーンは未確認としている。

- 8URLは登録済み。取得は成功し、Google選択canonicalは検査対象URL。
- `/crm/standard/` と `/crm/services/` は未登録。「URL が Google に認識されていません」と表示された。
- `/crm/` の最終クロール表示は `2026/10/24 22:59:00`。
- スクール版の最終クロール表示は `2026/10/23 12:10:18`。
- FAQ一覧の最終クロール表示は `2026/10/16 5:49:45`。
- `/crm/` のサイトマップ欄には「一時的な処理エラー」の表示があった。ページ自体の取得失敗とは区別して記録する。

新規事例 `/case-studies/revenue-crm-school-line-booking/`、FAQ一覧の構造化データ変更、スクール版からの事例リンクは、ユーザーの公開指示を受けてmainへpushし、2026-10-26 13:57（日本時間）に本番反映を確認した。コミットは `246a806468f23f218657226c5eb86cac9e1065e0`、GitHub Actions実行は `40271558626`（成功）。公開確認の詳細は `crm-publication-2026-10-26.json`。Googleの変更後再クロールと、その後のAI引用は引き続き別に判定する。

Bing Webmaster Toolsは初回確認時にサイト未登録だった。Search ConsoleからのImportは自動承認レビューで停止した後、2026-10-26にユーザーが取り込みを明示承認した。GoogleのSearch Console読み取り権限を許可し、取り込み対象は `https://consilegy.com/` の1サイトだけに限定して実行した。同日13時台（日本時間）に登録完了を確認し、AI Performanceレポートを開けた。初回JSONは取り込み前の状態として保持し、取り込み後は `crm-bing-observation-2026-10-26.json` に記録する。

AI Performanceの対象は画面上の「Microsoft Copilots and Partners」。ChatGPTやGoogleのAI回答を含む全サービスの引用数ではない。比較期間は原則30日間とし、画面に集計の開始日・終了日が表示される場合はその値も保存する。

取り込み後の初回表示では、2026-09-26〜2026-10-25のTotal CitationsとAvg. Cited Pagesはいずれも0、ページ別・クエリ別の表は「No data available」「0 rows」だった。登録直後の表示値として残し、URLごとの引用数や過去の引用有無は断定しない。サイトマップ `https://consilegy.com/sitemap-index.xml` は「Imported」「Success」、最終クロール表示は `10/26/2026` だった。

## 定期確認

このチャットに紐づくheartbeatを作成済み。

- 名前：Revenue CRMの再クロールとAI引用を追跡
- ID：`revenue-crm-ai`
- 毎朝9時（日本時間）に再クロールを確認する。
- 毎週月曜に、利用できる場合はAI Performanceの引用を確認する。集計期間を揃え、対象サービスの範囲を明記する。
- 新規事例の公開、未登録URLの登録、再クロールの進展、新たな引用、登録解除や取得失敗、新たに必要なユーザー操作があったときだけ通知する。変化がない間、または既知の取得不能が続く間は通知しない。

観測だけを行い、コミット・push・デプロイ、インデックス登録リクエスト、外部への投稿はしない。Search ConsoleやBingの追加権限が必要なら未確認と記録する。

## 今後の保存

日付ごとの `crm-observation-YYYY-MM-DD.json` に、`publication`、`crawl`、`citations`、`retrievalObservations` を分けて保存する。初回JSONは上書きせず基準値として残す。引用数の比較では、サービスと集計期間が違う値を混ぜない。

再クロール後に引用されても、今回の改修が原因と断定しない。Search ConsoleのWeb検索パフォーマンスは、AI引用数の専用指標として扱わない。
