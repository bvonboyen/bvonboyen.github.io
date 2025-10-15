---
layout: default
title: "Posts tagged {{ page.tag }}"
---

<h1>Posts tagged "{{ page.tag }}"</h1>

<ul>
  {% for post in site.tags[page.tag] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}</li>
  {% endfor %}
</ul>
