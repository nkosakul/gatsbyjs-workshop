module.exports = {
  siteMetadata: {
    title: 'Frontend Workshop',
    description: 'Little Frontend Workwhop Project with Gatsby'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      }
    },
  ],
};
