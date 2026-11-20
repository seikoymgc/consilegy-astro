# 2026-11-20 公開済み記事の監査 batch-08 再レビュー

- レビュー担当: Claude Code CLI（Opus 5.5）。原稿執筆者（Codex）とは独立して確認した。静的な確認のみ。実機操作・ブラウザ・CRM編集・外部送信はしていない
- 確認した資料: 現在の原稿12本（変更8本は全文を読み直した）、`../audit-2026-11-20/batch-08-applied.json`、初回指摘 `batch-08-findings.json`、`public-evidence.md`、`../crm-run` の一次実装
- 記事・画像・既存レビュー文書は変更していない。commit/push していない
- 機械処理用: `../audit-2026-11-20/batch-08-recheck-findings.json`

## 結論

初回の Critical 2件・Major 9件・Minor 6件（batch-08-001〜017）は、提案どおり適用され、すべて解消した。機械適用による意味のずれ、文の破損、日英の不一致はない。

追加の指摘が1件（Minor）ある。未解決の Critical・Major は0件で、12ページすべて公開継続可。

## 修正済みID（解消を確認）

| ID | 記事 | 重大度 | 確認結果 |
|---|---|---|---|
| batch-08-001 / 003 | same-person ja / en | Major | 手順3が「編集」→「メールアドレス（主）」を消す（Email (primary)）に変わった。300件の制約は一覧のときの補足として残り、「2件のまま置く」は削除。`contact-form-fields.tsx:131-132`、`record-form.ts:87-88` と一致。続く「3を飛ばして…」とも整合 |
| batch-08-002 / 004 | same-person ja / en | Minor | 「Gmail と Outlook の同期」。`outlook-sync.ts:9` と一致 |
| batch-08-005 / 008 | task-deadlines ja / en | Major | 「オーナーか管理者」「Slackとつなぐ」→チャンネル選択→「テスト送信」→チェック→「保存」、上級者向けURL欄の補足。`notifications-view.tsx:166-243`、`notifications/page.tsx:20-25` と一致 |
| batch-08-006 / 009 | task-deadlines ja / en | Major | 再送なしを「この通知では」に限定し、「フォローの下書きと朝のまとめ」（既定オフ）で「今日のまとめ」に置き換わることを追記。`followups/digest.ts:1-9,98-150`、`cron/workflows/route.ts:243-255`、migration 276 と一致 |
| batch-08-007 / 010 | task-deadlines ja / en | Minor | Slackの送り先の説明を更新。上の手順と矛盾しない |
| batch-08-011 | task-deadlines en | Major | 送信は 01:00 UTC 固定、今日・明日は会社のタイムゾーンで判定、米州では前日夕方と当日夕方〜夜に届く、に修正。`task-reminders.ts:44-56,139-166` と一致 |
| batch-08-012 / 013 | task-headings ja / en | Minor | 「入力データの自動翻訳: オフ」の右のスイッチ（Automatic translation of records: off）に修正。`ai-features-view.tsx:101-125` と一致 |
| batch-08-014 / 016 | teammates ja / en | Critical | 名前は訳さない／メモ・活動本文は「翻訳」／見出しは手動または自動翻訳（オーナー・管理者）／ステージ名は「商談ステージ」（Deal stages）で言語別の名前、に修正。`activity-timeline.tsx:140-142`、`email-translate.tsx:127`、`settings-index.tsx:61`、`deals-i18n.ts:71,85` と一致 |
| batch-08-015 / 017 | teammates ja / en | Major | 時刻・通貨は「国と税・タイムゾーン」（Country, tax & time zone）に従う、に修正。`settings-index.tsx:53`、`tt.tsx:39-45` と一致 |

## 初回で要確認だった項目（本文の事実に関わるもの）

- task-deadlines: MQL判定のタイミング → 解消。画面での作成時は `contacts/new/page.tsx:79` から `/api/lead-scoring/calculate` を呼び、それ以外は夜間の `runNightlyMqlTick`（`cron/workflows/route.ts:26`、01:00 UTC＝日本時間10時）
- teammates: AIエージェントが表示言語で答える → 解消（`api/agent/chat/route.ts:49,94` の `chatLangDirective`）。会話の取り込み要約が日本語 → 解消（`chat-parsers/ai-extract.ts:31`）。連絡先CSVの見出しが日本語 → 解消（`api/contacts/export/route.ts:11-15,66`）。一部エラーがブラウザの言語 → 解消（`lib/api-i18n.ts:2,20-22` の Accept-Language）
- same-person: 一斉配信は主アドレスのみ・配信停止は引き継がれない → 解消。足したアドレスの表 `contact_emails` を参照するのは照合系（フォーム・受信・同期・名刺）だけで、配信側の参照はない。配信停止はコンタクト行の項目
- 残る要確認: 本番で「Slackとつなぐ」が有効か（`SLACK_CLIENT_ID` 等の環境変数）。更新履歴（`crm-updates.ts:384-395`）が10/21公開と明記しているため、本文の記述は公開済みの表明と一致する。無効な環境でもURL欄は出るので、手順は破綻しない。表紙画像は今回も存在確認のみ

## 追加の指摘

- **[Minor] batch-08-R001（task-deadlines en）** 連絡可否の確認タスク名
  - 原文: `becomes a "連絡可否を確認" (confirm contact permission) task instead; no Slack or email goes out`
  - 理由: このタスク名は組織の言語で作られる。英語の組織では「Confirm contactability: 氏名」になり、英語版の読者が画面で探す文字列と一致しない。同じ記事の注意にも、通知は組織の言語に従うとある
  - 根拠: `src/lib/mql-handoff.ts:100`
  - 修正案: `becomes a "Confirm contactability: Name" task instead ("連絡可否を確認: 氏名" in a Japanese-language workspace); no Slack or email goes out`

## 継続する指摘

なし。

## 各記事の判定

| 記事 | 言語 | 変更 | Critical | Major | Minor | 判定 |
|---|---|---|---|---|---|---|
| same-person-split-into-two-contacts | ja | あり | 0 | 0 | 0 | 公開継続可 |
| same-person-split-into-two-contacts | en | あり | 0 | 0 | 0 | 公開継続可 |
| starting-a-deal-means-finding-the-same-contact-again | ja | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |
| starting-a-deal-means-finding-the-same-contact-again | en | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |
| task-deadlines-never-reach-the-rep-on-the-road | ja | あり | 0 | 0 | 0 | 公開継続可 |
| task-deadlines-never-reach-the-rep-on-the-road | en | あり | 0 | 0 | 1 | 公開継続可（Minor R001 は任意） |
| task-headings-stay-japanese-in-an-english-interface | ja | あり | 0 | 0 | 0 | 公開継続可 |
| task-headings-stay-japanese-in-an-english-interface | en | あり | 0 | 0 | 0 | 公開継続可 |
| teammates-who-dont-read-japanese-cant-use-the-crm | ja | あり | 0 | 0 | 0 | 公開継続可 |
| teammates-who-dont-read-japanese-cant-use-the-crm | en | あり | 0 | 0 | 0 | 公開継続可 |
| the-marketing-menu-still-follows-someone-elses-workflow | ja | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |
| the-marketing-menu-still-follows-someone-elses-workflow | en | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |

## 校正・読みやすさの所見（指摘として数えない）

- teammates の注意の3点目（ja/en）は、修正で長い一つの箇条になった。意味は正確で破損はない。読みやすさを上げたい場合は、翻訳の説明と日本語のまま残るもの（通話要約・CSV見出し・AIメール下書き・エラー表示）を2つの箇条に分けられる（任意）
- em dash・裸の「CRM」（ja本文）・Excel・AI搭載・ノマドの使用なし。CTAは各記事の末尾に1回。新しい体験談・効果の数字・未確認の動画などの追加はない
