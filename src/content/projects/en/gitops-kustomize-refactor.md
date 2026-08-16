---
title: 'GitOps deployments with multi-image Kustomize'
slug: 'gitops-kustomize-refactor'
summary: 'Internal GitOps deployment application refactor to support management of multiple images per deployment and to obtain real-time versions.'
company: 'Adeva — Fashion Digital client'
role: 'Senior Site Reliability Engineer'
dateStart: '2025-09'
dateEnd: null
tags: ['GitOps', 'Platform']
techStack: ['ArgoCD', 'Kustomize', 'Kubernetes', 'GitHub']
featured: false
order: 4
links: []
lang: 'en'
---

## Problem

Team's GitOps tooling assumed one image per deployment and microservice versions weren't updated in real time, so multi-container services couldn't be rolled out granularly and rollout signal from GitHub lagged behind what was actually merged.

## Approach

Deployment application's Kustomize usage was refactored to support multiple images inside a single deployment manifest. Polling logic was reworked with webhooks, allowing more frequent updates to be pulled from GitHub history instead of a slow scheduled sync.

## Impact

- Multi-container services were reworked to be presented without workarounds.
- Deployment status reflects GitHub history far closer to real time.
