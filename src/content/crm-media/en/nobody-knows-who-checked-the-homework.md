---
title: "Homework arrives by chat, and nobody knows which teacher looked at it"
slug: "nobody-knows-who-checked-the-homework"
lang: "en"
category: "operate"
pain: "Students submit homework over LINE and the message shows as read, but nothing records which teacher actually opened it, so everyone assumes someone else did and some submissions never get a reply"
feature: "Homework inbox (submissions that arrive over LINE sit in an unchecked list until someone marks them checked; who did it is kept in the audit log)"
screens: "Home: 📩 届いた課題 (homework received), 未確認○件 (unchecked count), カルテを開く (Open profile), 確認済みにする (mark as checked), 💬 LINE公式アカウントマネージャー / Bottom nav Tasks → Reminders & Tasks / Student record: 📩 課題の提出, ✓ 確認済み, 💬 LINEで送る / More → 監査ログ (audit log): 課題を確認 / 権限管理 (permissions): Lessons, Edit"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/school-app/lib/homework.ts / src/school-app/lib/supabase.ts / src/school-app/lib/authz.ts / src/school-app/lib/notify.ts / src/school-app/lib/audit.ts / src/school-app/lib/mock-body.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/demo-seed.ts / src/app/school/page.tsx / src/app/api/school-app/submission/review/route.ts / src/app/api/school-app/line/webhook/route.ts / src/app/api/school-app/student/detail/route.ts / src/app/api/school-app/automation/run/route.ts / src/lib/demo.ts / supabase/migrations/131_beyonders_homework_submissions.sql / supabase/migrations/194_school_beyonders_copy.sql"
date: 2026-10-12
updated: 2026-10-13
author: "Seiko Yamaguchi"
---
Wednesday night. A student sends a piece of writing and a voice recording to the school's account on LINE, the messaging app most schools in Japan already use with their students. Three teachers share that account. The message is marked as read, and each of the three takes that to mean one of the others has dealt with it.

At the next lesson the student asks, "What did you think of last week's writing?" Nobody had opened it.

## What you lose is the student's belief that submitting gets you a response

A read receipt tells you that somebody opened the chat. It does not tell you who, or whether they looked at the work. The real cost is a submission that only the student remembers.

Say you have twenty students and each submits twice a week. That is forty submissions a week. With three teachers working from one shared inbox, which of the forty has been seen, and by whom, lives in people's memories.

My recommendation is to stop telling each other "I've seen it" out loud or with a thumbs-up in the staff chat. The person who looks presses one button, right then. Whatever has not been pressed stays on the screen. That is the whole rule.

## In the school edition of Revenue CRM, only unchecked submissions stay on the home screen

Homework a student submits over LINE is listed on the home screen under 📩 届いた課題 (homework received), and it stays there until someone presses 確認済みにする (mark as checked). If you switch the display to English, Home, Tasks, More, Lessons, Edit and Open profile change. The labels for this feature stay in Japanese, so I give them as they appear on screen.

Here is how a submission gets recorded. The student taps 課題を出す (submit homework) in the LINE menu, picks the homework type and sends. That is saved as a submission of that type. A text message counts only when it is sent this way, one message per tap. Photos, videos, audio and files are saved as submissions even without the menu, and in that case they are labelled 種別なし (no type). All of this assumes the school's LINE official account is connected and the student is linked to it.

Next to the heading you see the unchecked count, 未確認○件. Each card shows the student's name, the homework type, the format and when it arrived. For text, the card shows the first 300 characters. For anything longer, read the full piece in LINE Official Account Manager. Photos and audio are not stored in Revenue CRM. As the card says, you open LINE Official Account Manager's chat, pick the student and look there. When LINE is connected, photo and audio cards have a 💬 LINE公式アカウントマネージャー button. It opens LINE Official Account Manager, and you still pick the student there.

Once you have looked, press 確認済みにする. There is no confirmation step and the card disappears. The same list also appears under Tasks in the bottom navigation. On the student's record, under 📩 課題の提出, the row changes to ✓ 確認済み. Who pressed it and when is kept under More → 監査ログ (audit log), as 課題を確認, where you can check recent entries.

Five things to know before you rely on it.

- The list on Home and Tasks only shows students you are assigned to. A submission from a student with nobody assigned does not reach any teacher. It shows only on a manager's Home and Tasks until someone is assigned. Assign someone to every student first
- Only the ten newest cards are shown. After you press, the count changes to the number of cards still visible. If you let more than ten pile up, reload the screen once you have cleared what you can see, and the hidden ones appear
- Pressing the button sends nothing to the student. The only automatic message is the receipt they get when they submit. Corrections and comments go back through 💬 LINEで送る on the student's record
- There is no undo button, and reading the message in the LINE app does not mark it as checked. Agree that the person who looked is the one who presses, after looking
- You need permission to edit lessons to press it. That is Edit on the Lessons row in 権限管理 (permissions). From a student's record, a teacher who is not assigned to that student can press it too

When one person presses it, the submission clears for the other assigned teachers as well. Anyone with the screen already open keeps seeing the card until they reload. On your own screen too, a card you pressed on Home stays under Tasks until you reload.

## The first step

This week, open the record of every active student and check that someone is assigned. If nobody is, that student's homework is reaching only the manager's screen.

After that, press what you have looked at until the 📩 届いた課題 heading no longer appears, even after a reload. Only then agree the rule among the teachers: whoever opens Home first in the morning presses what they have looked at.

The [demo](https://crm.consilegy.com/demos) opens with just an email address. Pick "Schools" and you can find 📩 届いた課題 and 確認済みにする on the home screen. The demo has no LINE connection, so the 💬 LINE公式アカウントマネージャー button does not appear. It is also shared, so if another visitor has already pressed everything, the list may be empty that day.
