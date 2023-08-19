import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Seo from "../components/seo"

import Widget from "../components/widget";
import SocialLinks from "../components/data/socialLinks";
import Section from "../components/simple/section";
import { Common, CommonLeft, CommonRight } from "../components/simple/common";
import Paragraph from "../components/simple/paragraph";

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <Seo title="Home" />
      <Hero
        title="Alec Di Vito"
        subTitle="You dream it, And I'll build it"
        tags={["Full stack", "Rust", "Node.js", "Actor model", "Cloud"]}
        readMoreLink="/about"
        readMoreText="Learn about me"
      >
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt="Alec Divito 3D Profile Picture" />
      </Hero>
      <Common>
        <CommonRight>
          <Section title="Hi There...">
            <Paragraph>
              I'm Alec, a Full Stack Developer that enjoys creating unique web
              experinces for users while also building maintainable code for
              future developers to use. I mainly develop programs using Node.js
              professionally and use Rust for most (if not all) of my side projets.
              I enjoy thinking about the infrastructure that runs our code which
              has led me to many cloud related positions.
            </Paragraph>
            <Paragraph>
              I've written about a some of programming I've done over the years
              and have them documented in my <Link to="blog">blog</Link>. If you
              are visiting this website because you are interested in hiring me,
              then you can checkout my{' '}
              <a target="_blank" rel="nofollow" href="/2024-AlecDivito-Resume.pdf">resume</a>.
            </Paragraph>
            <Paragraph>
              Wondering what to read first? Why not read about how I{' '}
              <Link to="/blog/2022-04-10_website-update-1">updated this website.</Link>
            </Paragraph>
          </Section>
          <Section title="Projects">
            {data.allProjectsJson.nodes.map(p =>
              <Widget title={p.title}
                key={p.id}
                description={p.shortDescription}
                tags={p.technologies}
                status={p.status}
                logo={<GatsbyImage
                  image={p.logo.childImageSharp.gatsbyImageData}
                  style={{ borderRadius: '100%' }}
                  alt={p.company ?? ''} />}
                readMore={p.blogPost.map(b => b.content)[0] ?? null}
              />
            )}
          </Section>
          <Section title="Work">
            {data.work.nodes.map(w =>
              <Widget title={w.position}
                key={w.id}
                subTitle={w.company}
                description={w.description}
                tags={w.utilized}
                date={`${w.startDate}-${w.endDate}`}
                logo={<GatsbyImage
                  image={w.logo.childImageSharp.gatsbyImageData}
                  style={{ borderRadius: '100%' }}
                  alt={w.company} />}
              />
            )}
          </Section>
          <Section title="School">
            {data.school.nodes.map(w =>
              <Widget title={w.program}
                key={w.id}
                subTitle={w.school}
                description={w.description}
                // tags={w.utilized}
                date={`${w.startDate}-${w.endDate}`}
                logo={<GatsbyImage
                  image={w.logo.childImageSharp.gatsbyImageData}
                  style={{ borderRadius: '100%' }}
                  alt={w.school} />}
              />
            )}
          </Section>
          <Section title="Volunteer">
            {data.volunteer.nodes.map(w =>
              <Widget title={w.job}
                key={w.id}
                subTitle={w.location}
                description={w.description}
                date={w.time}
              />
            )}
          </Section>
        </CommonRight>
        <CommonLeft>
          <SocialLinks />
        </CommonLeft>
      </Common>
    </Layout >
  );
}

const query = graphql`
query HomePageData {
  work: allWorkJson {
    nodes {
      id
      company
      position
      startDate
      endDate
      utilized
      description
      logo {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50, layout: FIXED)
        }
      }
    }
  }
  volunteer: allVolunteerJson {
    nodes {
      id
      description
      job
      location
      time
    }
  }
  school: allSchoolJson {
    nodes {
      id
      achievement
      endDate
      gpa
      startDate
      school
      program
      description
      logo {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50, layout: FIXED)
        }
      }
    }
  }
  allProjectsJson {
    nodes {
      id
      siteLink
      shortDescription
      title
      stage
      status
      githubLink
      technologies
      blogPost {
        content
        year
        month
        day
      }
      logo {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50, layout: FIXED)
        }
      }
    }
  }
  file(relativePath: {eq: "images/index/alec.png"}) {
    childImageSharp {
      gatsbyImageData(width: 280, layout: CONSTRAINED)
    }
  }
}
`;

export default IndexPage
