---
layout: post
title: "Season Update: Control, Consequence – and Mental Strength"
excerpt: "Resilience and astounding similarities to the vice championship campaign 23/24"
date: 2025-11-10 09:00:00 +0200
tags: [sports, analytics, vfb-stuttgart]
---

The 3–2 home win against Augsburg triggered lively debate among spectators. While the result mirrors the overall game, VfB's performance was scrutinised: both goals conceded were traced to individual errors — especially for the second, where **Nübel’s risky pass and Karazor’s positional error** sparked discussion over shared responsibility. Refereeing decisions (penalty, VAR interventions) came under criticism, and Stuttgart’s goals were widely seen as “earned but fortunate”: one via VAR, one just over the line, one slightly deflected.  
The core takeaway from the stands: after ten matchdays, VfB are level on points with the successful season two years ago — **European qualification remains realistic.** That season also brought Dortmund as the opponent for matchday 11 - does history repeat itself?

### Tactical analysis — Between dominance and discipline
Against Augsburg, Hoeneß switched to a **4-2-3-1**, dropping the third centre-back from Leipzig in favour of an additional offensive role. With quick, mobile players behind Undav, Stuttgart aimed for more attacking flexibility.  
Augsburg’s pressing was **surprisingly sharp early on** and situationally well-timed, but faded over time and never reached Feyenoord’s coordination levels — eventually resembling Leipzig’s intermittent pressure phases. VfB controlled ball and space (≈ 62 % possession), but at times struggled in buildup when Augsburg stepped high. Both teams showed **observed xG values slightly above average**, reflecting the tempo and open first-half phases.  
Conclusion: **structure and mentality are intact**. Most notable is VfB’s mental strength when trailing — the team appears resilient and self-confident. The balance between control and risk still requires fine-tuning, but the direction is right.

---

## Trend
The win against Augsburg keeps VfB **on target** and **moves the team back to 4th place in the projected final table**. With three actual points — **+1.18 xP over expectation** — Stuttgart consolidates its position in the upper tier.  
The overall projection rises to **58–59 expected points**, clearly within the European performance band. Around 50 points should be sufficient for a top-six finish this season, leaving VfB with a healthy buffer. While the **skill ranks remain broadly stable**, offensive and home-performance components improve steadily — evidence that the underlying game model is maturing.

---

## Model insights (v1.1)
The updated figures are encouraging. Stuttgart remain **structurally stable** (defence around league rank 6), with rising attacking output and stronger control metrics. The model projects **58–59 xPs**, consistent with a **4th-place** finish.  

Context versus key competitors:
- **Leipzig lose in Hoffenheim** — VfB move back ahead.
- **Frankfurt beat Mainz** and close in slightly.
- **Köln lose in Gladbach**, now **7 xPs** behind Frankfurt.
- **Hoffenheim (win vs Leipzig)** and **Bremen (win vs Wolfsburg)** stabilise but are not immediate threats.

Net effect: **gap upwards reduced, cushion downwards maintained.**  
For reference, the non-relegation line currently sits around **33 xPs** — with roughly four further wins, VfB would be safely through on expectation. 😉

---

## Position probabilities (1–18) — VfB Stuttgart

| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16–18 |
|:--|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| 0.0 % | 5.4 % | 14.1 % | 23.2 % | 24.8 % | 16.2 % | 8.6 % | 3.7 % | 2.3 % | 1.0 % | 0.6 % | 0.3 % | 0.0 % | 0.0 % | 0.0 % | 0.0 % |

### Derived targets (Δ vs. previous week)

| Target | Probability | Δ |
|:--|--:|--:|
| Champion (1st) | 0.0 % | ± 0.0 pp |
| Champions League (1–4) | 43.8 % | ▲ + 8.7 pp |
| International (1–6) | 83.7 % | ▲ + 10.0 pp |
| incl. 7th place | 91.9 % | ▲ + 6.1 pp |
| Relegation (16th) | 0.0 % | ± 0.0 pp |
| Direct relegation (17–18) | 0.0 % | ± 0.0 pp |

**Reading:** The probabilities for European football increase significantly. The Augsburg win and Köln’s loss are clearly reflected: +8.7 pp for Champions League range, +10 pp for top six — Europa moves back within firm reach. (A formal interval analysis against historical seasons remains on the to-do list.)

---

## Team skills — Borussia Dortmund vs VfB Stuttgart (as of MD11)

| Team | xG Home (rk) | xG Away (rk) | Attack (rk) | Defence ↓ (rk) | HFA (rk) |
|:--|--:|--:|--:|--:|--:|
| Borussia Dortmund | 2.17 (3) | 1.81 (3) | +0.29 (3) | −0.24 (2) | +0.06 (7) |
| VfB Stuttgart | 1.75 (8) | 1.71 (5) | +0.23 (5) | −0.04 (6) | −0.10 (9) |

**Expected score (multiplicative model):** Dortmund **2.09** – VfB **1.34**  
→ **Slight edge for BVB**, a complete top side across all compartments; Stuttgart’s route lies in control phases and well-timed transitions.

**Tactical options:** Expect Hoeneß to lean on structure and compactness — an asymmetrical 4-4-2 in pressing, with situational drops into a 5-4-1 (three centre-backs option). Fast wide outlets and second-ball focus can disrupt Dortmund’s buildup. A deeper, more patient spell is not regression but part of the plan: break rhythm, protect balance, and exploit transition moments.

---

## Scoreline frequency matrix (Borussia Dortmund – VfB Stuttgart, 1,000 sims)

| **HG \\ AG** | 0 | 1 | 2 | 3 | 4 | 5+ |
|:--|:--:|:--:|:--:|:--:|:--:|:--:|
| 0 | 4.7 % | 6.6 % | 3.9 % | 1.7 % | 0.8 % | 0.2 % |
| 1 | 7.9 % | 10.3 % | 6.6 % | 2.5 % | 1.2 % | 0.5 % |
| 2 | 7.8 % | 9.7 % | 7.1 % | 3.3 % | 1.3 % | 0.6 % |
| 3 | 5.3 % | 6.8 % | 4.8 % | 2.1 % | 0.8 % | 0.2 % |
| 4 | 1.9 % | 2.7 % | 1.8 % | 0.8 % | 0.3 % | 0.1 % |
| 5+| 0.7 % | 0.9 % | 0.6 % | 0.2 % | 0.1 % | 0.0 % |

**Reading:** An open top fixture with a slight Dortmund advantage. Scorelines around **2–1** and **3–1** appear most frequent; a draw (~20 %) is realistic; a VfB win (~23 %) represents the structural upside.

---

## Model vs Market

| Source | 🏠 Dortmund win | 🤝 Draw | 🏁 VfB win |
|:--|--:|--:|--:|
| Model (1,000 sims) | 56.7 % | 20.0 % | 23.3 % |
| Market (implied) | 54.8 % | 22.5 % | 22.7 % |
| Δ (Model − Market) | +1.9 pp | −2.5 pp | +0.6 pp |

**Reading:** Market and model are closely aligned. The market prices Dortmund slightly higher and the draw slightly more likely; the model credits VfB with a bit more structural resilience away from home.

---

## Mid-term outlook (MD 8–11)

| MD | Fixture | p_home | p_draw | p_away | xPs (MD7) | xPs (MD8) | xPs (MD9) | xPs (MD10) |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|
| 8 | VfB – Mainz (2:1) | 1.00 | 0.00 | 0.00 | 1.43 | 3.00 | 3.00 | 3.00 |
| 9 | Leipzig – VfB (3:1) | 1.00 | 0.00 | 0.00 | 1.31 | 1.29 | 0.00 (actual) | 0.00 |
| 10 | VfB – Augsburg (3:2) | 1.00 | 0.00 | 0.00 | 1.80 | 1.85 | 1.82 | 3.00 (actual) |
| 11 | Dortmund – VfB | 0.567 | 0.200 | 0.233 | 0.95 | 0.96 | 0.97 | 0.90 |
|  | **Total (8–11)** |  |  |  | **5.49 xPs** | **7.10 xPs** | **5.79 xPs** | **6.90 xPs** |

**Reading:** The Augsburg win puts VfB at **+1.18 xP above expectation** over this stretch. The projection climbs to **6.9 xPs** — target path confirmed; Dortmund will serve as the next calibration point.

---

## Projected table (Top 6)

| Pos | Team | Exp Pts | Avg Pos |
|:--|:--|--:|--:|
| 2 | Borussia Dortmund | 66.8 | 3.0 |
| 3 | Bayer 04 Leverkusen | 66.7 | 3.0 |
| 4 | VfB Stuttgart | 58.6 | 4.9 |
| 5 | RB Leipzig | 57.8 | 5.2 |
| 6 | Eintracht Frankfurt | 55.9 | 5.7 |

**Observations:** Leipzig’s loss in Hoffenheim and VfB’s win restore Stuttgart to 4th. Frankfurt’s win against Mainz closes the gap. Köln’s defeat in Gladbach keeps them seven xPs adrift. Hoffenheim and Bremen score important wins and stabilise below. **Gap up reduced, gap down preserved — structural thesis intact.**

---

## Model & Calibration (v1.1) — unchanged
The static **xG factor model** applies actuarial principles (expectation & variance) to football, combining league baselines, home advantage, and team factors on a log scale.  
New in v1.1: **machine-learning-assisted calibration**, adaptive team weighting, higher uncertainty for promoted sides, and continuous re-weighting as the season progresses.

---

## Conclusion
A win with lessons rather than euphoria: VfB remain structurally solid, improve offensively, and continue to show **mental resilience**. The model sees **58–59 xPs**, the team currently performs in line with that trajectory. The balance between control and consequence sharpened against Augsburg; now Dortmund away will show how far this side has come.

---
<p>Tags:
{% for tag in page.tags %}
  <a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
{% endfor %}
</p>
