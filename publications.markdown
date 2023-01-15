---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: single
classes: wide
permalink: /publications/
site.description: List of publications of Viktor Zamaraev
title: Publications
description: The list of publications of Viktor Zamaraev
sidebar:
   - title: "Viktor Zamaraev"
     image: ./assets/portfolio.png
     image_alt: "image"
     text: "Lecturer<br /> Department of Computer Science<br /> University of Liverpool"
   - title: "Contact"
     text: "Email: [Viktor.Zamaraev@liverpool.ac.uk](mailto:Viktor.Zamaraev@liverpool.ac.uk)"
---


## Journal Publications
<ol class="pub_list">
{% assign journalPubIndex = site.data.publications.journal.size %}
{% for item in site.data.publications.journal %}
  <li value="{{ journalPubIndex }}">
    <span class="pub_title">
      {% if item.link %}
        <a target="_blank" rel="nofollow" href="{{ item.link }}">{{ item.title }}</a>
      {% else %}
        {{ item.title }}
      {% endif %}
    </span>
    <br>
    <span class="pub_details">
      {% if item.coauthors %}
        <span class="journal">{{ item.journal | append: ". "}}</span> {{item.outputData }} (with {{ item.coauthors }})
      {% else %}
        <span class="journal">{{ item.journal | append: ". "}}</span> {{item.outputData }}
      {% endif %}
    </span>
  </li>
  {% assign journalPubIndex = journalPubIndex | minus: 1 %}
{% endfor %}
</ol>



## Conference Publications

<ol class="pub_list">
{% assign confPubIndex = site.data.publications.conference.size %}
{% for item in site.data.publications.conference %}
  <li value="{{ confPubIndex }}">
    <span class="pub_title">
      {% if item.link %}
        <a target="_blank" rel="nofollow" href="{{ item.link }}">{{ item.title }}</a>
      {% else %}
        {{ item.title }}
      {% endif %}
    </span>
    <br>
    <span class="pub_details">
      {% if item.coauthors %}
        <span class="conference">{{ item.conference | append: " " | append: item.year }}</span> (with {{ item.coauthors }})
      {% else %}
        <span class="conference">{{ item.conference | append: " " | append: item.year }}</span>
      {% endif %}
    </span>
  </li>
  {% assign confPubIndex = confPubIndex | minus: 1 %}
{% endfor %}
</ol>