---
title: "Japan lead SLA: decide where overdue leads go, not the hours"
description: "A global lead response SLA usually reaches the Japan team as a timer and a red number on the HQ dashboard. It holds only when something happens at the deadline. Measure the current time to first contact in Japan, then decide what stops the clock, where an overdue lead goes when the team is two people, and when to stop trying."
publishedAt: 2026-10-29
category: marketing
principle: "A lead response deadline holds because of what happens when it passes, not because of its length. Define what counts as a response, where an overdue lead goes next and when attempts stop, and read the overdue count as a routing and capacity signal, not as a verdict on one rep."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

The global rule says inbound leads get a first touch within one business hour. Every region inherits it, including Japan.

A quarter later, the Japan row on the SLA dashboard is red. HQ asks whether the Japan reps are following up. The Japan country manager answers that they are, mostly, and the conversation ends there.

In most of the cases I see, the reps are not the problem. **The rule says how fast to respond, and says nothing about what happens when nobody does.** In a two- or three-person Japan team, that gap shows up faster than anywhere else.

## A deadline without a consequence is invisible until month end

A lead response SLA (the agreed time between a lead being handed to sales and the first contact attempt) is kept best on day one and decays from there.

The decay follows a familiar path. A busy week of meetings delays a few leads. The delayed ones sink to the bottom of the rep's queue. Nothing flags them, so the manager finds out from the monthly report, or when marketing asks what happened to the lead from the webinar.

By then the lead is a week old, and the conversation is about one rep. Anyone carrying the same volume that week would have been late too.

From the marketing side this looks like a follow-up problem in sales. In Softbrain's survey of Japanese sales and marketing staff (fieldwork by IDEATECH, October 2024, 159 sales and 139 marketing respondents, a self-published study by a Japanese sales software vendor), the top complaint marketing had about sales was "not improving follow-up," chosen by 47.5% of the marketing respondents. The question was not about first-contact deadlines, but it shows where marketing's frustration sits once a lead is handed over.

## Why the global timer misreads the Japan team

Three setup choices make the Japan number look worse than the work behind it:

- **The clock may run on HQ hours.** Suppose the SLA is one business hour on Pacific time. A lead submitted at 10:00 in Tokyo arrives at 18:00 the previous evening in California, so the clock starts at 9:00 Pacific and the lead breaches at 2:00 a.m. Tokyo time, before anyone in Japan is at work. With a European HQ the breach lands at a different hour, but the cause is the same. Check which business hours and time zone the SLA calculation uses before reading the dashboard.
- **Japanese holidays are not on the global calendar.** Golden Week and the year-end break close many Japanese B2B offices for several days, and many companies slow down around Obon in mid-August. A one-hour SLA that runs through those periods produces a week of breaches that say nothing about the team.
- **There is often nobody to reassign to.** Global playbooks route an overdue lead to the next rep in the pod. A Japan team of two has no pod. When one rep is in a customer meeting all afternoon, the only other person may be the country manager.

None of this is about Japanese buyers or Japanese reps. It comes from applying a rule designed for a larger team in a different time zone.

## Measure the current response time before arguing about the hours

Before debating one hour versus one business day, pull the last three months of leads handed to the Japan team. Put the handoff timestamp next to the first logged sales activity.

In HubSpot, that is usually the date the lead reached the lifecycle stage you hand over at, against the first sales activity. In Salesforce, the lead's created or assignment date against the first logged task or event. Which fields hold the right timestamp depends on your setup, so check a handful of records by hand before building the report.

Leave out automated emails (sequences, nurture sends, form auto-replies). Otherwise leads look contacted when no person has done anything.

Look at the median and the slowest 10%, not the average. Then look for patterns. If Friday-evening leads all get picked up on Monday afternoon, the issue is how the clock handles the weekend. If one rep is consistently slower, look at that rep's volume first.

Set the deadline from that distribution and from how many leads each rep receives. If the current median is three days, writing "one hour" creates a rule that fails on day one.

## Decide three things that happen at the deadline

This is the part most SLA documents leave out. The routing table should be agreed by the heads of sales and marketing for Japan together, not set by HQ alone.

**1. What stops the clock.** If changing the lead status to "working" stops it, reps learn to change the status. Stop the clock on a call the rep logged or a one-to-one email the rep sent. An unanswered call counts if the rep also sends a personal email the same day. The buyer's reply is not something the rep controls, so it is not part of the clock; track time to first conversation separately each week.

Before going live, confirm that these activities are visible to the workflow or flow. Some email capture tools do not store emails and meetings as activity records the automation can read (Salesforce Einstein Activity Capture is a common example, depending on edition and settings; verify in your org). Log one test call and one test email on a test lead and check that the clock stops.

**2. Where an overdue lead goes.** In a small Japan team, choose from what actually exists:

- another Japan rep, if there is one
- a Japanese-speaking inside sales or partner desk, if the company has one in the region
- back to marketing for Japanese-language nurture, rather than to a global queue where nobody can call in Japanese

The answer can differ by lead type. A meeting request that goes overdue moves to another person who can call that day. A content download that goes overdue goes back to nurture. When a lead moves, notify the original owner and the manager so the owner knows it has left their queue. The notice is not a warning.

One exception: leads from existing customers or named accounts with an assigned owner stay with that owner, and the deadline triggers a notice to the manager instead. Reassigning them automatically splits account ownership and starts arguments over deal credit.

Reassign once. If the lead goes overdue again with the new owner, notify the manager and move it to nurture. Repeated reassignment only passes the lead around the team.

**3. When attempts stop.** Set how many attempts, over how many days, close out the current round. Without a limit, unreachable leads pile up in the queue and slow down the new ones.

A lead that hit the limit without any conversation goes back to nurture with a status of "not reached." Keep it out of the four reasons in [Four reasons to record when Japan sales returns a lead](/en/articles/record-why-leads-come-back/). Those reasons describe a decision made after talking to the buyer. Filing unreached leads under them makes "shallow interest" look larger than it is, and pushes the MQL criteria tighter than they should be.

## Send leads back by status and owner, not by lifecycle stage

When the workflow sends a lead back to nurture, leave the lifecycle stage alone. In HubSpot, lifecycle stages move forward only by default, and moving one back requires clearing the value first. Change only the lead status field (lead status or the lead's stage in HubSpot, Status on the Salesforce lead) and the owner.

Then check that the existing MQL automation does not hand the lead straight back to sales. If it does, the clock restarts and the same lead breaches again and again. Decide either that returned leads are not re-scored for a set period, or that they return only on a new action, and confirm that the nurture program allows re-enrolment.

Reassigning owners moves other things too:

- Pipeline and attainment reports by rep change. Check that owner history is kept.
- Round-robin workflows or Salesforce lead assignment rules may fire again and send the lead to someone else.
- If HubSpot and Salesforce sync the owner field, the sync direction may overwrite the new owner.
- Open tasks on the original owner need to be closed or moved.

Both HubSpot workflows and Salesforce flows can run the whole sequence: wait a set time after handoff, check for a qualifying activity, and if there is none, change the owner and notify. Whether the wait can count only business hours, and how holidays are handled, varies by tool and edition, so confirm it in your own instance. If Japanese holidays cannot be handled automatically, pick a date before each holiday period to extend deadlines by hand.

## Read the overdue count weekly, as a routing number

Count overdue leads every week, and keep the count out of individual performance reviews.

The question is where the breaches cluster. On particular days, after particular campaigns, with particular reps. If they spike in the week after a trade show in Tokyo, trade-show leads need their own deadline and their own route, not the standard one. If one rep keeps breaching, compare that rep's volume with the others first. Only when the volume is the same and the breaches continue is it a conversation with the rep.

Reverse that order and the overdue count becomes something to hide, and the status-flipping comes back.

Look at the numbers weekly, and change the deadline or the routing table only at the quarter boundary. Changing it every week means each week's overdue count measures something different.

Two options I would not take. Putting SLA breaches into each rep's scorecard looks fast, but the first thing it speeds up is the clock-stopping action, not the call. Routing every Japan lead to a central inside sales desk makes the deadline easier to keep. It also works only if that desk can call in Japanese during Japanese hours, and otherwise adds a step between the lead and the one person who can call.

**A lead response deadline holds because of what happens when it passes, not because of its length. Define what counts as a response, where an overdue lead goes next and when attempts stop, and read the overdue count as a routing and capacity signal, not as a verdict on one rep.**

Start small. Take 20 leads handed to the Japan team last month and list the handoff time and the first contact time side by side. Ask why the slowest few were slow. That answer will tell you more than any debate about the number of hours.

## Related reading

How to set who owns the first contact, and what triggers it, is covered in [Japan leads without pipeline: examine the handoff](/en/articles/japan-marketing-leads-no-pipeline/). This note picks up where that one ends: after the deadline has passed.

Other notes on the same problem are collected under [Marketing](/en/category/marketing/).
