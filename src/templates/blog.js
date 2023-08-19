import React from 'react';
import Seo from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby';
import Hero from "../components/hero";
import Layout from "../components/layout";
import Article from '../components/simple/article';
import TableOfContents from '../components/complex/tableOfContents';
import LinkedArticle from '../components/simple/linkedArticle';
import { HorizontalList } from '../components/simple/list';
import Section from "../components/simple/section";
import { Common, CommonLeft, CommonRight } from "../components/simple/common";
import { MDXProvider } from '@mdx-js/react';

export const query = graphql`
query ($id: String!, $articles: [String!]) {
  allMdx(filter: {fields: {name: {in: $articles}}}) {
    nodes {
      fields {
        slug
        name
      }
      frontmatter {
        title
        subTitle
      }
    }
  }
  mdx(id: {eq: $id }) {
    frontmatter {
      author
      publishedDate
      title
      subTitle
      tags
      description
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
    tableOfContents
  }
}
`;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const BlogTemplate = ({ data, children }) => {
  const blog = data.mdx;
  const articles = data.allMdx;
  let images = {};
  if (blog?.frontmatter?.images) {
    (blog?.frontmatter?.images ?? []).forEach((image, i) => {
      console.log(image)
      if (!image) {
        return;
      }
      // public urls normally look like: "/static/gradient_bicubic-676f728568c6798ea9686d6a6ef2c3e8.bmp"
      // we want to try and get "gradient_bicubic"
      let componentName = "";
      let component;
      if (image?.childImageSharp?.fluid) {
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
        let filename = publicUrlName[publicUrlName.length - 1];
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
      <Seo title={blog.frontmatter.title}
        description={blog.frontmatter.description}>
        <script defer={true} src="/scripts/toc.js" />
      </Seo>
      <Hero title={blog.frontmatter.title}
        subTitle={blog.frontmatter.subTitle}
        tags={blog.frontmatter.tags}
        date={blog.frontmatter.publishedDate}
        className="post"
      />
      <Common>
        <CommonRight>
          <Article>
            <MDXProvider components={images}>
              {children}
            </MDXProvider>
          </Article>
          <Section title="Continue Reading More..." className="section--tm">
            <HorizontalList>
              {articles.nodes.map(item =>
                <LinkedArticle to={`${item.fields.slug}`}
                  key={item.fields.slug}
                  title={item.frontmatter.title}
                  description={item.frontmatter.subTitle} />
              )}
            </HorizontalList>
          </Section>
        </CommonRight>
        <CommonLeft>
          <TableOfContents contents={blog.tableOfContents.items} />
        </CommonLeft>
      </Common>
    </Layout>
  )
}

export default BlogTemplate;