---
title: 'Dockerized Jenkins cluster for VM provisioning'
slug: 'dockerized-jenkins-provisioning'
summary: 'Docker-based Jenkins cluster design and deploy to provision VM instances via Terraform and Ansible, cutting provisioning time to 15 minutes.'
company: 'Arista Networks'
role: 'Senior DevOps Engineer'
dateStart: '2023-08'
dateEnd: '2025-08'
tags: ['Automation', 'Infrastructure']
techStack: ['Jenkins', 'Docker', 'Terraform', 'Ansible']
featured: false
order: 6
links: []
lang: 'en'
---

## Problem

New VM provisioning ran through a single, hand-maintained Jenkins controller with no isolation between jobs and no easy way to scale build capacity when several provisioning requests landed at once.

## Approach

I designed a Docker-based Jenkins cluster with isolated and globally spread agents, then chained it to Terraform for infrastructure definitions and Ansible for post-provision configuration. Provisioning requests started to run end-to-end without manual handoffs between tools.

## Impact

- Provisioning time dropped to 15 minutes, down from a multi-hour manual process.
- Build agents are isolated per job, removing a whole class of "works on the controller" bugs.
- The same automation approach was later extended to DKIM key renewal for Postfix servers, cutting that task's runtime under 5 minutes.
