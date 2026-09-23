---
title: "Japan CRM deal amounts: why the pipeline won't reconcile"
description: "HQ rolls up the Japan pipeline and it does not match billing. The cause is rarely optimism. It is the deal amount field: Japanese reps copy numbers from quotes, invoices and approval documents that each state the price differently, and one field asks four questions at once. How to split the field, let the CRM compute ARR, and decide which system wins."
publishedAt: 2026-09-23
category: crm
principle: "A Japan deal amount that drifts is not a training problem. Name what each amount is in the field label, let reps enter only what they can copy without judgment, and let the CRM compute every number that gets summed."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

Headquarters rolls up the Japan pipeline for the quarterly review, converts it to USD, and puts it next to billing. It does not reconcile. The usual reading is that Japan is optimistic, or that the reps are not updating their deals.

Open ten closed-won deals and compare the amount field to the invoice, and a different picture appears. One rep entered the monthly fee excluding tax. Another entered the annual fee including tax. A third entered the full contract value with the setup fee on top. For the same deal (¥100,000 a month excluding tax, a 12-month term, a ¥300,000 setup fee) the CRM could show ¥100,000, ¥1,320,000 or ¥1,500,000. That is a spread of 15x on one contract.

Nobody on the Japan team thinks they made a mistake. That is the useful part.

## Every document a Japanese rep touches states the price differently

Reps copy the number from whatever document they last had open, and in a Japanese B2B deal those documents disagree by design.

The quote (見積書, mitsumori-sho) is usually excluding tax. The invoice shows the tax-inclusive total prominently, with Japan's 10% consumption tax broken out. The internal approval document the buyer circulates, the ringi, asks for the total amount of the commitment, so it carries the full contract value. Finance on the customer side often talks in monthly terms, because that is how the budget line is booked.

Nothing forces these onto one basis. Japan's Ministry of Finance states in its FAQ on total-price display (Q1) that quotes, contracts and invoices are not subject to the tax-inclusive display requirement, which targets price tags and advertising aimed at the general public. Between businesses, tax-exclusive and tax-inclusive documents coexist as a matter of routine. So each number your rep typed was correct on the page it came from.

HQ tends to miss this because its own reps work from one document, an order form in one currency with sales tax handled at billing. The Japan team works across four.

## One field is asking four questions, and Japan adds a fifth

The screen shows a label that says Amount and one box. To fill it, the rep is silently answering:

- Excluding tax, or including it?
- Monthly, annual, or the whole contract term?
- Does it include one-off fees such as setup or onboarding?
- Yen, or thousands of yen?

The last one is easy to overlook from outside Japan. Japanese internal spreadsheets and management reports commonly state figures in units of ¥1,000 (千円), and a rep pasting from one of those drops three zeros without noticing. Then HQ's rollup adds a fifth question, the conversion rate and date, which the Japan team never sees.

The standard response is a line in the playbook: enter amounts excluding tax, annualised. It holds for about a quarter. The rule lives outside the screen. New hires enter deals before they read the playbook, and experienced reps entering a deal while looking at the invoice type the tax-inclusive number.

## Split the field by what the amount is, and compute everything that gets summed

The fix is structural. Give each amount its own field, named for what it is, and stop asking people to enter the number that gets aggregated.

Let reps enter only what they can copy from a document without judgment:

- Monthly fee (JPY, excl. tax)
- Setup fee (JPY, excl. tax)
- Term in months

Let the CRM compute what the forecast and the board deck sum:

- Annual value = monthly fee × 12
- Total contract value = monthly fee × term + setup fee
- USD values, using one rate and one rate date owned by finance, not by the rep

Putting the unit and tax basis in the label matters more than it looks. A field called "Monthly fee (JPY, excl. tax)" does not need a playbook.

If you run HubSpot, most of this already exists. When a deal has line items with a billing frequency and a term, HubSpot calculates Annual contract value, Annual recurring revenue, Monthly recurring revenue and Total contract value automatically. HubSpot's own description of Total contract value is that it is calculated from the associated line items and does not take the Amount property into account. So a portal where Japan types into Amount and the dashboards sum Amount is carrying the drift straight into the forecast, while the calculated properties sit unused next to it.

Then write down which property every report and forecast sums, and put it in the dashboard description. Splitting the field does nothing if different people start adding up different columns.

## Fix the open deals, and decide which system wins before the next mismatch

Once the fields are split, someone will propose cleaning every historical record. Do not. That is a month of work spent on deals that no longer move.

Re-enter the amounts on open deals only. Each Japan rep has perhaps a dozen, and it fits in the time before one pipeline review.

For closed deals, billing already holds the correct figures. If you need historical bookings for analysis, use tax-exclusive revenue from the accounting system as the source of truth, leave the old CRM values as they are, and add a note that amounts before the cutover date are on mixed bases.

The decision that saves the most time is the last one: when the CRM and accounting disagree, which one wins. Make that call once, in writing, before the first quarterly review. Otherwise the review spends its first twenty minutes relitigating it every time.

## Common mistakes when HQ tries to fix Japan's amounts

**Treating it as a training gap.** Another enablement session on data hygiene will not help while the field itself asks four questions. The drift comes back within a quarter.

**Converting to USD at the rep level.** Asking Japanese reps to enter USD adds a fifth judgment to the same box. Keep entry in yen and convert in one place.

**Summing the wrong property.** In HubSpot, reports built on Amount ignore the line-item calculations entirely. Check which property your forecast actually uses before you trust the fix.

**Cleaning history before fixing the form.** Corrected historical data starts drifting again the next day if the entry screen has not changed.

## Why the label changes behaviour

It is tempting to read inconsistent amounts as a discipline problem. From the rep's seat, it is usually that nobody said what the number is for.

A survey by Keywalker, a Japanese BI vendor, run by PRIZMA between 8 and 10 October 2025 among 1,034 frontline sales staff and managers at Japanese companies already using SFA, CRM or BI tools, found that the top factor that motivates people to enter data was "the purpose of the input and how the data will be used is clear", at 54.8%. In the same survey, the top dashboard use among managers was checking figures in sales meetings, at 58.2%. It is a vendor survey, so read the percentages as orders of magnitude, but the direction is plain. The deal amount is the number that gets added up in that meeting. Say so on the screen.

**A Japan deal amount that drifts is not a training problem. Name what each amount is in the field label, let reps enter only what they can copy without judgment, and let the CRM compute every number that gets summed.**

This week, pull the last ten Japan deals marked closed-won. Put the CRM amount next to the invoice, converted to monthly and excluding tax, and calculate the ratio for each. If the ratios read 1.0, 1.1 and 12, the problem is not your Japan team. It is one box answering four questions.

## Related reading

The amount problem starts earlier than the CRM. Whether Japan is quoted in yen or dollars decides whether the buyer can put one fixed number into the ringi, and that number is the one your rep later copies into the deal: [Quoting Japan in USD stalls the approval, not the negotiation](/en/articles/price-in-yen-or-dollars/).

Other notes on the same problem are collected under [CRM adoption](/en/category/crm/).
