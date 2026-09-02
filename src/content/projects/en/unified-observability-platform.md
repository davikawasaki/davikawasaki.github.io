---
title: 'Unified observability platform'
slug: 'unified-observability-platform'
summary: 'Shared telemetry platform that centralised logs, traces and metrics across Kubernetes environments, reducing AWS costs and operational toil.'
company: 'Kawasaki Web Soluções'
role: 'IT Consultant / Tech Lead'
dateStart: '2020-02'
dateEnd: null
tags: ['Observability Platform', 'OpenTelemetry', 'Cost Optimisation']
techStack: ['Grafana', 'Prometheus', 'Loki', 'Tempo', 'Mimir', 'OpenTelemetry']
featured: true
order: 9
links: []
lang: 'en'
---

## Problem

Kubernetes environments ran separate, redundantly provisioned monitoring stacks. That increased AWS costs and forced engineers to jump between tools during investigation, with no shared operational view of system health.

## Approach

I designed a production-ready LGTM platform to aggregate logs, distributed traces and metrics in a central operations cluster. OpenTelemetry-compatible pipelines and mTLS secured cross-cluster collection, while consistent metadata and Grafana dashboards gave engineering and business teams a common source of operational signal.

## Impact

- Consolidating duplicated monitoring infrastructure reduced AWS resource usage and cost.
- Engineers gained one investigation path across environments, reducing context switching and operational toil.
- Richer, consistent metadata made the same telemetry useful to both technical and business stakeholders.
