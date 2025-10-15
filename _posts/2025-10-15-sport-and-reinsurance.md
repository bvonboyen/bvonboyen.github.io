---
layout: post
title: "Suprising equivalence of reinsurance and sports modeling"
date: 2025-10-14 09:00:00 +0200
tags: [sports, reinsurance, thoughtleadership, conceptual]
---

Gary Lineker: 'Football is a simple game. Twenty-two men chase a ball for 90 minutes and at the end, the Germans always win.'

This quote says a lot, it is a simple game, meaning one goal one score, and 
both teams have a continuous chance to score during a fixed time of 90 minutes.
The game has a relatively low scoring intensity, ranging about 1.5 goals per team
and match. Of course, 
a) Germany just recently lost against Slovakia, and 
b) it were pointless to write this, if Germany always wins.

Icehockey is quite similar, with a key difference being higher average intensity, 
and a built in regime switch with temporary player suspensions leading to 
powerplay situations.

Basketball, though, is fundamentally, different. Set time, and while there is a
net playtime, key difference to icehockey is twofold:
1) Limited time per drive, reducing the variation of drives per game
2) Different scoring mechanism, that allows either 1, 2 or 3 points per drive.

So what? Soccer is reasonably close to a continuous poisson process, which is
e.g. used in attritional claims modeling in a larger motor (fleet) policy. This 
is already different for Icehockey, where, similar to credit re-insurance, there 
are inhomogenous poisson processes, or negative binomials at work, that reasonably
cover higher intensities and higher dispersions. Basketball is a nice fit for 
general 


We can continue this with baseball, American football, and tennis...

---

<p>Tags:
{% for tag in page.tags %}
  <a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
{% endfor %}
</p>
