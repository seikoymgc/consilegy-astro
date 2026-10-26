---
title: "The deal has one contact on record, and who actually signs off lives only in the rep's head"
slug: "nobody-knows-who-signs-off-on-the-deal"
lang: "en"
category: "input"
pain: "Each deal records a single point of contact. Who holds the budget, who makes the final call, and who is pushing for you inside the account are known only to the rep. The deal stalls the moment the rep moves on, the contact changes jobs, or someone in the pipeline meeting asks who the decision maker is"
feature: "Contact roles (on the deal page, list everyone involved in the deal with a role: Decision maker, Economic buyer, Champion, Evaluator, User, Influencer, Other. One person carries the Primary badge. A business card scanned from the deal adds that person to it)"
screens: "Deal page, Contact roles card: Add → Select a contact, Select a role → Add, Set as primary, × (remove), Scan card"
help_slug: "card-scan"
sources: "src/app/(dashboard)/deals/[id]/deal-contact-roles.tsx / src/app/(dashboard)/deals/[id]/page.tsx / src/app/(dashboard)/contacts/scan/card-scan-view.tsx / src/app/(dashboard)/forms/[id]/page.tsx / supabase/migrations/010_deal_complete.sql / supabase/migrations/146_product_help_articles_seed.sql"
segment: "b2b"
edition: "b2b"
date: 2026-10-26
author: "Seiko Yamaguchi"
---
The deal looked healthy. Your contact, a team lead, liked the demo and asked for a quote. Then the replies stopped. In the pipeline meeting the sales manager asks, "Who signs off on this one?" The rep pauses. "Probably the department head. I haven't met them." In the CRM, the deal has exactly one person attached: the team lead.

## What you lose is time spent not meeting the buyer, and relationships nobody can hand over

B2B purchases are rarely one person's call. The people who use the product, the people who compare options, the person with the budget and the person who gives the final yes are often different people. When a deal records only the first contact, three things go wrong.

First, the stage moves forward while nobody has met the person who decides. Finding out at the quote stage that the department head is looking at another vendor is late.

Second, handovers. When a deal changes owner, the new rep inherits a name and some notes. Who is on your side and who is skeptical leaves with the previous rep.

Third, your contact moves on. Say a deal takes six months: there is a fair chance your contact changes role along the way. With one person on record, that is the day the deal stops.

## In Revenue CRM, the Contact roles card lists everyone on the deal with their role

Open a deal and find the Contact roles card. Click Add, pick a person under Select a contact, pick a role under Select a role, and click Add.

There are seven roles:

- Decision maker: gives the final yes
- Economic buyer: decides whether the money is spent
- Champion: argues for you inside the account
- Evaluator: runs the comparison or the trial
- User: will use the product day to day
- Influencer: has a say in the decision
- Other

The first person you add gets the Primary badge. The contact already shown under Related records on the deal is not added to this card automatically, so add your main contact first if you want the badge on them. To move it later, click Set as primary on someone else's row. Each name links to that person's contact page.

If you are handed a business card in the meeting, use Scan card on the same card. The person is saved as a contact (or the existing contact is updated) and joins this deal with the role Other, which you can then correct.

Four things to know:

- You can only pick people who already exist as contacts. The list is not filtered by company: it lists the contacts in your workspace by last name. Add someone new first, by scanning their card or creating the contact
- Each person has one role per deal, and there is no way to edit it. To change it, remove the person with × and add them again
- × removes the person immediately, with no confirmation and no record of who did it
- Roles appear only on the deal page. They do not show on the contact page, in the forecast or in Pipeline review, so you cannot pull a list of deals with no decision maker

## Your first step

This week, open every deal with a close date this month or next and check whether the Contact roles card has a Decision maker or an Economic buyer. The deals without one are the deals where you don't yet know who to meet next.

Then ask your contact one question: "Who makes the final call on this?" Once you have a name, add your main contact first, then create the new contact and give them the role, even if you have never met them. The deals where that box stays empty tell you exactly what to ask in next week's meeting.

For getting budget and authority out of call notes, see [The deal update says "it went well" and nobody knows the budget or the buyer](/en/crm/media/b2b/deal-reports-end-with-a-good-feeling/).

Try the demo with just an email address. Choose B2B sales and open any deal under Deals to find the Contact roles card. Demo deals start with it empty, so click Add and try one person (the demo is shared, so you may see rows other visitors added). [Try the demo](https://crm.consilegy.com/demos)
