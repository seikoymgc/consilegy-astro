# 2026-11-20 全件監査 batch-01 再レビュー（Claude Code CLI）

- 対象: 初回と同じ12ページ（6記事×日英）。変更10ページは現在の原稿を全文読み直し、変更なしの2ページ（bosses ja/en）は初回判定を引き継ぎつつ初回の未確認点を再確認した
- 照合: `../audit-2026-11-20/batch-01-applied.json`（40件＋動画言及の削除2件）、`batch-01-findings.json`、`public-evidence.md`、crm-run 最新mainの実装
- 方法: 静的なコード照合のみ。実機・ブラウザ・デモ操作は行っていない。原稿・画像・既存レビュー文書は編集していない
- 重大度は初回と同じ基準（現行製品の挙動・存在の誤り＝Critical／前提の欠落や誤操作の恐れ＝Major／表記・補足＝Minor）

## 結論

初回指摘40件（batch-01-001〜040）は全件、原稿に正しく反映され、意味のずれも無いことを確認した。動画の言及の削除（asking ja/en）も、本文の流れを壊していない。

ただし、初回レビューで見落としていた事実誤りが1記事（bulk-and-one-to-one-email）に見つかった。名刺の読み取り画面には「営業メールを送ってよい」（初めからチェック済み）と「メルマガを送ってよい」（初めは未チェック）の欄があり、本文の「名刺で入れた相手は未判定」「名刺で入れた相手には配信の同意が無い」は現行の動きと合わない。この記事は日英とも修正必須とする。初回で見落としたのはレビュー側の不備。

ほかにMinorが7件あり、うち1件は機械的な適用で英語の代名詞の指す先が変わった箇所（R001）。

## 集計（再レビュー後の未解決）

| 記事 | 言語 | Critical | Major | Minor | 判定 |
|---|---|---|---|---|---|
| afraid-to-delete-so-nobody-cleans-the-list | ja | 0 | 0 | 0 | 公開継続可 |
| afraid-to-delete-so-nobody-cleans-the-list | en | 0 | 0 | 0 | 公開継続可 |
| ai-policy-undecided-so-the-whole-rollout-stalls | ja | 0 | 0 | 0 | 公開継続可 |
| ai-policy-undecided-so-the-whole-rollout-stalls | en | 0 | 0 | 1 | 公開継続可 |
| asking-people-where-the-deal-stands | ja | 0 | 0 | 0 | 公開継続可 |
| asking-people-where-the-deal-stands | en | 0 | 0 | 0 | 公開継続可 |
| billing-and-customer-records-live-apart | ja | 0 | 0 | 2 | 公開継続可 |
| billing-and-customer-records-live-apart | en | 0 | 0 | 1 | 公開継続可 |
| bosses-get-screenshots-instead-of-crm-access | ja | 0 | 0 | 1 | 公開継続可 |
| bosses-get-screenshots-instead-of-crm-access | en | 0 | 0 | 0 | 公開継続可 |
| bulk-and-one-to-one-email-get-mixed-up | ja | 1 | 1 | 2 | 修正必須 |
| bulk-and-one-to-one-email-get-mixed-up | en | 1 | 1 | 1 | 修正必須 |
| 合計 | | 2 | 2 | 8 | |

## 修正済み（解消）ID

batch-01-001〜batch-01-040 の全40件。

| ID | 記事 | 確認内容 |
|---|---|---|
| 001・005 | afraid ja/en | 「200件ずつ」「さらに読み込む／Load more」に修正済み（trash-view.tsx:74-88,212-218） |
| 002・006 | afraid ja/en | リストの詳細画面に出ない、所属は残る、一覧の人数には含まれることがある、に修正済み（lists/[id]/page.tsx:17-22、lists/page.tsx:8） |
| 003・007 | afraid ja/en | 手入力の文言を維持し、名刺は内容で説明、CSVは「スキップ（既にあるデータ）」と現行の理由文に修正済み。初回の未確認（名刺の文言）は、断定を外したので解消 |
| 004・008 | afraid ja/en | 監査ログの閲覧権限と英語のラベルを修正済み |
| 009・010 | ai ja/en | スイッチの位置を「AI機能: オン」の右と書き、自動翻訳の別スイッチを明記。ただし英語は語順で指す先がずれた（R001） |
| 011・014 | asking ja/en | 「業務を切り替え」で営業か経営を選ぶ条件と見出しを明記 |
| 012・015 | asking ja/en | サイドバーの見出しを「商談／Deals」に修正 |
| 013・016 | asking ja/en | 例文が「経営」選択時に出る条件と英語の文言を修正 |
| 017・024 | billing ja/en | 「受け取るイベント（全部選んでください）／Events to send (select all)」13種類に修正（stripe-view.tsx:22-29,187-190。数え直して13件） |
| 018・025 | billing ja/en | 空欄なら保存済みのシークレットを使う、に修正 |
| 019・026 | billing ja/en | 2つのボタンともowner/adminだけに表示、を明記 |
| 020・027 | billing ja/en | コンタクトのアクティビティタブにも同じ文が出る、に修正 |
| 021・028 | billing ja/en | 支払い失敗タスクの自動完了と、返金・異議申し立て・回収不能を補足 |
| 022・029 | billing ja/en | 画面から出した請求とリンクはコンタクトに結びつき、外部の顧客はメールで照合、に修正 |
| 023 | billing ja | 本文の裸の「CRM」を修正 |
| 030・038 | bulk ja/en | 「営業」で出ないのは「リスト」だけ、に修正 |
| 031・039 | bulk ja/en | 「送信内容の確認」を経て「○人に送信する／Send to N」で送る、に修正 |
| 032・040 | bulk ja/en | 確認画面の文言とボタンが押せないことに修正 |
| 033〜037 | bulk ja | 本文の裸の「CRM」5か所を修正 |

追加の変更（動画言及の削除、asking ja/en）: 本文から削除済みで、前後の文はつながっている。frontmatter の `video: "3"` は残っているが、サイトの表示側で使われていない（`src/content.config.ts:138` で定義のみ、描画箇所なし）ため、読者には見えない。指摘しない。

## 初回の未確認点の扱い

| 記事 | 初回の未確認 | 再レビューでの扱い |
|---|---|---|
| afraid | 名刺の重複時の文言 | 本文が文言を断定しない形になったので解消 |
| billing | デモで2つのボタンが見えるか | デモの利用者は admin で作られる（crm-run `src/app/api/demo/seed/route.ts:116`）。ボタンはowner/adminに出る作り（contacts/[id]/page.tsx:219）なので、静的には見える。解消 |
| bosses | 閲覧のみの人のホーム見出し「ワークスペースの状況」 | 見出しは利用者の業務の役割（profiles.job_roles）と「業務を切り替え」の選択で変わる（`src/app/(dashboard)/layout.tsx:49-56`、`src/lib/home/department-view.ts:48-59`）。役割を持たない場合だけの表示なので、断定を外す修正案を出す（R005、Minor） |
| bulk | 配信の同意がフォーム以外で記録されるか | 名刺の読み取り画面でも記録される（`src/lib/cards/consent.ts:41-68`、`card-scan-view.tsx:76-77,590-597,1184-1203`）。本文の誤りとして R006・R007・R010・R011 で扱う |
| ai | 表紙SVG | 文字SVGで本文の事実に関わらないため対象外とする |

## 継続する指摘

なし（初回の40件はすべて解消）。

## 追加指摘

### bulk-and-one-to-one-email-get-mixed-up（ja / en）: 修正必須

- **R006（ja, Critical）／R010（en, Critical）** 個別メールの段落の「名刺やCSVで入れたばかりの相手は、連絡してよいかが未判定です」
  - 現行の名刺の読み取り画面には「この人に送ってよいメール」があり、「営業メールを送ってよい」は初めからチェック済み（`card-scan-view.tsx:76,1184-1195`）。そのまま保存すると sales_contact_allowed=true と同意の記録が残る（`lib/cards/consent.ts:45-51`、`card-scan-view.tsx:590-597,691`）。名刺で入れた相手は、既定では未判定ではない。下書きの「営業連絡してよい」は未判定の相手にだけ出る（`outbound-draft-editor.tsx:167,225-240`）ので、記事の手順どおりに探すとボタンが無い
  - 修正案: 名刺の既定のチェックで営業連絡可として記録されること、CSVの相手とチェックを外した名刺の相手が未判定であることを書き分ける（JSON参照）
- **R007（ja, Major）／R011（en, Major）** 一斉メールの同意の段落の「CSVや名刺で入れた相手には記録が無く」
  - 名刺の読み取り画面で「メルマガを送ってよい」（初めは未チェック）に付けて保存すると、marketing_opt_in と consent_status=granted が記録され、一斉メールの対象になる（`lib/cards/consent.ts:54-65`、`card-scan-view.tsx:77,1196-1203`）。既定では記録されないので本文は多くの場合当たるが、名刺を「記録の無い経路」と言い切っている
  - 修正案: 同意が記録される経路に名刺のチェックを足し、記録が無いのはCSVの相手とチェック無しの名刺、と書く（JSON参照）
- **R008（ja, Minor）／R012（en, Minor）** 最初の一歩の「「営業連絡してよい」と「承認して送信」まで」。既定で名刺から入れた相手にはこのボタンが出ないため、未判定の相手だけ押す形にする
- **R009（ja, Minor）** frontmatter の `pain` は記事の説明文として描画される（`src/components/CrmMediaArticle.astro:24,37`）。裸の「CRM」が2か所ある。題名の「CRM」はコラム題名の例外として指摘しない

### billing-and-customer-records-live-apart

- **R002（ja, Minor）／R004（en, Minor）** 権限の一文を段落の頭に足したため、「請求書送信」の箇条書きの「使えるのはownerかadminの人です／Owner or admin only」が重複した。箇条書き側を削る
- **R003（ja, Minor）** frontmatter の `pain`（説明文として表示される）に裸の「CRM」

### ai-policy-undecided-so-the-whole-rollout-stalls（en）

- **R001（en, Minor）** 修正案を機械的に差し込んだ結果、「The **Automatic translation of records** switch below it is a separate setting. Only owners and admins can change it.」の順になり、"it" が自動翻訳のスイッチを指して読める。事実はどちらもowner/adminのみ（`ai-features-view.tsx:87,120`、`page.tsx:41`）なので誤りではないが、意図した主語はAIのスイッチ。2文の順を入れ替える

### bosses-get-screenshots-instead-of-crm-access（ja）

- **R005（ja, Minor）** 画像のキャプション「見出しは「ワークスペースの状況」と出ます。」は役割未設定の場合だけ。見出しと表示は選んだ業務で変わる、と弱める

## 各記事の3工程の確認

- afraid（ja/en）: ①反映した文言を実装と再照合し問題なし ②注意4項目の流れは保たれている ③修正部分の文末・括弧・英語の表記ゆれなし。公開継続可
- ai（ja）: ①②③問題なし。（en）③のみR001
- asking（ja/en）: ①反映した見出し・条件・例文は実装と一致 ②冒頭の「まず4つの数字を見る」という主張は、条件付きの説明が入っても崩れていない。動画の削除後も最初の一歩は完結 ③問題なし
- billing（ja/en）: ①13種類・空欄維持・権限・タイムライン・自動完了・結びつけの経路を実装と再照合し一致 ②補足が増えたが「請求はStripeのまま、結果を顧客記録へ」の主張は保たれている ③R002〜R004
- bosses（ja/en）: 変更なし。初回判定を継続。R005のみ
- bulk（ja/en）: ①R006・R007・R010・R011 ②最初の一歩がR006と連動して不整合（R008・R012） ③修正済みの「システム」「顧客管理システム」の言い換えは自然。R009
