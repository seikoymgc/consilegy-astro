---
title: "Merging Duplicate CRM Records: Name the Approver First"
description: "Check recovery options and downstream effects before merging. Separate automatic merges, human review and records that must stay apart, and name the approver for exceptions."
publishedAt: 2026-10-03
updatedAt: 2026-10-17
category: crm
principle: "Check recovery options and downstream effects before merging. Separate automatic merges, human review and records that must stay apart, and name the approver for exceptions."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

HQ asks the Japan team to clean up duplicate CRM records, and sends a rule: same email, merge. Same domain and similar name, flag.

The rule takes half an hour to write. The merge itself sits untouched for weeks.

## The rule is not what stalls the merge

A merge cannot be undone. Two records become one, and whatever the surviving record does not carry is absorbed or lost.

"We merged the wrong pair, put it back" does not work. The details vary by tool, but do not plan on being able to restore the two original records cleanly.

That is what separates a merge from adding a field or redesigning a view.

The second problem is ownership. If the two duplicates belong to two different reps, merging changes whose account it is.

The rule is a data question. Running it is a relationship question.

So a finished rule leaves a button nobody presses, because whoever presses it owns the mistake.

## Sort duplicates into three boxes

Split every duplicate into one of three groups before anything runs.

Auto-merge: pairs a machine can call the same person with certainty, where one side has no history. If it goes wrong, almost nothing is lost.

What counts as a machine-certain duplicate depends on the tool.

HubSpot already deduplicates contacts on email address, so the duplicates left are mostly the same person under a different address, and few of them are certain.

Salesforce starts from duplicate rules and matching rules that warn or block, and a person sitting in both a lead and a contact is a separate case.

Decide which tool feature will do the merging before you write the auto-merge condition.

Human review: same company but possibly different people, history on both records, or two different owners. These become review tasks. A script does not merge them.

Never merge: separate sites or departments that run as separate accounts, and lookalike names known to be different legal entities. Record the reason on the record so the next clean-up does not undo it.

The first box clears fast. The second is where the work is, and where an approver is needed.

## Before anything runs: export, surviving values, integrations

Three things apply to every box.

Export the affected records, every field, before the merge. Since the operation cannot be reversed, this is what you repair from if a pair was wrong.

Decide which values survive: owner, lifecycle stage, create date, and email opt-out status. Which ones survive changes who can be emailed and the denominator of your conversion rates.

For opt-out, the rule is fixed: if either record is opted out, the merged record is opted out. Get this wrong and a Japanese contact who unsubscribed can start receiving email again the moment the merge runs.

Check the integrations. Records synced with marketing automation, with a HubSpot-Salesforce connector, or carrying an external ID from an ERP can leave an orphan in the connected system when one side disappears, or be recreated by the next sync.

Confirm which surviving record keeps the matching key before you merge.

## The approver is whoever loses something, not whoever wrote the rule

Many teams give merge approval to the CRM admin because the admin can operate the tool.

The admin does not know which of two records is the real account. The rep who meets that customer does.

For the review box, we suggest this. Same owner on both records: that owner decides. Different owners: the sales lead decides.

Undecided by a set date: do not merge, keep both. Allow one hold at most; if the second deadline passes too, close it as keep both.

The deadline default matters most. Leaving undecided items open means the project never ends.

Merging them automatically at the deadline turns approval into a formality.

"Undecided means keep both" is the safest default, and a later merge is always possible.

## In Japan, circulate a list instead of asking one by one

In Japanese offices agreement tends to move faster on a document passed around than in a meeting. Asking each rep about each pair is tiring and slow.

Send the review box as one list with a column for merge, keep separate, or hold, and one line on why the two records look the same.

Each owner decides only what is theirs, in one pass. This moves a stuck approval more reliably than restating the rule.

What to settle before the first load is covered in [Before importing your Japan contact lists, decide three things](/en/articles/clean-lists-before-crm-import/). This note picks up after the data is already in.

**Deciding who has the authority to merge is a heavier job than writing the merge rule. A merge cannot be undone. Split duplicates into auto-merge, human review and never-merge, and name the approver for review and exceptions before anyone runs it.**

This week, take ten duplicate candidates and put them into the three boxes. Count what lands in review, and write down who would approve each.

If you cannot name the approver, that is what the merge is waiting on.

Time how long each review item takes while you sort; it gives the approver a real estimate of how much rep time the full clean-up will borrow.

## Common mistakes

Handing approval to the CRM admin. The admin can run the merge but cannot tell which record is the real account.

Merging at a deadline because nobody replied. Approval becomes a formality, and the wrong pair is lost for good.

Re-explaining the rule when approvals stall. The rule was never the blocker; the blocker is who signs.

## Related reading

Merging can also shift past numbers; why reports recalculate history is in [Japan's conversion rate changed after you reported it to HQ](/en/articles/reports-recalculate-the-past/).

Other notes on the same problem are collected under [CRM adoption](/en/category/crm/).
