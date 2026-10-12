---
title: "The trial sign-up form and the student roster are not connected"
slug: "trial-form-not-connected-to-the-roster"
lang: "en"
category: "setup"
pain: "Trial lesson requests land in a form notification email and never reach the roster, so retyping waits for whenever the teacher has a spare moment"
feature: "Trial booking form (an application goes straight into the student list)"
screens: "Students: 体験予約フォーム（公開URL）, 体験予定, 体験予約 / the public form 無料体験レッスンのお申し込み / Home 体験予定 / student record 📝 初回ヒアリング, ⚙ ステータス変更, 受講中"
segment: "b2c"
edition: "school"
sources: "school-app/lib/render.ts / school-app/components/MockShell.tsx / school-app/components/TrialForm.tsx / app/school/trial/page.tsx / app/api/school-app/trial/route.ts / app/api/school-app/student/status/route.ts / app/api/school-app/line/webhook/route.ts / school-app/lib/public-paths.ts"
date: 2026-10-03
updated: 2026-10-12
author: "Seiko Yamaguchi"
---
Your school's website has a trial lesson form. It was made with a free form builder, and each request arrives as a notification email. The teacher sees it between lessons and thinks "I'll reply later". At night, after tidying up, they open the roster spreadsheet, type in the name and contact details, and write a reply. In a busy week that happens two days later.

The requests are coming in. They are not in the roster. Between the form and the roster sits one manual step, done by a teacher.

## The loss is not the retyping. It is that requests stop being countable

How many requests came in, how many people showed up, how many enrolled. With notification emails in one place and a spreadsheet in another, the only way to know is to count again at month end. A request that has not been retyped is nowhere in the roster, so you cannot even tell whether it was answered without scrolling back through the inbox.

## In Revenue CRM, an application goes straight into the student list

On the Students screen of the school edition there is a banner reading 体験予約フォーム（公開URL） (trial booking form, public URL). Tap it and the link to the form is copied. Paste it on your website or Instagram. There is no form to build, and applicants open it without logging in.

The form is headed 無料体験レッスンのお申し込み. It asks for name, email address, how they found the school, English level, preferred days and times, where they want to be in three months, and a free comment. Only the name is required. Pressing 体験レッスンを申し込む shows a confirmation. The form itself is in Japanese only.

A submitted application is registered as a student on the spot. Choose 体験予定 on the Students list and it appears with a 体験予約 badge. It also counts toward 体験予定 on Home. What the applicant wrote about how they found you, their level and their goal is already in 📝 初回ヒアリング on the student record. Nothing is retyped. Most of these labels are shown in Japanese at the time of writing, including when the display language is English.

When the student enrolls, press 受講中 (shown as "Active" in English display) under ⚙ ステータス変更 on the record. By default only admins can change it. Everyone sees the buttons, but nothing happens when someone without permission presses one.

## What to know

Nothing tells you an application has arrived. No email, no task. New applications sit at the bottom of the list. Open 体験予定 every morning and read to the end. How fast you reply depends on that habit.

The form has no phone number field and the email address is optional. You cannot answer an application that has only a name, so where you post the link, ask people to fill in their email address.

The wording of the form is written for English conversation schools and cannot be changed. The questions about English level and the three-month goal appear as they are.

If someone who applied through the form later adds your LINE Official Account as a friend, the same person appears twice in the list. There is no merge.

There is no screen showing how many trials turned into enrolments.

## The first step

Copy the link and submit one application yourself. See where it lands under 体験予定 and what the record contains. Students cannot be deleted, so use "Test" as the name and set it to 退会 (withdrawn) under ⚙ ステータス変更 once you have looked. It asks for a reason, which you can leave empty. Then point the button on your website at the new link.

The [demo](https://crm.consilegy.com/demos) opens with just an email address. Pick "Schools" to look around the school edition.
