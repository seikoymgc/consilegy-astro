---
title: "Japan accounts: four lines every team reads before calling"
description: "In a Japan office, sales, support, the reseller and HQ marketing each hold part of an account's story, and the customer receives all of it. Before integrating systems, count what people ask each other before contacting a customer, show those answers as four lines on the company record built from existing records, and use them to decide who contacts the customer."
publishedAt: 2026-10-27
category: crm
principle: "Before adding fields or integrations to share account information across teams, count what people ask other teams before contacting a customer. Put those answers in a few lines at the top of the company record, built from existing records rather than typed, and use them to decide whether to contact the customer."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

"What's going on with this account right now?"

In the Japan offices of overseas SaaS companies I work with, this question shows up in Slack every week. The account executive knows the open deal. Support knows last week's ticket. The reseller knows when the contract ends. HQ marketing knows who came to the webinar. Everyone keeps records, and understanding one customer still means asking three or four people.

The information exists. **It is split by team, and each team's records are complete only for that team.**

## The customer receives every team's version

If the cost were only internal, it would be tolerable. The problem is that the customer sees the gaps.

Support is handling an outage for a Japanese customer, and the global nurture track sends that customer a product launch email the same week. The reseller is negotiating the renewal, and the Japan AE, who cannot see the reseller's notes, proposes the same expansion through a different contact. Every team followed its own process. Nobody made a mistake.

In "The future of B2B sales: How growth champions rewire their playbooks with AI" (July 2026), McKinsey reports from its 2026 B2B Pulse Survey (nearly 4,000 buyers and sellers across 13 countries) that **inconsistent information across teams is now the number one reason B2B buyers switch suppliers**. The article gives no percentage and does not list the countries, so treat this as a global signal, not a Japan figure.

On the Japan side, a survey by Mazrica, a Japanese SFA vendor (fieldwork by IDEATECH, November 2024, 101 sales managers and team leads using SFA/CRM), found 39.6% naming "the information we need is not shared" as a problem with their system. Only sales staff answered, and the question was not specifically about other departments. It is also a vendor survey with a small sample, so read it as a direction, not a benchmark.

## Three setup choices that widen the split in a Japan office

In the Japan setups I work with, three structural choices widen the split:

- **The contract may sit with a reseller.** Many overseas vendors sell in Japan through resellers or system integrators. The renewal date and the latest conversation then live in the partner's system or in email, not in your CRM.
- **Japanese-language support may run in a separate tool or queue.** A local support team, or a partner, handles tickets that never get associated with the account in the global CRM.
- **HQ marketing sends from the global calendar.** The person scheduling the campaign cannot read the Japanese support history even when it exists. This one applies to any region outside HQ, but it lands hardest where the history is in another language.

None of this is about Japanese customers. It comes from how the Japan business was set up.

## Before integrating anything, count the questions

The usual next step is a data integration project. The same McKinsey article describes a materials company that connected more than 20 data sources so sellers could see which customers and topics to focus on next. Its sellers spent 20% of their time with customers, against one-third to one-half for successful B2B sales teams, and the system was expected to free up more than 10% of the target sellers' time.

That is a large company making a large investment. A small Japan office that starts there can spend six months on requirements.

Start smaller. **Collect two weeks of the questions people ask other teams before contacting a customer.** You do not need everyone to keep a diary:

- Search the Japan Slack channels for your main accounts' names and pull the "what's happening with…" threads from the last two weeks.
- For questions asked in person, ask one or two people each from sales, support and marketing (and the reseller's account manager, if they will) to write one line when it happens: when, which account, asked whom, what.
- Have one person, the CRM admin or sales ops, collect and sort them.

Because this crosses teams, the request should come from the Japan country manager or someone with authority over all of them.

Two weeks is usually enough to see that the list is short. In the cases I have seen, the top questions look like this:

- Is a deal open, and who owns it?
- When does the contract end, and where is the renewal?
- Are there open tickets or incidents?
- Who last contacted them, when, and how?

That list comes from my own work, not from a survey. If your log shows different questions, use yours.

## Decide how each line is built, and do not have anyone type it

Put the answers at the top of the company (account) record. For the four questions above:

1. **Open deals:** count, plus the stage and owner of the most advanced one
2. **Contract and next renewal:** end date, and the stage of the renewal deal if there is one
3. **Open tickets:** count, and the creation date of the oldest
4. **Last touch:** date, channel and person of the most recent contact

Do not ask anyone to type these. A free-text "account status" field that the AE is meant to keep current stops being updated within two months, because maintaining it makes nobody's own work easier.

Not every line can be a rollup, though. The value type decides how you build it:

- **Counts and dates: roll them up.** In HubSpot, use standard company properties (number of associated deals, last activity date) or rollup properties; whether you can create custom rollups depends on your subscription, so check your plan. In Salesforce, roll-up summary fields work from Opportunity to Account. Standard Cases are not in a master-detail relationship with Account, so they cannot be rolled up that way (confirm in your org); build the count with Flow instead.
- **Stage, owner, channel, person: show them in a related list.** Rollups return counts, sums, minimums and maximums, not "the owner of the most advanced deal". Put the associated deals and activities on the company record, filtered and sorted (open only, newest first), so the top row is the answer.
- **If one value must sit in a single field, copy it with a workflow or Flow.** The renewal deal's stage is a typical case. Every copy is something to maintain, so use a related list where it is enough.

Finding the renewal deal assumes your deals already distinguish new business from renewal. If they do not, that is the one field you may need to add. Check before you start.

If one line still cannot be built, typically a renewal date held by a reseller, give it one named owner and an update rule, and show the last-updated date next to it.

## If support lives outside the CRM, bring back two values

All of this assumes tickets are in the CRM. In many of the Japan offices I see, they are not. You still do not need to move support. Consider a minimal sync that returns two values per company: the number of open tickets and the date of the oldest. Agree the matching key first, or even this small sync creates duplicates; see [Before connecting Japan's CRM, agree the matching key](/en/articles/decide-the-master-before-integrating/). Until the sync exists, keep line three as a manual line with an owner and an update date.

## Use the four lines to decide who contacts the customer

Four lines on a page change nothing if nobody looks at them, and the global nurture track never opens a company record.

- **Use the open-tickets line as a suppression filter for HQ campaigns,** so marketing email pauses while an incident is open.
- **Make reading the four lines a step before sales or support contacts the customer,** so nobody calls without knowing the renewal timing or an open issue.

## Fixing associations changes past numbers and live automation

When you build the four lines, the numbers will not match at first. Japanese support tickets are attached to a contact but not the company. Contacts imported from a trade show are not associated with any company. Partner-registered deals sit in a separate pipeline.

Fixing this is the real work, and the easiest place to break things. Before changing associations:

1. List the reports, workflows and integrations that use company associations or associated counts. More associations change company-level reports retroactively, and workflows triggered by counts can fire in bulk.
2. Save the current per-company counts, so you can explain the change when someone asks why a number moved.
3. Agree changes to ticket intake with the support lead, and with whoever owns any integration that syncs company associations.
4. Turning on automatic company creation or association by email domain can create duplicate companies. Free email addresses usually do not associate automatically.

Fix the association settings and intake steps first, and historical records afterwards. When you clean history, pause the related workflows and test on a small batch. If you only clean the past, next month looks the same.

Two options I would not start with. Moving every team, including the reseller, onto the global CRM is clean on paper and slow in practice, and the partner has little reason to change tools. A weekly cross-team call in Tokyo starts tomorrow, but nothing is left for HQ marketing or anyone who missed the call.

To see whether it worked, collect the questions again the same way two weeks after the four lines go live, and compare. A question that did not go away is a candidate for a fifth line, or for a manually owned field.

**Before adding fields or integrations to share account information across teams, count what people ask other teams before contacting a customer. Put those answers in a few lines at the top of the company record, built from existing records rather than typed, and use them to decide whether to contact the customer.**

Next week, when someone in the Japan channel asks "what's happening with this account?", note only what they asked. After a handful of these, you will know what belongs at the top of the record.

## Related reading

What to keep on a single deal when the owner changes is covered in [When Japan reps ask the last owner instead of reading the CRM](/en/articles/record-readable-in-three-minutes/). That note is about one deal read by the next rep; this one is about one account read by other teams.

Other notes on the same problem are collected under [CRM adoption](/en/category/crm/).
