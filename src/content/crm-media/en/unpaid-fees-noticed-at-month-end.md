---
title: "You find out about unpaid fees at the end of the month"
slug: "unpaid-fees-noticed-at-month-end"
lang: "en"
category: "operate"
pain: "Fees collected by bank transfer or cash have not come in, you only notice while reconciling the bank statement against the roster at month end, and the reminder goes out a month late"
feature: "Billing screen (registering a monthly fee, unpaid rows sorted to the top, confirming a payment, alerts once the due date passes)"
screens: "\"Subscriptions & Billing\", ＋ 月謝を登録, 未入金 ・ 期日, 入金確認, 入金済, 停止, and the 未入金 badge / 請求を開く on Home"
segment: "b2c"
edition: "school"
sources: "school-app/lib/render.ts / school-app/lib/monthly-fee.ts / school-app/lib/monthly-fee-rollover.ts / school-app/lib/dunning.ts / app/api/school-app/billing/fee/route.ts / app/api/school-app/automation/run/route.ts"
date: 2026-09-30
updated: 2026-10-12
author: "Seiko Yamaguchi"
---
End of the month. The owner of a school sits down with the bank statement and the student list. Forty students, three payments missing. One forgot the transfer, one said "I'll bring cash to the next lesson" and never did, one was supposed to have left last month but is still on the list. Each of the three gets a message early next month, and it has to be "last month's and this month's together". Awkward for everyone.

Tuition is the same amount on the same day every month. Without something that notices when it does not arrive, the next time anyone notices is the month-end reconciliation.

## The loss is not the unpaid amount. It is the month of delay

One unpaid fee is one month of tuition. What costs more is what a month of delay does.

First, the request becomes two months at once. To a parent, one month is an oversight. Two months is a conversation about the household budget, and this is where some families bring up leaving.

Second, the owner's month end fills up with reconciliation: every student's payment, checked line by line against the roster, every month.

## In Revenue CRM, unpaid fees rise to the top by due date

Open "Subscriptions & Billing" from the menu of the school edition. Below the list there is a section headed ＋ 月謝を登録 (register a monthly fee). Pick the student, enter the monthly amount and the first due date, and press 月謝を登録する. The student now appears in the billing list as 未入金 ・ 期日10/27 (unpaid, due 10/27). By default, only admins can register a fee and only admins see the amounts. These labels are shown in Japanese at the time of writing, including when the display language is English.

When you have seen the money arrive, press 入金確認 (confirm payment) on that row. It changes to 入金済 (paid) and the next due date is set one month ahead. Seven days before that date, the once-a-day automatic job turns the row back to 未入金. You do not register it again each month.

The list is sorted in the order you need to act. Unpaid rows past their due date get a ● and move to the top, and paid rows sink to the bottom. You read the first few rows, not all forty.

Once a due date passes, the next day's automatic job puts the student on Home with a 未入金 (unpaid) badge, and 請求を開く takes you to this screen. If a LINE Official Account is connected and the student is linked to it, the student also gets one automatic notice on LINE. It is not sent twice for the same due date.

## What to know

The bank statement is still where payments are seen. Revenue CRM does not read your bank account, so a person presses 入金確認. What changes is what you compare the statement against: a few 未入金 rows, not the whole roster.

If you confirm late and the following month's due date is already close, pressing 入金確認 does not mark the row paid. It stays as the next month's unpaid fee, so a month nobody paid for does not quietly disappear from the screen.

For a student who pauses or leaves, press 停止 (stop) on the row. If you forget, no LINE notice goes to a student who is not attending, but the unpaid row stays.

## The first step

Take three students whose fee has not come in this month and add them with ＋ 月謝を登録. When you see the payment in the bank, press 入金確認. Next month, watch those three come back as 未入金 a week before the due date on their own. Then register the rest.

The [demo](https://crm.consilegy.com/demos) opens with just an email address. Pick "Schools" to look around the school edition.
