---
title: "Keep customer emails without importing everyone’s calendar"
slug: "keep-email-import-running-without-importing-calendars"
lang: "en"
category: "operate"
pain: "A team keeps calendar import running because it still needs the connected mailbox."
feature: "Turn off workspace calendar import"
screens: "Settings → Integrations → Google / Outlook → Calendar import (whole workspace)"
segment: "b2b"
edition: "b2b"
b2b_categories: ["standard", "contractor", "services", "reseller"]
sources: "src/components/calendar-sync-switch.tsx / src/lib/calendar-sync-enabled.ts / src/app/api/org-settings/calendar-sync/route.ts / src/app/(dashboard)/settings/outlook/page.tsx / src/app/(dashboard)/settings/google/page.tsx / src/app/api/integrations/outlook/sync-calendar/route.ts / src/app/api/integrations/google/sync-calendar/route.ts / supabase/migrations/285_org_calendar_sync.sql / supabase/migrations/286_organizations_grant_calendar_sync.sql / src/lib/outlook-sync.ts / src/lib/google-sync.ts / src/lib/outlook.ts / src/lib/meetings/teams.ts / src/lib/meetings/gemini-notes.ts / src/app/(dashboard)/settings/outlook/outlook-view.tsx / vercel.json"
date: "2026-11-25"
author: "Seiko Yamaguchi"
---
You want customer correspondence in the system, but have not agreed to import everyone’s appointments. Disconnecting the account would also disrupt email, so the decision stays unresolved.

Revenue CRM separates calendar import from the email connection. A workspace-wide switch can stop future Google and Outlook calendar imports while email import and sending continue.

## Check the workspace scope first

Open Settings → Integrations → Google or Outlook. Calendar import (whole workspace) shows the current on or off state.

Only owners and admins can change it. This is not a preference for your own calendar alone. Check whether colleagues depend on imported appointments before changing the workspace setting.

Turning it off stops importing; it does not withdraw calendar permissions granted when an account was connected. If your policy is not to grant calendar access at all, this switch is not enough. Check before connecting.

The switch appears on both connection pages, but there is only one setting. Turning it off from Outlook also affects Google calendar imports in that workspace.

## Turn off calendars while keeping mail connected

Turn off the switch beside the heading and wait for Calendar import turned off. The heading ends in off, and the Calendar row shows Turned off by admin. This stops daily automatic calendar import and manual calendar Sync now operations.

Email import and sending remain connected. There is no need to disconnect the mailbox to stop importing appointments. Automatic lead creation from imported appointments also stops when those appointments are no longer imported. Meeting transcript imports from Teams or Google Meet use separate connections and are not covered by this switch.

When enabled, calendar import covers the past 30 days through 90 days ahead. An event with exactly one external guest, excluding recurring events, can create a lead when that person is not registered. Decide whether that behavior is appropriate as well as whether appointments should be shared.

## Previously imported records stay

Turning off import does not delete existing events. Do not assume it also removes contacts previously created from calendar entries.

If saving fails, do not treat the import as stopped. Read the message and reload to check the saved state. An environment still awaiting the database update may continue with the previous enabled behavior. If you are not an owner or admin, ask one. If an admin still cannot use the switch, contact the service operator.

## Start with the reason for each connection

Have an admin identify who has connected an account and which work needs calendar import. If the policy is email only, explain the workspace-wide effect before turning calendars off, then verify the saved state.

Open the [demo](https://crm.consilegy.com/demos?edition=demo&lang=en), choose **Startups & SMBs (standard)**, and inspect the integration settings. Leave shared demo settings unchanged.
