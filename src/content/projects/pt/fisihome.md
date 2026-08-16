---
title: 'FisiHome — SaaS de fisioterapia domiciliar'
slug: 'fisihome'
summary: 'SaaS multi-tenant em que fisioterapeutas prescrevem planos de exercícios diários com vídeos, e pacientes gravam as execuções para avaliação.'
company: 'Kawasaki Web Soluções'
role: 'Fundador / Engenheiro Líder'
dateStart: '2026-07'
dateEnd: null
tags: ['SaaS', 'Saúde', 'Dispositivos Móveis']
techStack: ['Flutter', 'FastAPI', 'PostgreSQL', 'Kubernetes', 'S3', 'Terraform']
featured: false
order: 1
links: []
lang: 'pt'
---

## Problema

Profissionais de fisioterapia e pilates prescrevem exercícios para casa no boca a boca, então ninguém consegue saber se o paciente realmente executou o movimento — ou se executou corretamente. Aplicativos voltados academia não modelam o fluxo clínico de reabilitação (trilhas de tratamento por região do corpo, dias de consulta versus dias em casa, revisão do profissional) e podem nem cuidar da proteção de dados de saúde exigida pela LGPD.

## Abordagem

O FisiHome está sendo construído como um app Flutter para duas personas — profissional e paciente — acima de uma API assíncrona em Python/FastAPI com SQLAlchemy e Alembic. Profissionais cadastram pacientes apenas por convite, organizam as tarefas em trilhas de tratamento por classificação clínica e usam exercícios de uma biblioteca compartilhada ou enviam vídeos específicos do paciente; pacientes veem cada tarefa do dia, assistem ao vídeo do exercício, se gravam e recebem feedback escrito. Isso permite uma evolução clínica mais consistente e ágil, já que a repetição dos movimentos de forma diária permite fortalecimento progressivopassível de correção de forma constante. 

Principais decisões de arquitetura:

- **Multi-tenancy pooled com Row-Level Security no PostgreSQL**, com caminho para isolamento em bridge/silo dependendo do plano contratado pelas clínicas.
- **Os vídeos nunca passam pelo cluster** — os clientes enviam direto para o S3 com URLs pré-assinadas e reproduzem por URLs assinadas de CDN, de modo que a camada de computação carrega apenas tráfego de API.
- **Autenticação própria na API**: JWT de acesso/refresh, hashing Argon2id e MFA TOTP para profissionais, alinhados às regras de onboarding somente por convite.
- **Ambiente de desenvolvimento em cluster k3s de 2 nós (Raspberry Pi 5) exposto via Cloudflare Tunnel**, provisionado com Terraform e instrumentado com OpenTelemetry para Grafana/Prometheus/Loki/Tempo, projetado para migrar para a nuvem quando o volume de pacientes justificar tal mudança.

## Impacto

- Marco de fundação em andamento: esqueleto da API, modelo de domínio, tenancy com RLS, fluxos de autenticação e convite, além das bases de Kubernetes e Terraform.
- Roadmap sequenciado em: prescrever → pipeline de vídeo → fechar o ciclo de revisão → exportação/exclusão LGPD, para que cada marco entregue algo utilizável por uma clínica real.
- Mídia nativa em nuvem desde o primeiro dia mantém a futura migração para nuvem gerenciada restrita à API e ao banco de dados.
