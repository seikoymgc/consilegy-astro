---
title: "You can't switch tools because your school's data feels locked inside the app"
slug: "school-data-locked-inside-the-app"
lang: "en"
category: "operate"
pain: "Each month's tuition status for the accountant, and the year-end roster, get retyped into Excel from screenshots of the management app. Because the data can't come out, the school can't move to a better tool either"
feature: "Export data (students, lesson logs, homework submissions and billing as four CSV files that open in Excel as they are; every export is written to the audit log)"
screens: "Bottom nav More → Export data (PC sidebar: Export) / Students, Lessons, Homework submissions, Billing / Audit log → \"Export data · Billing\" / Students → CSV import"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/export.ts / src/school-app/lib/export.test.ts / src/app/api/school-app/export/[dataset]/route.ts / src/school-app/lib/render.ts / src/school-app/lib/mock-body.ts / src/school-app/lib/html-en.ts / src/school-app/lib/authz.ts / src/school-app/lib/audit.ts / src/school-app/lib/supabase.ts / src/school-app/lib/pg-query-builder.ts / src/school-app/lib/demo-seed.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/student/import/route.ts / src/lib/csv.ts / src/lib/trials.ts / src/content/legal/terms-2026-09-29.md / supabase/migrations/194_school_beyonders_copy.sql / supabase/migrations/220_school_subscription_billing_kind.sql"
date: 2026-10-16
author: "Seiko Yamaguchi"
---
First week of the month. The accountant asks who has paid last month's tuition and who has not, student by student. The management app has a billing screen, but a screen is all it has. The owner photographs it on her phone and retypes forty students' plans, amounts and statuses into Excel. Every month. Somewhere around row 30 a second thought arrives: if we ever wanted a different tool, is the whole roster going to be retyped the same way?

## What you lose is the retyping, and the freedom to choose a different tool

The bigger loss is not a few evenings a year. It is that once you know the data cannot come out, you stay with a tool you are unhappy with, because leaving means rebuilding the roster by hand.

Say forty students retyped every month: 480 rows a year. At thirty seconds a row that is four hours, and the typos surface at the accountant's desk. Worse, every time the question of switching comes up, "re-entering the roster" lands on the scale, and the current tool wins by default.

The data you enter should be available, at any time, in a form Excel can open. A tool that cannot promise that should not be trusted with a school's records.

## In Revenue CRM, Export data hands you four CSV files on the spot

A manager opens More → Export data, taps one of four rows, and a CSV downloads immediately. It opens in Excel with the Japanese text intact.

The screen lives under More in the bottom navigation, as Export data; on a PC the sidebar shows Export. The note on the screen reads: "Download your school's data as CSV (opens in Excel as is). You can still export for 30 days after your contract ends. Each export is recorded in the audit log." Below it are the four rows.

- Students: name, romanized name, status (active, trial booked, graduating, paused, alumni, withdrawn), plan, start date, graduation date, withdrawal date and reason, email, how they found you, the five intake-interview fields, and the registration time. Withdrawn and graduated students are included; nobody is filtered out
- Lessons: date, student, teacher, lesson type, status, notes
- Homework submissions: submitted at, student, kind (text, photo, audio and so on), homework type, text, reviewed at, channel
- Billing: student, plan, amount in yen, status (paid, unpaid, payment failed, or cancelled/stopped as one value), kind (tuition managed by the school, or external such as PayPal and post-graduation plans), next date, due date, when the reminder was sent

For the accountant, the Billing row is the one. The file is named school_billing_ followed by the date, it opens straight into Excel, and filtering the status column gives you who has paid and who has not. Note that it is a snapshot: one row per student with the current status, no payment dates and no month-by-month history. Export it once a month and the stack of files becomes the year's record.

Every tap writes a line to the Audit log: "Export data · Billing", who did it, and how many rows. Who took the roster out, and when, is visible afterwards (the log shows the latest 40 entries).

Five things to know.

- Only the Manager and Operations roles (マネージャー and 運営) can export. The Office and Staff roles (管理部 and 一般) see neither the menu entry nor the screen, and Permissions cannot open it for them. Taking data out is treated as heavier than viewing it, and the billing file carries amounts
- Four files is the whole set. The photo, audio and video files behind submissions, the LINE conversations, tasks, staff and their student assignments, bookings and closed periods are not included
- The Students file does not match the seven columns that Students → CSV import reads (name, plan, status, start date, English level, goal, source); the import does not read the export as is. To load it into another school it has to be cut down to those seven columns first. There is no import screen for lessons, submissions or billing
- Column headers and status words inside the CSV are in Japanese even when the interface is in English. The screen labels are translated; the file contents are not
- Nothing confirms the download; the file simply arrives. Timestamps inside the file are Japan time, but the date in the file name is UTC, so an export before 9:00 Japan time carries the previous day's date

After a contract ends, the screen's promise holds: exports stay available for 30 days, after which the school's data is deleted. Whether or not you are leaving, taking all four files at the end of each term is the safe habit.

## Your first step

This week, have a manager open More → Export data, tap Billing, and open the file in Excel. If the amounts and statuses read correctly, that file is this month's list for the accountant.

Then take the other three and drop them into a folder named for the month in the school's Google Drive or equivalent. Repeat once a month, and the day you decide to change tools, there is no roster to retype.

The demo takes only an email address. Pick "Schools" and More → Export data lets you download all four CSV files from the same screen. [Try the demo](https://crm.consilegy.com/demos)
