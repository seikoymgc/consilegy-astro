---
title: "Teachers only notice new homework after opening the system"
slug: "teachers-notice-homework-only-after-opening-the-system"
lang: "en"
category: "setup"
pain: "Teachers repeatedly open the system to find out whether their students have submitted homework."
feature: "Link a teacher’s LINE account to receive alerts for relevant homework submissions"
screens: "Users → User management → LINE alerts / LINE ✓ Alerts: my students"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/users/line/route.ts / src/app/api/school-app/line/webhook/route.ts / src/school-app/lib/notify.ts / src/school-app/lib/line-push.ts / src/school-app/lib/homework.ts / src/school-app/lib/authz.ts"
date: "2026-11-12"
author: "Seiko Yamaguchi"
---
The teacher responsible for checking homework is clear. Yet they still open the system between lessons to see whether anything has arrived. If the school owner notices first, the owner sends another message: “There is new homework for you.”

Assignment and notification solve different problems. A LINE alert can help the teacher notice incoming work without repeatedly checking an empty screen.

## An arrival alert gives the teacher a starting point

When the owner relays every arrival, the teacher’s awareness depends on the owner being available. When teachers check repeatedly themselves, those checks interrupt preparation even when there is nothing new.

An alert does not review the homework. Agree on the next step too: open the submission, inspect it, and record that it was checked.

## Link the teacher’s LINE account in Revenue CRM

In the school edition, open **Users** to reach **User management**. An unlinked member has a **LINE alerts** control. A Manager or another account authorized to manage notification settings performs this setup.

The school’s LINE Official Account must already be connected. Having a personal LINE account alone does not make the teacher a notification recipient.

1. The authorized administrator selects **LINE alerts** on the correct teacher’s row to issue a linking code.
2. Give that code only to the named teacher. They add the school’s official account as a friend and send the code in its chat.
3. Check that the row now shows **LINE ✓ Alerts: my students**.

![User management showing an already linked member and a LINE alerts control for an unlinked member](/images/crm/media/screens/teachers-notice-homework-only-after-opening-the-system-1-en-2026-11.webp)
*Names and email addresses are demo samples. No linking code was issued and no notification setting was changed during capture.*

Linking initially enables alerts for the teacher’s relevant submissions. For a typed submission, the normal recipient is assigned both to the student and to that lesson type. If the student has no assigned teachers, the system falls back to the lesson type’s teachers. An unclassified submission goes to the student’s assigned teachers because it cannot be filtered by type.

If an expected alert does not arrive, check both the student’s assigned teachers and **Teachers by lesson type** in **Lessons**, as well as the LINE link.

## Choose the notification scope deliberately

The notification button cycles through the modes on each click and saves immediately: relevant students, all submissions, nightly summary, and off. Do not click it just to inspect the options.

All-submission mode suits an intake or office role that needs school-wide arrivals, including work outside its own assignments. Nightly mode sends the evening action summary rather than individual arrival alerts. All-submission mode also receives that summary. Start one teacher with their relevant submissions.

Several arrivals close together are held and combined to avoid repeated alerts. A submission arriving within 15 minutes of the previous alert is deferred until another sending opportunity, such as a subsequent relevant submission. It is not a promise of delivery exactly 15 minutes later.

Alerts use the official account’s LINE message allowance. When the system can retrieve the remaining allowance and finds 30 messages or fewer, it stops arrival alerts to preserve capacity for student communication. Connectivity or integration problems can also prevent delivery. Keep a scheduled check of the system as a fallback.

## Start with one teacher

Link one teacher, then verify their student and lesson-type assignments. When genuine homework next arrives, compare the alert with the submission in the system. Receiving the alert does not mark the work reviewed; finish the check by using **Mark as reviewed** on the submission.

[Try the Revenue CRM demo](https://crm.consilegy.com/demos), choose Schools, and inspect the notification controls in User management.
