import React from 'react';
import Layout from '../components/layout';
import Jumbotron from '../components/jumbotron';
import SEO from '../components/seo';

export default () => (
  <Layout>
     <SEO />
    <Jumbotron title="Hello World!" image="thailand.jpg"/>
  </Layout>
);
