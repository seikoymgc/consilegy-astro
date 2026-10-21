---
title: "Tell your Japan team what CRM records won't be used for"
description: "When HQ never says what Japan's CRM records will and will not be used for, the team reads the answer from the first few forecast calls and stops logging bad news. Write one table per record type, agree it with the Japan country manager, and match the questions on the call to it."
publishedAt: 2026-10-20
category: adoption
principle: "For each type of CRM record, write down what it is used for and what it is not used for, and hand that to the Japan team. Say openly what feeds performance reviews, and protect the rest through the questions asked on the forecast call."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

The Japan team's CRM hygiene score looks fine. Fields are filled, activities are logged. And yet stalled deals only get updated the day before the forecast call, and weak opportunities quietly disappear.

From HQ this looks like a discipline problem, or a data-entry burden. The burden is real. But look at what gets logged and what does not, and a pattern shows up. The records that go missing are the ones that make the person writing them look bad.

That is not a Japanese trait. It is a rational response to a question nobody has answered in writing: what will this data be used for?

## "I don't want my numbers seen" is a minority reason, but a real one

In Mazrica's SFA/CRM survey (published 28 January 2025, fielded 25 to 28 November 2024 by IDEATECH, n=101 sales managers and team leads at Japanese B2B companies; run by a vendor that sells SFA software, with a small base, so read it as a direction), the top reason for not entering data was that it takes too long, at 54.5%. Effort is the biggest reason. But 27.7% also gave "I don't want other people to see my results". That share, which would remain even if entry were faster, is what this note is about.

Where does the data end up? In a survey by Keywalker (fielded 8 to 10 October 2025, published 11 November 2025, n=1,034 sales staff and managers at Japanese companies that had adopted SFA, CRM or BI tools; an online panel survey run by a company that sells BI implementation services), the top dashboard use among managers was checking numbers in the sales meeting, at 58.2%. Deciding the next action was 15.4%.

These are different surveys asking different questions, so they do not prove a cause. But they describe what the person entering the data sees. What I write gets checked in a meeting. Nobody has told me what else happens to it.

From here on this is what we have seen in the field, not survey data. Whether someone logs a stalled deal honestly in that situation depends less on their integrity than on how much they trust the reader.

## Two things can make this sharper for a Japan team

The first is size. On a forty-rep leaderboard, being near the bottom goes unnoticed. On a four-person Japan list, everyone knows who is last.

The second is timing. If your Japan buyers' approval path is longer than in your other regions, a forecast-call rule that flags every deal with no stage change in three weeks will hit Japan more often, for something that is part of how those buyers buy. The team learns quickly that an honest "waiting on approval" costs them, and "in progress" with a fresh timestamp does not.

## The team learns what data is for from the first few calls, not the kickoff

At go-live, someone from HQ says the data helps everyone. That is true. It is not what the team acts on.

What they act on is the first few forecast calls. A manager shares a stale deal on screen and asks why it is stuck. The manager means it as a check. The rep hears that writing it down got them questioned in front of HQ.

Once is enough for some reps to read it that way. From the next week, stalled deals may stay "in progress" with a new update date, and weak ones may be gone before the call. You can check whether this is happening with the day-of-week test later in this note.

The reverse works the same way. A rep marks a deal as stuck early, the manager asks who they need to reach to move it, and the next step is agreed on the spot. After a few of those, bad news starts arriving early.

So the real policy on data use is set by how managers behave. Writing it down still matters. Without it, every inconsistency between managers gets read as the real rule. With a country manager in Tokyo and two reviewers at HQ, the team receives three versions.

## Write down what each record is not used for

Hand the team one table, written in Japanese, one row per record type.

| Record | Used for | Not used for |
|---|---|---|
| Deal stage and next step | Weekly pipeline meeting: agree the next action on stalled deals | Marking someone down because a deal is stalled |
| Activity counts (meetings, calls, email) | The rep's own weekly review and their 1:1 | Ranked by person in the meeting or in cross-region dashboards; not used in reviews |
| Approval progress | Weekly pipeline meeting: see whose approval is outstanding and agree the next action | Marking someone down because approval has not moved |
| Closed-lost reason | Quarterly review of loss patterns to adjust offer and pricing | Comparing loss counts between reps |
| Rep's own read (internal politics at the buyer) | The rep and their manager, deciding the next move | Read out in the meeting |
| Closed-won amount and count | Performance review against the plan | (Used. Say so.) |

Two rules matter.

Do not hide what feeds the review. Using bookings in performance reviews surprises nobody. What causes trouble is not knowing where the line is. When the line is invisible, people assume everything is on the record and act accordingly.

Do not leave the right-hand column empty. A table that only lists uses tells the team almost nothing new. What they want to know is what will not happen to them if they write it down.

Some companies do use activity counts in reviews. That is their call. If so, write that, and accept the side effect: counts go up, and what is behind them gets thinner.

The Japan country manager and HQ sales ops own the table together, and every manager who reviews Japan's pipeline, including the people on the HQ forecast call, agrees to the same version. If a row touches how reviews are run, show it to HR before it goes out.

If the table says one thing and reviews do another, the table loses. Before you send it, check two things.

First, that it matches how reviews are actually run. Second, that nothing already running contradicts the "not used for" column: per-rep activity rankings, scheduled reports to managers, leaderboards or goals. Switch those off, or move them somewhere only the rep can see, before the table goes out.

Check the closed-lost picklist too. Why Japan's losses pile up under "price" is covered in [When Japan's lost deals are all recorded as "price"](/en/articles/loss-reason-defaults-to-price/). A deal with no budget this year is parked, not closed-lost.

## Protect the table through the questions on the call

A table handed out on Monday is worth nothing if Tuesday's forecast call opens with "why is this stuck?" The table is enforced by the questions.

Move the questions from explaining the past to deciding the next step.

- Not "why is this stuck?" but "what do we need to learn to move it?"
- Not "why did we lose it?" but "have we lost others for the same reason?"
- Not "are you sure about the confidence?" but "whose approval is still outstanding?"

A "why" asked in a 1:1, working through where the process broke with the rep, is a different thing. The one to drop is the "why" that asks an individual to explain themselves in front of the call.

These look like small rewordings. They decide whether the rep learns "writing it down gets me questioned" or "writing it down gets me a next step".

You can also check whether the table is holding by looking at when stage changes happen. In HubSpot, the "date entered" property for each deal stage gives you this; in Salesforce, opportunity field history or stage history does. Count stage changes by day of the week. If they bunch up the day before the forecast call, the records are being written for the call. If they spread across the week two or three months after the table goes out, the records have started following the deals.

Stage history is usually recorded by default. Whether you can build a day-of-week report depends on your edition and permissions, so check; if you cannot, export the history and count it in a spreadsheet.

**For each type of CRM record, write down what it is used for and what it is not used for, and give that to the Japan team in Japanese. Say openly what feeds reviews, and protect the rest through the questions on the forecast call. Teams learn what data is for from the first few calls, not from the kickoff deck.**

## Common mistakes

- **Saying "this won't be used for reviews" on a call and leaving it there.** When that person moves on, the promise goes with them. It needs to be a document every reviewer holds.
- **Putting Japan in the global activity leaderboard "to motivate".** It motivates the top of the list. The bottom of a four-person list increases the count, not the substance.
- **Making a fuss over the rep who logged bad news.** Heavy praise signals that it is unusual. Agreeing the next step and moving on is what keeps it normal.

## Related reading

Where the rep's own read should live, and who can see it, is covered in [when your Japan team asks to go back to the spreadsheet, answer with a date](/en/articles/asked-to-go-back-to-the-old-way/). The fourth row of the table above should match whatever you decide there.

Other notes on the same problem are collected under [Organization & adoption](/en/category/adoption/).
