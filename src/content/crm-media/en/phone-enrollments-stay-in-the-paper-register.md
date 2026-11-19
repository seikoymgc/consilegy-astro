---
title: "A student enrolls by phone, but only the paper register knows"
slug: "phone-enrollments-stay-in-the-paper-register"
lang: "en"
category: "input"
segment: "b2c"
edition: "school"
pain: "Phone and walk-in enrollments remain outside the shared student roster"
feature: "Individual new-student registration"
screens: "Students / + New student / Register a new student / Name / Plan / Status / Length / Start date / Goal / notes / + Register"
sources: "src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/student/route.ts / src/school-app/lib/authz.ts / src/school-app/lib/supabase.ts / src/school-app/lib/html-en.ts / src/app/school/page.tsx"
date: 2026-11-19
updated: 2026-11-19
author: "Seiko Yamaguchi"
---
A student enrolls over the phone. Reception writes down the name and start date, then tells the teacher. The next morning, another staff member searches the shared roster and finds nothing.

Online applications enter the system. Phone and walk-in enrollments stay in a notebook. The channel that brought the student in now determines who can find their record.

## Put an individual enrollment on the shared roster

Revenue CRM's school edition has a form for registering one student at a time. It gives reception a way to record a phone or in-person enrollment without waiting for a batch import.

The cost of a missing record reaches beyond data entry. A teacher starts without knowing the student's goal. Office staff ask reception whether enrollment is complete. Each handoff repeats a question the school has already answered.

Check for an existing profile first, especially if the student previously booked a trial. This form creates a new record. It does not update an existing student or automatically merge matching names.

## Check status before accepting the defaults

Registration requires the student **Create** permission. The default roles allowed are Operations, Manager and Office. A school can change the permission matrix.

For registration, first switch the interface to **JA** at the top. The English form currently submits translated choices as values, which can cause a trial booking to be saved with the wrong status. The steps below use Japanese labels; their meanings are given alongside them.

1. Open **生徒** (Students) from the sidebar or bottom navigation and check the existing roster.
2. Choose **＋ 新規生徒** (New student) and enter **氏名** (Name).
3. Review **ステータス** (Status). It starts at **体験予約** (trial booked). Select **受講中** (active) for a confirmed enrollment.
4. Check **プラン** (Plan), **期間** (Length) and **開始日** (Start date) against the agreement.
5. Enter **レッスン回数** (total number of lessons) if known, followed by the relevant goal and intake notes.
6. Review the form and click **＋ 登録する** (Register). After the page reloads, find the student in the roster and open their profile.

If registration reports an error, check the roster before submitting again. The student record may already exist.

Name is required. Other fields already contain choices: the plan starts at weekly and the length at three months. Entering just a name also accepts those defaults. Review them before registering.

## Course length and lesson count do different jobs

Length sets the basis for the planned graduation date. The lesson count supplies the denominator in the displayed progress count. Neither should be guessed from the other.

Length offers one through six months. For an active student with a start date, registration saves a graduation date calculated by adding the selected months. That calculation does not run for a trial booking.

Leaving the lesson count blank saves zero and omits the total-count denominator. Entering a total does not establish a complete attendance ledger. The completed count in “lesson X of Y” is the number of lesson records loaded into the screen, so lessons nobody logged are not counted.

The plan choices here are weekly and monthly. This is not an editor for adding arbitrary course names. Creating the student also does not book a lesson, create a bill or link the student's LINE account. If the person registering is an Office user designated as a teacher (LEADERS), they become the student's assigned teacher. Otherwise the student starts with no assigned teacher, so assign one in the teacher section of the profile.

## Start with one enrollment missing from the roster

Choose one student whose enrollment is still recorded only on paper. Check for an existing profile, then use the form if there is none. Compare the name, status, start date and length with the original agreement.

The practical check is simple: another staff member can find that student and read their goal without asking reception to repeat the conversation.

To explore the form, choose **Schools** in the [Revenue CRM demo](https://crm.consilegy.com/demos).
