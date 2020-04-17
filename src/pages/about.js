import React from 'react';
import Layout from '../components/layout';
import Waves from '../components/waves';
import '../styles/index.scss';
import SEO from '../components/seo';

export default () => (
  <>
    <Layout>
        <SEO pageTitle="About" pageDescription="About Description"/>
        <h1>About me</h1>
        <p>This is the about page!</p>
        <Waves />
    </Layout>
  </>
);
