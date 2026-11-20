---
title: "Handed 175 automations, and unable to turn on a single one"
slug: "which-automations-to-turn-on-first"
lang: "en"
category: "setup"
pain: "Faced with the automation library, the admin cannot tell what their business needs. Automations stay off while time passes, or so many go on that checking the notifications becomes another job"
feature: "Diagnose which automations to turn on"
screens: "Sidebar \"Automations\" → top card \"Find out which ones to turn on\" / Settings → Sending domain"
segment: "b2b"
edition: "b2b"
help_slug: "(no article yet; matches video script 6 \"The first automations to turn on\")"
video: "6"
sources: "lib/revops/recommend.ts / lib/revops/catalog.ts / app/(dashboard)/automations/diagnosis-card.tsx / src/lib/revops/recommend.ts / src/lib/revops/catalog.ts / src/lib/editions/index.ts / src/app/(dashboard)/automations/diagnosis-card.tsx / src/app/(dashboard)/automations/automations-view.tsx"
date: 2026-09-28
updated: 2026-11-20
featured: 2
author: "Seiko Yamaguchi"
---
Someone becomes the CRM admin and freezes in front of the workflow list. Everything looks useful, and none of it obviously applies to their company. Two problems to avoid are leaving everything off and enabling so much that checking the notifications becomes another job.


## Automations are harder to remove than to add

Once a notification is on, switching it off comes with a doubt: "someone might need this." So it stays, unread notifications pile up, and the ones that matter get buried. Reducing notifications already in use also means agreeing which ones the team can stop.

So the bulk of the setup work is keeping the initial count small. I put the ceiling at eight.

## In Revenue CRM you answer four questions and get a handful back

Open Automations and you will see 175 of them. You do not need to read them all. Press "Find out which ones to turn on" at the top. There are four questions.

![Automation library with the diagnosis card at the top](/images/crm/media/screens/which-automations-to-turn-on-first-1-2026-10.webp)
*The Automations screen. Above the list of 175 there is exactly one card: the diagnosis. (Screens shown in Japanese; the UI is also available in English.)*

1. Where do your customers come from? Inquiry form, referrals, events, ads, or your own outreach. Pick as many as apply
2. How many new inquiries a month? Up to 10, or 11 and more
3. How many meetings does it take to close? One or two, or three and more
4. What happens after the sale? Recurring billing, delivery followed by ongoing work, or a one-off

Answer them and you get only the ones that matter first for your kind of business, each with a one-line reason. Never more than eight. Press "Turn on these N" and you are done. Only owners and admins see that button.

![The four questions: lead source, monthly inquiries, meetings to close, what follows the sale](/images/crm/media/screens/which-automations-to-turn-on-first-2-2026-10.webp)
*Four questions. Every answer is a button; nothing to type.*

![The result: "start with these five", each with a one-line reason](/images/crm/media/screens/which-automations-to-turn-on-first-3-2026-10.webp)
*The result is a count and a one-line reason each. This example answers inquiry form, 10 or fewer, one or two meetings, and recurring, which gives five. Automations that already run in every workspace are not offered.*

For example, a business that gets a few inquiries a month through a form, closes in one or two meetings and sells one-off gets these three.

- Flag deals sitting in one stage with no response
- Hand a won deal straight to whatever comes next
- Record losses too. In a one-off business, the lost list is the next prospect list

Capturing inquiries, assigning an owner, creating the first follow-up task and catching duplicate companies are not offered, because those automations already run in every workspace from day one. In a new workspace on the B2B sales edition, these three are on from the start as well. If the diagnosis lists ones that are already on, simply keep them.

Answering 11 or more inquiries a month does not add anything, because scoring leads, routing them and notifying the rep already run in every workspace. Say your deals take three or more meetings, and it adds one that keeps an agreed next step and date, one that records who actually decides, and one that creates a review task for owners with overdue tasks. Recurring billing brings in renewal-date tracking, a risk check 90 days before renewal, and churn-signal detection. The set changes with the answers, so answer as your business actually is.

## If the email automations show up in a separate box

If you have not set up a sending domain, the automations that send email appear in a separate box labeled "These need a verified sending domain first". That is the correct behavior: with no sending domain, turning them on sends nothing. Go to Settings → Sending domain, enter your company's domain, paste the DNS records it shows into your domain registrar's control panel and press "Verify." It is a one-time job.

## The first step

Run the diagnosis once and live with that number for two weeks. Add one only when you catch yourself thinking "I do this by hand every time." When that happens, the library search usually turns up exactly one.

To change your answers, press "Start over" next to the result and run it again.

To explore the screens, choose **B2B sales** in the [Revenue CRM demo](https://crm.consilegy.com/demos).
