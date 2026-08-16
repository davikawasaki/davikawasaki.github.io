---
title: 'Unified observability platform'
slug: 'unified-observability-platform'
summary: 'Centralized logs, traces and metrics from multiple Kubernetes clusters into an operations Kubernetes cluster with LGTM stack, cutting AWS costs and simplifying microservices monitoring cross-environments.'
company: 'Kawasaki Web Soluções'
role: 'Information Technology Consultant'
dateStart: '2020-02'
dateEnd: null
tags: ['Observability', 'Cost optimization', 'Telemetry']
techStack: ['Grafana', 'Prometheus', 'Loki', 'Tempo', 'Mimir', 'OpenTelemetry']
featured: true
order: 9
links: []
lang: 'en'
---

## Problem

Each client's Kubernetes clusters shipped logs, traces and metrics to separate, redundantly-provisioned monitoring stacks, driving up AWS expenditure and making it hard to get a single view of system health.

## Approach

An unified LGTM stack was architected and developed to aggregate observability data across clusters. This restructured application logs with richer user metadata top-to-boottom, shipping logs and traces to the centralised operations sink cluster. Cluster-to-cluster communication was established via mTLS and metrics continued to be shown in custom Grafana dashboards.

## Impact

- Consolidated monitoring infrastructure reduced AWS costs across clients - less resource allocation to keep LGTM stack online on remaining clusters.
- Business stakeholders gained more actionable insight from richer log metadata.
