---
title: "Setting up HubSpot for a Japan team: don't merge lifecycle stage and deal stage"
description: "Global SaaS teams often tie lifecycle stage to deal stage into one funnel when they stand up HubSpot for Japan. Deals can move to closed lost; lifecycle stage does not move back on its own. Here is how that corrupts the counts HQ reads, and how to separate the two."
publishedAt: 2026-07-25
updatedAt: 2026-10-16
category: crm
principle: "Do not use lifecycle stage to track deal progress. Record wins and losses on the deal, and let lifecycle stage hold only what relationship the contact has reached."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
---

When a global SaaS company stands up HubSpot for its new Japan team, someone usually asks for "one clean funnel from inquiry to closed won." The local team is small, the request sounds efficient, and lifecycle stage gets wired to follow deal stage.

Weeks later, the "open opportunities" count HQ reads is higher than the deals the Japan team is actually working, and follow-up emails meant for live deals go out to contacts whose deals were lost.

**The cause is using lifecycle stage to track how far a deal has progressed. The two look alike, but they count different things.**

## What the merged funnel looks like

The setup is simple. When a deal is created, the contact's lifecycle stage moves to Opportunity. When the deal is won, it moves to Customer. Sales only has to move the deal, and the contact follows. On screen, it is one tidy line from inquiry to close.

Three conditions make this design more likely at market entry.

The Japan team is new and has no HubSpot administrator of its own, so the model is copied quickly from a template.

HQ wants Japan's numbers to roll up into the same global dashboard, so there is pressure to force one shared funnel.

And Japanese deals run long, with an internal approval stage that Western pipelines do not model, so a share of deals sit open for months and a share of them eventually close lost.

## Deals can move to lost. Lifecycle stage does not move back

The break shows up on lost deals.

The deal moves to closed lost. The contact's lifecycle stage stays at Opportunity. In HubSpot, automated updates such as forms and workflows only move lifecycle stage forward; moving it back requires a person to change it by hand, or clearing the value and setting it again. The merged design assumed lifecycle would move back and forth the way a deal does.

Two things follow.

- The "open opportunities" report counts contacts whose lifecycle stage is Opportunity. Lost contacts stay in that count, so it runs higher than the deals the team is actually working.
- The follow-up list for live deals is built on "lifecycle stage is Opportunity." Lost contacts still match, so they keep receiving the emails.

Someone will propose resetting lifecycle stage by hand after every loss. That depends on a person remembering every time, and at market entry no one does. Each miss adds to the same drift.

## Record the loss on the deal, and leave lifecycle stage alone

The fix is not to build a mechanism that moves lifecycle stage back. It is to stop asking lifecycle stage to carry deal status.

**Lifecycle stage records the relationship reached.** A contact who once had a deal stays at Opportunity after a loss. Read it as "has been an opportunity," not "is in an open deal," and make sure the people reading the report read it the same way.

**Advance it on conditions a rule can judge.** A form submission sets Lead, deal creation sets Opportunity, a won deal sets Customer. No one types it.

**Count live deals from deals.** The open pipeline is the deals that are neither won nor lost. Build the follow-up list on the stage of the associated deal, not on lifecycle stage.

With that split, the Japan count HQ reads matches the deals the team is working, and lost contacts drop out of the follow-up emails.

One company can also hold several deals at once. Deal stages line up one per deal; lifecycle stage is a single value. Pushing deal progress into that single value guarantees a mismatch somewhere.

**Do not use lifecycle stage to track deal progress. Record wins and losses on the deal, and let lifecycle stage hold only what relationship the contact has reached.**

Two correct pipelines beat one tidy one, especially when HQ is reading the result from the other side of the world.

## Related reading

Once stages are separated, the next thing that stops reconciling is the denominator. [Start with the denominator](/en/articles/define-the-denominator-first/) covers how to align it with HQ.

Other notes on the same problem are collected under [CRM adoption](/en/category/crm/).
