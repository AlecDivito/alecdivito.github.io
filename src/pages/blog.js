import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import Layout from "../components/layout"
import Widget from "../components/widget";
import Seo from "../components/seo"
import Section from "../components/simple/section";
import { Common, CommonCenter } from "../components/simple/common";


const BlogDirectoryPage = ({ data }) => (
  <Layout>
    <Seo title="Alec Di Vito Blog" />
    <Hero
      title="Blog"
      subTitle="I thought it, so I wrote it"
      tags={["Projects", "Interests", "Whatever I want! It's my website 🫣"]} />
    <Common className="common--top justify-center">
      <CommonCenter>
        <Section title="Posts">
          {data.blogs.nodes.map(b =>
            <Widget title={b.frontmatter.title}
              key={b.id}
              tags={b.frontmatter.tags}
              readMore={b.fields.slug}
              description={b.frontmatter.description}
              date={b.frontmatter.publishedDate}
            />
          )}
        </Section>
      </CommonCenter>
    </Common>
  </Layout>
)

export const query = graphql`
query BlogPageData {
  blogs: allMdx(
	  sort: [
      { internal: { contentFilePath:DESC } }
    ]
  ) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
        totalTime
        tags
        description
        publishedDate
      }
      id
    }
  }
}
`

export default BlogDirectoryPage
