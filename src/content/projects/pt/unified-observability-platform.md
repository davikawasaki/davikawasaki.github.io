---
title: 'Plataforma de observabilidade unificada'
slug: 'unified-observability-platform'
summary: 'Plataforma compartilhada de telemetria que centralizou logs, traces e métricas entre ambientes Kubernetes, reduzindo custos de AWS e trabalho operacional.'
company: 'Kawasaki Web Soluções'
role: 'Consultor de TI / Tech Lead'
dateStart: '2020-02'
dateEnd: null
tags: ['Plataforma de Observabilidade', 'OpenTelemetry', 'Otimização de Custos']
techStack: ['Grafana', 'Prometheus', 'Loki', 'Tempo', 'Mimir', 'OpenTelemetry']
featured: true
order: 9
links: []
lang: 'pt'
---

## Problema

Os ambientes Kubernetes executavam stacks de monitoramento separadas e provisionadas de forma redundante. Isso aumentava os custos de AWS e obrigava os engenheiros a alternar entre ferramentas durante investigações, sem uma visão operacional compartilhada da saúde dos sistemas.

## Abordagem

Projetei uma plataforma LGTM pronta para produção que agregava logs, traces distribuídos e métricas em um cluster central de operações. Pipelines compatíveis com OpenTelemetry e mTLS protegiam a coleta entre clusters, enquanto metadados consistentes e dashboards do Grafana ofereciam uma fonte comum de sinal operacional aos times técnicos e de negócio.

## Impacto

- A consolidação da infraestrutura duplicada de monitoramento reduziu o uso de recursos e os custos na AWS.
- Os engenheiros ganharam um único caminho de investigação entre ambientes, reduzindo trocas de contexto e trabalho operacional.
- Metadados mais ricos e consistentes tornaram a mesma telemetria útil para stakeholders técnicos e de negócio.
