import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Image = () => {
  const data = useStaticQuery(graphql`query GetAboutMeRepairShop {
  file(relativePath: {eq: "images/Sheridan-Bike-Hub-repair.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
}
`);


  return (
    <GatsbyImage
      image={data.file.childImageSharp.gatsbyImageData}
      className="profile-pic"
      objectFit="cover"
      objectPosition="50% 50%"
      alt="Alec Divito Profile Picture" />
  );
}

export default Image
