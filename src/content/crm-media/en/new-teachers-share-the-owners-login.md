---
title: "Every new teacher gets the owner's login"
slug: "new-teachers-share-the-owners-login"
lang: "en"
category: "setup"
pain: "New teachers are handed the owner's email and password and everyone works under one login, so nobody can tell who wrote a record and every fee amount is visible to the whole staff"
feature: "User management (invite each person by email and role; they choose their own name and password; while an invite is pending you can issue a new URL, resend it or cancel it)"
screens: "Bottom nav \"More\" → \"User management (Settings)\" (on a computer: ユーザー in the left menu) / role select \"Member\" (一般), \"Admin dept\" (管理部) / \"+ Issue invite link\" / pending row: \"Invited\", \"Pending\", 🔗 URLを発行, ✉️ 再送信, 🗑 取り消し / ☐ LEADERS / first setup: \"Name\", \"Password\", \"Confirm password\", \"Start\" / 監査ログ (audit log): メンバー招待, 招待URL発行, 招待メール再送信, 招待取り消し"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts / src/school-app/lib/mock-body.ts / src/school-app/components/MockShell.tsx / src/school-app/lib/authz.ts / src/school-app/lib/supabase.ts / src/school-app/lib/i18n-data.ts / src/school-app/lib/invite-link.ts / src/school-app/lib/invite-email.ts / src/app/api/school-app/invite/route.ts / src/app/api/school-app/invite/link/route.ts / src/app/api/school-app/invite/resend/route.ts / src/app/api/school-app/invite/cancel/route.ts / src/app/api/school-app/users/coach/route.ts / src/app/school/invite/[token]/route.ts / src/app/school/invite/setup/InviteSetupClient.tsx / src/school-app/lib/demo-seed.ts"
date: 2026-10-10
author: "Seiko Yamaguchi"
---
First Monday of the new term. Two teachers are starting. The owner writes their own email and password on a sticky note and hands it over. "Just use this for now." From that day, three people work under one login.

At the end of the month the owner notices that a student's record has been changed. There is no way to tell who changed it. As far as the system knows, all three of them are the owner.

## The cost is not the hassle. It is that nothing records who did what

Share a login and every record has the same author. That is the real loss.

The hassle you can count. Say three teachers come and go in a year. That is three times a year you change the password and tell everyone who is left. Skip it, and someone who no longer works for you can still get in.

What you cannot count weighs more. With one login you cannot show fee amounts to one person and hide them from another. You cannot put a teacher's name on a student as the person responsible.

My advice is one login per person, even in a school with two teachers. Permissions and assignments only work once the system knows who is who.

## In Revenue CRM for schools, you invite each person with an email address and a role

Invite someone from "User management" with their email and a role, and they choose their own name and password on the way in. The owner never has to invent a password and pass it along.

On a phone, open "More" in the bottom nav and tap "User management (Settings)". On a computer it is ユーザー (Users) in the left menu. Much of this screen stays in Japanese when the app is set to English, so the labels below are given as they appear.

Three steps.

1. Under the member list, choose the role: "Member" (一般) or "Admin dept" (管理部). It starts on "Member"
2. Press "+ Issue invite link" and type the person's email address
3. An invitation email goes out, and the same invite URL is shown on your screen. If the email does not arrive, hand the URL over yourself

The invitation email, which is written in Japanese, offers two ways in. One is a link that works once and expires three days after it is issued. The other is a temporary password with no expiry, which stops working once the person has set their own. Either way, the first screen opens in Japanese. Tap EN at the top right and it asks for "Name", "Password" (eight characters or more) and "Confirm password", and then "Start".

How the roles work.

- A "Member" can work with students, lessons and homework. "Admin dept" can also invite people and manage integrations. By default only a "Manager" sees amounts, and a Manager cannot be created by invitation
- Invitations can be sent by Admin dept and Manager
- Being a teacher is not a role. Once the person has joined, someone in Admin dept or a Manager ticks ☐ LEADERS on their row, and they can be assigned to students. Leave it off for office staff who do not teach

Someone who has not joined yet shows as "Invited" with a "Pending" label and three buttons.

- 🔗 URLを発行 issues a fresh URL without sending an email. It also works once and expires in three days
- ✉️ 再送信 sends the invitation email again. The temporary password is replaced, and the one in the earlier email stops working, though the earlier link still works until it expires
- 🗑 取り消し cancels the invitation. Use it when you typed the wrong address. The link and the temporary password you sent stop working

Each of these is written to the audit log (監査ログ), as メンバー招待 for an invitation, 招待URL発行, 招待メール再送信 and 招待取り消し.

One limit to know. Only a pending invitation can be cancelled. This screen has no button for removing a member who has already joined, so check the address and the role before you press.

## The first step

This week, list everyone who signs in with the shared login and invite just one of them as a "Member". When that person has signed in with their own password and their name shows in the list, move on to the next.

Change the shared password last, once everyone has their own login. Change it first and the people you have not invited yet are locked out.

If you would like to see the screen first, open the [demo](https://crm.consilegy.com/demos) with just an email address and go to "User management". One invitation is pending there, so you can see the three buttons in place.
