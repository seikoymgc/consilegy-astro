---
title: "Today's to-dos never reach the rep who is out all day"
slug: "task-deadlines-never-reach-the-rep-on-the-road"
lang: "en"
category: "setup"
pain: "A task due date in the CRM is visible only to whoever opens the CRM. A rep who goes straight to customer sites does not open it until evening, and the quote or the callback slips a day"
feature: "Notifications (task due dates pushed to the owner's phone and computer at 10:00 the day before and the day of, optionally to Slack; new MQLs announced to sales by Slack and email)"
screens: "Sidebar Settings → Notifications / \"Task due-date alerts on this device\": \"Get notifications on this device\", \"On for this device\", \"Send a test\", \"Turn off here\" / \"Notification settings\": \"Enable Slack notifications\", \"Slack Incoming Webhook URL\", \"Also post task due dates (10:00 the day before and the day of) to this Slack\", \"Enable email notifications\", \"Sales notification email (fallback when no owner)\", \"Manager email (additional notice on Critical)\", \"Save\" / Push \"Due tomorrow: Task\", \"2 due today / 1 due tomorrow\" / Slack \"New MQL: Name\", \"Priority\", \"Reason\", \"Next action\", \"Due\" / Settings → Weekly digest"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/settings/page.tsx / src/app/(dashboard)/settings/notifications/page.tsx / src/app/(dashboard)/settings/notifications/notifications-view.tsx / src/app/(dashboard)/settings/notifications/push-device-card.tsx / src/app/api/notification-settings/route.ts / src/app/api/push/subscribe/route.ts / src/app/api/push/test/route.ts / public/push-sw.js / src/app/manifest.ts / src/lib/push.ts / src/lib/task-reminders.ts / src/lib/notify.ts / src/lib/mql-handoff.ts / src/lib/lead-scoring-run.ts / src/lib/routing.ts / src/lib/revops/deals.ts / src/lib/revops/util.ts / src/lib/digest/weekly.ts / src/app/(dashboard)/settings/weekly-digest/weekly-digest-view.tsx / src/app/api/cron/workflows/route.ts / vercel.json / supabase/migrations/039_notification_settings.sql / supabase/migrations/224_task_reminders_push.sql / supabase/migrations/071_secret_rls_hardening.sql / src/app/api/demo/seed/route.ts"
date: 2026-10-15
author: "Seiko Yamaguchi"
---
Eight in the morning, and the rep drives straight to the first customer. Last night, on the way out, she logged a task in the CRM: "Send the quote to Company A", due today. Two meetings later, she opens the CRM at five. The quote goes out tomorrow. Company A's buyer spent the whole day waiting for it.

## What you lose is a rep who can act on the day she promised

A due date in the CRM is seen only by whoever opens the CRM. The real loss is not that the rep forgot. It is that nothing was in place to make her act even when she forgot.

Say five reps each let two deadlines slip by a day every week. That is ten a week, forty a month, each one a customer waiting an extra day. Every late quote and late callback adds to one impression: this company is slow to answer.

A deadline should live on the rep's phone, not in the rep's memory.

## In Revenue CRM, task due dates reach the phone and the computer at 10:00 the day before and the day of

The owner's phone and computer get a notification at 10:00 the day before and the day a task is due. Each person sets this up once. Open Settings in the sidebar and choose Notifications. Under Task due-date alerts on this device, press Get notifications on this device and allow the browser prompt; the card switches to On for this device. Send a test delivers one right away. Register the computer and the phone separately. On iPhone and iPad, tap Share in Safari, choose Add to Home Screen, open the CRM from that icon, and register from there.

What arrives is the tasks you own (or created, when no owner is set) that are due tomorrow or due today. One notification at 10:00 the day before and one on the day. A single task shows as "Due tomorrow: Task" with the contact's name; several are bundled as "2 due today / 1 due tomorrow". Tapping it opens the Tasks screen.

For the whole team, go to Notification settings on the same screen, make sure Enable Slack notifications is ticked, paste a Slack Incoming Webhook URL, tick Also post task due dates (10:00 the day before and the day of) to this Slack, and press Save. One message a day, with each owner's name.

The same Notification settings also announce new marketing-qualified leads. A "New MQL: Name" message carries Priority, Reason, Next action and Due, and goes to Slack and to the owner's email. A contact with no owner is assigned to the member with the fewest contacts first, and that person gets it. Whatever you enter under Sales notification email (fallback when no owner) receives every MQL regardless of owner, and a Critical priority also goes to Manager email (additional notice on Critical).

Five things to know.

- The phone gets task due dates only. A task with no due date (such as the ones the stalled-deal automation creates) never arrives, and nothing is re-sent for overdue tasks. Entering a due date is the precondition
- The time is fixed at 10:00 Japan time (01:00 UTC, the evening before for readers in the Americas), at most twice per task, the day before and the day of. It cannot be changed
- Each person registers their own devices. Only owners and admins can save the Slack and email settings under Notification settings; a regular member just sees "Failed to save"
- The New MQL message fires only when a contact becomes an MQL. A contact created on screen is scored at once; people who arrive by form, business card or CSV are scored the next morning around 10:00. It is not an instant "someone just enquired" alert. And a contact you have not yet cleared for sales contact becomes a "連絡可否を確認" (confirm contact permission) task instead; no Slack or email goes out
- There is no screen showing what was delivered. Slack works through an Incoming Webhook URL, and the channel is chosen on the Slack side. Notifications follow the workspace language, not each person's display language, and the test notification itself is in Japanese

For the weekly view, there is Weekly digest under Settings: one email every Monday at 10:00 to owners and admins with last week's movement and the deals that have stalled. Recipients can be changed on that screen.

## Your first step

Today, have every rep open Settings → Notifications on their phone, press Get notifications on this device, and confirm that Send a test arrives. iPhone users add the CRM to the home screen first.

Then each rep logs one task due tomorrow. If it arrives at 10:00 tomorrow, setup is done. Add the Slack feed only after everyone has received their own.

The demo takes only an email address. Pick "B2B sales" and you can open Settings → Notifications on the same screen. The demo is a shared account, so do not register your own phone there; try Send a test from a computer browser. The next-morning notification is not sent for demo workspaces. [Try the demo](https://crm.consilegy.com/demos)
