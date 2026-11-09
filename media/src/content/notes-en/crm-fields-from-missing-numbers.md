---
title: "Japan CRM fields: start from the numbers decisions lacked"
description: "Japan CRM field requests should start from recent decisions, not from a wish list. Take the last few things the Japan team and HQ decided about Japan, write down the number each one was missing, and sort it into a missing report, a missing date or a missing record. Only the last one needs a new field."
publishedAt: 2026-11-07
category: crm
principle: "Decide new Japan CRM fields from the numbers recent decisions were missing. Sort each missing number into a missing report, a missing date or a missing record, and add a field only when the record itself does not exist."
canonUrl: https://consilegy.com/en/services/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

At the quarterly review, HQ decides to tighten the discount approval rule for Japan. The basis is a spreadsheet the Japan sales lead keeps locally, plus a sense that "discounts have been creeping up." The CRM shows every closed-won amount. It says nothing about why any discount was given.

Next quarter someone will ask whether the tighter rule worked, and nobody will be able to reproduce the number behind the decision.

So the Japan country manager sends the HQ CRM admin a list of eleven new fields. HQ approves some, refuses others, and three months later the Japan pipeline meeting still runs off a spreadsheet.

The list was built in the wrong order. Fields first, then data entry, then the hope that the numbers will start to mean something.

**New Japan CRM fields should come from the numbers recent decisions were missing, not from what the team would like to record.** Write the missing numbers down and some of them turn out not to need a new field at all.

This note is for HQ RevOps and CRM admins who receive field requests from Japan, and for the country managers who write them. If the question is where an approved field should live (global standard, Japan account record or outside the CRM), that is covered in [Why only Japan keeps adding fields to your global CRM](/en/articles/global-crm-japan-only-fields/). This note is about what goes on the list in the first place. If the numbers are all there and the meeting still cannot decide, the problem is the decision rule, not the fields: see [Before you add another Japan dashboard, write the threshold](/en/articles/threshold-before-dashboard/).

## More fields do not make the meeting decide

Data that exists but does not get used is a common state, in Japan as elsewhere.

In HubSpot Japan's 2024 survey of Japanese sales organisations (published February 2024, fielded November 2023; 1,545 executives, sales leaders and sales reps at companies with 51 to 5,000 employees in Japan, run by Macromill for HubSpot), 79% said they had some difficulty using data. Asked what they rely on for decisions, 44.5% said data and 55.5% said human judgment.

The difficulties listed include having few or no people who can use data (28.6%) and sales data not being properly managed (28.1%). It is HubSpot's own survey, and it does not ask whether missing fields are the cause.

So the survey tells us only that many people in Japanese sales organisations are not using data for decisions. The rest is my view: you can only say which data is needed once you know what is being decided. Add fields before that, and data entry grows while the gap stays where it was.

## Write down what was decided, what was used and what was missing

Ask a team which numbers it will need, and the answers drift toward "nice to have." So start from the past. A decision already made is a fact, and it shows exactly what was on the table.

1. **Pick three to five decisions about Japan from the last four weeks.** From the Japan pipeline meeting, the marketing and sales sync, and the HQ business review where Japan came up. Include decisions to wait. Waiting is a decision too
2. **For each, write four things.** What was decided. Which number people actually looked at. Which number they wanted but could not find. What they used instead: asked the rep, a local spreadsheet, experience
3. **Read the last column.** "Asked the rep" means the information exists in someone's head. "Experience" may mean it exists nowhere yet

The CRM admin or the Japan sales operations lead drafts it. The person who chaired each meeting confirms what they actually wanted to see. If they disagree, use their words.

Keep the list in both English and Japanese. The Japan team will describe what was missing more precisely in Japanese, and HQ needs to read it without a translator in the loop.

| Decision (example) | Number looked at | Number missing | Used instead |
|---|---|---|---|
| Approve another Japan trade show budget | Japan leads from events | Pipeline created from those event leads | The country manager's impression |
| Escalate five stalled Japan deals to the country manager | Deals by stage | Days in the current stage | Asked the reps |
| Tighten the Japan discount approval rule | Closed-won amount | The reason each discount was requested | A local spreadsheet |

All three decisions were made. The meetings did not stop. But each rested on memory, and next quarter nobody will be able to reproduce the number behind it.

## Most missing numbers need a report or a date, not a field

Do not send the third column to the admin as a field request. Sort it first.

| Type | What is true | What to add |
|---|---|---|
| Missing report | The record is already in the CRM. Nobody has a view that shows it | A report or a list view |
| Missing date | The state is recorded, but not when it changed | Use the dates the CRM keeps automatically. Add a date field only if none exists |
| Missing record | The information is nowhere in the CRM | A field |

In the examples, event-sourced pipeline is probably a missing report. Check by opening one lead from the last event and following it to a deal. The decision is about a specific event, so a lead source value like "Trade show" is not enough. If each event is tracked as a campaign and the campaign is connected to the resulting deals, one report filtered to Japan answers it.

If you cannot follow it, it is a missing record, but the fix is not a field for reps. Event leads often arrive by import, and the import is where the event gets lost. From the next event, attach the campaign at import. Do not backfill past events.

Days in stage is a missing date. HubSpot records the date a deal entered each stage automatically. Salesforce keeps stage, amount and close date changes in opportunity history as standard. Whether you can report on them depends on your edition and configuration, so check before promising the Japan team a report. Do not create a field that asks reps when the deal last moved.

The reason for each discount is a missing record. Matching a competitor, fitting the buyer's budget ceiling, a volume deal: in this example the requests went through email and conversation, and the reason never reached the CRM. That is the one that needs a field.

On the projects I have worked on, only some of the missing numbers needed a field, and it was common to find the data already there but unreadable. I have no survey that counts this, which is why each line is sorted before anything is built.

One case deserves its own line. If the missing number is how far the buyer's internal approval has moved, that is a gap in the global design, not a Japan quirk. It belongs in the global standard as a single deal field, as [the note on Japan-only fields](/en/articles/global-crm-japan-only-fields/) explains.

## Add a field only if it is known at entry and has a decision date

Not every missing record becomes a field. Add it only when both are true:

- **The value is known when it is entered.** The rep knows why they are asking for a discount at the moment they ask. A rep's sense of likelihood varies from person to person, and until the criteria are aligned it should not be the only basis for a decision
- **There is a date when someone will decide with it.** "We review the Japan discount rule at the start of next quarter" qualifies. "It would be good to track" does not

Whether to make it required is a separate call. Make a field required only if its value is known at the moment of entry and a wrong value would be noticed by someone within a week.

Do not create a new moment of data entry either. For the discount reason, put a short picklist inside the discount request the rep already submits.

When you add it:

- **Expect blanks before the start date.** Older deals have no value. Read the field only for requests made after it went live. Do not ask the Japan team to dig out old emails to backfill it
- **Check what reads and syncs it before you create it.** Integration field mappings, field-level permissions, page layouts and any feed to your data warehouse. The CRM admin decides whether it is added, and writes the reason in the field description
- **Record the date it went live.** On the decision date, count the discount requests made since then that have a reason filled in. If there are too few, postpone the decision and record that you postponed it
- **Write the decision in the field description.** For example: "Used in the Japan discount rule review, start of each quarter." If nobody has used it six months later, that is the reason to retire it

## What I would not start with

**Asking each team in Japan for the fields they want.** You will get a list. It will be a list of things that would be nice to have, with no decision behind them, and data entry will grow while the meeting stays the same.

**Building a Japan dashboard first.** It helps with missing reports. It cannot show a date that was never stored or a record that was never captured. Sort the list first, then use dashboards for the reports.

**Decide new Japan CRM fields from the numbers recent decisions were missing. Sort each one into a missing report, a missing date or a missing record, and add a field only when the record itself does not exist.**

Before the next Japan field request reaches your admin queue, ask for one line with it: which recent decision was made without this number?

## Related reading

If the new field is a picklist like the discount reason, the picklist decides what you can read from it. Why such lists collapse into one answer for Japan is covered in [When Japan’s lost deals are all recorded as “price”](/en/articles/loss-reason-defaults-to-price/).

Other notes on the same problem are collected under [CRM & SFA](/en/category/crm/).
