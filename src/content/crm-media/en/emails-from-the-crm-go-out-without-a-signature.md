---
title: "Emails sent from the CRM go out with no name or phone number at the bottom"
slug: "emails-from-the-crm-go-out-without-a-signature"
lang: "en"
category: "setup"
pain: "The signature you set up in Gmail doesn't follow emails sent from the CRM. Reps either type it by hand every time or send customers a message with no name, title or phone number"
feature: "Email signature (each person saves one under Settings → Account; it is already at the end of the body in AI email on a contact, inbox replies and Drafts waiting to send)"
screens: "Sidebar Settings → You → Account → Email signature: Signature, Preview, Save signature / Contact page AI email: Suggest email, Send, Regenerate / Sidebar Inbox reply box: Send / Sidebar Drafts waiting to send: Add signature, Approve and send, Do not send"
segment: "b2b"
edition: "b2b"
sources: "supabase/migrations/231_member_email_signatures.sql / src/lib/email-signature.ts / src/app/api/email-signature/route.ts / src/hooks/use-email-signature.ts / src/app/(dashboard)/settings/account/page.tsx / src/app/(dashboard)/settings/account/account-client.tsx / src/app/(dashboard)/settings/account/email-signature-card.tsx / src/app/(dashboard)/settings/settings-index.tsx / src/components/app-sidebar.tsx / src/components/ai-email-panel.tsx / src/app/api/contacts/[id]/draft-email/route.ts / src/app/api/contacts/[id]/send-email/route.ts / src/app/(dashboard)/inbox/inbox-view.tsx / src/app/api/conversations/[id]/messages/route.ts / src/lib/outbound/queue.ts / src/lib/outbound/draft.ts / src/lib/outbound/send.ts / src/components/outbound-draft-editor.tsx / src/app/(dashboard)/outbound-drafts/outbound-drafts-view.tsx / src/app/api/outbound-drafts/route.ts / src/lib/consent.ts / src/app/(dashboard)/emails/new/page.tsx / src/lib/ai-fuel.ts / src/lib/demo.ts"
date: 2026-10-20
author: "Seiko Yamaguchi"
---
The day after a trade show, a rep sends thank-you emails to everyone whose card she collected. She sends them from the CRM so each one is logged against the contact. What the customer receives ends with "Best regards," and nothing after it. No name, no company, no phone number. The signature she set up in Gmail never made it, because Gmail only adds it to mail written in Gmail. Some reps notice and type it in every time. Others don't notice at all.

## What you lose is your reps' time, and the customer's next move

An email with no signature makes the reader do extra work. Someone who wants to call has to hunt for a number. Someone who wants to forward it to a colleague has to explain who you are.

Here's a rough number. Say five reps each send ten emails a day, and typing a signature takes a minute per message. That's 50 minutes a day across the team, or around 17 hours a month, spent retyping the same four lines.

The bigger problem is inconsistency. One rep has an old title, another an old phone number, a third sends nothing at all. To a customer you're emailing for the first time, those last few lines are your business card.

A signature shouldn't depend on someone remembering it on every email. It's a setting you get right once.

## In Revenue CRM, save it once under Settings → Account and it's already at the end of every one-to-one email

Each person saves one signature under Settings → Account, and it's already sitting at the end of the body in AI email, inbox replies and Drafts waiting to send.

Open Settings in the sidebar and choose Account under You. You can also type "signature" into the settings search box. In the Email signature card, write your name, company and team, phone number and email address on separate lines in the Signature field, then click Save signature. You have up to 1,000 characters, and the Preview underneath shows how it will sit below the body.

Once saved, your signature appears at the end of the body in three places:

- The draft that opens when you click Suggest email in the AI email card on a contact
- The reply box when you open an email or form conversation in Inbox
- First-touch drafts for new leads in Drafts waiting to send

The signature isn't attached behind the scenes when the email goes out. It's part of the text you're looking at, so you can delete or tweak it for a single email, and the signature arrives exactly as you see it. (AI email and Drafts waiting to send also add a one-line unsubscribe link below it, shown in Japanese.) When AI writes the draft, it's told not to add your name or contact details, which makes a doubled signature unlikely. Adding the signature itself costs no Fuel, though Suggest email still uses Fuel to write the draft, as before.

A few things to know:

- Each person has one signature per workspace. There's no screen where an admin sets everyone's signature, and no company-wide template. It's plain text only, so no logo or images
- Bulk campaigns and sequences don't use it. For campaigns (Email in the sidebar), add your sign-off as a block when you build the body
- Drafts waiting to send store the signature that existed when the draft was created. A draft carries the signature of whoever created it; drafts from a form submission carry the contact owner's signature, or none if there's no owner yet. If someone else clicks Approve and send, the email goes out from the approver, so check the name at the bottom first. Add signature appears on any draft that doesn't end with your own signature. On a draft that already has someone else's or an old signature, clicking it stacks a second one underneath, so delete the old one first
- An inbox reply starts with a blank line and then your signature. Type in the blank line above it. Enter sends the reply straight away, so use Shift+Enter for a new line

## The first step

Today, ask every rep to open Settings → Account → Email signature and save a signature in the same four-line format: name, company and team, phone, email. Post one finished example in your team chat so everyone copies the same layout.

Then have each rep open a real contact, click Suggest email under AI email, and check that their signature sits at the end of the draft. No need to send it. Finally, open Drafts waiting to send and look for drafts with no signature, or with someone else's.

In the demo, which only needs an email address, choose B2B sales, write a signature under Settings → Account, and watch it show up in the Preview and in AI email on a contact. The demo is shared with other visitors, so clear the field and save again when you're done. [Try the demo](https://crm.consilegy.com/demos)
