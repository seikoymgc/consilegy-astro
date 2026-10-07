---
title: "一斉メールと個別メールを、CRM のどこから送ればいいのか分からない"
slug: "bulk-and-one-to-one-email-get-mixed-up"
lang: "ja"
category: "setup"
pain: "CRM にメールの機能があるのに、個別のメールと一斉のメールで入口も前提も違うことが伝わっておらず、結局いつものメールソフトから BCC で送り、誰に何を送ったかが CRM に残らない"
feature: "個別メール（「送信待ちの下書き」、コンタクトの「AIメール」、Google 連携）／一斉メール（メールキャンペーン、送信ドメイン、リスト）／HubSpot へのリスト送信"
screens: "サイドバー「送信待ちの下書き」の「新規リードから作る」「営業連絡してよい」「承認して送信」／コンタクト詳細「AIメール」の「メールを提案」「送信」「再生成」／設定「連携」→「Google」→「Google 連携」の「Google アカウントを接続」／サイドバー「メール」→「メールキャンペーン」の「新規キャンペーン」「配信リスト」「保存」「送信」／設定「メール送信ドメイン」の「ドメインを追加」「登録してDNSレコードを取得」「検証」「検証済み」／サイドバー「リスト」→「新規リスト」「条件に合う人を自動で出し入れする」「リストの条件」「条件を追加」「条件を保存」／「自動化」の「動的リスト管理ワークフロー」／リスト詳細「HubSpotに送る」／設定「連携」→「他社CRM（読み取り）」→「CRM連携」"
segment: "b2b"
edition: "b2b"
video: "7"
sources: "src/components/ai-email-panel.tsx / src/app/api/contacts/[id]/send-email/route.ts / src/app/api/contacts/[id]/draft-email/route.ts / src/lib/gmail.ts / src/lib/sending.ts / src/lib/consent.ts / src/app/(dashboard)/settings/google/google-view.tsx / src/app/(dashboard)/settings/page.tsx / src/app/(dashboard)/settings/integrations/page.tsx / src/app/(dashboard)/emails/new/page.tsx / src/app/(dashboard)/emails/[id]/email-detail.tsx / src/app/api/emails/send/route.ts / src/lib/campaign-send.ts / src/components/email-builder.tsx / src/app/(dashboard)/settings/sending-domain/sending-domain-view.tsx / src/app/api/settings/sending-domain/route.ts / src/app/(dashboard)/lists/new/page.tsx / src/components/list-criteria-editor.tsx / src/lib/revops/marketing-ops.ts / src/lib/revops/catalog.ts / src/app/(dashboard)/lists/[id]/list-detail.tsx / src/lib/delivery/hubspot-push.ts / src/app/(dashboard)/settings/crm-sync/crm-sync-view.tsx / src/app/(dashboard)/outbound-drafts/outbound-drafts-view.tsx / src/components/outbound-draft-editor.tsx / src/app/api/outbound-drafts/[id]/route.ts / src/lib/outbound/send.ts / src/app/api/forms/[id]/submit/route.ts / src/app/(dashboard)/contacts/[id]/page.tsx / src/app/(dashboard)/lists/[id]/page.tsx / src/lib/demo.ts / src/lib/i18n/translations.ts / src/lib/personas.ts / src/components/app-sidebar.tsx"
date: 2026-10-08
author: "山口聖子"
---
展示会の翌週です。営業の担当者は、名刺を交換した120人にお礼と資料を送りたいと考えています。CRM のどこから送ればいいのかが分からず、結局、いつものメールソフトで BCC に120件のアドレスを貼って送ります。

同じ週、マーケティングの担当者は、毎月のお知らせを CRM から送ろうとしてエラーで止まり、去年までの方法に戻ります。

## 失っているのは、送る手間ではなく「誰に何を送ったか」の記録

BCC で送ったメールは、CRM のどこにも残りません。

手間は数えられます。仮に営業が5人、月に2回、宛先を貼り直して確かめるのに30分かけているとします。月に5時間です。

数えにくいほうが重いです。誰に送ったかが残らない。「もう送らないでほしい」という返事の受け皿がない。

原因は機能の不足ではなく、個別と一斉が同じ「メール」という名前で呼ばれていることです。この2つは、入口も、差出人も、送ってよい相手の決まり方も違います。先に決めるのは文面ではなく、「この相手に送ってよいか」です。

## Revenue CRM では、個別は「送信待ちの下書き」から、一斉は「メール」から送る

どちらも、送ってよい相手だという記録がない人には送れない作りです。

### 個別のメール

名刺や CSV で入れたばかりの相手は、連絡してよいかが未判定です。入口はサイドバーの「送信待ちの下書き」です。名刺を読み取った相手には、1通目の下書きが入っています。無ければ「新規リードから作る」を押します。下書きを開いて文面を直し、「営業連絡してよい」を押すと、その判断が記録されます。「承認して送信」で送られます。

一度記録した相手には、コンタクトの詳細画面にある「AIメール」のカードからも送れます。「メールを提案」で下書きが入り、直して「送信」を押します。未判定の相手には、ここでは「送信不可」と出ます。

自分の Gmail から出したい場合は、設定の「連携」にある「Google」で「Google アカウントを接続」を押します。接続していなくても送信は止まらず、CRM 側の差出人から出ます。送ったメールは、コンタクトの「アクティビティ」に「送信: 件名」として残ります。

### 一斉のメール

サイドバーの「メール」で「新規キャンペーン」を押し、件名と本文を入れ、「配信リスト」を選んで「保存」します。開いた詳細画面で「送信」を押すと、その場で送られます。サイドバーの役割が「営業」だと「メール」と「リスト」は出ないので、「マーケ」か「すべて」に切り替えてください。

先に要るものが3つあります。

1つ目は送信ドメインです。設定の「メール送信ドメイン」でドメインと差出人名を入れ、「登録してDNSレコードを取得」を押します。表示されたレコードを自社の DNS に追加し、「検証」を押して「検証済み」になるまで、一斉のメールは1通も出ません。操作できるのはオーナーか管理者だけです。

2つ目は宛先のリストです。サイドバーの「リスト」で「新規リスト」を作り、「条件に合う人を自動で出し入れする」にチェックを入れます。次の画面の「リストの条件」で「条件を追加」し、「条件を保存」を押します。メンバーは毎晩の更新で入るので、送る前日までに保存してください。その更新は、「自動化」の「動的リスト管理ワークフロー」が ON のときだけ動きます。どちらも、オーナー・管理者・マネージャーの権限が要ります。

3つ目は同意です。届くのは、リストの中で、配信の同意が記録されていて、配信停止もしていない人だけです。同意が記録されるのは、CRM のフォームで同意欄にチェックを入れて送信した人です。CSV や名刺で入れた相手には記録が無く、全員が外れると「配信可能なコンタクトがいません」と出て、1通も出ません。配信停止のリンクは自動で付きます。

既存の名簿への配信を HubSpot で続けているなら、リストだけを渡せます。設定の「連携」にある「他社CRM（読み取り）」に、連絡先とリストへ書き込める HubSpot のアクセストークンを保存すると、リストの詳細画面の「HubSpotに送る」が使えます。同じ名前の静的リストが HubSpot 側に作られ、配信と配信停止の管理は HubSpot で続けます。

## 最初の一歩

今週やることは1つです。「送信待ちの下書き」を開き、展示会や訪問で会った相手を5人選んで、「営業連絡してよい」と「承認して送信」まで進めてください。送ってよい相手かを一人ずつ決めて残すことが、BCC に戻らないための土台になります。

画面を先に見たい方は、メールアドレスだけで入れる[デモ](https://crm.consilegy.com/demos)で「B2B」を選び、コンタクトを1人開いて「AIメール」のカードを確かめてください。共有の環境なので、実際の送信と Google の接続は、自社の環境で行ってください。
