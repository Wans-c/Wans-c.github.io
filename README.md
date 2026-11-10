# Wans 的小站

一个使用原生 HTML、CSS 和 JavaScript 构建的轻量个人博客，可直接部署到 GitHub Pages。

## 本地预览

由于文章数据通过 `fetch` 从 JSON 文件读取，请使用本地静态服务器预览（不要直接用 `file://` 打开）：

```bash
python3 -m http.server 8000
```

然后访问 <http://localhost:8000>。

## 发布到 GitHub Pages

仓库已配置 GitHub Pages 时，提交 `index.html`、`styles.css`、`script.js` 和 `posts.json` 到发布分支即可。页面会从同目录下的 `posts.json` 加载文章。

## 添加文章

编辑 `posts.json` 并追加一条记录，字段包括 `id`、`title`、`excerpt`、`category`、`date`（YYYY-MM-DD）、`readTime`、`tags` 和 `body`。目前已包含 20 条示例文章。替换示例内容后即可作为自己的博客使用。
