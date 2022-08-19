/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({ node, name: `slug`, value: slug });
    }
}

exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {
    const results = await graphql(`
    query {
        projects: allMdx(filter: {fields: {slug: {regex: "\/devlog\/"}}}) {
            nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    articles
                }
                internal {
                    contentFilePath
                }              
            }
        }
        blogs: allMdx(filter: {fields: {slug: {regex: "\/blogs\/"}}}, sort: {order: DESC, fields: frontmatter___publishedDate}) {
            nodes {
                id
                fields {
                    slug
                }
                internal {
                    contentFilePath
                }
            }
        }
    }
    `);

    if (results.errors) {
        reporter.panicOnBuild("Error loading MDX result", results.errors)
    }

    const projectTemplate = path.resolve(`./src/templates/project.js`)
    const blogTemplate = path.resolve(`./src/templates/blogTemplate.js`)

    const projects = results.data.projects.nodes
    const blogs = results.data.blogs.nodes
    
    projects.forEach(node => {
        createPage({
            path: node.fields.slug,
            component: `${projectTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                id: node.id,
                slug: node.fields.slug,
                articles: node.frontmatter.articles.map(a => `/devlog/${a}/`)
            }
        })
    })

    blogs.forEach((node, index) => {
        let articles = [];
        if (blogs.length > index + 1) {
            articles.push(blogs[index + 1].fields.slug.slice(1, -1))
        }
        createPage({
            path: node.fields.slug,
            component: `${blogTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                id: node.id,
                slug: node.fields.slug,
                articles: articles,
            }
        })
    })
}