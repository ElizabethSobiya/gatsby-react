import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Herosection from '../components/Herosection'
import Image from '../components/image'




const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Herosection/>
    <Image/>
 
  </Layout>
)

// /**
//  * Head export to define metadata for the page
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
//  */
// export const Head = () => <Seo title="Home" />

export default IndexPage
