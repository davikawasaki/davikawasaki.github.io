---
title: 'Kafka → Terraform migration'
slug: 'kafka-terraform-migration'
summary: 'Migration of legacy Kafka resources into version-controlled, self-service Terraform pipelines with reviewable changes across every environment.'
company: 'Toptal — Fashion Digital client'
role: 'Senior Site Reliability & Platform Engineer'
dateStart: '2025-08'
dateEnd: null
tags: ['Internal Platform', 'Self-service', 'Infrastructure as Code']
techStack: ['Terraform', 'Kafka', 'GitHub Actions']
featured: true
order: 3
links: []
lang: 'en'
---

## Problem

Kafka topics, ACLs and connectors were managed through an aging internal deployment tool with no version history, plan diff or safe review path before production. This created operational toil and concentrated deployment knowledge in a small group.

## Approach

Working with SRE and Cloud Engineering, I co-architected the import of existing resources into Terraform state without downtime. Targeted imports and drift detection reconciled code with the running environments; pull-request reviews and automated Terraform plans then became the self-service release path for future changes.

## Impact

- Kafka resources across environments became version-controlled, reviewable and reproducible.
- The outdated deployment application was retired in favour of an automated infrastructure pipeline.
- Teams can promote changes from a readable Terraform plan instead of relying on manual, undocumented operations.
