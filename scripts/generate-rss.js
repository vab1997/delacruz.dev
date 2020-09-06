const fs = require("fs");
const RSS = require("rss");
const getPostsSync = require("./get-posts-sync");

function dateSortDesc(a, b) {
  const date1 = new Date(a.data.frontmatter.date);
  const date2 = new Date(b.data.frontmatter.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

function generate() {
  const previewItems = getPostsSync(false, null, "content/blog");
  const feed = new RSS({
    title:
      "Dani de la Cruz | Mentoring, tutoría y coaching a medida para programadores y programadoras que buscan dar un salto en su carrera profesional",
    site_url: "https://delacruz.dev",
    feed_url: "https://delacruz.dev/feed.xml",
  });

  previewItems.sort(dateSortDesc).map((post) => {
    feed.item({
      title: post.data.frontmatter.title,
      guid: post.fileName,
      url: `https://delacruz.dev/blog/${post.fileName}`,
      date: post.data.frontmatter.date,
      description: post.data.frontmatter.description,
      author: post.data.frontmatter.author,
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync("./.next/static/feed.xml", rss);
}

generate();
