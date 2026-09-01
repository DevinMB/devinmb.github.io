---
layout: default
title: About
description: Devin Butts — lead software engineer working on Kafka streaming platforms, API design, and agentic AI tooling, with a decade in finance behind it.
---

<p class="eyebrow">About</p>

# Hi, I'm Devin.

<p class="intro">Lead software engineer specializing in Kafka and API development. I design resilient, auditable data streams that move billions of records a day — in an environment where a wrong number isn't a bug report, it's a regulatory problem. A decade in finance is why I build that way, and building with AI agents is where a lot of that work is heading.</p>

## The finance decade isn't a detour

I spent years in senior finance roles — operational accounting and FP&A — before moving into software development. That background is the reason the pipelines are audit-grade rather than merely fast. Reconciliation, ledger thinking, and knowing what a number has to survive before somebody acts on it are uncommon instincts in infrastructure engineering, and they show up in nearly every design decision I make.

It also draws a line I find useful. Website-visit counts can be directionally correct; an account balance cannot. Knowing which kind of data you're holding is most of the job.

## The platform

I'm a Lead Software Engineer and Application Technical Lead on PNC's Data Streaming Platform, where I own the platform's technical direction and team leadership. The work I'd point at:

- **Scale.** Grew the platform from a few dozen internal users to carrying the online banking experience for millions of customers, at billions of records a day.
- **Throughput.** Improved pipeline throughput by 50–60%, including a foreign-key-join pattern the platform hadn't used before.
- **Resilience.** Took the cluster architecture from single-cluster to active-active bidirectional replication with reconciliation, so a region can fail without the ledger disagreeing with itself.
- **Cost and runtime.** Cut both on mainframe batch ingest, moving on-premises ETL onto Flink.
- **A shared language.** Aligned messaging to the BIAN standard so a financial event means the same thing to every team that consumes it.
- **Federation without chaos.** Around a hundred teams produce and consume on the platform. The interesting problem is letting them self-serve without either destroying governance or making everyone wait on me — build-for-them versus teach-them, decided case by case.
- **Mentoring.** I've taken engineers through full onboarding onto the platform, and I spend a good part of my week on API design and streaming architecture with the people around me.

## Building with agents

The AI work I care about isn't chatbots — it's tooling that does real work inside a codebase that has rules. An agentic builder that documents internal APIs, AI-assisted pull-request review, AI-driven vulnerability remediation, and a self-hosted MCP server that exposes my own tools to a model.

The genuinely open question isn't whether an agent can write code. It's what code review, coding standards, and governance are supposed to look like when part of the team isn't human — and in a regulated environment that question has teeth. I don't think anyone has a finished answer yet. I'd rather be one of the people working it out than one of the people waiting for it.

At home the same practice runs without a third-party API in the loop: a local LLM server on my own hardware, so the experiments stay mine.

## Outside of work

I'm a maker — homelab infrastructure, LoRa radio, and IoT sensors. Most of the [projects]({{ '/projects.html' | relative_url }}) on this site run on self-hosted hardware in my house rather than on a cloud bill. They're also where the ideas get tested before they show up at work: the streaming patterns, the AI tooling, and the habit of instrumenting something just to see what the data says.

### What I work with

- **Streaming & event-driven architecture** — Kafka, stream processing, Flink, and real-time data pipelines at scale.
- **APIs & services** — Java, Spring Boot, FastAPI, and resilient API design aligned to enterprise standards.
- **Applied AI** — agentic tooling, MCP servers, self-hosted LLM inference, and embedding pipelines.
- **Languages & data** — Java, Python, JavaScript/Vue/React; PostgreSQL, Oracle, MongoDB, and CouchDB.
- **Platform & observability** — OpenShift, Kubernetes, Docker, Jenkins, Dynatrace, and LogScale.
- **Finance** — FP&A, GAAP, financial reporting, and analysis in Power BI, SSRS, and Excel.

### Get in touch

Always happy to talk shop. Reach me by [email](mailto:devinmbutts@gmail.com), connect on [LinkedIn](https://www.linkedin.com/in/devinmb/), or browse my work on [GitHub](https://github.com/DevinMB).
