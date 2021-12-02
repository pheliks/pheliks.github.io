---
layout: splash
class: wide
permalink: /temporal-graphs/

title: Temporal Graph Theory
excerpt: Foundations for temporal network analysis
description: The workshop 'Algorithmic and Combinatorial Aspects of Temporal Graph Theory' aims to highlight and strengthen connections between the emerging area of Temporal Graph Theory and other areas of mathematics and computer science. The event is organized by Viktor Zamaraev and is sponsored by The London Mathematical Society, Networks Sciences & Technologies initiative, and the Department of Computer Science of the University of Liverpool.
header:
  overlay_image: /assets/images/workshop_30_03_2020/background1.jpg

gallery:
  - url: https://www.lms.ac.uk/
    image_path: /assets/images/workshop_30_03_2020/lms.jpg
    alt: "London Mathematical Society"
    title: "London Mathematical Society"
  - url: https://www.liverpool.ac.uk/network-science-technologies/
    image_path: /assets/images/workshop_30_03_2020/nest.png
    alt: "Networks Sciences & Technologies"
    title: "Networks Sciences & Technologies"
  - url: https://www.liverpool.ac.uk/computer-science/
    image_path: /assets/images/workshop_30_03_2020/liverpool.svg
    alt: "Department Of Computer Science, University of Liverpool"
    title: "Department Of Computer Science, University of Liverpool"

feature_row:
  - image_path: /assets/images/temporal_graphs/research.png
    alt: "Research"
    title: "Research"
    excerpt: Research projects & publications
    btn_label: More
    btn_class: "btn--inverse"
    url: https://www.cs.le.ac.uk/people/te17/
  - image_path: /assets/images/temporal_graphs/event.png
    alt: "Events"
    title: "Events"
    excerpt: Workshops & conferences
    btn_label: More
    btn_class: "btn--inverse"
    url: http://www.dcs.gla.ac.uk/~kitty/
  - image_path: /assets/images/temporal_graphs/tools.png
    alt: "Software"
    title: "Software"
    excerpt: Libraries, tools, etc.
    btn_label: More
    btn_class: "btn--inverse"
    url: https://alexeypokrovskiy.com/
---

<!--
<div class="workshop_header">
    <h1 class="workshop_header_h1"> Algorithmic and Combinatorial Aspects of Temporal Graph Theory</h1> 
    <p>30 March 2020, University of Liverpool</p>
</div>
-->

<!--
In modern systems the classical modeling paradigm using static graphs may be restrictive or oversimplifying, 
as the interactions among the elementary system units usually change over time in a highly dynamic manner. 
For example, friendships are added and removed over time in a social network and links in a communication network may change dynamically, 
either according to a specific known pattern (satellites following a trajectory) or in an unpredictable manner (mobile ad hoc networks). 
The common characteristic in all these application areas is that the system structure, i.e. graph topology, is subject to discrete changes over time. In such dynamically changing graphs the notion of vertex adjacency needs to be revisited and various graph concepts, 
e.g. reachability and connectedness, now crucially depend on the exact temporal ordering of the edges' presence.

A temporal graph is a graph that changes over time. Assuming discrete time and a fixed set V of vertices, a temporal graph can be viewed as a discrete sequence G1, G2, ... of static graphs, each with vertex set V. Many notions and algorithms from the static case can be naturally transferred in a meaningful way to their temporal counterpart, while in other cases new approaches are needed to define the appropriate temporal notions. In particular, some problems become radically different and substantially more difficult when the time dimension is additionally taken into account.


Temporal graph theory is an emerging area motivated by the need of mathematical foundations for analysis of 
temporal networks arising from rich and rapidly growing domain of modern systems with dynamic interactions 
including Internet, mobile-phone networks, ecological networks, social networks, wireless ad hoc networks, 
transportation networks, etc.
-->

I'm contributing to the development of Temporal Graph Theory by conducting research, organizing events, and developing software.

## Research directions

### Random temporal graphs

### Algorithmic aspects of temporal graphs 


## Events

### "Algorithmic Aspects of Temporal Graphs" workshop series

### “Algorithmic and Combinatorial Aspects of Temporal Graph Theory” workshop

### Symposium on Algorithmic Foundations of Dynamic Networks


## Overtime library

I initiated and drive the development of an open-source Python library for Temporal Network analysis -- [Overtime](https://github.com/overtime3/overtime). 

Our team implements within the library basic temporal graph algorithms as well as more specialised algorithms from recent research papers.

We also collect temporal graph datasets and implement various auxiliary tools, such as visualisation of temporal networks. If you are interested in contributing to the library or would like to propose an algorithm or a tool for implementation, please, get in touch.

Main contributors:
- [Seán O'Callaghan](https://www.linkedin.com/in/se%C3%A1n-o-callaghan-0a7978129/) (MSc student, 2020) -- developed the initial version of the library, introduced unit testing and continuous integration process in the library.
- Jack Brown (MSc student, 2021) -- implemented various temporal centrality measures in the library. 
- [Thepnathi Chindalaksanaloet](https://www.linkedin.com/in/thepnathi/) (undergrad student, 2021) -- [London undergraound dataset](https://github.com/overtime3/overtime/tree/dev/data/London-underground-1-day) collection and visualisation.


<!--
{% include feature_row %}
-->

