# New alumni sign-ups still use the old monthly price

未公開の修正候補。原稿SHA256 `859749c6a273a6b00378daf32e6cbef1f7a77dce449c194824a703ec052d4b63`。

Your school revises the monthly price of an optional alumni programme. The course information is updated, but the next sign-up still appears with the previous amount.

Staff stop to check which figure is right. The published price and the value used for registration have become two separate sources of truth.

## Check the price used for registration

Updating an information sheet does not update a stored plan price. Before introducing the new rate, check the amount that new registrations will use.

Revenue CRM's School edition has a **Post-graduation plan price** section for the optional plans listed there. It changes the monthly price of those existing plans. It does not change all courses or every student's separately registered tuition fee.

The revised amount applies to subsequent sign-ups. Existing billing records keep their registered amounts.

## Change the named plan's monthly amount

You need both permission to view billing amounts and permission to edit billing. Operations and Manager normally have access; other roles need the relevant billing permissions. Being able to see an amount alone is not enough.

There is an input detail to watch: confirming an empty field is treated as zero yen. Enter a whole-yen amount without decimal points or minus signs. If you decide against changing the price, use Cancel instead of clearing the field and confirming.

1. Open **Billing** from the desktop sidebar or through **More** on a phone.
2. Find **Post-graduation plan price** near the bottom of the screen. Check the plan name and current monthly amount.
3. Click **✏️ Change amount** for that plan. A prompt opens with the current value.
4. Enter the new monthly amount as whole yen using ordinary half-width digits, then confirm the prompt. After the page reloads, check the displayed price.

Confirmation saves immediately. There is no second Save button and no field to schedule a future effective date. Do not save early if new sign-ups should still use the old price today. To inspect without changing anything, cancel the prompt.

Saving also removes a provisional-price marker if the plan has one. Verify the actual amount rather than relying on that marker disappearing.

## This does not reprice existing members or charge a payment method

Changing the plan price affects what a new sign-up reads from the plan. It does not apply a price increase to existing billing records. If current members need different treatment, decide and handle that separately.

This control does not initiate a charge. Registering someone for a post-graduation plan creates a pending-payment record in the system; it is separate from taking payment. Do not assume that changing the price updates a PayPal billing agreement or confirms an incoming payment.

The section also does not provide controls for creating a new plan or renaming one. Use it to change the monthly amount of a plan already listed there.

## Start with the next plan you will offer

Compare the amount in your alumni programme information with the price shown in the billing screen. If they differ, agree when the new rate should start applying to sign-ups before saving the change.

To find the screen first, open the [Revenue CRM demo](https://crm.consilegy.com/demos) and choose the School edition's billing screen.
