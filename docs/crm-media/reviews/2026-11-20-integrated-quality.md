# 2026-11-20 新規4本の統合品質レビュー

> これは初回原稿の判定記録。代表の追加指示で修正を進め、修正後の判定は [再レビュー](2026-11-20-recheck.md) に記録する。以下の「承認待ち」は初回時点を表す。

- 基準: [記事の品質チェックリスト（統合版）](../article-quality-checklist.md)、`daily-run.md` 工程7、`README.md`
- 実施: 2026-11-20、Claude Code（執筆には関与していない独立レビュー）。記事ごとに ①事実検証 → ②編集レビュー → ③校正・推敲 の順。
- 対象（未公開・未コミット）:
  - A. `src/content/crm-media/ja/old-mailing-lists-stay-because-deleting-contacts-feels-risky.md`
  - B. `src/content/crm-media/en/old-mailing-lists-stay-because-deleting-contacts-feels-risky.md`
  - C. `src/content/crm-media/ja/reception-cannot-register-students-without-an-admin-role.md`
  - D. `src/content/crm-media/en/reception-cannot-register-students-without-an-admin-role.md`
  - 表紙: `public/images/crm/media/hero2/<上記slug>.webp` の2枚、比較画像 `outputs/cover-comparison-2026-11-20.png`
- 一次情報: 隣の作業コピー `crm-run`（main 61c5428 として受け渡されたもの。行番号はこの日の内容）。サイトの `src/data/crm-updates.ts`、既刊記事。
- 確認方法: すべて実装の静的な読み取り。デモ・本番の画面は開いていない。ログイン・保存・削除・権限変更は一切していない。以下の「確認済み」は「コードで確認」の意味で、実機テスト済みではない。
- 原稿・画像・CRM・サイトコードは変更していない。git commit / push もしていない。指摘と修正案だけを出す。**どの修正も代表の明示承認待ち。**

## 集計

| 記事 | Critical | Major | Minor | 対応済み | 未解決 Critical/Major | 要確認 | 公開判定 |
|---|---|---|---|---|---|---|---|
| A. B2B 日本語 | 0 | 1 | 3 | 0 | 1 | 0 | **公開不可**（Major 未解決） |
| B. B2B 英語 | 0 | 1 | 3 | 0 | 1 | 0 | **公開不可**（Major 未解決） |
| C. B2C 日本語 | 1 | 1 | 1 | 0 | 2 | 1 | **公開不可**（Critical 未解決） |
| D. B2C 英語 | 1 | 1 | 2 | 0 | 2 | 1 | **公開不可**（Critical 未解決） |
| 計 | 2 | 4 | 9 | 0 | 6 | 2 | |

- Minor の件数は、A・B共通の表紙画像の指摘（IMG-1）をA・Bそれぞれに1件として数えた。
- 「要確認」は本番データの状態（C-1・D-1の前提が実際の教室でどうなっているか）。コードだけでは確定できない。

---

## 背景の確認

- B2Bの根拠PR: `src/data/crm-updates.ts:45-57`（2026-11-19、editions b2b/contractor/reseller、「リストを詳細画面から削除できます」、PR #459）。記事は「リスト全体の削除」で、既刊 `afraid-to-delete-so-nobody-cleans-the-list`（コンタクトのゴミ箱・復元）とは別の操作。本文17行目・21行目で区別して書けている。言い換えだけの記事ではない。
- B2Cは既存機能の再検証。既刊との関係:
  - `phone-enrollments-stay-in-the-paper-register`（11/19、個別登録）: 本記事は登録の「許可」の話で、手順の記事へリンクしている。重複ではない。
  - `teachers-see-fee-amounts-too`（料金の閲覧権限）: 同じ「権限管理」画面だが、対象は請求の行。重複ではない。
  - `new-teachers-share-the-owners-login`（招待）: 45行目で「「一般」は、生徒・レッスン・課題を扱えます」と書いている。**本記事の前提（一般は生徒を作成できない）と食い違う**（C-1）。
- 本文スクリーンショットなし: 2026-11-20、CodexがCUAでデモの認証切れを確認し、閲覧のみでログイン・保存をしていない、との申告。README「画像」の「撮れないときは画像なしで公開してよいが、理由を報告する」の例外に当たる。Claudeは画面を開いていないので、この申告自体は検証していない。本文は画面を撮影済みとして扱っていない（問題なし）。
- 表紙: Recraftの指定プロジェクトが未ログインのため imagegen で生成、との申告（未検証）。目視の結果は下の IMG-1 と各記事の③。

---

## A. B2B 日本語「終わった企画の配信リストを、顧客まで消えそうで片付けられない」

### ①事実検証（領域1・6）

照合して問題なし:

| 原文（行） | 根拠 |
|---|---|
| 「このリストを削除」（21・33行） | `crm-run/src/app/(dashboard)/lists/[id]/list-detail.tsx:189` |
| 「消すのは、そのリストと…所属です。コンタクト自体は消しません」（21行） | `list-detail.tsx:77`（`contact_lists` の行だけを delete）、`supabase/migrations/003_marketing_sales_cs.sql:16`（`contact_list_memberships.list_id … on delete cascade`）。`contacts` 側へは何も波及しない |
| 「詳細のコンタクト表より下にある」（33行） | `list-detail.tsx:186-191`（表の後、区切り線の下） |
| 確認画面の「リスト名」「コンタクト自体は消えません」「元に戻せません」（34行） | `list-detail.tsx:70-74`（`window.confirm`） |
| 「戻ったリスト一覧から…なくなった」（35行） | `list-detail.tsx:87-88`（`/lists` へ戻して再取得） |
| 「表の各行にあるゴミ箱のアイコンは、その人をこのリストから外す」（37行） | `list-detail.tsx:91-97, 172-176`（`contact_list_memberships` の1行だけを delete） |
| 「元へ戻す操作がありません」（43行） | ゴミ箱の仕組み（`deleted_at`）は `contact_lists` に無く、物理削除（`003…sql:4-13`、`list-detail.tsx:77`） |
| 条件を設定したリストの条件も消える（45行） | 条件は `contact_lists.filter_criteria` に入っており行ごと消える（`003…sql:9`、`lists/[id]/page.tsx:50-57`） |
| エラー文「このリストは削除できませんでした。メール配信で使われている可能性があります。」（47行） | `list-detail.tsx:79-83` と一字一句一致。「この文だけで原因を断定せず」は、実装がどの error でも同じ文を出すこと（`:78`）と合う |
| 「HubSpotなど別のサービスへ送ったリストまで…消す操作ではありません」（49行） | `deleteList` は HubSpot の API を呼ばない（`list-detail.tsx:68-89`）。HubSpotへの送信は別関数 `pushToHubspot`（`:38-64`） |
| 組織の外のリストは消せない | `006_organizations.sql:291-292, 296-302`（RLS は organization_id で絞る） |
| 「B2B」（57行） | `crm-run/src/lib/demo.ts:16` |

| ID | 工程 | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案 | 対応状況 |
|---|---|---|---|---|---|---|---|
| A-1 | ① | 「…と出た場合は、画面の案内に沿って、配信での利用を確認します。この文だけで原因を断定せず、一覧を開き直して状態を確かめてください。」（47行） | 記事の主題（終わった**配信**リスト）の典型例で、削除が必ず失敗することを書いていない。Revenue CRMの「メール」でキャンペーンの宛先に選んだリストは、下書き・送信済み・キャンセルのどれでも外部キーで削除できない。キャンペーンを消す画面も、宛先リストを付け替える画面も無いので、読者は「配信での利用を確認」しても解消できない。「画面の案内」も、エラー文以外に存在しない。読者は手順どおりに押して失敗し、次の手が無い | `003_marketing_sales_cs.sql:93`（`email_campaigns.list_id references contact_lists(id)`、ON DELETE 指定なし＝削除を拒否）。この制約を変える migration は無い（`contact_lists`・`list_id_fkey`・`alter table email_campaigns` を全 migration で検索）。キャンペーンの削除・`list_id` 更新はアプリに無い（`src` 全体で `email_campaigns` の delete なし、update は本文 `emails/[id]/email-detail.tsx:98` と送信状態 `lib/campaign-send.ts:172,213` だけ）。宛先リスト名が出るのは下書き・予約の送信確認だけ（`emails/[id]/page.tsx:33-43`、`email-detail.tsx:154-155`）。デモの唯一のリスト「ニュースレター購読者」も2件のキャンペーンが参照している（`api/demo/seed/route.ts:433-435, 460-473`）。いずれも静的確認で、実機で削除を試してはいない | Major | 47行を次に差し替える案:「Revenue CRMの「メール」で一度でも宛先に選んだリストは、下書きのままでも、送信済みでも、今はこの画面から削除できません。押すと「このリストは削除できませんでした。メール配信で使われている可能性があります。」と出ます。キャンペーン側で宛先を外す画面もまだ無いので、こうしたリストは説明欄に「終了」などと書いて区別しておくのが現実的です。この文はほかの原因でも出るため、メールで使った覚えがないリストで出た場合は、一覧を開き直して状態を確かめてください。コンタクトを消して解決する問題ではありません。」あわせて、冒頭か「リストを片付けても…」の節に「消せるのは、Revenue CRMのメールで使っていないリストです」と1文添える。（※説明欄を画面から編集できるかは未確認。採用前に確認するか、その部分を削る） | 承認待ち |

### ②編集レビュー（領域2・3・5）

- 構成・論理: 問題なし。場面→損失→区別すべき2つの操作→手順→不可逆と例外→最初の一歩。見出しだけで要点が追える。
- 具体性・独自性: 問題なし。「リストの削除と所属の削除は別」「顧客が残ることと、リストが復元できることは別」は実装から導いた判断材料で、既刊（コンタクトのゴミ箱）との違いも明確。数字の創作なし。
- 読者体験: A-1を除き問題なし。

| ID | 工程 | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案 | 対応状況 |
|---|---|---|---|---|---|---|---|
| A-2 | ② | 「1. サイドバーの「リスト」を開き」（31行） | 「業務を切り替え」で「営業」「CS」「経営」「管理」を選んでいるとサイドバーに「リスト」は出ない（「マーケ」か、業務未設定・すべて表示のときに出る） | `crm-run/src/lib/personas.ts:26, 34, 42, 50, 58`（`/lists` は marketing だけ）、`:109-116` | Minor | 「1. サイドバーの「リスト」を開きます（業務の表示を「マーケ」にしているときに出ます）。対象のリスト名を押します。」 | 承認待ち |
| A-3 | ② | 「表の各行にあるゴミ箱のアイコンは、その人をこのリストから外すためのものです。」（37行） | 行のゴミ箱は確認画面なしで即座に外れる。37・39行で2つの操作を区別させる記事なので、押し間違えたときの挙動まで書くと読者の不安に直接答えられる | `list-detail.tsx:91-97, 173`（確認なしで delete、失敗表示もなし） | Minor | 37行の末尾に「こちらは確認画面を出さずに、押した時点で外れます。」を足す | 承認待ち |

### ③校正・推敲（領域4・6）

- AI特有の表現・定型の締め・誇張・エムダッシュ: 問題なし。
- 一文の長さ・語尾の連続・表記: 問題なし（目視。字数は機械計測していない）。「コンタクト」「リスト」「所属」の用語は一貫している。
- 禁止表現（「AI搭載」「ノマド」、裸の「CRM」、「Excel」、「ヶ月」）: 該当なし。
- CTA: 本文末に1回（57行）。問題なし。

| ID | 工程 | 対象 | 問題 | 根拠 | 重大度 | 修正案 | 対応状況 |
|---|---|---|---|---|---|---|---|
| IMG-1 | ③ | 表紙 `hero2/old-mailing-lists-stay-because-deleting-contacts-feels-risky.webp` | 文字・ロゴなし、暖かい木・柔らかい自然光・明るい室内で、要件は満たす。ただし比較画像の下段左（前日11/19のB2B表紙）と、人物の髪型・紺のカーディガン・頬杖・ノートPC・観葉植物・窓の位置までほぼ同じ構図で、並ぶと同じ写真の使い回しに見える。引きも前日よりやや寄り | `outputs/cover-comparison-2026-11-20.png`（上段左＝今回、下段左＝前日）。AGENTS.md「同じ人物写真を広範囲に使い回さない」 | Minor | 公開は妨げない。差し替えるなら、リストの整理を相談する2人、ファイルや付箋を前にした作業など、構図と人物を変えて再生成。差し替える場合は別ファイル名で（同名差し替え禁止） | 承認待ち |
| | | 本文と画像の整合 | 問題なし（PCで配信リストを見直す担当者の場面）。人物を実在の顧客・社員として扱っていない | | | | |

**公開判定: 公開不可。** 未解決の Major 1件（A-1）。A-1を承認・反映すれば公開可。Minor 3件は未修正のままでも公開可（承認待ち）。

---

## B. B2B 英語「Old campaign lists stay because deleting them feels like deleting customers」

### ①事実検証

日本語版と同じ根拠で照合し、以下は問題なし: **Delete this list**（`list-detail.tsx:189`）、確認文の3要素（`:72`）、行のゴミ箱（`:91-97`）、復元なし、HubSpotに波及しない、**B2B sales**（`demo.ts:17`）。エラー文 "Could not delete this list. It may be used by an email campaign"（`list-detail.tsx:81`）とも一致。"Lists"（`personas.ts:137`）一致。

| ID | 工程 | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案 | 対応状況 |
|---|---|---|---|---|---|---|---|
| B-1 | ① | "check its campaign use and reload the list index to confirm the current state. The message describes a possible cause; it does not prove that cause."（47行） | A-1と同じ。CRMのメールで宛先にしたリストは常に消せず、解消する画面も無い | A-1と同じ | Major | 47行の差し替え案: "A list that has ever been selected as the audience of a Revenue CRM email campaign, whether still a draft or already sent, cannot currently be deleted from this page; you will see **Could not delete this list. It may be used by an email campaign**. There is no screen yet for detaching a list from a campaign, so for now mark such lists as finished in their description. The same message can appear for other reasons, so if the list was never used in a campaign, reload the index and check its state. Deleting contacts will not fix it." あわせて冒頭近くに "You can delete lists that have not been used in a Revenue CRM email campaign." を1文。（説明欄の編集可否はA-1と同じく未確認） | 承認待ち |

### ②編集レビュー

- 日本語版との事実の差: 問題なし（A-1の欠落は両方に共通）。
- 読者適合: 問題なし。"audience picker" "retired promotion" など英語圏のマーケ担当に通じる語で書き直している。

| ID | 工程 | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案 | 対応状況 |
|---|---|---|---|---|---|---|---|
| B-2 | ② | "1. Open **Lists** in the sidebar"（31行） | A-2と同じ | A-2と同じ | Minor | "1. Open **Lists** in the sidebar (it appears when your work view is set to Marketing) and select the list's name." | 承認待ち |
| B-3 | ② | "The trash icon on an individual contact row removes that person's membership in this list."（37行） | A-3と同じ | A-3と同じ | Minor | 文末に "It does so immediately, without a confirmation step." を足す | 承認待ち |

### ③校正・推敲

- 翻訳調・同じ構文の反復・誇張・定型の締め・エムダッシュ: 問題なし。"Contacts remaining in the system does not mean the original grouping can be recovered." は文法上は可だが、"The contacts remaining in the system does not mean…" の方が読みやすい程度で、指摘にしない。
- 画像: IMG-1（A参照）を共有。Minor 1件として数える。

**公開判定: 公開不可。** 未解決の Major 1件（B-1）。B-1を承認・反映すれば公開可。Minor 3件は承認待ちのまま公開可。

---

## C. B2C 日本語「受付担当が生徒を登録するためだけに、管理の役割まで渡している」

### ①事実検証（領域1・6）

照合して問題なし:

| 原文（行） | 根拠 |
|---|---|
| 「権限管理」「一般」「生徒」「閲覧」「作成」「編集」（27-35行） | `crm-run/src/school-app/lib/render.ts:2025, 2030, 2036, 2058` |
| 「運営・マネージャー・管理部の人が操作し」（29行） | `src/app/api/school-app/permissions/route.ts:20`（`guard(STAFF)`）、`authz.ts:133`（owner/admin/teacher）、役割名は `render.ts:43`（owner＝運営、admin＝マネージャー、teacher＝管理部、viewer＝一般） |
| 「PCのサイドバー、または「もっと」から」（31行） | `render.ts:2288`（もっと＝STAFFのみ）、`:2315`（PCサイドバー） |
| 「押した時点で保存の処理が始まります。最後にまとめて押す「保存」ボタンはありません」（38行） | `MockShell.tsx:1010-1018`（押すたびに即 `fetch`）、`render.ts:2059`（「タップで切替＝即保存」） |
| 「見た目が変わっただけで成功と決めず」（38行） | `MockShell.tsx:1013`（先に見た目を切り替え）、`:1017`（失敗を `.catch(() => {})` で捨て、表示なし） |
| 権限は一人ごとではなく役割全体（25行） | `permissions/route.ts:42`（キーは role, object_type）、`194_school_beyonders_copy.sql:184-193`（主キー organization_id, role, object_type） |
| 生徒の作成が権限表で決まる | `src/app/api/school-app/student/route.ts:12`（`guardPerm("student","can_create",STAFF)`）、`authz.ts:148-169`（行があれば行、無ければ fallback） |
| 「設定の行がまだ無い教室では、最初の変更によって同じ行のほかの操作にも初期値が入ります」（44行） | `permissions/route.ts:40-42`（1列だけの upsert）、`pg-query-builder.ts:173`（`defaultToNull: false`＝無い列は既定値）、`194…sql:188-191`（can_view true、can_create/can_edit false） |
| 「連携設定を使える役割へ変更したり、請求の金額を見せたりする操作ではありません」（42行） | 請求は別の行（`render.ts:2025, 2047`）。管理部の範囲は `render.ts:2061` の注記 |
| 「生徒一覧は全員に見える設計です」（46行） | `authz.ts:48-62`（`studentScope` は常に null） |
| 「「監査ログ」に「権限変更」として残ります」（48行） | `permissions/route.ts:44` |
| 個別登録記事と英語表示の注意（48行） | `src/content/crm-media/ja/phone-enrollments-stay-in-the-paper-register.md:32` に「JA」へ切り替える回避策あり |
| 「スクール」（56行） | `demo.ts:31` |

| ID | 工程 | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案 | 対応状況 |
|---|---|---|---|---|---|---|---|
| C-1 | ① | 「本人の「一般」の役割では作成できないためです。」（15行）／「最初の設定では、「一般」の生徒作成は許可されていません。」（44行） | 記事の前提が、製品の初期設定と逆。新しいスクールを作ると、初期設定で「一般」（viewer）の生徒に「閲覧」「作成」「編集」がすべて許可された行が入る。「一般」が作成できないのは、権限の行が1行も無い教室で fallback が効く場合と、教室が自分で外した場合だけ。権限管理の画面の注記自体も「一般との差はそこだけで、生徒・レッスン・タスク・課題はどちらも同じように扱えます」と書いている。既刊 `new-teachers-share-the-owners-login.md:45` も「「一般」は、生徒・レッスン・課題を扱えます」。CTAで案内するデモも「一般」の生徒は作成・編集とも選択済みで始まるので、読者は記事と違う画面を見る | `crm-run/src/lib/school/provision.ts:28-44`（DEFAULT_PERMISSIONS：teacher・viewer の student/lesson/task は can_view・can_create・can_edit すべて true、コメントに「BEYONDERS の本番値を2026-10-22に確認」）、`:129-139`（行として投入）。呼び出しは `src/lib/editions/provision.ts:27`←`src/app/api/orgs/route.ts:288`（組織作成時）と `api/editions/provision/route.ts:23`。デモは `src/school-app/lib/demo-seed.ts:231`（viewer の student/lesson/task すべて true）。画面注記 `render.ts:2061`。fallback（行が無いとき viewer 不可）は `authz.ts:168` と `student/route.ts:12`。194 の列既定値 false は、行を新しく作るときだけ効く | Critical | 前提から組み直す必要があるため、文の差し替えでは直らない。推奨は**本日の公開を見送り、主題を作り直して再レビュー**。作り直しの方向（どれも承認が必要）: ①「初期設定では一般も生徒を登録・編集できる。受付と先生で範囲を分けたい／止めたいときに、権限管理で何がどう変わるか」に主題を変える。②前提を「教室が一般の作成を外している場合」に限定し、15・44行を「教室の設定で、「一般」の生徒作成が外されている場合があります」へ弱める（この場合、表題の痛みが成立する読者は少ない）。③記事を取り下げる。どれでも「最初の設定では許可されていません」は削る | 承認待ち |
| C-1要確認 | ① | 同上 | 実際の各教室（本番データ）で `school_role_permissions` の行があるか、viewer の can_create が今どうなっているかは、コードからは分からない。2026-10-22 以前に作られた教室や、初期設定の投入に失敗した教室（`editions/provision.ts:27-29` は失敗しても組織作成を止めない）では行が無い可能性がある | 本番DBは見ていない | 要確認 | 本番の `school_role_permissions` を確認できるまで、どちらの初期値も本文で断定しない | 要確認 |

### ②編集レビュー（領域2・3・5）

- 構成・論理: 見出しの並び（操作で決める→設定手順→作成と管理部の違い→最初の一歩）は良い。ただしC-1により、場面と損失（15-23行）がそのまま成り立たない。
- 具体性・独自性: 「権限は役割全体に効く」「行が無い教室では最初の変更でほかの操作に初期値が入る」「閲覧で生徒を絞れない」は実装から導いた判断材料で、筆者固有の知見に当たる。C-1の作り直し後も残せる。
- 読者体験: 手順4（押し直して外さない）・5（作成と編集は別）は具体的で良い。

| ID | 工程 | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案 | 対応状況 |
|---|---|---|---|---|---|---|---|
| C-2 | ② | 「6. 画面を開き直し、「一般」の「生徒」の設定が残っていることを確認します。」（36行）／「開き直して確認してください。」（38行） | アプリ内で別の画面へ移って「権限管理」へ戻っても、サーバーから読み直さない。画面の切り替えは表示の出し分けだけで、チップの状態は押した後の見た目のまま残る。保存に失敗していても「残っている」ように見えるので、記事の確認手順では失敗を見つけられない | `MockShell.tsx:59-63`（`go()` は section の active を切り替えるだけ）、`:1010-1018`（押すと見た目だけ先に変え、失敗は捨てる）、`render.ts:2044`（チップの状態は描画時のデータ）。静的確認のみ | Major | 36行「6. ブラウザで再読み込みしてから「権限管理」を開き、「一般」の「生徒」の設定が残っていることを確認します。」、38行「…見た目が変わっただけで成功と決めず、ブラウザで再読み込みしてから確認してください。メニューから開き直すだけでは、保存されたかどうかは分かりません。」 | 承認待ち |

### ③校正・推敲（領域4・6）

- AI特有の表現・定型の締め・誇張・エムダッシュ: 問題なし。
- 禁止表現・表記: 問題なし。
- CTA: 本文末に1回（56行）。問題なし。
- 画像との整合: 問題なし（PCを前に相談する2人と、背後の教室。受付と管理者の場面に合う）。文字・ロゴなし、明るい室内・自然光・木の机・引いた構図。前日のB2C表紙（比較画像の下段右）とは人物・構図が違い、使い回しには見えない。

| ID | 工程 | 原文（場所） | 問題 | 理由 | 重大度 | 修正案 | 対応状況 |
|---|---|---|---|---|---|---|---|
| C-3 | ③ | 「小さな受付業務が、代表の空き時間に依存してしまいます。」（23行） | 15行・25行は「管理者」で、ここだけ「代表」。誰を呼ぶのかが揺れる | 同じ人物を指す語の統一 | Minor | 「…管理者の空き時間に依存してしまいます。」 | 承認待ち |

**公開判定: 公開不可。** 未解決の Critical 1件（C-1）、Major 1件（C-2）、要確認1件。Minor 1件は承認待ち。

---

## D. B2C 英語「Reception needs to register students, without getting an administrator role」

### ①事実検証

日本語版と同じ根拠で照合し、以下は問題なし: **Permissions**・**More**・**Audit log**（`html-en.ts:14, 24`）、**Staff**・**Office**・**Manager**・Operations（`html-en.ts:74, 87`、`EXTRA` が `dict` より優先＝`html-en.ts:279`）、**Create**（`html-en.ts:16`）、**Students**（`html-en.ts:14`）、"Staff cannot perform it themselves"（`permissions/route.ts:20`）、role-wide（C参照）、"Each press starts a save request"、**Schools**（`demo.ts:32`）。権限チップは `data-perm` の値（`role:object:action`、`render.ts:2048`）で送るので、英語表示でも送る値は変わらない（`MockShell.tsx:1011, 1016`）。個別登録記事（英語）に **JA** へ切り替える回避策がある（`en/phone-enrollments-stay-in-the-paper-register.md:32`）。

| ID | 工程 | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案 | 対応状況 |
|---|---|---|---|---|---|---|---|
| D-1 | ① | "Their Staff role cannot create student records."（15行）／"The default rules do not allow Staff to create students"（44行） | C-1と同じ。初期設定では Staff（viewer）も生徒の作成・編集が許可されている | C-1と同じ | Critical | C-1と同じ方針（見送り・主題の作り直し）。最低限 15行・44行の断定を削る | 承認待ち |
| D-1要確認 | ① | 同上 | C-1要確認と同じ | | 要確認 | | 要確認 |

### ②編集レビュー

- 日本語版との事実の差: なし（C-1の誤りも共通）。
- 読者適合: 英語圏の教室運営者に通じる書き方。

| ID | 工程 | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案 | 対応状況 |
|---|---|---|---|---|---|---|---|
| D-2 | ② | "6. Reopen the screen and confirm that the intended Staff settings remain selected."（36行）／"reopen the screen to verify persistence."（38行） | C-2と同じ | C-2と同じ | Major | "6. Reload the page in your browser, open **Permissions** again and confirm that the intended Staff settings remain selected." 38行は "…A chip changing appearance alone is not proof that the request succeeded. Reload the page before checking; switching screens inside the app does not re-read the saved settings." | 承認待ち |
| D-3 | ② | "An authorized operations user opens **Permissions**"（29行） | 直後に役割名 "Operations" が出るため、"operations user" が役割名の一つ（運営）だけを指すように読める。実際は Operations・Manager・Office の3つ | `permissions/route.ts:20`、`render.ts:43` | Minor | "Someone with the Operations, Manager or Office role opens **Permissions** and changes the Staff settings. Staff cannot change permissions themselves." | 承認待ち |

### ③校正・推敲

| ID | 工程 | 原文（場所） | 問題 | 理由 | 重大度 | 修正案 | 対応状況 |
|---|---|---|---|---|---|---|---|
| D-4 | ③ | 題名 "Reception needs to register students, without getting an administrator role" | 主語と目的の間のカンマが不自然。本文で比べている役割は "Office" で、"administrator role" と語が揃わない | 自然な英語・用語の統一 | Minor | "Letting reception register students without giving them the Office role"（C-1の作り直しに合わせて最終決定） | 承認待ち |

- 翻訳調・反復・誇張・定型の締め・エムダッシュ: 問題なし。
- 画像: Cと同じ画像。問題なし。

**公開判定: 公開不可。** 未解決の Critical 1件（D-1）、Major 1件（D-2）、要確認1件。Minor 2件は承認待ち。

---

## 要承認事項（代表の判断が必要なもの）

1. **A-1・B-1（Major）**: 「Revenue CRMのメールで宛先にしたリストは今は削除できない」を本文に明記する差し替え案。採用すればB2Bの2本は公開可。説明欄で「終了」と区別する提案は、説明欄を画面から直せるかが未確認なので、採用前に確認するか削る。
2. **C-1・D-1（Critical）**: B2Cの前提（一般は生徒を作成できない）が初期設定と逆。推奨は本日のB2C 2本を見送り、主題を「初期設定では一般も登録・編集できる。範囲を分けたいときの設定」に作り直して再レビュー。
3. **C-2・D-2（Major）**: 確認手順を「ブラウザで再読み込み」に変える。C-1の作り直し後も必要。
4. Minor 9件（A-2・A-3・IMG-1、B-2・B-3・IMG-1、C-3、D-3・D-4）: 未修正のまま公開してよい。反映する場合も承認後。

## 既刊への影響（今回の対象外。指摘のみ、件数に含めない）

- `ja/phone-enrollments-stay-in-the-paper-register.md`（11/19公開）の「初期設定では運営・マネージャー・管理部が対象」と、11/19レビュー記録の根拠（`authz.ts:133`）は、fallback だけを見ている。初期設定（`provision.ts:34-44`）では一般も生徒を作成できる。英語版も同様。本番データの確認と、代表の判断が必要（要確認）。

## 製品側の要確認（記事の欠陥ではない。CRMは変更していない）

- リスト: キャンペーンで使ったリストは削除できず、キャンペーンの削除・宛先の付け替えの画面も無い（`003…sql:93`）。デモの唯一のリストも同じ状態。
- リスト: 行のゴミ箱は確認も失敗表示も無い（`list-detail.tsx:91-97`）。
- リスト: 削除は役割を問わず組織のメンバー全員ができる（`006_organizations.sql:291-292`。画面側にも役割の判定なし）。
- スクール権限: 初期設定の値（`provision.ts`：一般も作成・編集可）と、行が無いときの fallback（`authz.ts:168`＋各 route の `STAFF`：一般は不可）と、194 の列既定値（作成・編集 false）が一致しない。行の有無で同じ役割の権限が変わる。
- スクール権限: 権限管理の画面は owner のカードを「マネージャー」と表示する（`render.ts:2036`）が、ユーザー一覧などは owner を「運営」、admin を「マネージャー」と表示する（`render.ts:43`）。同じ「マネージャー」が画面によって別の役割を指す。
- スクール権限: チップの保存失敗が画面に出ない（`MockShell.tsx:1017`）。
- スクール権限: PCのサイドバーには「権限管理」が全員に出る（`render.ts:2315`、役割で絞っていない）。一般が押しても見た目だけ変わり、保存は403になる。
- スクール権限（英語表示）: 「閲覧」のチップは `EXTRA` に無ければ `dict` の "Viewer" に訳される可能性がある（`i18n-data.ts:91`）。"View" ではない。画面では未確認。

## できなかったこと

- デモ・本番の画面は開いていない。ブラウザ操作・ログイン・保存・削除・権限変更はしていない。上の根拠はすべて静的なコードの読み取りで、実機テストではない。
- 本番DBの `school_role_permissions` の行の有無・値は確認していない（C-1要確認）。
- `crm-run` が main 61c5428 であることは、受け渡しの申告に従った。git の状態は確認していない（読み取り専用のツールのみ使用）。
- 日本語本文の字数・一文の字数は機械で計測していない（目視）。
- 表紙の生成方法（imagegen）とRecraftの未ログインは、Codexの申告で、Claudeは確かめていない。
