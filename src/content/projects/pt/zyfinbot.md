---
title: 'ZyfinBot — SaaS de finanças pessoais global'
slug: 'zyfinbot'
summary: 'SaaS multi-tenant de finanças pessoais que registra despesas pela API oficial do WhatsApp e oferece acesso seguro a consultores entre múltiplas moedas.'
company: 'Kawasaki Web Soluções'
role: 'Fundador / Engenheiro Líder'
dateStart: '2026-06'
dateEnd: null
tags: ['SaaS', 'Fintech', 'Automação']
techStack: ['Ruby on Rails', 'Hotwire', 'Flutter', 'PostgreSQL', 'WhatsApp Cloud API', 'Terraform', 'Kamal', 'k3s']
featured: true
order: 2
links: []
lang: 'pt'
---

## Problema

O controle de gastos domésticos falha quando o registro exige abrir uma aplicação, navegar até um formulário e preencher vários campos. O WhatsApp oferece um ponto de entrada de menor atrito em um canal já utilizado pelas pessoas, enquanto famílias internacionais também precisam de relatórios multi-moeda e de uma forma segura de colaborar com consultores financeiros.

## Abordagem

Projetei o ZyfinBot como uma aplicação Ruby on Rails modular cujo webhook do WhatsApp roda no mesmo processo, reduzindo a complexidade operacional inicial enquanto o produto evolui para uma plataforma financeira multi-tenant com clientes Hotwire e Flutter.

Principais decisões de arquitetura:

- **Integrei somente a API oficial WhatsApp Cloud da Meta**, evitando clientes não oficiais e o risco de bloqueio da conta.
- **Implementei um parser determinístico antes de introduzir uma LLM**, interpretando registros abreviados como `02/06 Mercado Alimentação 130,28` e usando controles interativos como fallback testável.
- **Armazenei valores monetários em unidades inteiras com snapshots de câmbio**, impedindo que relatórios históricos mudem quando as cotações variam.
- **Projetei o isolamento de um tenant por família**, começando com SQLite embarcado no MVP e mantendo um caminho de migração para PostgreSQL auto-hospedado com Row-Level Security.
- **Projetei a autenticação considerando a perda do celular**, com e-mail, senha e 2FA obrigatório via WebAuthn ou TOTP, sem depender de SMS ou OTP pelo WhatsApp.
- **Defini um caminho de infraestrutura de ponta a ponta** desde um cluster k3s em Raspberry Pi atrás do Cloudflare Tunnel até a futura infraestrutura de nuvem provisionada por Terraform, com deploys via Kamal 2 e publicação de imagens no GHCR pelo GitHub Actions.

## Impacto

- Entreguei a fundação local da versão 0.1.0 com verificação HMAC do webhook, processamento idempotente de mensagens, parsing e persistência de despesas cobertos por golden tests em RSpec.
- Dividi a entrega em fatias verticais publicáveis de forma independente, cobrindo ingestão, orçamentos, relatórios, PostgreSQL/RLS, interface web e Open Finance.
- Modelei o Open Finance de forma independente de provedores, permitindo usar Pluggy no Brasil e GoCardless ou TrueLayer na Europa sem migrações de schema.
