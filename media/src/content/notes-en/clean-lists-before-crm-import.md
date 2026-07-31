---
title: "Before importing your Japan contact lists, decide three things"
description: "When a global SaaS company stands up a CRM for its Japan team, someone always says \"just import what we have.\" Japanese business-card and spreadsheet data breaks matching, overwrite and email-consent rules in ways HQ playbooks do not anticipate. Decide these three points before the import, not after."
publishedAt: 2026-07-31
category: crm
principle: "Decide the match key, the overwrite priority and the source-of-record columns before you import. After the load, none of the three can be reconstructed."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

Your Japan team has a drawer of business cards, three spreadsheets and an event attendee list. Loading all of it into the CRM takes an afternoon.

The damage shows up later. Duplicates and silent overwrites are invisible on import day and surface weeks afterwards, in the pipeline report HQ reads and in the first email send.

Decide three things before the file is touched.

## What you are importing is not a database

HubSpot Japan's annual survey (published 27 February 2026, n=1,545, commissioned by HubSpot and fielded by Macromill) puts CRM adoption among Japanese sellers at 38.1%, with cloud CRM in the mid-20% range. Neither number has moved much since 2022.

For the other 60%, customer information sits in business cards, individual reps' spreadsheets and event lists.

In the same company's 2024 survey (n=1,545, also fielded by Macromill), 79% of sales organisations reported some difficulty using their data, and 28.1% said data inside the sales department is not properly managed.

A Japan launch usually inherits that state, not a clean table.

## 1. Decide what makes two records the same

Do not match on company name.

One Japanese company arrives written four ways: 株式会社◯◯, (株)◯◯, ◯◯株式会社, and ◯◯ with the legal form dropped entirely. The legal form can sit before or after the name, characters come in full-width and half-width forms, spacing is inconsistent, and former names and branch names are mixed in. A name-based key either splits one company across five records or collapses two companies into one.

Match people on email address and companies on domain.

Business cards without an email address are handled separately by default. If someone merges them by hand because "it is probably the same person," you are left with a merge nobody can reproduce or reverse. Records that cannot be judged by key should not auto-merge; they should become a review task.

There is no published Japanese study of duplicate-record rates in CRM systems, and importing a US benchmark tells you nothing about your file. Count the duplicate rate in your own extract before loading, and you have the only measured number that applies.

## 2. Decide which value wins

If a contact already exists, does the new file overwrite it or not? Skip this and job titles and departments that the local team had been maintaining get reset to whatever was printed on a card two years ago.

The rule that holds up: the record carrying deal and activity history becomes the primary one. History cannot be recovered. A job title can be asked again.

Then write the field-level exceptions before the load. Email and phone take the newer value; owner and original source stay with the existing record.

## 3. Decide how you will prove where the data came from

Add four columns to every file you import: acquisition channel, acquisition date, who imported it, and consent status.

This one is not housekeeping. Under Japan's Act on Regulation of Transmission of Specified Electronic Mail, advertising email requires prior opt-in, with an exception where the recipient supplied their email address in writing, which includes a business-card exchange (Article 3, Paragraph 1, Item 2; see the guidelines issued by the Ministry of Internal Affairs and Communications and the Consumer Affairs Agency). Purchased lists and lists handed over by a third party do not fall under that exception.

After the import, both look like the same contact record. The only thing that separates them is a column you decided to keep. A rule such as "lists with unknown consent status are excluded from automated sends" cannot be written at all without it.

This is also the point where HQ and the Japan team most often talk past each other. A global marketing operations team that works to GDPR or CAN-SPAM assumptions will not ask about the business-card exception, and the local team will not volunteer that half the list came from a drawer.

## The principle

One generalisation is worth keeping.

**An import is a design decision, not a data-entry task.**

Open one of the files and count what share of rows have no email address. That single number tells you how much time the three decisions deserve.

Customer data is worth what you can explain about it later, not what it weighs. The wider frame is in [Japan Market GTM and Messaging](https://consilegy.com/en/services-en/japan-market-gtm-messaging/).
