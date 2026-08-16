---
title: 'Kafka → Terraform migration'
slug: 'kafka-terraform-migration'
summary: 'Co-architecture import of kafka resources into Terraform, retiring a legacy deployment tool and setting up versioning for every environment.'
company: 'Adeva — Fashion Digital client'
role: 'Senior Site Reliability Engineer'
dateStart: '2025-09'
dateEnd: null
tags: ['Infrastructure', 'GitOps']
techStack: ['Terraform', 'Kafka', 'GitHub Actions', 'Kustomize']
featured: true
order: 3
links: []
lang: 'en'
---

## Problem

Fashion Digital client's Kafka topics, ACLs and connectors were managed through an aging internal deployment tool with no version history, no diffing, and no safe way to review a change before it hit production.

## Approach

Working with SRE and Cloud Engineering teams, I've co-architected a project to import every existing Kafka resource into Terraform state without downtime, using targeted imports and drift detection to make sure the generated configuration matched what was actually running. Once the import was verified, I've retired the legacy deployment application and rebuilt the release path around pull request review and terraform plan/apply automation.

## Impact

- Every Kafka resource across all environments is now versioned, reviewable and easy to be replicated.
- The outdated deployment application was fully deprecated.
- Environment promotion is now handled by Terraform plan diff instead of a manual, undocumented change.
