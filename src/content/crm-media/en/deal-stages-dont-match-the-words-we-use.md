---
title: "The deal stages on screen are not the words your team says out loud"
slug: "deal-stages-dont-match-the-words-we-use"
lang: "en"
category: "setup"
pain: "In the pipeline meeting people say \"it's with procurement\", but there is no such stage on screen, so each rep parks the deal somewhere different and nobody trusts the pipeline numbers"
feature: "Deal stage settings (an admin renames, reorders and reweights the stages on one screen)"
screens: "Sidebar \"Settings\" → \"Data model\" → \"Deal stages\" / columns \"Stage\", \"Probability\", \"Type\" / \"Move up\", \"Move down\", \"Delete\" / \"Add a stage\" / \"Save\" / Deals \"Kanban\" and \"List\" / \"Win probability (%)\" on a deal / \"Forecast\""
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/settings/page.tsx / src/app/(dashboard)/settings/pipeline-stages/page.tsx / src/app/(dashboard)/settings/pipeline-stages/stages-view.tsx / src/app/(dashboard)/settings/pipeline-stages/create-pipeline.tsx / src/app/api/pipeline-stages/route.ts / src/lib/pipeline-stages.ts / src/lib/pipelines/provision.ts / src/lib/deals-i18n.ts / src/components/deal-kanban.tsx / src/components/deal-list.tsx / src/app/(dashboard)/deals/page.tsx / src/app/(dashboard)/deals/deals-view.tsx / src/app/(dashboard)/deals/new/page.tsx / src/app/(dashboard)/forecast/forecast-view.tsx / src/lib/forecast-snapshot.ts / src/app/api/deals/import/route.ts / src/components/app-sidebar.tsx / src/lib/i18n/translations.ts / supabase/migrations/001_initial_schema.sql / supabase/migrations/030_audit_triggers.sql / src/app/api/demo/seed/route.ts"
date: 2026-10-13
author: "Seiko Yamaguchi"
---
Monday pipeline meeting. A rep says, "That one's with their procurement team now." There is no stage called that on the board. One rep leaves deals like this in Proposal. Another moves them to Negotiation. Two deals in exactly the same state sit in two different columns.

## What you lose is a pipeline number you can act on

When the screen and the conversation use different words, each rep decides where a deal belongs. The real cost is that nobody trusts the count or the weighted value per stage any more.

In Revenue CRM the default probability is 40% for Proposal and 80% for Negotiation. Say a 100,000-dollar deal is waiting on procurement. In Proposal it counts as 40,000. In Negotiation it counts as 80,000. Same deal, a 40,000 swing, decided by who updated it.

My recommendation is to stop asking reps to "pick the right stage". The reps are not the problem. The words on the screen are.

## In Revenue CRM, the Deal stages screen lets you rename, reorder and reweight the stages

Stage names, their order and their probabilities are all changed on one screen, Deal stages. Open Settings in the sidebar and choose Deal stages under Data model. Owners and admins can edit. Everyone else sees the same screen as read-only.

A new workspace starts with seven stages: Prospecting, Discovery, Proposal, Quote, Negotiation, Closed Won and Closed Lost. The table has three columns, Stage, Probability and Type, and you type over the name and the probability in place.

- To add one, press "Add a stage". The new row lands just above the won and lost stages. Give it a name of up to 40 characters and a probability, a whole number from 0 to 100
- To reorder, use the arrows at the end of the row (Move up, Move down)
- To remove one, press the trash icon on the row. There is no confirmation prompt

Nothing takes effect until you press Save. You then see "Saved. The deal board updates right away." and the columns on the deal board change. Existing deals stay on the stage they were on, whatever you rename it to.

Six things to know before you change anything.

- There is no field for a stage definition or exit criteria. The name has to carry the meaning. Name stages after what is happening on the buyer's side, such as "Procurement review" or "In trial", and there is less room for interpretation
- The won and lost stages cannot be removed. Neither can a stage that still has deals on it. Save is refused, with the stage name and the number of deals. That message currently appears in Japanese even when the display is set to English. Deals in Trash count too, so a column that looks empty on the board may still refuse to go. Move the deals first
- Changing a stage's probability only moves the weighted value of deals that have no "Win probability (%)" of their own. Where a deal has its own number, that number wins
- A few names do not display the way you type them. "Hearing" and "Needs analysis" show as Discovery, "Approach" as Prospecting, "Estimate" and "Quotation" as Quote, "Negotiating" as Negotiation, and "Won" and "Lost" as Closed Won and Closed Lost on the board and in the forecast. Avoid those names
- If you have saved a view in the deal List that filters on a stage, renaming that stage breaks the filter. Rebuild the view afterwards
- Stage changes are not written to the audit log, so you cannot see later who changed what. Make one person responsible for this screen

There is one pipeline. There is no screen for running separate pipelines side by side.

## The first step

In this week's pipeline meeting, write down the words people actually use to describe where a deal is. If a word comes up that is not on the screen, pick one. Just one.

An admin opens Deal stages, presses "Add a stage", types that word, sets a probability and presses Save. Move the deals that belong there into the new column, and at the next meeting check whether everyone now reads the numbers the same way. Add one stage at a time.

The demo opens with just an email address. Pick "B2B sales" and you will find the same Deal stages screen under Settings. It is a shared demo, so the stage names may not be the defaults when you arrive. [Try the demo](https://crm.consilegy.com/demos)
