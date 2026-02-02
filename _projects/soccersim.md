---
title: "SoccerSim — A Decision Laboratory for Risk & Capital Allocation"
layout: page
excerpt: "SoccerSim is an applied lab that uses football as a transparent test environment to study actuarial risk, portfolio, and governance thinking under uncertainty."
tags: [decision-systems, risk, simulation, actuarial, ai, python]
date: 2025-10-13
---

## What SoccerSim Is

**SoccerSim** is an applied decision laboratory that explores how risk and capital can be allocated responsibly in high-friction, high-uncertainty environments.

Rather than focusing on prediction accuracy alone, the project studies **decision quality under constraints** — including limited budgets, noisy signals, execution frictions, and correlated outcomes.

Football serves as a transparent and observable environment in which these dynamics can be made explicit, tested, and explained.

---

## Automation, Judgment, and Governance

SoccerSim combines **automated inference** with **explicit human judgment**.

Machine-learning models and simulations are used to surface scenarios, risks, and trade-offs at scale.  
Critical decisions — such as risk appetite, capital allocation, and system overrides — remain deliberate, reviewable, and accountable.

A core focus of the lab is understanding *why* results occur.  
Performance is examined through systematic attribution that separates signal from noise, edge from variance, and decision quality from execution effects.

---

## Why a Sports Market?

Sports markets provide a rare combination of real uncertainty, observable outcomes, and binding constraints.

This makes them a useful laboratory for demonstrating how **actuarial risk management, portfolio thinking, and governance principles** translate beyond traditional insurance contexts — supporting the broader objective of making actuarial judgment visible outside the profession.

---

## Current Capability (v1)

The current implementation models matches and full league seasons using probabilistic factor models and Monte Carlo simulation.

At a high level, the system supports:
- Calibration of team strength under uncertainty  
- Matchday and season-level scenario simulation  
- Portfolio-style aggregation of decisions under budget and variance constraints  
- Reproducible, configuration-driven workflows  

Technical details are intentionally kept out of the project overview.

---

## Research Direction

Ongoing development focuses on extending SoccerSim as a **governed research platform**, with emphasis on decision quality rather than model complexity.

Current research priorities include:

- **Risk-adjusted attribution and portfolio diagnostics**  
  Establishing robust separation of signal and noise, edge and variance, and decision quality versus execution effects.  
  This completes the system by enabling governance, validation, and disciplined learning over time.

- **Integration as a service within agentic systems**  
  Exploring how automated inference can be embedded into human-centered decision workflows, including review, override, and accountability mechanisms.

- **Hierarchical and dynamic representations of latent team and player effects**  
  Refining signal quality through multi-level and time-varying structures, once attribution and governance foundations are in place.

These directions prioritize **system discipline and explainability** over incremental predictive gains.

---

**Repository**  
[https://github.com/bvonboyen/Soccer-predictions](https://github.com/bvonboyen/Soccer-predictions)  
(Code, experiments, and technical documentation available on request.)

*The goal is not to predict the unpredictable — but to make disciplined decisions when uncertainty dominates.*
