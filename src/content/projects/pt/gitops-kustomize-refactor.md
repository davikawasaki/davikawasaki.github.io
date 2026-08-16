---
title: 'Deploys GitOps com Kustomize multi-imagem'
slug: 'gitops-kustomize-refactor'
summary: 'Refatoração da aplicação interna de deploy GitOps para permitir gerenciamento de múltiplas imagens por deployment e para obter versões em tempo real.'
company: 'Adeva — cliente Fashion Digital'
role: 'Senior Site Reliability Engineer'
dateStart: '2025-09'
dateEnd: null
tags: ['GitOps', 'Plataforma']
techStack: ['ArgoCD', 'Kustomize', 'Kubernetes', 'GitHub']
featured: false
order: 4
links: []
lang: 'pt'
---

## Problema

A ferramenta de GitOps do time assumia uma única imagem por deployment e as versões de microsserviços não eram em atualizadas tempo real, então serviços multi-container não podiam ser despachados de forma granular e o status do rollout ficava defasado em relação ao que realmente havia sido mergeado.

## Abordagem

O uso de Kustomize da aplicação de deploy foi refatorado para permitir múltiplas imagens dentro de um único manifest de deployment. A lógica de polling foi remodelada com webhooks, permitindo atualizações mais frequentes trazidas do histórico do Github ao invés de uma sincronização agendada lenta.

## Impacto

- Serviços multi-container foram remodelados para apresentação sem gambiarras.
- O status de deploy reflete o histórico do GitHub muito mais próximo do tempo real.
