---
title: 'How to delete cloud artifact registry container images after one year excluding live ones'
slug: 'deployment-aware-image-retention'
description: 'A registry policy based on age and position can delete an image that production still pins. This cleanup job reads the deployment state first, stops when its input is unreliable, and publishes its plan days before it deletes anything.'
pubDate: 2026-08-31
tags: ['SRE', 'Kubernetes', 'Reliability']
draft: false
lang: 'en'
---

This is a sanitized write-up of a cleanup system I designed for the container registries of an internal platform. The names and the business rules are gone, but the failure context and the design carry over to other systems.

## The failure

Container registries offer retention policies, and the usual one reads like this: keep the 10 most recent versions of each image, and delete anything older than 365 days. Both conditions are about position and age, and neither of them can see which images are actually running.

That is safe for a service that deploys often, because the version in use always stays near the top of the list. It is not safe for a service that rarely deploys, where the failure arrives slowly, in six steps:

1. The team deploys the service once. It works, and nobody touches it for a year.
2. The build system keeps producing new versions of the image anyway, since a base image change or a nightly job is enough to create one.
3. The version in use drops below the floor of 10 versions, and then passes 365 days old.
4. The registry deletes the exact version that production pins.
5. Nothing happens. The running pods already have the image on the node, so they never pull it again. No alarm fires, and the dashboard stays green.
6. Weeks or days later some resource is renewed — a node replacement, a scale-up, a new pod, a rollback — and the pull fails.

The gap between step 4 and step 6 is the cornerstone. The deletion is silent, and the alarm arrives late and far from its cause. The incident that exposes the failure is usually the incident where you needed the rollback. A retention policy that cannot see the deployment state is a scheduled outage with an unknown delay.

## The decision

Use the **deployment state** instead of only the position in a list.

A pinned version is one that a Kubernetes manifest names exactly, so the cluster pulls that version and no other.

Before the job builds a plan, it builds an index of pinned versions from two sources:

- every image version in an environment overlay in the GitOps repositories;
- every image version in the Kubernetes manifests for temporary environments, such as a preview environment for a pull request. That state lives somewhere else and is easy to forget.

The job never deletes a version in that index, regardless of how old it is or how many newer versions exist.

For each image it sorts the versions from newest to oldest, then protects a group at the top of that sequence:

```text
[ ...newer versions... , oldest pinned version , ...N older versions... ]
  \_____________________________________________/  \__________________/
    pinned versions and all versions after them     margin for rollback
```

- Everything newer than the oldest pinned version is protected, which covers three environments sitting on three different versions.
- A fixed number of versions below that point is protected too, so a rollback to the previous version still has the available image.
- Anything below the protected group is a candidate, but it is only deleted if it is also older than the retention window: for example, 365 days for a production registry, 90 days for a temporary one. Two conditions have to hold before a deletion, not one.

If nothing pins an image, the protected group falls back to the usual floor of 10 versions, which makes the new policy a superset of the one it replaces.

There's one edge case that can't be expressed by a policy: shared images that live inside a single team registry. The index is keyed by the path in the registry rather than by the team that declared the pin, so when one team builds a shared image and three others pin it, the index must protect that image for all of them.

## How the job fails closed

A job that deletes data needs a failure model before it reaches production. Failing closed means it stops and causes no damage; failing open means it carries on and might cause damage. This job always has to fail closed, and the useful distinction is between an **abort** and a **containment**.

**One condition aborts the whole run: an empty index of pinned versions.** An empty index means the read of the deployment state failed, not that the cluster is running nothing. Accept it and the job treats every version in every registry as unpinned, so the plan is not slightly wrong but meaningless, and no part of it is safe to execute. The job stops, deletes nothing and exits with an error.

Every other failure shrinks the run instead of stopping it:

- **A project that contributed no pins is skipped.** Unreadable state for one project is usually a partial read failure, while a project with no deployments at all is far rarer. Skipping caps the outcome at "no cleanup for that project" instead of "delete every image in that project".
- **A project with a Kubernetes manifest the job cannot parse is skipped.** A broken manifest must never look like a manifest with no pins, or the short 90-day window can delete the image of a live temporary environment.
- **An image whose version list cannot be read is skipped.** The client has already retried the transient errors, the full read is more than a thousand sequential requests, and the job keeps no state to resume from, so one bad response should not waste the whole pass. This skip is safe in the right direction, because the job then deletes less. A pinned version the job cannot read is the opposite case, since it fails open, and that one stays fatal.
- **A plan larger than the cap is trimmed**, keeping the oldest candidates. Aborting on size deadlocks: a large backlog of old versions never shrinks, because every run refuses it the same way. With a cap, the backlog drains over several runs.

Each of these cases emits its own event, and the observability monitors alert on every one of them. "The job succeeded" is not the interesting signal; how much work it refused to do is.

## The last check before a deletion

The plan phase re-reads the deployment state after building the plan and drops anything that became pinned while the plan was being built. That closes the gap between reading the version lists and producing the plan, but it ends before the first deletion.

The delete phase is a different problem: thousands of sequential requests over tens of minutes, long enough for a plan that was correct at the start to become wrong halfway through.

So the job keeps re-reading the deployment state at short intervals throughout the delete phase, and checks each version against fresh state in the moment before deleting it. That check is the last safeguard that happens before images are deleted.

If it finds a pinned version, the job skips it, reports it and carries on. Carrying on is safe for one reason: every version after it gets the same check, so nothing the check protects can slip through. Stopping is also expensive, since on a possible monthly schedule it may cost a full month of cleanup to protect a version the check had already protected.

The general rule: check during planning to get a good plan, and check again immediately before the destructive operation to get a correct result. Any gap between those two checks is a bug, and a deployment landing inside that gap will find it.

## The notice period for engineers

The job may delete once a month or once a week, and N preview (aka dry-runs) runs come before it during the preceding week. Each preview builds the full plan and applies every guard, and deletes nothing.

That sequence is the part of the design aimed at engineers. The plan is visible for days before anything is removed, an abort shows up well before the run that deletes, and a team that spots one of its own images in a preview has time to pin that image or to speak up. It also makes the first run of a new policy a smaller event, because everyone has already seen N previews of it.

## What carries over to other systems

- Retention should be a function of the deployment state, not of the position in a list. Age grants permission to delete; it is not a reason to delete.
- Decide the failure model first, and let it be asymmetric: stop the run when the input is unreliable, and shrink the run when only the output is incomplete.
- The safety check that matters is the one immediately before the destructive operation.
- A destructive job that publishes its plan for a few days lets people audit the automation instead of blindly trusting it.
