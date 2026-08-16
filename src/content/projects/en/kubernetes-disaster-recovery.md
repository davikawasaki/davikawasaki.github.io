---
title: 'Disaster recovery automation - Corporate website'
slug: 'kubernetes-disaster-recovery'
summary: 'Disaster recovery automation of the main corporate website with Python and GitHub Actions, cutting recovery time from hours to under 10 minutes.'
company: 'Arista Networks'
role: 'Senior DevOps Engineer'
dateStart: '2023-08'
dateEnd: '2025-08'
tags: ['Reliability', 'Automation']
techStack: ['Python', 'GitHub Actions', 'Terraform', 'Kubernetes']
featured: true
order: 5
links: []
lang: 'en'
---

## Problem

Main corporate website recovery after an incident was a manual, runbook-driven process that took hours and depended on whoever was on-call knowing every step by heart.

## Approach

Python-based recovery tool was written, wired into GitHub Actions with the goal of rebuilding the site's infrastructure in a distinct region, restoring state from the last known-good snapshot e replacing a dozen manual human error-prone runbook steps with a single triggered workflow.

## Impact

- Recovery time dropped from hours to under 10 minutes.
- On-call engineers no longer need tribal knowledge of the recovery runbook.
- Higher control of process authorship - gating who can execute or not the automated process
