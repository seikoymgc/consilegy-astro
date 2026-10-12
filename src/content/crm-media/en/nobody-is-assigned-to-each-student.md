---
title: "Nobody has decided which teacher looks after which student"
slug: "nobody-is-assigned-to-each-student"
lang: "en"
category: "setup"
pain: "No student has a named teacher responsible for them, so checking homework and reaching out to students who are drifting is left to whoever notices, and for some students nobody does"
feature: "Per-student assignment (assign teachers by role under 🎓 担当LEADERS on the student record, and that student's tasks and incoming homework appear on the assigned teachers' screens)"
screens: "Bottom nav More → User management (Settings): ☐ LEADERS / ☑ LEADERS / Bottom nav Students → student record: 🎓 担当LEADERS (assigned teachers) with 文法, シャドーイング, モチベーション, カウンセリング, その他 / ＋ アカウントのない人を担当にする, 追加 / Home: 担当なしの生徒 ○人 (students with nobody assigned), 🚨 Act now, 📩 Homework inbox / More → Audit log: 担当コーチ追加, 担当コーチ解除 / Permissions"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/school-app/lib/supabase.ts / src/school-app/lib/authz.ts / src/school-app/lib/notify.ts / src/school-app/lib/line-push.ts / src/school-app/lib/audit.ts / src/school-app/lib/mock-body.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/demo-seed.ts / src/app/school/page.tsx / src/app/api/school-app/student/coaches/route.ts / src/app/api/school-app/users/coach/route.ts / src/app/api/school-app/student/route.ts / supabase/migrations/194_school_beyonders_copy.sql"
date: 2026-10-13
author: "Seiko Yamaguchi"
---
A school with three teachers. One student has not handed in homework for two weeks. All three teachers have noticed. All three assume the student's own teacher will say something. Nobody was ever named as that student's teacher.

## What you lose is one person who thinks "this student is mine"

A student who belongs to everyone belongs to no one. The real cost is the student who needed a nudge, did not get it in time, and quietly stops coming.

Say you have thirty students and for one in five it is unclear who is responsible. That is six students whose homework and follow-up depend on someone happening to notice.

My recommendation is to stop "looking after them together". Put a named person on every student, and make the number of students with nobody assigned something you can see every day.

## In the school edition of Revenue CRM, a student's tasks and homework go to the people assigned to that student

On each student's record there is a section called 🎓 担当LEADERS (assigned teachers). Once you assign someone there, that student's tasks and incoming homework show up on that person's home screen. If you switch the display to English, the navigation and headings such as Students, More, User management (Settings), Act now and Homework inbox change. The labels inside the student record stay in Japanese, so I give them as they appear.

Step one is deciding who can be assigned. From More in the bottom navigation, open User management (Settings) and press ☐ LEADERS on a teacher's row so it becomes ☑ LEADERS. Managers and the Admin dept role can do this. Leave it off for office staff who do not teach.

Step two is the assignment. From Students, open a student's record and scroll to 🎓 担当LEADERS at the bottom. Under each role you see the names of the people you just ticked. Tap a name to assign, tap again to remove. There is no save button. It is saved on the tap. A role can have more than one person.

Three things change once someone is assigned.

- 🚨 Act now and 📩 Homework inbox on Home, and Tasks in the bottom navigation, only show items for students you are assigned to. Your role makes no difference
- The student's card in the list shows who is assigned, by role. The student list and the records themselves stay visible to everyone
- Who assigned or removed whom, and when, is kept under More → Audit log as 担当コーチ追加 (assignment added) and 担当コーチ解除 (assignment removed)

Gaps are caught on the manager's home screen. If any student has nobody assigned, a note reading 担当なしの生徒 ○人 (students with nobody assigned) appears, and those students' tasks and homework go to the manager until someone is assigned.

Seven things to know before you rely on it.

- The roles are fixed at five: 文法 (grammar), シャドーイング (shadowing), モチベーション (motivation), カウンセリング (counselling) and その他 (other). They were named for an English conversation school and there is no screen to rename them. If you teach something else, agree first what each one will mean for you
- After you assign or remove someone, Home, Tasks and the student list do not change until you reload. Someone you have just ticked as LEADERS does not appear on a record you have already opened until you reload
- ＋ アカウントのない人を担当にする lets you put down a name for someone with no login. The chip is marked ・未登録 (not registered). Nothing is delivered to that person, and the student still counts as having nobody assigned. After pressing 追加 (add), reload to check the result
- Once a student has someone assigned, their tasks and homework leave the manager's screen, apart from payment tasks. A manager who wants to keep watching a student should tick ☑ LEADERS on their own row and be assigned too. The person who created the school does not appear in the user list and cannot be assigned, so they check that student by opening the record
- Unticking ☑ LEADERS does not remove that person's existing assignments. Their name disappears from the list on the record, so you can no longer tap it off. Remove the assignments on the records first, then untick
- The count of students with nobody assigned includes students who are paused, graduated or withdrawn. Trial students are not counted
- Assigning is open to managers and to any role that has Edit on the Students row in Permissions

Assigning someone does not notify them. Tell them yourself.

## The first step

This week, a manager opens User management (Settings) and ticks ☑ LEADERS for every teacher who takes lessons. Reload, then open each active student's record and assign someone.

When you are done, reload Home and look at the 担当なしの生徒 note. If the only students left in the count are paused, graduated or withdrawn, you are finished.

The [demo](https://crm.consilegy.com/demos) opens with just an email address. Pick "Schools" and you can find 🎓 担当LEADERS on a student record and ☐ LEADERS under User management, exactly where this article describes them.
