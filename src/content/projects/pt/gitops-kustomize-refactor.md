---
title: 'Deploys GitOps com Kustomize multi-imagem'
slug: 'gitops-kustomize-refactor'
summary: 'Refatoração de uma Plataforma Interna em Python/Flask, adicionando deployments granulares segunros multi-imagem, reduzindo o CD em cerca de uma hora por dia e reduzindo o carregamento da interface para aproximadamente 350 ms.'
company: 'Toptal — cliente Fashion Digital'
role: 'Senior Site Reliability & Platform Engineer'
dateStart: '2025-08'
dateEnd: '2026-09'
tags: ['Plataforma Interna', 'GitOps', 'Experiência do Desenvolvedor']
techStack: ['Python', 'Flask', 'Argo CD', 'Kustomize', 'Kubernetes', 'GitHub', 'Firestore', 'Playwright']
featured: true
order: 4
links: []
lang: 'pt'
---

## Problema

A plataforma interna de GitOps assumia uma única imagem por deployment, reconstruía lentamente sua visão do estado dos deployments e exigia validação manual antes dos releases de desenvolvimento. Serviços multi-container precisavam de adaptações específicas, e os desenvolvedores não conseguiam ter informações atualizadas na plataforma.

## Abordagem

Refatorei a aplicação em Python/Flask para aceitar atualizações granulares de imagens no Kustomize e webhooks do GitHub por meio de uma API em Flask e uma GUI em React. Adicionei regras de autorização baseadas em repositórios Github, OAuth automático do GitHub, webhooks assinados com HMAC, cache no Firestore e requisições condicionais com ETag, além de cobrir o fluxo de release com testes de integração em Playwright.

## Impacto

- O tempo de execução do GitHub Actions caiu em aproximadamente uma hora por dia no agregado da plataforma, já que deployments da plataforma estática não eram mais necessários.
- O carregamento da interface caiu para aproximadamente 350 ms, enquanto o estado dos deployments passou a ser atualizado quase em tempo real.
- A cobertura automatizada com Playwright removeu aproximadamente 20 minutos de validação manual em cada release de desenvolvimento.
- Serviços multi-container ganharam o mesmo caminho de deployment self-service, seguro e auditável que aconteciam em serviços com uma única imagem.
