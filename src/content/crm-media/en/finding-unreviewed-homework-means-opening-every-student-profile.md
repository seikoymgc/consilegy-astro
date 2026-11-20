---
title: "Finding unreviewed homework means opening every student profile"
slug: "finding-unreviewed-homework-means-opening-every-student-profile"
lang: "en"
category: "operate"
segment: "b2c"
edition: "school"
pain: "A school coordinator opens student profiles one by one to find homework still awaiting review"
feature: "Student-level submission and unreviewed counts in the dashboard"
screens: "Dashboard / How each student is doing / Submissions / last submission / assigned staff / Students"
sources: "src/school-app/lib/render.ts / src/school-app/lib/supabase.ts / src/school-app/lib/authz.ts / src/app/school/page.tsx / src/school-app/lib/html-en.ts / src/lib/demo.ts"
date: 2026-11-18
updated: 2026-11-20
author: "Seiko Yamaguchi"
---
A school coordinator wants to check for homework awaiting review. They open a student profile, inspect submissions, return to the roster, and repeat.

They already know that work has arrived. The question is which students still have something waiting, and finding those names has become a separate task.

## Find the student before opening the work

Revenue CRM's School edition provides a student-level table in the dashboard, **How each student is doing**. It shows submission counts with an unreviewed indicator, helping you choose a profile to inspect.

The dashboard is available to Operations, Manager and Office roles. It is not shown to Staff. Being designated as a coach alone does not grant this access.

## Look for the unreviewed indicator

Use the lower student table, rather than the staff workload matrix above it:

1. Open **Dashboard** from the desktop sidebar, or through **More** on a phone.
2. Go to **How each student is doing**.
3. In the **Submitted** column, look for the amber pill with a count next to the total.
4. Check the assigned staff shown on that row, then open the student's profile through **Students** and read the actual submissions.

Student names in this table are not links to profiles. It is a place to identify the name before finding it in Students. There is also no control here for marking work reviewed.

The unreviewed count means the submission has no recorded review timestamp. If someone read the work elsewhere but did not mark it reviewed in the system, it remains in that count. Read the work before deciding that it can be cleared.

## The latest submission date is a different signal

A recent submission does not tell you whether earlier work has been reviewed. New homework can arrive while older items are still waiting.

The last-submission column shows the newest date among the submissions loaded for that student, as a month and day in Japan time. It does not show the age of the oldest unreviewed item. Open the profile and inspect individual submission dates when you need to know how long something has been waiting.

The table includes students who are active or nearing graduation. It does not cover students on leave, withdrawn students or every other status. Check the relevant profiles separately when clearing work for those groups.

There is a history limit too. Unreviewed submissions are loaded without a count cap, while reviewed submissions are limited to the latest 300 across the school. The displayed total and latest date therefore do not represent a guaranteed lifetime history. An empty submission display is not proof that the student has never submitted anything.

The table has no date-range control or sort by unreviewed count. It reflects the loaded screen; reload it after review work to check the new counts.

## Start with one student

Pick one row with an unreviewed indicator today. Check the actual work with the assigned staff member, finish that review, then return to the table to choose the next student.

The useful change is in the order of work: identify the person first, then open the submissions, instead of inspecting every profile just to discover who needs attention.

To locate the table, open the [Revenue CRM demo](https://crm.consilegy.com/demos), choose Schools, and look at the dashboard.
