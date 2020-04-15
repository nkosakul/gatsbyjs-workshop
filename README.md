# gatsbyjs-workshop
Mini Workshop using Gatsbyjs

## Init the project with gatsby and react (and create first Page)

### init the project
`yarn init -y`

## adding scripts
"build": "cross-env GATSBY_PAGE_BUILD_ON_DATA_CHANGES=true gatsby build",
"develop": "cross-env GATSBY_GRAPHQL_IDE=playground gatsby develop",
"analyze": "ANALYZE_BUDNLE_SIZE=true gatsby build"

## Install Gatsby and react
`yarn add gatsby react react-dom cross-env prettier`

## Linkin between pages
using {Link} from gatsby

## Adding Header and Footer
- activeClassName

## adding scss and using Layout
- yarn add gatsby-plugin-sass node-sass
- import '../styles/index.scss';
- gatsy-config.js

## Lets wave!

## Images
- gatsby will look in static folder for assets
- Jumbotron

## SEO
- yarn add gatsby-plugin-react-helmet react-helmet
- config!
```html
<Helmet>
    <html lang="de" />
    <title>{title}</title>
    <meta name="description" content={description} />
</Helmet>
```

## GraphQL!
- hooks/use-useSiteMetadata.js
- import { graphql, useStaticQuery } from 'gatsby';

## Image Optimazation with Sharp
 - yarn add gatsby-source-filesystem gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp
```js
{
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'images',
    path: 'images',
  },
},
```
- query images (show sharp, aliases, conditions and variables)
- ...GatsbyImageSharpFluid_withWebp

## MDX (md files that let us write jsx in the markdown file)
- create conteat page
- yarn add @mdx-js/mdx @mdx-js/react gatsby-plugin-mdx
```js
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: 'pages',
    path: require.resolve('./src/pages/'),
  },
},
{
  resolve: 'gatsby-plugin-mdx',
  options: {
    defaultLayouts: {
      default: require.resolve('./src/components/layout.js'),
    },
  },
},
```
- [image](./images)
- yarn add gatsby-remark-images
```js
gatsbyRemarkPlugins: [
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 1260,
    },
  },
],
```

## Posts
- posts/mdx
- gatsby config
```js
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: 'posts',
    path: 'posts',
  },
}
```
- gatsby-node.js
- templates/post.js


## Post
- use-posts.js
- index post previews
