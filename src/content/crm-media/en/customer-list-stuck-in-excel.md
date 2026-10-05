---
title: "The customer list never makes it out of Excel"
slug: "customer-list-stuck-in-excel"
lang: "en"
category: "input"
pain: "You bought a CRM, but the customer list still lives in a spreadsheet. \"We'll clean it up first\" turns into months of keeping two systems"
feature: "CSV import (contacts, companies, deals)"
screens: "Sidebar \"Contacts\" \"Companies\" \"Deals\" / \"Import CSV\" at the top right of each list / \"Import preview\" with \"Recognized columns\", \"Unrecognized:\", \"Preview (first 3)\", \"Import N\" / \"Import complete\" and \"Error details\" / Settings \"Integrations\" → \"Another CRM (read-only)\" → \"CRM sync\""
segment: "b2b"
edition: "b2b"
sources: "src/components/csv-import-dialog.tsx / src/app/api/contacts/import/route.ts / src/app/api/companies/import/route.ts / src/app/api/deals/import/route.ts / src/components/contacts-table.tsx / src/app/(dashboard)/companies/companies-view.tsx / src/app/(dashboard)/deals/page.tsx / src/app/(dashboard)/settings/crm-sync/page.tsx / src/app/(dashboard)/settings/integrations/page.tsx / src/app/(dashboard)/settings/page.tsx / src/app/(dashboard)/settings/crm-sync/crm-sync-view.tsx / src/lib/delivery/crm-sync.ts / src/app/(dashboard)/deals/deals-import-button.tsx / src/lib/work-fuel.ts / src/lib/demo.ts / src/lib/i18n/translations.ts"
date: 2026-10-05
author: "Seiko Yamaguchi"
---
A month after the CRM contract was signed, the sales coordinator still has "customers_FINAL_v3.xlsx" pinned to the taskbar. One tab per year, five tabs. Columns called "Name", "Account", "Tel" and "Comments", and in Comments, three years of history typed by someone who has since left.

"We'll clean it up, then load it." Nobody has started the cleanup. The reps updated the spreadsheet again this morning, and the CRM holds the three test records from onboarding day.

## The cost is not the migration. It is every day you keep two systems

While the list stays in Excel, both the spreadsheet and the CRM are "possibly the right place", which means nobody trusts either.

Say you have five reps and each spends five minutes a day opening and fixing the spreadsheet. Over twenty working days that is roughly eight hours a month, and it recurs every month until the move is done. Meanwhile the CRM is empty, so the subscription has not delivered a single day of value.

Volume is not what stalls migrations. The order of work is. Cleaning five years of rows has no finish line, and a job with no finish line does not get started.

So I do not recommend cleaning first. Load the customers who are active now, and add the rest on the day you need them. Getting the team out of the spreadsheet by next week matters more than moving every row.

## In Revenue CRM, if the headers match, you drop the CSV in and it loads

You can import three things: contacts, companies and deals. Open any of those lists from the sidebar and "Import CSV" is at the top right. Drop a file in and the "Import preview" opens.

The preview shows which of your headers matched a field under "Recognized columns", and lists the ones that did not under "Unrecognized:". Below that are the first three rows. Press "Import N" and they load. "Import complete" tells you how many went in, and "Error details" lists any row that did not, numbered from the first data row. One exception: a contact skipped because its email already exists is not listed there, and it is still included in the count.

There are four places it tends to stop. Each can be fixed in the spreadsheet.

First, names. Contacts need a first name column and a last name column. A single "Name" or "Full name" column will not import. If there is a space between first and last name, Text to Columns splits it into two.

Second, headers. Anything under "Unrecognized:" is left out. Rename "Account" to "Company", and rename the history column to "Notes". "Email", "Phone", "Tel", "Job title" and "Department" match as they are.

Third, file format. A workbook (.xlsx) cannot be selected. Use Save As and choose "CSV UTF-8 (Comma delimited)".

Fourth, order. Load companies, then contacts, then deals. A contact is linked to a company when its company name matches one that already exists. Deals link to companies by name and to contacts by email address. If the companies are not there yet, the records load unlinked. The name has to be the same apart from capitalization, so if "Acme Inc." and "Acme" are both in the list, settle on one first. Deal stages are matched by name, and a stage that does not match lands in the first stage of the pipeline.

Duplicates are handled too. A contact with an email address that already exists is skipped, and so is a company with the same name or domain. Deals, and contacts with no email, are not checked, so do not load the same file twice. On a prepaid plan, each contact import also uses Fuel.

If you use HubSpot or Salesforce, you do not need a CSV export. Go to Settings, "Integrations", "Another CRM (read-only)", enter an access token, and deals are pulled in. Tick "Also sync contacts" and contacts come too. Each sync brings in up to 500 of each, and companies are not included. It only reads, so nothing in the other system is changed.

## The first step

This week, copy only the customers you have contacted in the last three months into a new sheet. Make one companies file and one contacts file from it, and load them in that order.

Leave the rest. You are not deleting it. It stays in the spreadsheet, and when one of those accounts calls, you add that one. What you are buying is a Monday where the team opens the CRM and nothing else.

There is a demo workspace you can open with just an email address. Pick "B2B sales" and you land in a workspace with data, so you can open the Contacts and Companies lists and see where the import sits. [Try the demo](https://crm.consilegy.com/demos)
