---
title: 'Migração de Kafka para Terraform'
slug: 'kafka-terraform-migration'
summary: 'Migração de recursos Kafka legados para pipelines Terraform self-service e versionados, com mudanças revisáveis em todos os ambientes.'
company: 'Toptal — cliente Fashion Digital'
role: 'Senior Site Reliability & Platform Engineer'
dateStart: '2025-08'
dateEnd: null
tags: ['Plataforma Interna', 'Self-service', 'Infraestrutura como Código']
techStack: ['Terraform', 'Kafka', 'GitHub Actions']
featured: true
order: 3
links: []
lang: 'pt'
---

## Problema

Tópicos, ACLs e conectores Kafka eram gerenciados por uma ferramenta interna de deploy antiga, sem histórico de versões, diff do plano ou um caminho seguro de revisão antes da produção. Isso gerava trabalho operacional e concentrava o conhecimento de deploy em poucas pessoas.

## Abordagem

Junto aos times de SRE e Cloud Engineering, co-arquitetei a importação dos recursos existentes para o estado do Terraform sem downtime. Imports direcionados e detecção de drift reconciliaram o código com os ambientes em execução; revisões via pull request e planos automatizados do Terraform passaram a formar o caminho self-service para novas mudanças.

## Impacto

- Os recursos Kafka entre ambientes passaram a ser versionados, revisáveis e reproduzíveis.
- A aplicação de deploy obsoleta foi substituída por um pipeline automatizado de infraestrutura.
- Os times podem promover mudanças a partir de um plano Terraform legível, sem depender de operações manuais e não documentadas.
