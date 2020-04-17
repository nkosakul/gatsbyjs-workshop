import React from 'react';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      body {
        childMdx {
          body
        }
      }
      heroImage {
        title
        fluid(maxWidth: 1260, maxHeight: 400) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

const PostTemplate = ({data: {contentfulBlogPost: post}}) => (
  <Layout>
    <Image fluid={post.heroImage.fluid} alt={post.heroImage.title} />
    <h1>{post.title}</h1>
    <MDXRenderer>{post.body.childMdx.body}</MDXRenderer>
  </Layout>
);

export default PostTemplate
