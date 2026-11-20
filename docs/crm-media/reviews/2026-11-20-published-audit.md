# 2026-11-20 公開済み全記事の統合品質監査

## 最終判定

**87記事・日英174ページを確認。128ページを訂正し、全174ページの未解決Critical・Majorは0件。**

代表の「公開済みの記事、全部同じようにチェックして欲しい」に基づく全件監査。Codexが執筆・訂正し、実際のClaude Code CLIが①事実検証→②編集レビュー→③校正の順に6領域を確認した。Codexの自己レビューだけで完了扱いにしていない。代表の追加指示に従い、品質指摘は都度の承認待ちで止めず、修正・再確認・公開更新まで進める。

- 対象: 2026-11-20時点で公開中の日英各87ページ。draftと未来日は除外。URLと公開日は保持、訂正した記事のupdatedを11/20へ更新。
- 初回: 先行6ページは本日の最終レビューを引き継ぎ、残る168ページは12ページずつ14バッチで確認。初回360件（Critical84、Major95、Minor181、日英を別々に計数）を記録。
- 訂正: 古い画面名、初期権限、送信前確認、CSVの結果・重複判定、日時、課題の担当範囲、外部連携、検索説明文を訂正。裏付けのない個人体験・頻度・動画の案内・固定デモ件数は削除または確認できる条件に限定した。体験や効果の数字は補っていない。
- 再確認: 全14バッチの168ページで3工程を再実施。追加64件（Critical2、Major6、Minor56）も訂正。分野別最終確認と体験の断定削除の確認を行い、最後の7件は[公開判定](2026-11-20-audit-publication-gate.md)で解消を確認。
- 先行B2Bの日英2ページの表紙が前日と似ているMinorは、写真の生成元・構図比較とともに先行レビューに記録して見送り。内容の公開を妨げる未解決事項ではない。旧表紙を今回すべて作り直したわけではない。
- 一次情報: 開始時CRM61c5428、最後に最新main f8c3396（#470）へ更新し、[追加の差分確認](2026-11-20-audit-latest-crm.md)で既刊への重大な影響なしを確認。サイトは並行作業の529fe24を取り込んだ。CRMの編集・pushはしていない。
- 検証: npm ciは同日の先行実行で成功、依存定義の変更なし。最後のnpm run build成功（394ページ）。全174ページの本文CTA・内部リンク・画像参照・禁止表現の検査は問題なし。監査前の174URLのHTTP200・タイトル、本文内の外部リンク2先のHTTP200も確認。
- 本番: この監査コミットの配信後、全174URLのHTTP200・タイトル・本文が最終distと一致するかを確認する。実行結果はこのチャットと実行側のpublished-verification.jsonへ残す。push成功を公開確認成功として扱わない。

## 確認範囲

事実の根拠は、現在の製品コード・スキーマ・ヘルプ・製品の公開資料。画像は既存の本文と参照の対応を確認した。共有デモの認証が切れていたため、登録・送信・同期・権限変更などの実操作の検証や、全画像の撮り直しはしていない。実画面で確かめられていない項目は各レビューの「未確認」に記録した。静的確認を実機テスト済みとは呼ばない。

初回4バッチではCLIの終了出力だけ空だったが、終了コード0・stderr空で、Markdownと全対象12ページのJSON成果物は保存されていた。全14バッチの再確認は成果物と対象の一致を検証し、終了出力の欠落を未レビューのまま隠していない。

## 記事台帳

|記事|日本語|英語|訂正ページ数|
|---|---|---|---|
|消すのが怖くて、顧客リストの整理に誰も手をつけない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/afraid-to-delete-so-nobody-cleans-the-list/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/afraid-to-delete-so-nobody-cleans-the-list/)|2|
|AIの利用ルールが決まらず、顧客管理システムの導入まで止まっている|[確認済み・訂正](https://consilegy.com/crm/media/b2b/ai-policy-undecided-so-the-whole-rollout-stalls/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/ai-policy-undecided-so-the-whole-rollout-stalls/)|2|
|「あの案件、どこまで進んだ？」を、人に聞かないと分からない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/asking-people-where-the-deal-stands/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/asking-people-where-the-deal-stands/)|2|
|請求と顧客情報が別の場所にあって、入金されたかを営業が知らない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/billing-and-customer-records-live-apart/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/billing-and-customer-records-live-apart/)|2|
|社長は数字を見たいだけなのに、席代が惜しくて、営業が毎週スクショを送っている|[確認済み・訂正](https://consilegy.com/crm/media/b2b/bosses-get-screenshots-instead-of-crm-access/)|[確認済み](https://consilegy.com/en/crm/media/b2b/bosses-get-screenshots-instead-of-crm-access/)|1|
|一斉メールと個別メールを、CRMのどこから送ればいいのか分からない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/bulk-and-one-to-one-email-get-mixed-up/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/bulk-and-one-to-one-email-get-mixed-up/)|2|
|一斉メールを、誰に何人届くのか確かめないまま送っている|[確認済み](https://consilegy.com/crm/media/b2b/bulk-emails-sent-without-checking-who-gets-them/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/bulk-emails-sent-without-checking-who-gets-them/)|1|
|名刺の束が引き出しに残ったまま、担当が辞める|[確認済み・訂正](https://consilegy.com/crm/media/b2b/business-cards-stay-in-the-drawer/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/business-cards-stay-in-the-drawer/)|2|
|取引先とのLINEやChatworkのやり取りが、担当者のスマホにしか残らない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/chat-threads-stay-on-personal-phones/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/chat-threads-stay-on-personal-phones/)|2|
|お盆休みの間も、「記録漏れ」の警告が出続ける|[確認済み](https://consilegy.com/crm/media/b2c/closed-days-still-count-as-missed-lessons/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/closed-days-still-count-as-missed-lessons/)|1|
|契約の更新日に、請求書を出す段になって気づく|[確認済み](https://consilegy.com/crm/media/b2b/contract-renewals-noticed-too-late/)|[確認済み](https://consilegy.com/en/crm/media/b2b/contract-renewals-noticed-too-late/)|0|
|会議の前に、CRMから商談一覧を書き出して、ChatGPTに貼り付けている|[確認済み・訂正](https://consilegy.com/crm/media/b2b/crm-data-pasted-into-chatgpt-by-hand/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/crm-data-pasted-into-chatgpt-by-hand/)|2|
|画面を英語にしても、自社で作った商談ステージ名だけ日本語のまま|[確認済み・訂正](https://consilegy.com/crm/media/b2b/custom-deal-stages-stay-in-one-language/)|[確認済み](https://consilegy.com/en/crm/media/b2b/custom-deal-stages-stay-in-one-language/)|1|
|受注のときに聞いた「お客様が達成したいこと」が、導入担当に引き継がれない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/customer-goals-get-lost-after-the-deal-closes/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/customer-goals-get-lost-after-the-deal-closes/)|2|
|スプレッドシートの顧客リストから、いつまでもCRMに移れない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/customer-list-stuck-in-excel/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/customer-list-stuck-in-excel/)|2|
|顧客情報が変わっているのに、誰に確認すればいいか分からない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/customer-record-changed-but-nobody-knows-who/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/customer-record-changed-but-nobody-knows-who/)|2|
|商談の報告が「手応えあり」で終わり、予算も決裁者も分からない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/deal-reports-end-with-a-good-feeling/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/deal-reports-end-with-a-good-feeling/)|2|
|画面の商談ステージが、社内で使っている言葉と違う|[確認済み・訂正](https://consilegy.com/crm/media/b2b/deal-stages-dont-match-the-words-we-use/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/deal-stages-dont-match-the-words-we-use/)|2|
|資料をダウンロードした人に、誰も電話していない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/document-downloads-nobody-calls/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/document-downloads-nobody-calls/)|2|
|CRMから送ったメールに、営業の名前も電話番号も付いていない|[確認済み](https://consilegy.com/crm/media/b2b/emails-from-the-crm-go-out-without-a-signature/)|[確認済み](https://consilegy.com/en/crm/media/b2b/emails-from-the-crm-go-out-without-a-signature/)|0|
|CRMを入れたら「設定」から始まり、空のまま止まる|[確認済み・訂正](https://consilegy.com/crm/media/b2b/empty-crm-stalls-at-setup/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/empty-crm-stalls-at-setup/)|2|
|英語の画面にしたのに、「今日」の区切りは日本時間のままになっている|[確認済み](https://consilegy.com/crm/media/b2b/english-interface-still-shows-the-wrong-business-day/)|[確認済み](https://consilegy.com/en/crm/media/b2b/english-interface-still-shows-the-wrong-business-day/)|0|
|未確認の課題が残る生徒を、カルテを一人ずつ開いて探している|[確認済み](https://consilegy.com/crm/media/b2c/finding-unreviewed-homework-means-opening-every-student-profile/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/finding-unreviewed-homework-means-opening-every-student-profile/)|1|
|外国人の先生が日本語の画面を読めず、記録を事務の人が代わりに打っている|[確認済み](https://consilegy.com/crm/media/b2c/foreign-teachers-cant-read-the-school-screens/)|[確認済み](https://consilegy.com/en/crm/media/b2c/foreign-teachers-cant-read-the-school-screens/)|0|
|まだ見ていない課題を「確認済み」にして、一覧から消してしまった|[確認済み・訂正](https://consilegy.com/crm/media/b2c/homework-marked-reviewed-before-it-was-checked/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/homework-marked-reviewed-before-it-was-checked/)|2|
|宿題の催促を、先生が夜に一人ずつLINEで打っている|[確認済み・訂正](https://consilegy.com/crm/media/b2c/homework-reminders-typed-one-by-one/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/homework-reminders-typed-one-by-one/)|2|
|課題を出したのに、「未提出」の催促が届いてしまう|[確認済み](https://consilegy.com/crm/media/b2c/homework-was-submitted-but-the-reminder-still-arrives/)|[確認済み](https://consilegy.com/en/crm/media/b2c/homework-was-submitted-but-the-reminder-still-arrives/)|0|
|問い合わせフォームの通知メールを、誰かが顧客リストに打ち直している|[確認済み・訂正](https://consilegy.com/crm/media/b2b/inquiry-form-emails-retyped-by-hand/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/inquiry-form-emails-retyped-by-hand/)|2|
|問い合わせの種類を、届いてから毎回読み分けている|[確認済み・訂正](https://consilegy.com/crm/media/b2b/inquiry-types-get-sorted-by-hand-after-submission/)|[確認済み](https://consilegy.com/en/crm/media/b2b/inquiry-types-get-sorted-by-hand-after-submission/)|1|
|生徒カルテの聞き取り項目が英会話向けのままで、うちの教室では何を書けばいいか分からない|[確認済み](https://consilegy.com/crm/media/b2c/intake-fields-written-for-an-english-school/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/intake-fields-written-for-an-english-school/)|1|
|レッスンで何をやったかが引き継がれず、担当が替わると最初からになる|[確認済み・訂正](https://consilegy.com/crm/media/b2c/lesson-notes-vanish-when-the-teacher-changes/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/lesson-notes-vanish-when-the-teacher-changes/)|2|
|レッスンで教えた表現を、次の先生がZoomから探し直している|[確認済み・訂正](https://consilegy.com/crm/media/b2c/lesson-phrases-disappear-when-the-zoom-call-ends/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/lesson-phrases-disappear-when-the-zoom-call-ends/)|2|
|LINE公式アカウントをつないだのに、生徒の課題も友だち追加も教室に届いていない|[確認済み・訂正](https://consilegy.com/crm/media/b2c/line-says-connected-but-nothing-comes-in/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/line-says-connected-but-nothing-comes-in/)|2|
|月曜の会議の前に、マネージャーが先週の受注と止まっている商談を営業に聞いて回っている|[確認済み・訂正](https://consilegy.com/crm/media/b2b/managers-chase-reps-for-the-monday-numbers/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/managers-chase-reps-for-the-monday-numbers/)|2|
|打ち合わせのメモが、営業のノートの中で終わる|[確認済み・訂正](https://consilegy.com/crm/media/b2b/meeting-notes-stay-in-the-notebook/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/meeting-notes-stay-in-the-notebook/)|2|
|商談で「金曜までに送ります」と言った宿題を、誰も追いかけていない|[確認済み](https://consilegy.com/crm/media/b2b/meeting-promises-nobody-tracks/)|[確認済み](https://consilegy.com/en/crm/media/b2b/meeting-promises-nobody-tracks/)|0|
|月曜の営業会議が数字の報告で終わり、今週どの商談に集中するかが決まらない|[確認済み](https://consilegy.com/crm/media/b2b/monday-meetings-end-without-deciding-what-to-focus-on/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/monday-meetings-end-without-deciding-what-to-focus-on/)|1|
|月1回の進捗レポートを、先生が夜に一から書いている|[確認済み](https://consilegy.com/crm/media/b2c/monthly-reports-written-late-at-night/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/monthly-reports-written-late-at-night/)|1|
|卒業後プランの月額が、次の加入者にも古いまま|[確認済み](https://consilegy.com/crm/media/b2c/new-alumni-signups-still-use-the-old-price/)|[確認済み](https://consilegy.com/en/crm/media/b2c/new-alumni-signups-still-use-the-old-price/)|0|
|新しい顧客を登録するたび、別のアプリへ同じ名前をコピーしている|[確認済み・訂正](https://consilegy.com/crm/media/b2b/new-contacts-get-copied-into-another-app-by-hand/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/new-contacts-get-copied-into-another-app-by-hand/)|2|
|新しい課題の名前が、LINEの提出先に出てこない|[確認済み・訂正](https://consilegy.com/crm/media/b2c/new-homework-type-missing-from-line/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/new-homework-type-missing-from-line/)|2|
|新しく入った営業にも、全社の顧客と商談が初日から全部見えている|[確認済み・訂正](https://consilegy.com/crm/media/b2b/new-reps-can-see-every-customer-in-the-crm/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/new-reps-can-see-every-customer-in-the-crm/)|2|
|入会した生徒の名簿があるのに、一人ずつ登録し直している|[確認済み・訂正](https://consilegy.com/crm/media/b2c/new-student-rosters-get-retyped-one-by-one/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/new-student-rosters-get-retyped-one-by-one/)|2|
|新しい先生が入るたびに、代表のログインを使い回している|[確認済み・訂正](https://consilegy.com/crm/media/b2c/new-teachers-share-the-owners-login/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/new-teachers-share-the-owners-login/)|2|
|次のレッスンの予約を、LINEの往復で決めている|[確認済み・訂正](https://consilegy.com/crm/media/b2c/next-lesson-booked-over-line-back-and-forth/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/next-lesson-booked-over-line-back-and-forth/)|2|
|顧客とのやり取りの記録が、CRMの中にしか無い|[確認済み・訂正](https://consilegy.com/crm/media/b2b/no-one-keeps-a-copy-of-the-customer-data/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/no-one-keeps-a-copy-of-the-customer-data/)|2|
|どの生徒を誰が見るのか、決まっていない|[確認済み・訂正](https://consilegy.com/crm/media/b2c/nobody-is-assigned-to-each-student/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/nobody-is-assigned-to-each-student/)|2|
|info@に来た問い合わせに、誰が返したか分からない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/nobody-knows-who-answered-the-info-inbox/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/nobody-knows-who-answered-the-info-inbox/)|2|
|LINEで届いた課題を、誰が見たのか分からない|[確認済み・訂正](https://consilegy.com/crm/media/b2c/nobody-knows-who-checked-the-homework/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/nobody-knows-who-checked-the-homework/)|2|
|商談の相手が窓口の1人しか記録されず、誰が決裁するのかは担当者の頭の中にしかない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/nobody-knows-who-signs-off-on-the-deal/)|[確認済み](https://consilegy.com/en/crm/media/b2b/nobody-knows-who-signs-off-on-the-deal/)|1|
|終わった企画の配信リストを、顧客まで消えそうで片付けられない|[確認済み](https://consilegy.com/crm/media/b2b/old-mailing-lists-stay-because-deleting-contacts-feels-risky/)|[確認済み](https://consilegy.com/en/crm/media/b2b/old-mailing-lists-stay-because-deleting-contacts-feels-risky/)|0|
|オンライン商談の中身が、話した人の頭にしか残らない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/online-meetings-stay-in-the-speakers-head/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/online-meetings-stay-in-the-speakers-head/)|2|
|海外からのメールが、英語を書ける1人の手が空くまで止まっている|[確認済み・訂正](https://consilegy.com/crm/media/b2b/overseas-emails-wait-for-the-one-english-writer/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/overseas-emails-wait-for-the-one-english-writer/)|2|
|来月のレッスンがどれだけ埋まっているか、代表が先生一人ずつに聞かないと分からない|[確認済み・訂正](https://consilegy.com/crm/media/b2c/owner-cannot-see-how-full-next-month-is/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/owner-cannot-see-how-full-next-month-is/)|2|
|どの先生が何を抱えているか、代表が一人ずつ聞いて回っている|[確認済み・訂正](https://consilegy.com/crm/media/b2c/owner-cannot-see-what-each-teacher-is-holding/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/owner-cannot-see-what-each-teacher-is-holding/)|2|
|代理店や外注先の担当者まで「見込み客」に数えられ、ファネルの数字が実態より膨らむ|[確認済み・訂正](https://consilegy.com/crm/media/b2b/partners-and-vendors-counted-as-leads/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/partners-and-vendors-counted-as-leads/)|2|
|CRMを乗り換えると、過去の電話や打ち合わせの記録が古いシステムに置き去りになる|[確認済み・訂正](https://consilegy.com/crm/media/b2b/past-calls-and-meetings-left-behind-in-the-old-system/)|[確認済み](https://consilegy.com/en/crm/media/b2b/past-calls-and-meetings-left-behind-in-the-old-system/)|1|
|電話で入会が決まった生徒が、紙の名簿にしか載っていない|[確認済み](https://consilegy.com/crm/media/b2c/phone-enrollments-stay-in-the-paper-register/)|[確認済み](https://consilegy.com/en/crm/media/b2c/phone-enrollments-stay-in-the-paper-register/)|0|
|提案書や契約書のPDFが、担当者のPCとメールの中に散らばっている|[確認済み・訂正](https://consilegy.com/crm/media/b2b/proposals-and-contracts-live-on-personal-laptops/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/proposals-and-contracts-live-on-personal-laptops/)|2|
|見積書を登録したあと、PDFにするために別の書式へ打ち直している|[確認済み・訂正](https://consilegy.com/crm/media/b2b/quotes-get-retyped-just-to-make-a-pdf/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/quotes-get-retyped-just-to-make-a-pdf/)|2|
|受付には生徒登録だけ任せたいのに、状態や担当も変えられる|[確認済み](https://consilegy.com/crm/media/b2c/reception-can-change-student-status-and-teacher-assignments/)|[確認済み](https://consilegy.com/en/crm/media/b2c/reception-can-change-student-status-and-teacher-assignments/)|0|
|朝CRMを開いても、何から手をつければいいか分からない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/reps-open-the-crm-and-dont-know-where-to-start/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/reps-open-the-crm-and-dont-know-where-to-start/)|2|
|外回りの営業が、商談の記録を帰社後にまとめて打ち、細部を忘れる|[確認済み](https://consilegy.com/crm/media/b2b/sales-calls-logged-only-after-getting-back-to-the-office/)|[確認済み](https://consilegy.com/en/crm/media/b2b/sales-calls-logged-only-after-getting-back-to-the-office/)|0|
|商談の前に知りたい情報が、備考欄の長文に埋もれている|[確認済み・訂正](https://consilegy.com/crm/media/b2b/sales-details-buried-in-the-notes-field/)|[確認済み](https://consilegy.com/en/crm/media/b2b/sales-details-buried-in-the-notes-field/)|1|
|毎朝、同じコンタクトの絞り込みを作り直している|[確認済み](https://consilegy.com/crm/media/b2b/same-contact-filters-rebuilt-every-morning/)|[確認済み](https://consilegy.com/en/crm/media/b2b/same-contact-filters-rebuilt-every-morning/)|0|
|何社も兼ねる社長が会社ごとに別の人として登録され、やり取りの履歴が2つに割れる|[確認済み・訂正](https://consilegy.com/crm/media/b2b/same-person-split-into-two-contacts/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/same-person-split-into-two-contacts/)|2|
|入れたデータが持ち出せない気がして、管理ツールを変えられない|[確認済み・訂正](https://consilegy.com/crm/media/b2c/school-data-locked-inside-the-app/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/school-data-locked-inside-the-app/)|2|
|退会の連絡が来てから、兆候があったことに気づく|[確認済み・訂正](https://consilegy.com/crm/media/b2c/signs-of-quitting-noticed-too-late/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/signs-of-quitting-noticed-too-late/)|2|
|生徒の状態が変わっていて、誰が対応したのかスタッフに聞いて回っている|[確認済み](https://consilegy.com/crm/media/b2c/staff-ask-who-changed-the-student-status/)|[確認済み](https://consilegy.com/en/crm/media/b2c/staff-ask-who-changed-the-student-status/)|0|
|相手の画面を見ていたのに、商談を作るたび名前を探し直している|[確認済み](https://consilegy.com/crm/media/b2b/starting-a-deal-means-finding-the-same-contact-again/)|[確認済み](https://consilegy.com/en/crm/media/b2b/starting-a-deal-means-finding-the-same-contact-again/)|0|
|辞めた生徒が、毎朝のタスクと月謝の催促に残り続ける|[確認済み・訂正](https://consilegy.com/crm/media/b2c/students-who-quit-stay-on-the-to-do-list/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/students-who-quit-stay-on-the-to-do-list/)|2|
|次の予約が入っていない生徒に、誰も声をかけないまま来なくなる|[確認済み・訂正](https://consilegy.com/crm/media/b2c/students-with-no-next-lesson-booked-drift-away/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/students-with-no-next-lesson-booked-drift-away/)|2|
|外出中の営業に、今日やることが届かない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/task-deadlines-never-reach-the-rep-on-the-road/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/task-deadlines-never-reach-the-rep-on-the-road/)|2|
|画面を英語にしても、タスクの件名が日本語のままで読めない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/task-headings-stay-japanese-in-an-english-interface/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/task-headings-stay-japanese-in-an-english-interface/)|2|
|先生が手順を確かめるたびに、代表がマニュアルを探して送っている|[確認済み・訂正](https://consilegy.com/crm/media/b2c/teachers-ask-the-owner-for-every-manual/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/teachers-ask-the-owner-for-every-manual/)|2|
|先生が自分の担当レッスンを、毎回代表に聞いている|[確認済み・訂正](https://consilegy.com/crm/media/b2c/teachers-ask-the-owner-for-their-schedule/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/teachers-ask-the-owner-for-their-schedule/)|2|
|LINE連携済み講師の課題通知を、担当範囲に合わせる|[確認済み・訂正](https://consilegy.com/crm/media/b2c/teachers-notice-homework-only-after-opening-the-system/)|[確認済み](https://consilegy.com/en/crm/media/b2c/teachers-notice-homework-only-after-opening-the-system/)|1|
|先生に生徒の記録は見せたいが、月謝の金額までは見せたくない|[確認済み・訂正](https://consilegy.com/crm/media/b2c/teachers-see-fee-amounts-too/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/teachers-see-fee-amounts-too/)|2|
|日本語が読めないメンバーが、CRMの画面を使えない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/teammates-who-dont-read-japanese-cant-use-the-crm/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/teammates-who-dont-read-japanese-cant-use-the-crm/)|2|
|マーケの画面に、うちでは使わないメニューが残っている|[確認済み](https://consilegy.com/crm/media/b2b/the-marketing-menu-still-follows-someone-elses-workflow/)|[確認済み](https://consilegy.com/en/crm/media/b2b/the-marketing-menu-still-follows-someone-elses-workflow/)|0|
|画面が多すぎて、スタッフが覚える前に開かなくなる|[確認済み・訂正](https://consilegy.com/crm/media/b2b/too-many-screens-for-staff-to-learn/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/too-many-screens-for-staff-to-learn/)|2|
|体験の申込みフォームと名簿が、つながっていない|[確認済み・訂正](https://consilegy.com/crm/media/b2c/trial-form-not-connected-to-the-roster/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/trial-form-not-connected-to-the-roster/)|2|
|体験レッスンで聞いた話が、先生の頭の中にしか残らない|[確認済み・訂正](https://consilegy.com/crm/media/b2c/trial-lesson-notes-stay-in-the-teachers-head/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/trial-lesson-notes-stay-in-the-teachers-head/)|2|
|月謝の未納に、月末の集計で気づく|[確認済み](https://consilegy.com/crm/media/b2c/unpaid-fees-noticed-at-month-end/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2c/unpaid-fees-noticed-at-month-end/)|1|
|「先方の社内調整中です」が3か月続いている商談を、誰も見ていない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/waiting-on-the-customer-for-three-months/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/waiting-on-the-customer-for-three-months/)|2|
|自動化175本を渡されて、1本もONにできない|[確認済み・訂正](https://consilegy.com/crm/media/b2b/which-automations-to-turn-on-first/)|[確認済み・訂正](https://consilegy.com/en/crm/media/b2b/which-automations-to-turn-on-first/)|2|
|Zoomの表示名が生徒名と違い、レッスンの記録がカルテに出てこない|[確認済み](https://consilegy.com/crm/media/b2c/zoom-display-name-keeps-records-off-the-student-profile/)|[確認済み](https://consilegy.com/en/crm/media/b2c/zoom-display-name-keeps-records-off-the-student-profile/)|0|

## レビュー記録

- batch-01: [初回](2026-11-20-audit-batch-01.md) / [再確認](2026-11-20-audit-batch-01-recheck.md)
- batch-02: [初回](2026-11-20-audit-batch-02.md) / [再確認](2026-11-20-audit-batch-02-recheck.md)
- batch-03: [初回](2026-11-20-audit-batch-03.md) / [再確認](2026-11-20-audit-batch-03-recheck.md)
- batch-04: [初回](2026-11-20-audit-batch-04.md) / [再確認](2026-11-20-audit-batch-04-recheck.md)
- batch-05: [初回](2026-11-20-audit-batch-05.md) / [再確認](2026-11-20-audit-batch-05-recheck.md)
- batch-06: [初回](2026-11-20-audit-batch-06.md) / [再確認](2026-11-20-audit-batch-06-recheck.md)
- batch-07: [初回](2026-11-20-audit-batch-07.md) / [再確認](2026-11-20-audit-batch-07-recheck.md)
- batch-08: [初回](2026-11-20-audit-batch-08.md) / [再確認](2026-11-20-audit-batch-08-recheck.md)
- batch-09: [初回](2026-11-20-audit-batch-09.md) / [再確認](2026-11-20-audit-batch-09-recheck.md)
- batch-10: [初回](2026-11-20-audit-batch-10.md) / [再確認](2026-11-20-audit-batch-10-recheck.md)
- batch-11: [初回](2026-11-20-audit-batch-11.md) / [再確認](2026-11-20-audit-batch-11-recheck.md)
- batch-12: [初回](2026-11-20-audit-batch-12.md) / [再確認](2026-11-20-audit-batch-12-recheck.md)
- batch-13: [初回](2026-11-20-audit-batch-13.md) / [再確認](2026-11-20-audit-batch-13-recheck.md)
- batch-14: [初回](2026-11-20-audit-batch-14.md) / [再確認](2026-11-20-audit-batch-14-recheck.md)
- [B2B最終確認](2026-11-20-audit-final-b2b.md)
- [スクール最終確認A](2026-11-20-audit-final-school-a.md)
- [スクール最終確認B](2026-11-20-audit-final-school-b.md)
- [体験の断定削除の確認](2026-11-20-audit-final-experience.md)
- [最新CRM差分の確認](2026-11-20-audit-latest-crm.md)
- [最後の公開判定](2026-11-20-audit-publication-gate.md)

公開直前に並行の6836bfa（プライバシーポリシーと別メディア記事の訂正）を取り込み、監査コミットをrebaseした。CRMメディアの他者変更は無い。最後に指摘されたasking-people日英のサイドバー名も「業務／View」に揃えた。

- [最後に残ったサイドバー名2件の照合](2026-11-20-audit-sidebar-labels.md)もClaudeで確認済み。
