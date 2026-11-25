---
title: "Every new contact still gets copied into another app by hand"
slug: "new-contacts-get-copied-into-another-app-by-hand"
lang: "en"
category: "setup"
segment: "b2b"
edition: "b2b"
pain: "Operations copies newly registered contacts into a separate shared app"
feature: "Zapier New Contact with a read-only API key"
screens: "Settings / Integrations & channels / API keys / Read only / Issue / API Key / New Contact"
sources: "integrations/zapier/authentication.js / integrations/zapier/triggers/contact.js / integrations/zapier/lib/http.js / src/app/(dashboard)/settings/api-keys/api-keys-view.tsx / src/app/api/v1/api-keys/route.ts / src/app/api/v1/contacts/route.ts / src/lib/crm/use-cases.ts / https://zapier.com/apps/revenue-crm/integrations"
date: 2026-11-19
updated: 2026-11-20
author: "Seiko Yamaguchi"
---
A sales rep adds a contact to Revenue CRM. Someone in operations then opens another app and pastes the same name and email into a shared list.

The information is already recorded. The handoff still depends on someone remembering to copy it. On a busy day, a contact can exist in the sales system while remaining invisible to the next team.

## Use the new record as the start of the handoff

Revenue CRM's Zapier integration offers a **New Contact** trigger. It supplies newly created contact records to a workflow that can pass selected fields to another app.

Zapier connects steps across applications. Revenue CRM is available in its [public app directory](https://zapier.com/apps/revenue-crm/integrations), where the integration currently carries a Beta label.

Keep the first workflow one-way: a new Revenue CRM contact starts a step in the receiving app. This is separate from importing an old database or keeping edits synchronized in both directions.

## Connect with a read-only key first

A workflow that only reads Revenue CRM contacts does not need permission to create records there. An owner or admin can issue a key under **Settings → Integrations & channels → API keys**.

An API key is a credential for the organization, not a view restricted to one rep's assigned customers. Decide which destination may receive the data and which fields it needs before making the connection.

1. Give the key a name that identifies its destination and purpose.
2. Choose **Read only**, review its expiry, and click **Issue**.
3. Copy the full key from the confirmation display. It will not be shown again.
4. When connecting Revenue CRM in Zapier, enter it in **API Key**.
5. Choose **New Contact** as the trigger and map only the required fields into the receiving app's action.

The receiving application needs its own connection and action configuration. Entering the key alone does not create a destination or start copying data. Keep the credential out of shared spreadsheets and ordinary handover notes.

## Allow for polling, and keep bulk migration separate

New Contact checks for records periodically. It is not an instant notification every time a rep clicks Save. Review Zapier's polling conditions before promising a delivery time to the next team.

Each poll retrieves up to 100 contacts, newest first. Do not treat this trigger as a guaranteed way to transfer every historical record or handle an unrestricted burst of registrations. It also does not report edits to an existing contact.

Actions such as **Create Contact** work in the opposite direction: they write into Revenue CRM and require a **Read and write** key. That permission is unnecessary for the outbound workflow described here.

## Start with one destination

Pick one place where someone currently pastes new contact details. Agree on the minimum fields, then verify the receiving step with approved test data before using the workflow in daily work.

The first useful change is small: remove one repeated copy after registration, and make the handoff visible to the person who owns the next step.

To explore the settings, choose **Startups & SMBs (standard)** in the [Revenue CRM demo](https://crm.consilegy.com/demos?edition=demo&lang=en). The demo is shared; view the screens without issuing an API key.
