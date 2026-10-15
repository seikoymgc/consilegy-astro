---
title: "Nobody knows who answered the info@ inbox"
slug: "nobody-knows-who-answered-the-info-inbox"
lang: "en"
category: "input"
pain: "A question sent to the company's shared address sits in whoever's mailbox received it, so nobody else can tell whether it was answered or who owns it, and double replies and silent drops both happen"
feature: "Inbox (form submissions and mail forwarded from a shared address line up as conversations on one screen; each gets an owner and is closed with Resolve. Replies go out from the same screen and are logged on the contact's Activity tab)"
screens: "Sidebar Inbox / + (New inbox), Inbox name, Email, Address you will forward from (e.g. info@example.com), Create / forwarding address and Copy / Open, Resolved, All / Owner, Unassigned / Resolve, Reopen / Type a reply... (Shift+Enter for newline), Send / the Form inbox / contact record Activity tab"
segment: "b2b"
edition: "b2b"
sources: "src/components/app-sidebar.tsx / src/lib/personas.ts / src/app/(dashboard)/inbox/page.tsx / src/app/(dashboard)/inbox/inbox-view.tsx / src/app/api/inboxes/route.ts / src/lib/email-inbox.ts / src/app/api/webhooks/email-inbound/route.ts / src/lib/form-inbox.ts / src/app/api/forms/[id]/submit/route.ts / src/lib/contact-intake.ts / src/app/api/conversations/[id]/route.ts / src/app/api/conversations/[id]/messages/route.ts / src/lib/gmail.ts / src/lib/sending.ts / src/lib/email-log.ts / src/lib/demo/extras.ts / src/lib/i18n/translations.ts / supabase/migrations/018_conversations.sql / supabase/migrations/223_form_inbox_channel.sql"
date: 2026-10-15
author: "Seiko Yamaguchi"
---
Thursday afternoon, a message lands at info@: "Could you send us a quote?" The office manager forwards it to the three salespeople with "Can someone take this?" On Friday it turns out two of them replied, separately, with different numbers. Another message from the same week got no reply at all, because each of the three assumed one of the others had taken it. It surfaces two weeks later as a phone call: "We never heard back."

## What you lose is not speed. It is knowing who holds the ball

A slow reply is a smaller problem than a reply nobody can account for. When no one can check whether a message was answered, or by whom, two things happen: double replies make you look like a company that does not talk to itself, and dropped messages are deals that quietly never start.

Suppose twenty inquiries a month reach the shared address and one of them is never answered. At an average order of five thousand dollars, that is sixty thousand dollars a year in deals that arrived and were never opened. A forwarded email with "can someone take this?" is not the same as deciding who owns it.

## In Revenue CRM, inquiries line up as conversations in the Inbox, each with an owner and a Resolve button

Open Inbox in the sidebar and every inquiry is a conversation. You pick an owner for each one and close it with Resolve once it is answered. The menu item is shown to every role, whichever role chip is selected.

There are two ways in. The first is Revenue CRM's own web forms: every submission becomes a conversation in an inbox called Form (shown as フォーム on the Japanese screen), with the form name as subject and one line per field in the body. The second is your shared address. Press the + next to the Inbox heading (New inbox), give it an Inbox name, choose Email as the type, and the field "Address you will forward from (e.g. info@example.com)" appears. Enter info@ and press Create. The screen then shows a forwarding address that belongs to this inbox alone, with setup notes for Gmail, Google Groups and Outlook. Forward info@ to that address and incoming mail shows up here. The sender's address is matched to an existing contact, or a new contact is created.

The list switches between Open, Resolved and All. Open a conversation and the Owner selector sits at the top: Unassigned, or any member of your organization. Press Resolve when it is handled and it moves to Resolved; Reopen brings it back. To answer, type in the reply box and press Send (Enter sends; Shift+Enter starts a new line). If the person replying has connected their Google account, the mail goes out from their Gmail. Otherwise it goes from your organization's verified sending domain, or, if none is verified, from Revenue CRM's shared sender address. When the conversation is linked to a contact, the reply is logged on that contact's Activity tab as an email and the last-contacted date moves. New conversations and messages appear while the screen is open, without reloading.

Five things to know before you rely on it.

- Picking an owner sends no notification to that person, and there is no "mine" filter. The routine is to open the Open list and read the owner on each conversation.
- Replies go out from the replier's Gmail, your sending domain or Revenue CRM's shared sender, not from info@. If the customer replies to that address, the message reaches the Inbox only if that mailbox is forwarded too. Mail from the same sender with the same subject stacks into one conversation, but a reply that arrives after you pressed Resolve opens a new conversation.
- If the new inbox shows "Email receiving is not set up yet" instead of a forwarding address, the operator still has to finish the setup on their side. Form submissions keep arriving in the meantime.
- Attachments are not pulled in and cannot be added to replies. When sending fails (no recipient address, a contact marked do-not-contact), the text simply returns to the reply box; no error message is shown.
- Inboxes and conversations cannot be deleted. A contact created from an email is not linked to a company, so open the contact later and attach one if you need it.

## The first step

This week, forward one shared address. Create an Email inbox under Inbox, press Copy on the forwarding address it gives you, and add it in Gmail under Settings, then Forwarding and POP/IMAP, then Add a forwarding address. The confirmation code arrives in this inbox.

Once mail is flowing, do one thing as a team for a week: give the first message an Owner, and press Resolve after replying. At next week's stand-up, open the Open list and check only whether every remaining conversation has an owner.

The demo needs only an email address. Choose "B2B sales" and the Inbox comes with sample conversations, so you can try the Owner selector and Resolve on the same screen. [Try the demo](https://crm.consilegy.com/demos)
