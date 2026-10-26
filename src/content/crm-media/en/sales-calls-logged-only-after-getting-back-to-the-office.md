---
title: "Field reps log their visits in one batch back at the office, and the details are already gone"
slug: "sales-calls-logged-only-after-getting-back-to-the-office"
lang: "en"
category: "input"
pain: "A rep visits three customers, gets back to the office in the evening and types up all three deals at once. The first meeting blurs into the second and third, the numbers the customer mentioned and the agreed next step drop out, and on a tired day the log just says \"Visited\""
feature: "Voice input on activities (the microphone in the Add box on a deal's or contact's Activity tab. What you say is transcribed and tidied into a short note without the filler words, then placed in the box. A person still clicks Save)"
screens: "Deal page and contact page, Activity tab: Add → type (Note, Call, Email, Meeting, Task, Chat) → microphone at the bottom right of the box (Voice input) → Stop recording → Transcribing... → Save; Translate under each logged activity"
sources: "src/components/voice-textarea.tsx / src/components/activity-timeline.tsx / src/app/api/voice/transcribe/route.ts / src/components/email-translate.tsx / src/lib/ai-fuel.ts / src/lib/ai-quota.ts / src/app/(dashboard)/deals/[id]/page.tsx / src/app/(dashboard)/contacts/[id]/page.tsx / src/lib/i18n/translations.ts"
segment: "b2b"
edition: "b2b"
date: 2026-10-27
author: "Seiko Yamaguchi"
---
One visit in the morning, one after lunch, one late in the afternoon. The rep leaves the third meeting room at 5:30 and gets back to the office after 6. Only then do they open three deals and start typing.

What the first customer's department head said, "next year's budget gets decided in April," has already merged with the second conversation. The third deal gets one line: "Visited. Positive."

If you run a sales team in Japan from an English-speaking seat, this is the log you end up reading on Monday.

## What you lose is the one sentence you could only catch in the moment

When logging waits until evening, what survives is an impression. The specifics go first: numbers, dates, who said what.

Say a rep makes three visits a day and spends ten minutes on each log after getting back. That is thirty minutes a day. But time is not the real cost. The deal that lost "budget is decided in April" also loses the chance to bring a proposal in March. And when the account changes hands, that sentence never reaches the next rep.

It is rarely about effort. Asking a tired person to recall a morning conversation at 6pm is simply the wrong order.

## In Revenue CRM, the rep speaks the log right after leaving the room

What the rep says goes into the deal's activity log as a short note. The only typing left is checking it and clicking Save.

Open the deal, go to the Activity tab and click Add. You get a type selector (Note by default, Meeting for a visit) and a text box. The microphone icon at the bottom right of the box is Voice input.

Click it and speak (it pulses red while recording), then click again. After a short spinner, text appears in the box. It is not a raw transcript: filler words are removed and the content is tidied into short lines or bullets. The clean-up step is instructed to keep dates, names, amounts and next actions, and not to add anything that was not said. If the tidy-up step fails, the raw transcript goes in instead.

The rep can edit the text before clicking Save. The entry then appears on the deal's activity list with its type, the author and the time. The same box and microphone are there when the deal is opened in a phone browser, so this works from the car park or the station platform.

Here is the part that matters for an English-speaking manager. Voice input is set to Japanese, so your reps speak in Japanese. Under a logged activity written in a language other than your display language, there is a Translate link that shows it in your language, with Original to switch back.

Five things to know:

- Transcription is fixed to Japanese. English speech will not come out reliably, so this is for teams whose reps talk in Japanese
- Long recordings can lose the end of the tidied note. Split one visit into a few short recordings, one topic each
- Each recording uses one unit of AI Fuel, including attempts that come back empty, which insert nothing and show no message. Translate uses Fuel too
- When a recording fails, the error message may not name the real cause. If you see one, type that entry by hand
- Saved activities cannot be edited or deleted from the screen. Check dates and numbers before clicking Save

For capturing handwritten notes and whiteboards, see [The meeting notes never leave the notebook](/en/crm/media/b2b/meeting-notes-stay-in-the-notebook/).

## The first step

This week, pick one visit and ask the rep to record within five minutes of leaving the room. One number the customer mentioned, and one next step with a date. That is enough.

Compare it with the logs typed that evening. The difference in how specific the words are tends to be obvious. Once it is, extend it to the rest of the team's visits.

Try the demo with just an email address. Choose B2B sales, open any deal under Deals, go to Activity and click Add to find the microphone. Since it listens for Japanese, have a Japanese-speaking rep say a sentence or two, then use Translate on the saved entry. If the browser asks for microphone access, allow it first (the demo is shared, so other visitors can see what you save). [Try the demo](https://crm.consilegy.com/demos)
