---
title: "What was said on the video call stays in the head of whoever said it"
slug: "online-meetings-stay-in-the-speakers-head"
lang: "en"
category: "input"
pain: "An hour-long sales call on Zoom or Google Meet lives only in the memory of the rep who ran it, and the CRM says nothing more than \"call held\""
feature: "Meeting integrations (importing meeting notes)"
screens: "Settings → Integrations \"Meetings\" / \"Meeting integrations\" \"Connect Google Meet\" \"Import now\" \"Recent imports\" \"Review and confirm\" \"Import\""
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/settings/meetings/page.tsx / src/app/(dashboard)/settings/meetings/meetings-view.tsx / src/app/(dashboard)/settings/integrations/page.tsx / src/lib/meetings/ingest.ts / src/lib/meetings/sync.ts / src/lib/meetings/zoom.ts / src/lib/meetings/gemini-notes.ts / src/components/chat-import-dialog.tsx"
date: 2026-10-01
author: "Seiko Yamaguchi"
---
Four in the afternoon, and the Zoom call ends. Three people on the customer's side, one rep on yours. It was a good hour: rollout timing, who signs off in what order, and a request for a rough estimate by next Friday. The rep joins the next meeting five minutes late and the day runs out. The deal in the CRM gets two words: "call held".

The recording exists. No manager is going to rewatch an hour of it. The transcript exists too, sitting inside the meeting tool where nobody opens it.

This is not one company. Across eight years of HubSpot and Salesforce implementations I kept seeing the same thing: the more selling moved to video, the more got recorded and the thinner the CRM became.

## What you lose is not the recording. It is the link to the customer record

The record is there. What is missing is any connection between that record and the contact and the deal.

The deadline goes first. "Estimate by next Friday" exists at minute 42 of a recording and is nobody's task. You find out after Friday, from the customer.

The handover goes next. When the account changes hands, the new rep either watches the recording from the start or asks the customer to repeat themselves. One costs your time, the other costs theirs.

Then the reasons not to write it up pile on. Say typing up one call takes 20 minutes. Five calls a week is 100 minutes. No rep has a spare 100 minutes every week, so the deal gets two words.

I would not try to fix this with a rule that says "always write the minutes". The meeting tool has already turned the conversation into text. There is no reason for a person to type it again.

## In Revenue CRM the notes come in after the meeting, and only the certain parts go in by themselves

Connect your meeting tool and, after each meeting, Revenue CRM fetches the transcript and stages it as meeting notes, split into a summary and next actions. For Google Meet, the "Notes by Gemini" document counts as well.

It lives under Settings → Integrations → "Meetings". The "Meeting integrations" screen lists three tools: Zoom, Google Meet and Microsoft Teams. Press the connect button for the one you use, for example "Connect Google Meet", and give consent. A tool that shows "Coming soon" becomes connectable from the same place once its app review is through. Teams needs consent from your Microsoft 365 admin.

After an import, exactly two things happen without anyone pressing a button.

The first is the meeting log. If an attendee's email address or full name matches exactly one existing contact, the meeting is logged on that contact's history. If two contacts share the name, nothing is logged and a person chooses. Notes landing on the wrong person's record is the worst outcome, so the system declines to guess.

The second is action items with a due date that was actually said in the meeting. "By next Friday" becomes a task. An action item with no stated date does not. Each task title starts with a meeting-notes tag and carries the meeting name, so you can trace it back to the call where it was agreed.

Everything else waits for a person: creating a new contact, action items without a date, attaching the notes to a deal. On the same screen, "Recent imports" shows a "Review and confirm" button next to each staged meeting. It opens the summary, the key points and the next actions. Only the next actions you tick become tasks. Pick the contact, optionally a deal, and press "Import".

One precondition. A meeting with no transcript cannot be imported. Zoom produces one when cloud recording and audio transcription are on. Google Meet produces one when transcription is on, or when Gemini took notes. A meeting that had neither shows up in the list as "Skipped" with the reason, so at least you know it did not come in. For Google Meet and Teams, an "Import now" button appears once connected, for when you do not want to wait.

## The first step

This week, run one video call with transcription on (Gemini notes will do on Google Meet). Afterwards open "Recent imports" on the "Meeting integrations" screen and press "Review and confirm" once. Check two things: that the due date on the follow-up is right, and that the notes are attached to the right contact.

Do not go back through old recordings. Once dated tasks start appearing from next week's calls, the deals that only ever said "call held" begin to show what happens next.

If you would rather see the screen first, the [demo](https://crm.consilegy.com/demos) opens with just an email address.
