---
title: "The deal moved to chat, and the CRM stopped hearing about it"
slug: "chat-threads-stay-on-personal-phones"
lang: "en"
category: "input"
pain: "Customer conversations move to Slack, LinkedIn messages or LINE, and the dates and figures agreed there stay on one rep's phone while the deal record shows nothing"
feature: "Chat import"
screens: "Activities \"Import conversation\" / \"Channel\" (LINE, LINE WORKS, ChatWork, Slack, Messenger, LinkedIn) / \"Analyze\" / \"Summary\" \"Key points\" \"Next actions\" / \"Contact\" \"Create as new contact\" \"Deal (optional)\" / \"Import\" / \"View full transcript\""
segment: "b2b"
edition: "b2b"
sources: "src/components/chat-import-dialog.tsx / src/lib/chat-parsers/ai-extract.ts / src/lib/chat-parsers/line.ts / src/app/api/chat-imports/route.ts / src/app/api/chat-imports/[id]/confirm/route.ts / src/app/(dashboard)/activities/page.tsx / src/components/activity-timeline.tsx / src/lib/i18n/translations.ts (chatImport) / consilegy-astro: src/data/crm-faq.ts (AI training)"
date: 2026-10-03
author: "Seiko Yamaguchi"
---
The first exchange is by email. Somewhere around the second meeting the buyer says "just message me", or adds your rep to a shared Slack channel, or replies on LinkedIn because that is where they happened to be. From then on things move quickly. The request to revise the quote, "end of month works for delivery", "my director signed off": all of it arrives as chat.

Open the deal in the CRM and the last entry is three weeks old: "Quote sent". The dozen messages since then are on the rep's phone.

This is not one company. In eight years of CRM implementation work I have watched deal histories go quiet at the same moment everywhere: the moment the conversation left email.

## What you lose is not the chat log. It is what was decided in it

When chat does not reach the CRM, the first thing to go is the decisions. The agreed number, the changed delivery date, who approved it on the buyer's side. The most important parts of a deal tend to arrive as a single short line in a thread.

The second thing to go is the handover. When a rep changes territory or leaves, a personal messaging account does not transfer with the accounts. The successor starts from the buyer saying, "I already told your colleague."

Retyping is not the answer, because nobody keeps it up. Say rereading a thread and writing up the main points takes ten minutes per deal. With fifteen live deals, doing it once a week is 150 minutes. No rep has that every week.

I would not ban customer chat either. Refuse the channel the buyer chose and all you get is slower replies. Let the conversation stay where it is. The thing to remove is the ten minutes between the thread and the CRM.

## In Revenue CRM you paste the thread and get a summary and candidate next actions

Paste a chat thread and you get a summary, key points and candidate next actions. What a person does is correct them and choose which tasks to keep.

The way in is the "Import conversation" button, on the Activities screen and in the activity section of each contact and deal. It opens a box to paste into. Copy the thread and paste it. For LINE, which many teams selling into Japan end up using, you can select the exported chat history file (.txt) instead.

Pick the "Channel" (Slack, Messenger, LinkedIn, LINE and a few others) and press "Analyze". One limit to know up front: the summary and key points currently come back in Japanese, whatever language the thread is in, so for now treat them as a draft and rewrite the summary in place. Where the conversation mentions a deadline, the next action carries the date.

From here a person decides. The summary is editable on the spot. Each next action has a checkbox, and only the ones left checked become tasks. Keep "Send revised quote by month end". Uncheck "Will be in touch". A misread never becomes a commitment on its own.

The simplest route is to start from the deal itself. Opened there, the import is attached to that deal and there is nobody to pick. Opened from the Activities screen, the last step is "Contact": search by first or last name, or pick "Create as new contact" if they are not in the CRM yet (check the name order on the new contact afterwards). Linking a deal is optional, but an import with no deal chosen will not show in that deal's history.

Press "Import" and the summary is saved as a chat record. The pasted conversation is kept as well: open the contact or deal, and "View full transcript" on that record brings it back.

Two things worth knowing before you start. Very long threads are analyzed from the end only, and the screen says so: "Long conversation — AI analyzed the latest part only". What matters to a live deal is the recent part, so that is the part it keeps. And this is a copy taken at the moment you paste. Messages sent afterwards do not flow in by themselves. You paste again at the next milestone.

What you enter is not used to train AI models. You will be pasting threads with a customer's name and figures in them, so that is the answer when someone on your team asks.

## The first step

This week, pick one live deal: the one where chat has carried the most. Open that deal, press "Import conversation", paste the thread, fix the summary, keep one task, import.

Do not try to backfill every old conversation. Quote sent, terms changed, approval given. One paste at each of those points is enough to move the deal history past "Quote sent".

If you would rather see the screens first, the [demo](https://crm.consilegy.com/demos) opens with just an email address.
