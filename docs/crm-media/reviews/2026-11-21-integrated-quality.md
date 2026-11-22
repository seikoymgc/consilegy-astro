# 2026-11-21 新規4本の統合品質レビュー（初回）

- 基準: [記事の品質チェックリスト（統合版）](../article-quality-checklist.md)、`daily-run.md` 工程7、`~/Claude/_config/roles/seiko.md`
- 実施: 2026-11-21、Claude Code（執筆に関与していない独立レビュー。Codexの自己レビューの代わり）。記事ごとに ①事実検証 → ②編集レビュー → ③校正・推敲 の順。
- セッションID: `31c38b35-016b-4510-aee5-ff2fb0f32ded`
- 対象（未公開・未コミット）:
  - A. `src/content/crm-media/ja/outlook-conversations-stay-in-the-reps-mailbox.md`
  - B. `src/content/crm-media/en/outlook-conversations-stay-in-the-reps-mailbox.md`
  - C. `src/content/crm-media/ja/make-up-lesson-date-changes-before-you-choose-it.md`
  - D. `src/content/crm-media/en/make-up-lesson-date-changes-before-you-choose-it.md`
  - 表紙: `public/images/crm/media/hero2/<上記slug>.webp` の2枚
- 一次情報: 隣の作業コピー `crm-run`。`.git/refs/heads/main` が `88def3c0fd49f349661bf31466894024bd729acf` であることを確認。作業ツリーの未コミット変更の有無は、このセッションでは git を実行できないため**未確認**。行番号はこの日の内容。
- 確認方法: 実装の静的な読み取りだけ。デモ・本番の画面は開いていない。認証・送信・同期・設定変更・撮影は一切していない。以下の「確認済み」は「コードで確認」の意味で、実機で操作が成功することは実証していない。
- 本文スクリーンショットなし: 本日デモは両方ともloginへリダイレクト、とのCodexの申告。README「画像」の例外（撮れないときは画像なしで公開してよいが理由を報告）に当たる。Claudeは画面を開いていないので、申告自体は未検証。本文は画面を撮影済み・操作成功済みとして書いていない（問題なし）。
- 原稿・画像・CRM・サイトコードは変更していない。git commit / push もしていない。指摘と修正案だけを出す。修正は2026-11-20の代表の包括承認の範囲でCodexが行い、Claudeが再レビューする。

## 集計

| 記事 | Critical | Major | Minor | 対応済み | 未解決 Critical/Major | 要確認 | 公開判定 |
|---|---|---|---|---|---|---|---|
| A. B2B 日本語 | 0 | 3 | 4 | 0 | 3 | 1 | **公開不可**（Major 未解決） |
| B. B2B 英語 | 0 | 3 | 4 | 0 | 3 | 1 | **公開不可**（Major 未解決） |
| C. B2C 日本語 | 0 | 2 | 4 | 0 | 2 | 0 | **公開不可**（Major 未解決） |
| D. B2C 英語 | 1 | 2 | 4 | 0 | 3 | 0 | **公開不可**（Critical 未解決） |
| 計 | 1 | 10 | 16 | 0 | 11 | 2 | |

- 要確認の2件は、A-3・B-3（デモ組織に取り込み済みメールの見本があるか）。コード上に見本データの投入は見つからないが、デモ環境のDBは見ていない。
- 表紙2枚は問題なし（下の「表紙」）。

---

## 背景の確認（既刊との重複）

全ja記事のタイトル（95本）を確認し、近い記事は本文まで読んだ。

- **B2B**: `nobody-knows-who-answered-the-info-inbox`（info@を転送して「インボックス」で共有する機能）は、本記事（担当者個人のOutlookメールボックスの同期とコンタクトの「メール・予定」）とは別の機能・別の入口。Outlookへの言及は返信の送信元の説明（30・35行目）だけ。`no-one-keeps-a-copy-of-the-customer-data`（35・44行目）と `same-person-split-into-two-contacts`（39行目）はOutlook同期に一言触れるだけ。`chat-threads-stay-on-personal-phones` はタイトルの型（「担当者の〜にしか残らない」）が似るが、対象はLINE等のチャット取り込みで別機能。**言い換えではない。問題なし。**
- **B2C**: 振替の仕組みは既刊2本に要約がある。
  - `teachers-ask-the-owner-for-their-schedule` 34・36行目: カレンダー側で動かす運用、振替は押した日の7日後・同じ時刻種別担当、7日以内の最も近い1件を取り消しカレンダーからも消える。
  - `owner-cannot-see-how-full-next-month-is` 45行目: 振替で元の予約が取り消され、月表示には薄い取り消し線で残る。1週間より先の予約は取り消されない。
  - 本記事は、日付を選べない誤認、確認ダイアログが無いこと、10時の既定、失敗条件、新しい予約だけ残る部分失敗、休講ボタンとの違い、合意内容との照合という「押す前の判断」を主題にしており、既刊の一段落の言い換えにはなっていない。**重複としては問題なし。** ただし既刊にある「カレンダーからも消える」「月表示では取り消し線で残る」が本記事の確認手順から抜けている（C-4・D-5）。
- 生徒用メモURLの旧候補は不採用（本日も確認不能）との申告。本文にその主張は無い（問題なし）。

---

## A. B2B 日本語「Outlookのやり取りが、担当者の受信箱にしか残らない」

### ①事実検証（領域1・6）

照合して問題なし:

| 原文（行） | 根拠 |
|---|---|
| 「同じ組織のメンバーからも閲覧される前提」（21） | `supabase/migrations/105_active_org_rls_hardening.sql:156-159`（email_messages は組織単位で閲覧可） |
| 「設定」→「連携」→「Outlook」、「Outlook 連携」、「Microsoft アカウントを接続」（23） | `src/app/(dashboard)/settings/settings-index.tsx:72`、`settings/integrations/page.tsx:26`、`settings/outlook/page.tsx:30`、`outlook-view.tsx:95` |
| 管理者の許可が必要な場合（23） | `outlook-view.tsx:105` |
| 「サービス側の接続設定が未完了という案内」（23） | `outlook-view.tsx:61-72`（環境変数未設定の案内）。言い換えとして妥当 |
| 予定表も同期、予約の内容でコンタクトが作られる（25） | `src/lib/outlook-sync.ts:174-197`、`src/lib/google-sync.ts:176-183`（外部参加者1名・繰り返しでない予定だけ） |
| 送信元に使われ、Gmail接続済みならGmail優先（25） | `outlook-view.tsx:105`（画面の文言） |
| 「メール」の「今すぐ同期」、読み取り許可が無ければ再接続（29） | `outlook-view.tsx:127-139`（Mail.Read が無いとメールの行自体が出ない）、`api/integrations/outlook/sync-email/route.ts:29-31` |
| 「メール・予定」タブ、見出し「メール・予定（Google同期）」、送信・受信、本文の一部（31） | `contacts/[id]/page.tsx:423, 430, 438, 441` |
| 未登録の相手はコンタクトにならない、主・追加アドレスで照合（33） | `outlook-sync.ts:17-26, 61-62`、`src/lib/crm/contact-emails.ts:56-66` |
| 複数宛先は全員に入るとは限らない（33） | `outlook-sync.ts:59`（宛先は先頭1人だけ） |
| 1回最大50通、受信日時の新しい順、表示は最大10件、全文・添付なし（37） | `outlook-sync.ts:14, 90-93`、`contacts/[id]/page.tsx:119-124, 441` |
| 重複追加しない、件数は新規数とは限らない（39） | `outlook-sync.ts:102, 105`（ignoreDuplicates、一致した件数を返す） |
| 燃料を使う、プリペイドだけ（41） | `outlook-sync.ts:83`、`src/lib/work-fuel.ts:26, 38, 98` |
| 解除しても取り込み済みは残る（41） | `supabase/migrations/282_outlook_integration.sql:14-15, 43-45`、`api/integrations/outlook/disconnect/route.ts:6-8`、`outlook-view.tsx:48-51` |

指摘:

**A-1 Major（説明不足）毎晩の自動同期が書かれていない**
- 原文: 「既に接続済みなら、Outlookの設定画面にある「メール」の「今すぐ同期」を押します。」（29）、「プリペイドプランでは、メール同期は燃料を使う処理です。」（41）
- 理由: 接続後は、ボタンを押さなくても毎晩メールと予定表が自動で取り込まれ、そのたびに燃料を使う。21〜25行目の「共有してよいアカウントか」の判断材料として、手動で押したときだけ共有されると誤解される。燃料の見積もりも手動分だけになる。
- 根拠: `outlook-view.tsx:156-160`（「毎晩自動でも同期します」）、`src/lib/outlook-sync.ts:227-248`、`src/app/api/cron/workflows/route.ts:497`
- 修正案: 25行目の段落に「接続すると、メールと予定表は毎晩自動でも取り込まれます。」を加え、41行目を「メール同期は手動・毎晩の自動とも、1回ごとに燃料を使います。」とする。
- 対応状況: 未対応

**A-2 Major（論理の飛躍）引き継ぎに使えるのは、前任者が自分のOutlookを接続している場合だけ**
- 原文: 「Outlookを使う営業に「直近のメールを転送してください」と頼み…」（15）、「業務用アカウントが接続済みなら、最近やり取りした相手を一人選びます。」（45）
- 理由: 接続はユーザー本人のメールボックス（`/me/messages`）で、「今すぐ同期」も接続した本人の分しか動かない。後任者や管理者が前任者の受信箱を取り込むことはできない。前任者が接続していない、または退職済みなら、本記事の手順では引き継ぎに使えない。冒頭の場面から「後任が自分で取り出せる」と読める。
- 根拠: `api/integrations/outlook/sync-email/route.ts:22-27`（connected_by = 本人）、`outlook-sync.ts:88-93`、`settings/outlook/page.tsx:14-22`
- 修正案: 19行目の節に「取り込めるのは、接続した人自身の受信箱です。引き継ぎに使うには、前任の営業が在籍中に自分のアカウントを接続しておく必要があります。」を加える。45行目は「前任の営業が接続済みなら」とする。
- 対応状況: 未対応

**A-3 Major（要確認を含む）デモで「メール・予定」に見本が出る根拠が無い**
- 原文: 「デモで「法人営業」を選び、「コンタクト」の「メール・予定」を確かめてください。」（49）
- 理由: コード上、デモに取り込みメール（email_messages）を入れる処理が見つからない。見本が無ければ、タブには「この相手とのGmailのやり取りやGoogleカレンダーの予定はまだありません。Googleを接続すると…」と出るだけで、Outlookの記事の導線として読者を迷わせる。デモ組織はOAuth接続も拒否される。
- 根拠: `src/lib/demo/` 配下に email_messages の投入なし（Grep、`insert into email_messages` は `scripts/tests/` の2件だけ）、`contacts/[id]/page.tsx:459-467`、`api/integrations/outlook/route.ts:20-22`（demo_account）
- 修正案: デモ環境に見本があるかを確認する。無ければ「デモでは「コンタクト」に「メール・予定」タブがあることを確かめられます。デモではMicrosoftアカウントは接続できません。」のように、見られる範囲だけを書く。
- 対応状況: 未対応（要確認）

**A-4 Minor 照合から外れる条件**
- 原文: 「相手のメールアドレスが、コンタクトのメールアドレスか追加のメールアドレスとして登録されていることが前提です。」（33）
- 理由: 接続したアカウントと同じドメインのアドレスは自分側として扱われ、照合されない。Outlook.comの個人アカウントでは、@outlook.com の顧客も外れる。自動送信らしいアドレスも外れる。
- 根拠: `src/lib/google-sync.ts:113-126`
- 修正案: 「接続したアカウントと同じドメインの相手（社内の同僚など）は取り込まれません。」を1文加える。
- 対応状況: 未対応

### ②編集レビュー（領域2・3・5）

- 構成: 場面→機能の位置づけ→共有範囲の確認→操作→制約→最初の一歩→CTA。見出しだけで要点が追える。問題なし。
- 独自性: 「全文の保管ではなく、確認したいメールの見当を付ける道具」という使い分け（17・47行目）と、件数を成果の証拠にしない注意（39行目）は、実装を読んだうえでの判断材料になっている。問題なし。
- 冒頭の場面と手順の前提がずれている点は A-2。

**A-5 Minor 空のときの表示がGoogleだけを案内する**
- 原文: 「Outlook専用の欄を探す必要はありません。」（31）
- 理由: 一致するメールが無いとき、タブには「Googleを接続すると、ここに自動で並びます」と出る。Outlookでは使えないと読者が誤解しうる。
- 根拠: `contacts/[id]/page.tsx:459-467`
- 修正案: 「まだ何も取り込まれていないときは、Googleの接続を促す案内が出ますが、Outlookの分もこの欄に並びます。」を加える。
- 対応状況: 未対応

### ③校正・推敲（領域4・6）

**A-6 Minor 再接続後の重複**
- 原文: 「繰り返し同期しても、同じメールを新しい記録として追加するわけではありません。」（39）
- 理由: 重複の判定は接続ごと。解除して再接続すると新しい接続になり、同じメールがもう一度入りうる（コードからの推論、未実証）。
- 根拠: `282_outlook_integration.sql:43, 52`、`disconnect/route.ts:16-18`
- 修正案: 「同じ接続のまま繰り返し同期しても」と限定する。
- 対応状況: 未対応

**A-7 Minor 表記**
- 「全文を保管する機能ではないので、元のメールも残します。」（17）: 誰が何を残すのかが曖昧。「全文はOutlookで読むので、元のメールは消さずに置いておきます。」
- 「個別メールやシーケンスの送信元」（25）: 画面の表記は「1:1メール」（`outlook-view.tsx:105`）。合わせる。
- 「デモで実際のMicrosoftアカウントを接続する必要はありません。」（49）: デモでは接続できない（A-3）。「接続できません」に。
- 問題なし: エムダッシュ無し、「顧客管理システム」の表記、裸の「CRM」無し、敬体の統一、誇張・定型の締め無し。
- 対応状況: 未対応

**A 判定: 公開不可（Major 3件未解決、うち1件要確認）**

---

## B. B2B 英語「Customer emails stay in the sales rep’s Outlook mailbox」

### ①事実検証

A の照合表と同じ根拠で、以下は問題なし: Settings → Integrations → Outlook、Connect Microsoft account、Microsoft 365 administrator、calendar sync and contact creation、Gmail takes priority、Sync now beside Mail、Email & events / Email & events (Google sync)、Sent or Received、main or additional email address、up to 50 / up to 10、no full body or attachments、no duplicate copies、count is not proof、fuel on prepaid、disconnect keeps records。日本語版との事実の差は無い。

**B-1 Major** A-1 と同じ（毎晩の自動同期と、その燃料消費が抜けている）。原文: "click Sync now beside Mail"（29）、"On a prepaid plan, mail sync consumes fuel."（41）。修正案: "Once connected, mail and calendar also sync automatically every night." を25行目の段落に加え、41行目を "Each sync, manual or nightly, uses Fuel on a prepaid plan." に。対応状況: 未対応

**B-2 Major** A-2 と同じ。原文: "They ask the previous rep to forward the conversation"（15）、"in an already connected business account"（45）。修正案: "Only the person who connected Outlook can import their own mailbox. For a handover, the outgoing rep needs to have connected their account while still on the team." を19行目の節に加える。対応状況: 未対応

**B-3 Major（要確認）** A-3 と同じ。原文: "open the demo, choose B2B sales, and look at Email & events. You do not need to connect a real Microsoft account in the demo."（49）。修正案: 見本の有無を確認し、無ければ "The demo shows where the Email & events tab is. Microsoft accounts cannot be connected in the demo." に。対応状況: 未対応（要確認）

**B-4 Minor** A-4 と同じ（同じドメインの相手は照合されない）。原文: "The counterparty’s address must match an existing contact’s main or additional email address."（33）。対応状況: 未対応

### ②編集レビュー

- 構成・独自性・導線は A と同じく問題なし。英語圏の読者にも通じる場面設定（handover）。翻訳調ではなく書き直されている。

**B-5 Minor** A-5 と同じ（空の表示はGoogleだけを案内）。対応状況: 未対応

### ③校正・推敲

**B-6 Minor** A-6 と同じ。"Repeated syncs do not add another copy" を "Repeated syncs on the same connection…" に。対応状況: 未対応

**B-7 Minor 表記**
- "Its current card heading says…"（31）: "Its" の指す先が直前の "the same area" で読みにくい。"The card heading currently reads Email & events (Google sync), but Outlook messages appear there too."
- "consumes fuel"（41）: 英語画面の表記は "Fuel"（`src/components/email-adjust.tsx:175` ほか）。大文字に合わせる。
- "individual emails"（25）: 画面は "1:1 emails"（`outlook-view.tsx:106`）。
- 問題なし: エムダッシュ無し、"CRM" の裸使い無し、誇張無し。
- 対応状況: 未対応

**B 判定: 公開不可（Major 3件未解決、うち1件要確認）**

---

## C. B2C 日本語「「振替」を押したら、日付を選ぶ前に次週の予約が入った」

### ①事実検証

照合して問題なし:

| 原文（行） | 根拠 |
|---|---|
| 押した日の7日後へ予約を作る、基準は押した日（17・21） | `src/app/api/school-app/lesson/reschedule/route.ts:33`（日本時間の今日＋7日） |
| 時刻・種別・講師を引き継ぐ、時刻が無ければ10時（21） | 同 `:55-58` |
| 確認ダイアログも日付入力も無い、成功で再読み込み（27） | `src/school-app/components/MockShell.tsx:938-947` |
| 「⚠️ 未記録レッスン」の行の「振替」（27） | `src/school-app/lib/render.ts:1691, 1710` |
| レッスンの編集権限と生徒へのアクセス（27） | `reschedule/route.ts:14-15, 28`、`src/school-app/lib/authz.ts:97-105, 171-180`（生徒単位の絞り込みは現在無効でメンバーであることだけを見ている。「必要」という書き方は誤りではない） |
| 今日から7日後より前の最も近い1件を元にし、取り消す（29） | `reschedule/route.ts:41-49, 73-77` |
| 期間内に無ければ取り消しは無い、種別が無い・同じ枠が既にあると失敗（31） | 同 `:49-52, 59-61, 73` |
| 新しい予約だけ残る可能性（35） | 同 `:55-62` の後に `:73-76`（取り消し失敗はログだけ） |
| 今日の日付で「休講」の記録が作られる（37） | 同 `:65-69` |
| 「休講」ボタンは予約を取り消さない（37） | `src/app/api/school-app/lesson/cancel/route.ts:32-36` |
| カレンダーで動かすと予約に反映、変更通知か「Googleカレンダーと今すぐ同期」、新しい予定は取り込まれない（39） | `src/school-app/lib/google-calendar.ts:13, 328-329, 331-373`、`src/app/api/school-app/gcal/sync/route.ts:8-16`、`render.ts:1714` |
| 「これからの予定」（35） | `render.ts:1713`（取り消し済みは一覧から外れる `:1683`） |

指摘:

**C-1 Major（場面と入口の不一致）「振替」は事前連絡の時点では押せない**
- 原文: 「生徒から「今週は受けられない」と連絡が来た。振替先はまだ決まっていないけれど、先に「振替」を押して日付を選ぼうとする。」（15）
- 理由: 「振替」ボタンは「⚠️ 未記録レッスン」の警告行にしか無い。警告は毎晩の自動検知で、プランが「週1」の生徒について「期待される回数」より「記録済＋休講」が少ないときに出る。日付は検知した日、種別は「週1」固定で、特定の予約とは結びつかない。事前に欠席連絡を受けた時点では、ボタン自体が画面に無いことが多い。冒頭の場面で探しても見つからない、または「振替は事前の予定変更に使う機能」と誤解される。
- 根拠: `src/app/api/school-app/automation/run/route.ts:82-94`、`render.ts:1690-1691, 1709-1711`、`src/school-app/lib/i18n-data.ts:104`（経過したのに記録が無いものを毎晩検知）
- 修正案: 冒頭を「先週休んだ生徒の分が「未記録レッスン」に出ている。振替先はまだ相談中だけれど、先に「振替」を押して日付を選ぼうとする。」のように事後の場面へ寄せる。27行目に「この警告は、週1プランの生徒の記録が足りないときに毎晩出ます。特定の予約に結びついた行ではありません。」を加える。
- 対応状況: 未対応

**C-2 Major（説明不足）取り消されるのは、休んだ回ではなく次の予約**
- 原文: 「期間内に複数の予約がある生徒では、警告で想像した回と一致するかを先に確かめてください。」（29）
- 理由: 未記録の警告は過ぎた回について出るが、元になるのは「今日から7日後より前」の予約、つまりこれからの予約。予約が1件しかなくても、それは休んだ回ではなく次のレッスンで、押すとその回が取り消され、押した日の7日後へ移る。「複数ある場合だけ注意」と読める現在の書き方では、次のレッスンを消してしまう操作だと伝わらない。
- 根拠: `reschedule/route.ts:39-49, 73-77`（コメント「動かす元は、今日から1週間以内で一番近い予約」）、`automation/run/route.ts:94`
- 修正案: 「警告が出ているのは過ぎた回ですが、取り消されるのは今日から7日以内にある次の予約です。予約が1件でも、休んだ回ではなく次のレッスンが動きます。押す前に「これからの予定」でその生徒の次の予約を確かめてください。」
- 対応状況: 未対応

### ②編集レビュー

- 構成: 誤認→仕組み→押す前の確認→押した後の確認→最初の一歩→関連記事→CTA。各章の役割が明確で、判断基準（日付・時刻・種別・担当の四つで照合）がある。独自性として、ボタン名から機能を推測しない、部分失敗を前提に両方の枠を見る、という運用判断は既刊に無い。問題なし。
- 論理の弱点は C-1・C-2（場面と元予約の選ばれ方）。

**C-3 Minor 「最近の予約」の意味**
- 原文: 「その期間に予約がなければ、取り消されていない最近の予約から時刻・種別・講師を使います。」（31）
- 理由: 実装は予約日が最も新しいもの（降順の先頭）。7日より先の未来の予約が選ばれることもあり、「最近」（過去寄り）とずれる。
- 根拠: `reschedule/route.ts:42-49`
- 修正案: 「取り消されていない予約のうち、日付がいちばん先のものから」。
- 対応状況: 未対応

**C-4 Minor 確認手順にカレンダーと月表示が無い**
- 原文: 「成功後は「これからの予定」で…元の枠も残っていないか確認してください。」（35）
- 理由: 振替の処理後、新しい予約はGoogleカレンダーに書き込まれ、取り消した予約の予定は消される（連携済みの場合）。月表示のカレンダーでは、取り消した予約は薄い取り消し線で残る。既刊2本には書かれており、本記事の「両方を見る」手順から抜けている。
- 根拠: `reschedule/route.ts:79-83`、`google-calendar.ts:398-412`、`render.ts:1753, 1756`（cal-off）、既刊 `owner-cannot-see-how-full-next-month-is.md:45`
- 修正案: 「カレンダー連携済みなら、講師のカレンダーでも新しい予定が入り、元の予定が消えたかを見ます。月表示では、取り消した予約は薄い取り消し線で残ります。」
- 対応状況: 未対応

### ③校正・推敲

**C-5 Minor 同名の生徒**
- 理由: 振替は生徒名で送られ、同名の生徒がいると「同名の生徒がいるためカルテから選んでください」で失敗する。失敗時の確認（31行目）に1文あると親切。
- 根拠: `MockShell.tsx:943`、`reschedule/route.ts:20-24`
- 修正案: 31行目の失敗条件に「同じ名前の生徒が複数いるとき」を加える。
- 対応状況: 未対応

**C-6 Minor 表記・読みやすさ**
- 「ボタン名の「振替」から、好きな日を選べると判断しないことです。」（23）: やや説教調。「「振替」という名前でも、日付は選べません。」程度で足りる。
- 「「休講」のボタンも、予約そのものを取り消す代わりにはなりません。」（37）: 「「休講」ボタンは記録を残すだけで、予約は取り消しません。」の方が直接的。
- 問題なし: エムダッシュ無し、「か月」等の表記対象なし、敬体統一、誇張・定型の締め無し、内部リンク `/crm/media/b2c/teachers-ask-the-owner-for-their-schedule/` は既刊と同じ形式で実在。
- 対応状況: 未対応

**C 判定: 公開不可（Major 2件未解決）**

---

## D. B2C 英語「Reschedule books next week before you choose a date」

### ①事実検証

C の照合表と同じ根拠で、7日後・10:00・no confirmation dialog・source booking の選び方・failure conditions・partial failure・lesson record dated today・Cancelled button・Google Calendar の動かし方は問題なし。英語画面の表記 "⚠️ Unlogged lessons"、"📅 Upcoming"、"🗓️ Sync with Google Calendar now"、"Cancelled"（休講）は置換表と一致（`src/school-app/lib/i18n-data.ts:101`、`src/school-app/lib/html-en.ts:54-56`）。

**D-1 Critical（事実の誤り）英語画面のボタン名は「振替」ではなく "Reschedule"**
- 原文: "the 振替 button for an unlogged lesson"（17）、"It is labelled 振替 in the current markup; the term means a make-up lesson or rescheduling."（27）、frontmatter screens "Lessons → Unlogged lessons → 振替"（8）、"Use 振替 only when…"（43）、"Leave 振替 untouched"（47）
- 理由: 英語画面では、タグの外の文字が置換表で訳され、"振替" は "Reschedule" と表示される。英語の読者は「振替」というボタンを見ない。タイトルと冒頭は "Reschedule" なので、本文と食い違う。
- 根拠: `src/school-app/lib/html-en.ts:162`（"振替": "Reschedule"）、`:275-280, 315-321`（タグ外の文字を置換）、`render.ts:1691`（ボタンの文字は "振替" のテキストノード）
- 修正案: 本文とfrontmatterの "振替" をすべて "Reschedule" に置き換え、27行目の "It is labelled 振替 in the current markup; the term means…" を削る。押した直後の表示 "振替中…"・"失敗" は訳されない（D-7）ので、その点だけ書くなら別文で。
- 対応状況: 未対応

**D-2 Major** C-1 と同じ（事前の欠席連絡の時点ではボタンが無い。警告は週1プランの記録不足を毎晩検知したもの）。原文: "A learner cannot attend this week. The replacement date is still being discussed, but a staff member clicks Reschedule"（15）。修正案: "A learner missed last week’s lesson and it now shows under Unlogged lessons…" のように事後の場面へ。27行目に "This warning appears overnight for weekly-plan students whose logged lessons fall short; it is not tied to a specific booking." を加える。対応状況: 未対応

**D-3 Major** C-2 と同じ（取り消されるのは次の予約）。原文: "With several upcoming lessons for the same student, check that this is the booking you intend to move."（29）。修正案: "The warning refers to a lesson that has passed, but the booking cancelled is the student’s next one within seven days. Even with a single upcoming booking, that next lesson is what moves." 対応状況: 未対応

### ②編集レビュー

- 構成・判断基準は C と同じく問題なし。英語として翻訳調ではない。

**D-4 Minor** C-3 と同じ。"the latest non-cancelled booking"（31）は実装と一致するが、未来の予約が選ばれうる点を "the furthest-dated non-cancelled booking, which may be in the future" と明示すると誤解が無い。対応状況: 未対応

**D-5 Minor** C-4 と同じ（カレンダー上の書き込み・削除と、月表示の取り消し線が確認手順に無い）。対応状況: 未対応

### ③校正・推敲

**D-6 Minor** C-5 と同じ（同名の生徒で失敗）。対応状況: 未対応

**D-7 Minor 押した後の表示は英語画面でも日本語**
- 理由: 押した直後の "振替中…"、失敗時の "失敗"・"通信エラー" はブラウザ側で書き換える文字で、置換表を通らない。"Inspect the schedule before retrying a failed action."（31）の前に、失敗表示が日本語で出ることを一言添えると英語の読者が迷わない（コードからの推論、画面では未確認）。
- 根拠: `MockShell.tsx:939, 945-946`、`html-en.ts:315-321`（サーバー側のHTMLだけを置換）
- 修正案: "On failure the button text changes to 失敗 (failed)." を加えるか、記述しないなら D-1 の修正で "振替" 表記を消すだけでよい。
- 対応状況: 未対応

**D 判定: 公開不可（Critical 1件・Major 2件未解決）**

---

## 表紙（2枚）

いずれも imagegen による新規のイメージ写真との申告（未検証）。実際の顧客・社員・現場として本文で扱っていない（問題なし）。

| 画像 | 本文との整合 | 女性 | 暖かい色 | 余白・引いた構図 | 文字・ロゴ | 判定 |
|---|---|---|---|---|---|---|
| `hero2/outlook-conversations-stay-in-the-reps-mailbox.webp` | 明るいオフィスで2人の日本人女性が1台のノートPCを見ている。引き継ぎの確認場面として合う | 2人とも女性 | 木の机と間接照明で暖色寄り。窓外のビルがやや寒色だが全体は柔らかい | 左に机と観葉植物、右上に余白。少し引いた構図 | 読める文字・ロゴ無し（画面は背面、手帳は閉じている） | 問題なし |
| `hero2/make-up-lesson-date-changes-before-you-choose-it.webp` | 教室の受付台で日本人女性が手帳を見ながら考えている。押す前に予定を書き出す最初の一歩（41-43行目）と合う | 女性 | 木の家具、緑の窓外、柔らかい自然光で暖かい | 左半分に教室と窓、余白十分 | ホワイトボードは白紙、手帳も文字なし、PC画面は見えない | 問題なし |

---

## 修正の優先順位（Codex向け）

1. D-1（英語版の "振替" 表記をすべて "Reschedule" に）。
2. C-2・D-3（取り消されるのは次の予約）と C-1・D-2（場面と警告の性質）。B2Cはこの2点を直せば構成はそのまま使える。
3. A-2・B-2（接続するのは前任者本人）、A-1・B-1（毎晩の自動同期と燃料）。
4. A-3・B-3 はデモの見本の有無を確認してから。確認できなければ、見られる範囲だけを書く。
5. Minor は任意。C-4・D-5 は既刊と揃えるため入れることを推奨。

修正後は、変更箇所と根拠の対応を記録し、Claudeの再レビュー（`2026-11-21-recheck.md` などの別ファイル）で未解決の Critical・Major が0件になったことを確かめてから公開する。
