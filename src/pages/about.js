import React from 'react';
import Layout from '../components/layout';
import Waves from '../components/waves';
import SEO from '../components/seo';

export default () => {
  return (
    <Layout>
      <SEO pageTitle="About Me" pageDescription="The place to be" />
      <h1>About me</h1>
      <p>If you want to contact me, just wave!</p>
      <div style={{marginTop: '2rem'}}>
        <Waves />
      </div>
    </Layout>
  );
};
