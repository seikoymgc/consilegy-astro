---
title: "Your Japan team came back from the show with 900 business cards"
description: "Record the conversation, its purpose and the agreed next step alongside each contact. Report partner discussions separately from prospective customer leads."
publishedAt: 2026-08-17
updatedAt: 2026-10-17
category: marketing
principle: "Record the conversation, its purpose and the agreed next step alongside each contact. Report partner discussions separately from prospective customer leads."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

Your Japan team asked for booth budget at a domestic trade show. You approved it. They came back with roughly 900 business cards, uploaded them, and the global nurture sequence went out the following week.

A quarter later the channel shows almost no pipeline, and the obvious conclusion is that Japanese trade shows do not work.

That conclusion is wrong, and the mistake was made before the show opened.

The booth was scoped to collect cards. Nothing in the plan asked anyone to record what was said.

## Two Japanese data points that look contradictory

They are not contradictory. Read together they describe the problem precisely.

IT Communications' 2025 survey of B2B event marketing in Japan (published 9 December 2025, fielded 3–8 October 2025, internet research, 237 respondents aged 25–59 working in marketing, PR, or sales promotion at B2B companies; note this is a self-commissioned survey by a marketing services vendor) found that trade shows were the single most executed channel in the prior year, at 52.3%. Email marketing was second at 37.1%.

ProFuture's 2026 B2B marketing budget survey, run with Macromill (fielded 3–4 February 2026, published 4 March 2026, internet research, 103 valid responses from employees working in B2B marketing; note the small base and that ProFuture sells advertising into its own HR and executive media, so treat this as directional) found that the channel most often named as not returning its cost was the trade show, at 42.7%.

These are two separate surveys with different respondents, so neither explains the other. Side by side, though, the channel Japanese B2B marketers run most is also the one they most often say does not return its cost.

Cutting the booth is one response to that.

It is the wrong one, because the same IT Communications survey shows what the room is actually for: the second-ranked benefit of exhibiting was "being able to sense visitors' level of interest and their reactions," at 51.6%, and building trust in person ranked at 47.6%.

Reactions are the output. Cards are the receipt.

## In Japan, the show may be producing a partner, not a lead

This is the part an MQL-only scorecard cannot see.

JETRO's FY2024 survey of foreign-affiliated companies in Japan (published 25 March 2025, fielded 15 October to 17 November 2024, 7,301 companies contacted, 1,427 valid responses, 19.5% response rate) asked the firms engaged in collaboration how they found their partners.

Participating in domestic trade shows and events was first, at 68.8% (n=507, multiple response), ahead of introductions from existing partners at 49.1% and introductions through the overseas parent at 28.0%.

For a foreign company entering Japan, a domestic trade show can provide partner conversations as well as customer leads. Note the survey covers foreign-affiliated firms across all sectors, not SaaS specifically.

The consequence for headquarters is direct.

If the booth is scored on MQLs alone, a show that produced two serious reseller or systems-integrator conversations is filed as a failure, and the Japan team learns not to spend the two hours those conversations took. The next show produces more cards and fewer partners.

## What the card gives you, and what it does not

The exchange is an in-person greeting, and the card the visitor hands over states their department and their title in writing. That is the organizational position that decides whether this person can move anything internally, and it arrives as fact rather than as a self-selected picklist value on your global form.

What the card does not carry is why they stopped at your booth, what they said was broken, or whether this is a budget cycle or a browse.

None of that can be reconstructed afterward. It exists for about two minutes, in front of one person on your stand, and then it is gone.

## Four fields, and a different way to fund the booth

Ask the Japan team for four fields per contact, captured at the stand rather than reconstructed on the flight home: **the show and date of contact**, **the person on your team who spoke with them**, **a conversation note in the visitor's own words**, and **a temperature reading** (this quarter, this year, or information gathering).

Add a fifth if you send email: **where consent was obtained**.

Japan's Act on Regulation of Transmission of Specified Electronic Mail requires prior opt-in for advertising email. One exception covers people who supplied their email address to you in writing, which includes handing over a business card; sender identification and an unsubscribe route are still mandatory.

Before a bulk advertising send to a whole show's worth of cards, confirm with counsel that the exception applies to how those cards were collected (this is not legal advice).

The legal side is set out in [Before importing your Japan contact lists, decide three things](/en/articles/clean-lists-before-crm-import/). The operational point is that the CRM should record where consent came from instead of assuming it.

Two implementation details decide whether those fields survive.

First, do not store them as single fields on the contact. When the same person visits next year's show, last year's conversation note is overwritten.

Hold each show as a touchpoint record that adds a row per event: in Salesforce, a campaign and its campaign members; in HubSpot, a campaign or a custom object, depending on your plan and configuration.

Keep only the latest temperature and follow-up date on the contact itself.

Second, decide before the show which import columns carry the conversation note, temperature and staff member, and which CRM fields they map to. Whether the note is typed into a card-scanning app or written on a paper sheet matters less than whether the import file has a column for it. Open a handful of records after the upload to check the notes made it in.

Then change three things in how the show is funded.

- **Budget the follow-up as part of the booth, not after it.** A cost model that pays for the stand and treats the follow-up as someone's spare time produces exactly the outcome you are seeing.
- **Staff the stand for two-minute conversations, not for maximum cards.** Card volume will fall. That is the intended effect, not a side effect. Whether pipeline rises is our hypothesis, and one show is enough to test it: three months later, compare the opportunity rate of cards with a recorded conversation against cards without one. If there is no difference, staff back down.
- **Name partner conversations as an expected outcome in the show's goals.** Otherwise the Japan team will keep producing them and keep leaving them out of the report, because your scorecard has no row for them.

**Record the conversation, its purpose and the agreed next step alongside each contact. Report partner discussions separately from prospective customer leads.**

The wider design question, which touchpoint becomes a record and who acts on it, is covered in [Japan Market GTM and Messaging](https://consilegy.com/en/services-en/japan-market-gtm-messaging/).

## Related reading

If the show is in fact producing partner conversations, the next decision is whether Japan should be built partner-first or direct-first, and what your own CRM stops learning once a partner owns the account. That trade-off is set out in [partner-led or direct-first in Japan](/en/articles/partner-or-direct-first-in-japan/).

Other notes on the same problem are collected under [Demand generation](/en/category/marketing/).