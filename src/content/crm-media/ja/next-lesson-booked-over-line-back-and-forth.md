---
title: "次のレッスンの予約を、LINEの往復で決めている"
slug: "next-lesson-booked-over-line-back-and-forth"
lang: "ja"
category: "input"
pain: "「来週いつ空いていますか」のやり取りを先生や事務局が夜に一人ずつさばき、決まった日時を手でカレンダーに写していて、写し間違いと二重予約が起きる"
feature: "LINE予約（生徒がリッチメニューの「予約する」から、種別→講師→日時の3タップで自分で予約を入れる。枠は「講師の受付時間」から、既存の予約・講師のカレンダーの予定・休講期間を除いて出る）"
screens: "生徒のLINE「予約する」「どのレッスンを予約しますか？」「週1レッスン」「モチベーション」「ご希望の日時を選んでください。」「ご予約を承りました✨」／下のナビ「もっと」→「カレンダー」の「🕘 講師の受付時間」（曜日・時刻・「LINEで受け付ける」・「保存」）／「レッスン」の「📅 これからの予定」「🗓️ Googleカレンダーと今すぐ同期」／カルテ「🎓 担当LEADERS」「📅 次回予約を登録」／「レッスン」の「🎓 種別ごとの担当」／「もっと」→「連携設定」の「リッチメニューを更新」／タスク「次回予約を促す」"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/line-booking.ts / src/school-app/lib/booking-slots-core.ts / src/school-app/lib/booking-slots.ts / src/school-app/lib/line-richmenu.json / src/school-app/lib/line-richmenu.ts / src/school-app/lib/line-push.ts / src/school-app/lib/google-calendar.ts / src/school-app/lib/coach-calendar.ts / src/school-app/lib/supabase.ts / src/school-app/lib/render.ts / src/school-app/lib/mock-body.ts / src/school-app/lib/html-en.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/lesson-type.ts / src/school-app/lib/audit.ts / src/school-app/lib/demo-seed.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/coach-availability/route.ts / src/app/api/school-app/booking/route.ts / src/app/api/school-app/line/webhook/route.ts / src/app/api/school-app/line/richmenu/route.ts / src/app/api/school-app/gcal/sync/route.ts / src/app/api/school-app/calendar/route.ts / src/app/api/school-app/automation/run/route.ts / src/app/api/school-app/lesson/reschedule/route.ts / src/app/api/school-app/lesson/cancel/route.ts / supabase/migrations/218_school_beyonders_0916_sync.sql / vercel.json"
date: 2026-10-14
author: "山口聖子"
---
夜10時。先生のLINEに「来週、水曜か木曜の夕方は空いていますか」と届きます。手帳を開いて「水曜18時なら」と返し、「では水曜で」が来るのは翌朝。それをスマホのカレンダーに写します。生徒が20人いれば、毎週20回です。

## 失っているのは、先生の夜と、写し間違いの無い予定表

一番の損失は、先生の夜が予約係で埋まることと、手で写した予定表が本物でなくなることです。

仮に生徒20人、1人の予約に往復3通、1通に2分なら、週に120分、月に8時間が、レッスンでも準備でもない時間に消えます。写し間違いが月に1回なら、生徒が来たのに先生がいない日が年に12回です。

## Revenue CRMでは、生徒がLINEの「予約する」から3タップで入れられる

生徒がLINEのメニューから自分で予約を入れるので、先生が返事を書くことも、カレンダーに写すことも無くなります。

生徒は、教室のLINE公式アカウントのメニューの「予約する」を押します。「どのレッスンを予約しますか？」に「週1レッスン」か「モチベーション」で答え、担当の講師が2人以上いれば講師を選び、「ご希望の日時を選んでください。」に並ぶ候補（最大12個、「10/2(木) 14:00」の形）から1つ押します。「ご予約を承りました✨」と日時・種別・講師名が返ります。

候補のもとは、下のナビ「もっと」→「カレンダー」の「🕘 講師の受付時間」です。マネージャーか管理部の人が、講師ごとに曜日と時刻を決め、「LINEで受け付ける」を付けて「保存」します。何も決めなければ平日10時から20時です。そこから、入っている予約、講師のGoogleカレンダーの予定（連携時）、休講期間を除いた、24時間より先、14日以内の枠が60分刻みで出ます。

入った予約は、「カレンダー」の月表示と「レッスン」の「📅 これからの予定」に並び、Googleカレンダーをつないだ講師のカレンダーにも入ります。ホームの「次回予約を促す」のタスクは、予約が入ると消えます。

注意が5つあります。

- 予約をCRMの画面から取り消す・動かす操作はありません。生徒への返信にも「変更やキャンセルは事務局までご連絡ください」と出ます。Googleカレンダーをつないだ講師なら、カレンダー側で予定を消す・動かすと、「レッスン」の「🗓️ Googleカレンダーと今すぐ同期」か毎日10時ごろの自動処理で予約に反映され、枠が空きます。つないでいなければ予約は残ります
- 生徒が選べる種別は「週1レッスン」と「モチベーション」の2つだけです。教室の種別名には合わせられません
- 生徒のカルテの「🎓 担当LEADERS」で、その2つの役割にアカウントのある講師を付けておきます。名前だけの担当では予約できません。付いていない生徒には「レッスン」の「🎓 種別ごとの担当」の講師が出ますが、種別名が「週1レッスン」「モチベーション」と一致するときだけです。どちらも無いと「担当講師がまだ決まっていないため、LINEからは予約できません。事務局までご連絡ください。」と種別名つきで返ります
- 友だち追加した人は誰でも「予約する」を押せます。名簿に無い人や、カルテの「🔗 LINE紐付け」が済んでいない生徒が押すと、LINEの表示名で別の生徒の行が作られ、予約はそちらに付きます
- 前日のリマインドも、先生への通知もありません。先生は「これからの予定」か自分のカレンダーで見ます。カルテの「📅 次回予約を登録」で先生が入れる予約は空きを見ないので、生徒の予約と重なることがあります

## 最初の一歩

今週、講師1人分だけ、この順で始めてください。その講師の生徒のうち、予約のやり取りが一番多い2〜3人を選び、カルテの「🔗 LINE紐付け」を済ませ、「🎓 担当LEADERS」の「週1レッスン」か「モチベーション」にその講師が付いているかを確かめます。次に「🕘 講師の受付時間」で曜日と時刻を入れ、「LINEで受け付ける」を付けて「保存」。最後に、その2〜3人へ「次からLINEの『予約する』で入れてください」と伝えます。

翌週、その生徒との予約のやり取りが何通減ったかを数え、減っていれば講師を1人ずつ増やします。

LINE公式アカウントは「もっと」→「連携設定」でつなぎ、画面の案内どおりWebhookを2か所でONにしてから、「リッチメニューを更新」でメニューを生徒側に反映します。メールアドレスだけで入れる[デモ](https://crm.consilegy.com/demos)で「スクール」を選ぶと、「講師の受付時間」と「カレンダー」の月表示を確かめられます。デモはLINE未連携なので、生徒側の「予約する」は体験できません。
