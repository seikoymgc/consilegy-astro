---
title: "Your Japan team wants records hidden. Almost none of it is confidentiality."
description: "When a global SaaS company rolls out its CRM in Japan, the local team asks for visibility restrictions HQ has never granted anywhere else. Most of those requests are about who owns a record, not about what is in it, and the two break in completely different ways after go-live. Japanese survey data (n=101, n=1,545) and the question to ask before you touch the permission model."
publishedAt: 2026-08-30
category: crm
principle: "Hiding a field is cheap and reversible. Hiding a record partitions the organisation and cannot be reported around. Separate the two requests before you edit the permission model, because only one of them is about confidentiality."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

The Japan rollout reaches the permission model and, for the first time in the project, nobody argues. The local team lists what must not be visible. HQ, wanting the launch to go well, agrees to most of it.

Six months later the same team reports that they cannot find anything, and the regional forecast has to be assembled by hand.

Nothing was misconfigured. The requests were simply never sorted before they were granted.

## Sort the requests by what they hide, not by who asked

Write out what the Japan team wants restricted and it separates cleanly.

- Reps should not see accounts owned by other reps
- One business unit should not see another unit's deals
- Deals in progress should not be visible upward until the number firms up
- Cost, margin and credit data should not be visible to sales

The first three are about who owns the record. Only the last is about what the record contains.

Only the last one is a confidentiality requirement. The other three are about exposure.

That is not a criticism of the Japan team. In Mazrica's SFA/CRM survey (published 28 January 2025, fielded 25 to 28 November 2024, n=101 Japanese B2B sales managers and team leads; run by a vendor that sells SFA software, with a small base, so read it for ordering rather than precision), the fifth most common reason reps gave for not entering data was "I don't want my results and my process visible to other people," at 27.7%.

The feeling is real. It is not a control requirement, and the permission model is the wrong instrument for it.

## Field restrictions are reversible. Record restrictions partition the company.

The difference only shows up after go-live.

Hiding a field costs nothing. A rep who cannot see margin still runs the deal, because they never needed the number to run it. Turn the restriction off later and nothing has to be rebuilt.

Hiding records splits the organisation once per rule. Restrict by owner and every account handover needs a manual grant. Restrict by business unit and the regional roll-up breaks, which is the moment HQ discovers that Japan's number now arrives as a spreadsheet.

Worse, the partitions multiply. Each person who cannot see something they need produces one more exception group, and past a certain count nobody in the company can say who can see what.

The endpoint is visible in the same survey. The third most common complaint about using SFA and CRM was "necessary information is not properly shared," at 39.6%, effectively level with "data entry and updating is cumbersome" at 43.6% and "field reps don't enter information" at 40.6%.

HubSpot Japan's annual survey (published 19 February 2024, fielded by Macromill, n=1,545 sellers at companies of 51 to 5,000 employees; a survey by a company that sells CRM) found the same pattern from the data side. Among difficulties with using data, "data within the sales organisation is not properly managed" came in at 28.1% and "data integration with other departments has not progressed" at 24.4%.

HQ tends to treat the entry problem and the sharing problem as separate workstreams. In a Japan rollout they usually come out of one configuration decision.

## Make them write the reason in one line before you touch the model

Ask for the reason at the moment the request arrives, in writing, in one line.

If the answer names a law, a contract clause or personnel data, restrict the field. If it does not, the request is about record ownership and it goes on hold.

Held requests get two things instead. First, an operating rule that assumes visibility. "Do not contact an account you do not own" is a norm, enforceable by a manager, and it does not partition anything. Second, a default view. If a rep opens the CRM and sees their own accounts first, the daily irritation disappears. Not being able to see something and not having to look for it feel identical on Monday morning, and the second one is almost always what was actually being asked for.

There is a Japan-specific reason to hold the line here rather than concede it as a cultural accommodation. Account ownership in a Japanese sales organisation is often tied to seniority and to how someone is evaluated, so a visibility request can be a request about standing rather than about data. Granting it in the permission model freezes an internal arrangement into the system, where the next reorganisation will have to break it out again.

If you do decide to partition records, attach one condition. Name the role that produces the company-wide numbers first, and keep full record access on it. Skip that and the next quarterly forecast turns into a permission redesign.

**Hiding a field is cheap and reversible. Hiding a record partitions the organisation. Sort the requests before you edit the model, because only one kind is about confidentiality.**

## Common mistakes

- **Reading granularity as control.** The number of permission groups and the strength of governance are not related. Past the point where one person can explain the model, governance is weaker, not stronger.
- **Creating the exception group in the meeting.** Granting takes five minutes; revoking needs an approval. Set the review date at the moment you create it.
- **Porting the legacy permission model.** Workarounds built around the constraints of a system you are replacing arrive as unexplained complexity in the new one, and by then nobody remembers the constraint.

## Related reading

The same "we want ours separate" request shows up one layer down in the pipeline, and it is worth reading alongside this: [your Japan team wants its own pipeline, give them four fields instead](/en/articles/split-pipeline-by-department/).

Other notes on the same problem are collected under [CRM adoption](/en/category/crm/).
