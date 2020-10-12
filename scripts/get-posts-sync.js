const matter = require("gray-matter");
const fs = require("fs");

const getPostsSync = () => {
  const contentDir = "posts";
  const files = getLocalFiles(contentDir);
  const posts = files.map((file) => {
    const content = fs.readFileSync(`${file}`, "utf8");
    const data = matter(content);

    return {
      fileName: file.substring(contentDir.length + 1, file.length - 3),
      fileRelativePath: file,
      data: {
        frontmatter: {
          description: data.data.summary || "",
          title: data.data.title,
          date: data.data.date || "",
          author: 'Dani de la Cruz',
        },
        markdownBody: data.content,
      },
    };
  });
  return posts;
};

const getLocalFiles = (filePath) => {
  // grab all md files
  const fg = require("fast-glob");
  const files = fg.sync(`${filePath}**/*.md`);
  return files;
};

module.exports = getPostsSync;
