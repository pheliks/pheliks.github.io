---
layout: base.njk
templateEngineOverride: liquid
title: Teaching
permalink: /teaching/
description: Teaching and research supervision by Viktor Zamaraev
---

<h2 id="current-teaching">Current teaching</h2>
<ul class="teaching_list">
{% for item in site.data.teaching.courses %}
  {% if item.current %}
  <li value="">
    <span class="course_title">
        {{ item.name }}
    </span>
    <span class="course_details">
        {{ item.detail }}
    </span>
  </li>
  {% endif %}
{% endfor %}
</ul>

<h2 id="research-supervision">Research supervision</h2>

<h3 id="current-phd-students">Current PhD students</h3>
<ul class="teaching_list">
{% for student in site.data.teaching.current_students %}
  <li>
    <span class="course_title">{{ student.name }}</span>
    <span class="course_details">{{ student.topic }}<br>{{ student.role }} · {{ student.period }}</span>
  </li>
{% endfor %}
</ul>

<h3 id="completed-phds">Completed PhDs</h3>
<ul class="teaching_list">
{% for student in site.data.teaching.completed_students %}
  <li>
    <span class="course_title">{{ student.name }}</span>
    <span class="course_details">{{ student.topic }}<br>{{ student.role }} · {{ student.period }}</span>
  </li>
{% endfor %}
</ul>

<p>I also supervise BSc final-year projects and MSc dissertations.</p>

<h2 id="previous-teaching">Previous teaching</h2>
<ul class="teaching_list">
{% for item in site.data.teaching.courses %}
  {% unless item.current %}
  <li>
    <span class="course_title">{{ item.name }}</span>
    <span class="course_details">{{ item.detail }}</span>
  </li>
  {% endunless %}
{% endfor %}
</ul>
