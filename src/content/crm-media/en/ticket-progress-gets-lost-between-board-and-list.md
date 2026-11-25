---
title: "Ticket progress and ownership take separate searches"
slug: "ticket-progress-gets-lost-between-board-and-list"
lang: "en"
category: "operate"
pain: "Reviewing ticket status and ownership requires opening records one by one."
feature: "Switch between a ticket board and list"
screens: "Tickets → Kanban / List"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/tickets/page.tsx / src/app/(dashboard)/tickets/tickets-view.tsx / src/components/status-kanban.tsx / src/app/api/tickets/[id]/route.ts / src/lib/i18n/translations.ts / src/components/app-sidebar.tsx"
date: "2026-11-24"
author: "Seiko Yamaguchi"
---
A support review establishes which requests still need attention, then stalls while someone checks who owns each one. Opening every record makes a simple handover harder to follow.

Revenue CRM provides Kanban and List views of the same tickets. Use the board for status and the list for ownership before copying the information into another tracker.

## Match the view to the question

Tickets opens in Kanban view. Cards show the subject, priority, and a contact name when one is linked. Column counts describe the tickets loaded on this screen.

Click List to see Subject, Status, Priority, Contact, Owner, and Created in rows. This is the useful view when the next question is who owns each ticket. A dash in Owner can mean no owner is set or the owner’s profile has no name. Check the ticket detail.

The subject links to the ticket detail. Stay in the list for a quick ownership check; open the ticket when you need the request’s contents before deciding what to do.

## Dragging a card changes its status

Moving a card to another column sends a status update. It is not simply rearranging a meeting display. Do not move live tickets to demonstrate a hypothetical change.

After a successful save, switching to List also shows the new status. Confirm the saved state rather than relying solely on the card’s movement.

A failed server response triggers a move back to the previous column without an error message. If connectivity is interrupted, reload and verify the state. Switching between Kanban and List by itself does not update a ticket’s status.

## Read the counts as a limited working set

The page loads up to 200 tickets, ordered by creation date with the newest first. Neither the board counts nor the list rows represent a complete historical total. Older tickets beyond the newest 200 do not appear, even if unresolved. Check the original correspondence or ask the owner about long-running requests rather than treating absence from this screen as proof of resolution.

The board cards do not show owners. Use List to check responsibility and the detail page to read the request. Tickets in the same status column can belong to different people.

## Start with one handover

Select a ticket you need to discuss. Check its status on the board, switch to List, and confirm the same subject’s owner and priority. Change the status only when the work has actually progressed.

Open the [demo](https://crm.consilegy.com/demos?edition=demo&lang=en), choose **Startups & SMBs (standard)**, and inspect Tickets. You can explore the view controls without dragging any cards.
