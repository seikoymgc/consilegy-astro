---
title: "Reception should register students, but can also change status and teacher assignments"
slug: "reception-can-change-student-status-and-teacher-assignments"
lang: "en"
category: "setup"
segment: "b2c"
edition: "school"
pain: "Reception needs to add students without also deciding status and teacher changes"
feature: "Staff role's Students Create and Edit permissions"
screens: "More / Permissions / Staff / Students / Create / Edit / Audit log"
sources: "src/lib/school/provision.ts / src/school-app/lib/demo-seed.ts / src/app/api/school-app/student/status/route.ts / src/app/api/school-app/student/coaches/route.ts / src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/school-app/lib/authz.ts / src/school-app/lib/html-en.ts / src/school-app/lib/i18n-data.ts / src/app/api/school-app/permissions/route.ts / src/app/api/school-app/student/route.ts / supabase/migrations/194_school_beyonders_copy.sql"
date: 2026-11-20
author: "Seiko Yamaguchi"
---
Reception needs to register a student who enrolled by phone. Deciding whether an existing student is paused, or changing their assigned teacher, may still belong to the school manager. Those are different responsibilities.

When a new school is created in Revenue CRM, the Staff role starts with permission to view, create and edit students. If reception should only handle registration, check Edit as well as Create.

## Separate registration from status and teacher changes

**Students → Create** permits new registrations. **Students → Edit** controls changes to a student's status and assigned teachers. Consider keeping Create enabled and disabling Edit when the role should handle registration without making those changes. Removing Edit also hides the per-student **Automatic homework reminders** switch on the student profile for that role.

Otherwise, the school may discover the mismatch only after someone changes a student's status. Saying “reception only handles registration” does not make the current permissions match that intention.

The setting applies to a role, not an individual. Changing Staff affects everyone with that role in the school, including teachers. Do not remove Edit solely for reception if other people sharing the role still need to change student status, teacher assignments or per-student reminders.

## Review Create and Edit under Staff and Students

Someone with the Operations, Manager or Office role can change these settings in **Permissions**. Staff cannot grant themselves permission through this screen.

1. Open **Permissions** from the desktop sidebar, or from **More**.
2. Find the **Staff** section and its **Students** row.
3. Review the permission states currently shown.
4. Keep **Create** selected if the role should register new students. If it is already selected, leave it alone.
5. Deselect **Edit** only if everyone sharing the role should stop changing student status, assigned teachers and the per-student reminder setting from the profile. If it is already off, no press is needed.
6. Reload the page in your browser, open **Permissions** and confirm that the intended settings remain selected.

Each press starts a save request. There is no final Save button for the form. Switching to another screen inside the app and returning does not fetch the saved settings again. A chip changing appearance alone is not proof of success; reload the browser page before checking.

After Edit is removed, the status chips still appear on the profile, but pressing them does not change the status. Let reception know.

## Check the current school, rather than relying on the default

New schools start with Staff permitted to create and edit students. An existing school may already have changed those settings, or may be missing permission rows because of how it was originally set up. Inspect the current matrix rather than inferring permission from the role's name.

Where a row is missing, the first change initializes its other actions too. Review both Create and Edit after changing it, so those defaults do not decide the team's responsibilities.

These controls do not hide particular students. The student roster is visible across roles. Student creation and editing are also separate from permission to view fee amounts.

The change is recorded in **Audit log**. For registration itself, follow the [individual registration guide](/en/crm/media/b2c/phone-enrollments-stay-in-the-paper-register/), including its instruction to use the Japanese interface for the form. The English registration form has a separate issue with submitted choice values.

## Start with the people sharing the role

List everyone with Staff and decide who should register students, change their status and assign teachers. This screen cannot give a different exception to just one person within that role.

Set the permissions after agreeing on the work everyone sharing the role should do. The useful check is what reception can actually change, rather than what their role is called.

To explore the settings, choose **Schools** in the [Revenue CRM demo](https://crm.consilegy.com/demos).
