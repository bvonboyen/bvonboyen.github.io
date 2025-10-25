---
layout: page
title: "Projects"
permalink: /projects/
nav_order: 20
---

A curated list of active and recent work:

Here’s the updated version with your refined phrasing added to the last item:

* **FX TradeTech industry fair** — *delivered*: represented local FinTech in Barcelona, led interim management and ALM dialogue — **expanded network and positioned offering in institutional FX ecosystem**
* **Soccer simulations app** — *in production*: You lead a club that wants to succeed both on the pitch and financially — but you know how hard it is to make both measurable. I help you change that: with **a system that makes hidden team strengths visible, explains results, and strengthens your in-house analytics with artificial intelligence**. It connects scouting, coaching, and finance into one shared decision framework — lightweight, transparent, and immediately effective. If you want to make your organisation data-driven without losing its identity, let’s talk.
* **Healthcare AI memo generator** — *proof of concept*: You manage a medical practice or clinic that needs accurate, compliant documentation — yet every report costs time and focus. I help you change that: with **a Swiss AI-driven memo generator that transforms dictations into structured, verifiable medical summaries in seconds**. It unites speech, data, and templates into one seamless workflow — secure, auditable, and ready for your system. If you want to automate without losing control over quality and compliance, let’s talk.
* **Pension & ALM paper** — *hypothesis building*: co-creating article on risk- and performance-sharing in pension funds — **promoting generational fairness and actuarial standards in the Swiss pension industry**

For more details, browse here:

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url }})
{{ project.excerpt }}
{% endfor %}