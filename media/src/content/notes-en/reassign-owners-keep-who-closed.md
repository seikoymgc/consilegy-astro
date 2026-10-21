---
title: "Before you reassign Japan accounts, freeze who closed them"
description: "When HQ bulk-reassigns Japan accounts after a rotation or departure, closed deals move to the new owner, rep rankings rewrite themselves, and owner-based automation fires. Copy the owner at close into its own field first, and transfer only open work."
publishedAt: 2026-10-21
category: crm
principle: "Treat the CRM owner field as the person who holds the next move today. Freeze who owned each deal at the moment it closed in a separate field, and when Japan accounts change hands, transfer only open deals, their accounts and contacts, and open tasks."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

A Japan account executive moves to a new role. Someone in HQ RevOps reassigns their book to the successor in one bulk action. It takes minutes.

At the next quarterly review, the rep ranking shows the successor near the top of Japan for a half-year they were not there for. The previous owner's line is almost empty.

Nobody made an input error. The owner field was being asked to mean two different things.

## The owner field holds both "who has it now" and "who closed it"

The owner on a CRM record (Deal owner and Contact owner in HubSpot, Owner in Salesforce) holds one value per record.

That one value is answering two questions. Who holds the next move with this customer today? And who won this deal?

Most of the time it is the same person, so the difference never shows. It shows on the day the accounts change hands.

Owner-based reports usually group by the current value. Run closed-won by owner after a bulk transfer and you get the person who holds the record now, not the person who closed it.

Depending on the tool and settings, the previous value survives in field history. Rebuilding reports from field history every quarter is not something any team keeps doing.

## A bulk transfer changes more than the numbers

When the owner value changes, everything keyed on it reacts at once.

- **Owner-based automation.** A workflow that starts when an owner is set can run again for every transferred record if re-enrollment is allowed
- **Assignment notifications.** The successor may get one notification per record, depending on notification settings
- **Customer-facing email.** Emails that pull the sender name or signature from the record owner will go out under the successor's name from the next send

The third one is the one Japanese customers see.

In Japan, a change of account manager is commonly announced by the outgoing and incoming reps together, in a joint visit or at least a joint message. If an automated email arrives first under a name the customer has never heard, the handover happens in the wrong order.

Japan can also make the timing predictable. Many Japanese companies move people in a scheduled rotation, often effective 1 April and in some companies also in October. Most foreign SaaS teams in Japan hire into fixed roles and do not rotate, but if your Japan team follows a local rotation calendar, or your channel partners do, this transfer comes back once or twice a year.

## Freeze the closing owner before you transfer anything

Four steps, in this order: stop, freeze, transfer, restart.

1. **List and pause owner-based automation and owner-sent email.** Workflows, assignment notifications, emails that use the owner as sender, sequences sent from the owner's inbox. Pause them or exclude the records you are about to touch. The backfill in the next step is itself a bulk update, and anything triggered by "property value changed" will react to it. If HubSpot and Salesforce are synced and owner is a synced field, confirm the sync direction now
2. **Add an "owner at close" field and backfill it once.** From now on, when a deal closes, won or lost, the current owner is copied into it automatically. Nobody types it. For deals that are already closed, copy in the current owner, but first use field history to find closed deals whose owner on the close date differs from the owner today. Those were already rewritten by an earlier transfer. Fill them with the owner on the close date, or have the Japan sales lead confirm them. Export the records before you start, and decide how to handle validation rules that block edits to closed opportunities in Salesforce
3. **Transfer only open work.** Open deals, their accounts and contacts, open tasks. Leave closed-won and closed-lost deals where they are. Salesforce's mass transfer for accounts lets you choose whether closed opportunities move with the account (the option labels vary by release, so check before you run it). In HubSpot, filter the deal view to open stages first, then bulk edit. If visibility is owner-based, the previous owner loses sight of the records mid-handover and the successor may not see the closed history; add them to the account or opportunity team, or the HubSpot team, before you transfer
4. **Restart what you paused.** Except one thing: hold any customer-facing send under the successor's name until the outgoing and incoming reps have told the customer

Then switch the owner-based performance reports from "owner" to "owner at close". Open pipeline reports stay on the current owner.

Snapshotting period-end numbers does not remove the need for this. A saved snapshot protects last quarter, but if the live report still groups by "owner", the next close will already include the effect of the transfer.

Step 2 is what makes the rest forgiving. If your policy requires every record owned by a leaver to be reassigned, closed deals included, the record of who closed them stays intact.

## If those numbers feed commission, decide before the announcement

The previous owner, now in another role, cannot see their own half-year. The successor sits at the top of a ranking for deals they did not win. Neither of them is likely to raise it.

If commission or reviews are calculated from live CRM reports after the period ends, every bulk transfer rewrites someone's compensation data. If commission is locked at close in a separate tool, you are safer, but check what that tool reads.

Find out where the performance numbers actually come from. It is not only the reports you built. HubSpot goals and Salesforce forecasts and quotas are built around the deal owner, and whether they can be pointed at a custom field needs checking. If they cannot, leaving closed deals untouched in step 3 is what protects those numbers.

One more decision belongs to people, not to the admin. A deal the previous owner worked for nine months and the successor closes a month after the handover will, under the steps above, close under the successor. If you also freeze an "owner at handover" field in step 3, you can split the credit later. The split itself is for the sales leader, HR and whoever calculates commission to decide.

So settle this before the rotation or departure is announced, not after.

**The CRM owner field describes who holds the next move today. Freeze who owned each deal at the moment it closed in a separate field, and when Japan accounts change hands, move only the open work.**

Open one owner-based closed-won report in your CRM and check what it groups by. If it is "owner", the next transfer will rewrite the past.

## Related reading

Once the records have moved, the successor still has to be able to read them. How to write records a new owner can act on without calling their predecessor is covered in [When Japan reps ask the last owner instead of reading the CRM](/en/articles/record-readable-in-three-minutes/).

Other notes on the same problem are collected under [CRM & SFA](/en/category/crm/).
