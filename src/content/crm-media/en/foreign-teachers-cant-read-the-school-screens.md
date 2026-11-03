---
title: "Your best teacher can't read the admin screens, so someone else types up every lesson"
slug: "foreign-teachers-cant-read-the-school-screens"
lang: "en"
category: "setup"
pain: "Teachers who don't read the language of the admin screens hand over lesson notes on paper or in chat, and someone in the office retypes them. Records arrive late and thin, and the teacher can't open their own students' profiles"
feature: "The JA / EN switch at the top right of the screen (it changes the menus, buttons and profile labels in that person's browser only)"
screens: "JA / EN at the top right. On the student profile: + Log lesson, 📅 Book next lesson, 💬 Send on LINE, 📄 Progress report. Homework inbox: Mark as reviewed. More: Calendar, Profile field names"
sources: "src/school-app/lib/lang.ts / src/school-app/lib/render.ts / src/school-app/lib/html-en.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/mock-body.ts / src/school-app/components/MockShell.tsx / src/school-app/lib/invite-email.ts / src/school-app/lib/line-templates.ts / src/app/school/page.tsx / src/app/api/school-app/student/detail/route.ts / src/app/api/school-app/ai-report/route.ts (crm 8076168; English display from bd9b8d3)"
segment: "b2c"
edition: "school"
date: 2026-11-04
author: "Seiko Yamaguchi"
---
It's 9 p.m. at a language school in Japan. After the last lesson, your English teacher leaves a handwritten note on the office desk and heads home. A great teacher. But the admin screens are in Japanese, so they never open them.

The next morning someone in the office deciphers the note and types it in. Nobody's doing anything wrong. But when the screens are Japanese only, keeping the record stops being part of the teacher's job.

## What you lose is office time and fresh records

The retyping hurts, but the record itself is the bigger loss. Every extra pair of hands makes it later and shorter.

Say two teachers run 40 lessons a week and each note takes three minutes to type up. That's two hours a week, about eight a month. Meanwhile the teachers can't open their own students' profiles, so they walk into class without knowing what the last teacher covered.

![The Calendar page in English, with EN selected at the top right and the menu and weekdays in English](/images/crm/media/screens/owner-cannot-see-how-full-next-month-is-1-en-2026-10.webp)
*Calendar with EN selected at the top right. Menus, headings and buttons all switch.*

## In Revenue CRM, one press of EN switches the screen

Press EN in the JA / EN switch at the top right, and the screen changes to English in that teacher's browser only. No school-wide setting changes, and anyone on their own computer stays in Japanese. A shared computer and browser switch together.

The page reloads when you press it, and the browser remembers the choice. A laptop and a phone each need it once.

Here's what the teacher gets:

- A **+ Log lesson** button on the student's profile, so they record the lesson themselves, straight after class
- 📅 Book next lesson on the same page
- Mark as reviewed on homework from their own assigned students, so they can clear that inbox themselves
- 🚨 Act now on Home, showing their assigned students, and Students, Tasks and Lessons in the navigation

The most important point comes first: it's the screen's own words that get translated. What people type generally stays as typed. Student names, lesson notes and intake answers appear in whatever language they were written in, and labels added to a note, such as its topic, are saved in Japanese.

So there's one thing to decide: **teachers write in the language they can write in.** Try to standardize on Japanese and the retyping comes straight back. Having the office read the English notes as they are will last far longer.

A few more things to know:

- 📄 Progress report drafts come out in Japanese even on the English screen, headings included. Have a Japanese reader check them before anything reaches a student
- The 💬 Send on LINE templates are Japanese and reach students in Japanese, and the confirmation box before sending is Japanese too. Don't leave the final check to someone who can't read it
- Nearly all confirmation and error pop-ups stay in Japanese, and so does the hint on the submit button when a field is missing
- To log lessons, a teacher needs an account and a place under 🎓 Teachers by lesson type. Lesson type and teacher are required, and a name not listed for that type is rejected
- Invitation emails are Japanese only. The account setup page has its own switch, but that choice doesn't carry over after login, and the screen stays in the school's language until EN is pressed. Have a Japanese-reading colleague sit with the teacher for the first login
- Names your school created aren't translated. Field names changed under Profile field names appear as you wrote them, and so do custom lesson types
- Translation works from a fixed dictionary, so some Japanese will remain
- There are two languages only: JA and EN

## Your first step

Ask one teacher to press EN before their next lesson. After class, they open that student's profile and write one lesson entry in English with the + Log lesson button. The paper notes stop that day.

The next morning, have the office open that profile and check they can read it. If they can, that teacher's notes never need retyping again.

Start the [demo](https://crm.consilegy.com/demos) with just an email address, choose Schools, and press EN at the top right to see the English screens.
