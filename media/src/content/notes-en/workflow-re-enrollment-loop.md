---
title: "Why your Japan workflow fired three times and nobody reported it"
description: "If an automation writes a property used in its own trigger, test re-enrolment and external write-backs. Separate the trigger where needed and verify that repeated updates do not repeat the action."
publishedAt: 2026-09-11
updatedAt: 2026-10-17
category: crm
principle: "If an automation writes a property used in its own trigger, test re-enrolment and external write-backs. Separate the trigger where needed and verify that repeated updates do not repeat the action."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

The same notification reached the same Japanese contacts three times, on three consecutive nights, shortly after 1am Japan time.

The first thing headquarters asked was whether the Japan team had edited the workflow. They had not. The second was whether re-enrollment was on. It was, deliberately: a contact whose lead status drops and later rises again should be notified again. Switching it off would stop the duplicates and the legitimate second notification with them.

## Turning re-enrollment off stops the sends but leaves the cause in place

The re-enrollment setting decides whether a record that meets the trigger again can be admitted again. With it on, a record re-enters every time it returns to the trigger state. The real question is why these records kept returning every night.

The workflow in question enrolled contacts whose lead status was "hot", and its final action set that same property to "notified". The workflow moved the record out of its own trigger. As soon as something put "hot" back, the record matched again and entered again.

Nothing in the editor shows this as a loop. Read top to bottom, the workflow is correct. The cycle only exists once the last step and the first step are placed on the same field, and no screen in HubSpot or Salesforce puts those two next to each other.

## With re-enrollment on, a state trigger behaves like a change trigger

This distinction is where most automation designs quietly break.

An enrollment condition can be written as a state: contacts whose lead status is "hot". With re-enrollment on, what actually runs is "every time a contact returns to hot". The requirements document describes a state. Production counts changes. Check that the requirements distinguish the current state from the change that triggers enrolment. Translation does not resolve an ambiguity in the original specification.

To a person reviewing the record, the contact has been "hot" all week. The property history shows hot, notified, hot, every night. The platform responds to the history.

That asymmetry is what lets an automation restart itself on its own output.

## Japan subsidiaries that predate the global CRM often have a second system writing into it every night

This is the part a global template does not account for.

A Japan office that was operating before the global CRM arrived often runs on something local. Sales administration in kintone, an order or billing system the parent company has never logged into, a card-scanning service holding the contact history, a spreadsheet that the inside sales team maintains. When the global CRM arrives, those are often not retired. They get connected, and the connector is often built locally, quickly, to a deadline set in another timezone.

Those integrations often push the full record from the local system rather than a diff. Simpler to build, and until an automation is layered on top, nothing visibly breaks. So every night, every mapped field is overwritten with the local system's value. The local system still said "hot". Whatever the CRM changed during the day was put back overnight.

Put a trigger on any mapped field that the workflow also writes, and the workflow now has a scheduled nightly cause. In this case the timing gave it away. Not 1am because of a delay in the platform, but 1am because that is when the local sync ran.

Once an integration exists, a property in your CRM is no longer something only humans touch. Decide which system owns which field before you put automation on top of it, or the meaning of your trigger changes without anyone editing the trigger. That is the same failure we described in [your Japan integration will not fail on the connector, it fails on the key](/en/articles/decide-the-master-before-integrating/), arriving through a different door.

## The recipient may not tell you, and the deal just goes quiet

Part of why these run for days is that the signal may not reach you.

Recipients of a duplicate send often do not reply to complain. If the contact manages the vendor relationship, the complaint may travel internally instead, and what the sales rep observes is a meeting that does not get scheduled. Your monitoring shows a healthy send volume. Your pipeline shows a deal that stopped moving. Nothing connects the two.

There is also a compliance edge. Japan's Act on Regulation of Transmission of Specified Electronic Mail requires opt-in for advertising email, with narrow exceptions such as an address given directly on a business card, and requires sender identification and a working opt-out in each message. Repeated unwanted sends are therefore not only an annoyance in this market.

They can become a question for the customer's legal or general affairs function, which may also sit inside the approval path you are trying to get through.

And one local fix is common. The Japan team turns the automation off and does the step by hand, because manual work is recoverable and a second incident is not. Headquarters then sees a region with low workflow usage and reads it as resistance to the global playbook.

## Two Japanese surveys on what the field actually wants from automation

Mazrica surveyed Japanese B2B sales managers and team leads using SFA or CRM systems (fieldwork 25 to 28 November 2024, n=101, an online panel survey designed by IDEATECH; Mazrica sells an SFA product). The most requested capability was automated entry and simplified fields at 47.5%, followed by AI assistance with data entry at 45.5%. Small sample, vendor-sponsored, so read the order rather than the decimals.

The direction is not ambiguous. The sales teams in this sample are not refusing automation. It tops the list of what they ask for.

Innovation and Co. surveyed companies with marketing automation deployed (fieldwork October 2022, n=438; the sponsor sells an MA product) and found that while more than 80% rated each major capability as important when selecting the tool, more than 51% were not using those capabilities after deployment. The reasons given were no occasion to use them, insufficient resource, and difficulty.

Those two findings meet at exactly the point where a workflow misfires in front of a customer. The capability with the highest demand failed visibly, in front of a customer. What you lose is not a workflow. It is the argument for the next one.

## The test is one line, and it belongs in your go-live checklist

For every enrollment trigger, ask whether this workflow writes to that property. If it does, the design is not closed.

Three things to do. List every workflow with its trigger fields in one column and its action fields in another, and look for a field appearing on both sides. Where you cannot separate them, rewrite the trigger from a change to a state, adding a completion flag: enroll records that are in the state and not yet flagged, and set the flag as the final action.

Keep the flag on a field the integration does not map, or the sync will clear it and the loop returns. The second pass then fails the condition.

The flag also needs a condition for coming down. Without one, the legitimate second notification, for a contact whose status drops and later rises again, is blocked too. Clear the flag in a separate workflow when the status changes to a value other than "hot" or "notified". Neither this workflow's own "notified" write nor the sync writing "hot" back should clear it.

On the integration side, make the write-back incremental and take fields the CRM owns out of the mapping. Depending on the platform and how the connector writes, a connector that rewrites unchanged fields every night can damage your reporting even without automation attached, because last-modified dates stop meaning anything and any report built on stalled records silently empties. That breaks more quietly than a duplicate email and takes far longer to find.

Then test one record before go-live. Whether a workflow editor's test function reproduces the trigger and re-enrollment logic depends on the platform and setup, so do not rely on it. Create one test record in both the local system and the CRM, restrict the trigger so only that record can match, and run it through the real workflow. Remove the restriction once the test is done. Read the enrollment history rather than the outcome.

Check three things. After the run, push the integration's write-back once: the record should not enroll again, and the flag should stay up. Then lower the status in the local system and raise it back to "hot": the flag should come down and the record should enroll exactly once more. If all three hold, the loop is closed. If the write-back alone re-enrolls the record in a test, it will re-enroll nightly in production, in a timezone where nobody is awake to see the first one.

The wider view of designing revenue around the buyer's internal process sits in [Japan Market GTM and Messaging](https://consilegy.com/en/services-en/japan-market-gtm-messaging/).

**Never trigger an automation on a property the same automation writes. Where a local system rewrites fields every night, the loop has a scheduled cause and runs where nobody is watching.**

## Common mistakes

- **Assuming the Japan instance only receives data from the global CRM.** A local order, billing, or card-scanning system that predates your rollout may still be writing into it, and the connector may push whole records rather than differences.
- **Fixing it by switching re-enrollment off.** The duplicates stop, and so does every legitimate re-notification. The trigger and the sync are still crossed.
- **Treating a workflow misfire in Japan as a minor operational issue.** The recipient may not complain to the rep, the complaint may route internally, and the first symptom you see can be a deal that stops moving.
- **Reading low workflow usage in Japan as resistance.** After one visible misfire a team may revert to manual work deliberately, because a second incident in front of the same customer is not recoverable.
- **Testing the outcome instead of the enrollment history.** A correct email proves the actions work. Only the enrollment log tells you whether the record came back around.

## Related reading

If the field your trigger depends on is not reliably populated by people in the first place, this is a property design problem before it is an automation problem. The two conditions a field must meet before you make it required are in [in Japan, a required field produces confident wrong answers](/en/articles/dont-make-unknown-fields-required/).

Other notes on the same problem are collected under [CRM adoption](/en/category/crm/).
