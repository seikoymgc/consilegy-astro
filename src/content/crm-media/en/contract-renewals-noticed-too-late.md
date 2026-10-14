---
title: "You find out a contract is up for renewal when finance asks about the invoice"
slug: "contract-renewals-noticed-too-late"
lang: "en"
category: "operate"
pain: "Annual renewal dates surface when finance prepares the invoice, nobody has looked at the account in months, and the first real conversation is the one where the customer says they are leaving"
feature: "Contract end date tracking (set \"Contract end\" on a deal and it shows up in the \"Renewal\" column of \"Customer Success\", and the \"Renewal-date management\" automation creates a prep task for the deal owner)"
screens: "Deal form, \"Delivery & contract\" card, \"Contract end\" / Sidebar \"CS\" → \"Customer Success\" / \"Renewals due (90d)\" / \"Renewal\" column / Contacts list \"Change stage...\" → \"Customer\" / \"Automations\" → \"Renewal-date management\", \"Renewal prep window\" / Task \"[Renewal] Prepare contract renewal: deal name\" / Home \"Do now\" / \"Tasks\""
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/customer-success/page.tsx / src/app/(dashboard)/customer-success/cockpit-view.tsx / src/app/(dashboard)/customer-success/renewals/page.tsx / src/app/(dashboard)/customer-success/renewals/renewals-view.tsx / src/lib/cs/portfolio.ts / src/app/(dashboard)/deals/new/page.tsx / src/app/(dashboard)/deals/[id]/edit/page.tsx / src/app/(dashboard)/deals/[id]/page.tsx / supabase/migrations/010_deal_complete.sql / src/components/contacts-table.tsx / src/lib/revops/health.ts / src/lib/revops/catalog.ts / src/lib/revops/outcomes.ts / src/lib/revops/execution.ts / src/lib/revops/config.ts / src/lib/revops/util.ts / src/lib/editions/index.ts / src/app/(dashboard)/automations/automations-view.tsx / src/app/api/cron/workflows/route.ts / vercel.json / src/app/(dashboard)/page.tsx / src/components/home/today-actions-panel.tsx / src/components/home/home-workspace.tsx / src/components/app-sidebar.tsx / src/lib/personas.ts / src/lib/i18n/translations.ts"
date: 2026-10-14
author: "Seiko Yamaguchi"
---
First week of the month. Finance sends sales a one-line message: "Company A's annual license ends next month. Do we invoice them again?" That is how the account owner learns the renewal date. The account owner calls the customer. The answer: "To be honest, we have been evaluating another tool internally." The only conversation with Company A in the past six months was a support ticket.

## What you lose is every move you could have made before the renewal

When the renewal date surfaces at invoicing time, the only question left is "renew or cancel?" The real loss is the two or three months before that, when you still had options: a review of features they never adopted, a proposal for more seats, a price change explained in person. Only people who know the date can do any of that.

Say you have ten annual contracts at 10,000 dollars each. Hear about a renewal only when the customer calls, and one cancellation is 10,000 dollars gone. The other nine roll over on last year's terms, and your next chance to expand them is a year away.

Closing the deal is not the finish line. The renewal is the next deal, and its date was fixed the day you won.

## In Revenue CRM, a contract end date on the deal puts the renewal in a column and in a task

There is one place to enter it. On the deal form, new or edit, the Delivery & contract card has a field called Contract end. On each won deal, enter the day the contract expires.

The place to see it is Customer Success, in the CS group of the sidebar. The screen is hidden unless the role switcher at the top of the sidebar is set to CS or All, so switch first. The header shows a Renewals due (90d) count, and the Renewal column in the customer list shows each contract end date with the days remaining, like "(45d)". Anything inside 90 days changes color.

Automation is what makes it move. Open Automations in the sidebar and turn on Renewal-date management. For every deal whose contract end date falls within 60 days, it creates a task named "[Renewal] Prepare contract renewal: deal name" and assigns it to the deal owner. The task appears in that owner's Do now list on the home screen and on the Tasks screen. It carries no due date, so it sits below the tasks that have one. To change the 60 days, press Set up, which appears once the automation is on, change the number under Renewal prep window and press Save these rules. Tasks are created once a day, around 10:00 Japan time. Task names follow the workspace language.

Five things to know.

- A deal with no contract end date appears in neither the column nor the tasks. Nothing fills it in for you. The reverse also holds: an open deal with a date gets a task too, so enter dates on won deals only. A deal with no contact and no company gets the task but never shows in the Renewal column
- The Customer Success list shows only contacts whose lifecycle stage is Customer. Winning a deal does not move the contact to Customer on its own. In the contacts list, tick the people you need, open Change stage... and pick Customer
- If the deal has no owner, the task appears in nobody's Do now list. It still appears on the Tasks screen. Check the owner when you enter the date
- The Open renewals & retention link at the top of Customer Success leads to a list that excludes won deals. For renewal dates on won deals, use the Renewal column in the customer list
- After a renewal is agreed, pushing the contract end date out a year is manual. The only notification is the task; no email is sent. The Health column stays at Unscored until you turn on the Health-score calculation automation

## Your first step

This week, open the won deals that have a live contract and enter the Contract end date and the owner. If there are many, the ten closest renewals are enough.

Then open Automations and turn on Renewal-date management. The next daily batch creates a task for every deal ending within 60 days and hands it to the owner. At next week's pipeline meeting, check that those tasks are sitting in Do now.

The demo takes only an email address. Pick "B2B sales" and you can look at the Renewal column in Customer Success on the same screen. [Try the demo](https://crm.consilegy.com/demos)
