---
layout: post
title: "Quantitative Sports Betting: Value, Portfolios and Risk — A Structured Approach"
excerpt: "Wie ein analytischer Wetter Spieltag 12 betrachtet: Value-Erkennung, Portfoliogewichtung und Risikosteuerung – klar, transparent und datenbasiert."
date: 2025-12-05 09:00:00 +0200
tags: [sports-analytics,quantitative-betting,portfolio-optimization,decision-science,applied-ai,soccer-sim,risk-management,precision-analytics]
---

Quantitatives Wetten unterscheidet sich grundlegend vom klassischen „Tippgefühl“.  
Es folgt einer klaren Struktur: **Value identifizieren**, **Portfolios bauen**, **Risiko beurteilen**.  
Dieser Beitrag zeigt am Beispiel von Spieltag 12, wie sich ein analytischer Wetter Entscheidungen erarbeitet – ruhig, systematisch, evidenzbasiert.

---

## TL;DR  
Das Portfolio entsteht nicht aus der besten Wette, sondern aus der besten **Kombination**.  
Die Visualisierungen unten zeigen deutlich:

- Value ist der Startpunkt – nicht die Entscheidung.  
- Equal Weight ist ineffizient, Max Return zu konzentriert.  
- Optimierte Portfolios (λ) liefern das beste Verhältnis aus Rendite, Risiko und Stabilität.  
- Risikoprofile und Verlustbeiträge werden erst **sichtbar**, wenn sie visualisiert werden.

Kennzahlen aus Spieltag 12:

| λ | Return | VaR(95%) | Konzentration |
|---:|--------:|---------:|--------------:|
| 0.0 | 7.79 | 9.64 | 53% |
| 0.1 | 8.04 | 9.84 | 64% |
| 0.5 | 7.06 | 8.81 | 45% |
| 1.0 | 6.98 | 8.67 | 47% |
| 2.0 | 3.31 | 5.50 | 17% |

---

## 1. Value als Ausgangspunkt  
Value entsteht, wenn die modellierte Wahrscheinlichkeit höher liegt als die implizierte Quote.  
Für Spieltag 12 ergibt sich eine kompakte Liste positiver Value-Wetten – von moderaten Chancen bis zu sehr deutlichen Abweichungen.

Value allein führt jedoch nicht zur Entscheidung. Erst die Portfolioperspektive bestimmt Qualität und Risiko.

---

## 2. Strategien und effiziente Portfolios  
Die folgende Visualisierung zeigt unmittelbar, wie sich Strategien im Rendite-Risikoprofil unterscheiden:

![Effizientes Portfolio](/assets/img/EffizientesPortfolio.png)

- **Equal Weight**: breit, wenig kontrolliert.  
- **Min Risk**: klar definiertes Verlustprofil.  
- **Max Return**: hohe Rendite, aber starke Konzentration.  
- **Optimierte λ-Portfolios**: präzise austariert – Rendite und Risiko im Gleichgewicht.

Diese Darstellung ersetzt lange Beschreibungen: Sie macht Effizienz sichtbar.

---

## 3. Wie Strategien tatsächlich setzen  
Die Einsatzverteilung zeigt, wie unterschiedliche Ansätze Kapital allokieren:

![Strategien Wetteinsatz](/assets/img/StrategienWetteinsatz.png)

- Equal Weight wirkt zufällig.  
- Min Risk stabilisiert durch Diversifikation.  
- Max Return fokussiert nahezu vollständig auf die höchste EV-Wette.  
- λ-Portfolios balancieren, abhängig vom gewünschten Risikoprofil.

Nutzen: **Fehlallokationen werden sofort erkennbar, nicht erst im Ergebnis.**

---

## 4. P&L-Profile im Vergleich  
Die Verteilungen sprechen für sich:

![P&L Vergleich](/assets/img/PnLVergleich.png)

- Equal Weight ist breit und unstrukturiert.  
- Min Risk zeigt ein ruhiges, enges Profil.  
- Max Return generiert hohe Ausschläge nach beiden Seiten.  
- λ-Portfolios liegen zwischen den Extremen und folgen klaren Risikoparametern.

Interpretation wird hier weniger behauptet als visuell bestätigt.

---

## 5. Welche Wette trägt welches Risiko?  
Der Drilldown verdeutlicht, wo Verlustbeiträge entstehen:

![P&L Drilldown](/assets/img/PnLDrilldown.png)

- Risiko wird einzelnen Wetten zuordenbar.  
- Dominante Verlusttreiber werden sichtbar.  
- Portfolioentscheidungen lassen sich rational begründen.

Nutzen: **Risikomanagement wird transparent statt abstrakt.**

---

## Fazit  
Quantitatives Wetten bedeutet, Entscheidungen auf **Struktur**, **Modelllogik** und **Visualisierung** aufzubauen:

- Value selektiert Möglichkeiten – nicht Einsätze.  
- Portfolios ersetzen Einzelwetten.  
- Risiko wird sichtbar, bevor es entsteht.  
- Die Visualisierungen tragen den Großteil der Erkenntnis; der Text ordnet sie lediglich ein.

Dieser Ansatz verschiebt den Fokus von Intuition zu belastbarer Entscheidungsqualität.

---

<p>Tags: {% for tag in page.tags %} <a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %} {% endfor %} </p>
