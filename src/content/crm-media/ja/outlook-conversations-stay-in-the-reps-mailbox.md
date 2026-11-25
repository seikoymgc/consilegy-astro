---
title: "Outlookのやり取りが、担当者の受信箱にしか残らない"
slug: "outlook-conversations-stay-in-the-reps-mailbox"
lang: "ja"
category: "operate"
pain: "引き継ぐ人が相手との直近のメールを確認できず、担当者に転送を頼む"
feature: "Outlookのメール同期とコンタクトのメール・予定"
screens: "設定 → 連携 → Outlook → メール → 今すぐ同期／コンタクト → メール・予定"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/settings/integrations/page.tsx / src/app/(dashboard)/settings/outlook/page.tsx / src/app/(dashboard)/settings/outlook/outlook-view.tsx / src/app/api/integrations/outlook/route.ts / src/app/api/integrations/outlook/sync-email/route.ts / src/lib/outlook-sync.ts / src/lib/google-sync.ts / src/lib/crm/contact-emails.ts / src/app/(dashboard)/contacts/[id]/page.tsx / supabase/migrations/105_active_org_rls_hardening.sql / src/lib/work-fuel.ts / src/lib/calendar-sync-enabled.ts / src/components/calendar-sync-switch.tsx / src/lib/outlook-subscriptions.ts / src/app/api/integrations/outlook/notify/route.ts / src/app/api/integrations/outlook/callback/route.ts / supabase/migrations/288_outlook_mail_subscriptions.sql / supabase/migrations/285_org_calendar_sync.sql"
date: "2026-11-22"
updated: "2026-11-25"
author: "山口聖子"
---
担当を引き継ぐとき、商談の金額は分かっても、相手に何を伝えたかが分からない。Outlookを使う営業に「直近のメールを転送してください」と頼み、返事を待ってから連絡する。担当者の受信箱が、引き継ぎの入口になっています。

Revenue CRMでは、Outlookの最近のメールから、登録済みの相手とのやり取りを取り込めます。コンタクトの「メール・予定」で件名と本文の一部を読み、詳しい確認が必要なメールを絞ります。全文はOutlookで読むので、元のメールは消さずに置いておきます。

## まず、共有してよい業務用アカウントか確かめる

取り込まれたメールは、その接続者だけの個人メモにはなりません。同じ組織のメンバーからも閲覧される前提で、顧客管理システムに残してよい内容かを確認してください。

同期できるのは、接続した本人のメールボックスです。引き継ぎに使う場合は、前任者が在籍中に自分の業務用Outlookを接続し、取り込んでおく必要があります。後任者が自分のアカウントを接続しても、前任者のメールは取り込めません。

「設定」→「連携」→「Outlook」で「Outlook 連携」を開きます。接続していなければ「Microsoft アカウントを接続」へ進み、許可する内容を読みます。Microsoft 365の組織側で、管理者の許可が必要な場合もあります。サービス側の接続設定が未完了という案内が出る場合は、運営担当へ確認します。

接続後は、新しく届いたメールや送ったメールが、Microsoftからの通知を受けてその都度取り込まれます。通知で拾えなかった分を補うため、1日1回の自動同期も行います。手動で押したときだけ共有されるわけではありません。

予定表はワークスペース全体の取り込み設定がオンの場合だけ対象です。止め方は[予定表の取り込みを止める記事](/crm/media/b2b/keep-email-import-running-without-importing-calendars/)にまとめています。予定表の内容によっては、新しいコンタクトが作られます。1:1メールやシーケンスの送信元にも使われますが、Gmailも接続済みならGmailが優先されます。まず接続先と共有範囲を確認してから使います。

## 「メール」の「今すぐ同期」から、相手の画面へ移る

既に接続済みなら、Outlookの設定画面にある「メール」の「今すぐ同期」を押します。メールの読み取り許可がないときは、再接続が必要です。

次に「コンタクト」で相手を開き、「メール・予定」タブを選びます。件名、送信・受信の区別、本文の一部を確かめます。ここにはGoogleからの取り込みも並び、欄の見出しは「メール・予定（Gmail・Outlookから取り込み）」と表示されます。Outlook専用の欄を探す必要はありません。何も取り込まれていない場合は、GoogleまたはOutlookの接続を案内します。

相手のメールアドレスが、コンタクトのメールアドレスか追加のメールアドレスとして登録されていることが前提です。未登録の相手は、メール同期だけでは新しいコンタクトになりません。送信メールは、宛先・CC・BCCのうち登録済みの相手との照合対象になります。受信メールは差出人との照合です。接続したアカウントと同じドメインの相手や、自動送信と判定される相手も照合から外れます。

## 過去の全メールを移す機能として使わない

初回は30日前から、以後は前回の同期の1日前から（最大で30日前まで）のメールを確認します。1回で新しい順に最大1,000通を対象とし、登録済みの相手と一致するものを取り込みます。コンタクト側に出るメールも新しい順の最大10件で、全文や添付ファイルは表示されません。

同じ接続のまま繰り返し同期しても、同じメールを新しい記録として追加するわけではありません。同期後に出る件数も、新たに追加された数とは限らないため、相手のタブで実物を確かめます。上限を超えたメールや30日より前の全履歴まで移行できる仕組みではありません。

プリペイドプランでは、メール同期は手動・1日1回の自動とも、1回ごとに燃料を使う処理です。通知による1通ずつの取り込みは燃料を使いません。残高不足や接続エラーで失敗した場合は、設定や残高を確認してください。接続を解除しても、取り込み済みのメールや予定は残ります。

## 最初は、引き継ぐ相手を一人だけ確認する

まず前任者本人が、接続済みの業務用アカウントで最近やり取りした相手を一人選びます。メールアドレスを確認し、同期後に件名と本文の一部が「メール・予定」に出るかを見てください。

確認したいメールの見当を付け、全文が必要なら元のOutlookで読む。この使い分けなら、最初からメールの束を転送してもらわずに、必要なやり取りを指定できます。

[デモ](https://crm.consilegy.com/demos?edition=demo&lang=ja)で「スタートアップ・中小企業（標準版）」を選び、「コンタクト」に「メール・予定」タブがあることを確かめてください。デモではMicrosoftアカウントを接続できません。

