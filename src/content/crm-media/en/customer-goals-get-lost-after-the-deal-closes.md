---
title: "The customer told sales what they wanted to achieve, and onboarding never heard it"
slug: "customer-goals-get-lost-after-the-deal-closes"
lang: "en"
category: "operate"
pain: "The goal the customer stated during the deal (\"in six months we want to...\") lives in the account executive's notebook, so onboarding starts with a feature tour, and at renewal nobody can say what actually improved"
feature: "Success plan (the \"Success plan\" card on a contact: \"Goal / desired outcome\", \"Status\", \"Target date\", and \"Success metrics\" with Baseline, Target and Current. \"With success plan\" and the \"Plan\" column on \"Customer Success\")"
screens: "Contact detail, \"Success plan\" card, \"Create success plan\" / \"Goal / desired outcome\" / \"Status\" (On track, At risk, Off track, Achieved) / \"Target date\" / \"Success metrics\", \"Add metric\" (Metric, Baseline, Target, Current, Status) / \"Delete plan\" / Sidebar \"Customer Success\": \"With success plan\", \"Plan\" column, \"Bulk-create plans\" / Contacts list \"Change stage...\" → \"Customer\" / \"CS AI assist\" → \"Outcome report (QBR)\""
segment: "b2b"
edition: "b2b"
sources: "src/components/success-plan-panel.tsx / src/app/(dashboard)/contacts/[id]/page.tsx / src/app/api/success-plans/route.ts / src/app/api/success-plans/[id]/route.ts / src/app/api/success-plans/[id]/metrics/route.ts / src/app/api/success-plan-metrics/[id]/route.ts / src/app/api/success-plans/bulk-create/route.ts / src/app/(dashboard)/customer-success/page.tsx / src/app/(dashboard)/customer-success/cockpit-view.tsx / src/components/cs-ai-panel.tsx / src/app/api/contacts/[id]/cs-ai/route.ts / src/components/app-sidebar.tsx / src/lib/personas.ts / src/lib/demo/extras.ts"
date: 2026-10-29
author: "Seiko Yamaguchi"
---
In the final pitch meeting, the customer's head of support said it plainly: "Six months from now, I want first-line support handled by half the people it takes today." The account executive nodded, wrote it down, and closed the deal the following week. The internal handoff covered contract value, go-live date and the main contact's name. The onboarding lead's first call with the customer turned into a walk through the feature list, top to bottom.

## What you lose is the first month of onboarding, and the proof you need at renewal

The customer did not buy features. They bought a future state: the same support load with half the headcount. When that sentence does not survive the handoff, the onboarding lead cannot tell what to configure first, so everything gets the same weight.

Say onboarding spends 20 hours on each new account in the first month, and half of that goes to rediscovering what the customer wants. Across ten accounts, that is 100 hours. The bigger cost comes a year later. The customer asks "so what has improved?", and nobody remembers what the original target was.

A customer's goal is never clearer than on the day they sign. If nobody writes it down then, nobody can reconstruct it later.

## In Revenue CRM, write the goal and the metrics into the contact's "Success plan"

Open the customer's contact. In the same column as Details, there is a Success plan card. At first it shows one button, Create success plan. Press it and you get:

- Goal / desired outcome: write it in the customer's own words. In the example above, "In six months, run first-line support with half today's headcount"
- Status: On track, At risk, Off track or Achieved
- Target date: when the goal is due
- Success metrics: use Add metric to add a row, then fill in Metric, Baseline, Target, Current and a Status for that row. Something like "first-line support headcount", "6", "3". Use the numbers the customer gave you

Text boxes save when you move out of them; the status menus and the date save the moment you change them. Anyone who opens the same contact, including the onboarding lead, reads the goal as it was said at signing.

On the Customer Success screen, the header shows With success plan as a count like "3/10", and the customer list has a Plan column. If some customers still have no plan, Bulk-create plans creates empty ones in one go. They are empty, though, so the goal still has to be written account by account. On the same contact, the Outcome report (QBR) button under CS AI assist reads this goal and these metrics to draft a review. What you get is a draft: check it, then use Copy.

Five things to know before you rely on it:

- The plan belongs to a contact. It does not appear on the deal or the company. Agree as a team that it goes on the main contact's record
- Current values and every Status are entered by hand. Nothing updates on its own
- The Owner shown on the card is whoever created the plan from the card, or the contact's owner for plans made with Bulk-create plans. There is no control to reassign it. If sales creates the plan and onboarding adds to it, that rarely matters
- The trash icon on a metric row deletes it without asking, and there is no change history
- The Customer Success list only includes contacts whose lifecycle stage is Customer. Winning a deal does not set that automatically (a subscription becoming active through the Stripe integration does). In the Contacts list, tick the people, then use Change stage... and choose Customer. The Customer Success screen also stays hidden unless Switch workspace view at the top of the sidebar is set to CS or All (or Mine, if your roles include CS)

## Your first step

Pick one deal you closed this week. The account executive opens the main contact, presses Create success plan, and writes one sentence for the goal and one row for a metric. Do not polish the wording. Keep the customer's words.

At the handoff meeting, skip the slide and put that card on the screen instead. If the onboarding lead opens the first customer call with "Half the headcount in six months, is that still the target?", the handoff worked.

In the demo, which you can try with just an email address, choose B2B sales. You can check the Plan column on Customer Success and the Success plan card on a customer's contact on the same screens. [Try the demo](https://crm.consilegy.com/demos)
