---
title: "What happened in each lesson is never handed over, so a new teacher starts from zero"
slug: "lesson-notes-vanish-when-the-teacher-changes"
lang: "en"
category: "input"
pain: "Lesson content lives in each teacher's notebook and memory, so every time a student changes teachers the new one begins by asking the student where they left off"
feature: "Lesson log (recorded from the student's record and kept in the history on that same record)"
screens: "Student record: ＋ レッスン記録 (+ Log lesson) / レッスン記録 (Log a lesson): 生徒名 (Student), 日付 (Date), 種別 (Type), 担当 (Teacher), トピック（複数可） (Topics), 今日の出来 (How it went), 宿題を出した (Gave homework), メモ（任意） (Note, optional), 記録する (Submit), ✓ 記録しました / Student record: 📖 レッスン・対応履歴 (Lessons & history) / Bottom nav レッスン (Lessons) → レッスン履歴 (Lesson History): 🎓 種別ごとの担当, ＋ 種別を追加, 担当を追加, 追加する, 📖 履歴 / Menu > 権限管理 (Permissions): \"Lessons\" row, 作成 (create)"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/components/MockShell.tsx / src/app/api/school-app/lesson/route.ts / src/school-app/lib/lesson-type.ts / src/app/api/school-app/lesson-types/route.ts / src/app/api/school-app/student/detail/route.ts / src/school-app/lib/authz.ts / src/school-app/lib/supabase.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/demo-seed.ts / supabase/migrations/194_school_beyonders_copy.sql"
date: 2026-10-08
author: "Seiko Yamaguchi"
---
A teacher who has been with the school for years is leaving at the end of term. She has 14 students. On handover day she opens her own notebook and talks the new teacher through them one by one. The new teacher takes notes, but an hour is not enough for 14 people.

At the first lesson of the new term, the new teacher asks the student, "So, where did you get to last time?" The student thinks for a moment and tries to answer. The parent in the waiting area hears all of it.

## The loss is not the handover hour. It is the months the student has already put in

Starting over after a teacher change is not about the new teacher's skill. It happens because what was taught belongs to the teacher, not to the school.

Put a number on it. Say lessons are weekly and it takes the new teacher two of them to work out where a student really is. That is two lessons out of four in the month, half of what the family paid for, spent on finding out. Across 14 students it is 28 lessons.

Then there is how it feels on the other side. The moment a student thinks "I have to explain all this again", some trust in the school is gone.

What I recommend is not better lesson reports. It is everyone leaving a note in the same place after every lesson. One line every week helps the next teacher more than a polished three-paragraph report once a month.

## In Revenue CRM for schools, you log from the student's record and it stays on that record

Where you write the log and where the next person reads it are the same screen. Open the student and tap ＋ レッスン記録 (+ Log lesson).

Some labels switch to English and others stay in Japanese, so I give the Japanese with a gloss. The レッスン記録 (Log a lesson) screen opens with the student's name and today's date filled in. Choose 種別 (Type) and 担当 (Teacher) fills in from it (if a type has two teachers, pick one). Tap your choices under トピック（複数可） (Topics (multi)), 今日の出来 (How it went) and 宿題を出した (Gave homework), add a line in メモ（任意） (Note (optional)), and tap 記録する (Submit). When the button reads ✓ 記録しました, it is saved.

The entry then appears on that student's record under 📖 レッスン・対応履歴 (Lessons & history), with its type and date. Everything you tapped is stored as one run, for example "トピック: 旅行・とても良い・はい", followed by your note. How it went and homework sit in that same run after the word トピック (topics), so tell whoever will read it. If you log with the screen in English, the choices are saved in English. For the whole school, open レッスン (Lessons) in the bottom navigation: the 📖 履歴 list on the レッスン履歴 (Lesson History) screen shows every entry with the student's and teacher's names. Only the start of the note appears there, so the student's record is the place to read.

Five things to know before you rely on it.

First, lesson types have to exist. With none registered, the log screen shows a warning and will not save. On the Lessons screen, find 🎓 種別ごとの担当 (teachers per lesson type), tap ＋ 種別を追加, enter a type and a teacher, and tap 追加する. A Manager can always do this. Other roles can only if 編集 (Edit) is on in their "Lessons" row under 権限管理 (Permissions).

Second, two answers are preselected. 今日の出来 opens on とても良い ("Great") and 宿題を出した opens on はい ("Yes"). If that is not what happened, change them. Otherwise that is what gets saved.

Third, the topic choices are fixed at five: 日常会話 (Daily), フリートーク (Free talk), 旅行 (Travel), ビジネス (Business) and 発音 (Pronunciation). They were written with a language school in mind. If you teach music, maths or dance, skip them and put the content in the note.

Fourth, the date. It is set automatically to the day you log and cannot be changed. The date is taken in UTC, so the day changes at 9:00 a.m. Japan time. Log before that and the entry is stored under the previous day, even though the form shows today. Logging right after the lesson ends is the safe habit.

Fifth, there is no edit. A saved entry cannot be rewritten or deleted from the screen. If you get one wrong, log it again correctly and say in the note that it is a correction.

Every role can log a lesson, and everyone can read everyone's entries. If you want to limit who can log, 権限管理 (Permissions) in the menu lets you turn off 作成 (create) on the "Lessons" row for a role. After changing it, check on that person's screen that logging still works. I wrote about how those permissions work in [You want teachers to see student records, but not what each family pays](/en/crm/media/b2c/teachers-see-fee-amounts-too/).

## The first step

This week, ask every teacher for one thing: "From your next lesson on, when it ends, open the student, tap ＋ レッスン記録 and write one line." Two items are enough: what we did today, and what comes next.

Do not go back and type in old notebooks. Once entries build up from today, the next handover can start from reading the record instead of from one teacher's memory.

If you would rather see the screen first, the [demo](https://crm.consilegy.com/demos) opens with just an email address. Choose "Schools" and open a student marked 受講中 (active). You will find 📖 レッスン・対応履歴 already filled with entries.
