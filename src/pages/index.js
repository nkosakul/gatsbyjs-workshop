import React from 'react';
import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';
import SEO from '../components/seo';
import usePosts from '../hooks/use-posts';
import { Link } from 'gatsby';

export default () => {
  const posts = usePosts();

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
          <small>{post.author}</small>
          <p>{post.excerpt}</p>
          <Link to={post.slug}>
            Read the article
          </Link>
        </article>
      ))}
    </Layout>
  );
};
