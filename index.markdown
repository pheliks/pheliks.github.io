---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: single
classes: wide
title: Home
description: Home page of Viktor Zamaraev
sidebar:
  - title: "Viktor Zamaraev"
    image: ./assets/portfolio.png
    image_alt: "image"
    text: "Lecturer<br /> Department of Computer Science<br /> University of Liverpool"
  - title: "Contact"
    text: "Email: [Viktor.Zamaraev@liverpool.ac.uk](mailto:Viktor.Zamaraev@liverpool.ac.uk)"
---


<div class="shortBio">

<!--
  <ul class="bio_list">
  {% for item in site.data.bioRecords.bio %}
    <li>
      <span class="bio_record_period">{{ item.date }}</span>
      <span class="bio_record_descr">{{ item.record }}</span>
    </li>
  {% endfor %}
  </ul>
-->


  <table class="bio_table">
  {% for item in site.data.bioRecords.bio %}
    <tr class="bio_record">
    <td class="bio_record_period">{{ "" | append: item.date | append: "" | markdownify | remove: '<p>' | remove: '</p>' }}</td>
    <td class="bio_record_descr">{{item.record | markdownify | remove: '<p>' | remove: '</p>' }}</td>
    </tr>
  {% endfor %}
  </table>
</div>






