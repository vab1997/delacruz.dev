import matter from "gray-matter";
import Head from "next/head";
import React from "react";
import BlogHeader from "../../components/blog-header";
import BlogPost from "../../components/blog-post";
import Layout from "../../components/layout";

const glob = require("glob");

export default function Post(props) {
  return (
    <Layout
      title={props.frontmatter?.title}
      description={props.frontmatter?.summary}
      url={props.slug}
      image={props.frontmatter?.imageSrc}
    >
      <Head>
        {props.frontmatter?.hasTweets && (
          <script async={true} src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
        )}
      </Head>
      <BlogPost {...props} />
      <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="danidelacruz" data-description="¡Invítame a un café!" data-message="¡Gracias por leer mi blog! Si te ha gustado el contenido, puedes invitarme a un café." data-color="#FF5F5F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
      slug,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync("src/posts/**/*.md");

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) => file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim());

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/blog/${slug}`);
  return {
    paths,
    fallback: true,
  };
}
