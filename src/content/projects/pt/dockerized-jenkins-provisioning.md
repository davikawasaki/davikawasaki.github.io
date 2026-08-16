---
title: 'Cluster Jenkins em Docker para provisionamento de VMs'
slug: 'dockerized-jenkins-provisioning'
summary: 'Projeto e implantação de cluster Jenkins baseado em Docker que provisiona instâncias de VM via Terraform e Ansible, reduzindo o tempo de provisionamento para 15 minutos.'
company: 'Arista Networks'
role: 'Senior DevOps Engineer'
dateStart: '2023-08'
dateEnd: '2025-08'
tags: ['Automação', 'Infraestrutura']
techStack: ['Jenkins', 'Docker', 'Terraform', 'Ansible']
featured: false
order: 6
links: []
lang: 'pt'
---

## Problema

O provisionamento de novas VMs rodava em um único controlador Jenkins mantido manualmente, sem isolamento entre jobs e sem escalonamento fácil da capacidade de build quando várias solicitações de provisionamento chegavam ao mesmo tempo.

## Abordagem

Projetei um cluster Jenkins baseado em Docker com agentes isolados e distribuídos pelo globo, integrado ao Terraform para definição de infraestrutura e ao Ansible para configuração pós-provisionamento. Solicitações de provisionamento começaram a ser executadas de ponta a ponta sem handoffs manuais entre ferramentas.

## Impacto

- O tempo de provisionamento caiu para 15 minutos, vindo de um processo manual de várias horas.
- Os agentes de build são isolados por job, eliminando uma classe inteira de bugs do tipo "funciona só no controlador".
- A mesma abordagem de automação foi depois estendida para a renovação de chaves DKIM em servidores Postfix, reduzindo essa tarefa para menos de 5 minutos.
