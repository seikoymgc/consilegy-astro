---
title: "Why Japan CRM go-lives need a rehearsal, not just a test"
description: "Use migration tests to verify the specification and a rehearsal to verify actual work. Leave time before go-live to fix and retest problems; one week is a planning example, not a universal rule."
publishedAt: 2026-09-27
updatedAt: 2026-10-17
category: crm
principle: "Use migration tests to verify the specification and a rehearsal to verify actual work. Leave time before go-live to fix and retest problems; one week is a planning example, not a universal rule."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

The migration testing had passed. Every field mapped, every workflow fired, every record landed where the spec said it would. One week before go-live, the rehearsal still turned up three people in the Tokyo office who could not log in.

The cause traced back to how users and permissions had been set up: as a one-to-one match to job titles in the legacy system. In practice, several people held more than one title through concurrent roles, or had changed teams in the last rotation cycle, and their access no longer matched what their title implied. Testing had checked whether the data moved correctly. The rehearsal checked whether those specific people could start their day inside the new system.

Those are two different questions, and a migration plan that answers only the first will discover the second on go-live morning.

## A test and a rehearsal are not the same check run twice

Migration testing is done by developers or the implementation vendor, against a script someone wrote in advance. Did this field move. Did this workflow fire. Did this report render. What it confirms is that the system behaves as specified. That is necessary. It is not sufficient.

A rehearsal is the point where the actual people who will use the system touch it, with their actual permissions, following their actual daily sequence of tasks.

This is where the behaviour the test script never anticipated shows up: someone whose concurrent role puts them in two permission groups at once, someone whose email address changed in a rotation and whose account was provisioned under the old one, a task that took one screen in the legacy system and now needs two screens the person has not yet discovered.

Testing looks at the mechanism. A rehearsal looks at the person. A mechanism that works correctly says nothing about whether a person can get through their first day inside it.

## A sandbox does not close this gap, and HubSpot's own documentation says why

The instinct is to assume this is what the sandbox testing already covered. It is not, and the vendor is explicit about the reason.

HubSpot's documentation on standard sandbox accounts, last updated 27 July 2026, states that integrations connected in the production account are not automatically connected in the sandbox. It also notes that record IDs differ between the sandbox and production environments, and recommends creating a separate "external record ID" property if you need to track how a record in one environment corresponds to a record in the other.

So a green result in sandbox testing tells you the migration logic works. It does not tell you that the production integration on the other end of that connection behaves the same way, because in most configurations it was never in the loop. The only environment where the production integration, the production permission structure, and the production email domain are all present at once is production itself, one time, before go-live.

That run has one non-negotiable condition: nothing reaches a customer. Touch only test records created internally for the rehearsal. Restrict every email send to internal addresses. Set automations so that records cannot enrol on their own, and enrol the test records by hand. Count, before you start, how many records will be written back to connected systems. When you finish, delete the test records and confirm they are gone from the connected systems too.

How you configure each of these depends on the tool and on how the integration was built, but skip any of them and the rehearsal becomes a live send to your Japanese customers, which is a far more expensive finding than three locked-out users.

## Concurrent roles and job rotation widen this gap further in Japan than a global rollout plan expects

A global rollout plan is usually built once and reused across regions, and its assumptions about permissions travel less well into Japan than HQ expects.

Two structural features of how Japanese companies staff roles do the damage. Concurrent roles, 兼務 (kenmu), are routine: one person holds responsibilities that a US or European org chart would split across two positions, so a permission template built from job title alone puts that person in only one group when their actual work needs two.

Planned job rotation moves people between roles and departments on a schedule the org chart does not reflect in real time, so the "sales manager" account provisioned from the HR feed six weeks ago may now belong to someone doing a different job.

Neither shows up in a rollout plan built around role names, because role names are exactly what stayed stable in the plan while the person behind them changed. It also means the person best placed to catch it, someone doing the actual Japan-side job that week, is rarely on the invite list for a rehearsal HQ scripted centrally for every region.

If nobody representing Japan operations sits in the rehearsal with their real login, the gap carries straight through to go-live morning, and it surfaces first as a support ticket rather than as a finding.

## One week is the window where there is still time to fix it, and not enough time for the environment to drift

The specific choice of one week before go-live is doing two jobs at once.

There is still time to fix what the rehearsal finds. Correcting a permission group, redirecting a notification, walking one user through a screen they had not seen: these are days of work, not weeks, and a week leaves room to fix and re-check before go-live.

At the same time, a week is short enough that production has not moved underneath the fix. Rehearse a month out and you may cross one of Japan's main rotation dates, typically April or October, along with a permission change and a shift in the legacy data, and the specific problem the rehearsal found may already look different by go-live.

A rehearsal is meant to be the one failure you deliberately have, as close to production as you can get, before the failure that matters. Too close and there is no time left to fix anything. Too far out and you are rehearsing a state that will not exist by the time it counts. One week is close enough to matter and far enough to still act on.

One week assumes the fixes are light: a permission group, a notification recipient. If the migration is large enough that a data reload is a realistic outcome, one rehearsal a week out cannot absorb it. Schedule an earlier full rehearsal as well, and keep the one-week run for confirmation.

Decide two things before the rehearsal starts: what findings would postpone go-live, and who makes that call. A reasonable line is any issue that stops work, such as users who still cannot log in, people who cannot see their own deals, or an integration that stops, and that cannot be fixed and re-checked before go-live. The call belongs to the project owner and the business owner on the Japan side, together.

Without that agreed in advance, the severity of whatever the rehearsal finds gets debated the day before launch.

## What a rehearsal checks is not whether it works

None of this means recycling the migration test checklist with more attendees. A migration test asks whether the data is correct and the automation fires. A rehearsal asks three different things.

Can someone holding a representative combination of Japan roles actually log in, and once in, can they see and edit what their job needs. Check those two separately: a failed login usually points to user provisioning, licence assignment or single sign-on, while a permission gap usually shows up as records the person cannot see or cannot edit.

Has a task that took one screen in the legacy system quietly become two or three screens, and does anyone know that yet. Does the external integration talk to the actual production endpoint, not the sandbox stand-in, with internal test records moving both ways.

None of these show up in a design review of the migration plan. They only show up once a person is sitting in front of the system.

The design decisions that produce a clean migration in the first place are covered in [CRM migration in Japan: when they ask to move every field](/en/articles/migrate-everything-request/). This note is about the step after that design is built: confirming a real person can operate inside it before go-live day does that confirming for you.

**A migration test checks whether the system works to specification. A rehearsal checks whether a real person, in their real Japan role, can start their day inside it. One week before go-live is the window that leaves time to fix what breaks without letting the environment drift.**

This week, look at who is invited to your next rehearsal. If the list is developers and administrators only, that is a second migration test wearing a different name. Add at least one person holding a genuinely representative combination of Japan-side roles, and give them their real login before go-live day does.

## Common mistakes

Reusing the migration test script as the rehearsal script. They check different things, and a rehearsal that only re-runs the data checks will miss every permission and workflow issue that only shows up with a real person and a real role.

Scheduling the rehearsal a month out "to be safe." The extra distance from go-live gives the environment more time to drift, so whatever the rehearsal finds may look different by the time it matters, and you lose the point of doing it close to production.

Staffing the rehearsal from the rollout team only. The rollout team knows the plan, not the daily reality of concurrent roles and recent rotations. Without a Japan-side frontline user in the room, the exact gap a rehearsal exists to find has no one positioned to notice it.

Running the production rehearsal against live customer records. The point is to exercise the production connections, not your customers' inboxes. Internal test records and internal recipients only.

Treating a passed sandbox integration test as proof the production integration works. HubSpot's own documentation is explicit that production integrations are not automatically connected in a sandbox, so a clean sandbox result is evidence about the migration logic, not about the live connection.

## Related reading

The decisions that determine what actually gets migrated, and in what shape, are covered in [CRM migration in Japan: when they ask to move every field](/en/articles/migrate-everything-request/). That note is about the design; this one is about confirming, before go-live, that a real person can operate inside what was designed.

Other notes on the same problem are collected under [CRM adoption](/en/category/crm/).
