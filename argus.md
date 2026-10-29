---
layout: default
title: Argus
wide: true
description: Argus, the monitor behind my self-running homelab. Every service checked every minute, and every update's path to production in one place.
---

<p class="eyebrow"><a href="{{ '/projects.html' | relative_url }}">Projects</a> / Argus</p>

# Argus

<p class="intro">Argus watches a two-site homelab: about 30 services, checked every minute, and the pipeline that keeps them patched. It is quiet by design. It only asks for a person when one is needed.</p>

<section class="argus-why">
  <h2>Why it matters</h2>
  <p>Every app and server needs regular security updates. Done by hand, that is hours of careful, repetitive work each week, and skipping it is how systems get breached. Here it happens on its own: each update is tested before it goes live, every machine is backed up or snapshotted before it changes, and anything that breaks is rolled back automatically.</p>
  <p>Argus is the watchtower over all of it, named for the hundred-eyed giant of Greek myth who never slept all at once. It checks every service every minute, shows what changed and why, and only wakes me when a decision really needs a person. It is the same discipline a company's IT team follows, running unattended at home.</p>
</section>

<figure class="shot">
  <img src="{{ '/assets/pictures/argus/argus-overview.jpg' | relative_url }}" alt="Argus overview: a ring of 29 ticks, 29 of 29 checks up, 'All quiet', and nothing needing attention" loading="lazy">
  <figcaption>
    <strong>Everything at a glance.</strong>
    One tick per service. A check that fails three times in a row is down, and the critical ones page my phone. "All quiet" is the normal state, so anything else stands out at once.
  </figcaption>
</figure>

<figure class="shot">
  <img src="{{ '/assets/pictures/argus/argus-runs.jpg' | relative_url }}" alt="Scheduled runs: a week strip with the Monday, Tuesday and Thursday patch runs, and a card for each run with its steps and last result" loading="lazy">
  <figcaption>
    <strong>Patching on a calendar, with no one at the keyboard.</strong>
    Once a week every VM, container and server gets its updates, one machine at a time: a snapshot or backup first, a health check after, and an automatic rollback if anything breaks. Each card says in plain words what the run covers, the steps it takes and how it went last time. A run that fails or does not happen pages me.
  </figcaption>
</figure>

<figure class="shot">
  <img src="{{ '/assets/pictures/argus/argus-services.jpg' | relative_url }}" alt="Every service by group, one compact line each: apps, home services, the data platform, the machines and the monitoring, all up" loading="lazy">
  <figcaption>
    <strong>Healthy is one line.</strong>
    Each service that is fine takes a single line, grouped by what it is. Only a service with a problem gets a full card with its error, so a problem is the first thing you see.
  </figcaption>
</figure>

<figure class="shot">
  <img src="{{ '/assets/pictures/argus/argus-check.jpg' | relative_url }}" alt="A check's detail: its settings, the six steps its newest update took to production, and its up and down history" loading="lazy">
  <figcaption>
    <strong>Why it changed, not just that it did.</strong>
    Each service shows how its newest update reached production: proposed, merged, built and security-scanned, deployed, healthy. Each step comes from a real event, never assumed. Below that, every time it went up or down.
  </figcaption>
</figure>

<figure class="shot">
  <img src="{{ '/assets/pictures/argus/argus-updates.jpg' | relative_url }}" alt="The Updates view: 'All 11 apps up to date', a five-lane board from Testing to Live with every app in the Live lane, and one plain-language row per app" loading="lazy">
  <figcaption>
    <strong>Updates that apply themselves.</strong>
    One sentence says whether anything needs me. A board shows which stage each app is in: testing, merging, building, deploying or live. Each app then gets one plain sentence on where it is. Routine updates go all the way to live without me; only major version jumps wait for a person.
  </figcaption>
</figure>

<section class="argus-how">
  <h2>How it fits together</h2>
  <ul>
    <li><strong>Argus</strong> runs the checks, receives the scheduled jobs' reports, and serves a read-only page. Python and FastAPI, a React front end, one container.</li>
    <li><strong>The patching</strong> is done by Ansible on a schedule: snapshot, update, health check, roll back on failure. Each run reports to Argus.</li>
    <li><strong>The paging</strong> is done by Prometheus and Alertmanager at both sites, each watching the other, so even Argus going down gets noticed.</li>
  </ul>
  <p class="argus-note">Screenshots from the live instance; private network addresses are hidden.</p>
</section>
