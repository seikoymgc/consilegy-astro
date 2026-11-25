---
title: "The marketing menu still follows someone else’s workflow"
slug: "the-marketing-menu-still-follows-someone-elses-workflow"
lang: "en"
category: "setup"
segment: "b2b"
edition: "b2b"
pain: "The default function-specific menu does not match how the team divides its work"
feature: "Workspace menu settings by job function"
screens: "Settings / Menu by role / Marketing / Deals / Save / Reset to default / View / All"
sources: "src/app/(dashboard)/settings/persona-nav/page.tsx / src/app/(dashboard)/settings/persona-nav/persona-nav-view.tsx / src/app/api/org-settings/persona-nav/route.ts / src/lib/personas.ts / src/components/app-sidebar.tsx / src/components/mobile-nav.tsx / src/lib/editions/index.ts / supabase/migrations/274_org_persona_nav.sql / supabase/migrations/277_organizations_grant_persona_nav.sql"
date: 2026-11-18
author: "Seiko Yamaguchi"
---
You ask a new marketing colleague to choose Marketing in the sidebar. The menu gets shorter, but it still includes screens that your company leaves entirely to sales.

“You can ignore Deals. Forms and Lists are over here.” Every new starter gets the same explanation because the standard job-function menu does not quite match your division of work.

## Make the starting menu match the team

A shared menu can remove some of that repeated explanation. Revenue CRM's B2B edition lets a workspace choose which sidebar items appear for Sales, Marketing, CS, Executive and Admin views.

Owners and admins can change the configuration. It applies to everyone in the workspace, so agree on a team's starting point rather than treating it as a personal preference.

## Choose items in Menu by role

The settings table has menu items as rows and job functions as columns. If your marketing team does not normally use Deals:

1. Open **Settings**, then **Menu by role**.
2. Clear **Deals** in the **Marketing** column. Keep the items that team uses, such as Forms and Lists.
3. Review the whole table, including the other function columns, for unintended edits.
4. Click **Save** and check for **Saved. The sidebar is updated**.
5. Choose **Marketing** under **View** in the sidebar and check the result.

Changing a checkbox alone does not save the configuration. Saving refreshes the display; ask colleagues to reload their screens when checking the new menu.

The table selects from existing menu items. It does not provide controls for renaming items, changing their order or adding your own links.

## A shorter menu does not change data permissions

This configuration changes navigation, not who is authorized to read customer records. Use the relevant permission settings when deciding access to information.

**All** removes the job-function filter. **Mine** combines the menus for the functions assigned to that person, so an item excluded from Marketing may still appear through another function they hold.

Home, AI agent, Dashboard, Inbox, Internal wiki and Settings remain outside this configurable selection. Edition-specific visibility and other display conditions still apply; checking an item does not make every screen available in every environment.

Also treat **Reset to default** as a workspace change. It immediately saves the standard configuration for all job functions. It is not an undo button for the checkbox you just changed.

## Start with the view you explain most often

Pick the team that needs the most guidance when someone joins. Agree with a person doing that work which screens belong in the everyday menu and which can be found through All when needed, then save the configuration.

The goal is a clear next place to click. Fewer items are useful only when they make that decision easier.

To locate the settings, open the [Revenue CRM demo](https://crm.consilegy.com/demos?edition=demo&lang=en), choose **Startups & SMBs (standard)**, and look for **Menu by role**.
