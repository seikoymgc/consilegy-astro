---
title: "Before every pipeline meeting, someone exports the deals and pastes them into ChatGPT"
slug: "crm-data-pasted-into-chatgpt-by-hand"
lang: "en"
category: "setup"
pain: "To ask ChatGPT or Claude about the pipeline, people export or copy deal lists out of the CRM and paste them in. The numbers go stale the moment they are pasted, and the company has no record of which AI account received which customer data"
feature: "Connecting ChatGPT and Claude (connector URL https://crm.consilegy.com/api/mcp. An owner or admin picks the workspace and permission on a consent screen. The app can read contacts, companies and deals, and can only create contacts and deals. Listed and disconnected under Settings > API keys > Connected AI apps)"
screens: "Settings > Integrations & channels > API keys > Connected AI apps (app name, permission, last used, Disconnect); consent screen \"Connect (app name) to Revenue CRM?\" with Workspace, Permission (Read only / Read and write (create contacts and deals)), Cancel, Allow and connect"
sources: "src/app/(auth)/oauth/authorize/page.tsx / src/app/(auth)/oauth/authorize/consent-form.tsx / src/lib/oauth/server.ts / src/app/api/mcp/route.ts / src/lib/crm/use-cases.ts (CRM_MCP_TOOLS, callCrmMcpTool, listDeals) / src/app/(dashboard)/settings/api-keys/page.tsx / src/app/(dashboard)/settings/api-keys/api-keys-view.tsx / src/app/(dashboard)/settings/settings-index.tsx / supabase/migrations/263_oauth_mcp.sql / src/app/api/demo/seed/route.ts (crm ccdb7aa, #416. oauth_clients, oauth_authorization_codes and oauth_tokens confirmed in production on 2026-11-06)"
segment: "b2b"
edition: "b2b"
date: 2026-11-06
author: "Seiko Yamaguchi"
---
Friday, 5 p.m. A sales manager exports the open deals to CSV, pastes the file into ChatGPT, and types: "Summarize the biggest deals and flag anything that looks stuck."

I'm not going to tell anyone to stop using AI for this. It works. But the routine has two holes. The data is stale the moment it is pasted. And nobody at the company can say which AI account, owned by whom, now holds a copy of the pipeline.

## The real cost is freshness and a missing record of where the data went

Asking an AI is fine. Carrying the data to it by hand every week is the problem.

Say the export and paste take 30 minutes once a week. That is about two hours a month, which is the smaller cost. Close a deal on Monday morning and the AI is still reading Friday's file. Meanwhile, the pasted list sits in that person's chat history. When they leave, last year's pipeline leaves with them in a personal account, and there is no way to pull it back.

![The top row of the home screen: open pipeline, weighted forecast, closed this month and win rate](/images/crm/media/screens/business-cards-stay-in-the-drawer-1-2026-10.webp)
*An example of the numbers that get exported before a meeting. A connected AI app does not read this screen; it reads the deal records themselves. The screenshot is in Japanese.*

## In Revenue CRM, the AI app connects directly, and the company keeps the list of connections

You can connect ChatGPT or Claude to Revenue CRM. When someone asks a question, the app reads the contacts, companies and deals as they are at that moment. No pasting.

Only a workspace owner or admin can connect an app.

1. In the AI app, add a custom connector with the URL `https://crm.consilegy.com/api/mcp`. Until something is connected, the same URL is also shown in the Connected AI apps section under Settings > Integrations & channels > API keys (owners and admins only). Whether custom connectors are available depends on your AI app's plan and settings
2. After you sign in to Revenue CRM, a screen asks "Connect (app name) to Revenue CRM?"
3. Choose the Workspace, set Permission to "Read only" or "Read and write (create contacts and deals)", and click "Allow and connect"

Every connected app then appears under "Connected AI apps" on the API keys page, with its permission and the date it was last used. To cut it off, click "Disconnect". The company keeps one list of which AI apps are connected, with what permission, and can cut any of them off. Answers already given still sit in the chat history of the account that asked.

What the AI can do is still narrow. Better to know that up front.

- **It reads three things.** Contacts by name or email, companies by name, and deals sorted by amount, largest first (deal name, amount, probability, close date, stage, company). It does not read activities, notes, tasks or deal owners
- The deal list includes deals that are already won or lost. When you ask about open opportunities, tell the AI to group by stage, or it may count closed deals
- With "Read and write", it can create new contacts and deals. It cannot edit, delete or send anything
- **It sees the whole workspace.** The view scope set under Settings > Permissions (All, Team, Owned) does not apply. Anyone using the connected AI account can read every record, so connect it from an account used only by people who are allowed to see everything
- Unless the AI app asks for read only, "Read and write" is preselected on the consent screen. Switch it to "Read only" for the first connection
- What happens to data once it reaches the AI app is governed by that app's terms and your own AI policy. What Revenue CRM controls is the connection itself

## Your first step

This week, have an admin connect one app with "Read only", from an account used by someone who may see all records.

Then ask the person who usually does the export to try: "Show the five largest deals in each stage." If the answer matches the CSV they would have pasted, Monday's export can stop.

Open the [demo](https://crm.consilegy.com/demos) with just an email address, choose "B2B sales", and go to Settings > API keys to see the Connected AI apps section and the connector URL. The demo is shared, so please look without connecting an AI app.
