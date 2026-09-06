---
title: "In Japan, a required field produces confident wrong answers"
description: "HQ sees blank fields in the Japan pipeline and makes them required. Completion goes to 100% and the data gets worse, because in a Japanese deal the answer often does not exist yet at the moment the record is saved. Japanese survey data (n=101, n=1,034), why the economic buyer field fails specifically in Japan, and the two conditions a field must meet before you require it."
publishedAt: 2026-09-05
category: crm
principle: "Require a field only when the answer is settled at the moment of entry and a wrong value would be caught within a week. In Japan the approver is often not knowable during the deal, so requiring that field replaces a readable blank with an unreadable guess."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

A revenue operations lead reviews the Japan pipeline, finds the economic buyer field blank on roughly half the open deals, and makes it required. Within a month, completion is at 100%.

The field is now useless, and the forecast built on it is worse than the one built on blanks.

## A required field enforces saving, not knowing

Nobody fills in a required field because they were reminded to. They fill it in because the record will not save otherwise.

When a rep wants to save and does not have the answer, the value that goes in is whichever one clears the validation fastest. The first option in the picklist. Today's date, or the end of the month. A round number. For a person field, the most senior name on any business card collected so far.

What just happened is not that data appeared. It is that a single state, "not known yet," was scattered across several plausible-looking values and became invisible. A blank told you something. "VP of Sales" in the economic buyer field might mean the rep has reached the approver, or it might mean the rep has not. Nothing in the record distinguishes the two any more, and the report looks healthier than it did before.

## In Japan, the approver is frequently not knowable while the deal is open

This is where the global playbook and the Japanese buying process come apart.

In a US deal, the economic buyer is usually a person the rep can meet, and a blank in that field is a reasonable prompt to go and meet them. In a Japanese deal of any size, the decision is often made through a written internal approval routed to people who never join a call. IDEATECH and Hiroyasu Kitagawa of Demagen Research surveyed large B2B purchases in Japan (published April 2026, n=307, respondents involved in buying business software, SaaS, or IT infrastructure) and found that more than 80% of purchases required two or more approval stages, with 60.9% at exactly two, and that two to four functions were involved in around 80% of cases.

The rep is not being lazy. In many of these deals there is no single person who can be named as the buyer at the point the record is updated, because the approval is still being assembled and the final signatory depends on the amount and the category.

Make that field required and you get a specific, predictable error. The rep enters the most senior Japanese title they have encountered, which in Japan is frequently a courtesy attendee who joined the first meeting to signal that the company is taking the vendor seriously, and who has no role in the approval at all. HQ then reads the field as "approver engaged," moves the deal to commit, and books it.

You did not fix a data problem. You built a mechanism that converts uncertainty into forecast confidence.

## The reasons Japanese reps stop updating records are all design problems

Mazrica surveyed Japanese B2B sales managers and team leads using SFA or CRM systems (fieldwork 25 to 28 November 2024, n=101, an online panel survey designed by IDEATECH; Mazrica sells an SFA product, so read the ratios for order of magnitude). The top reason given for not entering information was that entry takes too much time, at 54.5%, followed by finding it cumbersome at 39.6%, unclear operation at 34.7%, and not seeing the benefit at 32.7%.

A larger survey by Keywalker (fieldwork 8 to 10 October 2025, n=1,034, current users and managers at companies with SFA, CRM, or BI tools deployed, conducted online through PRIZMA; the sponsor is a BI vendor) found the reasons for delayed entry were other work taking priority at 44.2%, too many fields at 38.5%, and difficulty entering on mobile at 30.7%.

Read the lists and notice what is absent. Refusal barely appears. Time, field count, interface. Every item is something the person who configured the system controls.

Requiring a field addresses none of them. It removes one thing only: the option available to a rep who does not have the answer.

## Blanks in the Japan pipeline are the most useful data HQ has

For a headquarters trying to understand a market it cannot observe directly, a blank field is a signal, not a defect.

Economic buyer blank on 30% of deals means the Japan team has not reached the approver on 30% of deals. Implementation date blank means the customer's own internal timing is unresolved, which in Japan usually means the fiscal-year budget cycle has not reached them yet. Loss reason blank on a stalled deal means the rep does not know why it stalled, which is itself worth a conversation.

Each of those is actionable from Tokyo or from headquarters. Each becomes unreadable the moment the field is required.

The fields I have seen break fastest after being made mandatory are loss reason and economic buyer. The one that never caused trouble was contract value. That difference has nothing to do with rep discipline and everything to do with whether an answer exists at the time of entry.

## Two conditions, and a one-line test

Require a field only if both hold. The answer is settled at the moment of entry. And a wrong value would surface within about a week.

Close date and contract value pass. The answer sits in the signed agreement, and an error shows up in billing or revenue recognition almost immediately. Economic buyer, expected implementation date, competitor under evaluation, and loss reason fail the first condition during an open deal, and usually the second as well, because nobody checks a field that is already populated.

The test to run on your own instance: for each required field, name the person who would notice a wrong value, and the week they would notice it. If you cannot answer for a field, it should not be required.

Two things to put in its place. Attach the requirement to a stage transition rather than to the object, using required properties per deal stage in HubSpot or validation rules in Salesforce, so the answer is only demanded once it plausibly exists. And report the blank rate itself, in the weekly pipeline review, as a pipeline number rather than a compliance number. "Twelve open deals with no named approver" is a conversation about deals. "Your completion rate is 74%" is a conversation about the rep.

That second point has support in the Keywalker survey: the strongest motivator for entering data was a clear purpose and clear downstream use, at 54.8%. A field made mandatory without an explanation of what it is for is, by that measure, the weakest possible design.

The wider view of designing revenue around the buyer's internal process sits in [Japan Market GTM and Messaging](https://consilegy.com/en/services-en/japan-market-gtm-messaging/).

**Require a field only when the answer is settled at the moment of entry and a wrong value would be caught within a week. In Japan the approver is often not knowable while the deal is open, so requiring that field replaces a readable blank with an unreadable guess.**

## Common mistakes

- **Reading Japan's low field completion as a discipline problem.** The published reasons are time, field count, and interface. Requiring fields leaves all three untouched and removes the only honest response available to a rep without an answer.
- **Trusting a populated economic buyer field on a Japanese deal.** The most senior name the rep has met is often a courtesy attendee, not part of the written approval chain, and the record cannot tell you which.
- **Translating a global picklist and requiring it.** Options written for a US buying process leave a Japanese rep choosing the least wrong item, and the resulting distribution then gets analysed at headquarters as if it described the market.

## Related reading

The field that breaks first is usually loss reason, and requiring it before rebuilding the options is what fills your Japan reporting with "price" every quarter. That rebuild is covered in [why every lost deal in Japan shows up as "price" in your CRM](/en/articles/loss-reason-defaults-to-price/).

Other notes on the same problem are collected under [CRM adoption](/en/category/crm/).
