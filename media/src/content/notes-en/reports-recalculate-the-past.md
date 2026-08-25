---
title: "Japan's conversion rate changed after you reported it to HQ"
description: "The number your Japan team sent to headquarters last quarter does not match the same report today, and Japan looks like it is revising its own results. The report is not broken. It recalculates the past every time it opens, and conditions in Japan make that drift larger."
publishedAt: 2026-08-25
category: data
principle: "A report does not store the past. It recomputes it from today's data every time it runs. If a number has to hold, someone has to close the period and save it."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

Your Japan team reported a lead-to-opportunity rate last quarter. Someone at headquarters opened the same report this month, same period, same filters, and got a different number. The read in the room is that Japan is revising its results.

It is not. The report never stored last quarter. It recomputes the past from today's data every time it opens, and several conditions specific to Japan make that recomputation move further than it does elsewhere.

## What is actually happening

Three mechanics, all documented, all boring.

**The date the report counts by can be edited.** HubSpot's own documentation on funnel report types, last updated 19 November 2025, states that legacy funnel reports use the `createdate` property and that this property can be manually modified by users. Any bulk update during a migration moves records into and out of past periods. Japan subsidiaries migrate more often than most regions, out of spreadsheets, out of kintone, out of a domestic sales system that predates the global CRM, and a bulk date correction during that work is normal housekeeping rather than an incident anyone reports.

**Merges rewrite history.** The same document notes that legacy funnel reports rely on contact properties that get reordered during merges, and may show contacts in a funnel because of merge-induced property changes. Japan generates duplicates at a higher rate than the regions your model was calibrated on, because lead capture runs through trade show badges, exchanged business cards, and named-account reps entering the same person twice under two spellings. Deduplication is continuous, so the past keeps shifting under the report.

**Counting rules changed underneath you.** HubSpot's transition from legacy to journey funnel reports changes four things at once: stages must now complete in chronological order rather than merely within the date range, the look-back is capped at five years and shorter for high-event accounts, object creation uses the real timestamp rather than the editable property, and merged contacts are handled differently. HubSpot states plainly that this may result in lower conversion numbers. If your Japan number dropped between two board decks and nobody touched the pipeline, check whether the report type changed before you ask the country manager to explain.

## Why the drift is larger in Japan

Late entry. A survey by Keywalker, fielded 8 to 10 October 2025 through PRIZMA's online panel, n=1,034 sales staff and managers at Japanese companies already running SFA, CRM, or BI tools, found that only 40.2% enter activity into the system immediately. The rest enter at the end of the day (32.2%), a few times a week (11.2%), a few times a month (3.9%), or not reliably at all (12.5%). This is a vendor's own study of a market it sells BI services into, and it is a panel survey, so read it as an order of magnitude rather than a precise figure. The order of magnitude is enough: roughly six in ten entries arrive after the fact, carrying an activity date that lands in a month you already closed and reported.

Then the reporting habit compounds it. In the same study, 58.2% of managers said they use dashboards to check numbers in the sales meeting, while 15.4% said they use them to decide the next action. A number that is only checked can move without anyone noticing.

## What headquarters should ask for

Not a better report. A close.

Fix a closing date, third business day of the month works, and have a named person in Japan save the numbers as of that date somewhere the report cannot reach. What goes into the QBR is the saved value. What the team works from day to day is the live value. The gap between the two is not a nuisance, it is the most useful early warning you have about entry lag in the Japan pipeline.

Move the reporting date to a timestamp users cannot edit, and stop tightening report filters as a fix. No filter changes the fact that the report computes at runtime.

One more thing worth saying out loud to a global team: this is not Japan being unreliable with data. Every region's reports recalculate the past. Japan simply has more duplicates, more migrations, and more delayed entry for the report to recalculate over, and the person who knows that is usually not in the meeting where the number is challenged.

A report does not store the past. If a number has to hold, someone has to close the period and save it.

## Related reading

If the numbers disagree even before the close, the problem is one step earlier, in what each side is counting. That case is covered in "[Your Japan team's conversion rates don't match HQ's? Start with the denominator](/en/articles/define-the-denominator-first/)". Other notes on the same problem are collected under [Revenue data](/en/category/data/).
