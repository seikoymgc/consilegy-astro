---
title: "Every lesson gets booked through a back-and-forth on LINE"
slug: "next-lesson-booked-over-line-back-and-forth"
lang: "en"
category: "input"
pain: "Teachers and the front desk settle \"which evening next week?\" one student at a time, late at night, then copy the agreed slot into a calendar by hand, so slots get mistyped and double-booked"
feature: "LINE self-booking (a student taps 予約する (Book) in the rich menu and books in three taps: lesson type, teacher, slot. Slots come from the teacher's booking hours minus existing bookings, the teacher's calendar events and school breaks)"
screens: "Student's LINE: 予約する (Book) / 週1レッスン (weekly lesson) / モチベーション (motivation session) / slot buttons like 10/2(木) 14:00 / ご予約を承りました✨ (booking confirmed) / Bottom nav More → Calendar → 🕘 Teachers' booking hours (weekday chips, two time selects, Accept on LINE, Save) / Lessons → 📅 Upcoming, 🗓️ Sync with Google Calendar now / Student record: 🎓 Assigned LEADERS, 🔗 LINE紐付け (link LINE), 📅 Book next lesson / Lessons → 🎓 Teachers by lesson type / More → Integrations → Update rich menu / Task \"Nudge next booking\""
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/line-booking.ts / src/school-app/lib/booking-slots-core.ts / src/school-app/lib/booking-slots.ts / src/school-app/lib/line-richmenu.json / src/school-app/lib/line-richmenu.ts / src/school-app/lib/line-push.ts / src/school-app/lib/google-calendar.ts / src/school-app/lib/coach-calendar.ts / src/school-app/lib/supabase.ts / src/school-app/lib/render.ts / src/school-app/lib/mock-body.ts / src/school-app/lib/html-en.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/lesson-type.ts / src/school-app/lib/audit.ts / src/school-app/lib/demo-seed.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/coach-availability/route.ts / src/app/api/school-app/booking/route.ts / src/app/api/school-app/line/webhook/route.ts / src/app/api/school-app/line/richmenu/route.ts / src/app/api/school-app/gcal/sync/route.ts / src/app/api/school-app/calendar/route.ts / src/app/api/school-app/automation/run/route.ts / src/app/api/school-app/lesson/reschedule/route.ts / src/app/api/school-app/lesson/cancel/route.ts / supabase/migrations/218_school_beyonders_0916_sync.sql / vercel.json"
date: 2026-10-14
author: "Seiko Yamaguchi"
---
Ten at night. A message lands on the teacher's LINE: "Are you free Wednesday or Thursday evening next week?" The teacher opens a paper planner, replies "Wednesday at 6 works," and the student's "Wednesday then" arrives the next morning. The teacher copies it into a phone calendar. With twenty students, that is twenty of these a week.

## What you lose is the teacher's evenings, and a schedule you can trust

While one student waits for a reply, another asks for the same slot. The real loss is twofold: the teacher's evenings turn into a booking desk, and a hand-copied calendar stops being the truth.

Say twenty students, three messages per booking, two minutes each. That is 120 minutes a week, eight hours a month, spent neither teaching nor preparing. One copying mistake a month means twelve days a year when a student shows up and the teacher does not.

Booking should not be a job the teacher does. It should be something the student does.

## In Revenue CRM, students book in three taps from 予約する (Book) on LINE

Students book from the LINE menu themselves, so the teacher neither writes replies nor copies anything into a calendar.

The student taps 予約する (Book) in the menu at the bottom of your school's LINE official account. They answer 「どのレッスンを予約しますか？」 (which lesson?) with 週1レッスン (weekly lesson) or モチベーション (motivation session), pick a teacher if more than one is assigned to them, then choose one of the slots offered under 「ご希望の日時を選んでください。」 (choose a date and time). Up to twelve slots are shown, in the form 10/2(木) 14:00. The reply 「ご予約を承りました✨」 confirms the slot, lesson type and teacher. The student-facing messages are in Japanese only.

Only open slots are offered. They come from Teachers' booking hours, under More → Calendar in the bottom navigation. A manager or admin sets each teacher's weekdays and hours, ticks Accept on LINE, and presses Save. With nothing set, the default is weekdays from 10:00 to 20:00. From those hours the app removes existing bookings, events in the teacher's Google Calendar when it is connected, and school breaks, then offers hourly slots from 24 hours ahead up to 14 days out.

A new booking appears in the month view under Calendar and under 📅 Upcoming on the Lessons screen. For a teacher who has connected Google Calendar, it also lands in that teacher's calendar. The "Nudge next booking" task on the home screen clears once the booking is in.

Five things to know.

- There is no way to cancel or move a booking from inside the CRM. The confirmation tells the student to contact the school for changes. If the teacher has connected Google Calendar, deleting or moving the event there reaches the booking through 🗓️ Sync with Google Calendar now on the Lessons screen, or the daily batch around 10:00 Japan time, and the slot opens again. Without that connection, the booking stays
- Students can only choose 週1レッスン or モチベーション. The two names are fixed and cannot be renamed to your own lesson types
- Assign a teacher who has an account to those two roles under 🎓 Assigned LEADERS on the student record. A name-only assignee cannot be booked. A student without one falls back to 🎓 Teachers by lesson type on the Lessons screen, but only when the lesson type there is named exactly 週1レッスン or モチベーション. With neither, the student gets a message saying no teacher is assigned for that lesson yet and to contact the school
- Anyone who has added your LINE account can tap 予約する. If the person is not on your roster, or is a student whose record has not been linked with 🔗 LINE紐付け (link LINE), a separate student row is created under their LINE display name and the booking goes there
- There is no day-before reminder and no "new booking" notification to the teacher. Teachers check 📅 Upcoming or their own calendar. A booking a teacher enters with 📅 Book next lesson on the student record does not check availability, so it can overlap a student's booking

## Your first step

This week, start with one teacher, in this order. Pick the two or three of that teacher's students who message the most, link each one's LINE with 🔗 LINE紐付け on the student record, and check that the teacher is assigned under 🎓 Assigned LEADERS for 週1レッスン or モチベーション. Then set that teacher's Teachers' booking hours: weekdays and hours, tick Accept on LINE, press Save. Finally, tell those students to book through 予約する from now on.

Next week, count how many booking messages you exchanged with those students. If the number dropped, add the next teacher.

The LINE official account is connected under More → Integrations; follow the on-screen note to turn the webhook on in both places, then Update rich menu pushes the menu to students' phones. The demo takes only an email address: pick "Schools" and you can see Teachers' booking hours and the Calendar month view in the same place. The demo is not connected to LINE, so the student side of 予約する cannot be tried there. [Try the demo](https://crm.consilegy.com/demos)
