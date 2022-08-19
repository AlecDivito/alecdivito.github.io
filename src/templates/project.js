import React from 'react';
import { graphql } from "gatsby";
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage } from "gatsby-plugin-image";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Article from '../components/simple/article';
import TableOfContents from '../components/complex/tableOfContents';
import LinkedArticle from '../components/simple/linkedArticle';
import { HorizontalList } from '../components/simple/list';
import Header from '../components/header'
import Section from '../components/simple/section';
import { Common, CommonLeft, CommonRight } from "../components/simple/common";

export const query = graphql`
query ($slug: String!, $articles: [String!]) {
  allMdx(filter: {fields: {slug: {in: $articles}}}) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        project
        subTitle
      }
    }
  }
  mdx(fields: {slug: {eq: $slug}}) {
    frontmatter {
      author
      publishedDate
      title
      subTitle
      tags
      description
      startDate
      endDate
      totalTime
      articles
      images {
        publicURL
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          fluid {
            originalName
          }
        }
      }
    }
    fields {
      slug
    }
    body
    tableOfContents
  }
}
`;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}  

const ProjectTemplate = ({ data, children }) => {
    const project = data.mdx;
    const articles = data.allMdx;
    let images = {};
    if (project.frontmatter.images) {
        project.frontmatter.images.forEach((image, i) => {
            if (!image) {
                return;
            }
            // public urls normally look like: "/static/gradient_bicubic-676f728568c6798ea9686d6a6ef2c3e8.bmp"
            // we want to try and get "gradient_bicubic"
            let componentName = "";
            let component;
            if (image.childImageSharp) {
                const name = image.childImageSharp.fluid.originalName.split(".")[0];
                componentName = capitalizeFirstLetter(name)
                component = ({ alt, caption }) => (
                    <figure>
                        <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={alt} />
                        {(caption && caption.length > 0)
                            ? <figcaption>{caption}</figcaption>
                            : null
                        }
                    </figure>
                )
            } else {
                let publicUrlName = image.publicURL.split("/");
                let filename = publicUrlName[publicUrlName.length - 1].split("-")[0];
                // Remove the filename extensen
                const name = filename.split(".")[0];
                componentName = capitalizeFirstLetter(name)
                component = ({ alt, caption }) => (
                    <figure>
                        <img className="image--child" src={image.publicURL} alt={alt} />
                        {(caption && caption.length > 0)
                            ? <figcaption>{caption}</figcaption>
                            : null
                        }
                    </figure>
                )
            }
            // if we have a childImageShape, we can just get the name normally
            images[componentName] = component;
        });
    }

    return (
        <Layout>
            <Seo title={project.frontmatter.title}>
                <script defer={true} src="/scripts/toc.js" />
            </Seo>
            <Hero title={project.frontmatter.title}
                subTitle={project.frontmatter.subTitle}
                tags={project.frontmatter.tags}
                date={project.frontmatter.publishedDate}
                className="post"
            />
            <Common>
                <CommonRight>
                    <Article>
                        <MDXProvider components={images}>
                            {children}
                        </MDXProvider>
                    </Article>
                    <Section title="Continue Reading More...">
                        <HorizontalList>
                            {articles.nodes.map(item =>
                                <LinkedArticle to={`${item.fields.slug}`}
                                    key={item.fields.slug}
                                    title={item.frontmatter.project}
                                    description={item.frontmatter.subTitle} />
                            )}
                        </HorizontalList>
                    </Section>
                </CommonRight>
                <CommonLeft>
                    <TableOfContents contents={project.tableOfContents.items} />
                </CommonLeft>
            </Common>
        </Layout>
    );
};

export default ProjectTemplate;