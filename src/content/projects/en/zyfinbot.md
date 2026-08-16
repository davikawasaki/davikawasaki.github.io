---
title: 'ZyfinBot — Global personal finance SaaS'
slug: 'zyfinbot'
summary: 'Multi-tenant global finance tracker captured through an official WhatsApp bot + financial consultant access grant.'
company: 'Kawasaki Web Soluções'
role: 'Founder / Lead Engineer'
dateStart: '2026-06'
dateEnd: null
tags: ['SaaS', 'Fintech', 'Automation']
techStack: ['Ruby on Rails', 'Hotwire', 'Flutter', 'PostgreSQL', 'WhatsApp Cloud API', 'Terraform', 'Kamal', 'k3s']
featured: false
order: 2
links: []
lang: 'en'
---

## Problem

Household expense tracking dies on friction: any app that requires opening it, navigating to a form and filling five fields tends to have a high churn. The chat window people already live in is the fastest capture surface with low adoption cost — hence why this project focus on first-capture through Whatsapp.

Besides all of that, this project covers other pain points the founder currently has: global financial management (not only in one single currency and one single country) and financial consultants grant access for specialist help.

## Approach

ZyfinBot is a Ruby on Rails application whose WhatsApp webhook lives in-process rather than as a separate service, gradually growing from a bot into a full multi-tenant financial app with a Hotwire web UI and a Flutter client.

Key architectural decisions:

- **Official Meta WhatsApp Cloud API only**, 1:1 with the bot — no unofficial clients, no ban risk.
- **No LLM to start.** A deterministic parser handles a one-line shorthand (`02/06 Mercado Alimentação 130,28`) and falls back to WhatsApp interactive buttons and lists, so behaviour is testable with golden tests instead of prompt tuning.
- **Money as integer minor units** with FX snapshot-on-write: each transaction stores the original currency plus the base-currency amount, rate, source and rate date, so historical reports never drift as rates move.
- **Tenant-per-family isolation**, starting on embedded SQLite for a zero-cost MVP and migrating to self-hosted PostgreSQL with Row-Level Security.
- **Auth that assumes possible phone loss**: email and password with mandatory 2FA, satisfied by either WebAuthn passkeys or TOTP — no SMS, no WhatsApp OTP.
- **Infrastructure as code end-to-end** — development environment on a Raspberry Pi k3s cluster behind a Cloudflare Tunnel, future production enviornment in the Cloud as a Terraform-provisioned deployed with Kamal 2, images built and pushed to GHCR by GitHub Actions.

## Impact

- v0.1.0 foundation running locally: verified Cloud API webhook with HMAC signature checking, idempotent message handling keyed on the WhatsApp message id, expense parsing and persistence, all covered by RSpec golden tests.
- Delivery split into thin vertical slices — ingest, budgets, reports, Postgres/RLS migration, web UI, Open Finance — each independently shippable.
- Open Finance modelled provider-agnostically from the start, so Pluggy in Brazil and GoCardless/TrueLayer in Europe are configurable with no schema migration dependency.
