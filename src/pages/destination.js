import * as React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../../src/components/layout.css'

const Destination = () => (
  <Layout>
    <SEO title="Destination"/>
    <h1 className="destinations">Destinations</h1>
   <Image/>
  </Layout>
)



export default Destination
