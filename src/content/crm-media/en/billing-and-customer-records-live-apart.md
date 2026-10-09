---
title: "Billing lives in one tool, customers in another, and sales has no idea who has paid"
slug: "billing-and-customer-records-live-apart"
lang: "en"
category: "operate"
pain: "Invoices live in the billing tool and customers live in the CRM, so sales has to ask finance whether a customer has paid or whether the payment failed"
feature: "Stripe integration (send invoices and payment links from a contact; payments, failed payments and cancellations come back as records and tasks)"
screens: "Sidebar Settings → Integrations → \"Sync data\" → Stripe / \"Webhook setup\", \"Secret key\", \"Webhook signing secret\", \"Default currency\", \"Invoice registration number\", \"Connect & save\" / Contact screen: \"Payment link\", \"Send invoice\" / Sidebar Activities: \"Content\" and \"Contact\" columns / Sidebar Tasks"
segment: "b2b"
edition: "b2b"
sources: "src/app/(dashboard)/settings/stripe/stripe-view.tsx / src/app/(dashboard)/settings/integrations/page.tsx / src/app/(dashboard)/settings/page.tsx / src/app/(dashboard)/contacts/[id]/contact-detail-actions.tsx / src/app/(dashboard)/contacts/[id]/page.tsx / src/app/api/integrations/stripe/route.ts / src/app/api/integrations/stripe/invoice/route.ts / src/app/api/integrations/stripe/payment-link/route.ts / src/app/api/webhooks/stripe/[orgId]/route.ts / src/lib/revops/util.ts / src/components/activity-timeline.tsx / src/app/(dashboard)/activities/page.tsx / src/app/(dashboard)/tasks/tasks-view.tsx / src/lib/i18n/translations.ts / src/lib/demo.ts / src/app/demos/demos-client.tsx"
date: 2026-10-09
author: "Seiko Yamaguchi"
---
First week of the month. A rep calls an existing customer to pitch an add-on. Halfway through, the customer says: "Before we get to that, I got a notice that last month's card payment did not go through. Is that a problem?" The rep has no answer. Payment results live inside the billing tool, and sales does not have a login.

It runs the other way too. Finance is looking at a failed payment and has no idea the rep is proposing an upgrade to the same company this week.

## The cost is not the back-and-forth. It is that nobody owns the money conversation

When billing and customer records sit in different places, there is no first person to notice a failed payment. That is the real loss.

The checking itself is small. Say you bill thirty customers a month, and three of them trigger a round of "Did it come in?" between sales and finance, twenty minutes each. That is an hour a month.

What weighs more is the failed card that lands on nobody's list for today. Finance assumes the rep will mention it. The rep assumes finance is on it. You find out at month-end close.

I do not recommend rebuilding billing inside the CRM. Keep it in Stripe. What is missing is that "paid" and "failed" never reach the customer record.

## In Revenue CRM, payments and failed payments come back to the contact as a note and a task

Connect Stripe and a payment is saved as a note on the contact, while a failed payment becomes a task on that contact. You can also start the billing from the contact screen, with "Send invoice" and "Payment link".

To connect, go to Settings in the sidebar, open Integrations, and pick Stripe under "Sync data". Do it in this order. First copy the URL in the "Webhook setup" box and add it as a webhook endpoint in Stripe. Then paste the "Secret key" and the "Webhook signing secret" together and press "Connect & save". Any time you save this screen again, enter both. With only one of them the save is either rejected or the signing secret is cleared. Only a member whose role is owner or admin can save. "Default currency" starts as jpy, so set it to the currency you bill in.

If you invoice customers in Japan, fill in "Invoice registration number" (T followed by thirteen digits) and it is printed in the invoice footer.

To bill, open a contact. On the same row as the lifecycle stage you will find these two.

- "Send invoice". Enter an amount and it creates a Stripe invoice, finalizes it, and emails it to that contact's address. The due date is fourteen days out. Owner or admin only
- "Payment link". Enter an amount and a one-time payment page opens in a new tab. Send that URL to the customer

One thing an English-speaking team should know before the first send: the line item on that invoice reads 請求, and the product name on the payment page reads お支払い. Those are fixed for now.

After that, this is what comes back.

- When an invoice or a payment link is paid, a note is saved. The note text is Japanese with the amount, for example "Stripe入金: JPY 50,000" for an invoice and "Stripe決済完了: JPY 10,000" for a link. Open Activities in the sidebar and the "Content" and "Contact" columns tell you who paid how much. The contact's own Activity tab gains a dated row, but without the amount text
- When a payment attempt fails, such as a declined card, a high-priority task is created on that contact. Its title is "[支払い失敗] 請求のフォロー", a follow-up on a failed payment. A cancelled subscription creates "[解約] Stripeサブスク解約のフォロー". The task has no owner and no due date, so decide in advance who watches for them

Now the limits.

Sending an invoice does not leave a record by itself. Add a note after you send one. An invoice that simply goes past its due date does not create a task either. The task appears when a payment attempt fails.

The "Recommended events" line on the screen lists customer.subscription.* and invoice.payment_failed. If you also want the payment notes, select invoice.paid and checkout.session.completed in Stripe as well.

Matching is by email. If the Stripe customer's email is not the same as the contact's, no note and no task are saved. "Send invoice" creates a new Stripe customer for any contact that is not linked yet, so if the company already exists in Stripe, line up the email first.

## The first step

This week, pick one company you bill by card or on a monthly plan. Check that the person who receives their invoices exists as a contact, and that the email matches the one in Stripe. If it does not, fix it.

You do not need to line up every account. With one company aligned, the next failed payment there creates a task. That is one customer where the rep can say "about last month" before the customer does.

There is a demo workspace you can open with just an email address. Pick "B2B sales", open a contact, and you can see where "Payment link" and "Send invoice" sit. Actually sending one requires connecting your own Stripe account. [Try the demo](https://crm.consilegy.com/demos)
