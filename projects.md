---
layout: page
title: "Projects"
permalink: /projects/
nav_order: 20
---

A curated list of active and recent work:

- **FX TradeTech industry fair** — stage: delivered, interim management, industry dialogue on ALM and representing local Fintech in Barcelona
- **Soccer simulations app** — stage: in production, Bundesliga match/season simulation, transfering reinsurance practices to the real world
- **Healthcare AI memo generator** — stage: proof of concept, dictation to structured report memo, combining unstructured voice and structured data using open domain LLMs both in private agents
- **Pension & ALM paper** — stage: hypothesis building and mobilization, co-creating article on risk & performance sharing in pension funds

For more details, browse here:

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url }})
{{ project.excerpt }}
{% endfor %}