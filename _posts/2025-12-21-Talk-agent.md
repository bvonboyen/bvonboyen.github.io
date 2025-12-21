---
layout: post
title: "Why I Only Talk About Agents That Run in Public"
excerpt: "A personal standard for building AI agents — visibility, restraint, and accountability over demos and hype."
date: 2025-12-21 09:00:00 +0200
tags: [AI, agents, strategy, engineering, governance]
---

## Key Messages
- **Agents must be real, not demo artifacts.** If they only work in private, they are hard to trust.  
- **Public operation creates accountability.** Visibility forces clear boundaries and honest failure.  
- **Restraint matters more than capability.** What an agent does *not* do defines its quality.  
- **The homepage agent is an interface, not the system.** It makes the architecture visible, not complete.  
- **The next step is infrastructure, not intelligence.** Action, privacy, and independence come before learning.

---

I hesitated to talk about AI agents. Not because they aren’t powerful, but because too many of them only exist in private prompts, demos, or slide decks. They sound impressive, but you never really see them operate under real conditions — with real users, real ambiguity, and real consequences.

So I made a rule for myself.

![Rule: If I talk about an agent, it must run in public](/assets/img/Talk_agent.png)

If I talk about an agent, it must be real. It must run in public. It must be allowed to fail in public. And it must help me at least as much as it helps others.

“Public” here doesn’t mean public infrastructure. It means public accountability: the agent’s behavior, boundaries, and failures are visible and testable, even if the system itself runs privately. Private agents can still support public interfaces — in fact, they often must. Agents are expected to work quietly and reliably in the background; accountability is about what can be observed, not where the code runs.

That rule isn’t about transparency for its own sake. It’s about credibility. If something only works in private, it’s hard to trust. If it never fails visibly, it’s impossible to learn from. And if it’s built only for others, it tends to drift away from reality very quickly.

When people talk about AI agents, a familiar set of expectations usually comes up: autonomy, context awareness, memory, tool use, the ability to act rather than just respond. Those expectations aren’t wrong. But they’re often discussed abstractly, without saying where they actually show up in a working system — and where they don’t.

Putting an agent on my homepage forced me to answer that question honestly.

In some important ways, the homepage agent clearly behaves like an agent. It has a concrete goal: helping visitors orient themselves in my work and decide what is relevant to them. It reasons over context instead of dumping information, and it makes decisions I don’t micro-prompt — how deep to go, when to summarize, and when to redirect back to me. When a question calls for depth, it hands off the drill-down on topics or posts to a dedicated worker instead of trying to do everything itself. That’s not just conversational polish; it’s goal-directed behavior within a defined scope.

Just as important are the ways it is deliberately constrained. The agent doesn’t invent authority or promise outcomes. It doesn’t compress complex topics into slogans just to be helpful, and it doesn’t “learn” invisibly in the background. Its memory is bounded by design. When it improves, it’s because I change the source — my writing, my structure, my thinking — not because something opaque adjusted itself overnight.

The most obvious gap becomes visible precisely because the agent runs in public: action. Today, it can reason and route, but it can’t yet take decisive steps beyond conversation. No scheduling, no coordination, no external effects. That gap isn’t accidental. It’s a boundary I want to cross explicitly, not by accident.

Making the agent public makes these boundaries impossible to ignore — and that’s exactly the point.

The next step isn’t “more intelligence”, and it isn’t primarily about improving the homepage agent itself. That agent already serves its purpose: it makes the system visible.

What comes next is about the underlying setup. In January, I want to formalize a personal agent and worker framework that runs at home, on my own infrastructure. The focus there is on structure rather than features: enabling decisive, auditable actions via MCPs; keeping sensitive context local for privacy and trust; and designing the system to be independent of any single model or vendor, so it can scale without lock-in. The homepage agent will simply remain one public interface to that system — not its center of gravity.

What I’m deliberately not adding yet is persistent state or autonomous learning. Those are powerful capabilities, and exactly the kind that deserve their own design phase, governance, and scrutiny. I see them as headroom, not omission.

The point isn’t that this agent is advanced. It’s that it’s visible, constrained, and accountable — including to me. That’s why I’m comfortable talking about it in public.

---

<p>
Tags:
{% for tag in page.tags %}
<a href="/tags/{{ tag | slugify }}/">{{ tag }}</a>{% unless forloop.last %}, {% endunless %}
{% endfor %}
</p>
