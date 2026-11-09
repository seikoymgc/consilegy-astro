---
title: "Split Japan loss reasons by lead source to see what to fix"
description: "HQ marketing usually sees Japan's closed-lost reasons as one regional pie, which tells nobody which programme to fix. Lay the reasons out by the deal's original lead source instead. Where one Japan channel skews to one reason, that reason points to the one thing to change there: who the channel attracts, what it hands over, or when it hands over."
publishedAt: 2026-11-01
category: marketing
principle: "A regional pie of loss reasons gives marketing nothing to change. Lay Japan's lost deals out by original lead source, find the channel whose losses skew to one reason, change one thing in that channel, and judge it on deals created after the change."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

The quarterly business review for Japan ends with a pie chart of closed-lost reasons.

Sales says the reasons are shared with marketing, and they are. HQ demand gen looks at the pie, agrees it is interesting, and next quarter the Japan programmes run exactly as before.

Nobody is ignoring anything. **A regional pie of loss reasons contains no decision that marketing can make.** Knowing that 30% of Japan's losses were "project stopped" does not tell you which programme to change, or what to change in it.

## Sharing the reasons is not the same as returning them in a usable shape

There is some evidence that getting loss reasons back to marketing matters. In Fast Marketing's 2026 survey of Japanese B2B marketing (May 2026, 432 respondents involved in marketing or sales at B2B companies, online panel), 82.1% of respondents whose sales teams shared win and loss reasons after handoff said new bookings were above or roughly on target. Where sharing stopped at whether a lead had been followed up, the figure was 54.3%.

The report itself says this is a correlation, not proof of cause, and the survey was run by a firm that sells B2B marketing support. It does not show that sharing reasons wins deals.

The survey also did not ask how reasons were shared, so teams that simply forward the regional pie may well be counted among those sharing reasons. The question is whether the reasons arrive in a form that lets marketing pick an action.

## A regional total hides the channel that is losing for one reason

Marketing budgets and content are decided per channel. For a Japan team, that list usually includes trade shows, webinars, partner co-hosted seminars, review and comparison sites, and content downloads.

Loss reasons, though, arrive blended across all of them.

Say "could not show a reference of the buyer's size or industry" is 15% of Japan's losses overall, which looks minor. Split by source, and four in ten losses from one trade show carry that reason. The show attracts companies of a size your Japanese references do not cover. The regional 15% is that 40% averaged with channels where it is near zero.

The global channel taxonomy can hide this further. If a Japanese trade show and a partner seminar both roll up to "Events" in the HQ dashboard, the split never appears. Build the Japan table on Japan's own channel list.

## Build one table: lead source down the side, loss reasons across the top

- **Rows:** the deal's acquisition source, at the level marketing actually budgets: which trade show, which webinar series, which partner. Standard source fields are too coarse for this. Salesforce's Lead Source and HubSpot's original source values sit at the level of "Event" or "Offline", which puts a trade show and a partner seminar in the same row. So create one picklist on the opportunity or deal, call it Acquisition Source, and fill it from the campaign when the deal is created: Primary Campaign Source in Salesforce; in HubSpot, the campaign or form associated with the deal (check what your portal carries onto deals at creation). Opportunities created directly on existing accounts get no source by default, so make the field required at creation with a validation rule, and lock it from later edits. If the value can be overwritten, the table changes every month.
- **Columns:** your loss reasons, plus won deals, deals on hold, and deals still open. Hold is counted in its own column, not as a loss reason.
- **Scope:** new-business deals in Japan created in the last two quarters.

The new field only fills for deals created after you add it. For the first table, backfill the last two quarters once with the best value available on the day, and label that table as backfilled. From the second table on, use the locked values.

A related table, with the source held on the company and read against first renewals, is in "[Japan marketing KPIs fall behind when the main number moves](/en/articles/marketing-kpi-when-the-main-number-moves/)." The rows are built the same way; that table asks who stays after the win, this one asks why deals were lost.

One prerequisite. If Japan's loss reasons are mostly "price" or "other," splitting them by source shows nothing. Fix the picklist first; see "[When Japan's lost deals are all recorded as "price"](/en/articles/loss-reason-defaults-to-price/)." Deals that only lack budget timing go on hold rather than lost. If deals were closed as lost for "no budget" before that rule existed, move them to the hold column once before building the table. The hold column can skew by channel too: a source that keeps bringing buyers whose budget cycle has not arrived is something marketing can fix.

Japan volumes are often small. Fold any source with fewer than ten closed deals into "Other" and make no call on it until next quarter. Even ten per row only shows whether there is a clear skew.

Where cycles are long, the deals that close first are mostly early walk-aways. Read only closed deals and early-stage reasons such as "the buyer's project stopped" look larger than they are, most of all in channels with short cycles. The open count on the same row shows how many deals in that channel are still undecided, so you can discount the skew accordingly.

## The reason a channel skews to tells you what to change there

Agree the threshold for a skew before you look. A workable default: the reason's share in that channel is at least 15 points above the Japan-wide share, and at least five losses carry it. If several channels skew, start with the one losing the most deals (or revenue, if you can see it) to that reason, and read the channel's win rate on the same row. A channel with a high win rate and few deals can wait.

**Skews to "no reference of the buyer's size or industry."** The channel attracts buyers your case studies do not match. Change either the references that channel hands out or the audience it attracts. If every Japanese reference is a 300-person company and the channel brings 3,000-person enterprises, redirecting the channel may be faster than producing new stories. On what Japanese buyers need from a case study, see "[Japan case studies: give buyers enough detail to assess the fit](/en/articles/what-to-ask-for-a-case-study/)."

**Skews to "the buyer's project stopped."** Check the channel's open count first, because this reason can look inflated when only early closes are in. If the skew holds, the channel passes people to sales before their project is live. Change the handoff timing for that channel only, by adding one buyer action to its handoff rule ("[Japan lead handoffs: record the buyer action behind the score](/en/articles/handoff-on-behavior-not-score/)").

**Skews to "internal approval stalled."** The channel finds a willing contact who has nothing to take into their internal approval. Change the material handed over around the meeting: a comparison the contact can paste into the approval document, or an ROI model they can fill in with their own figures ("[Give Japanese Buyers an ROI Model They Can Edit Themselves](/en/articles/let-buyers-calculate-the-roi/)").

**Skews to "functionality did not cover the problem."** The channel promises more than the product does. Check whether the ad copy or seminar title reaches beyond the product's scope, a risk that grows when global messaging is translated without being narrowed.

"Lost to a named competitor" happens after the buyer is already comparing, so it is mostly a sales question. Marketing takes back only how often the same competitor appears in that channel's losses.

## Change one thing per channel, and judge it on deals created after the change

For each skewed channel, change one thing. Change the references and the handoff rule together, and you will not know which one moved the table.

Make changes only at the start of a quarter. Look at the table monthly, but changing mid-quarter breaks the before-and-after comparison.

Write the date and the change next to that channel's row. If the change is to a handoff rule, add the marketing automation workflow being edited, the start date, who edits it (the MA admin), and which Japan sales lead agreed. Leads already handed over are not re-scored, and lifecycle stages are not moved back.

To check the change, split that channel's row in two: deals created before the change date and deals created after it. At quarter end, most closed deals in the channel were created before the change, so a single row cannot tell you anything. Until ten deals created after the change have closed, do not judge on loss-reason shares; watch stage progression and the open count instead. Once ten have closed, check whether the skewed reason's share fell, and whether the channel's deal volume held. If the skew disappears because the channel now produces half as many deals, you have narrowed the entrance, not fixed anything.

Do not add a meeting for this. Use the first fifteen minutes of an existing monthly sales and marketing review. The Japan marketing lead and the Japan sales lead look at the table together, with HQ demand gen if it owns the channel budget. Only the meeting at the start of the quarter decides which channel changes what. Marketing builds the change; a change to the handoff rule also needs the Japan sales lead's agreement.

## What we decided against

Having a marketer read every lost deal catches context a picklist misses, but it does not survive a month of thirty losses. Read only the lost deals from the skewed channel, and only a handful.

Making loss-reason shares a marketing KPI also looks tidy. It gives marketing a reason to pull out of channels where losses show up, and once the table feeds a scorecard, people stop recording honest reasons in it.

**A regional pie of loss reasons gives marketing nothing to change. Lay Japan's lost deals out by original lead source, find the channel whose losses skew to one reason, change one thing in that channel, and judge it on deals created after the change.**

At the next Japan review, swap the pie for a table with the lead sources down the side. One row will probably look different from the rest.

## Related reading

How to check a campaign report before calling it effective is in "[When Japan reports a campaign is working, ask what has closed since](/en/articles/effect-needs-a-closed-outcome/)." That note deliberately does not ask monthly reports to break results down by source. The table here is not a report; it is used once a quarter to choose marketing's next change.

Other notes on the same problem are collected under [Marketing](/en/category/marketing/).
