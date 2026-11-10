---
title: "The homework was submitted. Why did the student get a missing-work reminder?"
slug: "homework-was-submitted-but-the-reminder-still-arrives"
lang: "en"
category: "operate"
pain: "A homework file arrived through LINE without a lesson type, so the submission and missing-work check disagree."
feature: "Assigning a lesson type to an unclassified homework submission"
screens: "Students → student record → Homework submissions → unclassified submission type selector"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/submission/review/route.ts / src/school-app/lib/homework.ts / src/school-app/lib/homework-reminder.ts / src/school-app/lib/authz.ts"
date: "2026-11-11"
author: "Seiko Yamaguchi"
---
“I sent the audio yesterday.” A student replies to a missing-homework reminder. The file is in LINE, and the teacher remembers listening to it. Yet the system still treats that assignment as missing.

Before asking for another upload, check whether the submission has a lesson type. Receiving a file, identifying which assignment it belongs to, and recording that a teacher reviewed it are separate things.

## Repeated requests make students doubt the handoff

To the student, the school is asking for work they have already sent. They may wonder whether it arrived, whether anyone checked it, or whether they need to submit it again.

Meanwhile, the teacher searches the chat history and the administrator asks whether the reminder should be stopped. One submission becomes several internal conversations.

Start by reconciling that submission with the student’s record. Turning off reminders for everyone would leave the underlying mismatch unresolved.

## Assign the missing type in Revenue CRM

The school edition has **Homework submissions** in each student record. Photos or audio sent without first selecting a homework type in the LINE menu can arrive without a type.

Missing-work checks run separately for each lesson type configured to have homework. If a student submits writing, that should not also count as an audio exercise. An unclassified file is not silently assigned to either one.

Open **Students**, choose the student, and find **Homework submissions**. Then:

1. Match the submission’s date and format to the work you received.
2. For photos or audio, check the student’s chat in LINE Official Account Manager. The school record does not store the media itself.
3. Use the type selector on the unclassified submission to choose the matching lesson type.

**Selecting a type saves it immediately. There is no separate Save button.** After a successful save, the selector becomes a label showing the type. Only lesson types configured to have homework appear as choices.

You can assign a type even after the submission has been marked reviewed. Marking it reviewed by itself does not assign a type. The review record says that someone checked the work; the type says which assignment it counts toward.

## Check the result without promising that every reminder will disappear

Assigning a type makes that submission count toward the selected type. The system also attempts to close the matching missing-homework task and clear the record of the previous reminder. Saving the type can succeed even if either cleanup step fails. Reopen the student record and task list to check the result and refresh the displayed gap since the last submission.

A message already delivered through LINE cannot be recalled. If this is an old submission, or the student later stops submitting, the same type can become overdue again. Another homework type can still be missing. For students whose automatic reminders are enabled, future reminders can be sent when the conditions are met.

A recent unclassified submission temporarily provides the date used for the pending-classification gap. It does not remain a permanent exemption: after three business days, the gap can become overdue again. Classify it as part of checking the work.

You need permission to edit lessons for this operation. The ordinary interface does not offer a selector to change a type once it is assigned, so inspect the content before choosing. Do not pick a temporary category simply to clear a warning.

## Resolve one mismatch today

Choose one student who received a reminder despite sending the work. Match the file in LINE to the unclassified submission, assign the correct type, and reopen the record to check the result. Tell the student that the file was received. For future work, ask them to choose a type through LINE’s homework menu before sending it.

[Try the Revenue CRM demo](https://crm.consilegy.com/demos), choose Schools, and inspect Homework submissions in a student record.
