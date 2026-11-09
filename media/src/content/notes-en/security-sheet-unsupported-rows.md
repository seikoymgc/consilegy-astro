---
title: "Japan security check sheets: what to write in the No rows"
description: "Japan security check sheets are worth fixing from the No rows first. A Japanese IT team reads each No as work it will inherit after go-live. Japanese survey data (n=780 and n=330) on deadlines and who is involved, the three things to write next to every No, and who should write and approve them."
publishedAt: 2026-11-08
category: japan-gtm
principle: "In a Japanese security check sheet, every No is read as work the buyer's IT team will inherit after go-live. For each No, write the compensating control, the task left on the buyer's side, and how often and by whom it is done."
canonUrl: https://consilegy.com/en/services/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

The business user in Japan likes the product. Their manager is waiting to see. And the IT department has concerns.

That is a familiar line-up in a Japan deal. Your CRM says "proposal sent." Inside the buyer, IT has not finished its review.

The review is usually one spreadsheet: the security check sheet (セキュリティチェックシート). A hundred-plus questions in Japanese, each to be answered with a circle or a cross and a comment.

HQ tends to treat it as paperwork. Japan sales forwards it to the security team, the security team sends back the SOC 2 report and a filled-in sheet, and the sheet goes out with a lot of Yes and a handful of "Not supported."

The place to start fixing is not the number of Yes answers.

**Fix a Japanese security check sheet from the No rows first.** The buyer's IT team reads every No as work it will have to take on after go-live.

This note is for HQ security, sales engineering and Japan sales teams at SaaS companies selling into Japan. How to name an owner and a turnaround for reviews like this, and track them as a deal stage, is covered in [In Japan, legal review is a deal stage, not post-signature paperwork](/en/articles/legal-review-is-a-deal-stage/). This note is about the content of the answers, and the No rows in particular.

## IT is part of the evaluation in roughly four in ten purchases

A joint survey by IDEATECH and Hiroyasu Kitagawa of Demand Generation Research (published 9 June 2026, fielded 25 to 26 May 2026, 330 valid responses from people in Japan who took part, with at least one colleague, in purchasing B2B business software, SaaS or IT infrastructure and security products worth JPY 5 million or more a year) asked which specialist functions were involved in the evaluation. IT was the most cited at 42.2%, followed by finance at 38.2% and security at 37.2% (multiple answers, n=325).

IDEATECH sells survey-based PR, so treat the percentages as directional, not precise. The survey does not say when IT joined. It does say IT is more than a final sign-off.

In the same survey, the item buyers found hardest to judge on their own before talking to a vendor was the operational workload after go-live, at 56.3%, ahead of feature comparison at 47.1%.

Buyers can read a feature list. What they struggle to estimate is who does what once the product is live. My read is that the security check sheet is where IT asks that question in writing.

## The deadline is short, so the No rows get one word

SecureNavi surveyed 780 people in Japan (published 19 February 2026, fielded January to February 2026, online, including 680 in IT and security functions). About seven in ten said requests to answer security check sheets were increasing.

The most common deadline given is 2 to 3 business days (35%). Add 4 to 7 business days (28%) and same day to 1 business day (13%), and 76% of deadlines fall within a week.

SecureNavi sells software that streamlines security reviews, so a finding that the workload is growing fits its business. Read it with that in mind.

The short deadline matches what vendors see, though. A hundred-plus rows in two or three days, often in a language HQ does not read. Yes rows get copied from the last answer. No rows tend to come back as "Not supported" and nothing else.

## A bare No leaves IT to estimate the work alone

Say a row asks whether the product supports automatic user provisioning and deprovisioning (SCIM or similar), and you answer No.

The IT team is thinking about who adds and removes accounts by hand every time someone joins or leaves, how often someone reviews the user list, and who explains a leftover account to the auditors.

If IT cannot estimate that work, it writes "concern" against the item in the approval document (稟議, ringi). Not a rejection. A note that it could not judge.

The business user who drafted the request then has to push a document with an open concern up the chain. If they wait instead, the deal stops replying from your side.

The number of No answers is rarely the real problem. Every product has gaps. The problem is when the work behind each No is invisible.

## Write three things next to every No

For each row you answer No, fill the comment field with three things.

First, the compensating control. Not "Not supported," but how far the same risk is covered another way. For example: "Automatic provisioning not supported. Admins can export the user list as CSV, including last login date."

Second, the task left on the buyer's side. If they use that control, who on their side does what? "An admin deactivates the account when an employee leaves."

Third, how often and by whom. "We assume a monthly review of the user list by the admin in the using department." If you add a time estimate, use only a figure you have tested yourself. If you have not tested it, offer to estimate it with them for their headcount.

These are templates for the wording. Confirm what your own product can do with the product team.

With those three, IT can write "managed through a documented process; owner and frequency specified" instead of "concern." An item it could not judge becomes an item it has judged.

Some Yes rows need the same treatment: the "Yes, if configured" answers. Who configures it, and does your team do the initial setup? If that is blank, IT reads the Yes as half a No.

## Product writes the comments, Japan sales reads them before they go out

The No comments describe product capability, so they carry the same liability as any product claim. If Japan sales improvises them, you get "your sheet said you supported this" after signature.

Split the work this way. Product or security writes the comment, and the security lead approves the wording. Per deal, only the frequency and owner assumptions may be adjusted.

Japan sales reads the No rows before the sheet goes out. If the account owner cannot say which No carries which explanation, the buyer's champion has nothing to repeat internally.

And do not blur the conditions on a Yes to reduce the number of No answers. The relationship with the IT team lasts until renewal.

## Build the answer library from the No rows, with a review date on each

With two or three business days to respond, there is no time to write each No explanation from scratch.

Most teams already keep a library of past answers. Fix the No rows first. Yes rows can be copied. A No explanation that is never written properly once will collapse back into one word every time.

Keep the tracking in the library, not the deal. For each row: last reviewed date, owner, and how many follow-up questions it has drawn. Each quarter, check the rows against release notes and update any No that has become a Yes or whose compensating control has changed. Rows that keep drawing questions are candidates for a fuller comment or a product request.

Add no new fields to the deal record. Link the sheet you sent, and track how far IT's review has moved in the approval-progress field the deal already has. Do not ask reps to log anything row by row.

**In a Japanese security check sheet, every No is read as work the buyer will inherit after go-live.** Write the compensating control, the task left on their side, and how often and by whom it is done.

Open the last security check sheet your team sent to a Japanese prospect and read the comments on the No rows. Any row that just says "Not supported" may be the line marked "concern" in their approval document.

## Related reading

Tracking reviews like this as a dated deal stage, so "waiting on IT" becomes an owner and a date rather than a feeling, is covered in [In Japan, legal review is a deal stage, not post-signature paperwork](/en/articles/legal-review-is-a-deal-stage/). This note fixes the content; that one makes the waiting visible.

Other notes on the same problem are collected under [Japan market & GTM](/en/category/japan-gtm/).
