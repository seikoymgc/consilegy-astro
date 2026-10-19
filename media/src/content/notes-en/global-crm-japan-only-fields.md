---
title: "Why only Japan keeps adding fields to your global CRM"
description: "Global CRM customization piles up in Japan when every field request is answered with yes or no. Ask who decides what with the field, then route it to the global standard, the Japan account record, the document layer, or nowhere."
publishedAt: 2026-10-19
category: japan-gtm
principle: "Before approving or refusing a field request from Japan, ask who will decide what with that field. Route it to the global standard, to the Japan account record, to the document layer outside the CRM, or nowhere."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

Six months after the global CRM goes live in Japan, the admin team at HQ notices that the Japan page layout has grown. Approval reference numbers. The approver's title. An internal approval target date. Honorifics for the addressee. Contract dates in the Japanese era calendar.

From HQ it looks like Japan is running its own version of the CRM. Ask the Japan team and they will tell you they only added what the work requires.

Both are telling the truth. The problem is the shape of the decision: each request gets a yes, and lands on a Japan-only layout, or a no, and moves into a spreadsheet on someone's laptop. Either way, someone is unhappy two quarters later.

## Some of what Japan asks for is not about Japan

Sort the Japan requests and a large share are about approval. Whose sign-off is still missing. When the ringi, the internal approval request, will be submitted. Who the final approver is.

Multi-step approval is normal in large Japanese purchases. In a survey by IDEATECH with Hiroyasu Kitagawa of Demagen Research (published 16 April 2026, fielded 23 to 26 March 2026; 307 people in Japan who, together with at least one colleague, had handled a B2B purchase, renewal or replacement worth JPY 3 million or more in annual contract value or upfront cost; run by a company whose business is survey-based PR), more than 80% reported two or more approval steps before the order. It is not surprising that the Japan team wants a place to record them.

Deals that stall on the buyer's side are not only a Japan problem, either. In Ebsta and Pavilion's 2024 B2B Sales Benchmarks (about 4.2 million opportunities across 530 companies; not Japan data), 61% of lost deals were attributed to buyer indecision. That does not mean recording approval steps would prevent those losses. It is background: in other regions too, much of what is lost is lost on the buyer's side.

The practical gain for HQ is elsewhere. If every region records approval progress in the same field, the forecast call can separate "high confidence, approval stalled" deals from the rest, in any region. Some Japan requests are exactly this kind of thing: a gap in the global design that Japan hit first.

Put that on a Japan-only layout and the gap gets locked in as a local field. The field exists on the object and is technically reportable, but only Japan fills it in, so nobody at HQ builds a report or forecast around it. Reportable in theory, invisible in practice. That is the most expensive way to handle it.

## Route each request by what it is trying to record

Before you approve or refuse, ask one question: who will look at this field, and what will they decide with it? The answer tells you where it goes.

| What the request records | Examples | Where it goes |
|---|---|---|
| What has moved inside the buyer's organisation | Approval step, approver, internal approval deadline | The global standard. Approval step as one deal field; approver as a contact role on the deal; deadline as a date field for the customer's internal deadline |
| Records Japanese law or trade practice requires on the account | Qualified invoice issuer registration number, corporate number | A Japan-only field on the account (company) record. Not on the deal |
| Information needed to produce Japanese-format documents | Honorifics, era-calendar dates, invoice layout | Not a field. Convert it where quotes and invoices are generated |
| A column from the old spreadsheet | Rep notes column, legacy system reference number | If nobody decides anything with it, do not add it |

The first type is useful in the global forecast call, not just in Tokyo. Record the approval step in one deal field, with steps such as working team aligned, manager approved, executive approved, decision made. Keep the picklist values identical across regions; only the display labels should be translated. If the values themselves differ by region, the field is shared but the reporting axis is not. HQ and each regional sales lead agree the step definitions.

Only the approval step goes into that single field. The approver is a person, so hold it as a role on the deal's contacts (Opportunity Contact Roles in Salesforce; association labels between deals and contacts in HubSpot, where availability depends on your subscription, so check). The deadline is a date, so it goes in its own date field. Neither is known when the deal is created, so do not make them required at creation. Ask for them when the deal moves into the approval stage.

The third type is output, not data. Adding honorifics or era dates as deal fields puts empty columns in every other region's reports and gives Japan its own entry rules. One caveat: if quotes are built with the CRM's native quoting tool, the conversion lives inside the CRM after all. Check how quotes and invoices are actually produced first.

The fourth type often has no answer when you ask. If the reason is "it was in the old spreadsheet," look at what that column was used for. If it turns out to support a decision, it belongs in one of the other three. If not, leave it out.

## When a field moves to the global standard, set a date to retire the Japan one

If a Japan-only field already exists, adding the global field next to it just gives you two copies, and one will go stale. Once you decide to standardise:

1. Raise it through HQ change management and get agreement from each regional sales lead. Make the field optional in other regions, not required.
2. List every workflow, validation rule, report and integration that reads the old Japan field.
3. Bulk-migrate existing values to the new field and reconcile the record counts.
4. Make the old field read-only. Leave historical reports on the old field and note the cutover date.

## HQ and Japan sort the list together

If the HQ admin does the sorting alone, Japan hears "refused again." If the Japan team does it alone, everything is required.

Keep every request on one shared list, and have the HQ CRM admin and the Japan operations owner review it together. Do not create a new meeting; add the list to the weekly operations meeting that already exists. Four columns are enough: the request, who decides what with it, where it goes, and the date of the decision. Name one person who decides when they disagree, such as the head of RevOps at HQ. Changes to the global standard alter every region's layout, so release them together once a quarter.

Keep the rows you decide not to build. When the same request comes back from someone else, you can explain in thirty seconds why it was not added. And when a request ends up in the global standard, say so to the other regions. Japan should get the credit for having fixed the global design.

**Before approving or refusing a field request from Japan, ask who will decide what with that field. Route it to the global standard, the Japan account record, the document layer outside the CRM, or nowhere, and Japan stops accumulating a version of its own.**

## Common mistakes

- **Building a Japan-only layout or record type first.** It is quick, but fields placed there are filled in only by Japan, so no global report or forecast ever uses them. Check whether the field belongs in the global standard before you branch.
- **Refusing without saying where the need should go.** A request with no destination does not disappear. It moves into a spreadsheet.
- **Solving a formatting request with a field.** Honorifics and era dates are an output problem, not a data problem.

## Related reading

What happens to a refused request, and how it becomes a second set of books, is covered in [when your Japan team asks to go back to the spreadsheet, answer with a date](/en/articles/asked-to-go-back-to-the-old-way/). The same mechanics apply when the request is a field rather than a system.

Other notes on the same problem are collected under [Japan market & GTM](/en/category/japan-gtm/).
