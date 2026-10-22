---
title: "Japan marketing KPIs fall behind when the main number moves"
description: "When Japan's main number moves from new logos to renewals and expansion, sales and customer success line up behind it and Japan marketing is left on an MQL target. Before treating the friction as a people problem, connect acquisition source to retention in the CRM and decide what marketing is measured on."
publishedAt: 2026-10-22
category: marketing
principle: "When two teams in Japan start pulling against each other, check whether each team's KPIs still connect to the number the business now runs on before treating it as a relationship problem. Once that number shifts to renewals and expansion, keep the lead target for Japan marketing but add whether the customers it brought in stayed."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

"In the first year, marketing and sales in Japan were close. Now sales and customer success are close, and both of them are frustrated with marketing."

It sounds like a people problem. Sometimes it is, or it is a fight over headcount and budget. But there is one thing worth checking first: whether the number the Japan business runs on moved, and one team's KPIs stayed where they were.

This applies to subscription businesses, and to any business where renewals and expansion are becoming the main source of revenue.

## The two teams that got along were chasing the same number

In the launch phase, Japan's main number is new logos. Marketing generates leads, sales converts them, and both teams look at the same target every week. Part of why they get along is that the target lines up first.

Later, HQ starts asking a different question about Japan. How much of the installed base renews, and how much expands? The main number moves to retention and expansion.

Sales and customer success now share that number. Renewals, upsell, early signs of churn. The weekly agenda is set between those two teams.

Japan marketing is still measured on MQL volume, often against the same global MQL target every other region uses.

## The team outside the main number stops being understood

Marketing hits its lead target and hands leads over. Sales and CS are talking about churn and flat accounts. Each side is right against its own scorecard, so the conversation drifts toward blame.

"We're bringing in customers who were never a fit." "No, it's what happens after onboarding." Without data, that argument has no end, and in most companies the data does not exist yet.

More joint meetings tend not to fix it. When the main number moves again, the pair that clashes simply changes.

## Keep the lead target, and add whether those customers stayed

New business does not stop mattering when the main number shifts. Remove the lead target and the top of the funnel dries up.

What changes is that "how many" gets a second question: did the customers marketing brought in stay? Three things in the CRM make that answerable. Your CRM admin builds them; RevOps and the head of marketing agree the definitions.

1. **Store the first acquisition source on the account.** Report at the account level, not the deal level, because renewal and expansion deals carry no source and will mix into the numbers. When the first new-business deal is created, copy the account's original source (or the primary contact's, if the account has none) into a custom account field and never change it again. Waiting until close risks freezing a value that a re-import or manual edit has already changed. In Salesforce, Lead Source maps from the lead to the opportunity on conversion, but it is blank on opportunities created directly and stays editable. HubSpot has original-source properties on contacts and companies and reportedly on deals too; check the exact names and behavior in your portal. For existing customers, backfill once where the source is known and mark the rest "unknown". Use the same source definitions you use for attribution, so the two do not drift apart
2. **Compare, by source, how many customers survived their first renewal.** Count accounts won and accounts still there after the first renewal. Start the comparison from customers won after the field went live, and fix the comparison window by date. While volumes are small, list counts and churn reasons rather than calculating rates
3. **When the churn reason is "what we were told before signing didn't match", record where that expectation was set.** Use "ads, collateral or webinar", "sales proposal or demo", "onboarding", or "unknown". Expectations are not only set by marketing. Without this split, the field becomes the next tool for blame. Keep churn reasons to around five options, and add any new one at a quarter boundary with the change date noted on the report

Expansion has a place for marketing too. Add an optional "what started it" picklist on upsell and cross-sell deals, entered by sales or CS when the deal is created: around four options plus "unknown". Count how many started from a customer webinar, a case study or a customer-only email, and measure fill rate when the deal moves to the next stage.

Marketing, sales and CS can then look at the same list of accounts. "Lead quality is bad" versus "we deliver to spec" becomes a sharper question: why do customers from this source not make it past the first renewal?

## Leadership decides what goes on the scorecard, and how to handle the one-year lag

The configuration alone will not change behavior. As long as Japan marketing is evaluated on MQL volume alone, nobody on that team has a reason to cut a source that churns, because cutting it lowers their number.

The harder part is time. Whether a customer survived the first renewal is known a year later at the earliest. Put it straight into a quarterly scorecard and nobody sees a result before the period ends.

HQ leadership and the Japan country manager need to decide three things:

- Add "accounts won by source that survived their first renewal" to Japan marketing's scorecard
- Until that data exists, track the count of churns where the mismatched expectation was set by ads, collateral or webinars
- Weight it lightly in year one, and raise the weight the following year once a full comparison window exists

A small marketing team in Tokyo cannot renegotiate a global MQL target on its own. Naming Japan's main number, and rebalancing what each team in Japan is measured on, sits above them.

**When two teams in Japan start pulling against each other, check whether each team's KPIs still connect to the number the business now runs on before treating it as a relationship problem. Once that number shifts to renewals and expansion, keep the lead target for Japan marketing but add whether the customers it brought in stayed.**

At the next Japan business review, write the main number for Japan in one sentence. Then write one line per team on how its KPIs connect to it. A team you cannot write a line for is likely carrying the next disagreement.

## Related reading

Before comparing renewals by source, separate logo churn from revenue churn. Why a healthy NRR can hide customers leaving is covered in [Japan's NRR looks healthy on your dashboard. Ask for the logo churn.](/en/articles/churn-rate-logo-or-revenue/)

Other notes on the same problem are collected under [Marketing](/en/category/marketing/).
