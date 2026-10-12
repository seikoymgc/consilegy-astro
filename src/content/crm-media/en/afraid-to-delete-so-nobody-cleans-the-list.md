---
title: "Nobody cleans the customer list because everyone is afraid to delete"
slug: "afraid-to-delete-so-nobody-cleans-the-list"
lang: "en"
category: "operate"
pain: "Duplicates and people who left years ago stay in the customer list because the team believes a deleted record is gone for good, so nobody touches it"
feature: "Trash (deleting a contact, company or deal moves it to Trash, \"Restore\" brings it back, and it stays there until someone presses \"Delete permanently\")"
screens: "Trash icon \"Move to trash\" on contact, company and deal records / row checkboxes and \"Delete\" on lists / \"List\" view for deals / Sidebar \"Settings\" → \"Operations\" → \"Trash\" / tabs \"Contacts\", \"Companies\", \"Deals\" / \"Restore\", \"Delete permanently\" / \"Settings\" → \"Permissions\" (the \"Delete\" column) / \"Settings\" → \"Operations\" → \"Audit log\""
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/trash/trash-view.tsx / src/app/api/trash/route.ts / src/app/api/trash/restore/route.ts / src/app/api/trash/purge/route.ts / src/components/record-delete-button.tsx / src/components/contacts-table.tsx / src/components/deal-list.tsx / src/components/deal-kanban.tsx / src/app/(dashboard)/companies/companies-view.tsx / src/app/(dashboard)/settings/page.tsx / src/app/(dashboard)/settings/permissions/permissions-view.tsx / src/app/(dashboard)/settings/audit-log/audit-log-view.tsx / src/lib/crm/use-cases.ts / src/lib/permissions.ts / src/app/api/orgs/route.ts / src/lib/contact-intake.ts / src/app/api/contacts/import/route.ts / src/lib/db-errors.ts / src/lib/campaign-send.ts / src/app/api/cron/sequences/route.ts / src/app/(dashboard)/forecast/page.tsx / src/app/(dashboard)/lists/[id]/list-detail.tsx / src/components/app-sidebar.tsx / src/lib/i18n/translations.ts / supabase/migrations/001_initial_schema.sql / supabase/migrations/006_organizations.sql / supabase/migrations/026_soft_delete_relations_rich_fields.sql / supabase/migrations/081_audit_trigger_org_purge.sql / supabase/migrations/097_record_scopes_teams_export.sql / vercel.json"
date: 2026-10-12
author: "Seiko Yamaguchi"
---
The week after a trade show. The same person is in the customer list twice. A buyer who left their company three years ago is still there too. A rep asks, "Can I delete these?" Nobody answers. In the last system, someone deleted a customer and it never came back.

So the list goes into the next trade show exactly as it is.

## What you lose is a list people can act on

A list nobody dares to delete from only grows. The real cost is that people stop trusting its counts and its recipients.

Say you have 2,000 contacts and one in ten is a duplicate or someone you can no longer reach. That is 200 records. A bulk email reaches the same person twice, and any plan built on that count is off by ten percent.

My recommendation is to stop debating "is it safe to delete?" in meetings. Settle a different question first: does everyone know a deletion can be undone? Once they do, the cleanup stops needing permission.

## In Revenue CRM, delete means move to Trash, and "Restore" brings it back

When you delete a contact, a company or a deal in Revenue CRM, it moves to Trash. The data is not erased.

There are two ways to delete. On a record, press the trash icon beside the record's name ("Move to trash"). On a list, tick the rows and press "Delete". The confirmation on the list does not mention Trash, but the record goes to the same place. Deals cannot be deleted from the kanban board. Switch to the "List" view, or delete from the deal itself.

To get something back, open "Settings" in the sidebar and choose "Trash" under "Operations". The tabs "Contacts", "Companies" and "Deals" list what was deleted, newest first. Tick the rows and press "Restore", and they return to the normal list. The deals and activities attached to a record are not touched when it goes to Trash, so they are still attached when it comes back.

Records stay in Trash until someone presses "Delete permanently". The Settings card mentions a retention window, but I found nothing that empties Trash after a set number of days. Each tab shows the 200 most recent deletions.

Who can delete is also defined. Out of the box, only owners and admins can move records to Trash. Managers and members can still "Restore" from it. To change that, open "Permissions" in "Settings" and tick "Delete" in the table for each role.

Four things to know before you start.

- Trash does not stop email. If the person is on a list, a bulk email to that list still reaches them, and a sequence they are enrolled in keeps running. To stop the bulk email, take them off the list first. That does not stop a sequence. A deal in Trash also still appears on the Forecast screen
- You cannot create a new contact with the email address of one sitting in Trash. Manual entry and card scanning show "A contact with this email address already exists." A CSV import skips the row but still counts it as imported. A form keeps the submission but creates no contact. If someone is missing from the list and still cannot be added, look in Trash
- There is no merge. To resolve a duplicate, copy what you need onto the record you are keeping, then move the other one to Trash
- "Audit log", under "Operations" in "Settings", records a move to Trash as a deletion, but the name beside it reads "システム" (system), not the person. You cannot tell afterwards who did it, so give the cleanup to one named owner

"Delete permanently" cannot be undone. Permanently deleting a contact also removes that contact's activities and tasks. Their deals remain, with the link to the contact cleared. Unless you have a reason to hurry, you do not need to press it at all.

## The first step

This week, have an admin pick one contact nobody needs and move it to Trash. Then open "Trash" in "Settings" and press "Restore". Show the whole sales team the record coming back, once.

After that, clean up five pairs you already know are duplicates. If nobody misses anything after a week, do the next five.

There is a demo workspace you can open with just an email address. Pick "B2B sales" and you can move a contact to Trash and restore it on the same screens. [Try the demo](https://crm.consilegy.com/demos)
