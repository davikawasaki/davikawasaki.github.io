---
title: 'Architecture Decision Record: promote microservices with pull requests to a GitOps repository'
slug: 'adr-gitops-promotion-pull-requests'
description: 'A sanitized Architecture Decision Record from an internal developer platform: every promotion is written as a pull request, and a controller reconciles the cluster from the repository.'
pubDate: 2026-08-24
tags: ['ADR', 'GitOps', 'Platform Engineering']
draft: false
lang: 'en'
---

This is a sanitized Architecture Decision Record. I wrote the original for an internal developer platform, and this version drops the names, the business rules and the proprietary details. The reasoning behind the decision is unchanged.

**Status:** accepted, and the platform runs in production.

## Context

A platform team gives support to about 20 product repositories, where each product repository has a GitOps repository with multiple services inside. Each service is served with Kustomize overlays, where each overlay is one directory for one environment. Each overlay pins the exact image version(s) for that environment. The ArgoCD controller in the cluster reconciles the live state with these overlays.

The repository holds the desired state, and the controller compares it with the live state every few seconds and changes the live state until the two agree. Promoting a microservice therefore means changing a pinned image tag in the GitOps repository. The open question was never the content of that change, but who is allowed to write it and through which mechanism.

What forced the decision was the seamless usage of a dashboard, not the deploy path itself. Developers read deployment state from a static page that the continuous integration system rebuilt after every merge.

That page had three problems: it was always one rebuild behind the live state, it never reacted to an event, and it assumed a single image per service, so anything with sidecars showed incomplete data.

Sometimes people fell back to reading the overlay files directly from the GitOps repository, which is slow and error-prone at exactly moments when accurate data matters most. Every fix we considered needed a write path for the platform, so the write path had to be decided first.

## What the decision had to preserve

- **A single writer to the cluster.** Reconciliation is a guarantee while nothing else changes the live state.
- **Audit data for free.** The platform has to show who promoted what and when, without an extra separate audit system.
- **An ordinary rollback.** Rolling back can't be a special platform feature and shouldn't be strict to Kubernetes rollouts.
- **A freeze that teams can freely move.** A freeze should stop automatic movement without blocking someone who is repairing an incident.
- **Services with several images.** Those images within a service must have the ability to move independently.

## The options

### Option 1. The platform writes to the cluster

A dashboard action changes live state through the Kubernetes API. We rejected this because it creates a second writer: the controller reverts anything it did not write, and it does so silently, so the person who made the change never finds out. This option also requires stakeholders to have certain Kubernetes RBAC access and to know the tool, which isn't recommended or acceptable in some cases.

The repository also stops describing what actually runs, which means audit and rollback have to be rebuilt inside the platform.

### Option 2. The platform commits to the default branch

This keeps a single writer and gives git history for free, but a direct commit bypasses the branch protection rules and never triggers the checks that a proposed change would run.

It also leaves nothing to approve, comment on or hold, so a possible freeze becomes a flag only inside the platform instead of something visible in the repository where the change lands.

### Option 3. The platform opens a pull request

The platform creates a branch, commits the new image tag and opens a pull request against the GitOps repository. The usual review rules and checks apply, the merge (auto-merge or not) triggers the deployment, and the controller reconciles the cluster. This is the option we chose.

### Option 4. A watcher promotes automatically

A controller notices a new build and updates the overlay on its own. We rejected this as the default path, because teams wanted a person on every promotion to production, and because automatic movement makes the freeze rules harder to explain. The automatic promotion option is opt-in (granularly or not) through schedules.

## The decision

**The platform opens a pull request to the GitOps repository on the user's behalf.** It does not write to the cluster, and it does not push to a default branch. A service with several images may select which ones go inside one pull request, so the related containers can move separately and checks run once.

Two further decisions follow from this one.

### The read model is a mirror you can rebuild

A dashboard that reads the repository live is too slow, so the platform keeps a projection of the deployment state and updates it from repository push events via webhooks. One rule keeps that projection honest: every cache needs a cheap mechanism to get a full refresh.

A single function rebuilds the complete state of a project from the current head of its repository, and four recovery cases all route through it:

- a marker missing on the first run;
- a marker pointing at a commit that is no longer in the history;
- a force push;
- a difference too large for an incremental update.

A scheduled job calls the same feature every night. The projection only ever shows the present state rather than a replay of the history, deferred to git history itself.

### Freshness is the last processed commit

The platform does not push state to browsers. It stores the last commit it processed for each repository and sends that commit as an entity tag, the HTTP ETag header, so clients make conditional requests and get a "not modified" answer from a single read until the commit changes.

That is cheap enough to poll every few seconds and needs no sticky sessions, and it has one property that a push mechanism lacks: the freshness signal is also the correctness marker of the projection, so a stale dashboard and a stalled mirror cannot disagree.

### Access follows version control

Someone can only read the state of a project if they have access to the corresponding repository. The platform checks this against the version control system and keeps the answer for a short time, so there is no second permission model to drift out of sync.

## Consequences

### What we gained

- Deployment history is the repository history: every promotion has an author, a timestamp, a difference and a review.
- A rollback is a revert of a merged change, an operation every engineer already knows, and one that still works when the platform is down.
- A freeze lives in the same repository. It stops automatic movement but still allows a reviewed manual change.
- The blast radius is small. The platform's credentials can open a pull request and nothing else, and it holds no credential that can change the cluster.
- Self-service is real: a team promotes its own service without a Platform Engineer and without a meeting, because the deploy path and the audit trail are the same object.

### What it cost

- Promotion is sort of slower, since it includes the checks and the review. We accepted that, because the review is the control that gives the audit trail its value, besides protecting the production environment.
- The projection is a distributed systems problem rather than a simple cache. Two push events for the same project must not run at the same time, so the platform takes a short lease per project and returns an error under contention, letting the sender send the event again. This is the largest piece of accidental complexity the decision brings.
- The platform has to work out what changed between two commits, and handle every complex case: duplicate events, events out of order, lost events, force pushes and truncated comparisons. Each of them falls back to a daily rebuild.
- Operators still edit the repository by hand, so the platform has to treat the repository as the source of truth for its own actions.

## What to keep in a similar design

The tooling is not the interesting part. Two properties are: the deploy interface and the audit log are the same artifact, and every derived view has a one-step rebuild path. Keep those two and you can replace the dashboard or the controller without breaking the promotion path.
