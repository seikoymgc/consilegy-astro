---
title: "Teammates who don't read Japanese can't use the CRM"
slug: "teammates-who-dont-read-japanese-cant-use-the-crm"
lang: "en"
category: "setup"
pain: "Reps who don't read Japanese, or colleagues at an overseas office, can't work in a Japanese-only screen. They ask a coworker to enter things for them, or give up and keep deals in their own notes"
feature: "Display language switch (JA, EN and 繁中 buttons at the top of the screen. One click changes the interface language in place. The choice is kept per browser and doesn't change anyone else's screen)"
screens: "Top bar, right side: JA, EN, 繁中 / On phones: the same buttons inside the menu under the person icon (My account) at the top right / Language buttons on the login screen / Language buttons at the top right of the demo page (/demos)"
segment: "b2b"
edition: "b2b"
sources: "src/components/app-topbar.tsx / src/lib/i18n/context.tsx / src/lib/i18n/lang-cookie.ts / src/lib/i18n/tt.tsx / src/lib/i18n/translations.ts / src/lib/i18n/server.ts / src/lib/i18n/format-date.ts / src/hooks/use-lang.ts / src/app/layout.tsx / src/app/(auth)/login/login-client.tsx / src/lib/demo-lang-switch.ts / src/lib/demo.ts / src/app/demos/demos-client.tsx / src/lib/api-i18n.ts / src/lib/deals-i18n.ts / src/lib/notify.ts / src/lib/task-reminders.ts / src/lib/revops/util.ts / src/app/api/agent/chat/route.ts / src/app/api/contacts/[id]/draft-email/route.ts / src/app/api/calls/analyze/route.ts / src/lib/chat-parsers/ai-extract.ts / src/app/api/contacts/export/route.ts / src/app/api/orgs/route.ts / supabase/migrations/061_org_language.sql"
date: 2026-10-20
author: "Seiko Yamaguchi"
---
A new rep joins the sales team in Tokyo. She's sharp, she's closing, and she doesn't read Japanese. The CRM shows everything in Japanese. She tries to log a new deal and stalls on the first field she can't read. She can ask the person next to her, point a translation app at the screen, or write it in her own notebook. Most days it's the notebook. The deal is real, but it never makes it into the system.

## What you lose is the time spent asking, and the deals that never get logged

When people can't read the screen, data entry turns into a favor someone else has to do. That's the cost.

Here's a rough number. Say two teammates don't read Japanese and each spends fifteen minutes a day asking colleagues what a screen means. Counting the person asking and the person answering, that's an hour a day, about 20 hours a month.

The bigger cost is the data that never arrives. People don't like asking for help all day, so they put off logging. Their deals stay out of the pipeline and out of the forecast.

Setting the screen in a language people can read isn't a courtesy. It's how every deal ends up in one place.

## In Revenue CRM, click EN at the top of the screen and the interface switches to English right there

One click from each person switches the interface to English or Traditional Chinese. You stay on the same page. No reload, no logging out and back in.

On the right side of the top bar there are three buttons: JA, EN and 繁中 (Traditional Chinese). EN switches to English, 繁中 to Traditional Chinese, and JA takes you back to Japanese. On a phone or any narrow screen they don't fit in the bar, so tap the person icon (My account) at the top right and you'll find the same three at the bottom of the menu. The login screen has language buttons too.

Menus, buttons, headings and on-screen guidance all switch. The default deal stage names and date formats follow the language you pick, and the AI agent answers in that language.

The choice is saved in that browser. Next time you open it, it starts in the same language, and nobody else in your workspace is affected. There's no admin setting that picks a language for everyone. Each person clicks it for themselves.

Four things to know:

- On a different computer or phone you'll start in Japanese. Click once on each device
- Notifications, task due-date reminders and automated task names follow the workspace language, not your screen. The workspace language is set by the display language of whoever created it, and there's no screen to change it later. A workspace created in Japanese sends them in Japanese
- What people type, such as names and notes, isn't translated, and most stage names you renamed stay as typed. Summaries from call analysis and from importing chats or meetings (Import conversation) are written in Japanese, and the headers in an exported contacts CSV are Japanese. AI email drafts follow the contact's Language field and default to Japanese when it's empty. Some error messages follow your browser's language setting rather than the buttons
- Times are shown in Japan time and amounts in yen, even from an overseas office

## The first step

This week, ask each teammate who doesn't read Japanese to click EN on their own computer, then log one deal from start to finish without help. Ask them where they got stuck. That tells you exactly where Japanese still shows up for them.

Tell them up front that notifications and reminders will arrive in Japanese. If they click EN on their phone too, the screen they open from a notification will be in English, so they only need to recognize which deal it's about.

In the demo, which only needs an email address, pick your language at the top right of the entry page and then choose B2B sales, and you'll see the English or Traditional Chinese screen with matching sample data. Clicking a language button inside the demo moves you to a separate demo that holds data in that language. [Try the demo](https://crm.consilegy.com/demos)
