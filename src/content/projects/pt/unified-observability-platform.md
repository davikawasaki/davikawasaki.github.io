---
title: 'Plataforma de observabilidade unificada'
slug: 'unified-observability-platform'
summary: 'Centralização de logs, traces e métricas de múltiplos clusters Kubernetes em um cluster Kubernetes de operações com stack LGTM, reduzindo custos de AWS e simplificando o monitoramento de microserviços cross ambiente.'
company: 'Kawasaki Web Soluções'
role: 'Consultor de Tecnologia da Informação'
dateStart: '2020-02'
dateEnd: null
tags: ['Observabilidade', 'Otimização de custos', 'Telemetria']
techStack: ['Grafana', 'Prometheus', 'Loki', 'Tempo', 'Mimir', 'OpenTelemetry']
featured: true
order: 9
links: []
lang: 'pt'
---

## Problema

Os clusters Kubernetes de cada cliente enviavam logs, traces e métricas para stacks de monitoramento separadas e provisionadas de forma redundante, elevando os gastos com AWS e dificultando obter uma visão única da saúde dos sistemas.

## Abordagem

Uma stack LGTM unificada foi projetada e desenvolvida para agregar dados de observabilidade entre clusters. Isso restruturou os logs de aplicação com metadados de usuário de forma mais rica, enviando logs e traces para o cluster centralizado de operações. A comunicação cluster à cluster foi estabelecida via mTLS e métricas continuaram sendo exibidas em dashboards customizados no Grafana.

## Impacto

- A infraestrutura de monitoramento consolidada reduziu os custos de AWS entre os clientes - menor necessidade de recursos para manter a stack LGTM em todos os clusters restantes.
- Os stakeholders de negócio ganharam insights acionáveis com metadados de log mais ricos.
