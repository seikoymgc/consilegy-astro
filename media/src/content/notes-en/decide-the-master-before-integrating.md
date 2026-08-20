---
title: "Your Japan integration will not fail on the connector. It fails on the key."
description: "Your Japan subsidiary runs its customer master in kintone or a domestic package, and HQ mandates the global CRM. The integration stalls, and the vendor evaluation gets blamed. The real blocker is that nobody has decided which single field identifies the same customer, and which system is right for each field."
publishedAt: 2026-08-20
category: crm
principle: "Before choosing an integration tool for Japan, decide two things: the one field that identifies the same customer across both systems, and which system is authoritative for each field. Without these, no connector will produce a stable sync."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

Your Japan team keeps its customer records somewhere else. Usually kintone, sometimes a domestic sales-management package, often a spreadsheet that has been maintained for a decade. HQ has standardised on a global CRM and wants Japan connected to it.

The integration project opens, a connector is evaluated, and then it stalls. The status report says the tool is being assessed. That is not what is happening.

What is happening is that nobody has answered two questions: which single field says these two records are the same customer, and which system is right when the two disagree.

## Why the key is harder in Japan than HQ expects

Most global CRM integrations quietly assume the individual email address is the identifier. That assumption holds in a lot of markets. It holds much less well in a Japanese B2B customer master.

Records inherited from years of trade-show badges, 名刺 (business card) exchanges, and phone-based account management routinely carry a company name, a main switchboard number, a department, and a family name, with no individual email address at all. HubSpot's contact sync, for example, syncs only contacts with a valid email address by default; including the rest requires a deliberate configuration change and a decision about what happens to them ([HubSpot knowledge base, "Connect and use HubSpot data sync"](https://knowledge.hubspot.com/integrations/connect-and-use-hubspot-data-sync)).

There is a second constraint that surprises teams used to writing their own matching logic. When you choose your own fields for record matching in HubSpot data sync, the unique identifier must be a text field, and only the one field you select is used to decide a match ([HubSpot knowledge base, "Match records in data sync"](https://knowledge.hubspot.com/integrations/match-records-in-data-sync)). A rule like "same person if name and company and phone all agree" cannot be expressed there. If your Japan data needs that rule, you have a deduplication project, not an integration project, and it comes first.

## The three decisions to make before selecting a tool

**One field, named.** Pick the single text field that will decide identity. If the honest answer is that no such field exists today, the deliverable is to create one, not to keep comparing connectors.

**Who mints the ID, and who stores it.** A CRM-generated record ID works as an ongoing identifier only once it exists on both sides and is shared between them. In practice this means a two-stage design: match once on some other field, then run on the ID pair from that point forward. The Japan-side system needs a field to hold that ID, and ordinary users must not be able to edit it.

**Which system is right, field by field.** Postal address from the local master, engagement history from the CRM, company name from one of them. Any field where you cannot name the authority should be synced one way, not both. Two-way sync on an undecided field means the last writer wins, forever, silently.

## What HQ should expect after go-live

Integration does not reduce operational work in Japan. It moves it and adds to it.

Someone has to review failing and excluded records on a schedule. Someone has to reconcile the local master after a merge is performed in the CRM. Someone has to fill in the blanks on records the CRM created, because the local system's required fields are usually stricter than the CRM's, and records that fail those requirements will keep failing until a human intervenes. Budget a named owner for this, in Japan, with time allocated. A connector without an operator degrades into a queue of silent errors within a quarter.

One specification is worth flagging because it is widely misread: filters control which records sync initially, not whether an already-synced record keeps syncing. "We put a filter on it" is not a containment strategy.

None of this is a Japan-specific dysfunction, and it should not be reported to HQ as one. IPA, Japan's Information-technology Promotion Agency, a public body, surveyed Japanese firms between 10 February and 28 March 2025 for its "DX Trends 2025" report. Among Japanese respondents (n=1,400), **43.4%** named "data management systems are not in place" as an obstacle to organising and managing data, **37.2%** named the absence of a company-wide data policy or culture, and **22.6%** said existing systems cannot support data utilisation. In HubSpot Japan's annual survey, conducted by Macromill between 24 and 27 November 2023 among 1,545 sellers at companies with 51 to 5,000 employees, **79%** reported some difficulty using data in the sales organisation, with "data within the sales department is not properly managed" at 28.1% and "data integration with other departments has not progressed" at 24.4%. The second source is a CRM vendor surveying the market it sells into, and its conclusion aligns with its sales message, so weight it accordingly.

The principle generalises beyond Japan, but the cost of ignoring it is higher here, because the local master is older, the identifier is weaker, and the person who understands the data usually does not attend the HQ integration call.

**Decide the key and the authority before you decide the tool.**

Open one Japan integration in your portfolio this week and look for those two decisions in writing. If they are not there, what your team is comparing is not connectors. It is a design decision they have not made yet.

## Related reading

The upstream version of the same problem, deciding what to fix in the Japanese contact data before it reaches the CRM at all, is covered in [Before importing your Japan contact lists, decide three things](/en/articles/clean-lists-before-crm-import/). Import hygiene and the matching key are the same question entering from two directions.

Other notes on the same problem are collected under [CRM adoption](/en/category/crm/).
