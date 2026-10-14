---
# the default layout is 'page'
icon: fas fa-folder-open
order: 4
---

Some projects I have built.

<div class="row row-cols-1 row-cols-md-2 g-4 mt-1 project-cards">
{% for p in site.data.projects %}
  <div class="col">
    <a class="card h-100 project-card" href="{{ p.url }}" target="_blank" rel="noopener">
      <div class="project-thumb" role="img" aria-label="{{ p.name }}" style="background-image: url('{{ p.image | relative_url }}');"></div>
      <div class="card-body">
        <h3 class="card-title h5 mt-0 mb-2">{{ p.name }}</h3>
        <p class="card-text mb-2">{{ p.description }}</p>
        <span class="small project-link"><i class="fas fa-arrow-up-right-from-square fa-fw"></i> {{ p.url | remove: 'https://' }}</span>
      </div>
    </a>
  </div>
{% endfor %}
</div>

<style>
  .project-card { border: 1px solid var(--main-border-color); background: var(--card-bg); color: var(--text-color); text-decoration: none !important; border-bottom: 1px solid var(--main-border-color) !important; box-shadow: var(--card-shadow); transition: transform .2s, box-shadow .2s; overflow: hidden; }
  .project-card:hover { transform: translateY(-3px); box-shadow: 0 6px 18px rgba(0,0,0,.12); }
  .project-card .project-thumb { aspect-ratio: 16 / 10; background-size: cover; background-position: top center; border-bottom: 1px solid var(--main-border-color); }
  .project-card .card-title { color: var(--heading-color); }
  .project-card .project-link { color: var(--link-color); }
</style>
