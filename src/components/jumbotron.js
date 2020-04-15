import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';

const Jumbotron = ({title}) => {
  const jumbotronImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "thailand.jpg"}) {
        sharp: childImageSharp {
          fluid(maxWidth: 1920, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <div className="jumbotron">
      <h1>{title}</h1>
      <Image fluid={jumbotronImage.image.sharp.fluid} alt="alt text" />
    </div>
  );
};

export default Jumbotron
