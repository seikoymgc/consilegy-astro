---
title: "You bought a CRM, started with Settings, and it is still empty"
slug: "empty-crm-stalls-at-setup"
lang: "en"
category: "setup"
pain: "Right after buying a CRM the team starts by configuring stages, fields and automations, reps go back to the spreadsheet while everyone waits for the decision meeting, and months later there is still not one deal in it"
feature: "Business-type editions (one question at sign-up prepares the pipeline, automations and menu)"
screens: "First screen \"Let's get started\" / \"What best matches your business?\" \"B2B sales\" \"B2C subscriptions\" \"Project services\" \"Reseller\" / \"What's your role?\" \"Get started\" / \"How this CRM fits together\" \"Go to Home\" / Role switcher at the top of the sidebar \"All\" / Deals list \"Columns\" (Visible columns)"
segment: "b2b"
edition: "b2b"
sources: "src/app/onboarding/onboarding-flow.tsx / src/app/onboarding/workspace-map-step.tsx / src/lib/workspace-map.ts / src/lib/editions/index.ts / src/lib/editions/provision.ts / src/lib/pipelines/provision.ts / src/app/api/orgs/route.ts / src/lib/revops/catalog.ts / src/lib/personas.ts / src/components/deal-list.tsx / src/components/app-sidebar.tsx / src/lib/i18n/translations.ts"
date: 2026-10-02
author: "Seiko Yamaguchi"
---
Monday, the week after the contract is signed. The person who runs sales ops on top of their real job opens the admin screen. No deal stages. Fields to define from scratch. Dozens of menu items. So they open Settings and book a meeting to agree on stage names. The first slot everyone can make is two weeks out.

For those two weeks the reps keep using the spreadsheet. The meeting splits over whether "Proposal" and "Quote" are one stage or two, and the decision gets parked. Three months later the CRM has settings and no deals.

This is not one company. In eight years of implementing HubSpot and Salesforce, most rollouts I saw stall did not fail because people stopped using the tool. They stalled in configuration, before anyone started.

## What you lose is not setup time. It is every deal that moved while you were setting up

Slow setup is not the real cost. The real cost is that no deal goes in until setup is finished.

Say you have five reps, five new deals a week, and six weeks until the stages are agreed. That is thirty deals whose history lives in a spreadsheet and in people's heads. On the day setup is done, thirty deals of retyping are waiting. Nobody does the retyping, so the CRM goes live empty.

There is a second problem. Stages decided before use usually change once real use begins, because you only find out where deals get stuck once real deals are in. A meeting held in front of an empty screen is trying to reach a conclusion with no evidence.

I do not recommend designing your stages first. Put deals in, then fix only what does not fit. Reversing that order is what keeps a rollout moving.

## In Revenue CRM, the pipeline and automations exist the moment you answer the first questions

You do not start in Settings. The first screen, "Let's get started", asks a few questions, and when you press "Get started" the workspace opens already shaped for your kind of business.

It asks for the organization name, "What best matches your business?", "What's your role?", company size, and optionally your biggest pain. The business question has four choices: "B2B sales" (manage companies and deals), "B2C subscriptions" (manage customers and renewals), "Project services" (track projects, delivery, capacity) and "Reseller" (track renewals and churn risk).

Three things are ready when you press the button.

First, deal stages. A "Sales pipeline" is created with seven stages: Prospecting, Discovery, Proposal, Quote, Negotiation, Closed won, Closed lost. You can enter today's deals without waiting for the naming meeting.

Second, automations. Form submission handling, duplicate detection, sales rep auto-assignment and first-touch task creation run for every organization from the start. Choosing "B2B sales" adds two more, switched on: "Deal stall alert" and "Won processing". One notices deals that stopped moving, the other hands a won deal to the next step. Automations that send email sequences on their own are not on by default, because the sending domain has to be verified first. You turn those on yourself once that is done.

Third, wording and menu. Under "Project services", deals are called projects. Under "Reseller", the "Delivery" and "Capacity" menu items are not shown, and the probability column in the deals list starts hidden (bring it back from the "Columns" button). Under "B2C subscriptions", Companies, Deals, Forecast and Quotes are not shown. You do not get a row of screens that will stay empty.

After "Get started" there is one more page, "How this CRM fits together". For "B2B sales" it is five steps in order: "Capture", "Move deals forward", "Nothing slips", "Read the numbers" and "Keep them". The sidebar starts narrowed to the role you picked, and everything else is one click away: press "All" in the role switcher at the top of the sidebar. You can reread the page any time in Help under the same title.

What you get is a starting point. The seven stages may not be the words your team uses. Even so, noticing "we never needed these two as separate stages" after ten real deals is faster and more accurate than debating names in front of an empty screen.

## The first step

This week, skip the stage meeting. Keep the default stages and enter just five deals that are live right now. As you go, write down every deal where you hesitated over which stage to pick. Those hesitations are the list of what to change. Because the list comes from five real deals, the meeting is short.

If you would rather see the screen first, the [demo](https://crm.consilegy.com/demos) opens with just an email address.
