---
title: "What you learn in the trial lesson stays in the teacher's head"
slug: "trial-lesson-notes-stay-in-the-teachers-head"
lang: "en"
category: "input"
pain: "Why the student wants to learn and where they are today is never written down, so the next teacher asks the same questions again"
feature: "The 初回ヒアリング (first interview) section of the student record: filled from the trial form, at registration, or from pasted notes"
screens: "Student record 📝 初回ヒアリング, 🎥 テスト会話から自動入力, ✦ AIで抽出してカルテに反映 / Students: ＋ 新規生徒, 体験予約フォーム（公開URL）"
segment: "b2c"
edition: "school"
sources: "school-app/lib/render.ts / school-app/components/MockShell.tsx / school-app/components/TrialForm.tsx / app/api/school-app/hearing/extract/route.ts / app/api/school-app/trial/route.ts / app/api/school-app/student/route.ts / school-app/lib/authz.ts"
date: 2026-09-30
updated: 2026-10-12
author: "Seiko Yamaguchi"
---
The first ten minutes of a trial lesson are the richest conversation you will have with a student. "Why did you decide to start?" "What have you done before?" "Where do you want to be, and by when?" People are surprisingly honest with a teacher they have just met.

Those ten minutes go into the head of the teacher who ran the trial. Even schools with a paper intake sheet end up with a name, a phone number and an empty "goal" box. The student enrolls, a different teacher takes over, and the first lesson starts with the same questions. The student thinks "I already said this at the trial" and does not say so.

## The loss is not the missing notes. It is asking twice

When nothing from the trial is kept, the first lesson after enrolment starts from zero. The teacher does not know the goal or the level, so the first few lessons are spent feeling things out. The student gets the most tentative lessons at the moment they expect the most.

## In Revenue CRM, what you heard at the trial has a fixed place on the student record

In the school edition, each student record has a section headed 📝 初回ヒアリング (first interview). It has six fields: how they found you, basic information, English level, what went well in the test conversation, what needs work, and the goal for three months from now. An empty field reads 未入力 (not entered). These labels are shown in Japanese at the time of writing, including when the display language is English.

There are three ways to fill it by hand.

The first is the trial form. Anyone who applies through the link under 体験予約フォーム（公開URL） on the Students screen arrives with their own answers already in this section: how they found you, their level, their goal.

The second is typing it in at registration. The ＋ 新規生徒 (new student) screen has the same six fields.

The third is pasting after the trial. Open 🎥 テスト会話から自動入力 on the student record, paste a transcript of the conversation or your own notes, and press ✦ AIで抽出してカルテに反映. The text is sorted into the six fields and the screen shows ✓ カルテに反映しました.

Every member of the school can open a student record. If the teacher who ran the trial and the teacher who takes over are different people, both read the same section before the first lesson.

## What to know

✦ AIで抽出してカルテに反映 writes to the record as soon as you press it. There is no review screen before saving. Once it is done, open the record and read the six fields.

Any field the pasted text has something for replaces what was there, including the goal the student wrote on the form and the email address the form stores under basic information. Note the contact details before you paste, and put anything you want to keep into the text.

After registration there is no screen for correcting a single field by hand. To fix one, paste a note with the right content and run it again.

The field names are written for English conversation schools and cannot be changed. "English level" and "test conversation" have to be read loosely for other kinds of lessons.

There is no dedicated field for why someone did not enroll.

## The first step

After your next trial, paste three lines of what you remember, the same day. It does not need to be a clean transcript. When the student enrolls, tell the teacher taking over to read 初回ヒアリング on the record before the first lesson. That is the whole routine.

The [demo](https://crm.consilegy.com/demos) opens with just an email address. Pick "Schools" to look around the school edition.
