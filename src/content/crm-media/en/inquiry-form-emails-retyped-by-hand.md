---
title: "Someone is still retyping website inquiry emails into the customer list"
slug: "inquiry-form-emails-retyped-by-hand"
lang: "en"
category: "input"
pain: "Website inquiries arrive as notification emails and whoever notices copies them into the customer list, so nothing is owned until it is copied, and typos and duplicate records creep in"
feature: "Forms (a submission becomes a contact the moment it is sent, the same email is never created twice, and the company is matched by email domain)"
screens: "Sidebar \"Marketing\" → \"Forms\" / \"New form\", \"Form name\", \"Save\" / form tabs \"Analytics\", \"Submissions\", \"Settings\" / \"Publish and use\": \"Live\", \"Stop\", \"Public URL\", \"Embed on your site\" / \"On submission\": \"Update answers on re-submission\", \"Draft a first email to whoever submits\" / \"Add field\": \"Label\", \"Key (alphanumeric)\" / Sidebar \"Drafts waiting to send\""
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/forms/forms-view.tsx / src/app/(dashboard)/forms/new/page.tsx / src/app/(dashboard)/forms/[id]/page.tsx / src/app/(dashboard)/forms/[id]/form-detail.tsx / src/app/(dashboard)/forms/[id]/form-tabs.tsx / src/app/(dashboard)/forms/[id]/form-analytics.tsx / src/components/form-share.tsx / src/app/f/[id]/page.tsx / src/app/api/forms/[id]/submit/route.ts / src/lib/contact-intake.ts / src/lib/outbound/queue.ts / src/components/app-sidebar.tsx / src/lib/personas.ts / src/lib/i18n/translations.ts / supabase/migrations/003_marketing_sales_cs.sql / supabase/migrations/161_form_first_touch_draft.sql"
date: 2026-10-10
author: "Seiko Yamaguchi"
---
Tuesday morning. Three "New inquiry received" emails are sitting in the shared inbox. Whoever notices opens them one at a time and copies the company, the name and the email address into the customer list. On a busy day nobody opens them at all.

On Friday the prospect calls. "I sent a message through your site on Monday. Did it reach anyone?"

## The cost is not the retyping. It is the days before the first reply

When a person has to copy an inquiry before it counts, it becomes a record on whatever day somebody has a spare moment. That is the real loss.

The typing itself is small. Say you get twenty inquiries a month and each takes five minutes to copy. That is a hundred minutes.

Three other things weigh more. Until it is copied, the inquiry is on nobody's list for today. A mistyped address means the reply never arrives. And when the same person writes in a second time, they get entered as a second person.

My recommendation is to stop running inquiries out of notification emails. Point the form at the customer record, not at an inbox. That is the one thing to change.

## In Revenue CRM, a form submission is a contact the moment it is sent

Take the inquiry through a Revenue CRM form and the person is saved as a contact when they press submit. There is no copying step.

Forms live under "Marketing" in the sidebar. If you do not see "Forms", use the role switch at the top of the sidebar and pick "Marketing". Press "New form", give it a "Form name" and "Save". On the form's "Settings" tab, enter a "Label", a "Key (alphanumeric)" and a field type, then press "Add field".

Three rules for the fields.

- Include one field whose type is Email, and tick "Required". The contact is built from that address. A submission with no email is stored, but no contact is created
- Use last_name and first_name as the keys for the name, phone for the phone number and job_title for the title. Those four go into the contact's standard fields. Anything else is kept on the same contact as a custom field. If you leave the key blank it is generated from the label, so give a short, plain key to any field you plan to filter on later
- The company is matched by email domain. If a company with that domain exists, the contact is attached to it. If not, a new company is created with a placeholder name taken from the domain, which you should fix afterwards. Free mail domains such as gmail.com are not attached to any company

Publishing is on the same "Settings" tab, under "Publish and use". The "Public URL" can be pasted straight into an email or a post. "Embed on your site" gives you a snippet of HTML for your own page. A new form is "Live" as soon as you create it, so press "Stop" if it is not ready.

Here is what happens when a submission comes in.

- A first-time submitter becomes a contact with the lifecycle stage "Lead"
- If a contact with that email already exists, no second contact is created. Standard fields such as name and phone are only filled in where they are empty. Every other answer is replaced by the new one, because "Update answers on re-submission" under "On submission" is on from the start
- The form's "Submissions" tab lists who submitted, newest first, with the time, name, email and whether they were new or existing
- Tick "Draft a first email to whoever submits" under "On submission" and a first reply is drafted at that moment and queued under "Drafts waiting to send" in the sidebar. Nothing goes out until you approve it, and before sending you record the decision by pressing "Allow sales contact" on the draft

Two things to know before you rely on it.

A contact that comes in through a form has no owner when it is created. Decide who opens "Submissions" every morning before you switch the form over.

If you collect email consent on the form, make that field a checkbox and put "consent" in its key. A first-time submitter who ticks it is recorded as having opted in. For someone who is already a contact, ticking it on the form does not change the consent fields on their record. How that affects what you may send is covered in [bulk email versus one-to-one email](/en/crm/media/b2b/bulk-and-one-to-one-email-get-mixed-up/).

## The first step

This week, write down the fields on your current inquiry form and cut them to four: last name, first name, email, and the message. Build one form with those, open the "Public URL" yourself and send one test.

If a row appears under "Submissions" and you can find yourself in Contacts, the inquiry now lands in the record. Swapping the form on your website can wait until after that.

There is a demo workspace you can open with just an email address. Pick "B2B sales" and open "Forms" in the sidebar to see how these screens are laid out. [Try the demo](https://crm.consilegy.com/demos)
