---
title: "The student profile asks about English level, but you run a piano school"
slug: "intake-fields-written-for-an-english-school"
lang: "en"
category: "setup"
pain: "A piano school or a cram school opens the intake section of a student profile and finds \"English level\" and \"Trial conversation: strengths\". Teachers either leave the fields blank or squeeze piano experience into \"English level\", so what was learned in the trial lesson ends up in different places for each teacher"
feature: "Profile field names (More → 📝 Profile field names, or Profile field names in the desktop sidebar. Renames the six intake fields on the student profile. The new names are used on the profile, the new-student form, AI auto-fill, the trial booking form and the CSV export)"
screens: "Bottom navigation More → 📝 Profile field names (\"Rename the intake fields for your school\") / desktop sidebar Profile field names / six text boxes, each under the field's original name with the current custom name inside (a blank box keeps the original name) → Save / student profile 📝 Intake interview, Fill in from trial conversation / new student form / trial booking form / Export data → Students / Audit log entry"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/hearing-labels.ts / src/app/api/school-app/settings/hearing-labels/route.ts / src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/school-app/components/TrialForm.tsx / src/app/school/trial/page.tsx / src/app/api/school-app/hearing/extract/route.ts / src/school-app/lib/export.ts / src/school-app/lib/html-en.ts / src/school-app/lib/authz.ts / supabase/migrations/248_school_settings.sql"
date: 2026-10-28
author: "Seiko Yamaguchi"
---
A trial lesson at a piano school has just finished. The teacher opens the new student's profile, and the intake section reads: English level. Trial conversation: strengths. Trial conversation: areas to work on.

So where does "three years of lessons, can play a Clementi sonatina" go? One teacher types it into English level. Another puts it under Background. A third leaves everything blank.

## What you lose is a fixed place for what the trial lesson told you

When the field names don't match how your school talks, the same kind of information lands in a different field for every teacher, or nowhere at all.

Most schools ask roughly the same things in a trial. For piano: years of experience, pieces they can play, the next recital they're aiming for, how much they can practice at home. Say you run eight trials a month, what you hear in four of them never makes it into the profile, and those four students sign up. That's four new students a month whose first regular teacher asks the same questions again, and four sets of parents thinking "we already told you this." Not the first impression you want after someone signs up.

It isn't the teachers being careless. The labels just don't describe what they're supposed to write.

## In Revenue CRM, rename the six fields to your school's own words

The school edition lets you rename the six intake fields under Profile field names. The new names follow the student from the trial booking form all the way to the profile.

Tap More in the bottom navigation and open 📝 Profile field names (on a desktop, Profile field names in the sidebar). You'll see six text boxes. Above each is the field's original name, and inside is the name it currently has. Type a new name only where you want one and tap Save. A box left blank keeps the original name. Names can be up to 40 characters.

For a piano school, it could look like this:

- English level → Piano experience and pieces they can play
- Trial conversation: strengths → What went well in the trial lesson
- Trial conversation: areas to work on → What to work on, from the trial lesson
- Goal in 3 months (what they want to be able to do) → Piece for the next recital

After saving, the new names appear in the 📝 Intake interview section of each profile, in the form for adding a new student, and as column headings in the CSV export. On the trial booking form, the two questions that map to English level and Goal in 3 months change to your names. Fill in from trial conversation, which lets AI sort a pasted trial-lesson transcript or notes into the fields, also uses your names as its guide. Each change is written to the audit log, so you can see who changed the names and when (the log shows the latest 40 entries).

Five things to know:

- There are always six fields, in a fixed order. You can't add or remove any. Fields you don't need can simply stay empty
- Only the names change. Anything already entered stays where it is, so text written under English level will now show under your new name. There's no screen for editing those entries afterward, so settle the names before you start registering students
- Only the Operations, Manager and Office roles can open this screen (Staff can't), and a change applies to every profile in the school
- The Fill in from trial conversation button name stays the same, and so do the trial form's questions about how they found you and preferred days and times
- If the screen is switched to English, your custom names are shown exactly as you typed them, not translated

For the bigger picture of getting trial-lesson notes into the profile, see [What you learn in the trial lesson stays in the teacher's head](/en/crm/media/b2c/trial-lesson-notes-stay-in-the-teachers-head/).

## Your first step

Before you name anything, ask each teacher for the three things they always ask in a trial lesson. Whatever overlaps is your list of field names.

Then have one person, the owner or someone in the Office role, save them under Profile field names. If nobody hesitates over which field to use after the next trial, you're done.

Start the [demo](https://crm.consilegy.com/demos) with just an email address, choose Schools, and open More → Profile field names to see the six boxes. The demo is shared, so saving new names changes the profiles every other visitor sees, and the nightly demo reset doesn't undo it. Please just look.
