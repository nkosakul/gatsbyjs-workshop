import React from 'react';
import Layout from '../components/layout';
import Waves from '../components/waves';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>If you want to contact me, just wave!</p>
    <div style={{marginTop: '2rem'}}>
      <Waves />
    </div>
  </Layout>
);
