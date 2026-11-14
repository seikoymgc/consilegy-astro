---
title: "A different Zoom display name keeps lesson records off the student profile"
slug: "zoom-display-name-keeps-records-off-the-student-profile"
lang: "en"
category: "setup"
pain: "A learner joins under a nickname, leaving imported Zoom records disconnected from their student profile."
feature: "Link an imported Zoom participant display name to an existing student"
screens: "More → Integrations → Link Zoom participants / Choose a student… / Link / student profile → Zoom records"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts (zoomLinking, zoomRecord) / src/school-app/components/MockShell.tsx (zoomBind) / src/app/api/school-app/zoom/link/route.ts / src/school-app/lib/zoom-ingest.ts (linkZoomIdentity) / src/school-app/lib/zoom.ts (participantKey) / src/school-app/lib/supabase.ts (unlinkedZoomGuests) / src/school-app/lib/pg-query-builder.ts / src/school-app/lib/zoom-carte.ts / src/school-app/lib/authz.ts"
date: "2026-11-15"
author: "Seiko Yamaguchi"
---
The lesson took place on Zoom and its records have been imported. Yet the session is missing from the student's profile. The participant list shows a nickname or device name rather than the name on the school roster.

The teaching record and the student record remain separate until someone resolves that identity. Revenue CRM's school edition lets staff link an imported Zoom participant to an existing student. This is for schools already importing Zoom data and seeing unlinked participants.

## Choose the student beside the imported display name

Open More → Integrations and scroll to Link Zoom participants. Each unlinked display name is shown with its participation count and most recent participation time.

![An unlinked sample Zoom name beside the student selector and Link button](/images/crm/media/screens/zoom-display-name-keeps-records-off-the-student-profile-1-en-2026-11.webp)
*This is a fictional participant in the demo. The screen was only viewed and captured. No student was selected, no identity was linked, and no sync was run.*

When you know who the person is, choose their existing student record in Choose a student… and click Link. This connects two records; it does not create another student with the Zoom nickname.

If the identity is unclear, ask the teacher or learner first. A recent date and a participation count are clues, not proof. Also check whether a shared device name belongs to several learners or family members before associating it with one person.

## Link saves immediately and applies to past participation

There is no confirmation dialog after Link. The association is saved immediately and applied to past participation under that display name. Later imports use the same association for that name.

Operations, Manager and Office roles can perform this operation. Being designated as a teacher alone does not grant access. The page shows a result and then reloads. Open the student's profile and check whether the relevant session appears under Zoom records.

A session with several linked students is not assigned as a single student's meeting. Start with a known one-to-one lesson. Linking a name does not distribute every group lesson across all of its students' profiles.

Associating a Zoom record with a student is also separate from generating a lesson entry in Lessons & history. That later processing includes classifying the content. The link result alone does not establish that a lesson entry has been created.

## A new display name needs another identity check

The association uses the Zoom display name. If the learner joins later under a different nickname, that name needs to be identified and linked too.

Differences in case and whitespace are normalised, but the system does not infer that a completely different name is the same person. Agreeing on a consistent Zoom name with learners reduces repeated checking.

This screen has no list for reviewing all existing associations and no button to undo a mistaken link. Confirm the person before saving. Linking an imported participant is separate from connecting Zoom for the first time or running a recording sync.

## Start with one known learner

Review one unlinked name with the teacher who taught that session. Choose a clearly identifiable participant from a one-to-one lesson, link the existing student, and check Zoom records on the profile.

Once records are associated with the learner, [the saved lesson chat](/en/crm/media/b2c/lesson-phrases-disappear-when-the-zoom-call-ends/) can be read in that student's lesson context rather than found in a separate list each time.

To see the screen, open the [demo](https://crm.consilegy.com/demos), choose Schools, and go to More → Integrations.
