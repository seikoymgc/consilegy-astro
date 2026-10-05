---
title: "You notice the warning signs after the student has already quit"
slug: "signs-of-quitting-noticed-too-late"
lang: "en"
category: "operate"
pain: "The signs that a student is drifting away, homework that stops and messages that go unanswered, sit with the individual teacher, and the owner learns about them the day the cancellation arrives"
feature: "\"Needs action now\" on Home (missing homework, unanswered LINE) and \"Homework\" on the student page"
screens: "Home \"Needs action now\": \"has not submitted homework for N business days\", \"replied on LINE\", \"N submissions from (name) not reviewed yet\" / Student page \"Homework\": \"Last submitted:\", \"Overdue\", \"On track\", \"N business days since last submission · follow up\" / \"Students\" filters \"All\" \"Enrolled\" \"Trialing\" \"Graduating\" \"Paused\" \"Alumni\" / Student page \"Actions\": \"Status\", \"Mark withdrawn\""
segment: "b2c"
edition: "school"
sources: "src/app/school-v1/home/page.tsx / src/lib/school-homework.ts / src/app/school-v1/students/[id]/page.tsx / src/app/school-v1/students/page.tsx / src/components/school/student-actions.tsx / src/app/school-v1/actions.ts / src/lib/school/status-labels.ts / src/lib/school/homework-intake.ts / src/app/api/school/line/webhook/[orgId]/route.ts / src/app/school-v1/integrations/page.tsx / src/components/school/bottom-nav.tsx / src/components/school/kpi-card.tsx / src/components/school/student-status-chip.tsx / src/lib/school-i18n.tsx"
date: 2026-10-05
author: "Seiko Yamaguchi"
---
Late in the month, a message lands on the school's LINE account: "We'd like to stop at the end of this month." The owner asks the teacher, who says, "Come to think of it, there hasn't been any homework for about three weeks." Scroll back through the chat and there is a question from two weeks ago that nobody answered.

The signs were there. They were on one teacher's phone and in one teacher's head, not anywhere the owner would see them. By the time anyone looked, the decision was made.

## What you lose is not the tuition. It is the three weeks when you could have done something

Once the cancellation message arrives, there is very little left to try. What was lost is the stretch before it, when a short check-in might have been enough.

Say tuition is 10,000 yen a month and the student would have stayed another year. That is 120,000 yen. The heavier cost is that it ends without a reason. "Things got busy" tells you nothing, so the same thing happens with the next student.

The early signs are smaller than a missed lesson. A lesson happens once a week, but homework and messages move on a shorter cycle. Homework stops coming in. A question sits unanswered for days. By the time it shows up as absences, the student is often already halfway out.

So before you build a monthly churn report, make stalled students visible in the week they stall. A report records what already happened. It gives you nothing to act on.

## In Revenue CRM, a student whose homework stops for three business days appears under "Needs action now"

Home in the school edition has a list called "Needs action now". When an enrolled student has not submitted homework for three business days, a line appears there with the student's name: "has not submitted homework for 3 business days". Weekends are not counted (public holidays are). Nothing is flagged during a period you have registered as a school closure. A student who has never submitted is counted from their start date.

Unanswered LINE messages show up in the same list. If the latest message in a student's thread is from the student, the "replied on LINE" line stays. It clears when you reply from "LINE history" in Revenue CRM. Replies typed directly in the LINE app are not recorded, so send them from the CRM. The same line also appears when homework comes in. Homework that arrived and nobody has looked at appears as "N submissions from (name) not reviewed yet". Sending something in and hearing nothing back is its own reason to drift away.

The list shows the first six items. Unreviewed homework is listed first, so if the count next to the heading is higher than six, clear from the top and the hidden lines move up.

Tap a homework line and the student's page opens. The "Homework" card shows the "Last submitted:" date and either "Overdue" or "On track". A stalled student shows "N business days since last submission · follow up". Recent submissions are listed underneath, so you can see when the gaps started to widen.

There are conditions. Your school's LINE Official Account is connected, the student is linked to it, and the student has a start date. A submission is recorded when the student sends a photo or video on LINE, or presses the homework button in the LINE menu and then sends text. The photos and videos themselves are not stored.

For the whole picture, open "Students" from the bottom menu. You can filter by "All", "Enrolled", "Trialing", "Graduating", "Paused" and "Alumni". Opening "Paused" once a month and checking that every student there has been asked when they plan to come back is a small habit that helps you catch the quiet exits.

When a student does leave, go to "Actions" on the student page and change "Status" to "Withdrawn" (it is shown to people who have permission to edit students). A field for the reason appears. Write even one line before you press "Mark withdrawn".

## The first step

Tomorrow morning, open "Needs action now" on Home, pick the one student among the visible homework lines whose homework has been stalled the longest, and contact them that day. Not a reminder. "How have things been lately?" is enough.

Do not try to reach everyone. One a day is plenty. Noticing at three business days and learning at three weeks from a cancellation message leave you with very different options.

If you would rather see the screens first, the [demo](https://crm.consilegy.com/demos) opens with just an email address.
