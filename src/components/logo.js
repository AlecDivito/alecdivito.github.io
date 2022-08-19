import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Logo = () => {
  const data = useStaticQuery(graphql`query GetLogoImage {
  file(relativePath: {eq: "images/logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
}
`);

  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      className="logo"
      alt="Alec Di Vito logo" />
  );
}

export default Logo
