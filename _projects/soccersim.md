---
title: "SoccerSim — Season & Match Simulation"
layout: page
excerpt: "A modular football analytics engine combining actuarial-style calibration with Monte Carlo simulation — evolving from a static factor model toward hierarchical team and player layers."
tags: [sports-analytics, simulation, ai, python]
date: 2025-10-13
---

**SoccerSim** is a modular Python package for realistic football (soccer) season simulations.  
It connects actuarial calibration discipline with the excitement of sports modeling.

---

## ⚽ Current Application — Static Factor Model (v1.0)

The current release models match outcomes and full league seasons through **Poisson-based expected goals (xG)** and **static team-strength factors**.

**Core methods**
- Poisson and Skellam distributions for goal and score-difference modeling  
- Maximum-likelihood calibration of team attack/defense parameters  
- Season-level Monte Carlo simulations for probability tables  
- YAML-driven configuration and a clean CLI for reproducible workflows  
- Audit trail and caching for deterministic validation

**Use case**
- Setting up leagues, updating fixtures and tables for regular forecasts
- Calibrating factor model and deriving team skills rankings
- Creating game day and season forecasts from fixtures and calibratons
- Derive analytics and betting quotes on simulations, to derive value bets
- Portfolio simulations (equal-stake and risk-adjusted) for betting or performance studies  
- Integration with actuarial or ALM-style risk frameworks

**Repository:** [bvonboyen/Soccer-predictions](https://github.com/bvonboyen/Soccer-predictions)

---

## 🧠 Future Evolution — Hierarchical, Player & Dependency Layers

The upcoming architecture expands SoccerSim from a static team-factor model toward a **hierarchical Bayesian / mixed-effects framework**, aligning with reinsurance-style risk aggregation principles:

**Planned extensions**
- 🧩 **Expand factor modeling**  
  - Include shock factors for realistic derby, weather, and team management changes
  - Potentially consider a state space model to allow for stochastic trends in the data
- 🧩 **Hierarchical team-player factors**  
  - Player-level attack/participation coefficients with shrinkage priors  
  - Team strength as a dynamic mixture of player availability and form  
- 🔗 **Dependency modeling across matches**  
  - Shared shocks for weather, derbies, or scheduling congestion  
  - Correlated outcomes for realistic portfolio risk  
- ⚙️ **Risk-adjusted analytics**  
  - Contributive RAR (cRAR) per bet and total portfolio volatility metrics  
  - Cross-factor calibration using ridge regularization and information-criteria control  
- 🌐 **Agentic simulation layer**  
  - Scenario engines and explainable reporting for domain experts

These developments aim to merge **actuarial multi-level calibration** with **data-driven sports inference**, moving from descriptive to structural modeling.

---

## 🧰 Tech Stack  
`Python` · `pandas` · `numpy` · `scipy` · `matplotlib` · `pyyaml` · `click` · `beautifulsoup4`

Packaged as the modular **`soccersim`** library with  
– Thin data API (`get_table_df`, `get_fixtures_df`) and **web adapter** (`KickerProvider`, cached under `.cache`, TZ Europe/Berlin)  
– **Poisson / Monte Carlo** simulation engine with config-driven workflows  
– Reproducible environment via **Conda / Poetry**, automated tests & builds via **GitHub Actions + Docker**

*“The goal isn’t to predict the unpredictable — but to quantify its shape.*

---