---
title: "Teachers are typing homework reminders one student at a time, at night"
slug: "homework-reminders-typed-one-by-one"
lang: "en"
category: "operate"
pain: "Teachers chase missing homework by memory, one LINE message at a time, so busy weeks get skipped and students who already submitted get nagged"
feature: "Automatic homework reminders (one LINE message per homework type once a student has gone three business days without submitting; you choose who gets them, student by student)"
screens: "Bottom nav レッスン (Lessons) → レッスン履歴 (Lesson History): 🎓 種別ごとの担当, 課題あり, 🔔 課題未提出の自動リマインド / Student record: 📩 課題の提出, 課題の自動リマインド, この生徒に送る, この生徒には送らない, 🔗 LINE紐付け / Home: 🚨 今すぐ対応 (Act now), 🔄 今すぐ検知 / Menu > 監査ログ (Audit log): 課題の催促を自動送信"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/lib/homework.ts / src/school-app/lib/homework-reminder.ts / src/school-app/lib/line-push.ts / src/school-app/lib/authz.ts / src/school-app/lib/supabase.ts / src/app/school/page.tsx / src/school-app/components/MockShell.tsx / src/app/api/school-app/student/reminder/route.ts / src/app/api/school-app/lesson-types/route.ts / src/app/api/school-app/automation/run/route.ts / src/app/api/school-app/line/webhook/route.ts / src/app/api/cron/workflows/route.ts / vercel.json / src/school-app/lib/i18n-data.ts / src/school-app/lib/demo-seed.ts / supabase/migrations/194_school_beyonders_copy.sql"
date: 2026-10-09
author: "Seiko Yamaguchi"
---
Thursday, ten at night. A teacher opens the messaging app on her phone and tries to remember who has not turned in this week's homework. She types to them one by one: "How is this week's assignment going?" Who she has already messaged, and who has already submitted, is a list she keeps in her head.

The next morning a reply comes in. "I sent it last night." The reminder went to a student who had already done the work.

## The cost is not the typing. It is that reminders depend on how the teacher's week went

A reminder typed by hand goes to whoever the teacher remembers, whenever the teacher has room. That is the real loss.

The time is easy to count. Say you have twenty students, five need a nudge each week, and checking and typing takes three minutes each. Fifteen minutes a week, about an hour a month. Not much.

What matters is the busy week when nothing gets sent. A couple of skipped weeks and homework tends to stall. And the students who are awkward to chase get put off the longest.

My recommendation is to stop having a person send the first reminder. The human job is asking the student who still has not submitted what is going on. Let the system send the first message, and do not hide from the student that it was the system. The teacher's relationship with the student holds up better that way.

## In Revenue CRM for schools, a student who goes three business days without submitting gets one message per homework type

This part of the product runs on LINE, the messaging app most schools in Japan already use with their students. Set an active student to receive reminders, and when a homework type has gone three business days without a submission, one reminder goes to that student's LINE. Weekends are not counted.

A note on labels: Lessons, Lesson History and Act now switch to English. The rest stay in Japanese, so I give them as they appear with my gloss in parentheses. There are two places to set up.

The first is Lessons in the bottom nav. Under 🎓 種別ごとの担当 you see your lesson types. Tap 課題あり (has homework) on the types that actually come with homework. Only the checked types are counted. A person needs edit permission on lessons to change this. On the same screen, next to 🔔 課題未提出の自動リマインド, you can see how many of your active students are currently set to receive reminders.

The second is the student's record. Inside 📩 課題の提出 (homework submissions) there is a block called 課題の自動リマインド with two buttons: この生徒に送る (send to this student) and この生徒には送らない (do not send). A newly added student starts on "do not send", so nothing goes to anyone until you choose. The buttons appear for people who can edit students, and switching also needs edit permission on lessons.

How it behaves:

- The check runs once a day with the automatic detection. Pressing 🔄 今すぐ検知 on Home runs the same check, and students who meet the condition get a message then too
- After one reminder, no second one is sent for that type until a submission of that type is recorded. Once the student submits, the slate is cleared, and another three business days of silence means one more message
- The wording does not scold, and it says in plain terms that the message was sent automatically based on submission status. If a student thinks a teacher wrote it, they reply and nobody reads the reply
- Each send is written to 監査ログ (audit log) in the menu as 課題の催促を自動送信, so recent sends can be checked there

Three cautions.

Your school's LINE Official Account has to be connected, and the student has to be linked to it. A student who is not linked cannot be reached. They still show up under 🚨 Act now on Home, but only for staff assigned to that student. A student with nobody assigned shows up on no one's Home, so assign someone on the record first, then link the student from 🔗 LINE紐付け.

Submissions are counted per type. If a student just sends a photo without going through the 課題を出す (submit homework) menu in LINE, it is recorded as 種別なし (no type) and does not count toward any type. That student can submit and still get a reminder. Tell students on day one to pick the type from the menu before sending.

During a period you registered as school holidays, the homework rows stop appearing under Act now. The reminders to students do not stop. Before a long break, switch students to "do not send".

## The first step

This week, pick just three students whose homework tends to lapse and switch them to "send" on their records. Do not switch everyone at once. A student who is already three or more business days behind gets a message at the next check, one for each homework type.

Watch for a week how they respond to the reminder. Did they submit, did they reply, did nothing happen? For the ones where nothing happened, the teacher asks in her own words. Keep anyone with something going on, such as a student talking about taking a break, on "do not send".

If you would rather see the screen first, the [demo](https://crm.consilegy.com/demos) opens with just an email address. Open a student's record and find 課題の自動リマインド. The demo students start on "send".
