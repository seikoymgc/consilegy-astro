---
title: "Japan's parallel run has an end date but no end condition"
description: "HQ rolls the global CRM out to the Japan entity and grants a three-month parallel run with the local spreadsheet. Three months later the request is for an extension, and a year later Japan's number still arrives by email. The parallel run does not end because nobody wrote down what would end it. Japanese survey data (n=1,545, n=305) and the four steps that actually close a legacy system in a Japan entity."
publishedAt: 2026-09-01
category: adoption
principle: "End a parallel run on a condition, not a date. The legacy system in your Japan entity closes on the day one recurring meeting can only be prepared from the new system, and not before."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

The Japan rollout goes live and the local team asks to keep its existing spreadsheet running for three months. HQ agrees, because refusing at that moment would look like distrust.

Three months later the request that arrives is for an extension.

Nothing has gone wrong with the migration. The parallel run was given an end date and never an end condition.

## A date is not a decision, and by month six the legacy system stops being on the agenda

Look at what the plan actually says. It names a month. It does not name what has to be true for the old system to close.

So the review meeting has nothing to decide with. "The team is not comfortable yet" cannot be argued against, because comfort was never something the project agreed to measure.

Extensions compound. The first one is granted on goodwill, the second one is granted because the first one was. Somewhere around month six the legacy system stops being a thing that gets switched off and becomes a thing that exists, and it leaves the status report.

The cost is not the licence. It is that the same opportunity now lives in two places and no one has declared which is authoritative. Regional numbers stop reconciling, and someone in Japan quietly takes on the job of matching them. That reconciliation work costs more than the duplicate data entry it was created to explain.

## The Japan team goes back to the old file because both routes are still permitted

HubSpot Japan's annual survey (published 27 February 2026, fielded by Macromill on 30 to 31 October 2025, n=1,545 sellers at companies of 51 to 5,000 employees; a survey run by a company that sells CRM) contains the shape of this problem in a different subject area.

Asked about generative AI, employees whose company had only granted permission to use it reached 47.2% weekly usage. Where the company also ran training, 56.9%. Where the company embedded the tool into the process itself, 74.8%.

That is an AI question, not a migration question. But the gap is the interesting part. Permission and training move usage to a little over half. Only building the tool into how work is produced moves it past seventy percent, and that is the same wall a parallel run runs into.

A parallel run is, by definition, the permission stage. The new system is allowed. It is not yet required by anything.

Meanwhile the friction is at its peak. In Hammock's survey of SFA usage (fielded September to October 2021, n=305 executives and board members at companies with 300 or more employees; a vendor survey, and now several years old, so read it directionally), the most common reason given for a sales system not being used was that it takes time to become proficient, at 52.3%. An update that took three minutes in the old file takes fifteen in the new system during the first weeks. That is normal, and it is temporary.

Put those together. A parallel run formally preserves the easier route during precisely the period when the new one is hardest to use. The Japan team is not resisting. They are choosing correctly, given the choice they were handed.

There is a local reason this runs longer in Japan than in other regions. HQ usually finds out about a reverted rollout through a metric, not a message. A Japanese team that has gone back to the spreadsheet will keep updating both for a while, then let one go stale, and will rarely raise it on a global call. By the time the silence is legible, the parallel run is a year old.

## Close the meeting first, then the write access, then the system

Replace the date with one sentence.

"The old system closes when the monthly pipeline review can be prepared from the new system's reports alone." A state, not a month.

Then change that meeting before you change anything technical. Prepare the review only from the new system's reports, and decline material assembled from the old file. That is the moment the new system stops being permitted and starts being assumed, and it is the only step in this list that cannot be skipped.

Next, stop writes rather than deleting. Leave the old system readable. What the team wants to keep is the history, not the ability to keep updating it, and separating those two things makes the decision much easier to get agreement on in a Japanese entity, where an irreversible deletion needs a level of approval that a read-only switch does not.

Last, watch the reads. Count how many times the old system is opened per month, and when that has been zero for two consecutive months, export and close it. At that point the shutdown is administrative rather than a decision anyone has to defend.

The alternative worth considering is a hard cutover on go-live day, and for a simple ledger it works. It fails the moment one field exists only in the local file and the business depends on it, which in a Japan entity is common: approval routing status, the trading-company or reseller layer in the deal, the customer's formal name as it appears on the contract. Parallel running is not the mistake. Starting one without writing its ending is.

**End a parallel run on a condition, not a date. The legacy system closes on the day one recurring meeting can only be prepared from the new system.**

## Common mistakes

- **Debating the extension in the meeting where the deadline falls.** That conversation is settled on sentiment. The only time an exit condition can be written calmly is before the parallel run starts
- **Discovering the local-only fields late.** This is the usual reason a Japan parallel run cannot end. Before go-live, sort every field in the old file by where it lands in the new system. A field that lands nowhere and still drives the work is a design question, not a migration gap
- **Announcing that the old system should no longer be used.** A prohibition that leaves the system usable only sorts the team into people who comply and people who do not. Systems are closed by configuration, not by announcement

## Related reading

Turning the new system from something permitted into something required is the same move described here: [your Japan team will not read the guide, change the weekly meeting](/en/articles/change-the-meeting-not-the-manual/). The exit condition for a parallel run ends up sitting in that same meeting.

Other notes on the same problem are collected under [Change management](/en/category/adoption/).
