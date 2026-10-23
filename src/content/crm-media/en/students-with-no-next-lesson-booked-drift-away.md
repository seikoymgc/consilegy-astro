---
title: "The student who left without booking the next lesson, and never came back"
slug: "students-with-no-next-lesson-booked-drift-away"
lang: "en"
category: "operate"
pain: "A student leaves without booking the next lesson. The teacher assumes the office will follow up, the office assumes the teacher did, nobody gets in touch, and the student quietly stops coming"
feature: "No next booking task (when an active student has no booking from today on, the morning automation puts \"● No next booking\" under \"🚨 Act now\" on Home. You can send the \"📅 Nudge booking\" template with \"💬 Send on LINE\", but sending doesn't clear it. It clears once a lesson is booked with \"📅 Book next lesson\" on the student record or by the student through LINE)"
screens: "Home: 🚨 Act now, ● No next booking, (name) · no next booking, 💬 Send on LINE, Mark as done, Not assigned to me / Student record message panel: Templates:, 📅 Nudge booking, Send / Student record: 📅 Book next lesson, Type, Teacher, Date, Time, Book / Tasks: Nudge next booking"
segment: "b2c"
edition: "school"
sources: "src/app/api/school-app/automation/run/route.ts / src/app/api/cron/workflows/route.ts / vercel.json / src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/school-app/lib/line-templates.ts / src/app/api/school-app/line/send/route.ts / src/app/api/school-app/booking/route.ts / src/app/api/school-app/task/route.ts / src/school-app/lib/line-booking.ts / src/school-app/lib/lesson-type.ts / src/school-app/lib/supabase.ts / src/school-app/lib/google-calendar.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/html-en.ts / src/school-app/lib/demo-seed.ts / src/app/school/page.tsx / src/lib/demo.ts"
date: 2026-10-23
author: "Seiko Yamaguchi"
---
Tuesday, end of the afternoon class. A student packs up and says, "I'll let you know about next week." The teacher is already setting up for the next lesson. The front desk assumes the teacher booked something. Two weeks later the student is still "active" on the roster, with nothing in the diary. Someone finally notices when the monthly fees are checked.

## What you lose is the student who would have come back if someone had asked

Right after a gap opens, a short message is usually enough to bring a student back. The longer it runs, the more awkward it feels for everyone.

Say you have 60 active students and three a month leave without booking the next lesson. If just one of those three drifts away for good, that's 12 students a year. The cause isn't a careless teacher. It's that nobody is counting, every day, who has nothing booked.

## In the school edition of Revenue CRM, students with nothing booked show up on Home every morning

If an active student has no booking from today onwards, the morning automation run (10 a.m. Japan time; "🔄 Check now" on Home runs the same check any time) adds "● No next booking" under "🚨 Act now" on Home. The card reads "(name) · no next booking" and has two buttons.

The first is "💬 Send on LINE". It opens the message panel on that student's record. Under "Templates:", press "📅 Nudge booking" to fill in the text, read it, and press "Send". The template itself stays in Japanese. Its last line starts by saying the message was sent automatically (「※このメッセージは自動送信です。」), so trim that part if you're sending it yourself. A sent LINE message can't be recalled, and sending it doesn't clear the task. Only a booking does.

The second is for when a date is agreed. On the student record, open "📅 Book next lesson", choose Type, Teacher, Date and Time, and press Book. The task disappears straight away. It also clears if the student books through the "予約する" (Book) button in the school's LINE menu.

"Mark as done" is for the in-between case: you've spoken on the phone but haven't fixed a date. If there's still no booking, the task returns the next morning.

Who sees it depends on the student's assigned teachers. If a teacher with an account holds the "Weekly lesson" role for that student, only they see it. Otherwise all of the student's teachers do. A student with no teacher at all shows up for people in the Owner and Manager roles, but with "Not assigned to me" in place of "Mark as done". To clear it, book a lesson or assign a teacher.

Five limits worth knowing:

- Only students marked active are checked. Trial, paused and about-to-graduate students are left out
- Only bookings in this app count. A lesson agreed by phone or written in a paper diary looks like "no booking", so enter it with Book next lesson
- A booking cancelled in Google Calendar still counts as booked if its date is in the future, so no task appears
- LINE messages only reach students who are linked to the school's LINE account. What you send isn't kept on the student record; the first 120 characters go to the Audit log
- Book next lesson doesn't check the teacher's availability, and bookings can't be moved or cancelled from this screen

## The first step

This week, go down the "No next booking" cards on Home and sort them: truly unbooked, or booked only in someone's diary. Enter the diary ones with Book next lesson, then send "📅 Nudge booking" to the rest. Whatever is left on Home the next morning is the real list of students to call.

The [demo](https://crm.consilegy.com/demos) opens with just an email address. Pick "Schools" and there's a "No next booking" card on Home. The demo isn't connected to LINE, so you can't actually send, but you can open the message panel and see the template.
