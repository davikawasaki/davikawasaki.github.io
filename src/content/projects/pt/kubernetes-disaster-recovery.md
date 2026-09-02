---
title: 'Automação de recuperação de desastre orientada por runbooks'
slug: 'kubernetes-disaster-recovery'
summary: 'Recuperação de desastre zero-touch com Python, GitHub Actions e runbooks operacionais, reduzindo a recuperação de horas para menos de 10 minutos para um time global de on-call.'
company: 'Arista Networks'
role: 'Senior DevOps & Site Reliability Engineer'
dateStart: '2023-08'
dateEnd: '2025-08'
tags: ['Confiabilidade', 'Runbooks', 'Resposta Assíncrona a Incidentes']
techStack: ['Python', 'GitHub Actions', 'Terraform', 'Kubernetes']
featured: true
order: 5
links: []
lang: 'pt'
---

## Problema

A recuperação do site corporativo principal era um processo manual que levava horas e ainda dependia do conhecimento tácito de quem estivesse em on-call. Isso era especialmente arriscado para um time que transferia incidentes entre fusos horários.

## Abordagem

Construí uma ferramenta de recuperação em Python e a disponibilizei por meio de um workflow do GitHub Actions com controle de acesso. Ela reconstruía o site em outra região, restaurava o último snapshot íntegro e substituía uma dezena de passos sujeitos a erro por uma única operação sob demanda. Também escrevi os runbooks técnicos necessários para handoffs assíncronos na rotação global de on-call.

## Impacto

- O tempo de recuperação caiu de horas para menos de 10 minutos.
- Engenheiros de on-call podem executar e compreender a recuperação a partir de procedimentos escritos e compartilhados, sem depender de conhecimento tácito.
- Permissões no workflow tornaram a execução auditável e limitaram a operação a pessoas autorizadas.
