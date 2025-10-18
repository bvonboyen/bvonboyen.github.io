---
layout: post
title: "Parallel Worlds: How Reinsurance and Sports Modeling Speak the Same Language"
date: 2025-10-15 09:00:00 +0200
tags: [sports, reinsurance, thoughtleadership, conceptual]
---

Gary Lineker:
“Football is a simple game. Twenty-two men chase a ball for 90 minutes,
and at the end, the Germans always win.”

This quote says a lot about modeling. It is a simple game — one goal equals one score — and both teams have a continuous chance to score during a fixed time of 90 minutes.
The game has a relatively low scoring intensity, averaging about 1.5 goals per team and match, with only small differences across leagues.

Of course,
a) Germany just recently lost against Slovakia, and
b) it would be pointless to write this post if Germany always won.

Ice hockey is quite similar, with a key difference being the higher average scoring intensity, and a built-in regime switch: temporary player suspensions lead to power-play situations.

Basketball, though, is fundamentally different. Yes, there is a fixed time, and while there is net play time — just like in ice hockey — the key differences are twofold:

Limited time per drive, reducing the variation in the number of drives per game.

A different scoring mechanism, allowing 1, 2, or 3 points per drive.

What does this mean for a reinsurance professional?

Soccer is reasonably close to a homogeneous Poisson process, which in reinsurance is used to model attritional claim frequencies in proportional treaties — for instance, personal accident with a fixed sum insured.

Ice hockey is already different. Similar to credit reinsurance, there are inhomogeneous Poisson processes at work that create higher intensities and greater dispersion — as seen in trade-credit aggregate stop-loss covers.
This can be modeled either via a Markov-modulated Poisson process or by a negative binomial distribution (with stochastic intensity).

Basketball fits nicely to a compound Poisson model, the general workhorse of risk theory — used, for example, in pricing attritional losses in motor insurance.

So what do you think about Tennis, Baseball, and American Football?

Property per-risk portfolios (independent but with small correlated patches)?

Multi-layer structures like catastrophe programs?

Industry-wide insured losses from a defined catastrophe event exceeding a pre-agreed threshold (ILW-type)?

I am considering branching off into different sports, as well.

---

<p>Tags:
{% for tag in page.tags %}
  <a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
{% endfor %}
</p>
