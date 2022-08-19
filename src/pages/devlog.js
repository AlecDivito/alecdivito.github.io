import React from "react";
import { graphql } from 'gatsby';
import Hero from "../components/hero";
import Layout from "../components/layout";
import Card from '../components/complex/card';
import Seo from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import SocialLinks from "../components/data/socialLinks";
import Section from "../components/simple/section";
import { Common, CommonLeft, CommonRight } from "../components/simple/common";

const DevlogPage = ({ data }) => (
    <Layout>
        <Seo title="Projects" />
        <Hero
            title="Dev Log"
            subTitle="Public documents on past and present projects"
            tags={["Development", "Problems", "Challeneges"]} />
        <Common>
            <CommonRight>
                <Section title="Projects">
                    {data.allProjectsJson.nodes.map((p) =>
                        <Card
                            image={<GatsbyImage image={p.image.childImageSharp.gatsbyImageData} alt={p.title} className="card__image" />}
                            title={p.title}
                            description={p.description}
                            status={p.status}
                            tags={p.technologies}
                            site={p.siteLink}
                            github={p.githubLink}
                            posts={p.blogPost}
                            key={p.title}
                        />
                    )}
                </Section>
            </CommonRight>
            <CommonLeft>
                <SocialLinks />
            </CommonLeft>
        </Common>
    </Layout>
);

export const query = graphql`
query GetPersonalProjectsData {
  allProjectsJson {
    nodes {
      id
      status
      title
      status
      technologies
      description
      blogPost {
        title
        content
        year
        month
        day
      }
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      logo {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50, layout: FIXED)
        }
      }
      githubLink
      siteLink
    }
  }
}
`

export default DevlogPage;