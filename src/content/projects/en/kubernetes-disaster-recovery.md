---
title: 'Runbook-driven disaster recovery automation'
slug: 'kubernetes-disaster-recovery'
summary: 'Zero-touch disaster recovery with Python, GitHub Actions and operational runbooks, cutting recovery from hours to under 10 minutes for a global on-call team.'
company: 'Arista Networks'
role: 'Senior DevOps & Site Reliability Engineer'
dateStart: '2023-08'
dateEnd: '2025-08'
tags: ['Reliability', 'Runbooks', 'Async Incident Response']
techStack: ['Python', 'GitHub Actions', 'Terraform', 'Kubernetes']
featured: true
order: 5
links: []
lang: 'en'
---

## Problem

Recovery of the main corporate website was a manual process that took hours and still depended on the on-call engineer's tacit knowledge. That was especially risky for a team handing incidents across time zones.

## Approach

I built a Python recovery tool and exposed it through a gated GitHub Actions workflow. It rebuilt the site in another region, restored the last known-good snapshot and replaced a dozen error-prone steps with one on-demand operation. I also authored the technical runbooks needed for asynchronous hand-offs across the global on-call rotation.

## Impact

- Recovery time dropped from hours to under 10 minutes.
- On-call engineers can execute and understand recovery from written, shared procedures instead of tribal knowledge.
- Gated workflow permissions made execution auditable and limited the operation to authorised responders.
