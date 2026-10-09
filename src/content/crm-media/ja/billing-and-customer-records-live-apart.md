---
title: "請求と顧客情報が別の場所にあって、入金されたかを営業が知らない"
slug: "billing-and-customer-records-live-apart"
lang: "ja"
category: "operate"
pain: "請求は請求の管理画面、顧客はCRMと分かれているので、入金されたか、支払いに失敗したかを、営業は経理に聞かないと分からない"
feature: "Stripe 連携（コンタクトから請求書と決済リンクを出し、入金・支払い失敗・解約が記録とタスクで返る）"
screens: "サイドバー「設定」→「連携」→「データを同期する」の「Stripe」／「Webhook設定」「シークレットキー」「Webhook署名シークレット」「適格請求書発行事業者の登録番号」「接続・保存」／コンタクトの画面「決済リンク」「請求書送信」／サイドバー「アクティビティ」の「内容」「コンタクト」／サイドバー「タスク」"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/settings/stripe/stripe-view.tsx / src/app/(dashboard)/settings/integrations/page.tsx / src/app/(dashboard)/settings/page.tsx / src/app/(dashboard)/contacts/[id]/contact-detail-actions.tsx / src/app/(dashboard)/contacts/[id]/page.tsx / src/app/api/integrations/stripe/route.ts / src/app/api/integrations/stripe/invoice/route.ts / src/app/api/integrations/stripe/payment-link/route.ts / src/app/api/webhooks/stripe/[orgId]/route.ts / src/lib/revops/util.ts / src/components/activity-timeline.tsx / src/app/(dashboard)/activities/page.tsx / src/app/(dashboard)/tasks/tasks-view.tsx / src/lib/i18n/translations.ts / src/lib/demo.ts / src/app/demos/demos-client.tsx"
date: 2026-10-09
author: "山口聖子"
---
月初の午後。営業担当が、既存のお客様に追加提案の電話をかけます。話の途中で、先方が言います。「その前に、先月分のカードが通らなかったという通知が来ていたのですが、そのままで大丈夫ですか」。担当は答えられません。支払いの結果は請求の管理画面にしかなく、営業はそこに入れません。

## 失っているのは確認の往復より、お金の話を誰も持っていない時間

請求と顧客が別々の場所にあると、支払いの失敗に最初に気づく人が決まりません。これが一番の損失です。

仮に月30件の請求のうち3件で「入りましたか」が往復し、1件に20分かかるなら、月に1時間です。

重いのは、失敗したカード決済が、誰の「今日やること」にも載らないことです。気づくのは翌月の締めです。

請求のしくみを CRM に作り直すことは勧めません。請求は Stripe のままで構いません。足りないのは、「入った」と「失敗した」が、顧客の記録の側に届くことです。

## Revenue CRM では、入金と支払い失敗が、同じコンタクトに記録とタスクで返ってくる

Stripe をつなぐと、入金はそのコンタクトのメモとして、支払いの失敗はタスクとして残ります。請求も、コンタクトの画面から出せます。

つなぐ場所は、サイドバーの「設定」から「連携」を開き、「データを同期する」にある「Stripe」です。先に、画面の「Webhook設定」に出ている URL を Stripe に登録します。そのうえで「シークレットキー」と「Webhook署名シークレット」を一緒に入れ、「接続・保存」を押してください。保存し直すときも、毎回この2つを入れます。保存できるのは、権限が owner か admin の人です。「適格請求書発行事業者の登録番号」を入れると、請求書のフッターに載ります。

コンタクトを開くと、ライフサイクルの表示と同じ行に、次の2つがあります。

- 「請求書送信」。金額を入れると、Stripe の請求書がそのコンタクトのメールアドレスへ送られます。支払期日は14日後です。使えるのは owner か admin の人です
- 「決済リンク」。金額を入れると、1回払いの支払いページが新しいタブで開きます。その URL をお客様に送ります

結果はこう返ります。

- 請求書が支払われると「Stripe入金: JPY 50,000」、決済リンクで支払われると「Stripe決済完了: JPY 10,000」のようなメモが残ります。誰からいくら入ったかは、サイドバーの「アクティビティ」の一覧で、「内容」と「コンタクト」の列から読めます。コンタクトの画面の「アクティビティ」タブには、金額の文字は出ません
- 支払いが失敗すると「[支払い失敗] 請求のフォロー」というタスクが、優先度「高」で、そのコンタクトにひもづいて立ちます。サブスクリプションの解約では「[解約] Stripeサブスク解約のフォロー」です。担当者と期日は入らないので、誰が見るかは決めておいてください

できないこともあります。請求書を「出した」こと自体は、記録に残りません。期日を過ぎただけの請求にも、タスクは立ちません。立つのは、カードの引き落としなど、支払いの試行が失敗したときです。

画面の「推奨イベント」にあるのは customer.subscription.* と invoice.payment_failed です。入金のメモも残すなら、Stripe 側で invoice.paid と checkout.session.completed も選んでください。

結びつけは、メールアドレスで行います。Stripe 側のお客様のメールアドレスがコンタクトと一致しなければ、メモもタスクも残りません。「請求書送信」は、結びついていないコンタクトには Stripe の顧客を新しく作るので、先にアドレスをそろえてください。

## 最初の一歩

今週、カード払いや月額で請求している会社を1社だけ選んでください。請求先の方のメールアドレスが、コンタクトと Stripe で同じかを確かめ、違っていたらそろえます。

全社をそろえる必要はありません。1社そろえば、営業が「先月の件ですが」と先に言える相手が、1社できます。

メールアドレスだけで試せるデモで「B2B」（法人営業向け）を選び、コンタクトを開くと、2つのボタンの位置を確かめられます。実際に送るには、自社の Stripe の接続が必要です。[デモを試す](https://crm.consilegy.com/demos)
