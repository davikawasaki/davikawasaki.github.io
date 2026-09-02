---
title: 'Keycloak SSO for social and enterprise login'
slug: 'keycloak-oidc-sso'
summary: 'Central identity platform with Keycloak and OIDC that gave product teams a reusable integration path for social and enterprise SSO.'
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

I established Keycloak as a central identity platform and integrated Vue.js front ends and Node.js APIs through OIDC. A reusable application pattern supported social identity providers and enterprise SSO without bespoke authentication code in every product.

## Impact

- Product teams gained a standard integration path instead of rebuilding authentication per application.
- Enterprise customers could bring their own SSO without product-specific integration work.
- Central policy and auditability replaced bespoke, harder-to-review implementations.
