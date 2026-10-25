---
title: "Before every Monday meeting, the sales manager chases each rep for last week's numbers"
slug: "managers-chase-reps-for-the-monday-numbers"
lang: "en"
category: "operate"
pain: "Before the Monday pipeline meeting, the manager messages every rep to ask what closed and where each deal stands, then retypes the answers into a slide. The numbers are already in the CRM. Pulling them together is still a person's job every week"
feature: "Weekly digest (every Monday at 10:00 JST, one email with last week's won, lost and new deals, the deals that are not moving, pending work by owner, the quarter against target, and this week's tasks. Goes to owners and admins by default, or to addresses you choose. Each person picks what they receive)"
screens: "Settings → Operations → Weekly digest: Delivery (Send the weekly digest), Recipients (Send to owners and admins automatically, Choose the recipients, Current recipients), What you receive (Last week, Not moving, Pending by owner, This quarter, This week; Reset to default, Save) / In the email: Open pipeline review →, Open tasks → / Forecast: Set quota / Settings → Operations → Notifications: Enable email notifications"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/settings/weekly-digest/page.tsx / src/app/(dashboard)/settings/weekly-digest/weekly-digest-view.tsx / src/app/(dashboard)/settings/weekly-digest/digest-items-view.tsx / src/lib/digest/items.ts / src/lib/digest/weekly.ts / src/lib/deals/pipeline-review.ts / src/lib/revops/util.ts / src/app/api/cron/workflows/route.ts / src/app/api/notification-settings/route.ts / src/app/api/weekly-digest-preferences/route.ts / src/app/(dashboard)/settings/settings-index.tsx / src/app/(dashboard)/settings/notifications/notifications-view.tsx / src/app/(dashboard)/forecast/forecast-view.tsx / supabase/migrations/105_active_org_rls_hardening.sql / vercel.json"
date: 2026-10-25
author: "Seiko Yamaguchi"
---
It's 9 a.m. on Monday and the pipeline meeting starts at 11. The sales manager opens chat and works down the list. "Anything close last week?" "Did they get back to you on the renewal?" Each answer gets copied into the meeting deck, and the reps who haven't replied get a second nudge. Every one of those numbers is already in the CRM.

## What you lose is the manager's Monday morning, and the deals nobody asked about

Building the weekly picture by asking people costs two things.

The first is time. Say a team has six reps, and each check-in plus copying the answer takes ten minutes. That's an hour every week, or more than 50 hours a year, spent moving numbers from one place to another.

The second is the deals that never come up. Reps talk about the deals they remember. The deal whose close date quietly slid another month, or the one with no next step booked, only surfaces if someone asks the right question. Those are exactly the deals the meeting should be about.

## In Revenue CRM, the weekly digest lands every Monday at 10:00 JST with last week in one email

Go to Settings → Operations → Weekly digest. Send the weekly digest is already ticked. The send time is fixed at 10:00 Tokyo time every Monday, and each email covers the previous Monday through Sunday. Nobody has to write anything.

By default the email includes:

- Last week: won, lost and new deals, with counts and amounts
- Not moving: deals whose close date was pushed back last week, deals with no next step (no open task and nothing scheduled), and Unclassified deals that have sat in the same stage for 60+ days with no waiting reason or decision recorded, plus a couple of related checks
- Pending by owner: only the people with something outstanding (no next step, stalled, or overdue tasks), busiest first, up to eight
- This quarter: target, won, remaining, open pipeline and coverage (open pipeline divided by what's left to hit), flagged when it drops below 3x
- This week: tasks due this week and overdue tasks

Open pipeline review → in the email takes you straight to the list of stuck deals.

Five things to know:

- The automatic recipients are owners and admins only. Managers and reps don't get it. To include them, pick Choose the recipients and add their addresses. Once you switch to a list, only those addresses receive it. Owners and admins who are not on the list stop getting it too. Only owners and admins can save delivery and recipient settings
- What you receive applies to the person who saves it. Addresses on a chosen list get the default items, not their own picks. Activity count is off by default
- Target, remaining and coverage only appear after you enter a quarter target with Set quota on the Forecast page
- A week with no movement, nothing stuck and no overdue tasks sends nothing (a week with only logged activities is still sent). Turning off Enable email notifications under Settings → Operations → Notifications also stops the digest email
- Demo workspaces never receive it. In the demo you can see the settings screen only

## Your first step

This week, have an owner or admin open Weekly digest and check that whoever runs the Monday meeting is under Current recipients. If not, switch to Choose the recipients, add their address along with the owners' and admins', and click Save. While you're there, set this quarter's target with Set quota on the Forecast page, so next Monday's email shows what's left and the coverage.

Then run next week's meeting from the Not moving section instead of a round of messages. When everyone starts from the same list of stuck deals, the meeting goes on next moves, not status updates.

Start the demo with just an email address, choose B2B sales, and open Settings → Operations → Weekly digest to see the recipient and item settings. [Try the demo](https://crm.consilegy.com/demos)
