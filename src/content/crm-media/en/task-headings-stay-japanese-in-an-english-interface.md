---
title: "The interface is English, but the task headings are still Japanese"
slug: "task-headings-stay-japanese-in-an-english-interface"
lang: "en"
category: "operate"
segment: "b2b"
edition: "b2b"
pain: "International teammates need a colleague to explain Japanese task headings before they can act"
feature: "Display translation for task and activity headings"
screens: "EN and 繁中 language controls / Tasks / activity subjects / original text on hover"
sources: "src/components/localized-title.tsx / src/lib/title-translate.ts / src/app/api/ai/translate-titles/route.ts / src/lib/record-translation.ts / src/app/(dashboard)/tasks/tasks-view.tsx / src/components/activity-timeline.tsx / src/lib/ai-quota.ts / src/lib/ai-fuel.ts / src/app/api/org-settings/auto-translate/route.ts / src/app/(dashboard)/settings/ai-features/ai-features-view.tsx / supabase/migrations/275_org_auto_translate_records.sql"
date: 2026-11-17
updated: 2026-11-20
author: "Seiko Yamaguchi"
---
*Updated November 18, 2026: reflects manual translation by default and the workspace setting for automatic translation.*

An international teammate switches Revenue CRM to English. Navigation and buttons now make sense, but today's task headings are still in Japanese.

They can read the due date. They still need a colleague to explain what the task is about before deciding where to start.

## Reading the interface and reading the work are separate problems

Translating menus does not make Japanese task records readable. If a colleague has to interpret every heading, the language barrier has simply moved into the daily handoff.

Revenue CRM's B2B edition can display short Japanese headings in English or Traditional Chinese, matching the reader's interface language. This covers task names in the task list and subjects in a contact's activity timeline.

It changes the display, not the stored task name. Japanese-speaking colleagues keep the original record while another reader sees a translated heading.

## Open your task list in English

The current default is to translate a heading when you need it. Start with the language you use for work:

1. Select **EN** at the top of the screen, or **繁中** for Traditional Chinese.
2. Open **Tasks**. On a computer, hover over a Japanese heading and click **Translate** to translate that item. The original remains visible while the translation is retrieved.
3. On a computer, hover over a translated heading to see the original text in a tooltip.
4. Open the related deal or activity when you need the context behind the heading.

Activity subjects use the same approach. A translated heading helps you decide which record to open; it does not mean the whole body has been translated. Use the separate body-translation controls where available when you need to read the underlying notes.

With **JA** selected, the original heading is shown. This feature translates Japanese headings for English and Traditional Chinese readers. It is not a reverse translation of English headings into Japanese. English display also covers headings written entirely in kanji; Traditional Chinese display targets Japanese headings containing kana.

For automatic translation of list headings, an owner or admin can turn on the switch next to **Automatic translation of records: off** in **Settings → AI features**. This is a workspace-wide setting; reload the screen to apply it. With it enabled, eligible headings on the list are translated in batches.

## Expect some headings to stay in the original language

Not every string qualifies. Headings longer than 300 characters are excluded. Do not expect personal and company names to become English names, or treat a translated label as a verified explanation of a customer commitment.

Translating uncached headings uses the company's AI allowance. With automatic translation enabled, eligible items are grouped for processing. A saved translation of the same text into the same language can be reused within the company.

If a new translation cannot run because AI is disabled for the company, the allowance is exhausted, or processing fails, the original heading stays visible. Previously saved translations may still be displayed. An untranslated heading does not mean the task has disappeared.

Check the underlying record for consequential details such as amounts, dates and promises. The heading is a way into the work, not a replacement for that context.

## Start with one real task list

Open the list with a teammate who works in English. Check one heading they can now read and one that remains in the original language. Confirm that they know how to reach the full record and inspect the original.

The first improvement is practical: fewer questions about which item to open. You do not need to begin by rewriting every note in the account.

To find the language controls and task list, open the [Revenue CRM demo](https://crm.consilegy.com/demos) and choose the B2B edition.
