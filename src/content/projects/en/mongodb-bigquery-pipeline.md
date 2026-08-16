---
title: 'MongoDB → BigQuery pipeline at 20M+ rows/day'
slug: 'mongodb-bigquery-pipeline'
summary: 'Client point-of-sale (POS) data pipeline rebuild from MongoDB to BigQuery using Apache Beam, dropping ETL time for 20M+ daily rows to under 20 minutes.'
company: 'Starops'
role: 'DevOps Engineer / Infrastructure Engineer / DataOps'
dateStart: '2021-09'
dateEnd: '2023-08'
tags: ['Data', 'Pipelines', 'ETL']
techStack: ['Apache Beam', 'BigQuery', 'MongoDB', 'Python']
featured: false
order: 8
links: []
lang: 'en'
---

## Problem

Point-of-sale data synced from MongoDB into BigQuery through a slow, brittle batch job that struggled to keep up with 20M+ rows arriving five times a day, delaying downstream reporting.

## Approach

Pipeline rebuild on Apache Beam with Python, parallelizing extraction and transform steps, tuning BigQuery load strategy to handle the full daily volume as a streaming-friendly batch instead of a single monolithic job.

## Impact

- ETL time for 20M+ rows dropped to under 20 minutes, down from a job that regularly ran late.
- Downstream reporting could rely on same-day data instead of next-day catch-up.
- The Beam-based pattern became the template for later data pipelines on the team.
