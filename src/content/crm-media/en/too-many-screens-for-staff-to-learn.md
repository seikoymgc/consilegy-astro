---
title: "Too many screens: staff stop opening the CRM before they learn it"
slug: "too-many-screens-for-staff-to-learn"
lang: "en"
category: "setup"
pain: "The CRM menu is long and mostly irrelevant to any one person's job, so staff ask a colleague where things are, and after a few rounds of asking they go back to the spreadsheet"
feature: "Role-based menu (the role switcher at the top of the sidebar) and asking the AI agent in plain words"
screens: "Role switcher at the top of the sidebar \"Mine\" \"Sales\" \"Marketing\" \"CS\" \"Executive\" \"Admin\" \"All\" / First screen \"What's your role?\" / Top bar \"My account\" > \"What you work on\" / \"AI agent\" (⌘E / Ctrl+E, button at the bottom right) \"Instruct the CRM… (voice supported)\" / Search (⌘K / Ctrl+K) \"Search contacts, companies, deals...\""
segment: "b2b"
edition: "b2b"
sources: "src/components/app-sidebar.tsx / src/lib/personas.ts / src/lib/persona-view.tsx / src/lib/editions/index.ts / src/app/onboarding/onboarding-flow.tsx / src/app/(dashboard)/settings/account/account-client.tsx / src/components/app-topbar.tsx / src/app/(dashboard)/agent/page.tsx / src/components/copilot/copilot-launcher.tsx / src/components/copilot/copilot-chat.tsx / src/components/command-palette.tsx / src/components/command-palette-dialog.tsx / src/lib/i18n/translations.ts"
date: 2026-10-07
author: "Seiko Yamaguchi"
---
The week after the kickoff training. A rep opens the CRM to log one deal. The left menu shows Lists, Forms, Email, Workflows, Lead Scoring, Surveys: a row of names that have nothing to do with selling. "Where do deals go again?" The person at the next desk does not know either, so they message the admin. After the third time asking, the rep goes back to the spreadsheet.

The admin responds by writing a manual. By the time the screenshots fill a few dozen pages, the screens have changed.

This is not one company. In eight years of implementing HubSpot and Salesforce, most teams that never adopted the tool were not short of features. Each person was simply looking at far more screen than their job needed.

## What you lose is not learning time. It is people deciding the tool is not theirs

A long menu is not the problem in itself. The problem is making someone open, every day, a screen lined with items that are for somebody else.

Say you have five reps, each spending one minute finding the right screen, ten times a day, over a twenty-day month. That is a little over three hours a month per person, around seventeen hours for the team. And that is the smaller loss. The bigger one is the conclusion people draw: this is a tool for the admin, not for me. Someone who believes that enters the minimum they are told to. The numbers never line up, and the spreadsheet comes back out in the pipeline meeting.

More training does not fix this. Cutting what there is to learn does. I do not recommend the all-hands session where everyone is walked through every screen.

## In Revenue CRM, pressing a role cuts the menu down to that role

At the top of the sidebar there is a row of role buttons: "Mine", "Sales", "Marketing", "CS", "Executive", "Admin" and "All". Press one and the menu narrows to what that role uses.

In the B2B sales edition, "All" shows 31 menu items. Press "Sales" and it is 20. Six are there for every role (Home, AI agent, Dashboard, Inbox, Internal wiki, Settings), and Sales adds fourteen: Deals, Contacts, Companies, Tasks, Activities, Calls, Forecast, Pipeline review, Drafts waiting to send, Sequences, Quotes, Products, Capacity and Delivery. "Marketing" is 12 and "Executive" is 9.

"Mine" is the sum of the roles you picked on the first screen under "What's your role?". You can pick more than one, so someone who does both sales and marketing sees both sets. In a small company most people wear two hats, which is why it does not force a single choice. To change it later, open "My account" in the top bar reselect under "What you work on", then press "Mine" in the sidebar.

Nothing is deleted. Press "All" and every item is back. The view you chose is remembered in that browser, so it is the same the next time you open the CRM.

## Instead of memorizing where things are, ask for what you want

Even with a shorter menu, there will be moments of "which screen shows that?". Do not go looking. Ask the AI agent.

It opens from any screen with ⌘E (Ctrl+E on Windows), or from the "AI agent" button at the bottom right. Type something like "Top 5 deals by amount" or "Show me the funnel status". It handles search, aggregation, creating contacts and tasks, and semantic search of documents. You can also speak instead of typing.

If you already know the name of the person or company, search is faster: ⌘K (Ctrl+K) searches contacts, companies and deals.

That leaves three things for staff to remember: their own role's menu, ⌘E and ⌘K.

## The first step

This week, skip the all-hands walkthrough. Ask each person to open "My account" and check that "What you work on" covers every hat they wear. It takes a few minutes. Then agree on one screen per person to open every day: Deals for a rep, Forecast for the owner. Everything else can wait until the day it is needed, and on that day ⌘E will do.

If you would rather see the screen first, the [demo](https://crm.consilegy.com/demos) opens with just an email address.
