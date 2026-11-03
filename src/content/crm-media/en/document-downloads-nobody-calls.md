---
title: "Someone downloaded your guide. Nobody called them."
slug: "document-downloads-nobody-calls"
lang: "en"
category: "operate"
pain: "Everyone gets the download alert, but nobody owns the call. Each rep assumes someone else has it, days go by, and when a call goes unanswered the next step isn't on anyone's list"
feature: "The download follow-up playbook (a checkbox on the form: every submission becomes a task for an owner, and the call outcome decides what comes next: a draft email, then a follow-up three business days later)"
screens: "On the form: Use the download follow-up playbook and File to hand over after submission. Settings: Sales playbooks, with Business calendar, Same-day cutoff, Additional holidays, Notify on task creation and before / on / after the due date, Active download follow-ups, Confirm outreach allowed, Stop follow-up. Sidebar: Tasks, with No answer, Connected / hand off, End follow-up, Reviewed: call next. Sidebar: Drafts waiting to send, with Approve and send and Add signature. Home: Do now"
sources: "src/app/(dashboard)/forms/[id]/form-detail.tsx / src/app/api/forms/[id]/submit/route.ts / src/app/(dashboard)/settings/sales-playbooks/sales-playbooks-view.tsx / src/app/(dashboard)/tasks/tasks-view.tsx / src/app/(dashboard)/tasks/page.tsx / src/components/sales-assignments.tsx / src/components/home/today-actions-panel.tsx / src/components/outbound-draft-editor.tsx / src/lib/sales-playbooks.ts / src/lib/sales-playbook-errors.ts / src/lib/sales-action-alerts.ts / src/lib/form-contact.ts / src/lib/contact-intake.ts / supabase/migrations/255_sales_playbooks.sql / supabase/migrations/257_sales_followup_coordination.sql / supabase/migrations/259_sales_handoff_opt_in.sql (crm #396, #403)"
segment: "b2b"
edition: "b2b"
date: 2026-11-04
author: "Seiko Yamaguchi"
---
Tuesday morning, someone downloads your guide. The alert lands in every rep's inbox. Everyone reads it, and everyone assumes someone else will call.

By Friday nobody has. The following week a rep finally gets through, and the first thing they hear is "Sorry, which guide was that?" The reps aren't the problem. The problem is an alert that arrives without an owner.

## What you lose is the lead you already paid for

People who download something are most willing to talk that same week. And the work stalls in two predictable places: the first call, and whatever should happen after nobody picks up.

Say you get 30 downloads a month and reach half of them that week. That's 15 people a month who don't hear from you in the week they'd most likely talk, after you paid to write the guide and to bring them to it. I'd fix that before commissioning the next guide.

![The pipeline review page, with Tasks in the left sidebar](/images/crm/media/screens/waiting-on-the-customer-for-three-months-3-2026-10.webp)
*Shown in Japanese on the pipeline review page. Download follow-ups land under Tasks in the left sidebar, with an owner on each.*

## In Revenue CRM, one checkbox on the form turns the next step into a task

Tick Use the download follow-up playbook on the form, and each person who downloads gets a task with an owner, and the call outcome decides what comes next. There are four stages: review, a same-day call, an email if nobody answers, and a follow-up three business days after that email goes out.

1. A submission creates a high-priority review task first, because nobody has decided yet whether sales outreach to a new person is allowed. Ticking the form's consent box doesn't change that
2. Open Sales playbooks in Settings, click Confirm outreach allowed, then press Reviewed: call next on the task card. It becomes a call task. Contacts already marked as OK for sales outreach start here. It's due that day, or the next business day if it arrives after the cutoff (18:00 by default) or on a weekend
3. After the call, open Tasks in the sidebar and press No answer, Connected / hand off, or End follow-up on the card
4. No answer creates an email in Drafts waiting to send. Nothing goes out until someone reads it and clicks Approve and send
5. Once it sends successfully, a follow-up task appears for three business days later. If that's No answer too, the follow-up ends

It stops by itself if a reply syncs in, a meeting lands on the calendar, the contact becomes blocked, or a deal is created for them. To stop one by hand, use Stop follow-up under Sales playbooks. The same page lists Active download follow-ups, so you can see who is at Call pending, Review needed, Email approval / send pending, or Follow-up scheduled.

What to know before you rely on it:

- A new contact with no owner goes to whoever joined your organization first. Neither the form nor Tasks has a field for choosing someone else. To route work to another person, use Record absence & transfer tasks under Sales playbooks (it moves all their sales tasks), or Reassign sales tasks to an admin when not accepted in time. Accept sales tasks, at the top of Tasks, has an Accept button for the person who takes one on
- Without a phone number it can't move on, so check that your form asks for one. A submission with no email, or a repeat from someone already in follow-up, adds no task
- Ticking the box switches off Welcome, workflows and first-email drafts for that form. Any auto-reply or internal alert sent by a workflow stops too, so the alert in our opening scene goes away unless you turn on the alerts below. You can still hand over the file with File to hand over after submission, which adds a button to the confirmation page
- The draft is fixed text in Japanese and opens by saying you just tried to call. The form's name goes into the subject and body, so don't give it an internal name. There's no signature, so click Add signature if you've set one. Task titles are Japanese too. If nobody sends the draft, it only shows in the sidebar count and as Email approval / send pending. No alert goes out
- Connected / hand off doesn't create a deal, so create one when you've spoken. That button, End follow-up and Stop follow-up also cancel the contact's unsent drafts and remove them from sequences and email workflows. To undo that, use Allow new automated enrollment on the contact
- If a deal or a follow-up is already running at that company, you get a review task that Reviewed: call next won't clear. Merge it into the existing work, then click Stop follow-up
- Choose outcomes on the card. The circle under Do now on the home screen won't close these, it just bounces back
- Alerts are off by default. An owner or admin ticks Notify on task creation and before / on / after the due date under Sales playbooks and clicks Save just above it, and they start at intake. Set the destinations under Notifications in Settings
- Weekends are closed automatically, but public and company holidays only count if an owner or admin enters them under Additional holidays. Your year-end closure is worth adding now

## Your first step

Pick one download form and tick the box. Don't start with all of them. A week on one form shows you who the tasks land on and how much review work this really adds.

Start the [demo](https://crm.consilegy.com/demos) with just an email address and choose B2B sales to see where Tasks and Sales playbooks in Settings live. The demo is shared, so look but don't click through.
