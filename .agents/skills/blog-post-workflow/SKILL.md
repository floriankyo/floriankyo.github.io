---
name: blog-post-workflow
description: Sync, validate, and publish posts in this blog repo. Use when working on post intake from Obsidian, local Jekyll preview, Chrome-based browser validation, production testing, GitHub Pages publishing, or syncing reviewed post changes back to the Obsidian blog folder.
---

# Blog Post Workflow

Use this skill in `/Users/kyobook/Documents/floriankyo.github.io`.

Read [references/workflow.md](references/workflow.md) for the concrete procedure.

Keep these rules in mind:

- Sync from `~/Documents/MyWorld/4-Archive/blog` before reviewing or publishing a post.
- Validate with the local Jekyll server and a real browser in Google Chrome via the Chrome computer-use tool, not only with `curl`.
- The workflow is collaborative, not fully automated: the agent checks in Chrome first, then the user reviews in Chrome, and publishing happens only after the user decides the post is good.
- If the user makes changes after a review pass, rerun the local validation again before publishing.
- Run `bash tools/test.sh` before publishing.
- If sync changes older posts unexpectedly, inspect the diff and avoid publishing unrelated regressions.
- If a post is edited in this repo during review, sync that updated file back to `~/Documents/MyWorld/4-Archive/blog` non-destructively after publishing is complete.
