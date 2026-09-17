---
title: "CRM migration in Japan: when they ask to move every field"
description: "Your Japan team asks to migrate every field from the legacy system and says the unused ones can be deleted later. They will not be. HubSpot's own documentation shows why: a property in use cannot be archived, and an archived property is permanently deleted after 90 days. Reframe the choice from keep-or-discard to CRM-property-or-readable-archive, and the negotiation ends."
publishedAt: 2026-09-17
category: crm
principle: "In a Japan CRM migration, stop negotiating what to discard. Offer two destinations instead: a CRM property, or a readable archive. Nothing is lost, nobody has to approve a deletion, and the CRM stays light."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

You are rolling the global CRM out to your Japan subsidiary. The Japan team sends back a field list from their legacy system, which is usually kintone, a domestic sales-management package, or a spreadsheet someone has maintained since 2016. The request attached to it is short: migrate all of it. We can delete what we do not need later.

HQ reads this as low data maturity, or as resistance dressed up as thoroughness. It is neither. It is the only answer a single Japanese employee can give to that question without exposure, and the deletion will not happen later.

## Nobody on the Japan side can absorb the cost of discarding a record

Ask the Japan team privately and most will tell you that half those fields are dead. They still ask for all of them, because the two outcomes are not symmetric.

A field that gets migrated and never used costs nothing that anyone will trace back to a person. A field that was left behind and turns out to be needed has a name attached to it: the person who agreed to drop it. And the legacy system is usually decommissioned after cutover, so there is no recovery path.

This asymmetry exists everywhere. It bites harder in Japan for a specific reason. A decision of consequence is expected to move through 稟議 (ringi), the written internal approval circuit, where a named approver signs off. Discarding company records is exactly the kind of decision that circuit exists for. Your Japan counterpart, sitting in a project meeting with a vendor, has no standing to make it alone and no appetite to start a ringi document in order to throw data away.

So "everything" is not a requirement. It is the answer that needs no approval.

A second Japan-specific factor makes the underlying worry legitimate rather than merely defensive. Planned job rotation is normal in Japanese firms, so the person who understands an account is frequently not the person who built the relationship. The legacy record is often the only place the history survives. HQ, where account ownership tends to be more continuous, systematically underestimates what that history is doing.

## Asking Japan to prove a field is unused ends the conversation

There is a logic problem underneath the politics, and it is worth naming because it explains why the field-by-field review never converges.

"This field is used" needs one example. "This field is not used" is a claim about things that will not happen. If the legacy system logs field access you can measure it. Domestic packages and homegrown spreadsheets do not.

So when the migration lead says "show me which fields you actually use," the Japan team cannot answer, and the polite response to an unanswerable question is silence. The review stalls, the cutover date arrives, and everything migrates by default.

You cannot win this by negotiating harder on the reduction. You change what the two options are.

## Offer two destinations, not two verdicts

Replace "migrate or discard" with "CRM property or readable archive."

The readable archive is a read-only account on the legacy system, or a dated full export taken on cutover day and stored on the shared drive. Operating cost is close to zero. Not one record is lost.

Framed this way, "discard" is no longer on the table. Nothing is being thrown away, so nothing needs approving, and the thing your Japan team was protecting stays protected. In my experience the request to migrate everything simply stops once people see this.

What decides the destination is one question: **after cutover, who enters a value in this field?**

If no name comes back, the field has no reason to be a CRM property. A field that only holds historical values cannot be a reporting dimension, cannot drive a forecast, and cannot branch an automation. It can only sit in the record layout and make every future report builder stop and ask whether it is trustworthy.

Draw the line on reference frequency. Opened monthly or more, migrate it. Opened a few times a year, archive it. Ask "how many times did you open this in the last six months" and you will usually get a real answer, which you will not get from "do you need this."

## Adding a property is one decision; removing one is a sequence of tasks

"We will clean it up later" fails on mechanics, not on discipline. HubSpot documents both halves of it in "Organize, delete, and export properties" (last updated 11 June 2026).

A property that is used by assets such as a segment, a form, or a workflow **cannot be archived until it is removed from them.** The archive panel lists the assets blocking it, one by one, for you to go and unpick.

And **an archived property is permanently deleted after 90 days**, with the documentation stating plainly that properties archived 90 or more days ago cannot be restored.

Put those together and "later" means: strip every usage, archive, then make a final irreversible call within 90 days. That window sits exactly on top of the first quarter after go-live, when the Japan team is absorbing a new system and your implementation partner is working through a support queue. The cleanup does not happen. The field count you migrated is the field count you keep.

## Fix the cutover date first and the scope argument mostly dissolves

Decide the date before you decide the scope.

Records created from the cutover date forward go into the CRM. Everything before it stays in the legacy system and is read there. The question changes from "what do we move" to "when do we start writing in the new place," and a single date is something a Japanese project team can agree on in one meeting, because it is a schedule item rather than a disposal.

Migrate only what straddles that date: open deals, live contracts, tickets still in progress. Anything closed and static is adequately served by the archive.

Then add one line to the migration plan: **ninety days after cutover, export every property with its fill rate and review.** HubSpot exports property definitions and fill rate (the share of records holding a value) in one file, so the review takes half an hour. Fields at zero are the deletion candidates, and by then the evidence exists rather than being demanded in advance.

That line is what lets your Japan counterpart stop saying "everything." It moves the decision to a point where data supports it instead of asking them to carry it personally now. It also reads well in a ringi document, which matters more than HQ usually expects.

The input cost of the extra fields is not hypothetical. In a survey Keywalker ran from 8 to 10 October 2025 (online panel survey via PRIZMA, 1,034 frontline sales staff and sales managers at Japanese companies already using SFA, CRM, or BI tools), the second most common reason for delayed data entry was "too many fields to fill in," at 38.5%. It is a BI vendor surveying its own market, so read the figure as an order of magnitude. The relationship it points at is not in doubt: the field count you accept at migration becomes the screen your Japan reps face every day, and low adoption gets reported back to HQ as a Japan problem.

**Stop negotiating what to discard. Offer a CRM property or a readable archive, and let the cutover date carry the rest.**

Open the migration field list for your Japan rollout this week and write a name next to each field: who enters a value here after cutover. If more than half come back blank, what is being designed is not a CRM. It is a copy of the old system with a new login screen.

## Related reading

The same failure mode appears one step earlier, when the question is which record in the Japanese master corresponds to which record in the global CRM. That decision also gets postponed into a tool evaluation and also has to be made before anything moves: [Your Japan integration will not fail on the connector. It fails on the key.](/en/articles/decide-the-master-before-integrating/)

Other notes on the same problem are collected under [CRM adoption](/en/category/crm/).
