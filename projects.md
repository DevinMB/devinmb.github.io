---
layout: default
title: Projects
wide: true
description: Side projects by Devin Butts. Streaming pipelines, live apps, hardware and a self-running homelab.
---

<p class="eyebrow">Selected work</p>

# Projects

<p class="intro">Things I've built for the fun of it: small services wired together with Kafka, a bit of hardware and radio, and a homelab that runs them all with no cloud bill.</p>

{% assign live = site.data.projects | where: "group", "live" %}
{% assign built = site.data.projects | where: "group", "built" %}
{% assign small = site.data.projects | where: "group", "small" %}

<section class="pgroup" aria-labelledby="live-h">
  <h2 class="pgroup-h" id="live-h">Live now <span class="count">{{ live.size }}</span></h2>
  <div class="pgrid pgrid-2">
    {% for p in live %}{% include project-card.html p=p %}{% endfor %}
  </div>
</section>

<section class="pgroup" aria-labelledby="built-h">
  <h2 class="pgroup-h" id="built-h">Built <span class="count">{{ built.size }}</span></h2>
  <div class="pgrid">
    {% for p in built %}{% include project-card.html p=p %}{% endfor %}
  </div>
</section>

<section class="pgroup" aria-labelledby="small-h">
  <h2 class="pgroup-h" id="small-h">Smaller builds <span class="count">{{ small.size }}</span></h2>
  <ul class="plist">
    {% for p in small %}
    <li>
      <a class="plist-name" href="{{ p.repo }}">{{ p.name }}</a>
      <span class="plist-line">{{ p.line }}</span>
      <span class="plist-stack">{{ p.stack | join: " · " }}</span>
    </li>
    {% endfor %}
  </ul>
</section>
