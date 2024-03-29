import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Nav from "./nav";
import Footer from "./footer";
import SocialFooter from "./socialFooter";
import "./layout.scss";

const navData = graphql`
query GetNavData {
  allExternalNavJson {
    nodes {
      id
      image
      link
      type
      alt
    }
  }
  allInternalNavJson {
    nodes {
      id
      link
      ready
      title
    }
  }
  site {
    siteMetadata {
      email
      title
    }
  }
  file(relativePath: {eq: "images/footer/alec-head.png"}) {
    childImageSharp {
      gatsbyImageData(width: 150, layout: FIXED)
    }
  }
}
`;

const Layout = ({ children }) => {
  const [navActive, setNavActive] = useState(false);

  return (
    <StaticQuery query={navData} render={data => (
      <div className="page">
        <Nav
          links={data.allInternalNavJson.nodes}
          navActive={navActive}
          onNavClick={() => setNavActive(!navActive)}
        >
          <SocialFooter
            external={data.allExternalNavJson.nodes}
            email={data.site.siteMetadata.email}
          />
        </Nav>
        <main className="page--content">{children}</main>
        <Footer
          externalLinks={data.allExternalNavJson.nodes}
          alecHead={<GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="Headshot of Alec" />}
        />
      </div>
    )} />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
