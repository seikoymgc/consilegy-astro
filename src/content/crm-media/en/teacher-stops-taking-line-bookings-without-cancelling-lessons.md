---
title: "Pause a teacher’s new LINE bookings without cancelling existing lessons"
slug: "teacher-stops-taking-line-bookings-without-cancelling-lessons"
lang: "en"
category: "operate"
pain: "Staff confuse closing availability with cancelling agreed lessons."
feature: "Pause a teacher’s LINE booking availability"
screens: "More → Calendar → Teachers' booking hours → Accept on LINE → Save"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/coach-availability/route.ts / src/school-app/lib/booking-slots.ts / src/school-app/lib/booking-slots-core.ts / src/school-app/lib/html-en.ts / src/school-app/lib/authz.ts"
date: "2026-11-23"
author: "Seiko Yamaguchi"
---
A teacher cannot take new bookings for a while, but will still teach the lessons already agreed. Removing their assignments or deleting events would change more than intended.

In Revenue CRM’s school edition, turn off Accept on LINE under Teachers' booking hours to stop offering that teacher’s new LINE booking slots. This is separate from cancelling existing bookings.

## Change availability rather than the teacher’s assignments

Open More → Calendar and scroll to Teachers' booking hours. Clear Accept on LINE for the relevant teacher and click Save on that row. Changing a weekday selection alone does not save it.

The Manager, Operations and Office roles can edit this setting. The Staff role sees a read-only summary of hours and whether bookings are accepted. Ask an authorized operator if the editing controls are absent.

While bookings are paused, a learner can still start a booking on LINE, but no times are offered. They are told in Japanese to contact the office instead. Decide who will handle those messages before you pause.

Closing availability does not remove the teacher’s assignments. Decide whether you need to change responsibility for students or simply stop offering new slots. Those are different operational decisions.

## Keep existing commitments separate

The save operation updates availability; it does not delete bookings. Review existing commitments in Upcoming on the Lessons screen.

If those lessons must also be cancelled or moved, handle the booking changes and learner communication separately. Turning off this checkbox does not complete either task. It is also not a blanket prohibition on bookings entered by staff from a student profile.

For a temporary pause, keep a separate reminder of when to reopen. This screen does not provide a scheduled reopening date.

## Review the hours when reopening

Select Accept on LINE again and save. Accepting bookings requires at least one weekday. The end time must be later than the start time even when you pause.

Reopening does not make every hour available. Slots are limited by the selected weekdays and hours, existing bookings, connected calendar commitments, and school breaks. Calendar-read failures can also prevent slots from being offered.

Check the saved setting separately from the availability of a particular slot. An empty slot list does not necessarily mean the save failed.

## Start with one teacher’s pause

Identify the existing lessons that should remain. Close new LINE availability, save, then reload to verify the setting. Track any learner communication separately.

Open the [demo](https://crm.consilegy.com/demos), choose Schools, and inspect Teachers' booking hours under More → Calendar.
