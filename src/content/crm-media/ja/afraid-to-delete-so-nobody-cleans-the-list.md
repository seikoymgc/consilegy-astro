---
title: "消すのが怖くて、顧客リストの整理に誰も手をつけない"
slug: "afraid-to-delete-so-nobody-cleans-the-list"
lang: "ja"
category: "operate"
pain: "二重登録や退職した担当者が顧客リストに残っているのに、消したら戻せないと思われていて、誰も整理に手をつけない"
feature: "ゴミ箱（コンタクト・会社・商談の削除はゴミ箱への移動で、「復元」で戻せる。「完全に削除」を押すまで残る）"
screens: "コンタクト・会社・商談の詳細のゴミ箱アイコン「ゴミ箱へ移動」／一覧のチェックボックスと「削除」／商談の「リスト」表示／サイドバー「設定」→「運用」の「ゴミ箱」／タブ「コンタクト」「会社」「商談」／「復元」「完全に削除」／「設定」→「権限」（「権限管理」の「削除」列）／「設定」→「運用」の「監査ログ」"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/trash/trash-view.tsx / src/app/api/trash/route.ts / src/app/api/trash/restore/route.ts / src/app/api/trash/purge/route.ts / src/components/record-delete-button.tsx / src/components/contacts-table.tsx / src/components/deal-list.tsx / src/components/deal-kanban.tsx / src/app/(dashboard)/companies/companies-view.tsx / src/app/(dashboard)/settings/page.tsx / src/app/(dashboard)/settings/permissions/permissions-view.tsx / src/app/(dashboard)/settings/audit-log/audit-log-view.tsx / src/lib/crm/use-cases.ts / src/lib/permissions.ts / src/app/api/orgs/route.ts / src/lib/contact-intake.ts / src/app/api/contacts/import/route.ts / src/lib/db-errors.ts / src/lib/campaign-send.ts / src/app/api/cron/sequences/route.ts / src/app/(dashboard)/forecast/page.tsx / src/app/(dashboard)/lists/[id]/list-detail.tsx / src/components/app-sidebar.tsx / src/lib/i18n/translations.ts / supabase/migrations/001_initial_schema.sql / supabase/migrations/006_organizations.sql / supabase/migrations/026_soft_delete_relations_rich_fields.sql / supabase/migrations/081_audit_trigger_org_purge.sql / supabase/migrations/097_record_scopes_teams_export.sql / vercel.json / src/lib/workflow-engine.ts / src/lib/forecast-snapshot.ts / src/app/api/forms/[id]/submit/route.ts"
date: 2026-10-12
updated: 2026-10-12
author: "山口聖子"
---
展示会の翌週。顧客リストに、同じ人が2件入っています。3年前に退職した担当者の名前も残っています。営業が聞きます。「これ、消していいですか」。誰も答えません。前の仕組みで、消した顧客が戻せなかったことがあるからです。

## 失っているのは、リストを信じて動けること

消せないリストは、増える一方です。一番の損失は、リストの件数も宛先も、誰も信じなくなることです。

仮にコンタクトが2,000件あり、1割が二重登録か、もう連絡のつかない人だとします。200件です。一斉メールは同じ人に2通届き、件数を見て立てた計画は1割ずれます。

私は、「消してよいか」を会議で決めるのをやめることを勧めます。決めるのは、戻せると全員が知っている状態を先に作ることです。

## Revenue CRM では、削除はゴミ箱への移動で、「復元」で戻せる

Revenue CRM でコンタクト、会社、商談を削除すると、ゴミ箱に移ります。データは消えません。

消し方は2つです。詳細の画面では、名前が出ているカードの右端にあるゴミ箱のアイコン（「ゴミ箱へ移動」）を押します。一覧では、行にチェックを入れて「削除」を押します。一覧の確認の文には「ゴミ箱」と出ませんが、行き先は同じです。商談は、カンバンからは消せません。「リスト」の表示に切り替えるか、詳細から消します。

戻す場所は、サイドバーの「設定」です。「運用」の中の「ゴミ箱」を開くと、「コンタクト」「会社」「商談」のタブに、削除した日時の新しい順で並びます。チェックを入れて「復元」を押すと、元の一覧に戻ります。紐づいていた商談やアクティビティは、ゴミ箱に入れても動かしていないので、そのまま付いています。

ゴミ箱の中身は、「完全に削除」を押すまで残ります。設定の画面には「一定期間」と出ますが、日数がたって自動で消える動きは、確認した範囲にありません。各タブに出るのは新しい200件までです。

誰が消せるかも決まっています。はじめの設定では、ゴミ箱に入れられるのはオーナーと管理者だけです。マネージャーとメンバーは、ゴミ箱から「復元」はできます。変えるときは、「設定」の「権限」を開き、役割ごとの表の「削除」にチェックを入れます。

注意が4つあります。

- ゴミ箱に入れた人には、一斉メールもシーケンスも届きません。ただし、リストからは外れません。リストの画面にはそのまま並ぶので、リストの人数と実際に送られる数が合わないことがあります。シーケンスは止まったまま残り、「復元」すると続きから再開します。それで困る相手は、復元の前に確かめてください。ゴミ箱に入れた商談は、フォーキャストに出ません
- ゴミ箱にいる人と同じメールアドレスは、手入力、名刺の読み取り、CSV では新しく登録できません。手入力と名刺の読み取りでは「このメールアドレスのコンタクトは既に登録されています。」と出ます。CSV ではその行が飛ばされ、取り込んだ件数には数えられます。一覧にいないのに登録できないときは、ゴミ箱を見てください。フォームだけは別で、ゴミ箱にいる人が同じメールアドレスで送信すると、その人が自動で一覧に戻ります
- 二重登録を1件にまとめる機能はありません。残すほうに必要な情報を写してから、もう一方をゴミ箱に入れます
- 「設定」の「運用」にある「監査ログ」には、ゴミ箱に入れた操作が「削除」として残ります。ただし、実行した人の欄は「システム」と出ます。誰が入れたかは、あとから分かりません。整理する担当を一人に決めてください

「完全に削除」は取り消せません。コンタクトを完全に消すと、その人のアクティビティとタスクも一緒に消えます。商談は残り、コンタクトとの紐づけだけが外れます。急ぐ理由が無ければ、押さなくてかまいません。

## 最初の一歩

今週、管理者が、もう使わないコンタクトを1件だけ選び、ゴミ箱に入れてください。次に「設定」の「ゴミ箱」を開き、「復元」で戻します。戻ったところを、営業の全員に一度見せます。

そのうえで、二重登録だと分かっている5組だけを整理します。1週間たって誰も困らなければ、次の5組です。

メールアドレスだけで試せるデモで「B2B」（法人営業向け）を選ぶと、コンタクトを1件ゴミ箱に入れて戻すところまで、同じ画面で確かめられます。[デモを試す](https://crm.consilegy.com/demos)
