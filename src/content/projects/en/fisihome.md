---
title: 'FisiHome — take-home physiotherapy SaaS'
slug: 'fisihome'
summary: 'Multi-tenant SaaS where physiotherapists prescribe day-by-day exercise plans with videos, and patients record their execution for review.'
company: 'Kawasaki Web Soluções'
role: 'Founder / Lead Engineer'
dateStart: '2026-07'
dateEnd: null
tags: ['SaaS', 'Healthcare', 'Mobile']
techStack: ['Flutter', 'FastAPI', 'PostgreSQL', 'Kubernetes', 'S3', 'Terraform']
featured: false
order: 1
links: []
lang: 'en'
---

## Problem

Physiotherapy and pilates professionals prescribe take-home exercises through conversation, so he/she can't track if the patient practiced at home — correctly or not. Gym-training focused apps do not model clinical rehab workflows (per-body-region treatment tracks, consultation vs. home days, professional review) and might not address Brazilian health-data protection under LGPD.

## Approach

FisiHome is being built as a two-persona Flutter app — professional and patient — on top of an async Python/FastAPI API with SQLAlchemy and Alembic. Professionals register patients by invite only, organise assignments into treatment tracks by clinical classification and pull exercises from a shared library or upload patient-specific videos; patients see each day's assignments, watch the exercise video, record themselves and receive written feedback. This allows a more consistent and agile clinical progression, since movement repetition on a daily basis allows a progressive strenghtening, subject to constant rectification.

Key architectural decisions:

- **Pooled multi-tenancy on PostgreSQL Row-Level Security**, with a path to bridge/silo isolation depending on hired tier by clinics.
- **Videos never touch the cluster** — clients upload straight to S3 object storage with presigned URLs and play back through signed CDN URLs, so the compute tier only carries API traffic.
- **Self-hosted auth** in the API: JWT access/refresh, Argon2id hashing and TOTP MFA for professionals, matching the invite-only onboarding rules.
- **Development environment on a 2-node k3s cluster (Raspberry Pi 5) exposed via Cloudflare Tunnel**, provisioned with Terraform and instrumented with OpenTelemetry into Grafana/Prometheus/Loki/Tempo, designed to be moved to Cloud once patient volume justifies it.

## Impact

- Foundation milestone in progress: API skeleton, domain model, RLS tenancy, auth and invite flows, plus the Kubernetes and Terraform baselines.
- Roadmap sequenced into: prescribe → video pipeline → close-the-loop review → LGPD export/delete, so each milestone ships something a real clinic can use.
- Cloud-native media from day one keeps the eventual managed-cloud migration limited to the API and database.
