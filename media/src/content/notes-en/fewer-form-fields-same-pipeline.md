---
title: "Why shortening your Japan contact form does not add pipeline"
description: "Localise the global form, cut the fields, and Japanese submissions tend to go up while pipeline stays flat. In Japan the person who fills the form is one of many people in the decision, and a short form leaves your rep nothing to sort them by. Which fields to cut, what to check before cutting, and the one question to keep."
publishedAt: 2026-09-02
updatedAt: 2026-10-16
category: marketing
principle: "Delete only the fields you can recover after submission by other means, and only when no routing or automation depends on them. Keep the one question only the submitter can answer, and put something behind the submit button that helps them build their case without you."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

A global form gets localised for Japan. Someone trims it to work email and company name. Submissions tend to rise, because the effort of submitting went down.

Pipeline does not necessarily follow. Two quarters later the read at headquarters is that Japanese inbound does not convert, and the budget moves to paid reach.

The form is not the problem because it is too long or too short. It is the problem because it was designed for a buyer who starts an evaluation alone, and because cutting fields also cuts what your team uses to sort submissions.

## The global form assumes a buyer who arrives by themselves

Most demand-gen forms are built on one premise. The person filling it in can decide to look at your product, and later can decide to buy it.

In Japanese enterprise deals that premise breaks early. A joint survey by IDEATECH and Hiroyasu Kitagawa of Demagen Research (published 9 June 2026, fielded 25 to 26 May 2026, n=325, limited to people who took part with at least one colleague in a Japanese purchase of business software or IT infrastructure worth 5 million yen or more per year; a vendor-run survey-as-PR exercise, so read it for order of magnitude) found 58.5% of those deals involved seven or more people. The functions in the room were IT at 42.2%, finance and accounting at 38.2%, and legal at 33.2%.

Your form is filled in by one of them. The survey does not ask at what stage that person submits. What follows is a working hypothesis from what we see in the field, not a finding of the survey.

## You cannot tell an early submitter from a late one, and both get the same email

Someone who has not yet raised the topic internally and someone whose evaluation is already circulating between departments land in your CRM as the same record.

With nothing on the form to separate them, the rep sends one sequence to both. Too early for the first, too late for the second. The more a shorter form lifts submissions, the more of these unsorted records you get, and the sentence every Japan team eventually hears from sales is that the leads are low quality.

## Cut the fields you can recover without asking, keep the one you cannot

The test is a single question. After the form is submitted, can this field be filled in without going back to the submitter?

Company name lets you fill industry, headcount and location from a company database. Some CRMs and marketing automation tools can enrich company data from the company name or email domain. Coverage depends on the tool and the contract, and Japanese company names are harder to match (more on that below), so check that recent Japanese submissions actually get filled before you delete anything.

The other route is to ask later. Skip a field on the first form and ask for it on the second download or webinar registration. Some tools can hide fields you already know and show the next one instead.

Having reps fill fields in by hand is not recovery. It moves the effort from the submitter to sales.

Some fields can be recovered but not in time. Job title shows up in an email signature once the person replies, but if your first response is routed by title, you need it at submission. Do not drop a field used for first-touch routing until you have confirmed enrichment fills it.

What cannot be recovered is what the person was reading and trying to solve at the moment they clicked. Call them the next day and they will have rewritten it into something tidy and general. The specific version only exists at submit time.

So keep one optional free-text question. Something close to "in one line, what are you looking at right now." Whether it is answered at all is your only usable signal for splitting the traffic you just increased.

One Japan-specific caution on matching. Japanese company names arrive with 株式会社 before or after the name, in full-width or half-width characters, sometimes under a former name, so matching a submission to an existing account or to an enrichment record fails often. That is a [list preparation problem, not a form problem](/en/articles/clean-lists-before-crm-import/), and shortening the form does not fix it.

## Before deleting a field, find everything that reads it

Form fields keep working after submission. Industry, headcount and job title often feed owner assignment, lead scoring, MQL rules, list segmentation and required fields in the sync to your sales system. Remove one from the form and new Japanese leads arrive with it blank: assignment falls to the default owner, scores stop rising, and the sync may start throwing errors.

Before you cut, check:

1. Workflows and assignment rules that use the field as a condition
2. Lead scoring and MQL criteria
3. Lists and segments
4. Field mappings to your sales system or other tools, especially fields that are required on the other side

HubSpot shows where a property is used in its property details, and Salesforce has "Where is this used?" on the field. What they list varies by tool and object, and required settings on the receiving system often do not show up at all. For each field that is referenced, decide first whether enrichment will fill it or whether the rule will stop using it. Do it in the other order and routing and scoring break quietly in the month submissions go up.

## Change what the submit button leads to, not only the number of fields

In the same survey, the things Japanese buyers said were hardest to judge before talking to a vendor were the operational load after go-live at 56.3%, feature comparison at 47.1%, and calculating ROI at 41.5%. The content they found most useful was an ROI calculator at 55.4%, followed by case studies from a similar industry and company size at 46.5%, and slides they could use to explain the purchase internally at 26.8%.

The same respondents said general industry trend reports at 49.5% and feature comparison tables at 46.2% had no influence on the decision.

Read those together and the Japanese buyer is trying to assemble an internal case. If the only next step your form offers is booking a call, you are routing every submitter into the one action that works best once the group already exists.

**Delete only the fields you can recover after submission by other means, and only when no routing or automation depends on them. Keep the one question only the submitter can answer, and put something behind the submit button that helps them build their case without you.**

## Common mistakes

- **Treating field count as the whole design.** Fields are the cost of submitting. What you ask, and what happens next, decide who submits and whether anything follows.
- **Expecting enrichment to recover intent.** Enrichment can recover firmographics, and Japanese name matching limits even that. It cannot recover what the person was trying to solve.
- **Reading flat pipeline as low intent.** A Japanese submitter may be early because the internal case gets built before the group is convened. Early is not the same as unqualified.

## Related reading

Where to draw the handover line once you can tell the two groups apart is covered in [In Japan, hand leads to sales on behavior, not on score](/en/articles/handoff-on-behavior-not-score/). The free-text answer from the form is usable as that trigger.

Other notes on the same problem are collected under [Demand generation](/en/category/marketing/).
