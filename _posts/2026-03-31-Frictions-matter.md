---
layout: post
title: "When Frictions Matter: From Models to Decision Systems"
excerpt: "Nothing looked wrong in the model. And yet, the system behaved differently. A SoccerSim Lab case on friction, admissibility, and decision confidence under real constraints."
date: 2026-03-31 09:00:00 +0100
tags: [risk, insurance, reinsurance,portfolio-thinking, decision-labs]
---

## Key Messages

- **Friction is real and structural.** It does not disappear — it reshapes decisions.  
- **Models remain valid.** But without system context, they become incomplete.  
- **Risk-adjusted metrics can mislead.** Structure changes even when metrics look stable.  
- **Heavy-tail environments amplify friction.** Effects become multiplicative, not marginal.  
- **Admissibility matters.** Not every acceptable risk can be executed.  
- **Diagnostics create clarity.** Making friction explicit increases decision confidence.  

---

Nothing looked wrong in the model.

And yet, the system behaved differently.

That was the starting point for this piece.

I have been using the SoccerSim Lab as a controlled decision laboratory — a simple way to translate market constraints into portfolio decisions and observe what happens when a measurable edge meets real execution constraints.

What I expected was a cleaner translation from model to portfolio.

What I observed was more uncomfortable:  
the edge remained, but the path changed.  
The model was not wrong — but the system was more constrained than assumed.

---

## The last mile matters

The first signals came from the last mile.

The optimal unconstrained allocation had to be adjusted to discrete stake sizes imposed by the counterparty. Some positions were simply cancelled. Performance did not disappear, but it emerged more slowly than expected. The P&L still revealed an edge — but the path was different.

<div class="figure-grid two-col">
  <figure class="post-figure">
    <img src="/assets/img/soccersim_last_mile_weights_budget10.png"
         alt="Budget 10: unconstrained versus constrained portfolio weights with cancelled positions below minimum stake"
         loading="lazy" decoding="async">
    <figcaption class="caption">
      Budget 10 — the last mile matters: optimal, unconstrained allocations break under minimum stake constraints (budget and appetite unchanged).
    </figcaption>
  </figure>

  <figure class="post-figure">
    <img src="/assets/img/soccersim_last_mile_weights_budget15.png"
         alt="Budget 15: unconstrained versus constrained portfolio weights with reduced but persistent distortions"
         loading="lazy" decoding="async">
    <figcaption class="caption">
      Budget 15 — scale softens the distortion, but does not remove it.
    </figcaption>
  </figure>
</div>

This was the first step toward a more augmented view of actuarial work: not just looking at the model, but at the system the model has to survive in.

---

## Friction is not theoretical

What looks like a technical detail in a model is very real in insurance.

Friction shows up in many forms:
- local capital and regulatory constraints  
- globally diverging capital models  
- underwriting realities such as line sizes, authority limits, and placement constraints  

These are not edge cases. They are part of the system. They quietly cancel positions and reshape P&L in the background. They directly affect what can be written, how much, and when.

In the SoccerSim Lab, this becomes visible in a controlled setting:
- small budgets create strong distortion from minimum sizes  
- larger budgets soften friction  
- but friction remains a function of risk and never fully disappears 

<div class="figure-grid two-col">
  <figure class="post-figure">
    <img src="/assets/img/soccersim_frontier_budget10_cvar95_pct_budget.png"
         alt="Budget 10 efficient frontier under constraints showing distortion in risk-return trade-off"
         loading="lazy" decoding="async">
    <figcaption class="caption">
      Budget 10 — efficient frontier distorted under constraints: the feasible decision space shifts.
    </figcaption>
  </figure>

  <figure class="post-figure">
    <img src="/assets/img/soccersim_frontier_budget15_cvar95_pct_budget.png"
         alt="Budget 15 efficient frontier under constraints showing partial recovery with scale"
         loading="lazy" decoding="async">
    <figcaption class="caption">
      Budget 15 — scale shifts the frontier, but does not restore the frictionless optimum.
    </figcaption>
  </figure>
</div>

Efficient frontiers become distorted.  
Sharpe ratios can still look attractive, while probability of total loss becomes real.
The underlying system has already shifted.

---

## In heavy-tail business, friction is not marginal

This was the harder part to accept.

I used to think of friction as a second-order effect — something that slightly reduces performance, but does not fundamentally change the outcome, maybe even diversifies away.

That assumption breaks in heavy-tailed and illiquid environments.

There, friction is not additive.  
It is multiplicative.  
It is systematic.

<div class="figure-grid two-col">
  <figure class="post-figure">
    <img src="/assets/img/soccersim_concentration_tail_10.png"
         alt="Budget 10 concentration versus tail risk showing structural exposure increase under constraints"
         loading="lazy" decoding="async">
    <figcaption class="caption">
      Budget 10 — concentration and tail risk move together under constraints.
    </figcaption>
  </figure>

  <figure class="post-figure">
    <img src="/assets/img/soccersim_concentration_tail_15.png"
         alt="Budget 15 concentration versus tail risk showing structural exposure even at higher scale"
         loading="lazy" decoding="async">
    <figcaption class="caption">
      Budget 15 — scale reduces noise, but structural exposure remains.
    </figcaption>
  </figure>
</div>

It interacts with:
- tail events  
- timing  
- capital lock-in  

Losses are fully realized.  
Gains are only partially captured.  
Capital cannot be redeployed freely.

The result is subtle.

Risk-adjusted metrics can remain stable — while the system becomes less robust. In modern systems, risk-adjusted ratios can mislead. And if the model remains incomplete, concentrations that should normally live inside the model need to be monitored outside it.

<div class="figure-grid two-col">
  <figure class="post-figure">
    <img src="/assets/img/soccersim_risk_adjusted_ratios_mislead_10.png"
         alt="Budget 10 Sharpe versus tail risk showing stable ratios despite structural deterioration"
         loading="lazy" decoding="async">
    <figcaption class="caption">
      Budget 10 — risk-adjusted ratios appear stable while structure deteriorates.
    </figcaption>
  </figure>

  <figure class="post-figure">
    <img src="/assets/img/soccersim_risk_adjusted_ratios_mislead_15.png"
         alt="Budget 15 Sharpe versus tail risk showing misleading stability of performance metrics"
         loading="lazy" decoding="async">
    <figcaption class="caption">
      Budget 15 — even with scale, ratios can mislead about underlying risk.
    </figcaption>
  </figure>
</div>

Frictions obscure the boundary between what is acceptable — and what is actually admissible.

---

## In practice, friction is often no longer treated as a first-class decision variable

Another uncomfortable realization followed.

We moved from a world where friction was priced to a world where it is assumed away.

Earlier frameworks made these effects explicit. Under Solvency II and IFRS 17, friction is no longer priced as a first-class quantity. At best, traces remain through proxies such as expenses, delayed profit emergence, and non-hedgeable uncertainty. But capital lock-in, deployment constraints, model divergence, and underwriting discreteness are not made explicit as decision variables.

These effects need to be made explicit in decisions.  
Otherwise, the consequence is subtle — but structural. 

Risk-adjusted metrics still look clean.  
Portfolios still appear efficient.  
But the boundary shifts.

<figure class="post-figure">
  <img src="/assets/img/soccersim_scale_reduces_friction_total_loss.png"
       alt="Effect of scale on probability of total loss showing that friction persists even with higher budget"
       loading="lazy" decoding="async">
  <figcaption class="caption">
    In this case, scale reduces friction — but does not remove it. Tail risk remains a structural constraint.
  </figcaption>
</figure>

Not every acceptable risk is an admissible strategy. In my case, both growth and careful review of the risk appetite beyond Sharpe stabilized the strategy — and ultimately compressed the signal.

If friction is not modeled explicitly, you risk remaining blind on one eye. Having an edge is not enough. Examining friction will tell whether growth, diversification, or shaping the market & underwriting discipline is the appropriate strategic option.

That is where the augmented actuary operates — not just on models, but on the system they live in.

---

## If you don’t see friction, look here

A final observation from the SoccerSim Lab.

Friction is not something you “see” in a model.  
It is something you recognize in the system.  
And it usually shows up indirectly — only then can it be understood.

A few symptoms to look for:
- leakage in P&L  
- underwriting diverges from plan  
- stable capital optimization, but weak realization  
- robust risk appetite — on paper  
- concentration and risk model out of sync  
- capital grows slower than expected  
- value management becomes ambiguous  
- models are not used for strategic options

These are not isolated issues. They are signals.

Signals that friction is present — but not explicitly modeled. And once you see them together, the implication is clear:

You are not optimizing your portfolio.  
You are optimizing a simplified version of it.

I ran this diagnostic on my own setup.

Ultimately, it increased confidence in both growth in scale and higher risk appetite. I selected a portfolio where frictions are under control ex ante: the two worlds remain close, the KPIs coexist, and trust increases (see table).

|                     | Unconstrained | Constrained |
|---------------------|--------------:|------------:|
| Expected return     | 21.8%         | **24.1%**   |
| VaR (95%)           | 37.2%         | 39.9%       |
| CVaR (95%)          | 51.3%         | 54.6%       |
| Probability of total loss | 0.0%    | 0.0%        |
| Sharpe (VaR)        | 0.59          | **0.60**    |
| Sharpe (CVaR)       | 0.42          | **0.44**    |
| Concentration       | 30.1%         | **37.3%**   |

That changed my perspective. 

Once friction was made explicit, the decision became more robust — not less. The model did not lose relevance. It gained context, and capital can be deployed with confidence.

Ultimately, higher volume and risk appetite will also improve the financial outcome of the strategy in the long run. 

---

## Executive takeaway

The point is not that models fail.

The point is that friction changes the structure of decisions.

In a frictionless world, optimization is clean.
In the real world, admissibility matters — risk appetite must hold in practice.

Careful analysis reveals the strategic options:
growth, diversification, or shaping the market through market building and underwriting discipline.

What this case changed for me was not the model —
but the confidence in the decision once friction had been made explicit.

For once, growth and increased risk appetite remunerate courage in the right place.

Confidence does not come from better models alone.
It comes from making the system explicit.

---

<p>
Tags:
{% for tag in page.tags %}
<a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
{% endfor %}
</p>