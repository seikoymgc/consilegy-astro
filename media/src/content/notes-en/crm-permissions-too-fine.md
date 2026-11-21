---
title: "CRM access between Japan and headquarters: set the boundary"
description: "Separate requests to hide records from requests to protect specific fields. Check the legal, contractual and operational reasons for each restriction before applying it."
publishedAt: 2026-08-30
updatedAt: 2026-11-21
category: crm
principle: "Separate requests to hide records from requests to protect specific fields. Check the legal, contractual and operational reasons for each restriction before applying it."
canonUrl: https://consilegy.com/en/services/crm-revops-implementation/
canonLabel: CRM / RevOps Implementation
draft: false
---

This article addresses a cross-team design decision: what Japan’s operating team and overseas headquarters each need to access in a shared customer management system. Start with the information that needs protection and the work each side must complete. A request to hide a whole deal, a request to protect its cost information and a request to find one’s own deals more easily require different answers.

Do not treat local restrictions as unnecessary accommodation, or assume that more permission groups mean stronger protection. The task is to preserve the required boundary while allowing authorised work across Japan and headquarters. The examples below are hypothetical; this is editorial analysis, not a report of a particular rollout.

## Establish the reason before choosing the mechanism

Ask which information is restricted, who must not access it and which uses are permitted. Record ownership alone does not answer those questions. A restriction involving another team’s accounts may have a contractual or operational basis; it should not be dismissed as reluctance to share results.

Where a requirement depends on law or contract, have the responsible people establish the requirement before configuring the system. A country label is not a substitute for that decision. Japan-based users do not automatically need identical access, and headquarters does not automatically need every underlying record.

The resulting design should identify both the protection requirement and the permitted work. That makes it possible to distinguish a real access boundary from a request about screen organisation.

## A filtered view is not an access boundary

Suppose the local team cannot find its own deals among everyone else’s. A saved view filtered by owner may address that navigation problem. It does not establish that other records are inaccessible through search or related screens.

Conversely, if another team must not view a customer record, a convenient landing view is insufficient. The restriction has to hold through the relevant routes by which that user could reach the information.

Separating these questions helps avoid two mistakes: restricting records merely to simplify a screen, and treating a display preference as protection for confidential information. Confirm the customer’s actual requirement rather than inferring one from the Japan rollout.

## Check what field protection actually does

Hiding a field is not automatically safe or operationally costless. Consider calculated values, reports, exports and integrations that use the same information. If a user can see selling price and gross profit, the difference may reveal cost even when its own field is hidden.

The opposite problem is also possible: a report using a restricted property may become unavailable. Check the product and configuration rather than assuming that every system displays blank or zero values in the same way.

[HubSpot’s official documentation](https://knowledge.hubspot.com/properties/restrict-view-edit-access-for-properties) says its property restrictions do not provide complete restricted access and are not recommended as a security measure. It describes setting or editing restricted properties through the API or manual record creation, as well as effects on tools using those properties. This is a limitation of that specific feature, not a claim about every CRM’s field protection.

If the proposed mechanism cannot meet the protection requirement, reconsider where the information is held and which functions use it. Do not compensate by adding more rules without checking their effect.

## Design the access needed for handover and regional reporting

Once a record restriction is justified, trace the work that crosses it: account handovers, specialist support, reporting and integrations. Specify what each task requires before granting an exception.

A regional reporting role may need an aggregate rather than the full content of every Japanese deal. A colleague taking over an account may need the record itself. An integration account needs the objects and operations required for its actual task. These needs should be assessed separately, instead of giving them all unrestricted access.

Before launch, verify both sides of the design from the relevant user’s position: protected information stays inaccessible, and authorised work can still be completed. Include the search, output and integration routes that the organisation actually uses. Passing one of those checks does not establish the other.

For system configuration, handoff and reporting support, see [CRM / RevOps Implementation](https://consilegy.com/en/services/crm-revops-implementation/).

## Related reading

For a related reporting decision, see [separating Japan’s pipeline and preserving regional visibility](/en/articles/split-pipeline-by-department/). Assess the access requirement before choosing the reporting structure.

Other notes are collected under [CRM adoption](/en/category/crm/).
