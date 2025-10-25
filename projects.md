---
layout: page
title: "Projects"
permalink: /projects/
nav_order: 20
---

A curated list of active and recent work, their status and my promise (more details below):

* **FX TradeTech industry fair** — *delivered*: You lead a (Fin-)Tech or consulting firm that wants to connect sales, analytics, transformation and quantitative insight — but need a partner who can turn complex models into clear, commercial results. I helped AAACCELL doing that: by integrating real financial intelligence into your product and growth story. From leading industry dialogue at FX TradeTech Barcelona as interim manager to building quant-driven ALM frameworks for you, I bridge strategy, modelling, and market dialogue. If you’re ready to scale your capabilities and onboard **a partner who brings proven projects and execution strength**, have a look at below project card, review credentials and call me - I listen to your case.
* **Soccer simulations app** — *in production*: You lead a club that wants to succeed both on the pitch and financially — but you know how hard it is to make both measurable, want to keep your focus on your team's results and wonder how to build a leading edge. I get you there: with **a system that makes hidden team strengths visible, explains results, and strengthens your in-house analytics with artificial intelligence**. It connects scouting, coaching, and finance into one shared decision framework — lightweight, transparent, and immediately effective. If you want to make your organisation data-driven without losing its identity, have a look at project card below, read my articles, and let's meet.
* **Healthcare AI memo generator** — *proof of concept*: You manage a medical practice or clinic that needs accurate, compliant documentation — yet every report costs time and focus, and this pain is distracting you from your core competency. I bring you relief: with **a Swiss AI-driven memo generator that transforms dictations into structured, verifiable medical summaries in seconds**. It unites speech, data, and templates into one seamless workflow — secure, auditable, and ready for your system. If you want to automate without losing control over quality and compliance, let's evaluate your business case. There is soon more to come on this homepage.
* **Pension & ALM paper** — *hypothesis building*: You lead a pension fund or financial institution that wants to **balance returns, fairness, and sustainability — but know how hard it is to align all stakeholders around one framework**. My co-author and I have a solution: by integrating actuarial rigor, performance analytics, and modern communication into one coherent story of shared value. Through our Pension & ALM paper on risk- and performance-sharing, we promote generational fairness and transparent standards in the Swiss pension landscape. If you’re ready to turn complex balance-sheet dynamics into actionable strategy and dialogue, let's assess your case or wait for the publication.

For more details, browse here:

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url }})
{{ project.excerpt }}
{% endfor %}