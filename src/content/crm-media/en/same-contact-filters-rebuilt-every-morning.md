---
title: "Rebuilding the same contact filters every morning"
slug: "same-contact-filters-rebuilt-every-morning"
lang: "en"
category: "operate"
segment: "b2b"
edition: "b2b"
pain: "Recreating a morning contact view makes the review depend on which filters someone remembers to apply"
feature: "Saved views for contacts"
screens: "Contacts / All stages / Save current view / View name / All"
sources: "src/components/contacts-table.tsx / src/components/saved-views-bar.tsx / src/app/(dashboard)/contacts/page.tsx / src/app/api/saved-views/route.ts / src/app/api/saved-views/[id]/route.ts / supabase/migrations/105_active_org_rls_hardening.sql"
date: 2026-11-16
author: "Seiko Yamaguchi"
---
A sales rep starts the day in Contacts. Select SQL, group by owner, hide a few columns. The same setup as yesterday, assembled again before the first call.

On a busy morning, one of those steps gets skipped. The review still happens, but the scope changes because someone forgot a filter. A routine that looks consistent on the calendar is less consistent on the screen.

## Keep the review criteria, then reuse them

A saved view gives a repeated review a repeatable starting point. In Revenue CRM's B2B edition, you can name a contact view and return to its filters and display settings later.

This saves the way you look at contacts. It does not freeze today's matching people into a separate roster. When you apply the view again, its criteria run against the contacts currently loaded in the table. Changes to those records can change which rows match.

## Set up the table once

Start with one review you actually repeat. For example, if you check SQL contacts each morning:

1. Open **Contacts** and choose **SQL** in **All stages**.
2. Add any conditions through **Filter**, then adjust grouping, visible columns and sorting as needed.
3. Click **Save current view** above the table.
4. Enter a name such as “Morning SQL review” in **View name**, then click the checkmark beside it.

![The contact table filtered to SQL, with the View name field open](/images/crm/media/screens/same-contact-filters-rebuilt-every-morning-1-en-2026-11.webp)

*Authenticated demo screen. Only the filter and naming form were opened; no view was saved. The demo uses sample data.*

The saved configuration includes the search text, lifecycle stage, additional filter conditions, grouping, sort field and direction, and hidden columns. Checked contact rows are excluded. Do not assume that column widths or column order are part of a saved view.

Your named views appear beside **All**. After trying a different filter, click a saved name to restore its configuration. **All** clears filters and grouping and returns the table to its default settings.

## Know what you are saving

A view created through this control is personal. Treat it as your own review shortcut; this form does not distribute it to the whole team.

Changing the table after applying a view does not automatically overwrite that saved configuration. To keep a changed setup, save it under a new name. The × beside a saved name removes the view, separately from deleting contacts.

There is also a scope limit. The current Contacts page loads up to 300 visible, non-deleted contacts, newest by creation date first. Saved filters operate within those loaded rows. If an older contact is absent, an empty result does not prove that no contact anywhere in the account matches your criteria. A saved view is a useful daily starting point within that limit, not an exhaustive account-wide search.

## Start with tomorrow's first review

Save one combination you expect to use again tomorrow. Click **All**, then your saved name, and check that the intended criteria return.

Add more views after the first becomes useful. A short set of clearly named routines is easier to trust than a long row of experiments nobody can distinguish.

To see where the controls sit, open the [Revenue CRM demo](https://crm.consilegy.com/demos) and filter the Contacts table to reveal the save option.
