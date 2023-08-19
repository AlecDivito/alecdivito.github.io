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
        createNodeField({ node, name: `name`, value: node.frontmatter.name });
        createNodeField({ node, name: `next`, value: node.frontmatter.next });
        createNodeField({ node, name: `previous`, value: node.frontmatter.previous });
    }
}

exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {
    const results = await graphql(`
    query {
        blog: allMdx(filter: {fields: {slug: {regex: "\/blog\/"}}}, sort: {order: DESC, fields: frontmatter___publishedDate}) {
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
    }
    `);

    if (results.errors) {
        reporter.panicOnBuild("Error loading MDX result", results.errors)
    }

    const blogTemplate = path.resolve(`./src/templates/blog.js`)

    const blogs = results.data.blog.nodes

    blogs.forEach((node, index) => {

        console.log(node.frontmatter.articles)
        createPage({
            path: node.fields.slug,
            component: `${blogTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                id: node.id,
                slug: node.fields.slug,
                articles: node.frontmatter.articles,
            }
        })
    })
}