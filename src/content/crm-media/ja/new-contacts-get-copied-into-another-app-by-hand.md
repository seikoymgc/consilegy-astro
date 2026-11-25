---
title: "新しい顧客を登録するたび、別のアプリへ同じ名前をコピーしている"
slug: "new-contacts-get-copied-into-another-app-by-hand"
lang: "ja"
category: "setup"
segment: "b2b"
edition: "b2b"
b2b_categories: ["standard", "contractor", "services", "reseller"]
pain: "顧客の登録後に、共有先のアプリへ同じ情報をもう一度コピーしている"
feature: "ZapierのNew Contactと読み取り用APIキー"
screens: "設定／連携・チャネル／APIキー／読み取りのみ／発行／API Key／New Contact"
sources: "integrations/zapier/authentication.js / integrations/zapier/triggers/contact.js / integrations/zapier/lib/http.js / src/app/(dashboard)/settings/api-keys/api-keys-view.tsx / src/app/api/v1/api-keys/route.ts / src/app/api/v1/contacts/route.ts / src/lib/crm/use-cases.ts / https://zapier.com/apps/revenue-crm/integrations / src/app/(dashboard)/settings/settings-index.tsx"
date: 2026-11-19
updated: 2026-11-20
author: "山口聖子"
---
営業が新しい顧客を登録します。そのあと、運用担当が別のアプリを開き、共有用の一覧へ名前とメールアドレスをコピーします。

顧客の情報はもうシステムにあります。それでも、次の仕事へ渡すところだけ、人が橋渡しをしています。忙しい日にコピーを忘れると、登録は済んでいるのに共有先には誰もいません。

## 「新しく登録された」を、次の仕事の入口にする

Revenue CRMのZapier連携では、「New Contact」をきっかけに、別のアプリの処理へデータを渡せます。顧客情報の入力をもう一度お願いする代わりに、登録された記録を使います。

Zapierは、アプリ同士の処理をつなぐサービスです。[公開アプリ一覧](https://zapier.com/apps/revenue-crm/integrations)で「Revenue CRM」を選べます。公開ページには現在「Beta」の表示があります。

今回扱うのは、新しいコンタクトを外へ渡す一方向の流れです。過去の名簿をまとめて移す作業や、両方のアプリの変更を常にそろえる仕組みとは分けて考えます。

## 最初は「読み取りのみ」のキーでつなぐ

外へ読むだけなら、Revenue CRMへ書き込める権限は要りません。「設定」の「連携・チャネル」から「APIキー」を開き、用途が分かるキーを作ります。発行できるのはオーナーと管理者です。

APIキーは、連携先が顧客情報を読むための認証情報です。個人の担当範囲だけに絞ったキーではなく、組織のデータを扱います。渡す項目と共有先を決めてから発行してください。

1. キー名に、何へ渡す連携か分かる名前を入れます。
2. 権限は「読み取りのみ」を選び、有効期限も確認して「発行」を押します。
3. 発行直後に表示されるキーをコピーします。完全なキーは再表示されません。
4. ZapierでRevenue CRMを接続するとき、「API Key」の欄にそのキーを入れます。
5. きっかけに「New Contact」を選び、連携先の処理で、必要な項目だけを対応付けます。

連携先のアプリにも接続と設定が必要です。キーを入れただけでは、どこかへ自動で転記されるわけではありません。キーそのものを共有用の表や作業メモへ貼らないでください。

## 即時の通知や、過去全件の移行には使わない

「New Contact」は、定期的に新しい記録を取りに来る方式です。登録の直後に必ず届くとは限りません。取り込みの間隔はZapier側の条件も確認します。

このトリガーが一度に取得するのは、新しい順で最大100件です。大量の登録が続く運用で、取りこぼしなく過去全件を移せる機能としては使わないでください。既存コンタクトの編集を知らせるトリガーでもありません。

また、「Create Contact」など、Revenue CRMに記録を作る処理を選ぶ場合は、「読み取りと書き込み」のキーが必要です。今回の外へ渡す流れとは、権限も向きも異なります。

## 最初の一歩

今週、人がコピーしている共有先を一つ選び、渡す項目を名前とメールアドレスなど必要なものに絞ってください。運用を始める前に、共有してよい確認用データで、相手のアプリに何が入るかを確かめます。

最初から全アプリをつなぐ必要はありません。登録後にもう一度コピーする場所を、一つ減らすところから始めます。

[Revenue CRMのデモ](https://crm.consilegy.com/demos?edition=demo&lang=ja)で「スタートアップ・中小企業（標準版）」を選ぶと、「設定」→「連携・チャネル」→「APIキー」の画面を確かめられます。デモは共有なので、APIキーは発行せずに、画面を見るだけにします。
