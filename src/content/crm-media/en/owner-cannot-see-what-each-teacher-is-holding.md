---
title: "The owner has to ask each teacher, one by one, how far behind they are"
slug: "owner-cannot-see-what-each-teacher-is-holding"
lang: "en"
category: "operate"
pain: "Each teacher's home screen shows only their own students, so the owner cannot see who is sitting on how many open items, or which work belongs to no one, without asking every teacher in turn"
feature: "Dashboard (More → 📊 Dashboard. Who's handling what lists, for each teacher, the open items on that teacher's home screen by type. Items with no teacher of that type appear under ⚠️ 誰のホームにも出ていないもの, and tapping one opens the student's profile)"
screens: "Bottom nav More → 📊 Dashboard (PC: sidebar Dashboard) / 👤 Who's handling what, N open tasks / Table columns: Teacher, Count, Homework to review, No homework for 3 days, Next booking, Monthly support pending, Motivation session not booked, オリジナル課題, Other / ⚠️ 誰のホームにも出ていないもの (items on no one's home screen) / ‹ Menu"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/lib/supabase.ts / src/school-app/lib/html-en.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/demo-seed.ts / src/app/school/page.tsx / src/school-app/lib/authz.ts / src/school-app/lib/homework.ts / src/app/api/school-app/automation/run/route.ts / src/app/api/cron/workflows/route.ts / src/lib/demo.ts"
date: 2026-10-22
author: "Seiko Yamaguchi"
---
A school with four teachers. Every student now has an assigned teacher, so each teacher's home screen shows only the tasks and homework for their own students. That's good for focus. The owner's home screen still lists everything, but nothing on it says which teacher each item belongs to. To find out whether anyone is falling behind on homework reviews this week, she messages each teacher. Everyone replies "all good".

## What you lose is the days before you notice a teacher who is swamped

Splitting students between teachers makes uneven workloads harder to see from outside. The busiest teacher is the least likely to say "I can't keep up".

Say one teacher has 12 homework submissions waiting for review and another has 2. The owner usually finds out when a student asks why nobody has replied to their homework. By then that student may have waited a week, and students whose homework goes unanswered can stop handing it in.

There is a second gap: work that belongs to nobody. If a student has no teacher assigned for a particular type of work, those tasks don't appear on any teacher's home screen.

## In the school edition of Revenue CRM, the Dashboard lists how much each teacher is holding, by type

Open 📊 Dashboard from More, and the table under 👤 Who's handling what shows each teacher's open items. Each number counts that teacher's share using the same rules as the tasks on their home screen.

On a phone, go to More in the bottom navigation and tap 📊 Dashboard. On a PC it is Dashboard in the sidebar. Everyone except the Staff role (一般 in Japanese) can open it. For Staff, the menu item doesn't appear at all.

How to read it. Each person assigned to at least one student gets a row, sorted with the busiest at the top. Count is that teacher's total, followed by the breakdown by type:

- Homework to review: homework that has come in but hasn't been marked as reviewed
- No homework for 3 days: no new submission for 3 business days since the last one
- Next booking, Monthly support pending, Motivation session not booked, オリジナル課題 (original assignments) and Other: tasks of each of those types

A column only appears if at least one teacher has something in it. The "N open tasks" figure in the heading is the number of open tasks across the whole school. It leaves out Homework to review, and one task can be counted on more than one teacher's row, so it won't match the table's totals. On a PC, hover over a cell to see which students are behind the number.

Below the table you may see ⚠️ 誰のホームにも出ていないもの (items on no one's home screen). This line and the items under it stay in Japanese even with the display set to English. These are items for students who have no teacher assigned for that type: they show on the owner's home screen, but not on any teacher's. Tap a line to open the student's profile and assign someone.

Five things to know before you rely on it:

- It shows the numbers as they are when you open it. There is no history to compare with last week, no date range and no export
- Only a PC shows which students are behind a number, by hovering. On a phone you get the count only. Cells can't be tapped, and reassigning is done on the student's profile
- Apart from Homework to review, tasks are created by a daily run at around 10 a.m. Japan time. Anything that happens after that shows up in the next day's numbers
- Homework to review includes submissions from students who have paused or withdrawn. If a number never goes down, open that student's profile and mark their submissions as reviewed there
- If no student has a teacher assigned yet, you'll see 未対応のタスクはありません。 ("no open tasks") instead of a table. Assign teachers to students first

The second table, 📊 How each student is doing, can be mostly blank depending on which integrations you use and how students label their homework. This article only uses the first table.

## The first step

Next Monday, any time after 10 a.m., open 📊 Dashboard and compare the teacher with the highest Count against the one with the lowest. If the gap is wide, move one or two students for that week.

Open it again the following Monday. If the gap has narrowed, you've done the loop once.

The [demo](https://crm.consilegy.com/demos) opens with just an email address. Pick "Schools", go to More → 📊 Dashboard, and you'll find the per-teacher table right where this article describes it.
