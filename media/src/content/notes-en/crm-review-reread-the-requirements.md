---
title: "Japan CRM review: reread the brief before touching fields"
description: "A Japan CRM review should start with the assumptions in the original rollout brief, not a field audit. Write down who you sell to, how, who owns the record and which meeting uses the numbers, compare that with your last 10 Japan wins and recent meeting packs, and change one thing per assumption that moved."
publishedAt: 2026-11-06
category: adoption
principle: "Start a Japan CRM review by rereading the assumptions behind the rollout, not by auditing fields. Compare who you sell to, how you sell, who owns the record and which meeting uses the numbers with today's facts, from your last 10 wins and the meetings that use the numbers, then change one thing per assumption that moved. Before the project closes, or in this review if it already has, name the role that will reread them."
canonUrl: https://consilegy.com/en/services/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

A year after the Japan go-live, reps are still logging their deals. The dashboard is green. HQ has moved on.

Then someone notices the country team builds a spreadsheet every Monday from a CRM export, fixes it by hand, and runs the pipeline meeting from that.

When did anyone last open the rollout requirements document?

On the implementations I support, I leave behind the design document and field definitions when I go, and some of those CRMs stay in use long after. Staying in use and still fitting the business are different things. **A Japan CRM review should start with the assumptions in the original brief, not with a field audit.** Once you know which assumption moved, the list of things to change is usually shorter than the audit suggests.

This note is for HQ RevOps and international leaders whose Japan CRM has been live for a year or more, where deals are still being logged but the local team has started working around them. If data entry itself has collapsed, start with [Japan CRM adoption: examine the work, the records and their use](/en/articles/why-sfa-adoption-fails/).

## A design can age while the records keep flowing

An outdated design does not break. It keeps running, which is why HQ does not see it.

The symptoms show up outside the system. A spreadsheet appears before each meeting. "Other" becomes a popular picklist value. New hires ask a colleague which fields actually matter.

Each looks fixable on its own: add a field, rerun the training. But if the cause is a changed assumption, the new field will age the same way.

The rollout document makes this more likely for a Japan team. It was often written at HQ, for the go-to-market motion planned at launch, before anyone had seen how the first year in Japan would turn out. A year of real deals is better evidence than that document had.

One number is worth keeping in view. In a Keywalker survey of Japanese companies already using SFA, CRM or BI tools (October 2025, n=1,034 frontline sales staff and managers, multiple answers), the most common factor motivating data entry was a clear purpose and use for the data, at 54.8%. It is a self-published survey from a company that supports BI tool adoption, and it did not ask whether the original purpose still held. The survey only speaks to motivation. Starting a review from the assumptions is my judgment.

## Read the four assumptions, not the feature list

Going through the document line by line only tells you what was built. What you want is what the requirements took for granted, and most of it falls under four headings. Write one line for each.

| Assumption | What the brief may have assumed | What tends to move it | Where a fix might go |
|---|---|---|---|
| Who you sell to | Mid-market department heads | A move upmarket, a narrower set of industries | Account segmentation, report cuts, marketing automation scoring and lists |
| How you sell | Direct, by your own account executives | Partners or resellers, annual contracts | Pipeline, stage definitions, renewal handling |
| Who owns the record | Account executives enter everything | A split into inside and field sales, a new admin | Entry owner, alert and automation recipients, permissions |
| Which meeting uses the numbers | Weekly forecast call with HQ | A new country lead, a new meeting, a new metric | Reports, required fields |

If nobody can find the document, reconstruct the four lines from the live configuration. Open the stages, required fields and main reports, and ask what kind of selling each one assumes. It does not have to be perfect. It just gives you something to compare against.

## Compare the brief with the last 10 Japan wins, not with memory

Your admin drafts this. The country lead agrees the verdict, because they own how the team sells. If a fix would reach fields or integrations used by marketing, customer success or finance, their owners join too.

1. **Write the four lines as they stood at launch.** Short lines are enough.
2. **Open the last 10 closed-won Japan deals and write the same four lines as they stand today.** Who decided, how the deal arrived, what the contract looks like, who entered the record. Do this before asking anyone, because "nothing has changed" is the memory most likely to be wrong. For the who and how lines, also look at a few lost and open deals, because a segment you are failing to win will not appear in closed-won. Deal records will not show the meeting line, so for that one check which report or spreadsheet the last few meetings actually opened. Ten deals is a way to see the pattern, not a statistic. If Japan closed fewer than 10 in the past year, use them all. If the Japanese records are hard for your admin to read, ask a member of the Japan team to go through them together.
3. **Sit down with the country lead and mark each line:** same, changed or unknown. Only "changed" goes forward. "Unknown" means the records are thin, so ask the rep on each deal.

## Change one thing per assumption that moved

Even if three of the four lines moved, do not change them all at once. You will not be able to tell what worked, and a small Japan team cannot absorb several process changes in one go. Fix one line per quarter, log the rest, and take the next at the following quarter boundary.

Let the meetings choose the order: start with the changed line that is holding up a decision most. For any line, the first question is which meeting uses the number and for what. Once you know that, you know which fields are needed.

Suppose partner-sourced deals have grown. The instinct is to give Japan a separate partner pipeline. First ask what the leadership review actually needs to see. If it is the split between direct and partner in the forecast, a single sales-channel field on the deal may be enough. A new field is empty for past deals, so fill it for open deals and read the split from the cutover date onward. The cost of splitting pipelines is covered in [Before giving Japan a separate pipeline, compare the exit criteria](/en/articles/split-pipeline-by-department/).

If the change belongs in the global template, send it through your normal global change route. Before approving or refusing it, use the sorting in [Why only Japan keeps adding fields to your global CRM](/en/articles/global-crm-japan-only-fields/). Then do three things before anything goes live:

- **List everything that reads the field or stage:** reports, lists, automations, integrations, and any global dashboard that rolls Japan up with other regions.
- **Set the cutover at a quarter boundary and record it.** Leave closed deals as they are and read anything before that date under the old definition. Remap open deals to the new definition on the cutover date, and only then remove a stage. Stage changes can affect probabilities, forecast categories and stage-duration reports, so check those and your automations the day before.
- **Keep old and new side by side.** For numbers compared every week, such as the forecast, save the old-definition figures just before cutover and show both for a quarter either side.

## Before the project closes, name the role that will reread it

I do not think these documents go unread because anyone is careless. They go unread because their owner disappears.

The document belongs to the implementation project, and the project closes at sign-off. Outside partners stop at the agreed scope, and I am no exception. A design document can stay behind. The person who rereads it cannot, unless someone is named.

So settle three things at sign-off, between the project lead and the executive who approved the budget. If sign-off has already passed, settle them at the end of this review, with the country lead and whoever holds the budget now:

- **The owner, as a role.** HQ RevOps for Japan, or the local sales operations lead. A personal name disappears with the next move.
- **The timing.** Once a year, before next year's budget is set, so any fix can be funded.
- **The triggers for an extra read.** A new product or pricing model, a new sales channel, a reorganization, a change of country lead or CRM admin.

This is separate from routine definition changes. My other notes recommend reviewing those weekly and changing them only at quarter boundaries. Those tune the design while the assumptions hold. The yearly read questions the assumptions themselves.

## What I would not start with

**A full field audit.** It finds what is not being filled in. It cannot show what is missing because the business moved. Reduce fields after the four lines are done.

**Replacing the CRM.** If the discomfort comes from changed assumptions, a new system inherits the old ones. Even if you do switch, these four lines are the first input you will need.

**Start a Japan CRM review by rereading the assumptions behind the rollout, not by auditing fields. Compare who you sell to, how you sell, who owns the record and which meeting uses the numbers with today's facts, from your last 10 wins and the meetings that use the numbers, then change one thing per assumption that moved. Before the project closes, or in this review if it already has, name the role that will reread them.**

If your Japan CRM has been live for more than a year, open the last 10 Japan wins this week and write only the "how you sell" line. If it still matches the brief, that is worth knowing too.

## Related reading

A named owner still has to survive the next leadership change. What to hand over is in [Keeping a Japan CRM rollout running after its sponsor leaves](/en/articles/adoption-stops-when-the-sponsor-leaves/).

Other notes on the same problem are collected under [Organization & adoption](/en/category/adoption/).
