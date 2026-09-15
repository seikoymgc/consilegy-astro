---
title: "Open rates from your Japan list are not evidence of intent"
description: "Your Japan open rate comes back at or above the EMEA number, HQ reads that as engagement, and two quarters later the pipeline still has not moved. The number cannot carry that weight: a recorded open may be a proxy fetching an image on delivery. Here is what Apple and Google actually document, and what to instrument instead."
publishedAt: 2026-09-15
category: marketing
principle: "An open rate cannot tell you whether anyone read the email, and a cross-region comparison of open rates compares measurement environments rather than interest. Report one named next step per send, counted in people."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

Your Japan team localises the global nurture programme, and the first reporting cycle looks encouraging. The Japan open rate comes back at or above the EMEA number. HQ reads that as engagement and renews the budget.

Two quarters later the pipeline has not moved, and someone writes the sentence that does the damage: Japan engages but does not buy.

The open rate never supported the first conclusion, so it cannot support the second one either.

## A recorded open may be a proxy fetching an image on delivery

Open tracking works by embedding a small image in the body and counting how often that image is loaded. The whole metric rests on the assumption that a load means a human opened the message.

Apple removed that assumption in 2021. The Mail User Guide (Apple's own support documentation, macOS 27 edition) states that when Protect Mail Activity is on, the recipient's IP address is hidden from senders and remote content is privately downloaded in the background when the message is received, rather than when it is viewed.

The pixel fires whether or not anyone looks at the message. The setting has been offered since iOS 15 shipped in September 2021, and the recipient chooses it the first time Mail opens. Senders cannot see who chose it, and there is no way to find out what share of a given list is in that state.

## The comparison HQ is making is between measurement environments, not between markets

A single region's open rate moving over time is hard enough to interpret. Comparing Japan against EMEA or the US is worse, because three things differ across those lists and none of them are visible on the HQ dashboard.

Device and mail-client mix differs by market. Corporate gateway policy differs too: in Japan it is common for the receiving side to block external images by default, which suppresses opens even when the message is genuinely read. And the named contact on a Japanese record is frequently not the person doing the evaluating.

That last one is the structural point. In a Japanese purchase, the person who subscribed often exports your email to a PDF and circulates it inside an internal approval thread. The reading that decides anything happens in a place no pixel reaches. So the Japan number can overstate opening and understate reading at the same time, and the two errors do not cancel.

One comparison does survive. If your Japan team randomly splits a list and tests two subject lines, the environment bias falls on both arms equally, and the winner is real. What does not survive is Japan against EMEA, this quarter against last, or before-launch against after-launch. Those are the comparisons that end up in the board pack.

## Google does not track opens, and the line it does draw is 0.10%

Google's Email sender guidelines carry a heading called Open rate, and it runs three lines. Google does not track open rates. Google cannot verify the accuracy of open rates reported by third parties. A low open rate is not necessarily an accurate indicator of deliverability or spam classification problems.

The number Google does put in writing is the spam complaint rate: keep it below 0.10% in Postmaster Tools and never let it reach 0.30%. Since 1 February 2024, senders of more than 5,000 messages per day to personal Gmail accounts have been required to meet that condition alongside SPF, DKIM and DMARC.

The receiving platform measures whether people objected, not whether they opened. Unlike the open rate, that measurement is visible to you as well.

## Instrument one named next step per send, and report it as a count

Replacing open rate with click rate moves the same problem one step along. Security products follow links in messages before the recipient does, and those fetches are recorded as clicks.

The change worth making is not a new rate. For every send, decide the single next step you want the reader to take, then count the people who took it.

If the email carries a pre-implementation checklist, count the people who opened the checklist. If it carries a customer story, count the people who reached the enquiry form from that page. If it proposes a meeting, count the people who picked a time.

Report those as counts, not percentages, and name the step in the report. Small Japanese lists make rates jump for no reason, and when HQ has to decide whether to keep funding the Japan programme, the question underneath is how many accounts moved, not what percentage of an unstable denominator did something unobservable.

There is a useful side effect. An email whose next step cannot be named in one line is an email without a reason to exist. If your monthly Japan newsletter fails that test every month, the thing to fix is the programme, not the subject line.

**An open rate cannot tell you whether anyone read the email, and a cross-region comparison of open rates compares measurement environments rather than interest. Report one named next step per send, counted in people.**

## Common mistakes

- **Keeping open rate in the deck as a directional number.** A number that appears in a QBR gets used for decisions. Directional lasts one cycle; from the second cycle onward, "Japan is down from last month" becomes an agenda item. If you are dropping it, drop it from the report
- **Substituting deliverability for engagement.** Delivery rate describes your sending hygiene, not the reader's interest. Authentication and spam complaint rate belong in operating hygiene, monitored against Google's thresholds, not in the outcome section
- **Concluding that nothing can be measured and switching tracking off.** Declining to make decisions on opens is not the same as removing instrumentation. Per-send destination URLs and form-arrival records are exactly what counting the named next step depends on
- **Asking the Japan team for a benchmark to compare against.** The published Japanese open-rate benchmarks come from vendor aggregates whose sample composition and measurement method are not disclosed, which means they carry the same proxy-fetch problem your own number does

## Related reading

Counting people who took a named step is only useful if sales agrees that the step is a reason to act. Drawing that line is covered in [In Japan, hand leads to sales on behavior, not on score](/en/articles/handoff-on-behavior-not-score/).

Other notes on the same problem are collected under [Demand generation](/en/category/marketing/).
