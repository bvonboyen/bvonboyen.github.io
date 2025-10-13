---
layout: page
title: "Projects"
permalink: /projects/
nav_order:20
---

A curated list of active and recent work:

- **Soccer simulations app** — Bundesliga match/season simulation, transfering reinsurance to the real world
- **Healthcare memo pipeline** — dictation to structured report pipeline using LLMs
- **FX TradeTech fair** — industry dialogue, representing local Fintech in Barcelona
- **Pension & ALM paper** — co-creating article on risk & performance sharing

For more details, browse here:

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url }})
{{ project.excerpt }}
{% endfor %}