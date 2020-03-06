---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: single
classes: wide
#title: Viktor Zamaraev's home page
sidebar:
   - title: "Viktor Zamaraev"
     image: ./assets/portfolio.png
     image_alt: "image"
     text: "Lecturer<br /> Department of Computer Science<br /> University of Liverpool"
   - title: "Contact"
     text: "Email: [Viktor.Zamaraev@liverpool.ac.uk](mailto:Viktor.Zamaraev@liverpool.ac.uk)"
---

## Talks

<ol class="talks_list">
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
</ol>