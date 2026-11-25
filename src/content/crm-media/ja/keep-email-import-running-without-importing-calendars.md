---
title: "メールは取り込みたいが、全員の予定表まで顧客管理に入れたくない"
slug: "keep-email-import-running-without-importing-calendars"
lang: "ja"
category: "operate"
pain: "メール利用のために予定表の取り込みまで続けてしまう"
feature: "ワークスペース全体の予定表取り込みを停止"
screens: "設定 → 連携 → Google／Outlook → 予定表の取り込み（ワークスペース全体）"
segment: "b2b"
edition: "b2b"
sources: "src/components/calendar-sync-switch.tsx / src/lib/calendar-sync-enabled.ts / src/app/api/org-settings/calendar-sync/route.ts / src/app/(dashboard)/settings/outlook/page.tsx / src/app/(dashboard)/settings/google/page.tsx / src/app/api/integrations/outlook/sync-calendar/route.ts / src/app/api/integrations/google/sync-calendar/route.ts / supabase/migrations/285_org_calendar_sync.sql / supabase/migrations/286_organizations_grant_calendar_sync.sql / src/lib/outlook-sync.ts / src/lib/google-sync.ts / src/lib/outlook.ts / src/lib/meetings/teams.ts / src/lib/meetings/gemini-notes.ts / src/app/(dashboard)/settings/outlook/outlook-view.tsx / vercel.json"
date: "2026-11-25"
author: "山口聖子"
---
メールのやり取りは顧客管理に残したい。ただ、外部の人と会った予定まで取り込むかは、社内で決めていない。接続を全部外すとメールも使えなくなるため、判断を先送りしていませんか。

Revenue CRMでは、GoogleとOutlookの予定表の取り込みを、ワークスペース単位で止められます。接続を解除する操作とは別です。メールの取り込みと送信を続けながら、これからの予定表取り込みを止めるために使います。

## 一人の予定表ではなく、ワークスペース全体の設定

「設定」→「連携」から「Google」または「Outlook」を開きます。「予定表の取り込み（ワークスペース全体）」に、現在のオン・オフが表示されます。

変更できるのはオーナーと管理者です。ほかの役割では変更できない案内が出ます。自分の予定表だけを対象にするスイッチではないので、ほかのメンバーが予定表の取り込みを使っていないか、変更前に確認してください。

このスイッチをオフにしても、接続時に許可した予定表の読み取り権限を取り消すわけではありません。予定表へのアクセス権限そのものを渡さない方針なら、この設定だけでは満たせないため、接続前に確認してください。

GoogleとOutlookの設定画面にそれぞれ出ますが、別々の設定ではありません。片方で切り替えると、そのワークスペースの両方の連携に効きます。自分のOutlookだけ止めたつもりで、同僚のGoogle連携まで止めないよう、対象を共有してから変更します。

## オフにしても、メールの接続は残す

見出しの右にあるスイッチをオフにすると、保存処理が動きます。成功すると「予定表の取り込みをオフにしました」と出ます。見出しは「: オフ」になり、予定表の行には「管理者が停止中」と出ます。予定表の1日1回の自動取り込みと、手動の「今すぐ同期」は停止します。

止まるのは予定表の取り込みです。接続済みアカウントのメールの取り込みと送信は続きます。メールを使い続けるために接続そのものを外す必要はありません。予定から新しいリードを作る処理も、その予定表を取り込まなくなることで止まります。TeamsやGoogle Meetの議事録取り込みは別の会議ツール連携で動き、このスイッチの対象ではありません。

オンのときは、接続した人の予定表から過去30日から90日先までが1日1回の自動取り込み対象です。社外の参加者が一人だけで繰り返しではない予定では、その人が未登録ならリードとして登録されます。「予定を共有するか」だけでなく、「予定から顧客情報を作るか」も含めて判断します。

## すでに取り込んだ予定は消えない

オフは、過去の情報を削除する操作ではありません。取り込み済みの予定は残ります。既存の予定や、その予定をきっかけに作った連絡先も、一緒に消えるとは考えないでください。

保存が失敗した場合は、止まったと判断しません。画面の案内と状態を確認し、読み込み直してもオフが保たれているか確かめます。データベースの更新待ちなどで設定を保存できない環境では、従来どおりオンとして動く場合があります。オーナー・管理者以外は社内の管理者に依頼します。管理者でも押せないときは、運営担当へ確認します。

## 最初は、メールと予定表の用途を分けて確認する

管理者が、現在接続している人と、予定表を取り込む必要がある業務を確認します。メールだけを使う方針なら、ワークスペース全体への影響を伝えてからオフにし、保存後の表示を確認してください。

[デモ](https://crm.consilegy.com/demos?edition=demo&lang=ja)で「スタートアップ・中小企業（標準版）」を選び、連携設定の構成を確かめられます。共有デモでは設定を切り替えず、閲覧だけにしてください。
