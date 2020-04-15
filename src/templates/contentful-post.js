import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Image from 'gatsby-image';

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
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;

const PostTemplate = ({data: {contentfulBlogPost: post}}) => (
  <Layout>
    <Image fluid={post.heroImage.fluid} alt="alt text" />
    <h1>{post.title}</h1>
    <MDXRenderer>{post.body.childMdx.body}</MDXRenderer>
  </Layout>
);

export default PostTemplate;
