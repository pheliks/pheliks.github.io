---
layout: base.njk
templateEngineOverride: liquid
title: Teaching
permalink: /teaching/
description: The list of courses taught by Viktor Zamaraev
---

<ul class="teaching_list">
{% for item in site.data.teaching.courses %}
  <li value="">
    <span class="course_title">
        {{ item.name }}
    </span>
    <span class="course_details">
        {{ item.detail }}
    </span>
  </li>
{% endfor %}
</ul>
