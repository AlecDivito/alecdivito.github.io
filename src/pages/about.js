import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../components/hero";
import Layout from "../components/layout"
import Widget from "../components/widget";
import Seo from "../components/seo"

import { GatsbyImage } from "gatsby-plugin-image";
import Statistic from "../components/complex/statistic";
import SocialLinks from "../components/data/socialLinks";
import { HorizontalList } from "../components/simple/list";
import Section from "../components/simple/section";
import { Common, CommonLeft, CommonRight } from "../components/simple/common";

const AboutPage = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <Seo title="About Me" />
       <Hero
        title="About Alec"
        subTitle="Professional and Personal"
        tags={["Programmer", "Engineer", "Cyclist"]}
      >
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          style={{ borderRadius: '100%' }}
          alt="Alec Divito Profile Picture" />
      </Hero>
      <Common>
        <CommonRight>
          <Section title="About me">
            {data.dataJson.about.widgets.map(w =>
              <Widget title={w.title} description={w.description} key={w.title} />
            )}
          </Section>

          {data.dataJson.about.info.map(w =>
            <Section varient="h3" title={w.title} key={w.title}>
              <HorizontalList className="list--sb">
                {w.items.map(item =>
                  <Statistic key={`${item.link}-${item.title}`} {...item} />
                )}
              </HorizontalList>
            </Section>
          )}

          <Section title={data.dataJson.about.favoriteLang.title}>
            <HorizontalList className="list--sb">
              {data.dataJson.about.favoriteLang.items.map(item =>
                <Statistic key={item.subTitle} {...item} />
              )}
            </HorizontalList>
          </Section>

          <Section title={data.dataJson.about.interested.title}>
            <HorizontalList className="list--sb">
              {data.dataJson.about.interested.items.map(item =>
                <Statistic key={item.subTitle} {...item} />
              )}
            </HorizontalList>
          </Section>
        </CommonRight>
        <CommonLeft>
          <SocialLinks />
        </CommonLeft>
      </Common> 
    </Layout>
  );
}

const query = graphql`
query AboutMeQuery {
  dataJson {
    about {
      info {
        title
        items {
          bigImage
          image
          link
          subTitle
          title
        }
      }
      widgets {
        description
        title
      }
      favoriteLang {
        title
        items {
          bigImage
          image
          subTitle
        }
      }
      interested {
        title
        items {
          bigImage
          image
          subTitle
        }
      }
    }
  }
  file(relativePath: {eq: "images/about/Profile_Pic_Alec_Divito.png"}) {
    childImageSharp {
      gatsbyImageData(width: 220, height: 220, layout: FIXED)
    }
  }
}
`;

export default AboutPage
