---
title: "Japan lead handoffs: record the buyer action behind the score"
description: "Your Japan team hits its MQL target, but pipeline does not move and local sales says the leads do not land. Handing off on behavior is not a new idea. What matters in Japan is which behaviors you can actually capture in large multi-stakeholder deals, how to migrate from the score-based MQL rule without breaking your numbers, and how often to change the definition."
publishedAt: 2026-07-29
updatedAt: 2026-10-17
category: marketing
principle: "Define the handoff on the buyer's evaluation behavior, not on attribute score. If your team cannot explain in one line why a lead was passed, the criteria are not yet written down."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

Your Japan team reports that this month's MQL target was met, yet pipeline barely moves and local sales says the leads do not land. If you keep responding by tuning the scoring model, the complaint will not go away.

Sales does not act on a score. It acts on whether there is a reason to move now.

Handing off on behavior rather than score is not a new idea.

This note is about what comes after it in Japan: which behaviors you can and cannot capture in large Japanese deals, how to move off the score-based MQL rule that is already running without breaking your trend lines, and how often to change the definition.

If those decisions remain open, the existing score rule is likely to stay in use.

## Why "MQLs are up, pipeline is flat" happens

Marketing says it passed the lead because the score crossed the threshold. Sales says the buyer is not ready to pursue.

Both are right, and they do not connect, because the two sides never agreed on what a passable lead is.

Survey data on how each side sees the other is covered in [Four reasons to record when Japan sales returns a lead](/en/articles/record-why-leads-come-back/).

For a foreign SaaS entering Japan, the threshold usually comes from headquarters and was tuned on another market's signals.

An attribute-only or single-action rule (right title, right company size, one whitepaper download) tells your local rep nothing about where the buyer is in their internal process.

## Attributes do not tell you how far the evaluation has gone

A joint survey by IDEATECH and Hiroyasu Kitagawa (published April 2026, n=307, limited to buyers who participated with at least one colleague in purchases of 3 million yen or more, so it reflects larger, multi-stakeholder deals; it is also a vendor-sponsored survey) found that by the time serious conversations with a vendor begin, the buying process is on average about 40% complete.

The survey does not compare score and behavior as predictors of pipeline. What follows is our reading.

If buyers move this far before talking to a rep, what the rep needs to know is how far they have moved.

Title and company size do not change as the evaluation progresses. Progress shows up in behavior: what was viewed, by whom, and what was requested.

## In large Japanese deals, separate the behaviors you can capture from the ones you cannot

The first problem with a behavior-based rule is whether the behavior can actually be recorded.

A separate joint survey by IDEATECH and Hiroyasu Kitagawa of Demagen Research (published 9 June 2026, fielded 25 to 26 May 2026, n=325, limited to people who took part with at least one colleague in a Japanese purchase of business software or IT infrastructure worth 5 million yen or more per year; a vendor-run survey-as-PR exercise) found 58.5% of those deals involved seven or more people.

In a seven-person evaluation it is unlikely all seven fill in your form. Most of the people visiting your site will not have a record in your CRM.

That splits behaviors into two groups.

**Behaviors you can capture.** Activity by known contacts, people who have submitted a form before. Pricing page views, comparison document requests and case study views can be tied to the person in most marketing automation tools.

Page tracking generally relies on browser cookies, though, so visits from another device or with cookies cleared are not counted.

**Behaviors you can capture only under conditions.** "Several people from the same company visited" can only be counted when each of them is a known contact associated with the same company record.

Seeing colleagues who never submitted a form at the company level requires a separate feature that infers the visiting company from the IP address or similar.

Whether you have it, and how accurate it is for Japanese companies, depends on the tool and the contract.

Write "three or more visitors from the same company" into the rule without this distinction, and the only accounts that qualify are the ones where several people have already enquired.

The account where one person is quietly building the internal case early never gets passed.

So build the rule on conditions that a single known contact's behavior can meet, and use company-level conditions to raise priority when they are available.

Make company-level conditions the core of the rule only after you have confirmed that anonymous visits are actually being matched to companies.

## Run the new rule next to the existing score before you switch

In most setups, an automation already marks a contact as MQL once the score crosses the threshold.

Switch it off mid-month and the MQL count changes meaning halfway through, and the month can no longer be compared with the last.

Do it in three steps.

**1. Record the behavior condition in its own field.** Leave the existing score alone and add a field that records whether the behavior condition was met.

**2. Count both for one quarter.** Split the leads passed under the old rule by whether they also met the behavior condition, and compare how many of each became opportunities. Also count leads that met the behavior condition but were never passed under the old rule.

That comparison, not a survey, is your evidence for whether behavior works better in your Japan funnel.

**3. Switch at the quarter boundary.** If the behavior-based group converted better, move the MQL rule to the behavior condition. Record the switch date and a rough conversion factor against the old rule on the definition sheet.

Do not reclassify contacts that are already MQLs.

In HubSpot, lifecycle stage by default only moves forward, and moving it back requires clearing the value first.

Leave past MQLs as old-rule MQLs, apply the new rule from the switch date, and draw the line at that date when you compare.

## Review weekly, change the definition quarterly

The handoff line gets refined as you run it.

Change the definition every week, though, and the MQL count measures something different each week, so nobody can read the trend.

Keep the two apart.

- **Every week, look.** Look at the leads sales declined and why. Have sales pick the reason from a fixed list rather than free text; how to set up that list is covered in [Four reasons to record when Japan sales returns a lead](/en/articles/record-why-leads-come-back/). The weekly session handles one input only, which behaviors turned into opportunities, and does not touch the definition.
- **Once a quarter, change.** Use what the weekly reviews collected to add or drop conditions or move thresholds. Changing definitions only at a quarter boundary follows the same rule as [How to Define a Lead Count in Japan So HQ and Japan Agree](/en/articles/what-is-a-lead-count/).

Localize this for the Japanese buying process on top of [Japan GTM and messaging](https://consilegy.com/en/services-en/japan-market-gtm-messaging/) work.

**Define the handoff on the buyer's evaluation behavior, not on attribute score. If your team cannot explain in one line why a lead was passed, the criteria are not yet written down.**

## Common mistakes

- **Reusing the global scoring model unchanged.** A threshold tuned to another market's signals tells your Japan rep nothing about how far a buyer has moved before the first conversation. Redefine the passable lead on local evaluation behavior.
- **Writing company-level conditions you cannot capture.** "Multiple visitors from the same account" only works for known contacts linked to the same company, unless anonymous visits are actually being matched. Otherwise the rule only passes accounts that were already obvious.
- **Switching the MQL rule overnight.** Run the behavior condition in parallel for a quarter, switch at the boundary, and leave existing MQLs where they are.
- **Answering the complaint with a new scoring build.** If nobody can say in one line why a lead was passed, the problem is undefined criteria, not an imprecise score. Pull ten recently passed leads and write the reason for each; the ones you cannot explain show you where to start.

## Related reading

Whether "attended" and "downloaded" count as evaluation behavior is a separate question, handled in [your Japan webinars fill up, your pipeline does not move](/en/articles/webinar-next-step-not-attendance/).

Other notes on the same problem are collected under [Demand generation](/en/category/marketing/).
