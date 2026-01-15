---
layout: post
title: "Vibe Coding vs. Agentic Development"
excerpt: "Why feeling productive is not the same as building systems that compound — and when AI work actually starts to stick."
date: 2026-01-04 09:00:00 +0200
tags: [agents, agentic-pipelines, systems, productivity]
---

## Key Messages
- **Vibe coding optimizes for momentum.** It’s powerful for exploration, learning, and prototyping.
- **Agentic development optimizes for continuity.** It turns work into reusable, owned capability.
- **AI sticks when work compounds.** If you expect reuse, correctness, or handover, design for structure — not just speed.

*This piece grew out of a quieter stretch over the holidays, while reviewing my objectives and noticing which kinds of AI-assisted work actually carried forward — and which quietly reset.*

Over the last year, *vibe coding* has become a popular way to describe working with AI. You prompt, the model responds, the code flows — and momentum feels high. And to be clear: **vibe coding works**, especially early on.

But after running cloud tools and a fully integrated, agent-oriented setup side by side, one difference kept showing up: **vibe coding creates motion, while agentic development creates continuity**. This post is about recognizing when each mode helps — and when it quietly starts to fail.

---

## What I mean by *vibe coding*

Vibe coding is characterized by fast feedback loops, a strong sense of flow, and generalist models that can do a bit of everything. Context is rebuilt each session, and progress is driven by conversation rather than structure.

It’s excellent for exploration, learning, sketching ideas, and **scripting or prototyping**. In that sense, vibe coding increasingly plays a role similar to what Excel once did for professionals: a flexible, low-friction environment for thinking, exploring, and shaping ideas.

**For many knowledge workers, it’s already starting to replace spreadsheets as the first place ideas take shape — essentially _Excel plus specification_: flexible, expressive, and closer to intent.** Most positive first AI experiences live here, and that’s a good thing.

---

## Where vibe coding breaks down

The limitations don’t appear immediately. They surface after repetition.

You notice yourself re-explaining the same architecture, dealing with subtle drift in assumptions, or getting outputs that are “almost right” but hard to trust. Manual steps start to pile up — steps that clearly *should* be automated.

The work moves, but it doesn’t **accumulate**.

---

## A quick self-check

If any of these feel familiar, you’re already past pure vibe coding:

- “I already explained this once.”
- “This breaks something subtle.”
- “I don’t quite trust this output.”
- “Future-me won’t understand this.”

These aren’t tooling issues. They’re **architecture signals**.

---

## What I mean by *agentic development*

Agentic development is not about autonomous AI. It’s about **designing work so it survives contact with time**.

In a sense, this wasn’t a surprise. I’ve always been skeptical of productivity gains driven purely by tools — not because tools don’t help, but because their benefits tend to decay unless they’re embedded in systems. Working with AI simply made that pattern visible again, at much higher speed.

That belief has shaped how I work in practice. Over time, it led me away from loosely coupled setups — moving from Spyder and standalone ChatGPT sessions toward an integrated environment built around VS Code, Continue, and local models like Qwen. Not because those tools are inherently better, but because they allow context, structure, and intent to live alongside the work itself.

Crucially, that shift didn’t reduce flexibility — it increased it. When context and artifacts are explicit, changing models, workflows, or levels of automation becomes easier, not harder.

---

## What changes in practice

In practice, agentic development shows up as improved context that is explicit, stored, versioned, and reused. It brings more specificity through agents with clear roles and boundaries, and it encourages using the **best model for the job**, not simply the biggest one.

Performance and low latency start to matter because they change how you think. Ergonomics improve because the environment adapts to the workflow. Drift is minimized through schemas and constraints, architecture becomes more targeted, and outputs turn into **actionable artifacts**, not just answers. Most importantly, everything lives in a **fully integrated environment**, not scattered tools.

This isn’t about replacing the developer. It’s about **compounding the developer’s work**.

---

## From vibe to agentic is a spectrum — not a switch

<figure class="post-figure">
  <img src="/assets/img/vibe_to_agentic_spectrum.png"
       alt="Spectrum from vibe coding to agentic work"
       loading="lazy" decoding="async">
  <figcaption class="caption">
    Vibe coding and agentic work sit on a spectrum — reuse is the shift point.
  </figcaption>
</figure>

I find it useful to think of this as a gradual shift rather than a binary choice. Context moves from ephemeral to explicit, models from generalist to task-specific, drift from tolerated to constrained, and outputs from conversational to artifact-driven. The time horizon stretches from hours to months.

You don’t “graduate” from vibe coding. You move along the spectrum when reuse starts to matter.

---

## A note on ownership and IP

There’s also an ownership aspect to this. When work happens primarily in chat sessions, the boundaries around context, reuse, and intellectual property are blurry by default. In an agentic setup, the opposite is true: prompts, logic, schemas, and outputs live as explicit artifacts alongside the code.

That makes ownership, reuse, and transition clearer — not as a legal statement, but as a practical one. The value isn’t in the model response; it’s in the structure that shapes it.

---

## A simple mental model for compounding work

<figure class="post-figure">
  <img src="/assets/img/compounding_layers.png"
       alt="Foundation, execution, and compounding layers"
       loading="lazy" decoding="async">
  <figcaption class="caption">
    AI sticks when the compounding layer is designed deliberately.
  </figcaption>
</figure>

I find it helpful to think in three layers:

1. **Foundation** — LLM-integrated workstations that are reproducible, versioned, and deployable.  
2. **Execution** — helpers and workers optimized for speed and ergonomics.  
3. **Compounding** — artifacts, schemas, memory, and reuse that turn work into capability.

Most AI setups focus on the middle layer. **AI only sticks when the top layer is designed deliberately.**

---

## When to use which

<figure class="post-figure">
  <img src="/assets/img/decision_flow_vibe_vs_agentic.png"
       alt="Decision flow for moving from vibe coding to agentic development"
       loading="lazy" decoding="async">
  <figcaption class="caption">
    A simple trigger: move to structure when reuse starts to matter.
  </figcaption>
</figure>

Use vibe coding when you’re exploring a new idea, when speed matters more than correctness, and when the output is meant to stay lightweight.

Switch to agentic development when you’ve rewritten the same prompt twice, when correctness matters downstream, when outputs feed other systems or decisions, or when you’re delegating to future-you.

**If you expect reuse, design for compounding.**

---

## The takeaway

Vibe coding optimizes for momentum. Agentic development optimizes for continuity. One feels fast; the other **stays fast**.

The most effective setups use both: vibe coding for exploration, and agentic development for everything that should last. If work doesn’t compound, AI productivity resets every quarter. If it does, AI finally starts to stick.

*Seen this way, the shift toward agentic development wasn’t a conversion, but a reinforcement. The hypothesis stayed the same — systems compound, tools decay — AI just made the feedback loop fast enough to act on.*

---

<p>
Tags:
{% for tag in page.tags %}
<a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
{% endfor %}
</p>
