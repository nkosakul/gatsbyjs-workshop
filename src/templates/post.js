import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';

export const query = graphql`
 query($slug: String!) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        author
        slug
      }
      body
    }
  }
`;

const PostTemplate = ({data: {mdx: post}}) => (
  <Layout>
    <MDXRenderer>{post.body}</MDXRenderer>
    <p>Author: {post.frontmatter.author}</p>
  </Layout>
);

export default PostTemplate;
