---
title: "Every email to an overseas customer waits for the one person who can write it"
slug: "overseas-emails-wait-for-the-one-english-writer"
lang: "en"
category: "input"
pain: "Emails from overseas customers, and the replies to them, all go to the one colleague who writes good English, and they sit there until that person has time. Pasting into a translator gives stiff, literal text"
feature: "Translate on emails (read an incoming message in your screen language; in the reply box, Drafts waiting to send, AI email on a contact and sequence email steps, rewrite the draft as a business email in Japanese, English or Traditional Chinese, preview it and Replace. Nothing is sent)"
screens: "Sidebar Inbox, incoming message: Translate, Original / Reply box: Translate → Translate into (日本語, English, 繁體中文), Translate, Replace, Close, Undo / Sidebar Drafts waiting to send: Translate, Approve and send / Contact page AI email: Translate / Sequences → Add step (email): Translate"
segment: "b2b"
edition: "b2b"
sources: "src/components/email-translate.tsx / src/lib/email-translate.ts / src/app/api/ai/translate/route.ts / src/app/(dashboard)/inbox/inbox-view.tsx / src/components/outbound-draft-editor.tsx / src/app/(dashboard)/outbound-drafts/outbound-drafts-view.tsx / src/components/ai-email-panel.tsx / src/app/(dashboard)/sequences/[id]/sequence-detail.tsx / src/lib/email-signature.ts / src/lib/ai-fuel.ts / src/lib/ai-quota.ts / src/components/app-sidebar.tsx / src/components/app-topbar.tsx / src/lib/demo.ts / src/app/(dashboard)/contacts/[id]/page.tsx"
date: 2026-10-22
author: "Seiko Yamaguchi"
---
The week after an overseas trade show, enquiries arrive from a company in Taiwan and another in the US. On the sales team, exactly one person writes business English with confidence. Every foreign-language email gets forwarded to her, and she writes every reply. She is also out at her own meetings most days, so replies go out in the evening or the next morning. Now and then a rep gets impatient, pastes Japanese into a free translator and sends whatever comes out.

## What you lose is speed, and words the other side actually understands

An overseas buyer who sends you an enquiry has usually sent the same one to your competitors. The supplier who answers first, clearly, tends to get the call.

Here's a rough number. Say four foreign-language emails come in a day, and your one writer frees up around 5 p.m. Every reply is then half a day to a day late. Add a time difference and each round trip costs another day.

Literal translation has its own cost. Japanese business email opens with set phrases that make no sense word for word in English. What you need isn't a translation. It's the email a native speaker would have written.

## In Revenue CRM, the Translate button lets you read an incoming email in your own language and rewrite your reply as a natural business email

There is a Translate button on the screens where you read and write email. Reading, it shows the message in your screen language. Writing, it rewrites your draft as a business email in the language you choose.

Reading first. Open a conversation from Inbox in the sidebar, and each incoming message has Translate underneath. Press it and the body appears in your current display language, marked "Translated by AI". Press Original to go back. To read in English, use the JA / EN switch at the top right of the screen.

Writing. Type your reply in the reply box in whatever language you think in, then press Translate. Choose a language under Translate into, press Translate again, and a preview appears. If it reads well, Replace swaps it into the reply box. Changed your mind? Undo brings back what you had before.

The rewrite follows a few rules. English comes out short, opening with "Hi name," (or "Hello," when the name is only in Japanese script) and closing with "Best,", without carrying over Japanese set phrases. Japanese comes out in standard business form. Names, company names, numbers, dates, amounts and URLs stay as they are, and nothing is added that wasn't in your draft. If your saved signature is at the end of the body, it is left untranslated and put back as is.

The same button sits in Drafts waiting to send, in AI email on a contact page, and on an email step when you use Add step in Sequences. Where there is a subject field and it isn't empty, the subject is rewritten too. If the contact's language is known, it is already selected as the target. If not, a draft written in Japanese defaults to English.

Five things to know before you rely on it:

- Translate never sends anything. Email goes out only when you press Send or Approve and send, as usual
- There are three languages: Japanese, English and Traditional Chinese. No Simplified Chinese, Korean or others
- Each translation uses 1 AI Fuel (charged when you press Translate in the panel, or Translate on an incoming message). If you're out of Fuel, your text stays as it was and a message tells you so
- Translations of incoming messages aren't saved. Leave the page and you press Translate again. Incoming subject lines aren't translated
- Broadcast emails have no Translate button, and in Sequences it only appears on steps you are adding

It's a rewrite, not a word-for-word conversion, so read the preview before you send. Checking that the numbers and dates match your draft catches most problems.

## The first step

This week, if your info@ address already forwards into Inbox, open one foreign-language conversation there and press Translate to read it. Write your reply in your own language, press Translate, pick the customer's language and look at the preview. For the first few, ask your one fluent colleague to read the preview and say "fine to send" or not. Her job shrinks from writing every email to checking a few.

The demo opens with just an email address. Pick "B2B sales", draft a message with AI email on any contact, and press Translate to see it rewritten in Japanese or Traditional Chinese. [Try the demo](https://crm.consilegy.com/demos)
