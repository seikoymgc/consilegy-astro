# 公開済み記事の全件監査 batch-05 再レビュー（2026-11-20）

- レビュー担当: Claude Code CLI（Opus 5.5）。原稿執筆者（Codex）とは別に確認した。記事・画像・既存レビューは編集していない。
- 照合したもの: 現在の原稿12ページ、`../audit-2026-11-20/batch-05-applied.json`（修正記録）、`batch-05-findings.json`（初回指摘）、`public-evidence.md`（追加の一次確認）、`../crm-run` の実装。
- 確認方法: 静的な読解だけ。実機・ブラウザ・認証は使っていない。Zapierの公開ページの「Beta」表示は、Codexがブラウザで確認した記録（public-evidence.md）に基づく。私自身は閲覧していない。
- 初回レビューの成果物（`2026-11-20-audit-batch-05.md` と `batch-05-findings.json`、12ページ分）は揃っていることを確かめた。
- 機械処理用の記録: `../audit-2026-11-20/batch-05-recheck-findings.json`

## 結論

| 記事 | 言語 | 未解決 Critical | Major | Minor | 判定 |
|---|---|---|---|---|---|
| meeting-notes-stay-in-the-notebook | ja | 0 | 0 | 1 | 公開継続可 |
| meeting-notes-stay-in-the-notebook | en | 0 | 0 | 1 | 公開継続可 |
| meeting-promises-nobody-tracks | ja | 0 | 0 | 0 | 公開継続可（変更なし、初回判定のまま） |
| meeting-promises-nobody-tracks | en | 0 | 0 | 0 | 公開継続可（変更なし、初回判定のまま） |
| monday-meetings-end-without-deciding-what-to-focus-on | ja | 0 | 0 | 0 | 公開継続可（変更なし） |
| monday-meetings-end-without-deciding-what-to-focus-on | en | 0 | 0 | 1 | 公開継続可（変更なし、追加指摘あり） |
| new-contacts-get-copied-into-another-app-by-hand | ja | 0 | 0 | 1 | 公開継続可 |
| new-contacts-get-copied-into-another-app-by-hand | en | 0 | 0 | 0 | 公開継続可 |
| new-reps-can-see-every-customer-in-the-crm | ja | 0 | 0 | 0 | 公開継続可 |
| new-reps-can-see-every-customer-in-the-crm | en | 0 | 0 | 0 | 公開継続可 |
| no-one-keeps-a-copy-of-the-customer-data | ja | 0 | 0 | 0 | 公開継続可 |
| no-one-keeps-a-copy-of-the-customer-data | en | 0 | 0 | 0 | 公開継続可 |

初回の Critical 4件・Major 8件はすべて解消した。残りは Minor 4件（デモへの案内文の言い回しと表示名）で、公開を止める理由にはならない。

## 修正済みID（解消を確認）

- **batch-05-001 / 011（Major）** 手書き取り込みの場所。ja 35行・en 35行に「商談・コンタクト・会社の画面の「メモ」にある「手書きを取り込む」」／"press Scan handwriting in the Notes section" が入った（`crm-run/src/components/notes-panel.tsx:124,147-151`、`handwriting-capture.tsx:170`）。スマートフォンで撮り済み写真を選べるという断定は削られ、撮り済みの写真はパソコンのブラウザでファイルを選ぶ説明に変わった。パソコンのブラウザでは `capture` 属性は効かず、通常のファイル選択になる。仕様どおりの範囲の記述で、解消。
- **batch-05-002 / 012（Major）** 期日つき候補が最初からチェック済み。ja 39行・en 39行に入った（`handwriting-capture.tsx:55-56`）。前後の文とのつながりも崩れていない。解消。
- **batch-05-003（Major）** 論理の矛盾。ja 27行「ノートから打ち直す15分が無くならない限り」になり、29行・英語版と整合した。解消。
- **batch-05-004〜010 / 013（Minor）** 本文の裸の「CRM」6か所と「これも」「either」。ja の本文に裸の「CRM」は残っていない（frontmatter の pain は表示対象外として初回も指摘外）。解消。
- **batch-05-015（Minor）** en Zapier の末尾に共有デモでキーを発行しない注意が入った。解消。
- **batch-05-016 / 017（Critical）** CSV取り込みの担当者。ja 42行・en 42行が「営業担当」（Owner）列の説明に変わった（`crm-run/src/lib/crm/csv-import.ts:223-254,349,435,538`、`components/csv-import-dialog.tsx:43`）。同じ箇条の後半（一覧・編集での付け替え、会社の担当者）とも矛盾しない。解消。
- **batch-05-018 / 023（Critical）** 取り込める種類。ja 46行・en 46行がアクティビティを含む4種類になった（`crm-run/src/app/api/activities/import/route.ts`、`components/csv-import-dialog.tsx:84-94`）。解消。
- **batch-05-019 / 024（Major）** 契約終了後の書き出し。ja 48行・en 48行は、FAQ（「ご契約終了日から30日間も書き出せます」）とも実装（`app/(dashboard)/layout.tsx:88` の終了画面）とも矛盾しない書き方になった。「有効なうちに書き出す」「終了前に取り出し方と期限を確かめる」という助言だけを残し、確定できない断定は削っている。読者が誤った行動をとる要素はない。解消。FAQと実装の差そのものは記事ではなく製品側の課題として残る（参考）。
- **batch-05-020 / 025（Minor）** タイムゾーン。会社のタイムゾーン（初期設定は日本時間）に変わった（`api/export/[dataset]/route.ts:124-125`、`lib/region/server.ts:20-30`）。解消。
- **batch-05-021 / 022 / 026 / 027（Minor）** Outlook連携のメール。4か所に入った（`crm-run/src/lib/outlook-sync.ts:51-77,102`）。解消。製品の画面説明（`lib/export/full-export.ts:33`）が「Gmail」だけのままなのは製品側の課題（参考）。

## 継続する指摘

- **batch-05-014（Minor、一部解消）** ja Zapier 56行。共有デモの注意は入ったが、「設定の入口は、…「B2B」を選んで確認してください。」の主述のねじれ（「入口は」→「確認してください」）が残る。R003。

## 追加指摘

- **R001（Minor、ja 手書き）** 今回追加された51行「画面の入口は、[Revenue CRMのデモ](…)で「B2B」を選んで確認してください。」が、R003と同じ主述のねじれになっている。また、共有デモで「手書きを取り込む」を実際に使うとメモとタスクが共有の環境に保存される（`handwriting-capture.tsx:102-148`）。他の記事と同じ「見るだけ」の注意がない。
- **R002（Minor、en 手書き）** 51行 "To explore the screens, choose **B2B sales** in the [Revenue CRM demo](…)." に、共有デモで取り込み・保存をしない注意がない（R001と同じ理由）。
- **R004（Minor、en 月曜の会議）** 初回は未確認としていたデモの表示名を確認した。英語の表示は "B2B sales"（`crm-run/src/lib/demo.ts:14-17`）で、日本語は「B2B」。en 55行は `choose "B2B"` となっており、画面と一致しない。ほかの英語記事（同じバッチの5本）は "B2B sales" で揃っている。

## 3工程と6領域の確認

- ①事実検証（領域1・6）: 修正箇所はすべて一次実装で裏づけを確認した。新しい体験談・効果の数字・未確認の主張は加わっていない。筆者の経歴（8年、HubSpot・Salesforce）は初回と同じ記載で、サイトの他ページと一致。日英の事実差なし。
- ②編集（領域2・3・5）: 修正後も各記事の構成（課題→機能→注意→最初の一歩）は保たれている。手書きの記事は、ボタンの場所が入ったことで最初の一歩を実行できるようになった。機械的に置換して意味がずれた箇所はない（batch-05-002 の追加文と、続く「読み違いがそのまま予定に化けないための順番で」もつながる）。
- ③校正（領域4・6）: エムダッシュ、Excel（日本語版）、AI搭載、ノマド、「ヶ月」はなし。残る校正の指摘は R001〜R004 の4件。
- 画像: 変更なし。初回の確認結果（表紙と本文の画像は本文と一致）のまま。月曜の会議の記事の表紙（題名の途切れ、ピンクの線）は、初回と同じく生成スクリプト側の課題として参考に記録し、件数には数えない。

## 未確認の範囲

- 実機での操作はしていない。
- Zapier公開ページの表示は、Codexの閲覧記録に基づく。
