---
title: "A learner’s essay appears to end before the final paragraph"
slug: "long-homework-looks-cut-off-before-the-last-paragraph"
lang: "en"
category: "operate"
pain: "A shortened homework preview is mistaken for the complete submission."
feature: "Expand saved text in a homework submission"
screens: "Students → profile → Homework submissions → Read more"
segment: "b2c"
edition: "school"
sources: "src/school-app/lib/render.ts (clipText, inboxCards, submissions) / src/school-app/components/MockShell.tsx (data-text-more) / src/school-app/lib/i18n-data.ts / src/school-app/lib/html-en.ts"
date: "2026-11-24"
author: "Seiko Yamaguchi"
---
An essay in a learner’s profile seems to stop halfway through a thought. Before asking the learner to resend it, check whether you are reading a shortened preview.

Revenue CRM’s school edition places Read more after long text submissions. It expands the saved text in place, so you can check the final paragraph before asking for a resend.

## Expand the submission where you are reading it

Open the learner from Students and find Homework submissions in their profile. Check the submission date and text. A long entry ends with an ellipsis and Read more.

Profile previews shorten text longer than 200 characters. Incoming homework cards on Home and Tasks shorten it beyond 300 characters. The same submission can therefore look shorter in the profile than on a card without the saved text having changed.

Click Read more to reveal the full saved text. After you click Read more, the label switches to Japanese: 折りたたむ (collapse). Clicking it again shows the short view, and the label then reads 続きを読む (read more) until the page is reloaded.

## Expanding text does not mark it reviewed

Read more switches which text is visible. It does not edit the submission, mark it reviewed, or send a reply to the learner.

Read through the final paragraph before deciding what needs attention. Marking a submission reviewed is a separate action. If you select that by mistake, you can [undo the review from the profile](/en/crm/media/b2c/homework-marked-reviewed-before-it-was-checked/). Keep that decision separate from opening the text so you do not clear work you have not checked.

Expansion does not import the submission again. It reveals text already present on the page. Reloading returns to the shortened view; it is not a preference that keeps every essay expanded.

## Media submissions need their original source

This control expands saved text. The system does not store the contents of photo, audio, video, or file submissions. Open LINE Official Account Manager and select the learner’s chat there. The on-screen instructions for photo, video, and file submissions may still be in Japanese.

Photo and audio submissions do not have Read more. Short text does not need the control either. Check the submission format before deciding what is missing.

The profile’s homework section contains up to 20 recent submissions. Expanding a visible entry does not retrieve older submissions. Finding an old entry and reading the remainder of a visible essay are different tasks.

## Start with one long entry

Choose a text submission you need to read today. Check the learner and date, expand it if Read more is present, and read the final sentence before deciding whether review or a reply is needed.

Open the [demo](https://crm.consilegy.com/demos), choose Schools, and inspect Homework submissions in a learner profile. Use the demo to see how submissions are listed. Its initial sample text entries are short and do not include a long submission for testing this expansion control.
