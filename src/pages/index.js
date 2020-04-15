import React from 'react';
import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';
import SEO from '../components/seo';

export default () => {
  return (
    <Layout>
      <SEO />
      <Jumbotron title="Hello World!" />
    </Layout>
  );
};
