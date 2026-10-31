---
title: "You switched CRMs, and years of calls and meetings stayed behind in the old one"
slug: "past-calls-and-meetings-left-behind-in-the-old-system"
lang: "en"
category: "input"
pain: "Companies, contacts and open deals made it into the new CRM, but years of call, meeting and visit history stayed in the old system or in a spreadsheet export. When a new owner opens a contact, the history starts on the day you switched"
feature: "Activity history CSV import (Import CSV on the Activities page. Reads date, type, subject, body, outcome, contact email, company, deal name and owner, and places each activity on the contact, company and deal Activity tabs at its original date)"
screens: "Sidebar Activities → Import CSV (top right) → Download the CSV template → choose a file → Import preview (Recognized columns, Unrecognized:) → Import (count) → Import complete (skipped as duplicates, notes to check, errors; lists: Errors (not imported), Skipped (already exists), Check these (imported)); Activity tab on contact, company and deal pages"
sources: "src/app/(dashboard)/activities/page.tsx / src/app/(dashboard)/activities/activities-import-button.tsx / src/components/csv-import-dialog.tsx / src/app/api/activities/import/route.ts / src/lib/crm/csv-import-http.ts / src/lib/crm/csv-import.ts / src/lib/csv-import.ts / src/lib/crm/activities.ts / src/components/activity-timeline.tsx / src/app/(dashboard)/contacts/[id]/page.tsx / src/app/(dashboard)/companies/[id]/page.tsx / src/app/(dashboard)/deals/[id]/page.tsx / docs/product/CSVインポート/項目定義.md (crm #397, #398, #399)"
segment: "b2b"
edition: "b2b"
date: 2026-10-31
author: "Seiko Yamaguchi"
---
Migration day went well. Companies, contacts and open deals are all in the new system, and whoever ran the project is finally sleeping properly.

A week later, a rep inherits one of your oldest accounts and opens the main contact. The activity feed is empty. The earliest entry is last week's import. Five years of calls and site visits are still in the old tool, or in a spreadsheet someone exported "just in case."

So the rep does what reps always do. They message the previous owner: "Did we ever have a pricing dispute with these people?"

## What you lose is the story behind the account

Move only records and deals, and the new system knows where things stand today. It has no idea how they got there. Why this customer has these terms, who said what in the last renewal, which contact went quiet after a bad quarter: all of that goes back into the heads of whoever can still log in to the old tool.

That has a cost every time an account changes hands. Say you reassign ten accounts a year and each handover takes a 30 minute catch-up with the previous owner. That's five hours, in the good case where the previous owner still works for you.

And the old tool never gets switched off. Someone always wants to keep it "for reference," so you end up paying for two systems after a migration that was supposed to save money.

## In Revenue CRM, activity history imports by CSV, at its original date

Open Activities in the sidebar and you'll find Import CSV at the top right. (If Activities isn't in your sidebar, switch the sidebar view to show all modules.) It takes past calls, emails, meetings and notes and files them at the date and time they actually happened.

The columns it reads are date, type, subject, body, outcome, contact email, company, deal name and owner. Date is required, plus either a subject or a body. Download the CSV template gives you the headers, so rename the columns in your export to match. Write dates year first, like 2026-10-09 14:30. US and UK formats such as 10/09/2026 aren't read, and those rows are rejected with an error, so reformat the date column before you import.

Type accepts everyday words like phone, visit or Slack, not just the system's own labels. Dates are read in the time zone of the browser doing the import, and each activity lands on the Activity tab of the linked contact, company and deal at that date. Subject and outcome show up there as well. Put a teammate's email or name in the owner column and the activity is recorded as theirs.

Check Recognized columns and Unrecognized: in the preview, click Import, and the completion screen lists anything skipped, anything that errored and anything you should check, each with its row number.

Five things to know before you load five years of history:

- Imported activities can't be edited or deleted from the screen. Start with about five rows you wouldn't mind keeping, look at how they appear on the timeline, then load the rest
- Activities only link to records that already exist. Import companies, then contacts, then deals, then activities. Contacts are matched by email, so old entries for people without an email address won't attach to a contact, though they can still attach to the company
- If a deal name matches more than one deal at the same company, or none, the activity is saved without the deal and flagged under Check these
- An activity linked only to a company appears on the company page, not on any contact page
- Rows dated in the future come in as scheduled activities rather than completed ones. Make sure your export doesn't include upcoming meetings by accident

Running the same file again skips rows that are already in. But if you add companies or contacts in between, or edit the file, the earlier rows come in a second time as duplicates. One file can hold up to 5,000 rows.

For moving the contact list itself, see [The customer list never makes it out of Excel](/en/crm/media/b2b/customer-list-stuck-in-excel/).

## Your first step

This week, pick your single longest-running customer and export just that account's activity history from the old system. Match the template headers, import five rows, and open the company and contact pages to see the old dates appear in order.

Once one account looks right, deciding whether to move the rest takes about a minute.

Try the demo with just an email address. Choose B2B sales, and Import CSV is on the Activities page. The demo is shared and imported activities can't be removed, so download the template and look at the flow without loading real records. [Try the demo](https://crm.consilegy.com/demos)
