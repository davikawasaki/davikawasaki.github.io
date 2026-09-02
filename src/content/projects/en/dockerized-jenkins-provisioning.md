---
title: 'Dockerized Jenkins cluster for VM provisioning'
slug: 'dockerized-jenkins-provisioning'
summary: 'A self-service infrastructure path built with Jenkins, Terraform and Ansible that reduced cloud VM environment setup to 15 minutes.'
company: 'Arista Networks'
role: 'Senior DevOps & Site Reliability Engineer'
dateStart: '2023-08'
dateEnd: '2025-08'
tags: ['Self-service', 'Infrastructure as Code', 'Developer Experience']
techStack: ['Jenkins', 'Docker', 'Terraform', 'Ansible']
featured: false
order: 6
links: []
lang: 'en'
---

## Problem

New development environments depended on a hand-maintained Jenkins controller, manual hand-offs and shared job state. The process was slow, difficult to scale and exposed developers to infrastructure implementation details.

## Approach

I designed a Docker-based Jenkins cluster with isolated, distributed agents and composed Terraform infrastructure definitions with Ansible post-provision configuration. Jenkins became the standard self-service entry point, allowing developers to request an environment without coordinating manual hand-offs between tools.

## Impact

- Provisioning time dropped to 15 minutes, down from a multi-hour manual process.
- Build agents are isolated per job, removing a whole class of "works on the controller" bugs.
- Developers gained a repeatable path for creating environments while the platform team retained versioned infrastructure controls.
