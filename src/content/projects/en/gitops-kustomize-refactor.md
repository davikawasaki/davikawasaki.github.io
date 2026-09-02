---
title: 'GitOps deployments with multi-image Kustomize'
slug: 'gitops-kustomize-refactor'
summary: 'Internal Developer Platform refactor that added multi-image Kustomize support and near-real-time release visibility for product teams.'
company: 'Toptal — Fashion Digital client'
role: 'Senior Site Reliability & Platform Engineer'
dateStart: '2025-08'
dateEnd: null
tags: ['Internal Platform', 'GitOps', 'Developer Experience']
techStack: ['ArgoCD', 'Kustomize', 'Kubernetes', 'GitHub']
featured: true
order: 4
links: []
lang: 'en'
---

## Problem

The internal GitOps platform assumed one image per deployment and refreshed microservice versions too slowly. Multi-container services required workarounds, and developers could not rely on the platform for timely release information.

## Approach

I refactored the deployment application's Kustomize integration to support multiple images in one manifest and reworked its automated GitHub history polling. The change kept the existing self-service release path while making it useful for more complex workloads and improving the feedback shown to product teams.

## Impact

- Multi-container services can use the same paved-road deployment workflow without bespoke workarounds.
- Release status now reflects GitHub history much closer to real time, shortening the developer feedback loop.
- Product teams gained a more dependable self-service path for inspecting and releasing their workloads.
