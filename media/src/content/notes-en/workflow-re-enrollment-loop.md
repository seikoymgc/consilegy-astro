---
title: "Why your Japan workflow fired three times and nobody reported it"
description: "A global workflow sent the same notification three nights running to Japanese contacts. Re-enrollment was off. The cause was a trigger built on a property the workflow itself wrote, combined with a local nightly sync that rewrites every field. Why this pattern is close to universal in Japan subsidiaries, why the Japan team reports it as silence rather than a bug, and the one-line test to run before go-live."
publishedAt: 2026-09-11
category: crm
principle: "Never trigger an automation on a property that the same automation writes. In a Japan subsidiary a local system usually rewrites every field nightly, so a property you think only people touch is updated every night, and the loop runs where nobody is watching."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

The same notification reached the same Japanese contacts three times, on three consecutive nights, shortly after 1am Japan time.

Re-enrollment was switched off. The first thing headquarters asked was whether the Japan team had edited the workflow. They had not.

## Re-enrollment off and duplicates arriving means the system is not counting the same person twice

The re-enrollment setting decides whether someone who already completed the workflow can be admitted again. If duplicates arrive with it off, the platform is not treating those as repeat entries. It is accepting a new enrollment each time.

The workflow in question started on an update to a lead status property, and its final action wrote to that same property. Writing the value updates it. The update matches the trigger. The record enters again.

Nothing in the editor shows this as a loop. Read top to bottom, the workflow is correct. The cycle only exists once the last step and the first step are placed on the same field, and no screen in HubSpot or Salesforce puts those two next to each other.

## A trigger on a property update watches events, not state

This distinction is where most automation designs quietly break.

There are two kinds of enrollment condition. One selects records that are currently in a state. The other catches the moment a value changes. The first reads state. The second reads history. In the builder they look almost identical, and in a requirements document written in English and implemented in Japanese they usually collapse into one sentence.

A change-based condition fires on a write, not on a difference. Writing "A" onto a field that already says "A" is still an update. To a person reviewing the record, nothing happened. To the platform, an event occurred.

That asymmetry is what lets an automation restart itself on its own output.

## Japan subsidiaries almost always have a second system writing into the CRM every night

This is the part a global template does not account for, and it is why the pattern shows up in Japan more often than in the markets where the workflow was designed.

A Japan office that has been operating for any length of time runs on something local. Sales administration in kintone, an order or billing system the parent company has never logged into, a card-scanning service holding the contact history, a spreadsheet that the inside sales team maintains. When the global CRM arrives, nobody retires those. They get connected, and the connector is usually built locally, quickly, to a deadline set in another timezone.

Those integrations very often push the full record rather than a diff. Simpler to build, and until an automation is layered on top, nothing visibly breaks. So every night, every mapped field is written again, whether or not the value changed.

Put a change-based trigger on any mapped field and the workflow now has a scheduled nightly cause. In this case the timing gave it away. Not 1am because of a delay in the platform, but 1am because that is when the local sync ran.

Once an integration exists, a property in your CRM is no longer something only humans touch. Decide which system owns which field before you put automation on top of it, or the meaning of your trigger changes without anyone editing the trigger. That is the same failure I described in [your Japan integration will not fail on the connector, it fails on the key](/en/articles/decide-the-master-before-integrating/), arriving through a different door.

## In Japan the recipient will not tell you, and the deal just goes quiet

A misfire in Japan produces a different signal than it does in the US or Europe, and that difference is why these run for days.

Japanese B2B recipients rarely reply to complain about a duplicate send, and they rarely tell the individual rep. If the contact is the designated point of contact for the vendor relationship, the complaint goes through their internal channel, and what the sales rep observes is a meeting that does not get scheduled. Your monitoring shows a healthy send volume. Your pipeline shows a deal that stopped moving. Nothing connects the two.

There is also a compliance edge. Japan's Act on Regulation of Transmission of Specified Electronic Mail requires opt-in for advertising email, with narrow exceptions such as an address given directly on a business card, and requires sender identification and a working opt-out in each message. Repeated unwanted sends are therefore not only an annoyance in this market. They become a question for the customer's legal or general affairs function, which in Japan frequently sits inside the approval path you are trying to get through.

And the local fix is predictable. The Japan team turns the automation off and does the step by hand, because manual work is recoverable and a second incident is not. Headquarters then sees a region with low workflow usage and reads it as resistance to the global playbook.

## Two Japanese surveys on what the field actually wants from automation

Mazrica surveyed Japanese B2B sales managers and team leads using SFA or CRM systems (fieldwork 25 to 28 November 2024, n=101, an online panel survey designed by IDEATECH; Mazrica sells an SFA product). The most requested capability was automated entry and simplified fields at 47.5%, followed by AI assistance with data entry at 45.5%. Small sample, vendor-sponsored, so read the order rather than the decimals.

The direction is not ambiguous. Japanese sales teams are not refusing automation. It is the first thing they ask for.

Innovation and Co. surveyed companies with marketing automation deployed (fieldwork October 2022, n=438; the sponsor sells an MA product) and found that while more than 80% rated each major capability as important when selecting the tool, more than 51% were not using those capabilities after deployment. The reasons given were no occasion to use them, insufficient resource, and difficulty.

Those two findings meet at exactly the point where a workflow misfires in front of a customer. The capability with the highest demand failed visibly, in the market where a vendor relationship is hardest to rebuild. What you lose is not a workflow. It is the argument for the next one.

## The test is one line, and it belongs in your go-live checklist

For every enrollment trigger, ask whether this workflow writes to that property. If it does, the design is not closed.

Three things to do. List every workflow with its trigger fields in one column and its action fields in another, and look for a field appearing on both sides. Where you cannot separate them, rewrite the trigger from a change to a state, adding a completion flag: enroll records that are in the state and not yet flagged, and set the flag as the final action. The second pass then fails the condition.

On the integration side, make the write-back incremental. A connector that rewrites unchanged fields every night is already damaging your reporting even without automation attached, because last-modified dates stop meaning anything and any report built on stalled records silently empties. That breaks more quietly than a duplicate email and takes far longer to find.

Then test one record before go-live, using the test function in the HubSpot workflow editor or a sandbox in Salesforce. Read the enrollment history rather than the outcome. If the record appears once, the loop is closed. If it appears twice in a test, it will appear nightly in production, in a timezone where nobody is awake to see the first one.

The wider view of designing revenue around the buyer's internal process sits in [Japan Market GTM and Messaging](https://consilegy.com/en/services-en/japan-market-gtm-messaging/).

**Never trigger an automation on a property the same automation writes. In a Japan subsidiary a local system usually rewrites every field nightly, so the loop has a scheduled cause and runs where nobody is watching.**

## Common mistakes

- **Assuming the Japan instance only receives data from the global CRM.** The local order, billing, or card-scanning system that predates your rollout is almost always still writing into it, and the connector was probably built to push whole records rather than differences.
- **Treating a workflow misfire in Japan as a minor operational issue.** The recipient will not complain to the rep, the complaint routes internally, and the first symptom you see is a deal that stops moving.
- **Reading low workflow usage in Japan as resistance.** After one visible misfire the team reverts to manual work deliberately, because a second incident in front of the same customer is not recoverable.
- **Testing the outcome instead of the enrollment history.** A correct email proves the actions work. Only the enrollment log tells you whether the record came back around.

## Related reading

If the field your trigger depends on is not reliably populated by people in the first place, this is a property design problem before it is an automation problem. The two conditions a field must meet before you make it required are in [in Japan, a required field produces confident wrong answers](/en/articles/dont-make-unknown-fields-required/).

Other notes on the same problem are collected under [CRM adoption](/en/category/crm/).
