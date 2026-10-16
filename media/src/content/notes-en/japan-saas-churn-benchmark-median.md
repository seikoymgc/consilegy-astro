---
title: "Reading Japan’s SaaS churn benchmark: check the distribution"
description: "Check the population, denominator and distribution before using a churn benchmark. Read the industry figure by its distribution; your own churn rate is a single ratio, so split it by logo and revenue, and large accounts from the rest, instead of looking for a median."
publishedAt: 2026-07-24
updatedAt: 2026-10-17
category: data
principle: "Check the population, denominator and distribution before using a churn benchmark. Read the industry figure by its distribution; your own churn rate is a single ratio, so split it by logo and revenue, and large accounts from the rest, instead of looking for a median."
canonUrl: https://consilegy.com/en/services-en/japan-market-gtm-messaging/
canonLabel: Japan Market GTM and Messaging
---

If you are setting a churn target for your Japan operation from a benchmark that says "Japanese SaaS churns at about 3% a month," you are likely setting it against the wrong number.

That 3% is a mean, and it is pulled up by a small number of high-churn companies.

**Nearly half the companies in the same dataset sit at 1% or lower.** Read the mean as the market, and your Japan team looks like it is failing when it is roughly at par.

## The number that circulates

The figure comes from CloudCircus's Fullstar "Customer Success Survey 2025" (fielded August 2025, n=200, customer success and support staff at B2B information and communications companies in Japan; note that this is a vendor survey). The headline is a **mean monthly churn of 3.01%**.

But the same survey publishes the distribution, and it is heavily skewed: **45% of companies report 1% or lower**, while about 9% report 10% or higher.

Those few high-churn companies drag the average up.

The typical company sits well below the mean, at a third of it or less.

So "Japan churns at 3%" describes almost none of the companies in the data. It describes the gap between the typical company and a handful of struggling ones.

## Why this matters when you report to HQ

Two failures follow from using the mean as if it were typical.

First, **you set the wrong target.**

If HQ benchmarks your Japan team against a 3% "market rate," a team at 1% looks mediocre, and a team genuinely at 3% looks acceptable when roughly half the market sits at a third of that or less.

The averaged number hides both the good and the bad.

Second, **you lose HQ's trust in the whole report.**

The moment a headline number stops matching what people see on the ground, they stop trusting the dashboard it came from.

After that, even your accurate numbers get discounted in decisions.

A dashboard exists to surface what needs intervention, not to produce a tidy single figure; a distrusted figure cannot do that job.

## What to report instead

- **Split your own churn rate; do not look for a median in it.** Your monthly churn is churned customers divided by customers at the start of the month: a single ratio, so it has no median. Report it split two ways instead: by logo and by revenue, and large accounts separately from the rest. How to lay those side by side is in [Japan's NRR looks healthy on your dashboard. Ask for the logo churn.](/en/articles/churn-rate-logo-or-revenue/). Use median and distribution only for the industry benchmark, and for metrics that have one value per record, such as deal size or days in stage.
- **Show large churned accounts as a separate list, not blended in.** They are exactly what your customer success team should act on. Folding them into one rate hides the intervention target.
- **Name the source, year, and sample every time.** When you cite the Japan benchmark, say "Fullstar 2025, n=200, vendor survey." HQ can weigh a vendor survey of 200 companies appropriately, and a sourced number survives scrutiny that an unsourced one does not.
- **Do not compare Japan and home-market retention as if the numbers are equivalent.** US benchmarks such as Benchmarkit 2025 report a median net revenue retention around 101%, and Japan's Fullstar reports a mean NRR of 102.1%, but the samples, methods, and mean-versus-median basis all differ. They look close; they are not directly comparable. Present each with its own definition and let HQ draw the line.

**Check the population, denominator and distribution before using a churn benchmark. Read the industry figure by its distribution; your own churn rate is a single ratio, so split it by logo and revenue, and large accounts from the rest, instead of looking for a median.**

## Common mistakes

- **Treating every metric as skewed.** Symmetric metrics are fine to average. Deal size and stage duration are the ones that reliably skew; check the distribution per metric. Churn and conversion rates are ratios, so split them rather than taking a median.
- **Reporting the median but hiding the distribution.** The median is a representative value, not a tool for making the outliers disappear.
- **Trusting the dashboard's default.** Most tools aggregate with a mean by default. For skewed metrics, do not ship that default to HQ.

## Related reading

Reading the median is the first half; attaching a decision rule to it is the second. See [write the threshold before adding another dashboard](/en/articles/threshold-before-dashboard/).

Other notes on the same problem are collected under [Revenue data](/en/category/data/).