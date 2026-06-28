# Blog Post Workflow

## When to use

Use this workflow for:

- syncing new posts from Obsidian into `_posts/`
- checking whether a synced post renders correctly
- validating multilingual post switching locally
- handing the page off to the user for manual Chrome review
- revalidating after user edits
- publishing one or more posts to `main`
- syncing a reviewed repo copy back to Obsidian

## Primary commands

Run these from `/Users/kyobook/Documents/floriankyo.github.io`:

```bash
bash tools/sync-posts.sh
git status --short --branch
bash tools/run.sh
bash tools/test.sh
```

## Sync and identify posts

1. Run `bash tools/sync-posts.sh`.
2. Run `git status --short --branch`.
3. Identify the intended new or modified post files under `_posts/`.
4. If sync changed an older post unexpectedly, inspect its diff before publishing anything.

Common case:

```bash
sed -n '1,40p' _posts/<filename>.md
git diff -- _posts/<older-file>.md
```

If an older file was reverted from the repo’s intended state by sync, restore the intended repo version before testing or committing.

## Local server

Use the repo helper:

```bash
bash tools/run.sh
```

Expected URLs:

- site root: `http://127.0.0.1:4000/`
- LiveReload: `http://127.0.0.1:35729`
- post slug: `http://127.0.0.1:4000/posts/<slug>/`

If Chrome shows `ERR_CONNECTION_REFUSED`, restart `bash tools/run.sh` and reload the page.

## Browser validation in Chrome

Prefer Google Chrome with the Chrome computer-use tool for actual validation.

This step is collaborative:

1. The agent performs an initial Chrome-based check.
2. The user reviews the page in Chrome personally.
3. If the user edits the post in the repo copy or in Obsidian and resyncs, rerun the validation loop.
4. Only publish after the user explicitly indicates the post is ready.

### Open the page

Use a shell command to open the target page:

```bash
open -a "Google Chrome" http://127.0.0.1:4000/posts/<slug>/
```

Then inspect Chrome with the computer-use tool:

- call `get_app_state` for `Google Chrome`
- verify the active tab URL matches the local post URL
- check the page title, visible heading, description, and main body content

After the agent’s check, leave the local server running and give the user the local URL so they can inspect the same page in Chrome.

### What to validate

For single-language posts:

- page title is correct
- `<h1>` equivalent is visible in Chrome
- description text is present if expected
- main quoted or prose content is visible
- special embeds or cards render correctly

For multilingual posts:

- English tab renders expected title and body
- Chinese tab renders expected title and body
- clicking the language switch updates the visible content
- URL query may change to `?lang=zh-CN`; that is expected

### Suggested local checks

Use quick HTML checks alongside the browser:

```bash
curl -I --max-time 10 http://127.0.0.1:4000/posts/<slug>/
curl -s --max-time 10 http://127.0.0.1:4000/posts/<slug>/ | rg -n "<h1 id=\"post-title\"|<meta property=\"og:title\""
```

These do not replace the Chrome check; they complement it.

## Review loop

Use this loop until the user says the post is good:

1. Sync from Obsidian or read the current repo copy.
2. Run the local server if needed.
3. Validate in Chrome with the computer-use tool.
4. Report what is rendering correctly and any concrete problems.
5. Let the user review in Chrome.
6. If the user makes changes, rerun the relevant local checks and Chrome validation.

Do not jump straight from the first successful browser check to commit and push unless the user explicitly asks to publish immediately.

## Production validation before publish

Run:

```bash
bash tools/test.sh
```

This must pass before publishing.

Run it only when the post is ready to publish, not as a substitute for the earlier collaborative review loop.

## Commit and push

Stage only the intended post files:

```bash
git add _posts/<file1>.md [_posts/<file2>.md ...]
git commit -m "Publish <short title>"
git push origin main
```

Use one combined commit when publishing multiple posts together.

Do this only after the user confirms the reviewed post is ready.

## Post-push verification

After pushing:

1. Check the latest `Build and Deploy` workflow with `gh run list --workflow "Build and Deploy" --limit 5`.
2. Wait for completion with `gh run watch --exit-status <run_id>`.
3. Verify the live post URL returns `200`.
4. Confirm the live HTML contains the expected title.

Typical commands:

```bash
curl -I -L --max-time 20 https://floriankyo.com/posts/<slug>/
curl -sL --max-time 20 https://floriankyo.com/posts/<slug>/ | rg -n "<meta property=\"og:title\"|<h1 id=\"post-title\"|Expected Title"
```

## Syncing reviewed changes back to Obsidian

Do this after publishing when the repo copy of a post was edited during review or implementation.

Use non-destructive single-file sync back to `~/Documents/MyWorld/4-Archive/blog`.

Example:

```bash
rsync -av _posts/<file>.md ~/Documents/MyWorld/4-Archive/blog/
```

Do not delete unrelated files in the Obsidian folder.

## Known repo-specific gotchas

- `bash tools/sync-posts.sh` uses `rsync --delete`, so placeholder files or renamed files in `_posts/` may disappear after sync.
- Sync can overwrite handcrafted repo-side post formatting changes if the Obsidian source still has the older content.
- `washington-quote.md` has been reverted by sync from a YouTube card include back to a plain Markdown link multiple times; inspect older changed files before publishing.
- The deploy workflow currently emits GitHub Actions Node 20 deprecation warnings. Mention that as a follow-up risk when relevant.
