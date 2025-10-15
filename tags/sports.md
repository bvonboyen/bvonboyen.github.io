---
layout: default
title: "Posts tagged sports"
tag: sports
permalink: /tags/sports/
hidden: true
---

<h1>{{ page.title }}</h1>

<ul>
  {% for post in site.tags[page.tag] %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>— {{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>

{% if site.tags[page.tag] == nil %}
  <p>No posts found with tag '{{ page.tag }}'.</p>
{% endif %}
