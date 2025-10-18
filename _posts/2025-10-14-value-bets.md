---
layout: post
title: "The Search for Value Bets: Next Steps in Modeling"
date: 2025-10-14 09:00:00 +0200
tags: [sports, thoughtleadership]
---

Betting Basics — From Fair to Value Bets, and beyond

Let’s start with some basic terminology in betting.

  1.  **Fair bet** — Two players agree on a fair bet when the expected cash flow (or expected value) equals zero, and both parties share the same understanding of outcomes and their probabilities.
  2.  **Market bet** — The expected value is slightly negative, as the bookmaker includes a risk and operating margin, even if both sides agree on the probabilities.
  3.  **Value bet** — The expected value is positive — meaning your estimated probability of success is higher than what the market implies.
  4.  **Sure bet** (arbitrage) — A bet that locks in a positive cash flow before the event even takes place.

### Romantic Ideals and Bookie Nightmares

Number 1 is the romantic notion — the theoretical “gentlemen’s bet” of probability theory, elegant but irrelevant in practice.
Number 4, in contrast, is the bookmaker’s nightmare: if discovered and exploited, it can unbalance the book and expose them to massive risk.
Both are fascinating in theory, but not where our analytical focus lies.

### Market Bets and Implied Probabilities

The market bet (no. 2) is the workhorse of both betting and finance.
In financial terms, its probabilities are called implied — and in theory, risk-neutral.

Sports-betting markets, while increasingly liquid, are still far from perfect.
There is no single, universal implied probability set — but odds tend to converge as competition enforces efficiency and margins become aligned.

### Value Bets and the Search for Edge

The value bet (no. 3) targets what we might call true or real-world probabilities — those that describe the physical world rather than the market consensus.

Mathematically:

Expected Value = p_model × odds_market − 1 >0 

(without loss of generality, per one monetary unit).

If we could generate an unlimited number of independent value bets, each with positive EV, then simply betting flat stakes would, in expectation, make money over time.

### The Real World: Risk and Variance

Of course, reality is less kind.
Bets are finite, outcomes are chunky, and variance is real.
Even a long-term positive-EV strategy can go through deep drawdowns if the distribution of results is lumpy or correlated.

This is where modern portfolio theory comes in — offering a framework to manage the trade-off between return and risk.
In finance, this means optimizing risk-adjusted return under a constraint on acceptable loss.
In insurance, it’s the same principle, known as risk and value management.

Your risk appetite defines how much loss you can tolerate.
From there, portfolio optimization — or in betting terms, stake sizing and selection — aims to maximize risk-adjusted value, not just raw expected value.

### From Value to Optimal Portfolio Allocation

Once we move from single bets to a portfolio of opportunities, the question is no longer if to bet, but how much.
Two frameworks naturally emerge as next candidates for optimization.

The first is the Kelly criterion, which prescribes the mathematically optimal fraction of capital to stake on each bet, maximizing long-term growth by compounding expected value while accounting for variance. It is elegant and powerful — but also unforgiving when probabilities or independence assumptions are wrong.

The second is the broader risk-adjusted return (RAR) approach, borrowed from modern portfolio and insurance theory. Here, the objective is to maximize expected value per unit of risk, under a defined risk appetite or capital constraint. Kelly can be seen as one special case within this family — a full-risk, growth-maximizing variant — whereas RAR frameworks allow smoother, more pragmatic trade-offs between performance and stability.

### Where Betting Meets Portfolio Management

Together, these methods form the bridge between simple positive-EV selection and true portfolio management — where betting, investing, and risk control converge.
They transform a list of value bets into a structured allocation problem: balancing growth, variance, and risk appetite — the very same challenge faced by traders, fund managers, and actuaries alike.
Evolving the app in this direction is a natural first candidate for an actuary like me.
 

---

<p>Tags:
{% for tag in page.tags %}
  <a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
{% endfor %}
</p>

