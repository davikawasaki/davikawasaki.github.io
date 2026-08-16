---
title: 'ZyfinBot — SaaS de finanças pessoais global'
slug: 'zyfinbot'
summary: 'Controle financeiro multi-tenant global com coletas por bot oficial de WhatsApp + autorização de acesso para consultores financeiros.'
company: 'Kawasaki Web Soluções'
role: 'Fundador / Engenheiro Líder'
dateStart: '2026-06'
dateEnd: null
tags: ['SaaS', 'Fintech', 'Automação']
techStack: ['Ruby on Rails', 'Hotwire', 'Flutter', 'PostgreSQL', 'WhatsApp Cloud API', 'Terraform', 'Kamal', 'k3s']
featured: false
order: 2
links: []
lang: 'pt'
---

## Problema

O controle de gastos domésticos morre no atrito: qualquer aplicativo que exija abrir, navegar até um formulário e preencher cinco campos tende a ter um churn alto. A janela de conversa em que as pessoas já vivem é a forma de captura mais rápida com custo baixo de adoção — por isso esse projeto foca em uma captura inicial desses custos pelo Whatsapp.

Além disso tudo, o projeto também cobre outras dores que o fundador atualmente enfrenta: gerenciamente financeiro global (além de uma só moeda e um só país) e permissão de acesso externo ao consultores financeiros para ajuda especialista.

## Abordagem

O ZyfinBot é uma aplicação Ruby on Rails cujo webhook de WhatsApp roda no próprio processo em vez de um serviço separado, evoluindo gradualmente de bot para um app financeiro multi-tenant completo com interface web em Hotwire e cliente Flutter.

Principais decisões de arquitetura:

- **Somente a API oficial WhatsApp Cloud da Meta**, em conversa 1:1 com o bot — sem clientes não oficiais, sem risco de banimento.
- **Sem LLM para começar.** Um parser determinístico interpreta uma linha abreviada (`02/06 Mercado Alimentação 130,28`) e recorre a botões e listas interativas do WhatsApp, de modo que o comportamento é testado com golden tests em vez de ajustes de prompt.
- **Dinheiro como unidades monetárias inteiras** com snapshot de câmbio na escrita: cada transação guarda a moeda original mais o valor na moeda base, a taxa, a fonte e a data da cotação, para que relatórios históricos nunca mudem quando as taxas variam.
- **Isolamento de um tenant por família**, começando em SQLite embarcado para um MVP sem custo e migrando para PostgreSQL auto-hospedado com Row-Level Security.
- **Autenticação que pressupõe possíveis perdas de celulares**: e-mail e senha com 2FA obrigatório, satisfeito por passkeys WebAuthn ou TOTP — sem SMS, sem OTP por WhatsApp.
- **Infraestrutura como código de ponta a ponta** — ambiente de desenvolvimento em cluster k3s com Raspberry Pi atrás de um Cloudflare Tunnel, ambiente de produção futuro na nuvem provisionado com Terraform e implantado com Kamal 2, com imagens construídas e publicadas no GHCR pelo GitHub Actions.

## Impacto

- Fundação v0.1.0 rodando localmente: webhook da Cloud API verificado com checagem de assinatura HMAC, tratamento idempotente de mensagens pelo id da mensagem do WhatsApp, parsing e persistência de despesas, tudo coberto por golden tests em RSpec.
- Entrega dividida em fases verticais mínimas — ingestão, orçamentos, relatórios, migração para Postgres/RLS, interface web, Open Finance — cada módulo publicado de forma independente.
- Open Finance modelado de forma agnóstica de provedor desde o início, então Pluggy no Brasil e GoCardless/TrueLayer na Europa são configuaráveis sem dependência de migração de schema.
