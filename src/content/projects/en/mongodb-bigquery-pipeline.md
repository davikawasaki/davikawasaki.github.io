---
title: 'MongoDB → BigQuery pipeline at 20M+ rows/day'
slug: 'mongodb-bigquery-pipeline'
summary: 'Reusable Apache Beam data-pipeline pattern that processed 20M+ MongoDB records into BigQuery in under 20 minutes.'
company: 'Starops'
role: 'DevOps & Data Engineer'
dateStart: '2021-09'
dateEnd: '2023-08'
tags: ['Data Platform', 'Reusable Pipelines', 'ETL']
techStack: ['Apache Beam', 'BigQuery', 'MongoDB', 'Python']
featured: false
order: 8
links: []
lang: 'en'
---

## Problem

Point-of-sale data synced from MongoDB into BigQuery through a slow, brittle batch job that struggled to keep up with 20M+ rows arriving five times a day, delaying downstream reporting.

## Approach

I rebuilt the pipeline with Apache Beam and Python, parallelising extraction and transformation and tuning the BigQuery load strategy for the full volume. The design separated reusable processing stages so the team could apply the same pattern to later data workloads.

## Impact

- ETL time for 20M+ rows dropped to under 20 minutes, down from a job that regularly ran late.
- Downstream reporting could rely on same-day data instead of next-day catch-up.
- The Beam-based pattern became the template for later data pipelines on the team.
