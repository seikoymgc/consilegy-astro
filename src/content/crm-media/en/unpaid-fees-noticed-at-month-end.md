---
title: "You find out about unpaid fees at the end of the month"
slug: "unpaid-fees-noticed-at-month-end"
lang: "en"
category: "operate"
pain: "An expired card or an empty account means the fee did not go through, you notice while reconciling at month end, and the reminder goes out a month late"
feature: "Billing screen (failed payments and a LINE nudge)"
screens: "Billing \"Paying\" \"Payment failed\" \"Unpaid / failed\" \"N days past the renewal date\" \"Nudge on LINE\""
segment: "b2c"
edition: "school"
sources: "app/school-v1/billing/page.tsx / components/school/dunning-button.tsx / app/school-v1/home/page.tsx"
date: 2026-09-30
author: "Seiko Yamaguchi"
---
End of the month. The owner of a school sits down with the bank statement and the student list. Forty students, three payments missing. One expired card, one account with insufficient funds, one student who was supposed to have left last month but is still on the list. Each of the three gets a message early next month, and it has to be "last month's and this month's together". Awkward for everyone.

Tuition is the same amount on the same day every month. Without something that notices when it does not go through, the next time anyone notices is the same day next month.

## The loss is not the unpaid amount. It is the month of delay

One missed payment is one month of tuition. What costs more is what a month of delay causes.

First, the request becomes two months at once. To a parent, one month is an oversight. Two months is a household budget conversation, and that conversation sometimes ends with "we should probably stop".

Second, the owner's month end disappears into reconciliation. Forty students, two hours matching statement to list, every month. Two hours that could have gone to following up trial students or calling the ones who look like they are about to quit.

## In Revenue CRM, the student moves to the top the day the payment fails

The school edition's "Billing" screen shows two counts at the top: "Paying" and "Payment failed". Below that is the "Unpaid / failed" list, where each student with a failed charge appears with "N days past the renewal date". You do not wait for month end. They are on this list the day after the charge fails.

Each row has a "Nudge on LINE" button. Press it and a message written for the expired-card case goes to the student on LINE, and the sent message stays in that student's LINE history. One nudge per subscription: once sent, the button turns into "Nudged" and cannot be pressed again. No more "did I already send that last week?"

Students who have not connected LINE yet show as "LINE not connected", so those are the only ones you call or email.

The "Needs attention" list on Home also shows, one line each, what needs handling today. You do not have to open Billing every morning to know.

## The first step

This month, before you sit down with the statement, open Billing and look at "Unpaid / failed" first. If the people listed there match the people you would have found in the statement, stop doing the reconciliation from next month. Spend the two hours you get back on the "Trial to enrolled" number on Home, and on contacting the trial students who have not enrolled.
