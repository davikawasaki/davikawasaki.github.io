---
title: 'FisiHome — take-home physiotherapy SaaS'
slug: 'fisihome'
summary: 'Multi-tenant rehabilitation SaaS that connects prescribed video exercises with patient recordings and asynchronous professional review.'
company: 'Kawasaki Web Soluções'
role: 'Founder / Lead Engineer'
dateStart: '2026-07'
dateEnd: null
tags: ['SaaS', 'Healthcare', 'Mobile']
techStack: ['Flutter', 'FastAPI', 'PostgreSQL', 'Kubernetes', 'S3', 'Terraform']
featured: true
order: 1
links: []
lang: 'en'
---

## Problem

Physiotherapy and Pilates professionals often prescribe home exercises verbally, leaving no reliable way to verify whether patients practised or performed movements correctly. Fitness-focused applications do not model clinical rehabilitation workflows such as body-region treatment tracks, clinic-versus-home schedules and professional review, nor do they necessarily address LGPD requirements for Brazilian health data.

## Approach

I am building FisiHome as a two-sided Flutter application for professionals and patients, backed by an asynchronous FastAPI service with SQLAlchemy and Alembic. Professionals invite patients, organise assignments into clinically classified treatment tracks and select shared exercises or upload patient-specific videos. Patients follow daily plans, record their execution and receive written feedback, creating a continuous rehabilitation loop between appointments.

Key architectural decisions:

- **Designed pooled multi-tenancy with PostgreSQL Row-Level Security**, retaining a path to bridge or silo isolation for higher clinic tiers.
- **Kept video traffic outside the compute cluster** through direct S3 uploads with presigned URLs and playback through signed CDN URLs.
- **Designed self-hosted authentication** with JWT access and refresh tokens, Argon2id password hashing and TOTP MFA for invite-only professional accounts.
- **Provisioned a two-node Raspberry Pi k3s development environment with Terraform**, exposed it through Cloudflare Tunnel and instrumented it with OpenTelemetry, Grafana, Prometheus, Loki and Tempo for a future managed-cloud migration.

## Impact

- Established the initial API skeleton, domain model, RLS tenancy, authentication and invitation flows alongside Kubernetes and Terraform baselines.
- Sequenced delivery into independently usable milestones: prescription, video pipeline, professional review and LGPD export/deletion.
- Isolated media delivery from application compute, limiting the eventual managed-cloud migration to the API and database tiers.
