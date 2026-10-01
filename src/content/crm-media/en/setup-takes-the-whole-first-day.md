---
title: "Courses, fees and closed days, and the first day is gone"
slug: "setup-takes-the-whole-first-day"
lang: "en"
category: "setup"
pain: "The first day with a new school management tool goes on entering courses, fee tables and closure dates, and not one student is in it by the following week"
feature: "School edition initial setup (Coaches, Lesson types, Closure calendar)"
screens: "\"More\" → \"Coaches\" \"Add a coach\" \"Pay type\" / \"Lesson types\" \"Has homework\" \"No homework\" \"Add coach\" / \"Closure calendar\" \"Add\" / Home \"Needs action now\""
segment: "b2c"
edition: "school"
sources: "src/app/school-v1/more/page.tsx / src/app/school-v1/coaches/page.tsx / src/components/school/coach-pay-list.tsx / src/app/school-v1/lesson-types/page.tsx / src/components/school/lesson-types-editor.tsx / src/app/school-v1/holidays/page.tsx / src/components/school/holiday-manager.tsx / src/lib/school-homework.ts / src/lib/school/homework-reminder.ts / src/app/school-v1/home/page.tsx"
date: 2026-10-01
author: "Seiko Yamaguchi"
---
Sunday evening. The owner of a small school opens the new management tool for the first time, and the first thing it asks for is configuration. Register every course. Enter the fee for each one. Type in a year of closure dates. Add the teachers one by one. Three hours later there is still not a single student in it. Classes start again on Monday, and the rest is left for "next Sunday", which never comes.

In eight years of CRM implementation work, most of the rollouts I saw stall did so in setup, before anyone had used the thing. Companies and schools stall in the same place.

## The loss is not the three hours. It is that week's inquiries going back to where they were

You can get three hours back. What you cannot get back is what happened that week.

Say five trial-lesson inquiries arrive in those seven days. The new tool has no students in it yet, so the replies go out the old way, from a phone and a paper diary. The week after is the same. A month in, the tool holds a finished course list and fee table, and no student records at all.

Finishing the configuration before you start is the wrong order. The shape of a school only becomes clear while you are running it. What you need on day one is the minimum that lets records start accumulating tomorrow.

## In the school edition of Revenue CRM, there are three things to enter first

Initial setup in the school edition is three screens under "More" in the bottom menu: "Coaches", "Lesson types" and "Closure calendar". Each one is a list you add to a line at a time. None of them starts with building a fee table.

Do them in that order.

On "Coaches", press "Add a coach", type the name and save. The title is optional. Pay type (per lesson, hourly, monthly, or not paid) and rate live here too, but on day one you can leave it as not paid. Monthly totals are calculated on the "Coach pay" screen, so fill this in when you decide to use it. Only owners and admins can see pay settings.

On "Lesson types", type a name and press "Add". Each type carries two decisions: who reviews it, set with "Add coach", and whether it is "Has homework" or "No homework". This is where it gets decided who looks at the work students send in.

One thing to watch. Only types with homework count toward the overdue alert. Mark a counselling session as "Has homework" and every student who has not submitted gets flagged. When in doubt, start with "No homework".

On "Closure calendar", enter a date and a label and press "Add". You do not need the whole year. The next break is enough. On a closure day, missing homework is not assessed and no reminder goes out. A reminder arriving on a day the school is closed is about the fastest way to lose a family's goodwill, which is the one reason this is worth entering early.

With those three in, "Needs action now" on Home starts working. When an enrolled student has gone three business days without submitting homework (weekends are not counted), that student appears there as one line. What you set up comes back to you on the next morning's screen.

## The first step

This week: all your coaches, two lesson types, the next closure day. Then stop. That is a short sitting, not an evening.

Spend the rest of the time getting this month's active students in, with "Add a student" or "CSV import" under "More". Lesson types and closure days can be added one line at a time, on the day you notice one is missing.

If you would rather see the screens first, the [demo](https://crm.consilegy.com/demos) opens with just an email address.
