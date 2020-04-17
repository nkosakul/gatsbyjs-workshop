import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => {
  return (
    <>
      <Layout>
        <h1>Hello World!</h1>
        <Link to="/about/">to about page</Link>
      </Layout>
    </>
  );
};
