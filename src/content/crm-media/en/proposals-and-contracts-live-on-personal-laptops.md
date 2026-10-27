---
title: "Proposals and contracts live on each rep's laptop, and nobody can find them at handover"
slug: "proposals-and-contracts-live-on-personal-laptops"
lang: "en"
category: "input"
pain: "Proposal, quote and contract PDFs exist only on the desktop of the rep who made them and in their sent mail. When that rep is out or leaves, nobody can answer \"which quote did we send last?\""
feature: "Attachments (the Files tab on company, contact and deal pages. Upload puts a file on that record, listed with its name, size and who uploaded it. Text inside PDFs and images is read so the AI agent can search it)"
screens: "Company, contact and deal pages, Files tab: Upload → list (file name, size, uploader) → download icon / delete icon (\"Delete this attachment?\"); AI agent (⌘E / Ctrl+E, button at the bottom right)"
sources: "src/components/attachments-panel.tsx / src/app/api/attachments/route.ts / src/app/api/attachments/[id]/route.ts / src/app/api/attachments/[id]/extract/route.ts / src/lib/extract.ts / src/lib/embeddings.ts / src/lib/agent/tools.ts / src/components/copilot/tool-result-card.tsx / src/app/(dashboard)/deals/[id]/page.tsx / src/app/(dashboard)/contacts/[id]/page.tsx / src/app/(dashboard)/companies/[id]/page.tsx / supabase/migrations/041_document_search.sql / supabase/migrations/105_active_org_rls_hardening.sql"
segment: "b2b"
edition: "b2b"
date: 2026-10-28
author: "Seiko Yamaguchi"
---
Friday afternoon, a customer calls. "About the quote you sent last month, can we go over the terms again?" The account owner started a week of leave this morning.

A teammate opens the deal. The amount is there, the stage is there. The quote itself is not. The PDF sits on the owner's desktop and in their sent folder. The only honest answer is "they'll call you back on Monday."

## What you lose is the record of what the company actually sent

A deal amount tells you what you hoped to win. The documents tell you what you promised. If those live on one person's laptop, so does the promise.

Validity dates, discounts, renewal clauses: the things you commit to in writing rarely fit into CRM fields. Say each handover means asking the previous owner to dig through their email for ten minutes per deal. Ten deals is 100 minutes, and that's the good case, when the previous owner still works there. The expensive case is quietly sending the same customer a quote on different terms than last time.

A shared drive with a naming rule helps less than people expect, because the folder isn't attached to the deal. The place people will actually look is the deal itself.

## In Revenue CRM, the documents sit on the deal

Company, contact and deal pages each have a Files tab. Anything you put there can be opened by anyone who can open that record.

Open the deal, go to Files and click Upload. You can pick several files at once. Each one is listed newest first with its name, size and the person who uploaded it, and the download icon opens it.

You can upload PDF, Word, Excel, PowerPoint, images (JPEG, PNG and others), plain text and CSV.

For PDFs, images and plain text (including CSV), the text inside is read after upload. Ask the AI agent (⌘E / Ctrl+E, or the button at the bottom right) something like "the quote with our payment terms," and it returns excerpts that look like a match. You don't need to remember the file name, only roughly what the document said.

Five things to know before you rely on it:

- Large files (a PDF of more than a few MB, for example) and formats it doesn't accept such as ZIP may simply not appear in the list. No error is shown. After uploading, check that the file is actually listed, and compress a PDF that didn't make it before trying again
- Word, Excel and PowerPoint files can be stored, but their contents aren't read, so the AI agent won't find them by content. If you want to search a document later, upload it as a PDF. Long documents may be read only partway, and search returns excerpts only, without a link to the file they came from
- A file shows up only on the record you put it on. A quote attached to a deal won't appear on the company or contact page. Agree on one place as a team, for example "quotes and contracts go on the deal"
- Any member of the workspace can click the delete icon. Deleted files don't go to the trash and can't be restored from the screen, and the deletion isn't written to the audit log
- The AI agent's document search returns excerpts from every document in the workspace, regardless of record visibility settings. For documents you'd rather keep to a few people even internally, decide before you upload them

If you also want a list of every attachment, with download links, as a CSV (owners and admins only), see [Your customer history lives only inside the CRM](/en/crm/media/b2b/no-one-keeps-a-copy-of-the-customer-data/).

## Your first step

This week, take your three largest open deals and upload the last quote you sent for each. Write the team rule after those three, not before.

When you send a revised version, decide on the spot whether to delete the old one. Uploading a file with the same name adds a second entry rather than replacing the first.

The next time someone is out, at least for those three deals, the answer to the customer becomes "one moment, let me pull that up."

Try the demo with just an email address. Choose B2B sales and open any deal under Deals to find the Files tab. The demo is shared, so other visitors can see anything you upload. Use it to see where things are, not to store real documents. [Try the demo](https://crm.consilegy.com/demos)
