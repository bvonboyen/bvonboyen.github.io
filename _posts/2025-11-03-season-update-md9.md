---
layout: post
title: "Season Update: Control vs. Consequence — A Setback with Lessons"
excerpt: "Sebastian Hoeneß sees team on right track, but identifies items to improve. What could he mean?"
date: 2025-11-03 09:00:00 +0100
tags: [sports, analytics, vfb-stuttgart]
---

## VfB Stuttgart — A setback with learnings, course intact

### Fan voices (RB Leipzig 3–1 VfB Stuttgart)
The Leipzig defeat is viewed with nuance. Fans point to individual errors — the own goal and a goalkeeper slip — while acknowledging a strong first half and Leipzig’s superior individual quality. Mood remains optimistic with Augsburg and Europe ahead. The game idea earns praise, but the ask is clear: lower the error rate and time substitutions better to sustain the level.

### Tactical analysis — Control needs variation
Stuttgart set up in a 3-4-2-1, dominant early with intensity and short counter-pressing, controlling ball and space. Individual mistakes at bad moments — before and after halftime — plus missing rhythm changes reduced stability. The left side was the defensive weak spot; over-eagerness contributed to the own goal. Structure was sound but lacked tempo shifts and surprise to unsettle Leipzig. The direction is right; the details need sharpening. **Bottom line:** control is good, variation is better — if you own the ball, you must own the tempo.

### Trend
A small setback without derailing the course. This was not a system break, but a top-level learning step. Structurally, VfB remains in the European race around **57 xPs**. The model continues to value structure over short-term form — helpful after a loss when the base remains intact.

### Model insights (v1.1)
The updated read confirms **defensive strength (≈ league rank 6)** as the backbone and sees a mild positive trend in attack. In combined expected-points simulations, VfB sits **~56–57 xPs**, stable within the extended top five. Defensive consistency is decisive — now on par with Leipzig and trailing only the top trio (Bayern, Dortmund, Leverkusen). With season length, **matchday weights** increase for recent games, older evidence decays. The **calibration method itself is unchanged** (see section “Model & Calibration”).

---

## Position probabilities (1–18) — VfB Stuttgart

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16–18 |
|:--|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| 0.0% | 4.8% | 11.4% | 18.9% | 20.4% | 18.2% | 12.1% | 8.0% | 3.5% | 1.0% | 1.1% | 0.5% | 0.0% | 0.0% | 0.1% | 0.0% |

### Derived targets (Δ vs. last week)

| Target | Probability | Δ |
|:--|--:|:--:|
| Champion (1st) | 0.0% | ±0.0 pp |
| Champions League (1–4) | 35.1% | ▼ −10.9 pp |
| International (1–6) | 73.7% | ▼ −12.2 pp |
| incl. 7th place | 85.8% | ▼ −8.1 pp |
| Relegation (16th) | 0.0% | ±0.0 pp |
| Direct relegation (17–18) | 0.0% | ±0.0 pp |

*Season goal remains “Europe”. I will complement the projection with a historical blend to derive a credible interval around the target.*

---

## Team skills — VfB Stuttgart vs FC Augsburg (as of MD10)

| Team | xG Home (rk) | xG Away (rk) | Attack (rk) | Defence ↓ (rk) | HFA (rk) |
|:--|--:|--:|--:|--:|--:|
| VfB Stuttgart | 1.72 (8) | 1.70 (5) | +0.22 (5) | −0.02 (6) | −0.08 (8) |
| FC Augsburg | 0.81 (18) | 1.16 (13) | −0.17 (13) | −0.01 (7) | −0.45 (18) |

**Expected score (multiplicative model):** VfB **1.70** — Augsburg **1.13**. Stuttgart shows clear structural superiority, especially in buildup and wide channels; Augsburg remains counter-capable but structurally behind.

### Scoreline frequency matrix (VfB — Augsburg, 1,000 sims)

| HG \\ AG | 0 | 1 | 2 | 3 | 4 | 5+ |
|:--|--:|--:|--:|--:|--:|--:|
| **0** | 5.7% | 7.7% | 2.7% | 1.4% | 0.2% | 0.2% |
| **1** | 12.5% | 11.1% | 5.7% | 2.3% | 0.5% | 0.3% |
| **2** | 8.2% | 9.7% | 4.6% | 2.5% | 0.3% | 0.2% |
| **3** | 4.7% | 5.6% | 4.0% | 1.0% | 0.4% | 0.1% |
| **4** | 1.7% | 2.1% | 1.5% | 0.4% | 0.1% | 0.0% |
| **5+** | 0.8% | 1.1% | 0.6% | 0.0% | 0.1% | 0.0% |

**Read:** Most likely outcomes are **1–0**, **2–0**, **2–1** — controlled home scenarios with VfB edge. A 0–0 is rare (<6%), high totals (>4 goals) are very unlikely.

---

## Model vs. market (Augsburg)

| Source | 🏠 VfB win | 🤝 Draw | 🏁 Augsburg win |
|:--|--:|--:|--:|
| Model (1,000 sims) | 53.0% | 22.5% | 24.5% |
| Market (Sporttip implied) | 61.6% | 20.2% | 18.2% |
| Δ (Model − Market) | −8.6 pp | +2.3 pp | +6.3 pp |

**Take:** Market is more bullish on VfB; the model stays conservative. VfB’s ball control vs. Augsburg’s defensive shape points to a high-probability controlled win scenario.

---

## Mid-term outlook (MD8–11)

| MD | Fixture | p_home | p_draw | p_away | xPs (MD7) | xPs (MD8) | xPs (MD9) |
|:--|:--|--:|--:|--:|--:|--:|--:|
| 8 | VfB — Mainz (2:1) | 1.000 | 0.000 | 0.000 | **1.43** | **3.00** | **3.00** |
| 9 | Leipzig — VfB (3:1) | 1.000 | 0.000 | 0.000 | **1.31** | **1.29** | **0.00 (actual)** |
| 10 | VfB — Augsburg | 0.530 | 0.225 | 0.245 | **1.80** | **1.85** | **1.82** |
| 11 | Dortmund — VfB | 0.531 | 0.219 | 0.250 | **0.95** | **0.96** | **0.97** |
| **Total (8–11)** |  |  |  |  | **5.49 xPs** | **7.10 xPs** | **5.79 xPs** |

**Read:** Projection eases to **~5.8 xPs**, reflecting the Leipzig setback. Structure remains sound; upcoming matchups are manageable and model parameters stable.

---

## Projected table (±2 places focus)

| Pos | Team | Exp Pts | Avg Pos |
|:--|:--|--:|--:|
| 3 | Bayer 04 Leverkusen | 64.6 | 3.4 |
| 4 | RB Leipzig | 59.6 | 4.7 |
| 5 | VfB Stuttgart | **56.9** | **5.4** |
| 6 | Eintracht Frankfurt | 54.6 | 6.0 |
| 7 | 1. FC Köln | 51.6 | 7.0 |

**Observations:** Leipzig edges ahead (not a “six-pointer” probabilistically — home edge already priced in). Frankfurt continue to fade — most recently a draw at the bottom club. Köln crosses 50 xPs and sits **3 xPs** behind Frankfurt. Heidenheim are adrift at the bottom; **St. Pauli, Hamburg, Augsburg** likely sort out relegation places between them.

---

## Model & calibration (v1.1) — unchanged
The static xG factor model applies actuarial principles (expectation & variance) to football, combining league baselines, home advantage, and team factors on a log scale. New in v1.1: machine-learning assisted calibration with adaptive team weighting, higher uncertainty for promoted teams, and rolling re-weighting as the season unfolds.

## Conclusion
A setback at the right time: Leipzig exposed the next step — **rhythm, variation, error avoidance**. The system holds, structure is sound; now it’s about **flexibility in tempo and timing**. Augsburg will test exactly that. Stuttgart remains **on course for Europe** — mature structure, clear learning curve, no hype.

---
<p>Tags:
{% for tag in page.tags %}
  <a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
{% endfor %}
</p>
