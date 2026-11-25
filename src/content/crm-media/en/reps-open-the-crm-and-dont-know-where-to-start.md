---
title: "Reps open the CRM in the morning and don't know where to start"
slug: "reps-open-the-crm-and-dont-know-where-to-start"
lang: "en"
category: "operate"
pain: "The CRM is full of tasks, but nothing tells a rep which ones are today's work. They start with whatever email is on top, and overdue promises slide to the back"
feature: "Do now on Home (your own open tasks that are overdue, due today or undated, ranked by due date, then priority, then deal amount; one click marks a task done)"
screens: "Sidebar Home: Do now, View all, Nd overdue, Due today, High, Mark as done, N more, Nothing to do right now / Sidebar Tasks: Add a new task..., Priority: High/Medium/Low, Add, To do, In progress, Done, Mark as not done / Automations: Deal stall alert"
segment: "b2b"
edition: "b2b"
b2b_categories: ["standard", "contractor", "services", "reseller"]
sources: "src/app/(dashboard)/page.tsx / src/lib/home/today-actions.ts / src/components/home/today-actions-panel.tsx / src/components/home/home-workspace.tsx / src/app/(dashboard)/tasks/tasks-view.tsx / src/app/api/tasks/route.ts / src/app/api/tasks/[id]/route.ts / src/app/(dashboard)/tasks/page.tsx / src/components/app-sidebar.tsx / src/lib/deals/last-touch.ts / src/lib/revops/deals.ts / src/lib/revops/util.ts / src/lib/revops/catalog.ts / src/lib/editions/index.ts / src/lib/workflow-engine.ts / src/lib/agent/tools.ts / src/app/api/chat-imports/[id]/confirm/route.ts / src/app/api/demo/seed/route.ts / src/lib/demo.ts / src/lib/region/server.ts / src/app/(dashboard)/settings/settings-index.tsx / supabase/migrations/255_sales_playbooks.sql / src/components/deal-next-action.tsx / src/app/(dashboard)/deals/[id]/page.tsx"
date: 2026-10-19
updated: 2026-11-20
author: "Seiko Yamaguchi"
---
It's 9 a.m. on Monday and a rep opens the CRM. The Tasks board has about thirty cards sitting in To do, some created by last week's automations, some typed in by hand. Which of them belong to today is anyone's guess. So she opens her inbox and starts replying to whoever wrote yesterday. The "resend the proposal" task that was due Friday stays untouched for another day.

## What you lose is the morning spent re-deciding the order, and the promises that are already late

A task list with no order gets worked in the order things catch your eye. That is the loss.

Put a number on it. If five reps each spend fifteen minutes every morning deciding what to tackle first, that is 75 minutes a day, roughly six hours a week across the team.

The bigger cost is what gets pushed back. An email asking for a reply is loud. A customer quietly waiting on a proposal you promised is not. Work in the order things catch your eye, and the overdue commitments end up last.

Deciding what comes first should not be a judgment call every morning. It should be a rule you set once.

## In Revenue CRM, Do now on Home lists your tasks in the order to do them

Open Home in the sidebar and the Do now panel shows your own open tasks. Only three kinds appear: overdue, due today, and no due date. Anything due tomorrow or later stays off the list.

The order follows a fixed rule:

- First by due date: overdue, then due today, then undated
- Within each group, higher priority first
- If priority ties, the task linked to the larger deal goes first, and if that ties too, the older task

Overdue tasks get a red "Nd overdue" label, tasks due today get "Due today", and high-priority tasks get a "High" badge. Click the row text to open the linked deal, or the contact if there is no deal, or the Tasks page if there is neither. Click the circle on the left (Mark as done) and the task is completed and disappears. The exception is a deal's primary action, set under Next action & due date on the deal page. Home cannot complete it: the row simply comes back, with no message. Complete it on the deal page with Complete & set next. The panel shows up to eight rows; the rest sit behind "N more", which opens the Tasks page. "Today" follows the time zone set under Settings → Country, tax & time zone (Japan time by default). If your team works in another time zone, set it there so the overdue and due-today labels switch at your local midnight.

Tasks get onto the list in three main ways. One is the box at the top of the Tasks page: type into "Add a new task...", pick a priority and a due date, and press Add. The task is assigned to whoever created it. The second is Next action & due date on each deal page. Every open deal has one of these primary actions; a deal that has none gets an automatic high-priority task with a due date, assigned to the deal owner, asking you to confirm the next action. These usually fill the top of Do now. The third is automations. Deal stall alert, which is on by default in the B2B edition, creates a task for the owner of a stalled deal. Most automation tasks have no due date, so they land in the undated group.

Four things to know:

- You only see tasks assigned to you. Managers do not see their team's tasks here either
- Tasks with no assignee show up on nobody's Do now. That covers tasks from the Create task step in workflows, tasks created by the AI agent, tasks from the Import conversation step (chats and meeting notes), and automation tasks on deals that have no owner
- There is no undo on Home. If you click by mistake, go to Tasks, find the card in the Done column, and click its circle (Mark as not done). Primary actions and download follow-up tasks with a recorded outcome cannot be reopened once done
- If you mark a stalled-deal task done without actually acting on the deal, and the deal still does not move, the same task comes back after 14 days (the default setting)

## The first step

Starting today, pick a due date every time you add a task yourself, before you press Add. Without one, it sinks to the bottom group. The Tasks page does not let you add a due date to a task after it is created, so the moment you add it is the moment that counts. (A deal's primary action is the exception: you can change its date under Next action & due date on the deal page.)

Tomorrow morning, open Home before your inbox and clear the top three items in Do now. Keep it up for a week, then count how many "overdue" labels are left on Friday.

In the demo, which only needs an email address, choose **Startups & SMBs (standard)** and you will see Do now on the same Home screen. If the panel says "Nothing to do right now", add a task on the Tasks page with today's date and go back to Home. The demo is shared, so please leave existing tasks open for the next visitor. [Try the demo](https://crm.consilegy.com/demos?edition=demo&lang=en)
