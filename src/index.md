---
layout: base.njk
title: Home
permalink: /
description: Home page of Viktor Zamaraev
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
