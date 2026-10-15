---
title: "The deal update says \"it went well\" and nobody knows the budget or the buyer"
slug: "deal-reports-end-with-a-good-feeling"
lang: "en"
category: "input"
pain: "An hour-long sales call is reported back as \"positive\", and whether budget, decision maker and timing were ever discussed never reaches the CRM, yet the deal sits in the forecast with an amount on it"
feature: "Call Intelligence (paste a call transcript and the CRM writes out what was said under each BANT or MEDDPICC field, plus a short summary)"
screens: "Sidebar Calls → Call Intelligence / New call: Title, Contact, Deal, Methodology (MEDDPICC, BANT, CHAMP, SPIN, Custom), Call date, Duration (seconds), Transcript (paste), Save / Detail: AI analysis, AI summary, BANT analysis, Not extracted, Analyzed, Not analyzed / Automation \"Deal field auto-fill\""
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/calls/page.tsx / src/app/(dashboard)/calls/calls-view.tsx / src/app/(dashboard)/calls/new/page.tsx / src/app/(dashboard)/calls/[id]/page.tsx / src/app/(dashboard)/calls/[id]/call-detail.tsx / src/app/api/calls/analyze/route.ts / src/lib/ai-fuel.ts / src/lib/ai-quota.ts / src/lib/revops/sales-ai.ts / src/lib/revops/catalog.ts / src/lib/revops/execution.ts / src/lib/personas.ts / src/components/app-sidebar.tsx / src/lib/i18n/translations.ts / src/lib/demo/extras.ts / supabase/migrations/004_custom_objects_ai_calls.sql"
date: 2026-10-16
author: "Seiko Yamaguchi"
---
Monday pipeline review. "How did the call with Company A go?" "Really well. They're keen." "What's their budget?" "We didn't get that far." "Who signs off?" "Probably the department head." In the CRM, the deal has moved to the first-meeting stage and that is all. An hour of conversation, not one line of it recorded. The deal is in next month's forecast, with an amount.

## What you lose is the material that turns a feeling into a number

The real loss is not that the rep forgot to ask. It is that nobody can check whether the question was asked at all. A deal you cannot check cannot be taken out of the forecast, and a forecast you cannot prune is a forecast that misses.

Say five reps each run twenty calls a month, and half of those calls leave budget, decision maker or timing unknown. That is fifty deals a month sitting in the pipeline with nothing behind them. Most forecast misses are not a shortage of deals; they are deals in exactly this state.

What was said on a call should be written out field by field from the transcript, not reconstructed from the rep's memory.

## In Revenue CRM, paste the transcript and the four BANT fields fill in from what was said

Paste the transcript that Zoom, Google Meet or a phone recorder produced, press AI analysis, and the four BANT fields show what the customer actually said about budget, authority, need and timeline. Anything not discussed comes back as "不明" (unknown). Those unknowns are your question list for the next call.

Open Calls in the sidebar. If the sidebar is narrowed by role, switch it to Sales or All and it appears. The page is titled Call Intelligence; press New call. Fill in Title (say, "Company A first meeting"), pick the Contact and the Deal, and choose BANT under Methodology. Enter Call date and Duration (seconds), paste the transcript into Transcript (paste), and press Save.

On the saved call, AI analysis sits at the top right. Press it and two cards fill in: AI summary with two or three sentences, and BANT analysis with Budget, Authority, Need and Timeline. In the list, the Analysis column flips from Not analyzed to Analyzed. One run costs 3 AI Fuel.

Besides BANT, Methodology offers MEDDPICC (seven fields: Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion, Competition), CHAMP and SPIN. BANT suits a first meeting; MEDDPICC suits a large deal with several people involved.

Five things to know.

- Text only. There is no audio upload; the transcript is produced by your meeting tool or recorder and pasted in. Minutes imported through Meetings under Settings → Integrations become minutes and tasks, not call records. The two paths are separate
- The result is saved as soon as it comes back and cannot be edited by hand. Pressing AI analysis again overwrites the previous result and spends another 3 Fuel
- The result does not appear on the contact or deal page. The call links to the deal, not the other way round. If the deal's Amount, Close date or Next step is blank and the automation Deal field auto-fill is on, the next morning's run (around 10:00 Japan time) fills the blanks from the deal's notes and the call summaries. The BANT fields themselves are never copied onto the deal
- Custom runs the same fields as MEDDPICC. It is not a way to define your own
- Every member of the workspace can see every call; there is no edit or delete screen. There is no length limit on the transcript, and the summary and field values are written in Japanese even when the interface is in English. For an English-speaking team this is the biggest caveat: the extracted text needs a Japanese reader, or the deal note alongside it

## Your first step

This week, have every rep log one call under Calls and run AI analysis with BANT. For Zoom, copy the recording's transcript; for in-person meetings, a phone recorder's transcript will do.

Start the next pipeline review by opening the Analyzed calls and reading out the unknowns. "Budget unknown on three of five deals" tells you what to ask next. Removing the unverified deals from the forecast comes after that.

The demo takes only an email address. Pick "B2B sales" and Calls in the sidebar already holds four analyzed calls on the same screen. The demo calls have no transcript, so the AI analysis button does not appear there. The demo is a shared account: anything you paste is visible to other visitors and cannot be deleted, so never paste a real customer call. To see the analysis run, write a few lines of a made-up call and add it via New call, or use your own workspace. [Try the demo](https://crm.consilegy.com/demos)
