---
title: "Nobody is sure where in the CRM a bulk email or a one-to-one email is sent from"
slug: "bulk-and-one-to-one-email-get-mixed-up"
lang: "en"
category: "setup"
pain: "The CRM can send email, but nobody was told that one-to-one email and bulk email start in different places with different prerequisites, so people go back to BCC from their own mail client and the CRM never learns who was sent what"
feature: "One-to-one email (\"Drafts waiting to send\", the \"AI email\" card on a contact, the Google connection) / bulk email (email campaigns, sending domain, lists) / pushing a list to HubSpot"
screens: "Sidebar \"Drafts waiting to send\": \"Draft for new leads\", \"Allow sales contact\", \"Approve and send\" / Contact page \"AI email\": \"Suggest email\", \"Send\", \"Regenerate\" / Settings \"Integrations\" → \"Google\" → \"Google integration\": \"Connect Google account\" / Sidebar \"Email\" → \"Email Campaigns\": \"New campaign\", \"List\", \"Save\", \"Send\" / Settings \"Sending domain\": \"Add a domain\", \"Register & get DNS records\", \"Verify\", \"Verified\" / Sidebar \"Lists\" → \"New list\", \"Keep members in sync with criteria\", \"List criteria\", \"Add condition\", \"Save criteria\" / \"Automations\": \"Dynamic list management\" / List page \"Push to HubSpot\" / Settings \"Integrations\" → \"Another CRM (read-only)\" → \"CRM sync\""
segment: "b2b"
edition: "b2b"
video: "7"
sources: "src/components/ai-email-panel.tsx / src/app/api/contacts/[id]/send-email/route.ts / src/app/api/contacts/[id]/draft-email/route.ts / src/lib/gmail.ts / src/lib/sending.ts / src/lib/consent.ts / src/app/(dashboard)/settings/google/google-view.tsx / src/app/(dashboard)/settings/page.tsx / src/app/(dashboard)/settings/integrations/page.tsx / src/app/(dashboard)/emails/new/page.tsx / src/app/(dashboard)/emails/[id]/email-detail.tsx / src/app/api/emails/send/route.ts / src/lib/campaign-send.ts / src/components/email-builder.tsx / src/app/(dashboard)/settings/sending-domain/sending-domain-view.tsx / src/app/api/settings/sending-domain/route.ts / src/app/(dashboard)/lists/new/page.tsx / src/components/list-criteria-editor.tsx / src/lib/revops/marketing-ops.ts / src/lib/revops/catalog.ts / src/app/(dashboard)/lists/[id]/list-detail.tsx / src/lib/delivery/hubspot-push.ts / src/app/(dashboard)/settings/crm-sync/crm-sync-view.tsx / src/app/(dashboard)/outbound-drafts/outbound-drafts-view.tsx / src/components/outbound-draft-editor.tsx / src/app/api/outbound-drafts/[id]/route.ts / src/lib/outbound/send.ts / src/app/api/forms/[id]/submit/route.ts / src/app/(dashboard)/contacts/[id]/page.tsx / src/app/(dashboard)/lists/[id]/page.tsx / src/lib/demo.ts / src/lib/personas.ts / src/components/app-sidebar.tsx / src/lib/i18n/translations.ts"
date: 2026-10-08
author: "Seiko Yamaguchi"
---
It is the week after the trade show. A rep wants to thank the 120 people she met at the booth and send them the deck. She knows the CRM "does email". She does not know where. So she opens her usual mail client, pastes 120 addresses into BCC and hits send.

The same week, the marketer tries to send the monthly update from the CRM, gets an error, and sends it the old way too.

## What you lose is not the effort. It is the record of who was sent what

A BCC blast leaves nothing in the CRM.

The effort you can count. Say five reps, twice a month, spend 30 minutes each rebuilding and checking a recipient list. That is five hours a month.

The rest is harder to count and costs more. Nobody can see who received the email, and there is nowhere for "please stop emailing me" to land.

The confusion does not come from a missing feature. It comes from calling two different things "email". A one-to-one message and a bulk send differ in where you start, who the sender is, and how it is decided that a person may be emailed at all. The first decision is not the copy. It is whether you may write to this person.

## In Revenue CRM, one-to-one starts in "Drafts waiting to send" and bulk starts under "Email"

Neither route sends to someone with no record that they may be contacted. So learn two things for each: where to start, and how that record gets made.

### One-to-one email

A contact you just scanned from a business card or imported from a CSV is undecided: nobody has said yet whether sales may contact them. Start at "Drafts waiting to send" in the sidebar. A scanned card already has a first email drafted there. If nothing is waiting, click "Draft for new leads". Open a draft, edit it, and click "Allow sales contact", which records the decision. Then "Approve and send" sends it.

Once that decision is on record, you can also write from the "AI email" card on the contact's page: "Suggest email" drafts it, you edit, and you click "Send". For an undecided contact that card shows "Cannot send", followed by a reason that currently appears in Japanese.

To send from your own Gmail, go to Settings, "Integrations", "Google", and click "Connect Google account". If you skip this, sending still works, but the message leaves from the CRM's sender instead of yours. Sent mail is logged on the contact's "Activity" tab, as an entry that starts with 送信: (Japanese for "sent") and your subject line.

### Bulk email

Under "Email" in the sidebar, click "New campaign", enter a subject and body, choose a "List" and "Save". On the campaign page that opens, "Send" sends it right away. If your sidebar role is set to "Sales" you will not see "Email" or "Lists" at all, so switch to "Marketing" or "All".

Three things have to be in place first.

One, the sending domain. Under Settings, open "Sending domain", enter your domain and sender name, and click "Register & get DNS records". Add the records shown to your company's DNS and click "Verify". Until the badge reads "Verified", a campaign sends nothing, not even one message. Only an owner or admin can do this.

Two, the list. Under "Lists", create a "New list" and tick "Keep members in sync with criteria". On the next screen, under "List criteria", use "Add condition" and then "Save criteria". Members arrive on the nightly refresh, so save at least a day before the send. That refresh only runs while "Dynamic list management" is switched on under "Automations". Both steps need an owner, admin or manager.

Three, consent. Within the list, a campaign reaches only people with recorded marketing consent who have not unsubscribed. That consent is recorded when someone ticks the consent box on one of your CRM forms. Contacts you imported or scanned have none, and if nobody on the list qualifies, the send stops with "No sendable contacts". The unsubscribe link is added for you.

If you already email your existing database from HubSpot, keep doing that and hand it the list. Save a HubSpot access token that can write contacts and lists under Settings, "Integrations", "Another CRM (read-only)", and "Push to HubSpot" on the list page starts working. It creates a static list with the same name in HubSpot. The send itself, and your opt-outs, stay on the HubSpot side.

## The first step

One thing this week. Open "Drafts waiting to send", pick five people you met at an event or a visit, and take each one through "Allow sales contact" and "Approve and send". Deciding, one person at a time, that you may write to them, and leaving that on record, is what keeps the team from drifting back to BCC.

If you would rather look first, the [demo](https://crm.consilegy.com/demos) opens with just an email address. Choose "B2B sales", open any contact and find the "AI email" card. It is a shared environment, so do the real sending and the Google connection in your own workspace.
