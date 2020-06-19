import React from "react";
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Content from "../components/content";

export default function Home({data}) {
    return (<Layout>
            <Header setTitle={data.site.siteMetadata.title}/>
            <div className="content-container">
                <Sidebar/>
                <Content/>
            </div>
         </Layout>
         
         )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`