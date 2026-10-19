---
title: "Students who quit stay on the morning to-do list and keep getting fee reminders"
slug: "students-who-quit-stay-on-the-to-do-list"
lang: "en"
category: "input"
pain: "A parent says on LINE that their child is leaving, or taking a break, but the roster still shows them as active. The next morning there's a task to nudge them to book, before the next due date the fee flips back to unpaid, and teachers learn to scroll past it"
feature: "Student status (on the student profile, ⚙ Change status → Paused, Graduated or Withdrawn takes the student out of automatic tasks, LINE homework reminders, the monthly fee reset and overdue monthly-fee reminders from the next night; Withdrawn also records the date and reason)"
screens: "Bottom nav Students → student profile ⚙ Change status: Trial booked, Active, Paused, Graduated, Withdrawn / withdrawal reason box 退会理由を入力してください（任意） (shown in Japanese) / profile note 退会日・理由 (shown in Japanese) / student list chips Active, Graduating, Paused, Alumni, Withdrawn / tasks Nudge next booking, Homework not submitted, Send monthly support, Payment past due / Lessons: Unlogged lessons / More → Subscriptions & Billing: 停止 (Stop, shown in Japanese) / Permissions: Students, Edit"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/school-app/lib/mock-body.ts / src/school-app/lib/html-en.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/authz.ts / src/school-app/lib/homework-reminder.ts / src/school-app/lib/monthly-fee.ts / src/school-app/lib/monthly-fee-rollover.ts / src/school-app/lib/dunning.ts / src/school-app/lib/line-booking.ts / src/school-app/lib/demo-seed.ts / src/app/api/school-app/student/status/route.ts / src/app/api/school-app/automation/run/route.ts / src/app/api/school-app/billing/fee/stop/route.ts / src/app/api/school-app/permissions/route.ts"
date: 2026-10-20
author: "Seiko Yamaguchi"
---
Sunday evening, a message lands in the school's LINE account. "Soccer practice is taking over, so this will be his last month." The teacher writes a kind reply and moves on. Monday morning, Home has a task telling her to nudge that same student to book his next lesson. A week before his next due date, his fee flips back to unpaid. The teacher mutters "he left" under her breath and scrolls past, and does the same thing the next day.

## What you lose is the daily skim, and reminders sent to families who already left

When the roster doesn't match reality, the system keeps treating students who left as students who come every week. That's where the cost starts.

Here's a rough number. Picture a school with 60 students where two leave and one takes a break each month. Leave the roster alone for six months and 18 of those names belong to people who aren't coming. Every morning, their tasks and reminders sit in front of your teachers.

The bigger risk is what goes out the door. Students set up for homework reminders, or with a fee past its due date, can keep getting LINE messages after they've left. A family you said a warm goodbye to shouldn't get a "we haven't received your payment" message a month later.

Marking a student as left or paused isn't admin you get to later. It's the switch that stops the messages.

## In Revenue CRM for schools, change the status on the student profile and most tasks and fee reminders stop from the next night

Once you tap Paused, Graduated or Withdrawn on a profile, that night's automation treats the student as no longer attending.

This part of the product talks to families through LINE, the messaging app most schools in Japan already use. Most labels below show in English; the few that stay in Japanese come with a gloss.

Open Students in the bottom nav and tap a student's card to open their profile. Under ⚙ Change status you'll see Trial booked, Active, Paused, Graduated and Withdrawn. Tap the one that's true now.

Tapping Withdrawn opens a small box asking for a reason, and that box stays in Japanese (退会理由を入力してください（任意）, "reason for leaving, optional"). Type a few words and confirm, and the profile keeps the withdrawal date and the reason, also shown in Japanese (退会日 / 理由). Cancel and nothing changes. The other statuses switch the moment you tap them.

Once a student is Paused, Graduated or Withdrawn, the nightly automation leaves them out of:

- Automatic tasks on Home and Tasks, such as Nudge next booking, Homework not submitted and Send monthly support, plus the Unlogged lessons list on the Lessons screen
- Automatic homework reminders on LINE
- The job that flips the monthly fee back to unpaid a week before its due date, and the LINE reminder when a monthly fee is overdue

The chips at the top of the student list split them out into Paused, Alumni and Withdrawn. The number of students actually attending is the Active chip plus the Graduating chip. None of this uses Fuel.

Five things to know:

- Changes kick in from the next nightly run, so today's tasks stay until then. The "Active students" number on Home counts paused, graduated and withdrawn students too, so it won't drop
- A monthly fee that's already past due keeps showing up as a Payment past due task after you change the status. Go to More → Subscriptions & Billing and tap 停止 (Stop; the button stays in Japanese) on that student's fee. Only a Manager, or a role allowed to edit billing, can do this. Fees paid through PayPal don't have that button, and their reminders aren't stopped here
- Booking through LINE doesn't check status. If the student has an assigned teacher, or the Lessons screen has someone covering that lesson type, a withdrawn student can still book, and existing bookings stay put
- The withdrawal date is the day you tap it, and you can't pick another (tap it before 9 a.m. Japan time and it records the previous day). You can't edit only the reason later; tapping Withdrawn again resets the date too. Switching to another status clears both
- Managers can change status, and so can the Office and Staff roles once Students → Edit is switched on in Permissions. Without that permission, tapping does nothing

## The first step

This week, tap the Active chip on the student list and read the names from top to bottom. If someone has stopped coming or told you they're taking a break, open their profile right there and tap Paused or Withdrawn.

From now on, split the job. The teacher who hears a student is leaving taps Withdrawn after the last lesson and writes the last day and the reason in the box. If the student has a monthly fee set up, the owner or manager then taps 停止 under Subscriptions & Billing.

In the [demo](https://crm.consilegy.com/demos), which only needs an email address, open a withdrawn student's profile to see how the date and reason are kept. The demo is shared and reset every night, so any status you change is visible to other visitors and will be back to normal the next day.
