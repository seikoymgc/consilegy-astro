---
title: "You notice the warning signs after the student has already quit"
slug: "signs-of-quitting-noticed-too-late"
lang: "en"
category: "operate"
pain: "The signs that a student is drifting away, homework that stops and messages that go unanswered, sit with the individual teacher, and the owner learns about them the day the cancellation arrives"
feature: "The 🚨 今すぐ対応 list on Home (students three business days without homework), 📩 課題の提出 on the student record, and the 課題が滞り filter on the student list"
screens: "Home: 🚨 今すぐ対応 (Act now), 課題未提出, 🔄 今すぐ検知, 💬 催促する, Open profile / Home: 📩 届いた課題, 未確認○件 / Student record: 📩 課題の提出 / Bottom nav Students: chips すべて, 受講中, 体験予定, 卒業間近, 課題が滞り, 休止, 卒業生, 退会 / Bottom nav Lessons: 課題あり / Student record: ⚙ ステータス変更, 退会"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/lib/homework.ts / src/school-app/lib/homework-reminder.ts / src/school-app/lib/supabase.ts / src/school-app/lib/authz.ts / src/school-app/lib/i18n-data.ts / src/school-app/components/MockShell.tsx / src/app/school/page.tsx / src/app/api/school-app/automation/run/route.ts / src/app/api/school-app/student/status/route.ts / src/app/api/school-app/line/webhook/route.ts / src/lib/demo.ts / src/school-app/lib/lang.ts / src/school-app/lib/html-en.ts"
date: 2026-10-05
updated: 2026-11-20
author: "Seiko Yamaguchi"
---
Late in the month, a message lands on the school's LINE account: "We'd like to stop at the end of this month." The owner asks the teacher, who says, "Come to think of it, there hasn't been any homework for about three weeks." Scroll back through the chat and there is a question from two weeks ago that nobody answered.

The signs were there. They were on one teacher's phone and in one teacher's head, not anywhere the owner would see them. By the time anyone looked, the decision was made.

## What you lose is not the tuition. It is the three weeks when you could have done something

Once the cancellation message arrives, there is very little left to try. What was lost is the stretch before it, when a short check-in might have been enough.

Say tuition is 10,000 yen a month and the student would have stayed another year. That is 120,000 yen. The heavier cost is that it ends without a reason. "Things got busy" tells you nothing, so the same thing happens with the next student.

The early signs are smaller than a missed lesson. A lesson happens once a week, but homework and messages move on a shorter cycle. Homework stops coming in. A question sits unanswered for days. By the time it shows up as absences, the student is often already halfway out.

So before you build a monthly churn report, make stalled students visible in the week they stall. A report records what already happened. It gives you nothing to act on.

## In Revenue CRM, a student whose homework stops for three business days appears under "Act now" on Home

Home in the school edition has a list headed 🚨 今すぐ対応 (it reads "🚨 Act now" when the display is in English, and I call it Act now from here on). When an active student has gone three business days without submitting a given type of homework, a line appears there tagged 課題未提出 (homework not submitted), with the student's name, the homework type and the number of business days since the last submission. In the English display these labels appear in English: 課題未提出 shows as "◆ Homework missing", 🔄 今すぐ検知 as "🔄 Check now", 💬 催促する as "💬 Send reminder", 📩 課題の提出 as "📩 Homework submissions", 📩 届いた課題 as "📩 Homework inbox", 課題あり on the Lessons screen as "☑ Homework", 課題が滞り as "Homework overdue", ⚙ ステータス変更 as "⚙ Change status" and 退会 as "Withdrawn". I give the Japanese labels below for schools that use the Japanese display. 課題を出す is a button in the school's LINE menu, not in Revenue CRM, and keeps the name set there.

How the days are counted. Weekends are not counted. Nothing is flagged during a period you have registered under Breaks. A student who has never submitted is counted from their start date, or from the day they were added if no start date is set, and their line says so.

The check runs once a day. Pressing 🔄 今すぐ検知 beside the heading runs the whole nightly job on the spot. Students you have switched to automatic homework reminders get one message for each homework type they have not already been reminded about, and overdue-payment reminders go out to students on LINE as well. Do not press it just to have a look.

"Open profile" on a line opens the student's record. Under 📩 課題の提出 you see, for each homework type, the business days since the last submission. Recent submissions are listed underneath, so you can see when the gaps started to widen.

There is a miss in the other direction too: homework the student did send that nobody has looked at. That shows on the same Home screen under 📩 届いた課題, with an unchecked count. Sending something in and hearing nothing back is its own reason to drift away. I covered it in [Homework arrives by chat, and nobody knows which teacher looked at it](/en/crm/media/b2c/nobody-knows-who-checked-the-homework/).

Three conditions.

- The school's account on LINE, a messaging app widely used in Japan, is connected, and the student is linked to it. A student who is not linked to LINE has no submissions recorded. Text sent without first pressing 課題を出す in the LINE menu is not recorded either. Photos, audio, video and files sent without picking a type are recorded as untyped submissions: they hold the line off for three business days, but if no teacher assigns a type under 📩 届いた課題 by then, the student shows as not submitted again
- Under "Lessons" in the bottom navigation, each lesson type that sets homework is marked 課題あり. Only those types are counted
- Someone is assigned to the student for that homework type. A 課題未提出 line appears for the people assigned to that student in the matching role, such as grammar or shadowing. If nobody at all is assigned to the student, the line appears on the Home screen of people in the Operations and Manager roles. If the student has a weekly-lesson teacher but nobody for the homework type, the line appears on no one's Home, so fill the gaps listed under "👤 Please assign teachers" on Home

One thing the current school edition does not do is pick up unanswered LINE messages for you. What you see here are the homework signs.

For the whole picture, open "Students" in the bottom navigation. Chips across the top filter the list: すべて (All), 受講中 (Active), 体験予定 (Upcoming trials) and 卒業間近 (Graduating). When there are students who match, you also get 課題が滞り (Homework overdue), 休止 (Paused), 卒業生 (Alumni) and 退会 (Withdrawn). Each chip carries a count, and in the English display every chip appears in English with its count, such as "Homework overdue 2" or "Paused 1". Press 課題が滞り and only the students who are three or more business days behind are listed. Opening 休止 once a month and checking that every student there has been asked when they plan to come back is a small habit that helps you catch the quiet exits.

When a student does leave, go to ⚙ ステータス変更 on the student's record and press 退会 (you need permission to edit students). A small prompt asks for the reason. Write even one line (pressing Cancel there stops the withdrawal). The withdrawal date and the reason stay on the same record.

## The first step

Tomorrow morning, open Act now on Home, pick the one student among the 課題未提出 lines whose homework has been stalled the longest, and contact them that day. Not a reminder. "How have things been lately?" is enough.

Do not try to reach everyone. One a day is plenty. Noticing at three business days and learning at three weeks from a cancellation message leave you with very different options.

If you would rather see the screens first, the [demo](https://crm.consilegy.com/demos?edition=demo-school&lang=en) opens with just an email address.
