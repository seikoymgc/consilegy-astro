---
title: "The trial sign-up form and the student roster are not connected"
slug: "trial-form-not-connected-to-the-roster"
lang: "en"
category: "setup"
pain: "Trial lesson requests land in a form notification email and never reach the roster, so retyping and replying wait for whenever the teacher has a spare moment"
feature: "Trial application form (from sign-up to student record and task)"
screens: "\"More\" → \"Integrations\" \"Trial application form\" / Students \"Trialing\" / \"Tasks\" \"Open tasks\" / student page \"Actions\" \"Status\" / Home \"Trial → enrolled\""
segment: "b2c"
edition: "school"
sources: "src/app/school-v1/integrations/page.tsx / src/app/school-apply/[orgId]/page.tsx / src/app/school-apply/[orgId]/trial-apply-form.tsx / src/app/api/school/trial/[orgId]/route.ts / src/app/school-v1/students/page.tsx / src/app/school-v1/tasks/page.tsx / src/app/school-v1/home/page.tsx / src/components/school/student-actions.tsx / src/lib/school/status-labels.ts / src/components/school/bottom-nav.tsx"
date: 2026-10-03
author: "Seiko Yamaguchi"
---
The school's website has a trial lesson form, built with a free form tool. When someone fills it in, a notification lands in the school inbox. The teacher sees it between two lessons and thinks, "I'll answer tonight." That night, after tidying up, they open the roster spreadsheet, type in the name and contact details, and write a reply. In a busy week that happens two days later.

The request arrived. It is not on the roster. Whether anyone replied is something you find out by scrolling back through the inbox. Between the form and the roster sits one manual step, and it belongs to the busiest person in the building.

## The loss is not the retyping. It is the request that goes quiet because the reply was late

People who ask for a trial lesson are usually looking at other schools too. The school that answers first gets the date in the diary. The one that answers late drops off the list. Nobody writes to say so. The replies simply stop, so the school never learns it lost anything.

Say ten requests come in a month and two of them fade because the reply was slow. At a fee of $100 a month, a student who would have stayed a year is $1,200, so that is $2,400 of expected fees let go every month. Your numbers will differ. The shape will not.

You also lose the count. How many asked, how many came, how many enrolled. With notifications in one place and a spreadsheet in another, the only way to know is to add it up by hand at month end.

Typing faster does not fix this. What needs to change is that the form and the roster are two separate things.

## In the school edition of Revenue CRM, a request becomes a student and a task the moment it arrives

Each school gets its own trial application form, ready on day one. Open "More" in the bottom menu, then "Integrations", and under "Trial application form" there is a single URL. Put that link on your website, or wherever families message you (in Japan that is usually LINE). There is no form to build.

The page opens without a login. One caveat for schools outside Japan: the form the applicant sees is in Japanese at the moment. It asks for a name, an email address, a phone number, a preferred date and time (optional) and any requests (optional). Either email or phone is enough to submit. Requiring both loses the people who do not want to hand over a phone number.

When the applicant submits, two things happen at once.

First, the person is created as a student with the status "Trialing". Filter the Students list by "Trialing" and you see everyone currently at the trial stage.

Second, a task titled with the applicant's name (the prefix is in Japanese for now) is created, due that same day. It shows under "Open tasks" on the Tasks screen, so every unanswered request is on that list when you open Tasks. No notification email is sent, so pair this with opening Tasks first thing each morning.

The preferred date and time is kept on record, but agreeing the slot is still done by the school getting in touch.

When they decide to enroll, go to the student's page and change "Status" under "Actions" to "Enrolled". The field appears for people with permission to edit students. On Home, "Trial → enrolled" shows how many people started a trial in the last 90 days and the share of them who went on to enroll (a simple count until five people have started a trial). No month-end recount.

## The first step

This week, copy the URL from "Integrations" and point your website's trial lesson button at it. A link in your messaging menu or social bio works as well.

You do not have to delete the old form straight away. Switch one entry point, then watch the next request appear under Students and Tasks at the same moment. After that, the retyping is gone.

If you would rather see the screens first, the [demo](https://crm.consilegy.com/demos) opens with just an email address.
