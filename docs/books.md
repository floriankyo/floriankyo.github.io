# Books 书架

侧栏的 **Books** 打开 `/books/`，每张卡片进入独立的 `/books/<文件名>/` 页面。

## 添加一本书

1. 把 [book-template.md](book-template.md) 复制到 `_books/`，使用英文短横线文件名，例如 `_books/my-book.md`。
2. 填写书名 `title` 和作者 `book_author`。`finished` 可填写有明确记录的读完日期，例如 `2026-11-09`。已填日期的书按读完时间倒序排列，其余按书名排序。
3. `cover` 可填 `/assets/img/books/my-book.jpg`（图片放在相应目录）或完整图片 URL。留空时自动生成文字封面。
4. 阅读笔记作为普通博客文章写在 `_posts/`，按下方说明关联到书。书页自动列出文章标题和发表日期，有文章时才显示「阅读记录」。
5. 运行 `bundle exec jekyll serve`，查看 `/books/` 和书籍详情页。提交并推送 `main` 后，GitHub Pages 自动发布。

Books 使用独立 collection，不会进入博客首页的文章时间线。模板与本说明位于不发布的 `docs/` 目录。

暂不公开的书可在顶部加 `published: false`；默认构建不会生成它的卡片或详情页。不要用日期来隐藏书籍。

## 关联已有文章

系列文章可设置 `post_prefix: /posts/the-crescent-moon-`，书页会自动汇总该 URL 前缀下的文章，按发表时间正序排列。新发的系列文章会自动加入目录。

单篇或不规则命名的文章可以使用：

```yaml
related_posts:
  - /posts/kahneman-bayesian-reasoning-and-plausibility/
```

这两个字段可同时使用。例如《新月集》用 `post_prefix` 关联系列文章，再用 `related_posts` 加入《读完〈新月集〉之后》，按发表时间一起列出。

全部书籍使用真实封面，图片保存在 `assets/img/books/`，版本与来源见 [封面来源](book-covers.md)。未确认本人持有的具体版次；以后可以替换为对应版本的封面。
