---
title: "\"Where are we on that deal?\" You only know if you ask someone"
slug: "asking-people-where-the-deal-stands"
lang: "en"
category: "operate"
pain: "To learn where a deal stands or where the quarter will land, the founder has to ask a rep or wait for someone's spreadsheet"
feature: "The four numbers on Home / Forecast"
screens: "Home \"Today in revenue\": Open pipeline, Weighted forecast, Won this month, Win rate / \"Top deals\" and \"Needs attention\" / Sidebar Sales → Forecast: \"Weighted forecast\", \"Forecast (Closed+Commit)\", \"By owner\", \"By stage\" / Deal edit screen \"Basic info\" and \"Pipeline & forecast\""
segment: "b2b"
edition: "b2b"
video: "3"
sources: "components/home/home-workspace.tsx / app/(dashboard)/page.tsx / app/(dashboard)/forecast/forecast-view.tsx / app/(dashboard)/deals/[id]/edit/page.tsx / components/app-sidebar.tsx / lib/editions/context.tsx / lib/i18n/translations.ts / app/demos/demos-client.tsx / lib/demo.ts / docs/product/操作動画_台本.md"
date: 2026-10-04
author: "Seiko Yamaguchi"
---
Friday, late afternoon. The founder messages the head of sales: "Where are we on that deal?" The head of sales pings the rep. The rep answers from a train. Thirty minutes later the founder gets one line back: "Waiting to hear from them."

The quarter works the same way. Once a week someone walks the floor, collects answers, and types them into a spreadsheet. By the time the founder reads it, the numbers are a few days old.

## What you lose is not the time. It is a shared definition

A forecast collected by asking people means something different for every person who answers. That is the real cost.

The time is real too. Say the founder asks five times a week, and each question stops three people for fifteen minutes between them. That is about five hours a month. You can get that back.

What you cannot get back is the decision made on a bad number. One rep's "looking good" is a verbal yes. Another's is a quote that went out yesterday. Add them up and you have a forecast built on nobody's standard. And the deals nobody asked about sit untouched.

## In Revenue CRM, four numbers on Home answer first

At the top of Home, under "Today in revenue", there are four numbers. Look here before you ask anyone.

- Open pipeline. Total value and count of open deals. If some deals are waiting on the customer, that amount is shown separately
- Weighted forecast. The pipeline adjusted for probability
- Won this month. Amount and count
- Win rate. Won, divided by won plus lost

Below that, "Top deals" lists deal name, stage, and amount. Next to it, "Needs attention" counts overdue tasks, tasks due today, deals whose resume date has passed, and more. The reason "that deal" is stuck is usually sitting in this panel.

## For the quarter, Forecast separates the solid number from the ceiling

For where the quarter lands, open Forecast under Sales in the sidebar. It works by quarter, and the arrows move you between periods.

At the top is "Weighted forecast", and beside it "Forecast (Closed+Commit)". Under those you get the commit floor and the best-case ceiling. "Looking good" turns into two numbers: one you can plan on, one you can hope for. Set a quota for the period and you also get attainment, gap, and coverage. Further down, "By owner" and "By stage" show where the number is concentrated.

How well this screen predicts depends on what goes into each deal. On the deal edit screen, the "Pipeline & forecast" section has Win probability (%) and Forecast category. The categories are Pipeline, Best case, Commit, Closed won, and Omitted. If a deal has no win probability, the calculation uses the probability set on its stage.

One thing to know. A deal only counts in Forecast if its close date falls inside that quarter. A deal with no close date is not counted in any period. Close date is in the "Basic info" section of the same edit screen.

If you would rather ask in a sentence, the "Ask the AI agent" panel on Home has a ready-made prompt: "Where will this month land?" One click.

## The first step

This week, take your ten largest open deals and fill in three fields on each: close date, win probability, forecast category. Do not try to clean up everything. Start with the largest ones, because they move the forecast most.

Then start the next pipeline meeting with Home on the screen instead of the spreadsheet. Before anyone asks "where are we?", everyone is already looking at the same numbers. How to enter a deal is covered in the video "Enter deals and see where they stand".

There is a demo workspace you can open with just an email address. Pick "B2B sales" and you land in a workspace with data, so you can open Home and Forecast and see real numbers. [Try the demo](https://crm.consilegy.com/demos)
