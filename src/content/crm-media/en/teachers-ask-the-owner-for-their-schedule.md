---
title: "Teachers keep asking the owner which lessons are theirs"
slug: "teachers-ask-the-owner-for-their-schedule"
lang: "en"
category: "setup"
pain: "Teachers can't see their own lessons, so they ask the owner every time. The owner retypes bookings into each teacher's calendar, and lessons collide with personal appointments"
feature: "Per-teacher Google Calendar connection (a teacher connects their own Google account and the lessons assigned to them land in their calendar automatically. Busy times in their personal calendar are left out of the LINE booking slots)"
screens: "Home: 📅 自分のGoogleカレンダーにつなぐ (Connect my Google Calendar), Googleカレンダーをつなぐ (Connect Google Calendar), カレンダー連携済み (Calendar connected), つなぎ直す (Reconnect) / More → Integrations → Teachers' calendars / Lessons → 🗓️ Sync with Google Calendar now"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/coach-calendar.ts / src/school-app/lib/google-calendar.ts / src/school-app/lib/render.ts / src/school-app/lib/html-en.ts / src/app/api/school-app/auth/google/start/route.ts / src/app/api/school-app/gcal/sync/route.ts / src/app/api/school-app/calendar/share/route.ts / src/app/api/school-app/automation/run/route.ts"
date: 2026-10-21
author: "Seiko Yamaguchi"
---
Sunday night. A teacher messages the owner: "What time am I teaching tomorrow?" The owner opens the booking list, answers, and copies the lesson into the teacher's calendar while they are at it. With four teachers, this happens every week. And about once a month, a lesson lands on top of a teacher's dentist appointment.

## What you lose is the owner's time, and teachers who can run their own week

The real loss is that the schedule lives in the owner's head. When the owner is away, nobody knows who is teaching when.

Say four teachers, each asking twice a week, five minutes per question and retype. That is 40 minutes a week, about three hours a month, spent relaying schedules. One collision a month means twelve times a year you message a student to move a lesson.

## In Revenue CRM, a teacher connects their own Google Calendar once and their lessons appear there

Once a teacher connects, the lessons assigned to them go straight into their Google Calendar. Nobody has to ask the owner, and the owner stops retyping.

On the home screen, the teacher taps Connect Google Calendar on the 📅 card and approves access with their own Google account. Revenue CRM creates one dedicated calendar for bookings and writes nothing to the teacher's other calendars. When it is done, the home screen shows Calendar connected.

If the teacher allows it during connection, their personal calendar is read for busy times only, never the event details. Those times are removed from the slots students see when booking on LINE, so a student can't book over the dentist. The owner can check who has connected under More → Integrations → Teachers' calendars.

Four things to know before you rely on it:

- Move or cancel bookings in Google Calendar, not in Revenue CRM. There is no screen in Revenue CRM to reschedule or cancel a booking yet. (The event description says to make changes in the CRM; for now, the calendar is the place.) Changes made in the calendar come back to the booking when someone taps 🗓️ Sync with Google Calendar now under Lessons, or in the automatic run around 10:00 every morning Japan time. They are not instant
- Events created directly in the calendar are not imported as bookings. New bookings still go in through LINE booking or the student record
- Tapping Reschedule under Missing log on the Lessons screen adds a booking at the same time next week. The original booking and its calendar event stay. Delete the original event in the calendar
- There is no disconnect button. To disconnect, the teacher removes access from their Google account settings. The calendar name shown on screen can also differ from the one actually created, which is named after the school

## Your first step

This week, pick one teacher and ask them to tap Connect Google Calendar on the home screen. Then sit with them and check that next week's lessons have appeared.

Tell them one thing: "If a lesson moves, move it in your calendar." If a week later that teacher has stopped asking "what time am I on?", connect the next one.

You can look around the school edition in the [demo](https://crm.consilegy.com/demos). Pick 「スクール」 (School). All you need is an email address.
