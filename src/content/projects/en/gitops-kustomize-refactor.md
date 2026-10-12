---
title: 'GitOps deployments with multi-image Kustomize'
slug: 'gitops-kustomize-refactor'
summary: 'Python/Flask Internal Developer Platform refactor that added secure multi-image deployments, cut CD time by about one hour per day and reduced UI load time to about 350 ms.'
company: 'Toptal — Fashion Digital client'
role: 'Senior Site Reliability & Platform Engineer'
dateStart: '2025-08'
dateEnd: '2026-09'
tags: ['Internal Platform', 'GitOps', 'Developer Experience']
techStack: ['Python', 'Flask', 'Argo CD', 'Kustomize', 'Kubernetes', 'GitHub', 'Firestore', 'Playwright']
featured: true
order: 4
links: []
lang: 'en'
---

## Problem

The internal GitOps platform assumed one image per deployment, reconstructured the deployment state visualisation too slowly and required manual validation before development releases. Multi-container services needed workarounds, and developers could not rely on the platform for timely release information.

## Approach

I refactored the application to support granular Kustomize image updates and GitHub webhooks with a Flask API and React GUI. I added repository-level authorization, automatic GitHub OAuth, HMAC-signed webhooks, Firestore caching and ETag-based conditional requests, then covered the release path with Playwright integration tests.

## Impact

- GitHub Actions execution time dropped by approximately one hour per day across the platform as static deployments weren't needed anymore.
- UI load time fell to approximately 350 ms while deployment state became close to real time.
- Automated Playwright coverage removed approximately 20 minutes of manual validation from each development release.
- Multi-container services gained the same secure, auditable self-service deployment path as single-image services.
