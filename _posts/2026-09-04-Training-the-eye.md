---
layout: post
title: "The Augmented Actuary: Training the Selection Eye"
excerpt: "A portfolio optimization exercise exposed a familiar insurance problem: when risk becomes the dominant lens, selection can drift toward risk avoidance. The technical solution matters. So does changing the problem."
date: 2026-09-04 09:00:00 +0100
tags: [risk, insurance, reinsurance, portfolio-thinking, decision-labs]
---

## Key Messages

* **Risk can become the selection anchor.** PML and exposure management are essential, but can turn risk management into risk avoidance.
* **Professional judgement is not immune to bias.** I deliberately train my eye because even a technically sound decision can leave value on the table.
* **The technical solution is necessary, not sufficient.** Risk appetite and portfolio selection need an explicit, systematic definition.
* **Friction changes the opportunity set.** When smaller opportunities become uneconomic, diversification disappears with them.
* **Two solutions emerge.** Improve selection and risk appetite; reduce friction and expand the opportunities available for capital deployment.

---

I deliberately train my eye.

Not only by building models, but by putting myself in situations where I have to make the decisions those models are supposed to support.

Recently, I used a portfolio optimization problem for exactly that purpose. The constraints were implemented, the efficient frontier was known, and the optimizer could generate portfolios across different levels of risk aversion.

The task was simple: **select the portfolio.**

I realized that I had not defined that selection systematically. I knew the frontier, but I was still relying partly on judgement to decide where to operate.

That exposed something I regularly see in insurance.

---

## When risk becomes the anchor

As risk aversion increased, the optimizer moved capital away from tail exposure and concentration.

**Portfolio characteristics across risk-aversion levels**

|   λ_R | Expected return |   Risk | P(total loss) | VaR 95% | CVaR 95% | Concentration |
| ----: | --------------: | -----: | ------------: | ------: | -------: | ------------: |
| 0.000 |           5.377 | 20.000 |         17.1% |  20.000 |   20.000 |         0.421 |
| 0.312 |           2.459 |  6.837 |          2.7% |   5.568 |    6.837 |         0.442 |
| 1.250 |           2.771 |  7.998 |          1.3% |   6.488 |    7.998 |         0.407 |
| 2.812 |           2.265 |  8.034 |          2.8% |   6.948 |    8.034 |         0.390 |
| 5.000 |           2.298 |  9.193 |          0.4% |   7.810 |    9.193 |         0.331 |

The technical result is reasonable. But I could see my own selection becoming anchored around avoiding the worst outcome.

That is familiar territory for an insurer.

We look at PMLs, accumulations, concentrations, solvency and stress scenarios because our first responsibility is survival. Yet there is a danger when that lens becomes the whole decision framework.

The question can quietly change from **"What is the best use of capital within our risk appetite?"** to **"How do I avoid the exposures that make the risk numbers uncomfortable?"**

That is the risk bias I see in pure risk and exposure management.

Risk tells us where we are vulnerable. It does not, by itself, tell us whether the risk is worth taking.

---

## Step back from the model

The technical problem was therefore not simply to choose a value of λ_R.

It was to define **optimality**.

If the efficient frontier is continuous, the selection rule should be continuous too. I want to understand the marginal value of capital and how quickly it deteriorates:

* Where does another unit of capital stop creating sufficient value?
* Where does additional risk become increasingly expensive?
* Where does the slope of the value-risk surface change materially?

That gives risk appetite an economic meaning rather than making it a parameter chosen because the resulting portfolio looks comfortable.

But before solving that problem, I needed to ask a more basic question:

**Why is the opportunity set in this position in the first place?**

---

## Friction changes the opportunity set

I compared the portfolio without the frictional costs of deploying capital with the portfolio after those costs were introduced.

**Portfolio characteristics after frictional costs**

|   λ_R | Expected return |   Risk | VaR 95% | CVaR 95% | Concentration |
| ----: | --------------: | -----: | ------: | -------: | ------------: |
| 0.000 |           4.621 | 18.900 |  18.541 |   18.900 |         0.296 |
| 0.312 |           3.161 | 12.680 |  11.160 |   12.680 |         0.212 |
| 1.250 |           1.709 | 11.348 |   9.486 |   11.348 |         0.272 |
| 2.812 |           1.646 | 11.234 |   9.515 |   11.234 |         0.147 |
| 5.000 |           2.220 | 10.822 |   8.975 |   10.822 |         0.230 |

The friction had eliminated many smaller opportunities.

That matters because fewer viable positions mean less diversification. Less diversification makes the remaining portfolio more sensitive to risk constraints, which can then reinforce the original tendency toward avoidance.

The optimizer was not necessarily failing.

**The opportunity set had already been damaged before the optimizer made its decision.**

This is a familiar insurance problem too. Line sizes, authority limits, placement constraints, capital requirements, local restrictions and operating costs all influence what is actually admissible.

An exposure can be attractive in isolation and still be uneconomic to write.

---

## The two solutions

This leaves me with two different responses.

**First: improve the technical decision.**

Define risk appetite explicitly and implement selection systematically. Instead of choosing a λ_R heuristically, use the continuous value-risk surface and a marginal-value criterion to identify the operating point.

**Second: change the economics of the opportunity set.**

Reduce frictional costs and make smaller opportunities viable. Improve execution, reduce minimum deployment costs, automate processes and increase scalability. Where that is not enough, find new opportunities for capital deployment and diversify the portfolio.

The first improves **how we select**.

The second changes **what we can select from**.

---

## Training the selection eye

I am comfortable saying that my original decision was professional. It was technically supported, reasonable and far from bad.

But that is not the same as saying it was optimal.

The human remains part of the decision system, even when the system is built by professionals who advise others on exactly these questions. That is why I train my eye: not because experience is worthless, but because experience does not eliminate selection bias.

Most actuaries I have met are rightly satisfied once the technical solution is sound. We need the models, capital calculations, PMLs, validation and governance.

But those answer the question we put into the model.

The augmented actuary has to ask what comes before and after it:

**What is the real decision? What is constraining it? What is the economic cost of those constraints? And can we change the system rather than simply optimize within it?**

That is the distinction I take from this exercise.

**Better risk appetite and better selection.**

**Lower friction and more opportunities for capital deployment.**

One improves the decision.

## The other improves the system.

<p>
Tags:
{% for tag in page.tags %}
<a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
{% endfor %}
</p>