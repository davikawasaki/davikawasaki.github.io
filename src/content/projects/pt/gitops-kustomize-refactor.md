---
title: 'Deploys GitOps com Kustomize multi-imagem'
slug: 'gitops-kustomize-refactor'
summary: 'Refatoração de uma Plataforma Interna de Desenvolvimento para suportar múltiplas imagens no Kustomize e dar visibilidade de releases próxima do tempo real aos times de produto.'
company: 'Toptal — cliente Fashion Digital'
role: 'Senior Site Reliability & Platform Engineer'
dateStart: '2025-08'
dateEnd: null
tags: ['Plataforma Interna', 'GitOps', 'Experiência do Desenvolvedor']
techStack: ['ArgoCD', 'Kustomize', 'Kubernetes', 'GitHub']
featured: true
order: 4
links: []
lang: 'pt'
---

## Problema

A plataforma interna de GitOps assumia uma única imagem por deployment e atualizava as versões dos microsserviços lentamente. Serviços multi-container exigiam contornos específicos, e os desenvolvedores não podiam depender da plataforma para obter informações de release em tempo hábil.

## Abordagem

Refatorei a integração da aplicação de deploy com o Kustomize para suportar múltiplas imagens em um único manifesto e reformulei a consulta automatizada ao histórico do GitHub. A mudança preservou o fluxo self-service de releases, passou a atender workloads mais complexos e melhorou o feedback apresentado aos times de produto.

## Impacto

- Serviços multi-container passaram a usar o mesmo caminho padronizado de deploy sem soluções específicas.
- O status de release passou a refletir o histórico do GitHub muito mais próximo do tempo real, encurtando o ciclo de feedback dos desenvolvedores.
- Os times de produto ganharam um caminho self-service mais confiável para inspecionar e publicar seus workloads.
