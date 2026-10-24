---
title: "Measure your Japan system rollout before go-live, not after"
description: "When HQ rolls out a new CRM or sales system to Japan, the next quarterly review asks what changed. Without the same number measured before go-live there is nothing to compare against, because the new system holds no history. Pick one Japan workflow, define what counts as a case, make sure its start and end timestamps survive the rollout, measure before migration work begins, and agree the review date and threshold in the approval."
publishedAt: 2026-10-24
category: data
principle: "Without the same number measured before go-live, a system rollout has nothing to be compared against. Pick one Japan workflow, measure it before migration work starts from records that will still exist afterward, and agree the review date and threshold at the same time."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

HQ rolls out a new CRM, or a quoting tool, or an AI assistant, to every region. Six months later the quarterly review reaches Japan and asks the obvious question: what changed?

In my reading, the Japan country manager usually struggles to answer with a number not because there is no data after go-live, but because there is none from before to compare it with.

Skipping measurement altogether is common even among large Japanese companies. JUAS, the Japan Users Association of Information Systems, surveys them every year. In its 2026 edition (fielded September to October 2025, 957 listed and comparable companies responding), the question on measuring the effect of generative AI (n=507) found that 51.9% did no measurement at all, down from 59.8% the year before. The most common method was measuring hours saved, cited by 39.4% of respondents; only 6.5% measured monetary impact.

The question covers generative AI, not CRM, and it does not ask whether anyone took a baseline. These are large companies, so do not read the figures as representative of smaller firms. What it does show is that even the most talked-about investment goes unmeasured in about half of cases. Do not assume your Japan rollout will be measured unless HQ makes it part of the approval.

## After go-live there is nothing left to compare against

A new CRM only holds data from the day it went live.

Before that, the Japan team's process lived in Excel files, email folders and people's heads, often in Japanese and in formats HQ never saw. Try to rebuild it afterward and what you get is a memory: "quotes used to take about two days." Nobody can check whether it was two days or four.

Definitions also shift. If the global system counts an opportunity or a lead differently from the local spreadsheet, Japan's numbers move even if nothing about the work changed. The difference is a definition, not an effect.

In [AI time saved by your Japan sales team needs a destination](/en/articles/ai-time-saved-needs-a-destination/), I suggested comparing teams over the same period instead of before and after. That metric could not be reconstructed for the period before the rollout. When the pre-go-live records can be kept, keeping them is simpler. This note is about how.

## Hours saved is easy to report and does not answer the review's question

It makes sense that hours saved was the most common measure in the JUAS survey. It is easy for the rollout team to report.

The survey does not say how those hours were measured. But hours saved can be produced as an estimate (minutes saved per task times the number of tasks) with no pre-go-live measurement at all, and it says nothing about where the time went.

So measure what the work leaves behind: elapsed days and counts.

Be clear about what that tells you. A shorter time from inquiry to first reply means the workflow changed. It is not revenue impact, and it should not be reported to HQ as return on the investment. Why the two need to be reported separately is covered in [When Japan reports a campaign is working, ask what has closed since](/en/articles/effect-needs-a-closed-outcome/).

## Pick one workflow, define a case, and make sure its timestamps survive go-live

Decide three things when the rollout is approved. The rollout lead in Japan does the work; the HQ sponsor who approved the budget and the Japan country manager agree which workflow.

1. **Pick one workflow with a clear start and end that happens a few dozen times a month.** "Inbound inquiry to first reply." "Quote request to quote sent." A monthly forecast close happens once a month and will not give you enough cases. "Improve sales efficiency" is not a workflow. Limiting it to one keeps the result traceable: you can tell what moved the number
2. **Write down in one line what counts as a case and what is excluded.** Is a second inquiry from the same company a new case? Does a revised quote count? Are recruiting and vendor emails excluded? If this differs before and after, the comparison means nothing
3. **Make sure the start and end timestamps survive the rollout.** Before go-live they usually come from email: when the inquiry arrived, when the quote was sent. A CRM rollout often replaces exactly those records, with web forms and quotes sent from the CRM. So ask the rollout lead which date fields will hold the same start and end after go-live, and have them in place at launch (for example, email sync on and a "first reply" or "quote sent" date). Which standard fields can do this in HubSpot or Salesforce depends on your setup; check it in your own instance. If there is a parallel-run period, pull the same cases from both the old records and the CRM and confirm they agree before switching over

## Measure before migration work starts, from records the rollout lead can already see

Take the baseline in the four weeks before migration work and training begin. In the weeks just before go-live, people are testing migrated data and sitting in training, and the numbers from that period are not normal. Four weeks ensures one month-end is included.

A few dozen cases are enough; the goal is the order of magnitude and the spread. Do not ask the Japan team to log anything new. Pull from records the rollout lead already has access to, such as shared inboxes and shared folders. If the evidence sits only in personal mailboxes, ask reps for a list of timestamps rather than the emails themselves, or get IT and the Japan country manager to agree before anyone looks.

Keep more than the median. Save a list with the case ID, start time, end time and elapsed days for each case, together with the period measured. With small samples and wide spread, compare medians and look at unusually long cases separately in the list.

If Japan goes live team by team, you can also compare a team that is live with one that is not, over the same weeks. That helps separate out seasonality and deal mix.

## Agree the review date and threshold before go-live, and write them into the approval

Work often slows down for a while right after go-live, while people learn the system. So fix the comparison date in advance. Three months after go-live is a reasonable default.

On that date, the rollout lead produces the number from the same records, the same case definition and the same method, and saves it as the same kind of list. CRM reports built on current records can change past values when fields are updated later, so keep the list as it stood on the review date. The reasoning is in [Japan's conversion rate changed after you reported it to HQ](/en/articles/reports-recalculate-the-past/).

Write the threshold as a number too: "If the median has not moved from X days to Y days at three months, we review the configuration and how it is being used." This is a trigger for a review, not proof of impact. A before-and-after comparison also picks up seasonality and staff changes, and a trigger is about the precision it can support. Set the threshold afterward and it tends to land wherever the result happens to be. The same logic of deciding the date and the rule up front is in [Give Japan programmes a renewal date and a decision rule](/en/articles/campaigns-expire-unless-renewed/).

Put three lines in the rollout approval: the workflow and case definition, the pre-go-live number with its period, and the review date and threshold. When the quarterly review asks what changed, the conversation can start from those three lines and the saved list.

**Without the same number measured before go-live, a system rollout has nothing to be compared against. Pick one Japan workflow, measure it before migration work starts from records that will still exist afterward, and agree the review date and threshold at the same time.**

If a rollout to Japan is being approved right now, check one thing first: can someone write down, in one line, which workflow it is supposed to change? If not, there is a decision to make before there is anything to measure.

## Related reading

Before comparing before and after, align the denominator, the same check you would run when Japan's conversion rates do not match HQ's. The steps are in [Your Japan team's conversion rates don't match HQ's? Start with the denominator](/en/articles/define-the-denominator-first/).

Other notes on the same problem are collected under [Data & KPIs](/en/category/data/).
