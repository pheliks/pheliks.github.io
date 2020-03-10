---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: single
classes: wide
permalink: /teaching/
title: Teaching
description: The list of courses taught by Viktor Zamaraev
sidebar:
   - title: "Viktor Zamaraev"
     image: ./assets/portfolio.png
     image_alt: "image"
     text: "Lecturer<br /> Department of Computer Science<br /> University of Liverpool"
   - title: "Contact"
     text: "Email: [Viktor.Zamaraev@liverpool.ac.uk](mailto:Viktor.Zamaraev@liverpool.ac.uk)"
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