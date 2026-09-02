---
title: 'ZyfinBot — Global personal finance SaaS'
slug: 'zyfinbot'
summary: 'Multi-tenant personal-finance SaaS that captures expenses through the official WhatsApp API and supports secure adviser access across currencies.'
company: 'Kawasaki Web Soluções'
role: 'Founder / Lead Engineer'
dateStart: '2026-06'
dateEnd: null
tags: ['SaaS', 'Fintech', 'Automation']
techStack: ['Ruby on Rails', 'Hotwire', 'Flutter', 'PostgreSQL', 'WhatsApp Cloud API', 'Terraform', 'Kamal', 'k3s']
featured: true
order: 2
links: []
lang: 'en'
---

## Problem

Household expense tracking fails when capture requires opening an application, navigating to a form and completing multiple fields. WhatsApp provides a lower-friction entry point in a channel people already use, while international households also need multi-currency reporting and a secure way to collaborate with financial advisers.

## Approach

I designed ZyfinBot as a modular Ruby on Rails application whose WhatsApp webhook runs in-process, reducing early operational complexity while the product evolves into a multi-tenant financial platform with Hotwire and Flutter clients.

Key architectural decisions:

- **Integrated only the official Meta WhatsApp Cloud API**, avoiding unofficial clients and account-ban risk.
- **Implemented a deterministic parser before introducing an LLM**, handling shorthand entries such as `02/06 Mercado Alimentação 130,28` and using interactive controls as a testable fallback.
- **Stored money in integer minor units with exchange-rate snapshots**, preventing historical reports from changing when currency rates move.
- **Designed tenant-per-family isolation**, starting with embedded SQLite for the MVP and retaining a migration path to self-hosted PostgreSQL with Row-Level Security.
- **Designed authentication for potential phone loss** with email, password and mandatory WebAuthn or TOTP 2FA, without relying on SMS or WhatsApp OTPs.
- **Defined an end-to-end infrastructure path** from a Raspberry Pi k3s development cluster behind Cloudflare Tunnel to future Terraform-provisioned cloud infrastructure, Kamal 2 deployments and GitHub Actions publishing images to GHCR.

## Impact

- Delivered the local v0.1.0 foundation with HMAC webhook verification, idempotent message handling, expense parsing and persistence covered by RSpec golden tests.
- Split delivery into independently shippable vertical slices covering ingestion, budgets, reports, PostgreSQL/RLS, web UI and Open Finance.
- Modelled Open Finance independently of providers, allowing Pluggy in Brazil and GoCardless or TrueLayer in Europe without schema migrations.
