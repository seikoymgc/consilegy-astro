---
title: "Set homework alerts for teachers already linked to LINE"
slug: "teachers-notice-homework-only-after-opening-the-system"
lang: "en"
category: "setup"
pain: "Teachers repeatedly open the system to find out whether their students have submitted homework."
feature: "Review and change LINE notification modes for an already linked teacher"
screens: "Users → User management → an already linked member’s notification-mode button"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/users/line/route.ts / src/app/api/school-app/line/webhook/route.ts / src/school-app/lib/notify.ts / src/school-app/lib/line-push.ts / src/school-app/lib/homework.ts / src/school-app/lib/authz.ts"
date: "2026-11-12"
updated: 2026-11-18
author: "Seiko Yamaguchi"
---

This guide covers notification modes for teachers whose LINE accounts are already linked. Check whether a teacher should receive relevant submissions, school-wide arrivals, or a nightly summary. It does not cover creating a new link or adding the official account as a friend.

An arrival alert does not mark homework as reviewed. Noticing a submission and checking its content remain separate tasks.

## Operations and Manager can change the setting

In the School edition, open **Users** and find the teacher in **User management**. The control is restricted to the owner and admin roles, labeled Operations and Manager in the school interface. Being a teacher alone does not provide permission.

Use only the notification control on an already linked member's row, such as **LINE ✓ Alerts: my students**. The unlinked **LINE alerts** button and the adjacent unlink control perform different operations and are outside this guide.

![Where to check the notification scope for an already linked member in User management](/images/crm/media/screens/teachers-notice-homework-only-after-opening-the-system-1-en-2026-11.webp)
*Existing demo screenshot with sample names and email addresses. Unlinked controls also appear, but are outside this guide. No setting was changed during capture.*

## Each click changes and saves the mode immediately

The button cycles through relevant students, all submissions, nightly summary, and off, then returns to relevant students. There is no separate Save button. Intermediate modes are saved too, so do not click simply to inspect a menu.

Some labels remain Japanese in the current implementation, including after a click. **担当ぶん** means relevant submissions, **全件** means all submissions, **毎晩** means nightly, and **切** means off. These are explanations of the modes, not a claim that every button is translated into English.

A teacher checking assigned work and an office role monitoring the whole school may need different scopes. If you change a mode, use the correct person's row and stop at the intended setting. If an error appears, do not assume it saved. Reload the page and check the stored display.

## Scope does not guarantee delivery or complete the review

Relevant-submission mode also depends on student and lesson-type assignments. If an expected alert is missing, check those assignments rather than repeatedly cycling the notification button.

Connectivity, integration problems, and the LINE message allowance can also affect delivery. Keep a check of submissions in the system as a fallback. This setting alone cannot resolve every delayed or missing alert.

## Start with someone already linked

Read that person's existing mode and agree whether it matches their responsibilities. Explain any scope change before saving it. When genuine homework arrives, check the submission in the system and complete the required review; an alert is only the starting point.

To inspect the controls, open the [Revenue CRM demo](https://crm.consilegy.com/demos?edition=demo-school&lang=en), choose **Online schools**, and open User management.
