---
title: "外出中の営業に、今日やることが届かない"
slug: "task-deadlines-never-reach-the-rep-on-the-road"
lang: "ja"
category: "setup"
pain: "CRMに入れたタスクの期限は、CRMを開いた人にしか見えない。客先直行の営業は夕方まで開かず、見積の送付や折り返しの約束が翌日にずれる"
feature: "通知（タスクの期限を担当者のスマホ・PCに前日と当日の朝10時に届ける。Slackにも流せる。新しくMQLになった人はSlackとメールで営業に知らせる）"
screens: "サイドバー「設定」→「通知」／「タスクの期限をこの端末に通知」の「この端末で通知を受け取る」「この端末で受け取り中」「テスト通知を送る」「この端末では止める」／「通知設定」の「Slack通知を有効化」「Slack Incoming Webhook URL」「タスクの期限（前日・当日の朝10時）もこのSlackに流す」「メール通知を有効化」「営業通知メール(担当未設定時の宛先)」「マネージャーメール(Critical時に追加通知)」「保存」／通知「明日が期限: タスク名」「今日が期限 2件 / 明日が期限 1件」／Slack「新規MQL: 氏名」「優先度」「理由」「次アクション」「対応期限」／「設定」→「週次ダイジェスト」"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/settings/page.tsx / src/app/(dashboard)/settings/notifications/page.tsx / src/app/(dashboard)/settings/notifications/notifications-view.tsx / src/app/(dashboard)/settings/notifications/push-device-card.tsx / src/app/api/notification-settings/route.ts / src/app/api/push/subscribe/route.ts / src/app/api/push/test/route.ts / public/push-sw.js / src/app/manifest.ts / src/lib/push.ts / src/lib/task-reminders.ts / src/lib/notify.ts / src/lib/mql-handoff.ts / src/lib/lead-scoring-run.ts / src/lib/routing.ts / src/lib/revops/deals.ts / src/lib/revops/util.ts / src/lib/digest/weekly.ts / src/app/(dashboard)/settings/weekly-digest/weekly-digest-view.tsx / src/app/api/cron/workflows/route.ts / vercel.json / supabase/migrations/039_notification_settings.sql / supabase/migrations/224_task_reminders_push.sql / supabase/migrations/071_secret_rls_hardening.sql / src/app/api/demo/seed/route.ts"
date: 2026-10-15
author: "山口聖子"
---
朝8時、営業は客先に直行します。昨日の帰り際、CRMに「A社へ見積を送る」を期限「今日」で入れました。商談が2件続き、CRMを開くのは夕方5時。見積は明日に回り、A社の担当者は一日、返事を待っていました。

## 失っているのは、約束の日に動ける営業

タスクの期限は、CRMを開いた人にしか見えません。一番の損失は、営業が覚えていなかったことではなく、覚えていなくても動ける仕組みが無かったことです。

仮に営業5人が、週に2件ずつ期限を1日ずらすとします。週10件、月40件の約束が、お客様の側で1日ずつ遅れ、1件ごとに「この会社は返事が遅い」という印象になります。

期限は、本人の記憶ではなく、本人のスマホに届くものにします。

## Revenue CRMでは、タスクの期限が前日と当日の朝10時にスマホとPCへ届く

担当者のスマホとPCに、期限の前日と当日の朝10時に届きます。設定は本人が1回だけです。サイドバーの「設定」を開き、「通知」を押します。上の「タスクの期限をこの端末に通知」で「この端末で通知を受け取る」を押し、ブラウザの許可を「許可」にすると、「この端末で受け取り中」に変わります。「テスト通知を送る」で、その場で1通届きます。PCとスマホは別々に登録します。iPhoneとiPadは、Safariの共有ボタンから「ホーム画面に追加」し、そのアイコンから開いて登録します。

届くのは、自分が担当するタスク（担当が空なら、作った人）のうち、期限が明日のものと今日のものです。1件なら「明日が期限: タスク名」と相手の名前、複数なら「今日が期限 2件 / 明日が期限 1件」とまとまって届き、押すと「タスク」の画面が開きます。

チームで見たいときは、同じ画面の「通知設定」で「Slack通知を有効化」が付いていることを確かめ、「Slack Incoming Webhook URL」を貼り、「タスクの期限（前日・当日の朝10時）もこのSlackに流す」にチェックを入れて「保存」します。朝10時に、担当者名つきで1通にまとまって届きます。

同じ「通知設定」は、新しく見込み客（MQL）になった人の知らせにも使います。「新規MQL: 氏名」に「優先度」「理由」「次アクション」「対応期限」が付いて、Slackと、担当者のメールに届きます。担当が空の人は、担当の少ないメンバーに自動で割り当てられ、その人に届きます。「営業通知メール(担当未設定時の宛先)」に入れたアドレスには、担当の有無にかかわらず毎回届き、優先度がCriticalなら「マネージャーメール(Critical時に追加通知)」にも届きます。

注意が5つあります。

- スマホに届くのはタスクの期限だけです。期限の無いタスク（商談停滞の自動化が作るタスクなど）は届かず、期限を過ぎたタスクの再通知もありません
- 時刻は朝10時（日本時間）、前日と当日の最大2回で固定です
- 端末の登録は本人が自分で行います。「通知設定」のSlackとメールを保存できるのはオーナーと管理者だけで、一般メンバーが押すと「保存に失敗しました」と出るだけです
- 新規MQLの知らせは、コンタクトがMQLになった時だけです。画面から作ったコンタクトはその場で判定されますが、フォーム・名刺・CSVで入った人は翌朝10時ごろの判定です。「問い合わせが来た瞬間」の通知ではありません。また、営業連絡してよいと決まっていない人は「連絡可否を確認: 氏名」のタスクになり、Slackもメールも出ません
- 届いたかどうかの履歴を見る画面はありません。Slackは「Incoming Webhook」のURLを貼る方式で、チャンネルはSlack側で決まります

週の振り返りは、「設定」の「週次ダイジェスト」です。月曜の朝10時に、先週の動きと止まっている商談が、オーナーと管理者に1通で届きます。宛先はその画面で変えられます。

## 最初の一歩

今日、営業全員がスマホで「設定」→「通知」を開き、「この端末で通知を受け取る」を押して、「テスト通知を送る」で届くことを確かめてください。iPhoneの人は、先にホーム画面に追加します。そのあと、明日が期限のタスクを各自1件入れ、明日の朝10時に届けば設定は終わりです。Slackへの共有は、各自に届くのを確かめてから足します。

メールアドレスだけで試せるデモで「B2B」（法人営業向け）を選ぶと、「設定」の「通知」を同じ画面で確かめられます。デモは共有のアカウントなので、自分のスマホは登録せず、PCのブラウザで「テスト通知を送る」までを確かめてください。翌朝の通知は届きません。[デモを試す](https://crm.consilegy.com/demos)
