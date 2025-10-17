---
layout: post
title: "Basic risk factor model"
date: 2025-10-13 09:00:00 +0200
tags: [sports, analytics]
---

## Expected value and variance — from natural catastrophes to the Bundesliga

In the insurance world, *expected value* and *variance* describe both the average loss and its uncertainty.  
These concepts are at the core of risk modelling — from natural catastrophes to solvency projections — and can be transferred directly to football.

The **static xG factor model** applies these ideas to match outcomes.  
It calculates expected goals for each team, separately for home and away matches, using a combination of league-level baselines (*League xG*, *Home advantage*) and team-specific factors (*attack*, *defence*, *home*).  
Each factor remains **constant across the season**, allowing comparisons of structural team strength — a “static” but interpretable representation of expected performance.

---

## Model structure

### Expected goals

For a home–away fixture, expected goals are defined as:

\[
\begin{aligned}
xG_{\text{home}} &= xG_{\text{league}} \times h_{\text{league}} \times 
   \exp(a_{\text{home}} + d_{\text{away}} + h_{\text{home}}) \\
xG_{\text{away}} &= xG_{\text{league}} \times 
   \exp(a_{\text{away}} + d_{\text{home}})
\end{aligned}
\]

Where  
- \( xG_{\text{league}} \): league baseline expected goals  
- \( h_{\text{league}} \): general home advantage  
- \( a_i, d_i, h_i \): team-specific attack, defence, and home factors (log-scale)

### Model characteristics
- **Static calibration:** factors remain constant over simulated matchdays  
- **Transparent decomposition:** each component has a clear interpretation  
- **Probabilistic logic:** expected goals form the basis for simulations  
- **Cross-league compatibility:** the same structure applies to different datasets  

---

## Calibration example – Bundesliga 2024/25

| Team | Exp Goals Home | Exp Goals Away | League xG | Home Adv | Attack (log) | Defence (log) | Home (log) |
|------|----------------|----------------|------------|-----------|---------------|---------------|-------------|
| Bayer 04 Leverkusen | 2.06 | 2.05 | 1.42 | 1.04 | +0.37 | –0.17 | –0.04 |
| Borussia Dortmund | 2.53 | 1.56 | 1.42 | 1.04 | +0.10 | –0.00 | +0.45 |
| Borussia Mönchengladbach | 1.68 | 1.51 | 1.42 | 1.04 | +0.06 | +0.09 | +0.07 |
| Eintracht Frankfurt | 2.34 | 1.55 | 1.42 | 1.04 | +0.09 | –0.11 | +0.38 |
| FC Augsburg | 1.03 | 0.98 | 1.42 | 1.04 | –0.37 | –0.04 | +0.01 |
| FC Bayern München | 2.99 | 2.59 | 1.42 | 1.04 | +0.60 | –0.44 | +0.11 |
| FC St. Pauli | 0.58 | 1.02 | 1.42 | 1.04 | –0.33 | –0.27 | –0.61 |
| Holstein Kiel | 1.43 | 1.48 | 1.42 | 1.04 | +0.05 | +0.42 | –0.08 |
| RB Leipzig | 1.89 | 1.15 | 1.42 | 1.04 | –0.20 | –0.08 | +0.45 |
| SC Freiburg | 1.84 | 0.99 | 1.42 | 1.04 | –0.36 | +0.01 | +0.58 |
| SV Werder Bremen | 1.22 | 1.90 | 1.42 | 1.04 | +0.30 | +0.09 | –0.48 |
| TSG 1899 Hoffenheim | 1.46 | 1.23 | 1.42 | 1.04 | –0.14 | +0.26 | +0.13 |
| VfB Stuttgart | 2.02 | 1.67 | 1.42 | 1.04 | +0.17 | +0.03 | +0.15 |
| VfL Bochum | 0.94 | 1.00 | 1.42 | 1.04 | –0.35 | +0.23 | –0.10 |
| VfL Wolfsburg | 1.56 | 1.67 | 1.42 | 1.04 | +0.17 | +0.04 | –0.11 |
| 1. FC Heidenheim 1846 | 0.77 | 1.39 | 1.42 | 1.04 | –0.02 | +0.19 | –0.64 |
| 1. FC Union Berlin | 1.03 | 0.98 | 1.42 | 1.04 | –0.37 | –0.04 | +0.01 |
| 1. FSV Mainz 05 | 1.37 | 1.76 | 1.42 | 1.04 | +0.22 | –0.19 | –0.29 |

---

## How to read and analyze

### VfB Stuttgart in context
- **Attack factor (log):** +0.17 → upper mid-table attacking profile  
- **Defence factor (log):** +0.03 → slightly permissive; opponents generate marginally more chances  
- **Home factor (log):** +0.15 → among the strongest home advantages in the league  

### Example calculation
Fixture: *Union Berlin (home) vs VfB Stuttgart (away)*  

{% raw %}
\[
\begin{aligned}
xG_{\text{Union}} &= 1.42 \times 1.04 \times \exp(-0.37 + 0.03 + 0.01) \approx 1.06 \\
xG_{\text{VfB}} &= 1.42 \times \exp(0.17 - 0.04) \approx 1.60
\end{aligned}
\]
{% endraw %}


Result: **Union 1.06 : 1.60 VfB (expected goals)**  

### Observed vs. expected (matchdays 1–4)

| MD | Fixture | Actual | Expected (Model) |
|----|----------|---------|------------------|
| 1 | Union – VfB | 2 : 1 | 1.06 : 1.60 |
| 2 | VfB – Gladbach | 1 : 0 | 2.21 : 1.55 |
| 3 | Freiburg – VfB | 3 : 1 | 1.89 : 1.69 |
| 4 | VfB – St. Pauli | 2 : 0 | 1.54 : 1.05 |

---

## Release 1.0 — Static Model

This initial release of the *static xG factor model* forms the analytical foundation of the  
[`soccersim`](https://github.com/bvonboyen/Soccer-predictions) project.

{% include mathjax.html %}
