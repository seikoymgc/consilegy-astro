---
title: "You want teachers to see student records, but not what each family pays"
slug: "teachers-see-fee-amounts-too"
lang: "en"
category: "setup"
pain: "The roster and the fees live in one sheet, so sharing it shows every amount to every teacher, and not sharing it leaves teachers unaware of who has not paid while the owner answers every question alone"
feature: "Permissions (billing view closed per role; create and edit for students, lessons and tasks split by role)"
screens: "Menu > 権限管理 (Permissions): roles \"Manager\" \"Admin dept\" \"Member\" / rows \"Students\" \"Lessons\" \"Tasks\" 請求 (Billing) / view / create / edit / delete chips / Menu > \"Subscriptions & Billing\" or 入金状況 (Payment status) / Menu > 監査ログ (Audit log): 権限変更"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/lib/authz.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/permissions/route.ts / src/app/api/school-app/copilot/route.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/demo-seed.ts / supabase/migrations/194_school_beyonders_copy.sql"
date: 2026-10-07
author: "Seiko Yamaguchi"
---
In most small schools the roster is one spreadsheet. Name, contact details, teacher, course, and on the same row the monthly fee and whether it has been paid.

Then a new teacher joins and the owner hesitates. Share the sheet and every family's fee and every late payment is visible to the whole staff. Keep it private and the teacher has to ask the owner for a student's phone number. So the sheet stays with the owner, and the owner answers "Has this family paid this month?" one message at a time.

## The loss is not the time spent answering. It is everything else that stays locked up with the fees

To hide the amounts, the owner ends up holding back everything that sits next to them.

The answering you can count. Say four teachers each check something with the owner five times a week, three minutes a time. That is an hour a week, about four hours a month.

The part you cannot count weighs more. A teacher does not know whether the student in front of them is behind on payment. When the owner is away, nobody can answer. A habit meant to protect one column slows down the whole school.

My recommendation is to stop treating it as share or do not share. The line to draw is between kinds of information, not between people. Student and lesson records for everyone, amounts for the owner.

## In Revenue CRM for schools, the amounts are the one thing closed from the start

Student and lesson records are visible to everyone, and fee amounts are visible to the Manager only. That split is already in place, and you can see it under 権限管理 (Permissions) in the menu.

Most labels stay in Japanese even with the English switch on, so I give them as they appear. The screen lists three roles: "Manager", "Admin dept" and "Member". Each has four rows, "Students", "Lessons", "Tasks" and 請求 (Billing), and each row has four chips for view, create, edit and delete. Tapping a chip saves it. Manager always has full access and cannot be changed.

Of those chips, the ones that currently change what people see and can do are view on Billing, and create and edit on Students, Lessons and Tasks. Delete, and view on Students and Tasks, do not change anything yet. After any change, reopen the screen and check that it did what you meant.

Only the Manager sees amounts. Only the Manager can change the Billing row, too: an Admin dept user can open this screen, but those chips do not respond. Nobody can quietly give themselves access to the money.

Here is what a person without Billing view gets. On the menu screen, "Subscriptions & Billing" is renamed 入金状況 (Payment status). Inside are counts of paid, unpaid and failed payments, and for each student a line that says they have a contract, the next date, and the payment state. No fee amounts and no monthly revenue. The screen says so itself: amounts are visible to the administrator only.

So a teacher can see who has not paid, but not how much anyone pays. That is the split the spreadsheet could not do.

It is not only the display. Create and edit actions are checked on the server against the same table, so an action a role is not allowed simply does not go through. The AI assistant follows the same rule: when someone who cannot see amounts asks it a question, the amounts are not handed to it in the first place.

Every permission change is written to 監査ログ (Audit log) as 権限変更, so for recent changes you can check who made them and when.

A person's role is chosen when you invite them. Student records themselves are visible to every member regardless of role. It is not set up so that a teacher sees only their own students.

## The first step

This week, open your current roster sheet and color the columns in two colors: columns every teacher may see, and columns only the owner sees. If the owner-only columns are just the fee and the amount received, closing Billing is all the separation you need. If other columns ended up owner-only, try to say why for each one. A column you cannot give a reason for is a column your teachers can see.

If you would rather see the screen first, the [demo](https://crm.consilegy.com/demos) opens with just an email address. You enter it as a Manager, so you see the Permissions screen and the billing screen with amounts showing.
