---
title: "The business cards stay in the drawer, and then the rep leaves"
slug: "business-cards-stay-in-the-drawer"
lang: "en"
category: "input"
pain: "Exchanged business cards pile up in a drawer, no thank-you email ever goes out, and when the rep changes the relationship leaves with them"
feature: "Scan a card / first-touch draft"
screens: "Home, top right \"Scan a card\" / first-touch drafts right after saving / approval queue"
segment: "b2b"
edition: "b2b"
b2b_categories: ["standard", "contractor", "services", "reseller"]
help_slug: "card-scan"
video: "4"
sources: "supabase/migrations/146_product_help_articles_seed.sql (card-scan) / app/(dashboard)/contacts/scan/card-scan-view.tsx / lib/outbound/draft.ts / lib/consent.ts / components/outbound-draft-editor.tsx / lib/revops/recommend.ts (mkt-05) / src/lib/consent.ts / src/app/(dashboard)/contacts/scan/card-scan-view.tsx / src/lib/cards/consent.ts / src/components/outbound-draft-editor.tsx / src/lib/revops/execution.ts / src/lib/revops/catalog.ts / src/lib/revops/recommend.ts"
date: 2026-09-28
updated: 2026-11-20
featured: 1
author: "Seiko Yamaguchi"
---
A sales rep comes back from a trade show, wraps the business cards in a rubber band and puts them in a desk drawer. Forty cards. "I'll enter them when things calm down." Things never calm down. Six months later the rep resigns, the successor opens the drawer and finds a stack that tells them a company name and a person's name. What was discussed, what was promised next, all of it left with the person who quit.


## The loss is not 40 cards. It is 40 people who never heard back

What the company loses is not paper. It is the conversation that happened with each person. Someone who exchanged a card with you has listened to your pitch at least once, which puts them far closer than any lead you buy with ads. That asset never becomes the company's. It stays the rep's, and it walks out with them.

The reason the cards never get entered is simple: entering them is extra work. Typing one card by hand, with company, name, department, title, email and phone, takes, say, two minutes. Forty cards is 80 minutes. No rep has 80 spare minutes the day after a trade show. You can install a CRM, but until those 80 minutes disappear, the cards go back in the drawer.

There is a second loss that is harder to count. After a card exchange, how many people get a thank-you email? In most teams the day after the show is packing up and catching up, and by Monday it feels too late to send one. The real reason cards end up in the drawer is not only that entering them is tedious. It is that nobody has decided what happens after they are entered.

## In Revenue CRM, by the time the card is saved, the first email is drafted

Take a photo of the card and it reads the name, company, department, title, contact details and address, then shows you a confirmation screen. The only typing a person does is correcting a misread. Up to here, every card-scanning app does the same.

The difference is what happens after you press "Save". For each person you saved, a draft of the first email is written: subject, body, and a short note on why it is phrased that way, lined up right there on the screen. Scan thirty cards at a show and thirty drafts are waiting.

Nothing is sent. Only the drafts you edit and approve go out. You can review them one by one on the spot, or let them collect in the approval queue and go through them on the train. You can also keep scanning and approve drafts as they appear.

There is one more guard against sending by accident. On the confirmation screen, under "Emails you may send to this person", you decide for each person whether "Sales emails are OK" and whether "Newsletters are OK". "Sales emails are OK" starts out ticked, so untick it for anyone you are unsure about, such as someone who only stopped by the booth. For those people the draft shows "It is not yet decided whether this person may be contacted for sales. Nothing is sent until you decide.", and nothing goes out until you press "Allow sales contact". Your choice carries over to the next card, and you can change it per person. For an existing contact, an unsubscribe, do-not-contact or no-sales setting is kept as is. Trade-show cards are ambiguous by nature. Not every person who hands you a card means "please email me", and that call belongs on the screen while the card is in front of you, not in a rep's memory later.

Drafts also appear on days when the AI usage limit has been reached, or when AI is switched off: they fall back to a template. There is never a day when "no draft came out, so I did not send anything".

## Three places to scan

1. "Scan a card" at the top right of Home. This is the everyday one
2. "Scan card" on the Contacts list
3. "Scan card" in Contact roles on a deal. The person is attached to that deal as you save

![Home screen with the "Scan a card" button at the top right](/images/crm/media/screens/business-cards-stay-in-the-drawer-1-2026-10.webp)
*Top right of Home: "Scan a card". One click from the screen you open every morning. (Screens shown in Japanese; the UI is also available in English.)*

The steps are: photograph, check, press "Save". Shoot in good light with the card filling the frame. The card image itself is kept as an attachment on the contact, so you can look back later at what the card actually said.

![Card scan screen with two buttons: take a photo, or choose images](/images/crm/media/screens/business-cards-stay-in-the-drawer-2-2026-10.webp)
*The screen says it in so many words: what you photograph is not saved as is. You check the reading, then register.*

On the confirmation screen, look at two things: the company name and the person's name. Japanese variant characters such as 髙, 﨑 and 眞 are sometimes normalized to their standard forms. If a contact with the same email already exists, the confirmation screen says "Already registered as (name). Instead of creating a new contact, this card will update that one." and lists the fields that differ. Untick anything you want to keep, then press "Update (name) from this card": the existing contact is updated and the card image is attached. Updating an existing contact does not create a first-email draft. Companies are matched to existing records regardless of spelling differences (株式会社○○ and ○○ count as the same company), and a new one is created only if there is no match.



## The first step

Do not try to enter every card in the drawer. This week, scan only the ten most recent ones, and approve just three of the ten drafts that come out. You do not have to send them all. Three is three more than the drawer ever sent. Once the confirmation screen and the approval step feel familiar, you will find yourself scanning on the show floor. Migrating the rest can wait.

The in-product help article "Turn a business card into a contact" has the same instructions.

To explore the screens, choose **Startups & SMBs (standard)** in the [Revenue CRM demo](https://crm.consilegy.com/demos?edition=demo&lang=en).
