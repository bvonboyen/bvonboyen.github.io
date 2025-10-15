---
layout: default
title: "Posts tagged sports"
tag: sports            # <-- must match your posts' tag spelling
permalink: /tags/sports/
hidden: true
---

<h1>{{ page.title }}</h1>

{%- assign tag_lc = page.tag | downcase -%}
{%- assign posts_for_tag = '' | split: '' -%} {# empty array #}

{%- for t in site.tags -%}
  {%- assign tag_name = t[0] -%}
  {%- if tag_name | downcase == tag_lc -%}
    {%- assign posts_for_tag = t[1] -%}
    {%- break -%}
  {%- endif -%}
{%- endfor -%}

{%- if posts_for_tag and posts_for_tag.size > 0 -%}
  <ul>
    {%- for post in posts_for_tag -%}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>— {{ post.date | date: "%B %d, %Y" }}</small>
      </li>
    {%- endfor -%}
  </ul>
{%- else -%}
  <p>No posts found with tag ‘{{ page.tag }}’.</p>
{%- endif -%}

<!-- Debug:
{% for t in site.tags %}
  {{ t[0] }},
{% endfor %}
-->
