---
title: "Nobody has decided which teacher looks after which student"
slug: "nobody-is-assigned-to-each-student"
lang: "en"
category: "setup"
pain: "No student has a named teacher responsible for them, so checking homework and reaching out to students who are drifting is left to whoever notices, and for some students nobody does"
feature: "Per-student assignment (assign teachers by role under 🎓 Assigned LEADERS on the student record, and that student's tasks and incoming homework appear on the assigned teachers' screens)"
screens: "Bottom nav More → User management (Settings): ☐ LEADERS / ☑ LEADERS / Bottom nav Students → student record: 🎓 Assigned LEADERS with Weekly lesson, Grammar, Shadowing, Motivation, Counseling, Other / + Assign someone without an account, Add / Home: N students without a teacher, 🚨 Act now, 📩 Homework inbox / More → Audit log: 担当コーチ追加, 担当コーチ解除 / Permissions"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/school-app/lib/supabase.ts / src/school-app/lib/authz.ts / src/school-app/lib/notify.ts / src/school-app/lib/line-push.ts / src/school-app/lib/audit.ts / src/school-app/lib/mock-body.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/demo-seed.ts / src/app/school/page.tsx / src/app/api/school-app/student/coaches/route.ts / src/app/api/school-app/users/coach/route.ts / src/app/api/school-app/student/route.ts / supabase/migrations/194_school_beyonders_copy.sql / src/school-app/lib/html-en.ts / src/lib/school/provision.ts"
date: 2026-10-13
updated: 2026-11-20
author: "Seiko Yamaguchi"
---
A school with three teachers. One student has not handed in homework for two weeks. All three teachers have noticed. All three assume the student's own teacher will say something. Nobody was ever named as that student's teacher.

## What you lose is one person who thinks "this student is mine"

A student who belongs to everyone belongs to no one. The real cost is the student who needed a nudge, did not get it in time, and quietly stops coming.

Say you have thirty students and for one in five it is unclear who is responsible. That is six students whose homework and follow-up depend on someone happening to notice.

My recommendation is to stop "looking after them together". Put a named person on every student, and make the number of students with nobody assigned something you can see every day.

## In the school edition of Revenue CRM, a student's tasks and homework go to the people assigned to that student

On each student's record there is a section called 🎓 Assigned LEADERS (🎓 担当LEADERS on the Japanese screen). You assign people there role by role, and each item goes to the people in the matching role: homework of a given type goes to that type's teacher, next-booking tasks to the Weekly lesson teacher, and monthly-support and motivation tasks to the Motivation teacher. If a student has teachers but none for a homework type, that homework shows on no one's home screen. With the display in English, the labels on the record are in English too.

Step one is deciding who can be assigned. From More in the bottom navigation, open User management (Settings) and press ☐ LEADERS on a teacher's row so it becomes ☑ LEADERS. The Manager, Operations and Office roles can do this. Leave it off for office staff who do not teach.

Step two is the assignment. From Students, open a student's record and scroll to 🎓 Assigned LEADERS at the bottom. Under each role you see the names of the people you just ticked. Tap a name to assign, tap again to remove. There is no save button. It is saved on the tap. A role can have more than one person.

Three things change once someone is assigned.

- 🚨 Act now and 📩 Homework inbox on Home, and Tasks in the bottom navigation, only show items for students you are assigned to. Your role makes no difference
- The student's card in the list shows who is assigned, by role. The student list and the records themselves stay visible to everyone
- Who assigned or removed whom, and when, is kept under More → Audit log as 担当コーチ追加 (assignment added) and 担当コーチ解除 (assignment removed)

Gaps are caught on the manager's home screen. If any student has nobody assigned, a note reading N students without a teacher (担当なしの生徒 ○人 on the Japanese screen) appears, and those students' tasks and homework go to the manager until someone is assigned.

Seven things to know before you rely on it.

- The roles are fixed at six: Weekly lesson, Grammar, Shadowing, Motivation, Counseling and Other (週1レッスン, 文法, シャドーイング, モチベーション, カウンセリング and その他 on the Japanese screen). They were named for an English conversation school and there is no screen to rename them. If you teach something else, agree first what each one will mean for you
- After you assign or remove someone, Home, Tasks and the student list do not change until you reload. Someone you have just ticked as LEADERS does not appear on a record you have already opened until you reload
- + Assign someone without an account (＋ アカウントのない人を担当にする on the Japanese screen) lets you put down a name for someone with no login. The chip is marked ・未登録 (not registered). Nothing is delivered to that person, and the student still counts as having nobody assigned. After pressing Add, reload to check the result
- Once a student has someone assigned, their tasks and homework leave the manager's screen, apart from payment tasks. A manager who wants to keep watching a student should tick ☑ LEADERS on their own row and be assigned too. The person who created the school does not appear in the user list and cannot be assigned, so they check that student by opening the record
- Unticking ☑ LEADERS does not remove that person's existing assignments. Their name disappears from the list on the record, so you can no longer tap it off. Remove the assignments on the records first, then untick
- The count of students with nobody assigned includes students who are paused, graduated or withdrawn. Trial students are not counted
- Assigning is open to the Manager and Operations roles and to any role that has Edit on the Students row in Permissions. In a newly created school, Office and Staff have it from the start, so everyone can assign until you turn it off there

Assigning someone does not notify them. Tell them yourself.

## The first step

This week, a manager opens User management (Settings) and ticks ☑ LEADERS for every teacher who takes lessons. Reload, then open each active student's record and assign someone.

When you are done, reload Home and look at the N students without a teacher note. If the only students left in the count are paused, graduated or withdrawn, every active student has someone. Then open 📊 Dashboard and check for ⚠️ 誰のホームにも出ていないもの (items on no one's home screen). If it appears, review the teacher assignments for those homework types.

The [demo](https://crm.consilegy.com/demos?edition=demo-school&lang=en) opens with just an email address. Pick **Online schools** and you can find 🎓 Assigned LEADERS on a student record and ☐ LEADERS under User management, exactly where this article describes them.
