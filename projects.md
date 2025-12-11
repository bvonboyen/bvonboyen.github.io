---
layout: page
title: "Projects"
permalink: /projects/
nav_order: 20
---

## TL;DR – why these projects?

Across finance, sport, healthcare, and pensions, organisations face a shared pattern:  
**key decisions behave like ALM problems — uneven and asymmetric outcomes, portfolio effects, allocation choices, and repeated budget-and-appetite decisions aimed to optimise long-term outcomes**

My projects explore one question:

> **How can actuarial discipline and modern AI systems turn these decision problems into clear, defensible workflows — across domains?**

---

## How these projects connect

<div class="infographic-grid">

  <div class="card info-card">
    <h3>Domains</h3>

    <p><strong>ALM-style decisions</strong><br>
    Capital markets · Pensions · Professional sport</p>

    <p style="margin-top: 0.6rem;"><strong>Technical reporting</strong><br>
    Healthcare documentation — schema-first, compliant, auditable.</p>
  </div>

  <div class="card info-card">
    <h3>Engine</h3>
    <p>
      Actuarial models, simulations, and AI agents transform data and expert judgement
      into structured, testable decision logic that scales across domains.
    </p>
  </div>

  <div class="card info-card">
    <h3>Outcomes</h3>
    <p>
      Clear trade-offs, measurable performance, and decision workflows that let experts
      focus on judgement — not on reconciling tools, systems, or fragmented data.
    </p>
  </div>

</div>

---

## Current projects

A curated list of active and recent work, their status, and my promise as a partner.

<div class="project-grid">

  <div class="card project-card">
    <h3>
      FX TradeTech industry fair
      <span class="status-badge status-delivered">✅ Delivered</span>
    </h3>
    <p>You lead a (Fin-)Tech or consulting firm and want to connect sales, analytics, transformation, and quantitative insight – but need a partner who can turn complex models into clear, commercial results.</p>
    <p>I helped AAACCELL do exactly that as interim manager at FX TradeTech Barcelona: shaping industry dialogue, integrating real financial intelligence into the product and growth story, and linking quant, sales, and ALM thinking.</p>
    <p><strong>Promise:</strong> I bridge strategy, modelling, and market dialogue so your quant capability becomes a growth driver, not a side note.</p>
  </div>

  <div class="card project-card">
    <h3>
      Soccer simulations app
      <span class="status-badge status-live">🔵 In production</span>
    </h3>
    <p>You lead a club that wants to succeed both on the pitch and financially – but it is hard to make both measurable and keep everyone aligned.</p>
    <p>My system makes hidden team strengths visible, explains results, and strengthens your in-house analytics with artificial intelligence. It connects scouting, coaching, and finance into one shared decision framework.</p>
    <p><strong>Promise:</strong> a lightweight, transparent, and explainable engine that supports decisions – without forcing you to give up your football identity.</p>
  </div>

  <div class="card project-card">
    <h3>
      Healthcare AI memo generator
      <span class="status-badge status-poc">🟡 Proof of concept</span>
    </h3>
    <p>You manage a medical practice or clinic that needs accurate, compliant documentation – yet each report costs time and focus and pulls you away from your core competency.</p>
    <p>My Swiss AI-driven memo generator transforms dictations into structured, verifiable medical summaries in seconds. Speech, data, and templates in one secure, auditable workflow.</p>
    <p><strong>Promise:</strong> automate documentation without losing control over quality, compliance, or data sovereignty.</p>
  </div>

  <div class="card project-card">
    <h3>
      Pension &amp; ALM paper
      <span class="status-badge status-idea">🟣 Hypothesis building</span>
    </h3>
    <p>You lead a pension fund or financial institution that wants to balance returns, fairness, and sustainability – but aligning all stakeholders around one framework is hard.</p>
    <p>Together with my co-author, I am developing an ALM and risk-sharing framework that combines actuarial rigor, performance analytics, and modern communication into one coherent story of shared value.</p>
    <p><strong>Promise:</strong> turn complex balance-sheet dynamics into a shared narrative of generational fairness and actionable strategy.</p>
  </div>

</div>

---

## Status

<div class="card status-legend">

  <h3>Legend</h3>
  <p>
    <span class="status-badge status-delivered">✅ Delivered</span>
    Completed, stable outcome
  </p>
  <p>
    <span class="status-badge status-live">🔵 In production</span>
    Running, live project
  </p>
  <p>
    <span class="status-badge status-poc">🟡 Proof of concept</span>
    Prototype validating value
  </p>
  <p>
    <span class="status-badge status-idea">🟣 Hypothesis building</span>
    Early-stage research / paper submission
  </p>
</div>


---

## More details

For more details on individual projects, browse here:

{% for project in site.projects %}
### [{{ project.title }}]({{ project.url }})
{{ project.excerpt }}
{% endfor %}

<style>
  .infographic-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0 2rem 0;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    margin: 1.5rem 0 2rem 0;
  }

  .project-card h3 {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }

  .status-legend {
    margin-top: 2rem;
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.15rem 0.55rem;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 999px;
    border: 1px solid #d0d0d0;
    background: #f8f9fa;
  }

  .status-delivered {
    background: #e6f6ef;
    border-color: #bcded1;
    color: #0f5132;
  }

  .status-live {
    background: #e7f1ff;
    border-color: #bfd3ff;
    color: #084298;
  }

  .status-poc {
    background: #fff7df;
    border-color: #f2df9c;
    color: #856404;
  }

  .status-idea {
    background: #f3edff;
    border-color: #d7cfff;
    color: #4b3e8a;
  }

  .info-card p {
    margin-bottom: 0;
  }
</style>
