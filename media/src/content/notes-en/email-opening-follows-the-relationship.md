---
title: "Translated email templates in Japan fail at the first line"
description: "When HQ localises its sequences and nurture emails for Japan, the body is usually translated well. What breaks is the first three lines: salutation, greeting and self-introduction, which in Japanese business email state the relationship. Split templates by relationship stage, check the name fields, and switch over without breaking live sequences."
publishedAt: 2026-10-26
category: japan-gtm
principle: "Before translating outbound and nurture templates into Japanese, build the first three lines (salutation, greeting, self-introduction) separately for each relationship stage. In Japanese business email the opening is read as a statement of the relationship, not as a courtesy."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
draft: false
---

A common way to launch email in Japan: HQ marketing ops or RevOps takes the global outbound sequence and the nurture track, has them translated, and switches them on for the Japan list.

The body copy is often translated carefully. And yet, with one template for every recipient, a customer two years into a contract can receive "please excuse this sudden message", and a first-contact prospect can be addressed by their given name. In the cases I have seen, the translation was rarely the issue. **The first three lines told the reader the wrong thing about who the sender was to them.**

A few days ago I wrote on LinkedIn about the phrase most Japanese business emails open with: *osewa ni natte orimasu*, literally "thank you for always taking care of us." It is a strange sentence to a non-Japanese reader, and writing about it brought these sequences back to mind.

## In Japanese business email, the first three lines state the relationship

An English sales email typically opens with "Hi {FirstName}," and puts the sender's name in the signature.

A Japanese business email puts three things at the top, in this order:

1. **Salutation:** company name, department, family name, and the honorific *-sama*
2. **Greeting:** "thank you for your continued support" for an existing relationship, or "please excuse this sudden message" for a first contact
3. **Self-introduction:** "This is Yamaguchi from {YourCompany}"

These lines carry information. Before the body, the reader learns whether the email is really for them, whether they know the sender, and who the sender is.

Whether an email gets opened depends mostly on the subject line and the sender name. These three lines matter after that: whether the opened email gets read now or pushed to later.

The Japan Business Email Association's 2025 survey (April 2025, an online survey of 1,462 people in Japan who use email at work) put the average at 52.27 emails received per day. The survey did not ask how people triage, so this is my reading, not its finding: at fifty-plus a day, opened emails get sorted on their first lines.

## Line-by-line translation gets the relationship wrong in three places

Translate the English template top to bottom and three things tend to happen:

- **The salutation uses the given name.** "Hi {FirstName}" becomes the given name plus *-san*. From a vendor the reader has never met, that is the distance of a colleague, not a supplier.
- **There is one greeting for everyone.** A first-contact prospect and a long-standing customer get the same opening. A customer who receives "nice to meet you" reads it as a vendor that does not remember them.
- **The sender introduces themselves at the bottom.** In my experience, a Japanese email that does not say who is writing near the top tends to be read as a mass mailing from an unknown company, and is left for later.

People in Japan disagree on whether the "continued support" greeting is fine for a first contact; many use it with everyone. The point is not which side is right. **One template for every recipient means nobody ever makes that call**, and the sequence runs on anyway.

## Split templates by relationship stage before you translate

What changes is the unit of the template, not the wording.

**1. Define three relationship stages and assign them at the account level.** A new contact at an existing customer is still a lead on their own record, so judge by the company:

- Opportunity or customer: the account has an open or won opportunity.
- Prior touchpoint: the contact is in an event, webinar or campaign member list from the last 90 days. HubSpot's original source only holds the first touch, so it cannot do this job.
- Neither: first contact.

Use the fields and lists you already have. Do not add a required field, and do not move lifecycle stages backwards to make the split work.

**2. Write only the first three lines per stage.** The body can stay shared:

- First contact: "Please excuse this sudden message. My name is Yamaguchi, from {YourCompany}."
- Prior touchpoint: "Thank you for visiting us at [event] the other day. This is Yamaguchi from {YourCompany}." (Hard-code the event name in a per-event template.)
- Opportunity or customer: "Thank you for your continued support. This is Yamaguchi from {YourCompany}."

The Japanese wording for each is what your Japan reviewer signs off; the English here only shows what each line has to do.

Separate templates are easier to review than one template with conditional blocks, because a Japanese speaker can read each one end to end. HubSpot marketing emails can vary content by list membership or lifecycle stage; whether sales sequence templates can do the same depends on your plan and features, so verify it in your portal.

**3. Check the fields the salutation pulls from.** Once the salutation becomes "{Company} {LastName}-sama", field contents matter. Japanese web forms often collect the full name in a single box, which lands in one name field. Business-card scanning tools sometimes put the department into the company name. Pull the send list for:

- an empty last name or an empty company name
- a full-width or half-width space inside either name field
- an empty first name with a long last name

Have the CRM admin fix these in bulk rather than asking reps to edit records one by one. First check which integration writes to those fields (card scanning, forms, another system) and fix the mapping there too, or the next sync puts the bad values back.

Then set fallbacks. Because *-sama* is hard-coded in the template, the last-name fallback should be *Go-tantōsha* ("the person in charge"), not *Go-tantōsha-sama*, or you will send "-sama-sama". Hide the company line when the company is empty, or the salutation starts with a stray space. How fallbacks work differs between HubSpot tokens and Salesforce templates, so verify yours, and send a test to a contact with an empty last name and company before going live. Getting a name wrong costs more than not using one.

## Switch live sequences over from new enrolments

Splitting templates does nothing for the sequences, workflows and automations that still call the old one.

1. Inventory every sequence, workflow and automated send that uses the old template.
2. Agree a switch date with each owner, in sales or marketing.
3. Point new enrolments at the new templates; let contacts already mid-sequence finish on the old one.
4. Record the switch date.

To keep reporting comparable with other regions, keep the global sequence's steps and cadence and swap only the templates. Then compare reply and unsubscribe rates by stage against the same period before the switch. Template-level reports break at the switch date, so the comparison is before versus after; switching one list first makes it cleaner.

This also changes what you ask of the one Japanese speaker on the team. Instead of reading every send, they review the stage templates and the name-field extract at launch, and again when reply or unsubscribe rates move. Decide now who updates the Japanese opening lines when HQ changes the global template.

Two options I would not take. Having the Japan rep hand-write every email reads most naturally, but sends and replies stop showing up in the tool, and you lose the comparison with other regions. Running each send through machine translation is fast, but a mismatched relationship is not a translation-accuracy problem, so better translation does not fix it.

**Before translating outbound and nurture templates into Japanese, build the first three lines separately for each relationship stage. In Japanese business email the opening is read as a statement of the relationship, not as a courtesy.**

If you have a Japanese sequence live today, ask your Japan lead to read only the salutation and the first two lines twice: once as a first-contact prospect, once as a customer of three years. If both receive the same lines, that is where to start.

## Related reading

What to localise first is covered in [Localising the product pages first is why your Japan launch produced no inbound](/en/articles/translate-evidence-before-product/). That note is about the order of localisation; this one is about what breaks inside the translated emails.

Other notes on the same problem are collected under [Japan market entry](/en/category/japan-gtm/).
