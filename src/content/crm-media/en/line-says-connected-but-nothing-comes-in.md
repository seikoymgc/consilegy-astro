---
title: "The LINE account is hooked up, but no homework and no new followers are reaching the school"
slug: "line-says-connected-but-nothing-comes-in"
lang: "en"
category: "setup"
pain: "The school entered its LINE Official Account credentials and assumed it was done, but a setting on the LINE side was still off. Not one homework submission or new follower made it in, and nobody noticed for days"
feature: "LINE connection check (open More > Integrations and the system asks LINE directly, showing 受信中 (receiving), Webhook OFF, URLが違う (wrong URL), 未連携 (not connected) or 状態不明 (unknown), plus the LINE friend count and the number imported into the CRM. The status is shown to the Manager and Office roles)"
screens: "More > 🔗 Integrations (on a computer, Integrations in the sidebar): the badge on the LINE Official Account row (Checking… then the status), the status line and friend/import counts under LINE Official Account settings, the webhook URL with Copy, and steps ① and ②"
sources: "src/school-app/lib/render.ts (integrations) / src/school-app/components/MockShell.tsx (loadLineHealth) / src/app/api/school-app/line/health/route.ts / src/app/api/school-app/line/webhook/route.ts (findOrImportStudent, submission recording) / src/school-app/lib/authz.ts (STAFF) / src/school-app/lib/i18n-data.ts (crm b46d6a3)"
segment: "b2c"
edition: "school"
date: 2026-11-08
author: "Seiko Yamaguchi"
---
A school owner pastes the LINE Official Account's Channel ID and Channel secret into the admin screen and saves. Homework photos and new followers should start flowing in now. A week goes by.

The homework inbox on the home screen is still empty. Ask a student and they'll tell you they sent it days ago. The cause: a switch on LINE's side called the webhook was off. With it off, LINE doesn't send the school's system anything at all.

## What you lose is every submission until someone notices, and the first impression

Holding valid credentials and LINE actually delivering messages are two separate things. You can have the first and still get nothing, because if delivery is off, no homework, no messages and no new followers ever arrive.

Say it takes a week to notice. Every assignment sent that week looks "not submitted" from the school's side. Students did the work and heard nothing back. People who just followed the account never land on the roster, so nobody reaches out. That's a trial lead slipping away at the front door, quietly.

And nothing looks wrong. There's no error, just silence. That's what makes it hard to catch.

## In Revenue CRM, opening Integrations asks LINE directly whether messages can get through

In the school edition, go to More > 🔗 Integrations (on a computer, Integrations in the sidebar). The status shows up for people with the Manager or Office role. A Member who opens it on a computer sees 確認できず (could not check).

As soon as the screen opens, the system checks with LINE. The badge on the LINE Official Account row changes from "Checking…" to one of the following. The status, its explanation and the counts stay in Japanese even in the English interface:

- **受信中 (receiving)**: LINE can deliver events to the school
- **Webhook OFF**: the webhook is off on LINE's side, so nothing arrives
- **URLが違う (the URL is wrong)**: LINE is sending to a URL that isn't this school's
- **未連携 (not connected)**: either no credentials have been entered, or the ones entered don't get through to LINE. Re-enter the Channel ID and Channel secret
- **状態不明 (unknown)**: the check with LINE failed partway. Wait a moment and open the screen again

Under LINE Official Account settings you'll see an explanation and two counts side by side: LINE friends and students imported into the CRM. Say there are eight friends and zero imported: that means something upstream is blocked.

The fix is on the same screen. Copy the webhook URL shown there. Then ① in LINE Official Account Manager, turn on Webhook under the response settings, and ② in LINE Developers, paste the URL into the webhook settings and turn on "Use webhook." Both have to be on. With only one, LINE sends nothing.

Four things to know:

- The check runs the first time you open this screen after loading the page. You won't get an alert if delivery stops, so make a habit of reloading and looking
- Turning things on doesn't pull in people who were already friends. They come in the moment they send anything. That first message is used for the import and isn't kept as homework, so ask them to resend a homework photo
- People who come in through LINE are added as new trial students under their LINE display name. If the same student is already on your roster, the two aren't merged, and the extra row can't be deleted from the screen. Don't ask your whole roster to "send us something," or every student will appear twice
- The friend count is as of the previous day and may be missing on some days

## Your first step

Today, have a Manager open Integrations and check one thing: does the LINE badge say 受信中? If it says Webhook OFF or URLが違う, fix steps ① and ② right there.

Once it's fixed, reload the page, open Integrations again, and check that the badge now says 受信中. Then put a monthly reminder on the calendar to open this screen.

Start the [demo](https://crm.consilegy.com/demos) with just an email address and choose Schools to explore the school edition. The demo is shared, so look around without changing the integration settings.
