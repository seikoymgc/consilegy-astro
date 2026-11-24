---
title: "A teacher invitation went to the wrong email address"
slug: "school-invitation-went-to-the-wrong-email-address"
lang: "en"
category: "operate"
pain: "Resending an invitation leaves the incorrect recipient’s invitation active."
feature: "Withdraw a pending invitation before inviting the correct address"
screens: "More → User management (Settings) → Invited / Pending row → Revoke"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts (users) / src/school-app/components/MockShell.tsx (bey-cancelinvite) / src/app/api/school-app/invite/cancel/route.ts / src/app/api/school-app/invite/route.ts / src/school-app/lib/invite-link.ts / src/school-app/lib/html-en.ts / src/school-app/lib/i18n-data.ts"
date: "2026-11-25"
author: "Seiko Yamaguchi"
---
After inviting a new teacher, you notice a typo in the email address. Sending a second invitation to the correct person does not withdraw the first one.

Revenue CRM’s school edition lets you revoke an invitation before the person has joined. There is no address-editing field for that invitation: revoke it, then invite the verified address. Resend does not correct the recipient.

## Match the email address and pending state

Open User management (Settings) from More, or Users in the desktop sidebar. Locate the incorrect email address and check that the row shows Invited and Pending.

Pending rows offer Issue URL, Resend, and Revoke. Resend and Issue URL both keep the same address. See [inviting a new teacher](/en/crm/media/b2c/new-teachers-share-the-owners-login/) for the other controls.

Compare the full address rather than choosing a similar name. If you cannot perform the action, ask the person who manages invitations.

## Read the recipient again in the confirmation

Click Revoke on that row. The confirmation appears in Japanese even in the English interface. Check the email address it contains; it explains that the sent invitation link and temporary password will no longer work.

On success, the page reloads and the invitation row is removed. If an error or connection failure appears, reload and check the state before treating the revocation as complete. Error messages also appear in Japanese. A partial failure is possible; reload before clicking again. If the row remains after reloading, try Revoke once more. If it still remains, contact the school operator. Treat the invitation as active until the row is gone.

This withdraws the invitation and membership for that school. It does not delete an account the person uses in another organization, and it does not recall the original email from their inbox.

## A joined member needs a different response

This action only revokes pending invitations. It cannot remove someone who has already joined; the server rejects that case too.

If the wrong recipient has joined, tell the school operator what happened rather than assuming a new invitation fixes it. Do not substitute another person’s invitation or share the intended teacher’s password.

Once the incorrect pending invitation has been withdrawn, invite the correct address and role verified with the teacher. Deliver the new URL only to that person. Invitation links are single use and expire three days after issue, so keep old and new links distinct.

## Check the old invitation before resending

When you spot an address error, check its participation state in Users. Revoke the pending invitation first, then create the correct one.

Open the [demo](https://crm.consilegy.com/demos), choose Schools, and inspect Users. If a sample pending invitation is present, leave its Revoke and Resend controls untouched.
