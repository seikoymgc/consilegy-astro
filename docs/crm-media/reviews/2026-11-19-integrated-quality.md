# 2026-11-19 公開4本の統合品質レビュー

- 基準: [記事の品質チェックリスト（統合版）](../article-quality-checklist.md)
- 実施: 2026-11-19、Claude（執筆には関与していない）。①事実検証→②編集レビュー→③校正・推敲の順。
- 対象: `src/content/crm-media/{ja,en}/new-contacts-get-copied-into-another-app-by-hand.md`、`src/content/crm-media/{ja,en}/phone-enrollments-stay-in-the-paper-register.md`（いずれも公開済み）
- 一次情報: 隣の作業コピー `crm-run` の実装（行番号はこの日の内容）、Zapier公開ページ、`runs/2026-11-19.md`。当日の別レビューの結論はそのまま採らず、実装を読み直して確認した。
- レビューの時点では、原稿・画像・サイトコード・CRMは変更していない。指摘と修正案だけを出した。
- 2026-11-19、代表が9件の修正案（A-2・A-3・A-4・B-2・C-1・C-2・D-1・D-2・D-3）に「公開」と明示承認した。これを根拠に、Claudeが日英4原稿へ反映した。あわせて4本に `updated: 2026-11-19` を加えた（公開日 `date` とslugは変えていない）。画像・サイトコード・CRMは変更していない。build・commit・pushはCodexが行う。
- 下の表の「問題」「原文」は、指摘時の履歴として残している。

## 集計

| 記事 | Critical | Major | Minor（指摘） | うち対応済み | 未解決 | 要確認 | 公開判定 |
|---|---|---|---|---|---|---|---|
| A. B2B 日本語 | 0 | 0 | 3 | 3 | 0 | 0 | 公開可 |
| B. B2B 英語 | 0 | 0 | 1 | 1 | 0 | 0 | 公開可 |
| C. B2C 日本語 | 0 | 0 | 2 | 2 | 0 | 0 | 公開可 |
| D. B2C 英語 | 0 | 0 | 3 | 3 | 0 | 0 | 公開可 |
| 計 | 0 | 0 | 9 | 9 | 0 | 0 | |

未解決は0件。

Zapier公開ページの「Beta」表示（A-1・B-1）は、当初「要確認」にしていた。その後、追確認で解消したので「問題なし」に改めた。
- 当初「要確認」にした理由: WebFetchで取ったテキストに「Beta」が無かった。ただし、テキストへの変換で表示部品（バッジ）が落ちた可能性があった。
- 解消した根拠: 2026-11-19の追確認で、Codexが実際のブラウザでページを開き、「Revenue CRM Integrations」の見出しの横に「Beta」が表示されることを確認した。Claudeはブラウザを操作していない。Codexが保存した画面の記録（`outputs/zapier-beta-quality-2026-11-19.png` と同名の .txt）を読み、同じ表示を確認した。

## 背景の確認（記事の結論を先に決めるためではない）

- 製品エディションは5つ: `crm-run/src/lib/demo.ts:14-66` の `DEMO_FAMILIES`＝B2B・スクール・受託開発・制作・支援会社・代理店。4本とも本文でエディション数に触れていないので、記事上の問題はない。
- B2Cの英語表示の登録で値がずれる問題: 実装の読み取りで、送信の経路を確認した（C・Dの①）。実機では試していない。原稿の回避策（登録前に「JA」へ切り替える）は、実装と合う。
- 本文画像なし・表紙は架空の日本人女性の生成写真: 2枚とも目視。読める文字・ロゴなし。本文は表紙の人物を実在の顧客や社員として扱っていない。

---

## A. B2B 日本語「新しい顧客を登録するたび、別のアプリへ同じ名前をコピーしている」

### ①事実検証（領域1・6）

照合して問題なし:

| 原文 | 根拠 |
|---|---|
| 「発行できるのはオーナーと管理者です」 | `src/app/api/v1/api-keys/route.ts:30-33`（owner/admin以外は403） |
| 「権限は「読み取りのみ」を選び」「発行」 | `settings/api-keys/api-keys-view.tsx:178`（既定はread）、`:309-311`、`:322` |
| 「「設定」の「連携・チャネル」から「APIキー」」 | `settings/settings-index.tsx:70-75` |
| 「完全なキーは再表示されません」 | `api-keys/route.ts:66-67`、`api-keys-view.tsx:277` |
| 「「API Key」の欄」 | `integrations/zapier/authentication.js:7-8` |
| 「個人の担当範囲だけに絞った鍵ではなく、組織のデータを扱います」 | `src/lib/crm/use-cases.ts:784-785`、`:815-823`（organization_idだけで絞る） |
| 「定期的に新しい記録を取りに来る方式」「新しい順で最大100件」 | `integrations/zapier/triggers/contact.js:12-13`、`use-cases.ts:822`（created_atの降順） |
| 「既存コンタクトの編集を知らせるトリガーでもありません」 | 作成日時の降順で取るだけで、更新日時は見ない（`use-cases.ts:822`） |
| 「「Create Contact」…「読み取りと書き込み」のキーが必要」 | `integrations/zapier/creates/contact.js:8`、`src/app/api/v1/contacts/route.ts:25` |
| 公開アプリ一覧にRevenue CRM・New Contact・Create Contactがある | https://zapier.com/apps/revenue-crm/integrations （2026-11-19取得。トリガーNew Contact／New Deal／Updated Deal、アクションCreate Contactなど） |

| ID | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案（承認済み） | 対応状況 |
|---|---|---|---|---|---|---|
| A-1 | 「公開ページには現在「Beta」の表示があります。」（23行） | 問題なし（当初は要確認） | Codexが2026-11-19に実画面で確認。画面の記録 `outputs/zapier-beta-quality-2026-11-19.png`（見出し横の「Beta」）と同名の .txt（URL https://zapier.com/apps/revenue-crm/integrations）。WebFetchのテキストに無かったのは変換の問題で、画面の表示とは別 | なし | なし | 解消 |
| A-2 | 「[Revenue CRMのデモ]で法人営業版を選び」（55行） | デモのカード見出しは「B2B」。「法人営業向け」は説明文の側で、見出しと語が違う | `src/lib/demo.ts:15-16`、`src/app/demos/demos-client.tsx:19` | Minor | 「デモで「B2B」を選び」 | 承認済み・対応済み |

### ②編集レビュー（領域2・3・5）

- 構成・論理: 問題なし。場面（登録後に手でコピー）→使える仕組み→読み取り専用キーで接続→使えない用途→最初の一歩、と見出しが疑問の順に並ぶ。「即時通知・過去全件の移行には使わない」で適用条件を分けている。
- 具体性・独自性: 問題なし。100件・ポーリング・組織全体の資格情報・書き込みとの権限の違いは、実装を読んで初めて言える判断材料で、筆者固有の知見に当たる。数字の創作なし。
- 読者体験: 問題なし。誰が（オーナー・管理者）、何を（読み取りのみのキー）、どこで（設定のAPIキー）、が手順で追える。

### ③校正・推敲（領域4・6）

| ID | 原文（場所） | 問題 | 理由 | 重大度 | 修正案（承認済み） | 対応状況 |
|---|---|---|---|---|---|---|
| A-3 | 「個人の担当範囲だけに絞った鍵ではなく」（31行） | 表記ゆれ | 同じ記事のほかの箇所は「キー」 | Minor | 「…絞ったキーではなく」 | 承認済み・対応済み |
| A-4 | 「3. 発行直後に出るキーを控えます。」（35行） | 「控える」先が曖昧で、39行「キーそのものを共有用の表や作業メモへ貼らないでください」と並ぶと、どこに控えればよいか迷う | 手順4でそのまま貼るので、保管の指示は要らない | Minor | 「3. 発行直後に表示されるキーをコピーします。完全なキーは再表示されません。」 | 承認済み・対応済み |

- AI特有の表現・定型の締め・誇張・エムダッシュ: 問題なし。
- 一文の長さ・語尾の連続: 問題なし（目視。字数の機械計測はしていない）。
- 画像との整合: 問題なし（ノートPCの前の運用担当の場面）。

**公開判定: 公開可。** 未解決の Critical・Major は0件。

---

## B. B2B 英語「Every new contact still gets copied into another app by hand」

### ①事実検証

日本語版と同じ根拠で照合し、問題なし（Settings → Integrations & channels → API keys、Read only、Issue、API Key、New Contact、newest first up to 100、Create Contact needs Read and write）。英語の画面ラベルは `api-keys-view.tsx:309-311,322`、`settings-index.tsx:70,75` と一致する。

| ID | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案（承認済み） | 対応状況 |
|---|---|---|---|---|---|---|
| B-1 | "where the integration currently carries a Beta label."（23行） | 問題なし（当初は要確認） | A-1と同じ（Codexが実画面で確認、画面の記録をClaudeが読んで確認） | なし | なし | 解消 |
| B-2 | "choose the B2B edition in the [Revenue CRM demo]"（55行） | 英語のデモのカード見出しは "B2B sales" | `src/lib/demo.ts:17` | Minor | "choose **B2B sales** in the Revenue CRM demo" | 承認済み・対応済み |

### ②編集レビュー

- 問題なし。日本語版と主張・制約・手順が一致し、事実の差はない。英語版だけの一文 "make the handoff visible to the person who owns the next step"（53行）は筆者の主張を変えていない。
- 読者適合: 問題なし。"polling" "credential" など英語圏のSaaS利用者に通じる語で書き直している。

### ③校正・推敲

- 翻訳調・同じ構文の反復・誇張・定型の締め: 問題なし。"It is not an instant notification every time a rep clicks Save." など、自然な英語。
- エムダッシュ: 問題なし。

**公開判定: 公開可。**

---

## C. B2C 日本語「電話で入会が決まった生徒が、紙の名簿にしか載っていない」

### ①事実検証

照合して問題なし:

| 原文 | 根拠 |
|---|---|
| 「「＋ 新規生徒」」「新規生徒の登録」「氏名」「＋ 登録する」 | `src/school-app/lib/render.ts:389`、`:413-415`、`:429` |
| 「プランは「週1」、期間は3か月が選ばれています」「最初は「体験予約」」 | `render.ts:416-418`（selが初期選択） |
| 「期間は1〜6か月」 | `render.ts:418`、`src/app/api/school-app/student/route.ts:28` |
| 「「受講中」で開始日を入れたとき…卒業予定日が保存」「体験予約の段階では…行いません」 | `student/route.ts:33-40` |
| 「レッスン回数が空欄なら、0として保存され、総回数の分母は出しません」 | `student/route.ts:31`、`render.ts:1000-1001` |
| 「初期設定では運営・マネージャー・管理部が対象」 | `student/route.ts:12`（STAFF）、`src/school-app/lib/authz.ts:133`（owner・admin・teacher）、`render.ts:43`（owner＝運営、admin＝マネージャー、teacher＝管理部） |
| 「新しい行を追加します…自動で一人にまとめる仕組みはありません」 | `student/route.ts:50-78`（insertのみ） |
| 「生徒の記録だけが先にできている場合があります」 | `student/route.ts:92-97`（生徒を作った後、担当の登録に失敗すると500を返す） |
| 「画面が読み込み直された後」 | `src/school-app/components/MockShell.tsx:1699-1701` |
| 英語表示の値のずれと「JA」への切り替え | `src/school-app/lib/html-en.ts:42,47`（体験予約→Trial booked、週1→Weekly）、`MockShell.tsx:1673,1683-1684`（表示中の文字をそのまま送る）、`student/route.ts:20-21`（"体験予約"と一致しなければactive）。実装を読む限り、英語表示で体験予約を選ぶと受講中として保存される（実機では試していない） |
| 「予約、請求、LINEの紐付けが済むわけでもありません」 | `student/route.ts`（生徒の行と担当の行を作るだけ） |
| 「下のナビから「生徒」」 | `src/school-app/lib/mock-body.ts:676` |
| 別のスタッフが生徒一覧で見つけられる | `authz.ts:60-62`（studentScopeは全員にnullを返し、生徒一覧は役割で絞らない） |

指摘なし。

### ②編集レビュー

| ID | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案（承認済み） | 対応状況 |
|---|---|---|---|---|---|---|
| C-1 | 「登録後に担当欄も確認し、実際の引き継ぎ先と合っているかを見ます。」（52行） | 担当がすでに入っている前提に読める。実際は、運営・マネージャー、LEADERSでない管理部が登録すると担当は空のまま。冒頭の場面（先生に伝わらない）に直結する点なので、空なら付ける、まで書くと読者が動ける | `student/route.ts:92-98`（担当になるのは、管理部かつLEADERSの登録者だけ）、`src/school-app/lib/supabase.ts:611-612`（スクール版の既定の担当は空）、`supabase.ts:607-608`（担当のいない生徒の提出は誰の画面にも出ない、とのコメント） | Minor | 当初案「登録した人がレッスンを持つ講師でなければ、担当は空のままです。…」。条件が曖昧なため、反映時に「管理部かつLEADERS」へ正確化した（「承認と反映の記録」を参照） | 承認済み・対応済み |

- 構成・論理: 問題なし。場面→損失→その場で登録→状態と初期値→期間と回数の違い→最初の一歩。初期値の落とし穴と、英語表示の回避策を手順の前に置いている。
- 具体性・独自性: 問題なし。「期間と回数は同じ意味ではない」は実装から導いた判断材料で、筆者固有の知見に当たる。
- 読者体験: 問題なし（C-1を除く）。

### ③校正・推敲

| ID | 原文（場所） | 問題 | 理由 | 重大度 | 修正案（承認済み） | 対応状況 |
|---|---|---|---|---|---|---|
| C-2 | 「表示される実施側の数は、読み込まれたレッスン記録に依存します。」（50行） | 翻訳調で、「実施側の数」が何を指すか伝わりにくい | 実装では「◯回中◯回目」の◯回目は、記録したレッスンの件数（`render.ts:996-1004`） | Minor | 「「◯回中◯回目」の◯回目は、記録したレッスンの件数から数えます。」 | 承認済み・対応済み |

- AI特有の表現・定型の締め・誇張・エムダッシュ: 問題なし。
- 表記: 「か月」で統一（サイトの規則どおり。画面の表示は「3ヶ月」だが、本文は画面の文字を「」で引いていないので問題なし）。
- 画像との整合: 問題なし（受付で対面の入会相談の場面。本文は電話と対面の両方を扱う）。

**公開判定: 公開可。**

---

## D. B2C 英語「A student enrolls by phone, but only the paper register knows」

### ①事実検証

日本語版と同じ根拠で照合し、問題なし。英語版だけの記述も確認した:

- "A school can change the permission matrix."（29行）: `authz.ts:168`（権限の行があればそれに従い、無ければ既定の役割に戻る）。
- "Operations, Manager and Office": `html-en.ts:74,87`。
- 日本語のラベルに英語の意味を添える書き方は、回避策（JAに切り替えて登録）と整合する。

### ②編集レビュー

| ID | 原文（場所） | 問題 | 根拠 | 重大度 | 修正案（承認済み） | 対応状況 |
|---|---|---|---|---|---|---|
| D-1 | "Check the teacher-assignment section after registration so the actual handoff goes to the right person."（52行） | C-1と同じ | C-1と同じ | Minor | 当初案 "Unless the person registering is a teacher, …"。C-1と同じ理由で、反映時に "Office user designated as a teacher (LEADERS)" へ正確化した | 承認済み・対応済み |
| D-2 | "choose the school edition in the [Revenue CRM demo]"（60行） | 英語のデモのカード見出しは "Schools" | `src/lib/demo.ts:32` | Minor | "choose **Schools** in the Revenue CRM demo" | 承認済み・対応済み |

- 日本語版との事実の差: なし。
- 読者適合: 問題なし。"paper register" "intake notes" など、英語圏の教室運営に通じる語。

### ③校正・推敲

| ID | 原文（場所） | 問題 | 理由 | 重大度 | 修正案（承認済み） | 対応状況 |
|---|---|---|---|---|---|---|
| D-3 | "the displayed completed side depends on the lesson records loaded into the screen."（50行） | 日本語版C-2を直訳した言い回しで、"completed side" が不自然 | `render.ts:996-1004` | Minor | "the completed count in “lesson X of Y” comes from the lessons you have logged." | 承認済み・対応済み |

**公開判定: 公開可。**

---

## 承認と反映の記録

2026-11-19、代表の明示承認「公開」により、9件すべてを反映した。未解決は0件。

| ID | 反映した文（原稿） |
|---|---|
| A-2 | 「[Revenue CRMのデモ](…)で「B2B」を選び、確認してください。」 |
| A-3 | 「個人の担当範囲だけに絞ったキーではなく」 |
| A-4 | 「3. 発行直後に表示されるキーをコピーします。完全なキーは再表示されません。」 |
| B-2 | "choose **B2B sales** in the [Revenue CRM demo](…)." |
| C-1 | 「登録した人が「管理部」で、LEADERSにも指定されている場合は、その人が担当に入ります。それ以外は担当が空のままなので、カルテの担当欄で引き継ぐ先生を指名してください。」 |
| C-2 | 「ただし、回数を入れたことだけで正確な消化回数まで管理できるわけではありません。「◯回中◯回目」の◯回目は、画面に読み込まれたレッスン記録の件数から数えます。記録していないレッスンは数に入りません。」 |
| D-1 | "If the person registering is an Office user designated as a teacher (LEADERS), they become the student's assigned teacher. Otherwise the student starts with no assigned teacher, so assign one in the teacher section of the profile." |
| D-2 | "choose **Schools** in the [Revenue CRM demo](…)." |
| D-3 | "Entering a total does not establish a complete attendance ledger. The completed count in “lesson X of Y” is the number of lesson records loaded into the screen, so lessons nobody logged are not counted." |

補足:
- C-1・D-1は、表の修正案にあった「登録した人がレッスンを持つ講師でなければ」という書き方が曖昧だったため、実装に合わせて条件を正確にした。担当が自動で付くのは、登録した人の役割が表示上「管理部」（role teacher）で、かつLEADERS（is_coach）に指定されている場合だけ（`student/route.ts:92-98`、役割の表示は `render.ts:43`）。運営・マネージャーがLEADERSに指定されていても、この経路では自分は担当に入らない。
- C-2・D-3は、消化回数を保証しないという注意を残した。数える範囲は「読み込まれたレッスン記録の件数」のまま変えていない（`render.ts:996-1004`）。
- 4本とも、本文末尾のCTAは1回のまま。

## 製品側の要確認（記事の欠陥ではない。CRMは変更していない）

- 英語表示の新規生徒フォームが、表示中の訳語を値として送る（`MockShell.tsx:1673,1683-1684`）。実装を読む限り、体験予約が受講中として保存され、プランも "Weekly" で入る。実装の読み取りで送信の経路を確認しただけで、実機では試していない。
- 招待画面の説明は「一般は生徒・レッスン・課題を扱えます」（`html-en.ts:301` の日本語原文）だが、生徒の作成の既定は運営・マネージャー・管理部だけ（`authz.ts:133`）。
- APIキーの発行フォームは役割に関係なく表示され、オーナー・管理者以外が押すと何も起きない（`api-keys-view.tsx:204-210` は失敗を表示しない）。
- Zapierの接続欄の案内文が `https://crm.consilegy.com/settings/api-keys` を指す（`authentication.js:11`）。ワークスペースを含むURLで開けるかは未確認。

## できなかったこと

- Claude自身は、ブラウザで画面を確認していない。Zapierの「Beta」表示は、Codexの画面の記録を読んで確認した。
- デモ・本番の画面での確認はしていない。英語登録の問題も、実機では試していない。根拠は実装の読み取りと公開ページの取得だけ。
- 日本語本文の字数と一文の字数は機械で計測していない（目視）。
