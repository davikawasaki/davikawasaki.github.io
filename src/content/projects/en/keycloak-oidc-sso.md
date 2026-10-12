---
title: 'Keycloak SSO for social and enterprise login'
slug: 'keycloak-oidc-sso'
summary: 'Central Keycloak and OIDC identity platform that unified access across two products and migrated 100% of active legacy users without account loss.'
company: 'Starops'
role: 'DevOps & Data Engineer'
dateStart: '2021-09'
dateEnd: '2023-08'
tags: ['Identity Platform', 'Developer Enablement', 'SSO']
techStack: ['Keycloak', 'OIDC', 'Vue.js', 'Node.js']
featured: false
order: 7
links: []
lang: 'en'
---

## Problem

Each application handled authentication independently, leaving inconsistent security and forcing product teams to repeatedly solve the same identity integration problem.

## Approach

I established Keycloak as a central identity platform and integrated two Vue.js and Node.js products through OIDC. A reusable pattern supported social identity providers and enterprise SSO, while an automated email-based password-reset workflow moved active legacy users without requiring the old credentials.

## Impact

- Product teams gained a standard integration path instead of rebuilding authentication per application.
- 100% of active legacy users were migrated without account loss.
- Enterprise customers could bring their own SSO without product-specific integration work.
- Central policy and auditability replaced bespoke, harder-to-review implementations.
