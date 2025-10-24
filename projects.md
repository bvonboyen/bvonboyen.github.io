---
layout: page
title: "Projects"
permalink: /projects/
nav_order: 20
---

A curated list of active and recent work:

Here’s the updated version with your refined phrasing added to the last item:

* **FX TradeTech industry fair** — *delivered*: represented local FinTech in Barcelona, led interim management and ALM dialogue — **expanded network and positioned offering in institutional FX ecosystem**
* **Soccer simulations app** — *in production*: Bundesliga match and season simulations, **transferring reinsurance industry knowledge to enable scouting integration, team & club management, sports betting, and journalism use cases**
* **Healthcare AI memo generator** — *proof of concept*: AI pipeline from dictation to structured memo using open-source LLMs — **showcased secure, private, automated documentation with higher efficiency and auditability**
* **Pension & ALM paper** — *hypothesis building*: co-creating article on risk- and performance-sharing in pension funds — **promoting generational fairness and actuarial standards in the Swiss pension industry**

For more details, browse here:

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url }})
{{ project.excerpt }}
{% endfor %}