import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({title, description}) => {
  const siteDescription = description || 'Little Frontend Testproject with Gatsby';

  return (
    <Helmet>
      <html lang="de" />
      <title>{title}</title>
      <meta name="description" content={siteDescription} />
    </Helmet>
  );
};

export default SEO;
