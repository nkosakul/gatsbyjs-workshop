import React from 'react';
import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';
import SEO from '../components/seo';
import useContenfulPosts from '../hooks/use-contentful-posts';
import { Link } from 'gatsby';

export default () => {
  const posts = useContenfulPosts();

  return (
    <Layout>
      <SEO />
      <Jumbotron title="Hello World!" />
      <h2 style={{textAlign: 'center'}}>My Blog Posts</h2>
      {posts.map(post => (
        <article key={post.slug} className="post-preview">
          <h2>
            <Link to={post.slug}>
              {post.title}
            </Link>
          </h2>
          <p>{post.body}</p>
          <Link to={post.slug}>
            Read the article
          </Link>
        </article>
      ))}
    </Layout>
  );
};
