---
title: 'Pipeline MongoDB → BigQuery com 20M+ linhas/dia'
slug: 'mongodb-bigquery-pipeline'
summary: 'Padrão reutilizável de pipeline com Apache Beam que processou mais de 20M de registros do MongoDB para o BigQuery em menos de 20 minutos.'
company: 'Starops'
role: 'DevOps & Data Engineer'
dateStart: '2021-09'
dateEnd: '2023-08'
tags: ['Plataforma de Dados', 'Pipelines Reutilizáveis', 'ETL']
techStack: ['Apache Beam', 'BigQuery', 'MongoDB', 'Python']
featured: false
order: 8
links: []
lang: 'pt'
---

## Problema

Os dados de ponto de venda eram sincronizados do MongoDB para o BigQuery por um job em lote lento e frágil, que tinha dificuldade em acompanhar mais de 20 milhões de linhas chegando cinco vezes ao dia, atrasando os relatórios subsequentes.

## Abordagem

Reconstruí o pipeline com Apache Beam e Python, paralelizando a extração e transformação e ajustando a estratégia de carga no BigQuery para o volume completo. O desenho separou etapas de processamento reutilizáveis para que o time pudesse aplicar o mesmo padrão a workloads de dados posteriores.

## Impacto

- O tempo de ETL para mais de 20M de linhas caiu para menos de 20 minutos, vindo de um job que frequentemente atrasava.
- Os relatórios subsequentes passaram a contar com dados do próprio dia, em vez de reprocessamento no dia seguinte.
- O padrão baseado em Beam se tornou o modelo para pipelines de dados futuros no time.
