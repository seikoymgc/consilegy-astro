---
title: "The AI agent button covers the field you need"
slug: "agent-button-covers-the-field-you-need"
lang: "en"
category: "operate"
pain: "A floating launcher obstructs a table control."
feature: "Drag the AI agent launcher"
screens: "AI agent"
segment: "b2b"
edition: "b2b"
b2b_categories: ["standard", "contractor", "services", "reseller"]
sources: "src/components/copilot/copilot-launcher.tsx"
date: "2026-11-23"
author: "Seiko Yamaguchi"
---
You reach for a control at the edge of a table, but a floating button is in the way. Scrolling around it interrupts an otherwise simple edit.

Revenue CRM lets you move the AI agent launcher by dragging it. You can clear the field without starting a conversation.

## Drag the launcher away from the field

Press and hold the AI agent button (an icon-only circle on narrow screens), move it into an unused part of the screen, then release. A small movement can still count as a click, so move far enough to clear the control you need.

The launcher is hidden while its panel is open. Close the panel first if you need to reposition the button. Moving the launcher does not require sending a prompt.

Choose a spot away from both the current row and the next field you will edit. On a narrow window, check that the new position does not simply obstruct another control.

## The browser remembers the position

The position is saved in browser storage and restored when the same browser opens the screen again. It is not an organization-wide preference, and it is not guaranteed to follow you to another device or browser. Anyone else who signs in on the same browser will see the same saved position.

Clearing browser data can remove the saved position. Storage may also be unavailable in some environments; the implementation does not show a storage error. Reopen the screen to check whether the position was retained.

When the window size changes, the position is constrained to stay within the screen. That does not guarantee it will avoid every field. Check the placement again after narrowing the window.

## Open the assistant when you actually need it

A normal click opens the AI agent panel. Command+E on a Mac, or Ctrl+E, toggles it; Escape closes it.

Moving the launcher and sending a request are separate actions. If all you need is access to a field, you do not need to submit a message or change a customer record.

## Start with one obstructed control

View-only accounts do not show the launcher. Open a table you use often. Move the launcher away from the control it usually covers, then reopen the screen to check the saved position. When explaining this to colleagues, describe it as something each person adjusts in their browser.

Open the [demo](https://crm.consilegy.com/demos?edition=demo&lang=en), choose **Startups & SMBs (standard)**, and locate the AI agent launcher.
