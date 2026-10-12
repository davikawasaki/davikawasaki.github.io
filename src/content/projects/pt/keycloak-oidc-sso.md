---
title: 'SSO com Keycloak para login social e corporativo'
slug: 'keycloak-oidc-sso'
summary: 'Plataforma central de identidade com Keycloak e OIDC que unificou o acesso entre dois produtos e migrou 100% dos usuários legados ativos sem perda de contas.'
company: 'Starops'
role: 'DevOps & Data Engineer'
dateStart: '2021-09'
dateEnd: '2023-08'
tags: ['Plataforma de Identidade', 'Developer Enablement', 'SSO']
techStack: ['Keycloak', 'OIDC', 'Vue.js', 'Node.js']
featured: false
order: 7
links: []
lang: 'pt'
---

## Problema

Cada aplicação tratava a autenticação de forma independente, gerando segurança inconsistente e obrigando os times de produto a resolver repetidamente o mesmo problema de integração de identidade.

## Abordagem

Estabeleci o Keycloak como plataforma central de identidade e integrei dois produtos em Vue.js e Node.js por OIDC. Um padrão reutilizável suportava provedores sociais e SSO corporativo, enquanto um fluxo automatizado de redefinição de senha por e-mail migrou usuários ativos sem depender das credenciais antigas.

## Impacto

- Os times de produto ganharam um caminho de integração padronizado em vez de reconstruir a autenticação por aplicação.
- 100% dos usuários legados ativos foram migrados sem perda de contas.
- Clientes corporativos puderam trazer seu próprio SSO sem trabalho específico de integração em cada produto.
- Políticas centralizadas e maior auditabilidade substituíram implementações sob medida e difíceis de revisar.
