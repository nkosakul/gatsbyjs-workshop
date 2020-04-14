import React from 'react';
import Layout from '../components/layout';
import Waves from '../components/waves';
import Jumbotron from '../components/jumbotron';
import SEO from '../components/seo';

export default () => (
  <>
    <Layout>
      <SEO title="About Me" description="The place to be" />
      <Jumbotron title="About me" image="temple.jpg"/>
      <p>If you want to contact me, just wave!</p>
      <div style={{marginTop: '2rem'}}>
        <Waves />
      </div>
    </Layout>
  </>
);
