---
title: "Homework disappeared from the inbox before anyone checked it"
slug: "homework-marked-reviewed-before-it-was-checked"
lang: "en"
category: "operate"
pain: "A submission was accidentally marked reviewed and disappeared from the queue before its content was checked."
feature: "Undo the reviewed state from the student record"
screens: "Students → student record → Homework submissions → Reviewed → Undo"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/submission/review/route.ts / src/school-app/lib/supabase.ts / src/school-app/lib/authz.ts / src/school-app/lib/audit.ts"
date: "2026-11-13"
author: "Seiko Yamaguchi"
---
While working through incoming homework, someone clicks **Mark as reviewed** on the wrong submission. Its card disappears. The work has not been checked, but another teacher now sees it as complete.

Rather than relying on a reminder to yourself, put the record back into the unchecked state. Revenue CRM’s school edition lets you undo the reviewed status from the student record.

## An incorrect completion mark can hide the next person’s work

The reviewed mark helps colleagues avoid checking the same submission repeatedly. That is useful only when the mark reflects what happened.

“I will check it later” leaves the screen saying something different. Telling a colleague about the mistake does not change the record either. Restore the unchecked state first, then let the person who checks the content mark it reviewed afterward.

## Find Undo in the student’s submission history

Instead of looking for a card that has already left Home or Tasks, open **Students**, choose the student, and find **Homework submissions**.

1. Identify the submission by its time, lesson type, format and visible content.
2. Check the **Reviewed** label and the reviewer and time, where shown.
3. Select **Undo** on that same submission row.

![A reviewed submission in the student record with an Undo control](/images/crm/media/screens/homework-marked-reviewed-before-it-was-checked-1-en-2026-11.webp)
*This is a sample submission in the demo. The status was viewed without using Undo during capture.*

The submission returns to the unchecked state and shows **Mark as reviewed** again. The current review time and reviewer are cleared from that row. The operation requires permission to edit lessons.

There is no extra confirmation step. Identify the correct submission before pressing the control, then inspect the saved result. If an error appears, do not assume the change succeeded; reload the record and check its state.

## Undo changes the review state, not the submission

The submission time, text and lesson type stay in place. This does not delete the work or ask the student to submit it again. It does not send the student a LINE message.

Reload Home or Tasks to check the relevant teacher’s unchecked inbox. On an already open page, the count can change before the card is restored, so a reload may be needed. The item does not necessarily appear for someone who is not its assigned reviewer.

The student record displays up to the latest 20 submission rows. If an older item is not visible, do not undo a different row as a substitute.

The operation also attempts to record the reversal in **Audit log**, available under **More**. That log is a recent operational record, not a complete all-time audit archive. Use what it actually shows when checking who reversed the status.

## Return one overlooked item to the right queue

If a reviewed item still needs attention today, match its time and content in the student record. Use **Undo** only if it has not been checked, then tell the responsible teacher which submission needs review. Once they have examined it, they can mark it reviewed again.

[Try the Revenue CRM demo](https://crm.consilegy.com/demos), choose Schools, and inspect a reviewed submission and its Undo control.
