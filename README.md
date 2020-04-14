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
