# AGENTS.md

This repo is a personal blog built on `jekyll-theme-chirpy` via `chirpy-starter`.

## Start Here

- Upgrade guide: https://github.com/cotes2020/jekyll-theme-chirpy/wiki/Upgrade-Guide
- Local run guide: https://chirpy.cotes.page/posts/getting-started/

If you need the full workflow, read those URLs directly instead of relying on copied instructions here.

## Repo Notes

- The upstream starter remote is already configured as `chirpy`.
- Main config is in `_config.yml`.
- Posts live in `_posts/`.
- Tabs live in `_tabs/`.
- Generated output is `_site/`; do not edit it manually.
- `assets/lib` is a git submodule; avoid changing it unless the task is explicitly about static assets or upgrades.

## Common Commands

- `bundle install`: install Ruby gem dependencies for the site.
- `bundle exec jekyll serve`: start the local Jekyll development server.
- `bash tools/run.sh`: start the local server with the repo helper script and livereload.
- `bash tools/test.sh`: build the site in production mode and run `htmlproofer` checks.

## Post Workflow

- Posts are written directly in this repo under `_posts/YYYY-MM-DD-title-slug.md`; this repo is the only source of truth.
- Preview locally with `bash tools/run.sh` and check the rendered post in the browser.
- Commit and push to `main` to publish; the deploy workflow runs automatically.
- There is no sync step with the Obsidian vault (`MyWorld`); the old `4-Archive/blog` copy was removed.

## Deployment

- GitHub Pages deploy workflow: `.github/workflows/pages-deploy.yml`
- Pushes to `main` trigger deployment.
- Production site domain: `https://floriankyo.com`
- When validating a deploy, check the live site on `https://floriankyo.com` and the expected post URL under `/posts/<slug>/`.
