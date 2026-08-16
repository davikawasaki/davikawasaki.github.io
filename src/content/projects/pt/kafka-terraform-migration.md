---
title: 'Migração de Kafka para Terraform'
slug: 'kafka-terraform-migration'
summary: 'Co-arquitetura de importação de recursos kafka para Terraform, depreciando uma ferramenta de deploy legada e estabelecendo versionamento em todos os ambientes.'
company: 'Adeva — cliente Fashion Digital'
role: 'Senior Site Reliability Engineer'
dateStart: '2025-09'
dateEnd: null
tags: ['Infraestrutura', 'GitOps']
techStack: ['Terraform', 'Kafka', 'GitHub Actions', 'Kustomize']
featured: true
order: 3
links: []
lang: 'pt'
---

## Problema

Os tópicos, ACLs e conectores Kafka do cliente Fashion Digital eram gerenciados por uma ferramenta interna de deploy antiga, sem histórico de versões, sem diff e sem forma segura de revisar mudanças antes de ir para produção.

## Abordagem

Junto com os times de SRE e Cloud Engineering, co-arquitetei um projeto para importar todos os recursos Kafka existentes para o estado do Terraform sem downtime, usando importação direcionada e detecção de drift para garantir que a configuração gerada refletisse o que realmente estava disponível. Após validar a importação, depreciei a aplicação de deploy legada e reconstruí o fluxo de release em torno de revisões via pull request e automação com terraform plan/apply.

## Impacto

- Todos os recursos Kafka em todos os ambientes agora são versionados, revisáveis e facilmente replicável.
- A aplicação de deploy desatualizada foi completamente depreciada.
- A promoção entre ambientes passou gerenciada por meio de um diff de plano do Terraform em vez de uma mudança manual e não documentada.
