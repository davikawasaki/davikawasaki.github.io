---
title: 'SSO com Keycloak para login social e corporativo'
slug: 'keycloak-oidc-sso'
summary: 'Implementação de SSO baseado em Keycloak com OIDC em aplicações Vue.js/Node.js, providenciando suporte a provedores de identidade sociais e corporativos.'
company: 'Starops'
role: 'DevOps Engineer / Infrastructure Engineer / DataOps'
dateStart: '2021-09'
dateEnd: '2023-08'
tags: ['Identidade', 'Plataforma', 'SSO']
techStack: ['Keycloak', 'OIDC', 'Vue.js', 'Node.js']
featured: false
order: 7
links: []
lang: 'pt'
---

## Problema

Cada aplicação do cliente tratava autenticação de forma independente — algumas com login social feito à mão, outras sem nenhuma autenticação — resultando em uma segurança inconsistente e uma experiência de login ruim através de todo o portfólio de produtos.

## Abordagem

Um realm Keycloak foi implementado como provedor de identidade única, integrado com front-ends em Vue.js e às APIs em Node.js via OIDC. Essa implementação começou a prover suporte tanto para login social (Google, etc.) quanto para SSO corporativo em produtos maiores - todos sem código de autenticação específico por aplicação.

## Impacto

- Um provedor de identidade único em todas as aplicações voltadas para o cliente final.
- Clientes corporativos puderam trazer seu próprio SSO sem trabalho de integração customizada por aplicação.
- Implementações de autenticação sob medida e difíceis de auditar foram removidas.
