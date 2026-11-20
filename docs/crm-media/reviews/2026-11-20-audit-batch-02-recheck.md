# 2026-11-20 全件監査 batch-02 再レビュー（Claude Code CLI）

- 対象: 初回と同じ12ページ。変更があったのは8ファイル（bulk en、名刺 ja/en、チャット ja/en、ChatGPT ja/en、商談ステージ ja）。契約更新 ja/en、bulk ja、商談ステージ en は変更なしで、初回判定（公開継続可）を継続
- 照合したもの: 現在の原稿、`../audit-2026-11-20/batch-02-applied.json`、`batch-02-findings.json`、`public-evidence.md`、CRM `../crm-run` の実装、サイトの `src/data/crm-faq.ts`・`src/lib/crm-media.ts`
- 方法: 静的な確認だけ。実機の操作、ブラウザでの表示確認、外部への送信はしていない。原稿・画像・既存のレビュー文書は編集していない
- 機械処理用の記録: `../audit-2026-11-20/batch-02-recheck-findings.json`

## 結論

未解決の Critical は0件、Major も0件。残っているのは Minor 1件（名刺 en）だけ。12ページすべて公開継続可。

## 修正済み（解消）にしたID

| ID | 記事 | 確認内容 |
|---|---|---|
| 001 | bulk en | 規範としての書き方に変わった（22行目）。問題なし |
| 002 | 名刺 ja | 39行目。確認画面の「この人に送ってよいメール」、初期値チェック済み、外したときの文言、ボタン「営業連絡してよい」、次の名刺への引き継ぎ、登録済みの人の扱いが実装と一致（`card-scan-view.tsx:76,1185-1208`、`cards/consent.ts:45-52`、`outbound-draft-editor.tsx:225-241`）。文章のつながりも自然 |
| 003 | 名刺 en | 39行目。002と同じ内容で、英語のUI文言（"Emails you may send to this person"、"Allow sales contact" など）とも一致 |
| 004 | 名刺 ja | 57行目。重複時の文言、差分のチェック、更新ボタン、画像の添付、下書きが作られないことが実装と一致（`card-scan-view.tsx:599-647,712-723,1106-1153,1222`） |
| 005 | 名刺 en | 57行目。004と同じ内容 |
| 006 | 名刺 ja | 修正案は使わず、段落ごと削除。名刺の流入元の値 `business_card` は、mkt-05 が使う inflow の判定パターン「business card」（空白入り）と一致しない（`public-evidence.md`、`revops/inflow.ts:35-54`、`card-scan-view.tsx:684`）。周辺の機能の説明なので、削除で解消とした。58〜60行目に空行が3つ残っているが、表示には影響しない |
| 007 | 名刺 en | 誤った文は削除済み。ただし前の1文が残っている。新しい指摘 R001 を参照 |
| 008 | チャット ja | 42行目。商談から開いたときも連絡先は選ぶ必要があること、コンタクトから開けばその手順が省けることが、実装と一致（`chat-import-dialog.tsx:277-320`、`deals/[id]/page.tsx:374`）。修正前の「相手を選ぶ手順がない」という誤りは消えている |
| 009 | チャット en | 42行目。008と同じ内容 |
| 010 | チャット ja | 38行目。「チャネル」の後の空白が消えている |
| 011 | ChatGPT ja | 43〜45行目。14本のツールの読み取りと書き込みの範囲、同意画面の表記との差、「消す・送るはできない」が `use-cases.ts:76-288` と一致 |
| 012 | ChatGPT en | 43〜45行目。011と同じ内容 |
| 013 / 014 | ChatGPT ja/en | 前置きが「まだ限りがある」に変わり、本文と矛盾しない |
| 015 / 016 | ChatGPT ja/en | frontmatter の `feature` が現在の権限に合っている |
| 017 | 商談ステージ ja | 53行目が「B2B」に変わり、`demo.ts:16` と一致 |

## 初回の未確認事項

- 筆者の経歴「8年」（名刺・チャット）: サイトの公開プロフィール（`src/lib/crm-media.ts:124,156`、`src/pages/crm/index.astro:320`）と同じ記載なので解消。新しい体験談や数字は増えていない
- 「AIの学習に使われない」（チャット）: `src/data/crm-faq.ts:280-284` と一致するので解消
- 動画「名刺を撮る（3分）」: 日英とも本文から削除。`video` は frontmatter に残っているが、ページには表示されない（`content.config.ts` と各ページを検索して確認）。解消
- mkt-05 の対象に名刺が入るか: 段落の削除で解消（日本語版。英語版は R001 を参照）
- 閲覧範囲の表記（ChatGPT）: `settings/permissions/permissions-view.tsx:47,152` の「閲覧範囲」「担当のみ」「View scope」「Owned」と一致するので解消
- デモの「更新」列（契約更新）: 本文は列を確かめられると言っているだけで、件数や値は断定していない。指摘なし
- 未確認のまま残るもの: ChatGPT記事の表紙SVGと、商談ステージ英語版のスクリーンショット。どちらも今回は開いていない。本文の事実とは関係がない

## 追加の指摘

**batch-02-R001（Minor・名刺 en・編集）**
- 原文: `If your company does a lot of events, run "Find out which ones to turn on" under Automations and pick "Events" as one of your lead sources.`
- 理由: 007の修正で後ろの文だけを消したため、何のために診断するのかが書かれていない指示だけが残った。日本語版は段落ごと消しているので、日英もずれている。文末に空白も残っている
- 修正案: この1文を削除する（日本語版にそろえる）
- 重大度: Minor。誤った事実は無く、読者が操作を誤ることもない

## 新しく入った文のチェック

- 名刺 ja/en の最後に、デモへの案内（CTA）が1つずつ増えた。デモの選択肢名「B2B」「B2B sales」は `demo.ts:16-17` と一致する。CTAは各ページ1回に収まっている。製品ヘルプへの言及は案内の一文で、CTAとは別
- エムダッシュ、裸の「CRM」の不適切な使い方、「AI搭載」「ノマド」は、追加・変更した箇所に無い

## 記事ごとの判定

| 記事 | ja | en |
|---|---|---|
| bulk-emails-sent-without-checking-who-gets-them | 公開継続可 | 公開継続可 |
| business-cards-stay-in-the-drawer | 公開継続可 | 公開継続可（Minor R001 あり） |
| chat-threads-stay-on-personal-phones | 公開継続可 | 公開継続可 |
| contract-renewals-noticed-too-late | 公開継続可（変更なし） | 公開継続可（変更なし） |
| crm-data-pasted-into-chatgpt-by-hand | 公開継続可 | 公開継続可 |
| custom-deal-stages-stay-in-one-language | 公開継続可 | 公開継続可（変更なし） |
