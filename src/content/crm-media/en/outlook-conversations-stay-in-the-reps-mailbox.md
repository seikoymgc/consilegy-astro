---
title: "Customer emails stay in the sales rep’s Outlook mailbox"
slug: "outlook-conversations-stay-in-the-reps-mailbox"
lang: "en"
category: "operate"
pain: "A handover waits for the outgoing rep to forward recent customer emails."
feature: "Import recent Outlook emails and read previews on a contact"
screens: "Settings → Integrations → Outlook → Mail → Sync now / Contacts → Email & events"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/settings/integrations/page.tsx / src/app/(dashboard)/settings/outlook/page.tsx / src/app/(dashboard)/settings/outlook/outlook-view.tsx / src/app/api/integrations/outlook/route.ts / src/app/api/integrations/outlook/sync-email/route.ts / src/lib/outlook-sync.ts / src/lib/google-sync.ts / src/lib/crm/contact-emails.ts / src/app/(dashboard)/contacts/[id]/page.tsx / supabase/migrations/105_active_org_rls_hardening.sql / src/lib/work-fuel.ts"
date: "2026-11-22"
author: "Seiko Yamaguchi"
---
A colleague takes over an account and can see the deal value, but not the last promise made to the customer. They ask the previous rep to forward the conversation and wait before replying. Access to that rep’s mailbox has become part of the handover process.

Revenue CRM can import recent Outlook messages that match existing contacts. The contact’s Email & events tab shows subjects and short previews, giving the new rep somewhere to start. It is a reference to recent correspondence, rather than a full email archive.

## Check what the business account will share

Imported messages are not private notes visible only to the person who connected Outlook. Treat them as records available to other members of the organization, and confirm that the account’s customer correspondence is appropriate to share there.

Only the person who connected Outlook can sync their own mailbox. For a handover, the outgoing rep needs to connect their business account and import the messages while still on the team. Connecting the incoming rep’s account will not retrieve the outgoing rep’s mail.

Open Settings → Integrations → Outlook. If it is not connected, use Connect Microsoft account and review the requested permissions. A Microsoft 365 administrator may need to approve the application. If the screen says the service’s connection setup is incomplete, ask the service operator to check it.

Once connected, permitted mail and calendar data also sync automatically every night. Sharing is not limited to occasions when someone clicks Sync now. Calendar bookings that qualify can create new contacts. The account can also become the sender for 1:1 emails and sequences; a connected Gmail account takes priority. Review these effects before choosing an account.

## Sync Mail, then open the contact

For an account already connected with mail-reading permission, click Sync now beside Mail on the Outlook integration screen. A connection without that permission needs to be reconnected.

Open the customer in Contacts and select Email & events. Check the subject, Sent or Received label, and preview. Google imports appear in the same area. The card heading currently reads Email & events (Google sync), but Outlook messages appear there too. There is no separate Outlook-only card. When nothing has been imported yet, the tab shows a prompt to connect Google, but Outlook messages appear there once synced.

The counterparty’s address must match an existing contact’s main or additional email address. Mail sync does not create a contact for an unknown sender. Messages addressed to several people are not guaranteed to appear against every recipient. Addresses on the connected account’s own domain and addresses classified as automated senders are excluded from matching.

## Use it for recent context, not a complete migration

Each sync checks up to 50 messages, ordered by received date, then imports those matching existing contacts. A contact’s tab displays up to 10 recent emails. It does not show the full message body or attachments.

Repeated syncs on the same connection do not add another copy of the same message. The success count is not necessarily the number of newly added records, so inspect the contact’s tab rather than using that count as proof. Repeated clicks will not page backwards through an old mailbox.

On a prepaid plan, each mail sync, manual or nightly, consumes Fuel. If it fails, check the connection and available balance. Disconnecting Outlook leaves previously imported emails and events in the system.

## Start with one account handover

Have the outgoing rep choose a customer with recent correspondence in their already connected business account. Check their contact address, sync Mail, and see whether the expected subject and preview appear in Email & events.

Use that preview to identify the conversation, then return to Outlook when the full message is needed. The handover can begin with a specific question about a particular email instead of a request to forward an entire mailbox thread.

To explore the contact screen, open the [demo](https://crm.consilegy.com/demos), choose B2B sales, and locate the Email & events tab. Microsoft accounts cannot be connected there.

