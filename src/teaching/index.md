---
layout: base.njk
templateEngineOverride: liquid
title: Teaching
permalink: /teaching/
description: Teaching by Viktor Zamaraev
---

<ul class="teaching_list">
{% for item in site.data.teaching.courses %}
  <li>
    <span class="course_title">
        {{ item.name }}
    </span>
    <span class="course_details">
        {{ item.detail }}
    </span>
  </li>
{% endfor %}
</ul>
