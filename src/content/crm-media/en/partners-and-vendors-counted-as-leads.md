---
title: "Your resellers and vendors are counted as leads, and the funnel looks bigger than it is"
slug: "partners-and-vendors-counted-as-leads"
lang: "en"
category: "setup"
pain: "The CRM holds resellers, contractors and suppliers alongside real prospects. The people you email most score highest, get promoted to MQL and show up in the home funnel, so the numbers in the pipeline meeting are inflated"
feature: "Relationship types (create types under Settings > Data model > Relationship types, then pick one on a company or contact page. Non-customers are left out of automatic MQL promotion, MQL handoff, the home Lifecycle funnel, and the inflow and referral follow-up automations)"
screens: "Settings > Data model > Relationship types (Customer is built in and cannot be renamed; Add type, Save; Move up, Move down, Delete; removing a type asks before records become customers again); the picker under the name on company and contact pages (Customer plus your types); the Relationship filter and By relationship grouping on the company and contact lists; the Relationship type column in CSV import; Lifecycle funnel on Home"
sources: "src/app/(dashboard)/settings/relationship-types/page.tsx / src/app/(dashboard)/settings/relationship-types/relationship-types-view.tsx / src/app/api/relationship-types/route.ts / src/lib/relationship-types.ts / src/components/relationship-type-picker.tsx / src/app/(dashboard)/companies/[id]/page.tsx / src/app/(dashboard)/contacts/[id]/page.tsx / src/app/(dashboard)/companies/companies-view.tsx / src/components/contacts-table.tsx / src/lib/crm/csv-import.ts / src/lib/csv-import.ts / src/lib/lifecycle.ts / src/lib/lead-scoring-run.ts / src/lib/revops/inflow.ts / src/lib/revops/marketing.ts / src/lib/list-criteria.ts / src/app/(dashboard)/settings/settings-index.tsx / supabase/migrations/258_relationship_types.sql (crm #402)"
segment: "b2b"
edition: "b2b"
date: 2026-11-01
author: "Seiko Yamaguchi"
---
Monday pipeline review. The Lifecycle funnel on the home screen says MQLs are up again this month. Good news, apparently.

Then someone opens the list. Near the top: the account manager at your biggest reseller, the agency that builds your landing pages, the supplier you email every week. If your scoring rules count activities and email opens, they are the most engaged people in your database. So they scored high, got promoted to MQL, and each one now has a first-contact handoff task sitting with a sales rep.

The rep closes those tasks without comment. Nobody fixes the funnel.

## What you lose is trust in your own numbers

When partners and vendors are counted as leads, the funnel stops being something anyone makes decisions on.

Every CRM ends up holding people who will never buy from you. Resellers, contractors, suppliers, referral partners. Their business cards go in the same place, their emails are logged against the same records. That is fine, and you want them there.

The problem is when the system treats all of them as potential buyers. Say 120 of your 600 contacts are partners or vendors, and all of them sit somewhere in the funnel. Then one in five people in it was never someone you could sell to. After a few meetings like that, someone says "but that includes the resellers, right?" and from then on the funnel is a slide nobody acts on.

## In Revenue CRM, relationship types separate customers from everyone else

Anyone you mark as something other than Customer drops out of lead counts and automatic stage changes. Anything left unmarked stays a customer.

Go to Settings, then Data model, then Relationship types. Click Add type, name it with the words your team already uses (Reseller, Contractor, Supplier) and Save. Customer is built in and can't be renamed. Everyone starts as a customer, so creating types changes nothing until you assign them.

Once at least one type exists, a picker appears under the name on every company and contact page. Set someone to Reseller and they drop out of four things:

- Automatic promotion to MQL from the nightly scoring run
- The MQL handoff to sales
- The Lifecycle funnel on Home and the lead counts behind it
- Automatic lead-source tagging and the follow-up tasks for inbound and referral leads

The company and contact lists also get a Relationship filter and a By relationship grouping, which is the quickest way to see all your resellers in one place and spot who is missing.

Only owners and admins can save changes to the list of types. Four more things worth knowing:

- Setting a type on a company does not change its contacts. You set contacts one at a time. In CSV import, contacts inherit their company's type when the Relationship type column is blank. A type name that doesn't match is saved as Customer, with a note to check
- Setting an existing MQL to Reseller does not move their lifecycle stage back. What changes is future automatic promotion and the funnel count. You can still change stages by hand
- Bulk email lists don't exclude them, and lists can't filter by relationship type. Check the recipients before you send a newsletter
- Deleting a type turns its companies and contacts back into customers. You are asked to confirm before it saves

## Your first step

This week, filter the contact list by Stage to MQL and look at the first 20 people. Count how many aren't customers at all, then set the type on each of those contacts. Tagging the company alone won't take its people out of the funnel, so tag both.

Once you know how many of those 20 were partners or vendors, you'll know whether a full cleanup is worth doing.

Try the demo with just an email address. Choose B2B sales and you'll find Relationship types under Settings, in the Data model group. The demo is shared, so look at where it lives and what it says without creating types. [Try the demo](https://crm.consilegy.com/demos)
