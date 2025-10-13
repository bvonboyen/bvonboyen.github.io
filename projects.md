---
layout: page
title: "Projects"
permalink: /projects/
nav_order: 20
---

A curated list of active and recent work:

- **Soccer simulations app** — Bundesliga match/season simulation, transfering reinsurance practices to the real world
- **Healthcare memo pipeline** — proof of concept, dictation to structured report pipeline, combining text and data, using LLMs
- **FX TradeTech fair** — short interim stint, continuing industry dialogue on ALM and representing local Fintech in Barcelona
- **Pension & ALM paper** — begin co-creating article on risk & performance sharing in pension funds

For more details, browse here:

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url }})
{{ project.excerpt }}
{% endfor %}