---
title: "Reschedule books next week before you choose a date"
slug: "make-up-lesson-date-changes-before-you-choose-it"
lang: "en"
category: "operate"
pain: "Staff click Reschedule expecting a date picker and create a booking on an unintended day."
feature: "Reschedule an unlogged lesson and verify both booking slots"
screens: "Lessons → Unlogged lessons → Reschedule / Upcoming / Google Calendar"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts (lessons) / src/school-app/components/MockShell.tsx (data-reschedule, data-cancel) / src/app/api/school-app/lesson/reschedule/route.ts / src/app/api/school-app/lesson/cancel/route.ts / src/school-app/lib/google-calendar.ts / src/app/api/school-app/gcal/sync/route.ts / src/school-app/lib/html-en.ts / src/school-app/lib/authz.ts"
date: "2026-11-22"
author: "Seiko Yamaguchi"
---
A learner missed last week’s lesson and a warning now appears under Unlogged lessons. The replacement date is still being discussed, but a staff member clicks Reschedule, expecting to choose a date next. That click starts a booking change rather than opening a date picker.

In Revenue CRM’s school edition, the Reschedule button for an unlogged lesson creates a booking seven days after the day you click it. Agree the replacement date first, then decide whether this particular operation matches it.

## The new date is seven days after the click

The reference point is today, not the date of the original lesson. The new booking takes its time, lesson type, and teacher from a source booking. If the source has no time, it uses 10:00.

Clicking on a Wednesday therefore books the following Wednesday. It does not book Friday simply because Friday is what the learner requested. A wrong date can send the teacher’s preparation and the learner’s confirmation in different directions. Check the operation’s fixed date before using it.

## Check the source booking before using the warning’s button

The control appears under unlogged lessons on the Lessons screen. The warning is generated overnight for weekly-plan students whose lesson records fall short. It is not linked to a particular booking. Clicking starts the operation without a confirmation dialog or date entry, and a successful response reloads the screen. The user needs lesson-edit permission and access to the student.

If there is a booking from today up to, but not including, seven days from today, the operation uses the nearest one. It creates the replacement and attempts to cancel that source booking. The warning concerns a lesson that has passed, but the booking cancelled is an upcoming one. Even if there is only one booking in the window, that next lesson is what moves. Check the student’s next booking in Upcoming before clicking.

If there is no booking in that window, it uses the time, type, and teacher of the furthest-dated non-cancelled booking instead. That source may be a future booking. It does not cancel a source booking in this case. The operation fails if there is no source lesson type, or if the same replacement slot already exists. The name-based button also fails if two students have the same name. A failure can display 失敗 (failed) in Japanese even in the English interface. Inspect the schedule before retrying.

## Check both the replacement and the original slot

After a successful response, use Upcoming to check the new date, time, teacher, and lesson type. Where a source booking should have been cancelled, check that its old slot has left Upcoming. The month view retains it with a strikethrough. If Google Calendar is connected, also check that the replacement event appears and the original event is removed. Creating the replacement can succeed even if cancelling the source fails.

The action also creates a lesson record dated today with a cancelled status. It does not notify the learner or replace an agreed confirmation message. The separate Cancelled button records a cancelled lesson; it is not a substitute for cancelling the booking itself.

To move an existing booking that has already been synced to Google Calendar to another date, move that booking’s event in Google Calendar. Check the system’s schedule after the calendar change is imported, either by a change notification or by Sync with Google Calendar now on Lessons. Creating an unrelated new calendar event does not create a booking in the system.

## Start with the agreed replacement details

Write down the date, time, lesson type, and teacher agreed with the learner. Use Reschedule only when moving to seven days after today, using the selected source booking’s details, matches that agreement.

For the separate setup task, see [connecting a teacher’s lesson calendar](/en/crm/media/b2c/teachers-ask-the-owner-for-their-schedule/). Connecting a calendar and moving an existing booking are different operations.

Open the [demo](https://crm.consilegy.com/demos), choose Schools, and inspect the Lessons schedule. Leave Reschedule untouched if you only want to explore the screen.

