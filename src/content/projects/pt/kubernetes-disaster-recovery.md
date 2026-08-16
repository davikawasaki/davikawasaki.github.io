---
title: 'Automação de recuperação de desastre - Site corporativo'
slug: 'kubernetes-disaster-recovery'
summary: 'Automação da recuperação de desastre do site corporativo principal com Python e GitHub Actions, reduzindo o tempo de recuperação de horas para menos de 10 minutos.'
company: 'Arista Networks'
role: 'Senior DevOps Engineer'
dateStart: '2023-08'
dateEnd: '2025-08'
tags: ['Confiabilidade', 'Automação']
techStack: ['Python', 'GitHub Actions', 'Terraform', 'Kubernetes']
featured: true
order: 5
links: []
lang: 'pt'
---

## Problema

Recuperação do site corporativo principal após um incidente era um processo manual, guiado por runbook, que levava horas e dependia de quem estivesse em on-call conhecer cada passo de cabeça.

## Abordagem

Uma ferramenta de recuperação em Python foi escrita, conectada ao GitHub Actions com o objetivo de reconstruir a infraestrutura do site em uma região distinta,  restaurando o estado a partir do último snapshot íntegro conhecido e substituindo uma dezena de passos manuais passíveis de erro humano do runbook por um único workflow disparado sob demanda.

## Impacto

- O tempo de recuperação caiu de horas para menos de 10 minutos.
- Engenheiros on-call não precisam mais de conhecimento tácito do runbook de recuperação.
- Maior controle de autoria do processo - quem pode executar ou não o processo automatizado
