---
title: "Why every lost deal in Japan shows up as \"price\" in your CRM"
description: "Your Japan closed-lost report says price, so headquarters approves a discount policy, and nothing changes. The picklist was designed for a market where deals are lost to competitors. In Japan they are lost to an approval that stops moving, and there is no value in the field for that. Here is how to rebuild the list."
publishedAt: 2026-08-05
updatedAt: 2026-10-16
category: sales
principle: "Closed-lost reasons are set by the picklist, not by the rep. Rebuild the values around what Japanese buyers actually drop you for, and give \"internal approval stalled\" its own entry."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

The quarterly review shows the Japan closed-lost breakdown. Price is the top reason, by a wide margin. Headquarters approves a discount band for the region, and the next quarter looks exactly the same.

The local reps are not hiding anything. Your global picklist has no value that describes what actually happened.

Rebuild the list around what Japanese buyers drop you for, and give "internal approval stalled" its own entry.

## The picklist was designed for a different failure mode

Many global CRM instances carry some version of the same closed-lost values: price, competitor, no budget, timing, other. That list encodes an assumption. It assumes deals are lost to someone else who won them.

In a Japanese deal, the common ending is different. The evaluation went well, the champion was convinced, and then the request sat at the department head for three months and quietly expired. Nobody won it.

Faced with that, a rep picks the closest available value. Usually price or timing. Headquarters then reads a market signal that was never there and responds with the one lever the report seems to justify. Discounting does not move an approval chain.

## What Japanese buyers say when they drop you

A joint survey by IDEATECH and Hiroyasu Kitagawa (published April 2026, n=307, limited to buyers who participated with at least one colleague in B2B purchases of 3 million yen or more; it is a vendor-sponsored survey skewed toward large, multi-stakeholder deals) asked why vendors were cut from consideration. The top answers were missing functionality for the buyer's problem at 39.1%, the vendor not fitting the buyer's company size at 34.5%, and no customer example resembling the buyer at 26.4%.

The second and third have no equivalent in a standard picklist. Neither is price and neither is a competitor. Both describe evidence your Japan team was never given. They sit on the same axis, so the list below holds them as one value.

The same survey found the leading reason a vendor made the shortlist was having a customer example of similar size, at 44.3% (n=298 for that question). The reason buyers drop you and the reason they keep you are two sides of one axis. If the field cannot record that axis, no amount of loss data will point at it.

## "Lost to competitor" is on the list. "No one decided" is not

Deals are lost in two ways: someone else wins them, or nobody decides and they expire. The deal that sat at the department head for three months is the second kind. Yet "lost to competitor" is in nearly every default list, while "no decision" is often missing, and where it exists it cannot say where the decision stopped.

Japan, in our reading, makes "no decision" more likely. That is an inference: as the section below notes, there is no Japanese data on the share of no-decision losses. What we can point to is the number of approval layers. In the IDEATECH survey, 60.9% of purchases required two approval layers and more than 80% required two or more. Each additional layer is another place the deal can stop without anyone rejecting it.

## Five values, and one of them is the approval

The list we implement has five entries.

1. Functionality did not cover the buyer's problem
2. Internal approval stalled or was declined
3. We could not show a reference of the buyer's size or industry, including "not for a company our size"
4. Lost to a named competitor
5. The buyer's project itself stopped

Budget is not on the list. In Japan, "no budget" usually means the deal missed the customer's budget cycle, so park it as on hold with the next budget-setting month as the restart date rather than closing it lost; the reasoning is in ["No budget" in Japan is a date, not a number](/en/articles/no-budget-means-no-slot/). If your global list already has a budget value, rename it "budget timing (move to on hold)" and route it to on hold, not closed-lost.

Removing price leaves reps unsure where real price losses go, so set the boundary up front. A cheaper competitor won: value four, with the price gap in one line of free text. The amount did not clear the customer's approval: value two, with the layer it stopped at, usually finance or an executive. Budget timing: on hold, not lost.

Three operating rules keep it honest.

If you keep "other," make free text mandatory, promote any answer that appears three or more times in a month to its own value, and deactivate any value nobody has chosen in six months, so it cannot be selected on new records. The picklist is a design artifact you revise each quarter, not a fixed schema.

When a rep selects the second value, require one more field: which layer it stopped at, chosen from department head, executive, IT, legal, or finance. That single field is what tells you whether Japan needs a security review pack or an ROI worksheet, and it is invisible today.

For the fourth value, require the competitor's name. If your team cannot name one, it belongs in value five. Most "we lost to a competitor" reports in Japan disappear at this step.

## Switch without breaking last year's numbers

Replacing the values breaks year-on-year comparison. Decide three things first.

- **Check the container.** In some tools the standard loss reason is free text, and in some there is no standard field at all. Then create a picklist field and require it when the deal moves to closed-lost, not at creation, when nobody knows the answer.
- **Deactivate old values, do not delete them.** In some tools deleting a picklist value prompts you to replace it on existing records or changes how it displays. Make the old "price" and "timing" unavailable for new entries and leave historical records untouched. Do not remap history into the new five. That would be guessing, after the fact, what a rep meant.
- **Draw the comparison line.** From the switch month, report year-on-year on the old values, start comparing on the new five a year later, and annotate the switch month on the report.

## There is no Japanese benchmark for why approvals stall

Public surveys tell you how many approval layers Japanese buyers go through. We have not found a published Japanese primary study that breaks down why a request was rejected or where it stopped.

That number cannot be imported. Your own closed-lost field is the only place it will ever come from, which is precisely why the field is worth designing.

## What headquarters should do instead

- **Stop reading the Japan loss report as a pricing signal.** A picklist without an approval value will always route stalled deals into price. Fix the field before you fix the price book.
- **Stop treating a single global picklist as a reporting standard.** Regions lose deals for different reasons. Shared values across regions produce comparable charts and unusable insight.
- **Stop asking the Japan team to explain the losses in a call.** Ask for the layer each stalled deal stopped at. That list is short, specific, and directly buildable into the next quarter's sales collateral.

Designing what the local team hands the approver is part of [Japan GTM and messaging](https://consilegy.com/en/services-en/japan-market-gtm-messaging/), not a CRM cleanup task.

**Closed-lost reasons are set by the picklist, not by the rep. Rebuild the values around what Japanese buyers actually drop you for, and give "internal approval stalled" its own entry.**

## Related reading

How to keep stalled approvals out of the forecast in the first place is covered in [forecast your Japan pipeline on approval progress](/en/articles/forecast-by-approval-not-confidence/).

Other notes on the same problem are collected under [Sales process](/en/category/sales/).