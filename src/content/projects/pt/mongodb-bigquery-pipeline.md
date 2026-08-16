---
title: 'Pipeline MongoDB → BigQuery com 20M+ linhas/dia'
slug: 'mongodb-bigquery-pipeline'
summary: 'Reconstrução de uma pipeline de dados de ponto de venda (PDV) de um cliente do MongoDB para o BigQuery usando Apache Beam, reduzindo o tempo de ETL de mais de 20M de linhas diárias para menos de 20 minutos.'
company: 'Starops'
role: 'DevOps Engineer / Infrastructure Engineer / DataOps'
dateStart: '2021-09'
dateEnd: '2023-08'
tags: ['Dados', 'Pipelines', 'ETL']
techStack: ['Apache Beam', 'BigQuery', 'MongoDB', 'Python']
featured: false
order: 8
links: []
lang: 'pt'
---

## Problema

Os dados de ponto de venda eram sincronizados do MongoDB para o BigQuery por um job em lote lento e frágil, que tinha dificuldade em acompanhar mais de 20 milhões de linhas chegando cinco vezes ao dia, atrasando os relatórios subsequentes.

## Abordagem

Reconstrução da pipeline em Apache Beam com Python, paralelizando as etapas de extração e transformação, ajustando a estratégia de carregamento da carga no BigQuery para processar todo o volume diário como um lote amigável a streaming, em vez de um único job monolítico.

## Impacto

- O tempo de ETL para mais de 20M de linhas caiu para menos de 20 minutos, vindo de um job que frequentemente atrasava.
- Os relatórios subsequentes passaram a contar com dados do próprio dia, em vez de reprocessamento no dia seguinte.
- O padrão baseado em Beam se tornou o modelo para pipelines de dados futuros no time.
