---
title: "Teachers write each student's monthly report from scratch, late at night"
slug: "monthly-reports-written-late-at-night"
lang: "en"
category: "operate"
pain: "At the end of each month, teachers scroll back through every student's lesson notes and write progress reports from scratch at night. The busier the month, the thinner the reports, and things that were in the notes never make it in"
feature: "Progress Reports (AI) (from a student's profile, drafts a report under five headings from the last 30 days of lesson notes; the teacher rereads it, edits it in the profile's LINE message box and sends it)"
screens: "Bottom nav Students → student profile: + Log lesson, 📄 Progress report, 💬 Send on LINE, 🔗 LINE紐付け / Progress Reports (AI): ✦ AI draft, ↻ Regenerate, 📋 Copy, 💬 Send on LINE / Profile message box: Send / PC sidebar Progress reports, More → Menu → Progress Reports (AI)"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/lib/mock-body.ts / src/school-app/components/MockShell.tsx / src/school-app/lib/report.ts / src/school-app/lib/html-en.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/authz.ts / src/school-app/lib/demo-seed.ts / src/app/api/school-app/ai-report/route.ts / src/app/api/school-app/lesson/route.ts / src/app/api/school-app/line/send/route.ts / src/lib/ai-fuel.ts / src/app/api/school-app/lesson/reschedule/route.ts / src/app/api/school-app/lesson/cancel/route.ts / src/school-app/lib/zoom-carte.ts / src/lib/ai-quota.ts"
date: 2026-10-19
author: "Seiko Yamaguchi"
---
Sunday night at the end of the month, ten o'clock. A teacher is writing progress reports for the fifteen students she looks after. For each one she scrolls back through a month of lesson notes, tries to remember what they covered and what they can now do, and types it out. Somewhere around student twelve, every report starts to read "Great effort again this month."

## You lose the evening, and the details that were already in your notes

Writing a report from scratch is two jobs at once: reading the record and turning it into prose. Both cost you.

Say it takes fifteen minutes per student. Fifteen students is then about four hours a month, and most of it lands after classes, at night.

The real problem is that late-night reports get thin. The notes say "asked questions in the past tense without help," and the report never mentions it. That is exactly what the student wants to hear.

In my view, the teacher's job is not to write the report from a blank page. It is to reread a draft and add the line only she can write.

## In Revenue CRM for schools, 📄 Progress report on a student's profile drafts the report from the last 30 days of notes

Press 📄 Progress report on a student's profile and you get a draft under five headings, written on the spot from that student's last 30 days of lesson notes.

This part of the product sends messages on LINE, the messaging app most schools in Japan already use with their students. Most of the labels below show in English; the few that stay in Japanese are given with a gloss.

Go to Students in the bottom nav, open the student's profile and press 📄 Progress report. The screen switches to Progress Reports (AI) and the draft is written. Above it, in Japanese, you see the student's name and how many notes went in: 直近30日の記録 3件 (3 notes from the last 30 days).

The draft always uses the same five headings, written in Japanese: what we did this month, what you can now do, what is still hard, next month's goal, and a word from your teacher.

The only material is the lesson notes on the profile. That means what you saved with + Log lesson (topics, how it went, homework, free comments), plus records added automatically from Zoom and the rows left by rescheduling or cancelling a lesson. The draft is told not to add anything that is not in the notes, and a heading with nothing to go on gets 記録がありません ("no record").

After reading the draft, pick one of two paths:

- 💬 Send on LINE takes you back to the profile and drops the draft into the LINE message box. Rewrite it in your own words there and press Send. Before it goes, a confirmation in Japanese shows the recipient and the full text and warns that it cannot be undone
- 📋 Copy puts the plain text on your clipboard to paste anywhere else

If the draft misses the mark, ↻ Regenerate writes a new one.

Five limits to plan around:

- It works one student at a time. There is no way to draft everyone at once, no monthly schedule, and no list showing whose report is done. Drafts are not saved
- You cannot edit on the draft screen. Edit in the profile's message box or wherever you paste the copy
- Send on LINE only works if the student is linked to your school's LINE Official Account. If not, link them with 🔗 LINE紐付け (link LINE) first; until then, use Copy
- The draft is addressed to the student, in Japanese, and goes to the student's own LINE. There is no parent version and no parent recipient
- The window is the 30 days before you press the button, not the calendar month. Each draft uses Fuel (during a trial, a daily limit instead), and if you run short you get the raw notes instead of a written draft

Opening Progress Reports (AI) from the More menu or the PC sidebar gives you no way to choose a student; it keeps whoever's profile you opened last, or nobody. Always start from the profile.

## The first step

This month, try it with just three of your students. First check that each of them has + Log lesson notes from the last 30 days; a month with no notes gives you a draft full of "no record."

Read each draft against the notes, and always rewrite the word-from-your-teacher section yourself before sending. Time how long each student takes, then decide how many to cover next month.

In the [demo](https://crm.consilegy.com/demos), which only needs an email address, press 📄 Progress report on any student's profile and a draft is written from the demo notes. The demo school is not connected to a LINE Official Account, so you can get as far as the draft in the message box and the confirmation. Pressing Send then shows LINE未連携（連携設定から） (LINE not connected) and nothing reaches the student.
