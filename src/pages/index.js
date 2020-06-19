import React from "react";
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Content from "../components/content";

export default function Home({data}) {
    return (<Layout>
            <Header/>
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
      {data.allWordpressPage.edges.map(({ node }) => (
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
      ))}
      </ Content>
            </div>
            
         </Layout>
         
         )
}
export const pageQuery = graphql`
  query {
    allWordpressPage {
        edges {
          node {
            content
          }
        }
      }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
