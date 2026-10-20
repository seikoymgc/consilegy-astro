---
title: "Your customer history lives only inside the CRM"
slug: "no-one-keeps-a-copy-of-the-customer-data"
lang: "en"
category: "operate"
pain: "You can pull a contact list out of the CRM, but the deal history, call and meeting logs, notes and attachments stay inside it. When an auditor, a successor or a migration project asks for everything, nobody knows how to get it out"
feature: "Export data (Settings > Operations > Export data). Eight datasets, each as a full CSV: contacts, companies, deals, activities, notes, tasks, emails and attachments. Owners and admins only. Every export is recorded in the audit log"
screens: "Sidebar Settings > Operations: Export data / CSV button on each row, Exporting… / Only owners and admins can export all data. (shown to other roles) / Audit log"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/settings/settings-index.tsx / src/app/(dashboard)/settings/export/page.tsx / src/app/(dashboard)/settings/export/export-view.tsx / src/lib/export/full-export.ts / src/lib/export/read-pages.ts / src/app/api/export/[dataset]/route.ts / src/lib/csv.ts / src/app/(dashboard)/settings/audit-log/audit-log-view.tsx / src/app/api/contacts/export/route.ts / src/components/csv-import-dialog.tsx / src/app/(dashboard)/layout.tsx / src/app/api/demo/seed/route.ts"
date: 2026-10-21
author: "Seiko Yamaguchi"
---
Two weeks before the year-end audit, finance asks the head of sales for "the full record of what we discussed with this client, and when." She goes to the contact list and downloads the CSV. What she gets is a table of names, companies and phone numbers. No call logs, no deal history, no copy of the quote the client sent as an attachment. The rest of her afternoon goes into opening records one by one and copying them out.

## What you lose is the freedom to decide, because your records can't leave the system

If the customer history exists only inside your CRM, the audit is not the only day it hurts.

Say you work with 300 accounts and it takes five minutes to copy one account's history out of the screens. That is 25 hours, or about three working days. The same job comes back every time a rep leaves and someone has to write a handover.

The heavier cost shows up when you are thinking about switching tools or renegotiating the contract. If you are not sure you can take your data with you, you stay put even when you know the tool is wrong for you. Keeping your own copy is what keeps the choice open.

## In Revenue CRM, Export data in Settings gives you eight complete CSVs

Open Settings in the sidebar and click Export data under Operations. Each dataset has its own row. Click CSV on a row and that file downloads.

These are the eight datasets:

- Contacts, Companies and Deals, with every field. Custom fields come out in a single JSON column
- Activities: calls, meetings, emails and other logged touches, with the contact, company or deal they belong to
- Notes and Tasks
- Emails: date, sender, recipient, subject and a short preview of messages synced from Gmail
- Attachments: a list of files with a download URL for each one

There is no row limit. Related records are given by both name and ID, so you can re-link them in another system. Timestamps are in Japan time (YYYY-MM-DD HH:mm), which is worth knowing if your team sits in another time zone. The files are UTF-8 with a byte-order mark, so Excel opens them without garbled characters. Column headers follow your display language, while picklist values come out as stored, such as `customer`. Every export lands in the Audit log with who exported which dataset and how many rows.

Five things to know before you rely on it:

- Only owners and admins can use it, and it exports the whole workspace regardless of anyone's visibility settings
- It runs one dataset at a time. There is no single "download everything" button
- Full bodies of emails synced from Gmail, quotes, tickets, inbox conversations, calendar events and campaign send history are not included. One-to-one emails sent from Revenue CRM are in Activities, body and all
- Contacts, companies and deals in the trash are left out, and attachment URLs expire seven days after the export
- You can't load these files straight back in to restore. CSV import covers contacts, companies and deals only, and IDs are not carried over

One more: export while your subscription is active. Once it ends, every screen after login switches to an end-of-plan page and Settings is no longer reachable.

## The first step

This week, have an owner or admin export all eight datasets once, put them in a dated folder and store it on your shared drive. For attachments, download the files you actually need from their URLs within seven days.

Put a recurring reminder on the first of every month to do it again. The next time an auditor or a successor asks for everything, you start from that folder instead of from scratch.

In the demo, which only needs an email address, choose B2B sales and open Settings > Operations > Export data to see which records come out in which columns. [Try the demo](https://crm.consilegy.com/demos)
