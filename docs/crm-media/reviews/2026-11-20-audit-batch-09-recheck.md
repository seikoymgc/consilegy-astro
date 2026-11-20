# 2026-11-20 batch-09 再レビュー（修正後の確認）

- レビュー担当: Claude Code CLI（Opus 5.5）。原稿執筆者（Codex）から独立した確認。記事・画像・CRM・既存レビュー文書は編集していない。commit/pushしていない
- 読んだもの: 修正後の現在原稿（変更8ファイルは全文を読み直した）、`../audit-2026-11-20/batch-09-applied.json`、`batch-09-findings.json`、`public-evidence.md`、`../crm-run` の一次実装
- 確認方法: 静的確認のみ（コード・データ・原稿）。実機・ブラウザ・認証は使っていない
- 初回の記録: `2026-11-20-audit-batch-09.md` と `batch-09-findings.json`（初回のCLI成果物。全12ページ分あり）
- 機械処理用: `../audit-2026-11-20/batch-09-recheck-findings.json`

## 結論

初回の43件（Critical 8件・Major 6件・Minor 29件）は、すべて正しく解消していた。追加の指摘も無い。12ページとも未解決のCritical・Major・Minorは0件で、公開を続けてよい。

## 修正済みID（43件すべて解消）

| 記事 | 解消したID | 確認内容 |
|---|---|---|
| ja/too-many-screens | 001〜009 | 項目数（31/21/18/12）、「メール」の追加、「業務ごとのメニュー」の注記、「業務」選択欄の説明、「選ぶ」への動詞統一、マイアカウントの操作順、CRM・Excel表記。`personas.ts:26,34,50,91`、`app-sidebar.tsx:208-233`、`app-topbar.tsx:112-131`、`settings-index.tsx:54` と一致 |
| en/too-many-screens | 010〜014 | 日本語版と同じ内容。"View" selector、Email、Menu by role、カンマ抜けを解消 |
| ja/waiting | 015〜021 | 動画の一文を削除。待ち理由と日付の両方が要る点、sal-37がONのときだけタスクが出る点（`waiting.ts:51-60`、`deals.ts:87-99`、`editions/index.ts:84`）。「自社作業待ち」、キャプションを30日に修正。所要時間の数字を削除。CRM表記 |
| en/waiting | 022〜029 | 動画の一文を削除。"Not recorded" / "Waiting on the customer" / "Mark decided" / "Decided but not visible this period" が英語画面（`pipeline-review-view.tsx:89,99,207,359`）と一致。待ち理由の英語ラベル（`waiting.ts:26-30`）と一致 |
| ja/which-automations | 030〜035 | 例を3本に修正し、最初から動いている4本が候補に出ない理由と、法人営業版の新規ワークスペースでは3本も初期ONである点を明記（`recommend.ts:182-188`、`catalog.ts:50,58,114,117`、`editions/index.ts:84`）。11件以上で何も増えない点（`catalog.ts:64-66`）。3回以上と継続課金で加わる自動化（`recommend.ts:115-148`）。キャプションの5本の理由。動画を「選び直す」（`diagnosis-card.tsx:173`）に置き換え。ボタンはオーナーと管理者だけ（`:48,206`）。CRM表記 |
| en/which-automations | 036〜040 | 日本語版と同じ内容で一致 |
| en/closed-days | 041 | "Schools"（`src/lib/demo.ts:30-33`） |
| en/finding-unreviewed | 042・043 | 042はCodexが提案を変え、英語の印の表示名（未確認）を断定しない文にした。"Submitted" 列（`html-en.ts:137`）と印の位置は実装（`render.ts:1645`）どおり。未確認の表示名を書かずに済ませたため、初回のneeds-confirmationは不要になった。043は "Schools" |

## 修正で加わった文の確認（追加の指摘なし）

- waiting・which-automations の日英に、末尾のデモ導線が加わった。日本語は「B2B」、英語は **B2B sales** で、デモの選択肢名（`src/lib/demo.ts:15-19`）と一致する。各記事で本文末のCTAは1回だけ。問題なし
- 日本語版 too-many の frontmatter `sources` に `settings-index.tsx` が加わった。本文の注記の根拠と一致する
- frontmatter の `video`（waiting は "3, 9"、which-automations は "6"）は残っているが、サイトのテンプレートでは表示されない（`src/content.config.ts` と描画側に `data.video` の参照なし）。本文から動画の主張は消えているので、読者に見える未確認の主張は残っていない
- 機械的に置き換えた結果、文が壊れた箇所は無い。日英の事実も一致している。エムダッシュ、「AI搭載」、「ノマド」、本文の裸の「CRM」・「Excel」は、変更した8ファイルのどれにも無い（英語の "the CRM" は英語の一般名詞として使っており、日本語の表記ルールの対象外）

## 初回で未確認だった点の扱い

- 動画の公開の有無（waiting・which-automations）: 本文の主張を削ったので解消
- 英語画面での「未確認」の印の表示名（finding-unreviewed 英語版）: 表示名を断定しない文に変わったので解消
- closed-days のデモにある休講期間2件: 公開デモは毎晩ダミーデータを入れ直す（`src/app/api/school-app/automation/run/route.ts:277-278`、`school-app/lib/demo-seed.ts:234-237`）。固定件数を断定しているのではなく、毎晩戻る初期データなので、指摘にしない
- foreign-teachers の招待後の設定画面で選んだ言語の扱い: 記事は初回から変わっておらず、本文の主張は cookie を設定する箇所が `MockShell.tsx:128` だけであることと矛盾しない。設定画面側の実装は今回も追っていないため、要確認として記録に残す（公開判定は変えない）
- 画像の目視は初回の範囲のまま（未目視の表紙やSVGは追加で見ていない）。今回の修正で画像やキャプションの参照先は変わっていない

## 記事ごとの判定

| 記事 | Critical | Major | Minor | 判定 |
|---|---|---|---|---|
| ja/too-many-screens-for-staff-to-learn | 0 | 0 | 0 | 公開継続可（修正確認済み） |
| en/too-many-screens-for-staff-to-learn | 0 | 0 | 0 | 公開継続可（修正確認済み） |
| ja/waiting-on-the-customer-for-three-months | 0 | 0 | 0 | 公開継続可（修正確認済み） |
| en/waiting-on-the-customer-for-three-months | 0 | 0 | 0 | 公開継続可（修正確認済み） |
| ja/which-automations-to-turn-on-first | 0 | 0 | 0 | 公開継続可（修正確認済み） |
| en/which-automations-to-turn-on-first | 0 | 0 | 0 | 公開継続可（修正確認済み） |
| ja/closed-days-still-count-as-missed-lessons | 0 | 0 | 0 | 公開継続可（変更なし、初回判定を継続） |
| en/closed-days-still-count-as-missed-lessons | 0 | 0 | 0 | 公開継続可（修正確認済み） |
| ja/finding-unreviewed-homework-means-opening-every-student-profile | 0 | 0 | 0 | 公開継続可（変更なし、初回判定を継続） |
| en/finding-unreviewed-homework-means-opening-every-student-profile | 0 | 0 | 0 | 公開継続可（修正確認済み） |
| ja/foreign-teachers-cant-read-the-school-screens | 0 | 0 | 0 | 公開継続可（変更なし、初回判定を継続） |
| en/foreign-teachers-cant-read-the-school-screens | 0 | 0 | 0 | 公開継続可（変更なし、初回判定を継続） |

継続する指摘: なし。追加指摘: なし。問題なし。
