---
title: "Your new sales hire can see every customer and every deal on day one"
slug: "new-reps-can-see-every-customer-in-the-crm"
lang: "en"
category: "setup"
pain: "A rep who joined this week can already see every customer in the company and the value of every deal their colleagues are working. Nobody decided to show them everything. Nobody decided to limit it either"
feature: "Members, teams and record scopes (Settings → Workspace → Members to invite people and create teams; Settings → Workspace → Permissions to set View scope and Edit scope per role and per object to All, Team or Owned. Everything starts at All and stays there until an admin narrows it)"
screens: "Settings → Workspace → Members: Invite member (Email address, Role), Teams, Create team, team selector on each member (No team) / Settings → Workspace → Permissions: tables for Admin, Manager and Member (Contact, Company, Deal, Ticket, Task, Activity, Quote × View, Create, Edit, Delete, Export, View scope, Edit scope) / Contacts list: Owner column / Deal: Edit, Owner"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/settings/permissions/permissions-view.tsx / src/app/(dashboard)/settings/permissions/page.tsx / src/app/api/permissions/route.ts / src/app/(dashboard)/settings/members/members-view.tsx / src/app/(dashboard)/settings/members/page.tsx / src/app/api/members/[id]/route.ts / src/app/(dashboard)/settings/settings-index.tsx / supabase/migrations/097_record_scopes_teams_export.sql / supabase/migrations/227_quote_record_scope.sql / src/components/contacts-table.tsx / src/app/(dashboard)/deals/[id]/edit/page.tsx / src/app/(dashboard)/companies/companies-view.tsx / src/lib/crm/use-cases.ts / src/app/api/contacts/import/route.ts / src/app/api/export/[dataset]/route.ts / src/app/api/demo/seed/route.ts"
date: 2026-10-24
author: "Seiko Yamaguchi"
---
Monday morning, a new account executive accepts the invite and logs in. On the first screen: every customer the company has, and every open deal, with amounts, including the ones their new teammates have spent months on. Nobody chose to show all of that. Nobody chose not to, either. The default simply won.

## What you lose is a clean answer to "who can see our data?"

Over-sharing only becomes a problem after something happens.

Someone who has already handed in their notice still has the full customer list. A well-meaning rep emails a prospect who belongs to a colleague. A customer's security questionnaire asks who inside your company can see their records, and the honest answer is "everyone." Say you have ten reps and two change each year. That's two accounts a year with full visibility walking out of the door.

Lock things down too hard, though, and handovers stall. The goal is to decide once who sees what, and let the system hold the line.

## In Revenue CRM, each role gets a View scope of All, Team or Owned

Go to Settings → Workspace → Permissions. There is one table per role: Admin, Manager and Member. Everything starts at All, so nothing changes until an admin narrows it.

Each table has a row for Contact, Company, Deal, Ticket, Task, Activity and Quote. Next to the View, Create, Edit, Delete and Export checkboxes are two dropdowns, View scope and Edit scope:

- All: everything in the workspace
- Team: records owned by people on your team, plus your own
- Owned: records where you are the owner (or that you created, if nobody owns them)

Changes save as soon as you pick them. Only the workspace owner and admins can edit the tables, and the Admin role always has full access. The scope isn't a filter on one screen. It is applied where the data is read, so records outside it don't appear in lists or on detail pages.

Teams live in Settings → Workspace → Members. Type a team name, press Create team, then pick a team on each member's row. One team per person. New people are added from Invite member on the same page, with an email address and a role.

Four things to know before you switch it on:

- Visibility follows the Owner field. Records brought in by CSV import are owned by whoever ran the import, so if an admin imported everything, a Member set to Owned will see nothing. You can reassign contacts from the Owner column in the Contacts list and deals from Edit on the deal, one at a time. There is no bulk reassignment, and there is no screen to change a company's owner after it's created
- Someone with no team who is set to Team sees only their own records, the same as Owned
- Activities are owned by whoever logged them. Set Activity to Owned and a rep loses sight of their predecessor's notes, even on contacts they now own
- Removing someone from the workspace doesn't reassign their records. If you run on Owned, move their records before you remove them

Seeing and exporting are separate. Exports from a list follow the Export checkbox and the View scope. Export starts switched off for the Member role and on for Manager. Only the owner and admins can use Export data to pull everything.

## The first step

This week, create teams in Members, put each rep on one, and in the Member table set only Deal's View scope to Team. Leave Contact and Activity on All for now.

The next day, ask each rep one question: can you see all of your deals? Any deal they can't see has an empty or wrong Owner. Fixing those is the real win. For the first time, the record of who owns which deal matches who is actually working it.

The demo opens with just an email address. Pick "B2B sales", go to Settings → Workspace → Permissions, and you'll see the role tables and the scope options. [Try the demo](https://crm.consilegy.com/demos)
