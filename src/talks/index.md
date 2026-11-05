---
layout: base.njk
title: Talks
permalink: /talks/
description: The list of seminar and conference talks by Viktor Zamaraev
---

<ul class="talks_list">
{% assign talkIndex = site.data.talks.talks.size %}
{% for item in site.data.talks.talks %}
  <li value="{{ talkIndex }}">
    <span class="pub_title">
        {% if item.link %}
            <a target="_blank" rel="nofollow" href="{{ item.link }}">{{ item.type }}</a>,
        {% else %}
            {{ item.type | append: ", "}}
        {% endif %}
    </span>
    <span class="pub_details">
        {{ item.detail }}
    </span>
  </li>
  {% assign talkIndex = talkIndex | minus: 1 %}
{% endfor %}
</ul>
