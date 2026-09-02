---
title: 'FisiHome — SaaS de fisioterapia domiciliar'
slug: 'fisihome'
summary: 'SaaS multi-tenant de reabilitação que conecta exercícios prescritos em vídeo, gravações dos pacientes e revisão assíncrona dos profissionais.'
company: 'Kawasaki Web Soluções'
role: 'Fundador / Engenheiro Líder'
dateStart: '2026-07'
dateEnd: null
tags: ['SaaS', 'Saúde', 'Dispositivos Móveis']
techStack: ['Flutter', 'FastAPI', 'PostgreSQL', 'Kubernetes', 'S3', 'Terraform']
featured: true
order: 1
links: []
lang: 'pt'
---

## Problema

Profissionais de fisioterapia e Pilates frequentemente prescrevem exercícios domiciliares de forma verbal, sem um meio confiável de verificar se o paciente praticou ou executou os movimentos corretamente. Aplicativos voltados a academias não modelam fluxos clínicos de reabilitação, como trilhas por região do corpo, agendas de clínica e domicílio e revisão profissional, nem necessariamente atendem às exigências da LGPD para dados de saúde.

## Abordagem

Estou desenvolvendo o FisiHome como uma aplicação Flutter para profissionais e pacientes, apoiada por uma API assíncrona em FastAPI com SQLAlchemy e Alembic. Profissionais convidam pacientes, organizam atividades em trilhas classificadas clinicamente e selecionam exercícios compartilhados ou enviam vídeos específicos. Pacientes seguem planos diários, gravam sua execução e recebem feedback escrito, criando um ciclo contínuo de reabilitação entre consultas.

Principais decisões de arquitetura:

- **Projetei multi-tenancy pooled com Row-Level Security no PostgreSQL**, preservando um caminho para isolamento bridge ou silo em planos superiores das clínicas.
- **Mantive o tráfego de vídeo fora do cluster de computação** com uploads diretos para o S3 por URLs pré-assinadas e reprodução por URLs assinadas de CDN.
- **Projetei autenticação própria** com tokens JWT de acesso e refresh, hashing Argon2id e MFA TOTP para contas profissionais acessíveis apenas por convite.
- **Provisionei com Terraform um ambiente k3s de dois nós em Raspberry Pi**, exposto por Cloudflare Tunnel e instrumentado com OpenTelemetry, Grafana, Prometheus, Loki e Tempo para uma futura migração à nuvem gerenciada.

## Impacto

- Estabeleci o esqueleto inicial da API, o modelo de domínio, a tenancy com RLS e os fluxos de autenticação e convite, além das bases de Kubernetes e Terraform.
- Organizei a entrega em marcos utilizáveis de forma independente: prescrição, pipeline de vídeo, revisão profissional e exportação/exclusão em conformidade com a LGPD.
- Isolei a entrega de mídia da camada de computação, limitando a futura migração à nuvem gerenciada à API e ao banco de dados.
