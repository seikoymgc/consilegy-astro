---
title: "Your email blast goes out before anyone checks who is actually on it"
slug: "bulk-emails-sent-without-checking-who-gets-them"
lang: "en"
category: "operate"
pain: "A campaign email goes out to the whole list without anyone confirming how many people get it, or whether the people who unsubscribed or never opted in were left out. You find out the next day, from a complaint"
feature: "Confirm send for email campaigns (see the list, how many will receive it, how many are excluded and why, the From address, the subject and every recipient's name and address before you press Send to N. After sending, Recipients shows each person's status)"
screens: "Sidebar Email → Email Campaigns, New campaign, Save / Campaign page: Send → Confirm send: List, Will receive, Excluded (Do not contact, Previously bounced, Unsubscribed, No marketing consent), From, Subject, Cancel, Send to N / After sending: Recipients (Sent, Delivered, Opened, Clicked, Bounced, Complained)"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/emails/[id]/email-detail.tsx / src/app/(dashboard)/emails/[id]/page.tsx / src/lib/campaign-send.ts / src/lib/campaign-recipients.test.ts / src/lib/consent.ts / src/app/api/emails/send/route.ts / src/app/(dashboard)/emails/new/page.tsx / src/components/app-sidebar.tsx / src/lib/i18n/translations.ts / src/lib/personas.ts / src/app/api/webhooks/resend/route.ts / src/app/api/demo/seed/route.ts / src/app/(dashboard)/settings/sending-domain/sending-domain-view.tsx / src/app/(dashboard)/settings/settings-index.tsx / src/lib/sending.ts / src/lib/revops/marketing-ops.ts / src/lib/revops/catalog.ts / src/lib/demo.ts"
date: 2026-10-23
author: "Seiko Yamaguchi"
---
It's Thursday afternoon and marketing is sending the webinar invite. The list is everyone you collected at trade shows and through the website. Somewhere in it is a person who replied last month asking to be taken off, and a few dozen people whose cards you scanned but who never agreed to hear from you. Nobody knows exactly who will be skipped until the email has gone. On Friday morning a sales rep forwards a short, annoyed reply from one of their prospects.

## What you lose is the trust of people who already said no

A mass-email mistake only has to happen once for the recipient to remember it.

Say your list has 600 people, and 20 of them have unsubscribed. Miss them, and 20 people who told you to stop hear from you again. If one of them is in the middle of a deal with your team, the rep pays for it. Marketing email is meant to go to people who agreed to receive it. If you can't say who is on the send before it goes, that gap is a business risk, not a technicality.

## In Revenue CRM, pressing Send opens Confirm send, so you see who gets it and who is left out first

A campaign doesn't go out the moment you press the button. A confirmation window opens first, and you send from there.

Open Email in the sidebar, use New campaign to set the subject, body, sender and list, and press Save. On the campaign page, press Send. The Confirm send window shows:

- List, and Will receive (the number of people it will go to)
- Excluded: how many people are left out, by reason. The four reasons are Do not contact, Previously bounced, Unsubscribed and No marketing consent. The row only appears when someone is excluded
- From and Subject
- A scrollable list of every recipient's name and email address

The buttons are Cancel and Send to N, with the actual number on the button. If no one is eligible, you see "No one can receive this" and the send button is disabled.

After sending, Recipients on the same page shows each person as Sent, Delivered, Opened, Clicked, Bounced or Complained.

Five limits worth knowing:

- Excluded people appear as counts only, not by name. Contacts with no email address, and contacts in the trash, aren't counted in either number
- The numbers are worked out when the campaign page loads. If you've just edited the list, reload the page before pressing Send. Lists that add and remove people by rule are refreshed once a day, at 10 a.m. Japan time, and only if the Dynamic list management automation is switched on
- Press Save after editing the body. The confirmation window doesn't show the body, and unsaved edits are not sent
- The window doesn't check your sending domain. If your domain under Sending domain in Settings isn't verified, Send to N won't go through. The same goes for a prepaid account that has run out of AI Fuel
- There is no test send, no way to recall a sent campaign, and no setting to limit sending to certain roles

## The first step

If you have a campaign going out this week, open it the day before, press Send, read the Confirm send window, and press Cancel. Look at the Excluded counts and scroll the recipient list. If the number isn't what you expected, you still have a day to fix the list.

The demo opens with just an email address. Pick "B2B sales", go to Email in the sidebar, open the draft campaign and press Send to see the confirmation window. The demo has no sending domain, so nothing is actually sent. Every demo contact has given consent, so the Excluded row won't appear. [Try the demo](https://crm.consilegy.com/demos)
