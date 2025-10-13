---
layout: page
title: "Projects"
permalink: /projects/
nav_order: 20
---

A curated list of active and recent work:

- **Soccer simulations app** — stage: in production, Bundesliga match/season simulation, transfering reinsurance practices to the real world
- **Healthcare memo pipeline** — stage: proof of concept, dictation to structured report pipeline, combining text and data using open domain LLMs both in public and private settings
- **FX TradeTech fair** — interim management, industry dialogue on ALM and representing local Fintech in Barcelona
- **Pension & ALM paper** — co-creating article on risk & performance sharing in pension funds

For more details, browse here:

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url }})
{{ project.excerpt }}
{% endfor %}