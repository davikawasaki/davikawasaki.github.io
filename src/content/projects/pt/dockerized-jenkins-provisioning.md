---
title: 'Cluster Jenkins em Docker para provisionamento de VMs'
slug: 'dockerized-jenkins-provisioning'
summary: 'Caminho self-service de infraestrutura com Jenkins, Terraform e Ansible que reduziu para 15 minutos a criação de ambientes com VMs na nuvem.'
company: 'Arista Networks'
role: 'Senior DevOps & Site Reliability Engineer'
dateStart: '2023-08'
dateEnd: '2025-08'
tags: ['Self-service', 'Infraestrutura como Código', 'Experiência do Desenvolvedor']
techStack: ['Jenkins', 'Docker', 'Terraform', 'Ansible']
featured: false
order: 6
links: []
lang: 'pt'
---

## Problema

Novos ambientes de desenvolvimento dependiam de um controlador Jenkins mantido manualmente, handoffs entre pessoas e estado compartilhado entre jobs. O processo era lento, difícil de escalar e expunha detalhes de implementação da infraestrutura aos desenvolvedores.

## Abordagem

Projetei um cluster Jenkins baseado em Docker com agentes isolados e distribuídos e compus as definições de infraestrutura do Terraform com a configuração pós-provisionamento do Ansible. O Jenkins tornou-se o ponto de entrada self-service padronizado, permitindo que desenvolvedores solicitassem ambientes sem coordenar handoffs manuais entre ferramentas.

## Impacto

- O tempo de provisionamento caiu para 15 minutos, vindo de um processo manual de várias horas.
- Os agentes de build são isolados por job, eliminando uma classe inteira de bugs do tipo "funciona só no controlador".
- Os desenvolvedores ganharam um caminho repetível para criar ambientes, enquanto o time de plataforma manteve os controles de infraestrutura versionados.
