---
title: "Courses, fees and closed days, and the first day is gone"
slug: "setup-takes-the-whole-first-day"
lang: "en"
category: "setup"
pain: "The first day with a new school management tool goes on entering courses, fee tables and closure dates, and not one student is in it by the following week"
feature: "School edition initial setup (lesson types already in place, teachers by lesson type, user invites)"
screens: "Lessons \"Teachers by lesson type\" \"+ Add lesson type\" \"☐ Homework\" / More → user management, invite link, \"🔗 Issue URL\" / Students \"+ New student\" \"CSV import\" / \"Breaks & holidays\""
segment: "b2c"
edition: "school"
sources: "crm d6892f0: src/lib/school/provision.ts / src/school-app/lib/render.ts (lessonTypeCoaches, users, holidays, students) / src/app/api/school-app/lesson-types/route.ts / src/school-app/lib/homework.ts / src/app/api/school-app/automation/run/route.ts / src/school-app/lib/booking-slots.ts"
date: 2026-10-22
author: "Seiko Yamaguchi"
draft: true
---
Sunday evening. The owner of a small school opens the new management tool for the first time, and the first thing it asks for is configuration. Register every course. Enter the fee for each one. Type in a year of closure dates. Add the teachers one by one. Three hours later there is still not a single student in it. Classes start again on Monday, and the rest is left for "next Sunday", which never comes.

In eight years of CRM implementation work, most of the rollouts I saw stall did so in setup, before anyone had used the thing. Companies and schools stall in the same place.

## The loss is not the three hours. It is that week's inquiries going back to where they were

You can get three hours back. What you cannot get back is what happened that week.

Say five trial-lesson inquiries arrive in those seven days. The new tool has no students in it yet, so the replies go out the old way, from a phone and a paper diary. The week after is the same. A month in, the tool holds a finished course list and fee table, and no student records at all.

Finishing the configuration before you start is the wrong order. The shape of a school only becomes clear while you are running it. What you need on day one is the minimum that lets records start accumulating tomorrow.

## The school edition does not start empty

When you create a school in the school edition, four lesson types are already there: Grammar correction, Shadowing, Free talk and Counselling. You are listed as the teacher for each. Grammar correction and Shadowing are marked as having homework.

That is a draft, not a finished setup. Editing something that is already on the page is far quicker than writing it from nothing. The job on day one is to bend these four into the shape of your own school.

You will find them on "Lessons" in the bottom menu, under "Teachers by lesson type" further down the screen.

Remove any type your school does not run with the "✕" next to the teacher's name. A type with no teacher left disappears from the list. Add the ones you need with "+ Add lesson type": enter the name, choose a teacher, and press "Add". There is no rename, so add the new name first and then remove the old one.

One thing to watch. Only types ticked "☐ Homework" appear as choices when a student taps "submit homework" on LINE, and only those go to "Needs action" when nothing has come in for three business days (weekends are not counted). Tick it on counselling or a check-in session and every student with nothing to submit lines up under "Needs action". When in doubt, leave it unticked.

## Teachers only need an invite

Adding a teacher is not a matter of typing their details in yourself. Open user management from the "More" menu, enter the teacher's email address and role, and issue an invite link. Teachers set their own name and password. If the email does not reach them, "🔗 Issue URL" gives you a link to pass on directly, over LINE or anything else.

Once a teacher has joined, add them to a type with the "+" in "Teachers by lesson type" and remove yourself with "✕". That is what decides who reviews the homework students send in.

## The first step

Tonight there are only two things to do: make the lesson types your own, and send the teacher invites. That is a short sitting, not an evening.

Spend the rest of the time getting this month's active students in, with "+ New student" or "CSV import" on the Students screen. Breaks ("Breaks & holidays" in the menu), fees and booking hours can be added on the day you notice you need them. The one exception: before a long break, enter it as a single line. While a break is running, students with missing homework are not sent to "Needs action".

If you would rather see the screens first, the [demo](https://crm.consilegy.com/demos) opens with just an email address.
