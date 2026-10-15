---
title: "The week the school was closed still shows up as missed lessons"
slug: "closed-days-still-count-as-missed-lessons"
lang: "en"
category: "setup"
pain: "During the summer or New Year break the system keeps flagging missing lesson logs, LINE self-booking offers slots on closed days, and the teacher's first morning back is spent clearing false alarms"
feature: "Breaks & holidays (register a period with no lessons by name, start date and end date; those weeks drop out of the unlogged-lesson check, closed days disappear from LINE booking slots, and no homework tasks are created while the break is on)"
screens: "Bottom nav More → Breaks & holidays (PC sidebar: Breaks) / + Add, Name, Start date, End date, Add, Delete / Lessons → ⚠️ Unlogged lessons, Missing log, Log in 1 tap, Cancelled / Home → 🚨 Act now, Homework missing / student's LINE 予約する (Book) / Calendar → 🕘 Teachers' booking hours / Audit log"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/lib/mock-body.ts / src/school-app/lib/html-en.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/authz.ts / src/school-app/lib/supabase.ts / src/school-app/lib/homework.ts / src/school-app/lib/homework-reminder.ts / src/school-app/lib/booking-slots.ts / src/school-app/lib/booking-slots-core.ts / src/school-app/lib/line-booking.ts / src/school-app/lib/demo-seed.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/holidays/route.ts / src/app/api/school-app/automation/run/route.ts / src/app/api/cron/workflows/route.ts / supabase/migrations/194_school_beyonders_copy.sql / vercel.json"
date: 2026-10-15
author: "Seiko Yamaguchi"
---
The Monday after the summer break, the teacher opens Lessons on her phone. Under ⚠️ Unlogged lessons there is a row for nearly every student, each tagged Missing log. The school was closed all last week, so of course there are no lesson logs. While she is opening each one to check, a student messages: "I tried to book on LINE and it offered me a Tuesday in the middle of the break, so I took it."

## What you lose is the first morning back, and the trust that an alert means something

The bigger loss is not the half hour of cleanup. It is that once a teacher learns half the alerts are false, she stops looking at the real ones too.

Say you have thirty students and it takes a minute to open, check and dismiss one false alarm. That is thirty minutes on the first morning after each break, three times a year. Worse, "it's probably just the holiday" becomes a habit, and a lesson whose log really is missing stays missing. A lesson with no log cannot be handed over when the teacher changes.

## In Revenue CRM, one entry under Breaks & holidays takes the period out of the checks and the booking slots

Register the closed period once and three things treat it as closed: the unlogged-lesson check, the LINE booking slots, and the homework tasks.

The screen is under More in the bottom nav, as Breaks & holidays; on a PC it appears in the sidebar as Breaks. Manager, Office and Operations roles can use it; the Staff role cannot add or delete. Under + Add, enter a Name (the placeholder suggests examples in Japanese, such as お盆休み, the summer break), a Start date and an End date, then press Add. The entry appears in the list as the name with the range underneath, like 2026-08-10 〜 2026-08-16.

It works in three places.

First, the unlogged-lesson check. Every day around 10:00 Japan time, an automatic run looks at each student on the weekly plan, counts the weeks since their start date (up to 13), subtracts logged and cancelled lessons, and lists anyone short under ⚠️ Unlogged lessons on the Lessons screen with the tag Missing log. Weeks that fall inside a break are left out of that count.

Second, LINE self-booking. When a student taps 予約する (Book), days inside a break are removed from the slot list entirely. This takes effect the moment you add the entry.

Third, homework tasks. While today falls inside a break, no "Homework not submitted" tasks are created, so no homework rows appear under 🚨 Act now on the Home screen of the student's assigned teacher.

Five things to know before you rely on it.

- Public holidays are not loaded for you. Despite the screen's name, only the periods you enter count as closed.
- A break shorter than a week may not drop a week from the check, because the check counts weeks by the weekday of each student's start date. Enter closed weeks as full seven-day spans, Monday to Sunday. For a single cancelled lesson, use the Cancelled button on that student's Missing log row instead.
- Adding a break does not clear Missing log rows that are already showing. They disappear after the next day's automatic run.
- The "3 business days" homework rule skips only weekends, not break days. On the first run after the break, every student who sent nothing during it shows up at once as Homework missing on their teacher's Home. LINE homework reminders, for students set to "Send to this student" on their profile, keep going during a break.
- There is no edit; to fix an entry, Delete it and add it again. Delete asks for no confirmation and leaves no audit log entry (adding one does, as 休講期間の追加, which stays in Japanese). Breaks are not drawn on the Calendar month view, and a booking a teacher enters from the student profile can still land on a closed day.

## The first step

This week, enter just the next long break. Go to More, then Breaks & holidays, press + Add, name it "New Year break", give it a start and end date at least seven days apart, and press Add.

LINE booking only offers slots within the next 14 days, so a break can be checked the same day only if it starts within two weeks. For the New Year break, the check is the first morning back: no Missing log rows on the Lessons screen, and no closed days offered when a student taps 予約する (Book). Once that holds, add the summer break and Golden Week next.

The demo needs only an email address. Choose "School" and Breaks & holidays already holds a New Year break and a Summer break, so you can see the screen as it looks with entries in it. [Try the demo](https://crm.consilegy.com/demos)
