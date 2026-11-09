# Books 书架

侧栏的 **Books** 打开 `/books/`，每张卡片进入独立的 `/books/<文件名>/` 页面。

## 添加一本书

1. 把 [book-template.md](book-template.md) 复制到 `_books/`，使用英文短横线文件名，例如 `_books/my-book.md`。
2. 填写顶部信息。`title` 是书名，`book_author` 是书的作者。`reading_status` 可填“已读”“阅读记录”或“摘录”。`finished` 仅在确认读完时填写日期，如 `2026-11-09`，也可以留空；已填日期的书按读完时间倒序，未填的按书名排序。
3. `cover` 可填 `/assets/img/books/my-book.jpg`（图片放在相应目录）或完整图片 URL；留空时自动生成文字封面。`description` 是可选的卡片简介。
4. 在 `---` 后用 Markdown 写读后感，支持标题、引用、图片和链接。正文留空时，详情页显示“读后感待补充”。
5. 运行 `bundle exec jekyll serve`，查看 `/books/` 和书籍详情页。提交并推送 `main` 后，GitHub Pages 自动发布。

读后感可随时继续修改同一个文件，不需要同步维护额外的书单。Books 使用独立 collection，不会进入博客首页的文章时间线。模板与本说明位于不发布的 `docs/` 目录。

暂不公开的书可在顶部加 `published: false`；默认构建不会生成它的卡片或详情页。不要用日期来隐藏书籍。

## 关联已有文章

系列文章可设置 `post_prefix: /posts/the-crescent-moon-`，书页会自动汇总该 URL 前缀下的文章，按发表时间正序排列。新发的系列文章会自动加入目录。

单篇或不规则命名的文章可以使用：

```yaml
related_posts:
  - /posts/kahneman-bayesian-reasoning-and-plausibility/
```

二选一使用 `post_prefix` 或 `related_posts`。原文章保留原址和双语阅读功能。

当前书架共 8 本：《新月集》《思考，快与慢》《Book of Elon》《货币未来》《小岛经济学》《币安人生》《末日幸存者的独白》《新史太阁记》。《新月集》的感想摘自已有原文；《思考，快与慢》《Book of Elon》保留已有摘录，其余 5 本根据本人补充的已读书目收录，读后感待写。具体读完日期均待补充，不用文章发布日期代替。

全部书籍使用真实封面，图片保存在 `assets/img/books/`，版本与来源见 [封面来源](book-covers.md)。未确认本人持有的具体版次；以后可以替换为对应版本的封面。
