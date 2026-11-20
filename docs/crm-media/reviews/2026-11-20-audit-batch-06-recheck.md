# 2026-11-20 公開済み記事監査 batch-06 再レビュー（Claude Code CLI）

- 対象: 12ページ（6記事×日英）。修正済み10ファイルは現在の原稿を読み直した。変更なしの2ファイル（en/nobody-knows-who-signs-off-on-the-deal、en/past-calls-and-meetings-left-behind-in-the-old-system）は初回判定（公開継続可・指摘なし）を継続。
- 参照: 初回 `2026-11-20-audit-batch-06.md`／`batch-06-findings.json`、変更記録 `batch-06-applied.json`、補足 `public-evidence.md`
- 確認方法: 原稿と crm-run の実装を静的に照合。実機操作・ブラウザ・外部送信・記事編集はしていない。
- 機械処理用: `../audit-2026-11-20/batch-06-recheck-findings.json`

## 結論

初回の Critical 2件・Major 4件・Minor 12件は、全18件が解消した。追加の指摘はなし。未解決は Critical 0／Major 0／Minor 0 で、12ページすべて公開継続可。

## 修正済みID（全18件）

| ID | 記事 | 重大度 | 確認結果 |
|---|---|---|---|
| batch-06-001 | ja inbox | Major | 30行目に「Outlook連携をしていればその人のOutlookから」が入った。送信の順序（Gmail→Outlook→送信ドメイン→共通差出人）は `messages/route.ts:136-147`、`mailbox-send.ts:21-24` と一致。文は2文に分かれ、読みやすさも問題なし |
| batch-06-002 | ja inbox | Major | 35行目「GmailかOutlook、または送信ドメインか…」。001と整合 |
| batch-06-003 | en inbox | Major | 30行目。001と同じ内容で、日英の差なし |
| batch-06-004 | en inbox | Major | 35行目。002と整合 |
| batch-06-005 | en inbox | Minor | 16行目から “with different numbers” が削られ、日本語版と一致 |
| batch-06-006 | ja signs-off | Minor | 17行目「顧客管理システムの商談には」。文の意味は変わらない |
| batch-06-007 | ja meetings | Minor | 40行目に括弧書きで条件を追加。続く「一つは」「もう一つは」の流れも保たれ、46行目「それ以外は自動では入りません」とも矛盾しない（設定オン時の下書きは条件として明示済み）。根拠: `followups/suggest.ts:409-418`、`notifications-view.tsx:270-279` |
| batch-06-008 | ja meetings | Minor | 48行目に燃料不足は「見送り」、利用枠の上限とAIオフは「失敗」を追加。`ingest.ts:93-104` と一致 |
| batch-06-009 | ja meetings | Minor | 16行目「顧客管理システムの商談に入るのは」 |
| batch-06-010 | ja meetings | Minor | 20行目「顧客管理システムの中身は薄くなる」。体言の対応も自然 |
| batch-06-011 | en meetings | Minor | 40行目。007と同じ内容 |
| batch-06-012 | en meetings | Minor | 48行目。008と同じ内容 |
| batch-06-013 | en meetings | Minor | 44行目に「[議事録]」が英語画面でもそのまま出ることを明記。`ingest.ts:289` と一致 |
| batch-06-014 | ja overseas | Critical | 42-43行目。書き直し1回で燃料1、届いたメールは初回だけ燃料1、訳は組織内に保存されて再度訳すときは燃料なし、画面を離れると原文に戻る。いずれも `api/ai/translate/route.ts:52-57, 83`、`record-translation.ts:16-52`、`email-translate.tsx:85-95` と一致。注意の数「5つ」と項目数5も一致 |
| batch-06-015 | en overseas | Critical | 42-43行目。014と同じ内容で、日英の差なし |
| batch-06-016 | ja partners | Minor | 47行目。コンタクトは所属会社の区分になる注記が入った。`csv-import.ts:281-290, 422, 345` と一致。初回は needs-confirmation としたが、新規行の挙動はコードで確定しており、記事は製品の確認表示との差を正しく補っている。既存コンタクトの更新経路は記事が言及していないため、残す未確認事項はない |
| batch-06-017 | en partners | Minor | 47行目。016と整合 |
| batch-06-018 | ja past-calls | Minor | pain（ページの説明文）が「スプレッドシート」に変わった |

## 初回の未確認事項

- online-meetings（日英）の「HubSpotとSalesforceの導入支援を8年」: サイトの公開プロフィール `src/lib/crm-media.ts:124`（authorBio「HubSpot、Salesforceの導入支援に約8年携わり」）と、`src/pages/crm/index.astro:320`、`src/pages/news/revenue-crm-release/index.astro:60-61` の記載と一致する。新しい体験談や数字は加わっていない。基準どおり解消とする。
- inbox（日英）の「実機での差出人は未検証」: 送信経路はコードで確定する仕様のため、本文の事実としては解消。
- partners（日英）の「既存コンタクトを更新する経路」: 本文はこの経路に触れていないため、本文の事実に関わる未確認事項ではない。

## 継続する指摘

なし。

## 追加指摘

なし。機械的に適用した置換で意味がずれた箇所、文の破損、日英の不整合は見つからなかった。英語版の “CRM” は表記ルールの対象外のため指摘しない。

## 記事ごとの判定

| 記事 | ja | en |
|---|---|---|
| nobody-knows-who-answered-the-info-inbox | 公開継続可 | 公開継続可 |
| nobody-knows-who-signs-off-on-the-deal | 公開継続可 | 公開継続可（変更なし、初回判定を継続） |
| online-meetings-stay-in-the-speakers-head | 公開継続可 | 公開継続可 |
| overseas-emails-wait-for-the-one-english-writer | 公開継続可 | 公開継続可 |
| partners-and-vendors-counted-as-leads | 公開継続可 | 公開継続可 |
| past-calls-and-meetings-left-behind-in-the-old-system | 公開継続可 | 公開継続可（変更なし、初回判定を継続） |
