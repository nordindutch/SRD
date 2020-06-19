import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Content from "../components/content";
import SEO from "../components/seo"

export default function Page({ data }) {
  const post = data.allWordpressPost.edges[0].node
  console.log(post)
  return (
    <Layout>
        <SEO  />
        <Header />
        <div className="content-container">
        <Sidebar>
            
        {data.allWordpressPost.edges.map(({ node }) => (
                    <Link to={node.slug}><li>
                    {node.title}
                    </li>
                    </Link>
                ))}
        </Sidebar>
        <Content>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
      ))}
        </Content>
        </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
      
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`