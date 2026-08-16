---
title: 'Keycloak SSO for social and enterprise login'
slug: 'keycloak-oidc-sso'
summary: 'Keycloak-based SSO implementation with OIDC across Vue.js/Node.js apps, supporting both social and enterprise identity providers.'
company: 'Starops'
role: 'DevOps Engineer / Infrastructure Engineer / DataOps'
dateStart: '2021-09'
dateEnd: '2023-08'
tags: ['Identity', 'Platform', 'SSO']
techStack: ['Keycloak', 'OIDC', 'Vue.js', 'Node.js']
featured: true
order: 7
links: []
lang: 'en'
---

## Problem

Client applications each handled authentication independently — some with hand-rolled social login, others with none — leaving inconsistent security and a poor login experience across the product suite.

## Approach

A Keycloak realm was stood up as the single identity provider, inetgrated with the Vue.js front ends and Node.js APIs via OIDC. This implementation started to support both social login (Google, etc.) and enterprise SSO for larger products - all without app-specific auth code.

## Impact

- One identity provider across every client-facing application.
- Enterprise clients could bring their own SSO without custom integration work per app.
- Removed bespoke, harder-to-audit authentication implementations.
