# 2026-11-20 全件監査 batch-04 再レビュー（Claude Code CLI による独立確認）

- 対象: 12ページ（6記事×日英）。変更あり7ファイル、変更なし5ファイル（署名 ja/en、タイムゾーン ja/en、用件の選択欄 en）
- 照合したもの: 現在の原稿（全12ページを読み直し）、`../audit-2026-11-20/batch-04-applied.json`（変更記録）、`batch-04-findings.json`（初回指摘）、`public-evidence.md`、CRM `../crm-run` の実装
- 方法: 静的な照合のみ。実機操作・ブラウザ・外部送信・CRM編集はしていない。記事・画像・既存レビュー文書は編集していない
- 機械処理用: `../audit-2026-11-20/batch-04-recheck-findings.json`

## 結論

初回の Critical 6件・Major 13件・Minor 8件（001〜027）は、全件解消した。未解決の Critical・Major は0件で、12ページとも公開を続けてよい。新たに Minor が2件ある（R001・R002）。どちらも英語版で、公開判定には影響しない。

## 集計

| 記事 | 言語 | 変更 | Critical | Major | Minor | 判定 |
|---|---|---|---|---|---|---|
| emails-from-the-crm-go-out-without-a-signature | ja | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |
| emails-from-the-crm-go-out-without-a-signature | en | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |
| empty-crm-stalls-at-setup | ja | あり | 0 | 0 | 0 | 公開継続可 |
| empty-crm-stalls-at-setup | en | あり | 0 | 0 | 1 | 公開継続可 |
| english-interface-still-shows-the-wrong-business-day | ja | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |
| english-interface-still-shows-the-wrong-business-day | en | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |
| inquiry-form-emails-retyped-by-hand | ja | あり | 0 | 0 | 0 | 公開継続可 |
| inquiry-form-emails-retyped-by-hand | en | あり | 0 | 0 | 0 | 公開継続可 |
| inquiry-types-get-sorted-by-hand-after-submission | ja | あり | 0 | 0 | 0 | 公開継続可 |
| inquiry-types-get-sorted-by-hand-after-submission | en | なし | 0 | 0 | 0 | 公開継続可（初回判定の継続） |
| managers-chase-reps-for-the-monday-numbers | ja | あり | 0 | 0 | 0 | 公開継続可 |
| managers-chase-reps-for-the-monday-numbers | en | あり | 0 | 0 | 1 | 公開継続可 |
| 合計 | | | 0 | 0 | 2 | |

## 修正済みID（全件解消）

batch-04-001〜027。現在の原稿で、置換が該当箇所に入っていることと、前後の文がつながっていることを確かめた。

- **empty-crm（ja 001〜010／en 011〜016）**
  - 解消を確認した内容: 選択肢が5つになったこと、B2Bの既定の自動化が4本になったこと、業態名が現行の画面名になったこと、「業務」（View）の選択欄、表記（顧客管理システム／スプレッドシート／システム）、pain と screens の更新
  - 選択肢・自動化・業態名・選択欄の記述は、初回に照合した実装と一致する（`onboarding-flow.tsx:20-26`、`editions/index.ts:75,84,91,115-118,134,137,155-158`、`catalog.ts:131,146,150,153`、`app-sidebar.tsx:212-233`）
  - 本文に、裸の「CRM」と「Excel」は残っていない。題名と画面名「このCRMの全体像」は表記ルールの例外
- **005／015（筆者の経験談）:** 提案した「何度も見てきました」は使わず、Codex が経験に頼らない一般的な判断・助言の文に置き換えた（customized）。新しい体験談や数字は足していない。サイト本文の「入力の手間」との食い違いも消えた。日本語は「使い始める前の設定に時間をかけすぎると、商談を記録しないまま運用が始まります。まず登録する範囲を決め、必要な設定から進めます。」で、直前の場面とも、後の「先に商談を入れ」とも矛盾しないので解消とした。英語も同じ趣旨で整合している
- **inquiry-form（ja 017〜019／en 020〜022）:**
  - サイドバー見出しが「集客」（英語 Acquire）になり、「業務」（View）の選択欄で「マーケ」（Marketing）を選ぶ書き方になった
  - 「返信したときに連絡先を作る」の例外に一文が添えられた（既定はオフ。`226_form_contact_on_reply.sql:17`）
  - 括弧書きで本文が長くなったが、意味は正確で、読みにくさは許容範囲
- **inquiry-types（ja 023）:** 読点のあとの半角スペースが消えた
- **managers（ja 024〜026／en 027）:**
  - 日本時間の会社と米国のタイムゾーンの会社で、届く日時と週の区切りが分けて書かれた（`weekly.ts:622-657`）
  - 日本語本文と pain の裸の「CRM」は「システム」になった
  - 英語の H2 と frontmatter の feature に残る「10:00 JST」「10時（日本時間）」は既定の会社では正しく、本文で条件を説明しているので問題なし

初回の「要確認」の扱い:

- **empty-crm（筆者の経験）:** 断定ごと削除されたので解消。
- **inquiry-form（既存コンタクトでは同意の項目が変わらない）:**
  - 確認の結果、新しい根拠で裏づけられたので解消した（`037_acquisition_funnel_foundation.sql:13-14`）
  - 列の既定値は marketing_opt_in が false、consent_status が 'unknown' で、どちらも空欄ではない
  - そのため、空欄だけ埋める `blankFill`（`contact-intake.ts:28-37`）は既存の値を上書きしない
  - 同意の記録（consent_events）は既存の人でも1行追加されるが（`submit/route.ts:184-193`）、本文はコンタクトの同意の項目の話なので矛盾しない
- **inquiry-types（「送信した人」の列見出し）:** 主張は穏当で、判定には影響しないので解消扱い。

## 継続する指摘

なし。

## 追加指摘（Minor 2件。どちらも英語版で、初回の修正案に由来する）

| ID | 記事 | 原文 | 理由 | 修正案 |
|---|---|---|---|---|
| R001 | en/empty-crm-stalls-at-setup | screens の `Role switcher at the top of the sidebar \"All\"` | 初回016の置換案が選択肢の部分しかなく、同じ行のサイドバー部分が旧称のまま残った。本文は「View」に直っている。ページには出ない | `\"View\" menu at the top of the sidebar \"All\"` |
| R002 | en/managers-chase-reps-for-the-monday-numbers | "If an owner has set a US time zone" | タイムゾーンを変えられるのはオーナーと管理者（`api/org-settings/region/route.ts:15-16`）。初回027の置換案の書き方が不正確だった | "If an owner or admin has set a US time zone" |

## 製品側への申し送り（初回から継続。記事の欠陥には数えない）

週次ダイジェストの設定画面の説明が「毎週月曜 10:00（日本時間）」のまま（`weekly-digest-view.tsx:70`）。会社のタイムゾーンで送る実装（243）と合っていない。
