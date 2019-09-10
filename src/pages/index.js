import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: 'flex', justifyContent: 'space-between', height: '80vh', alignItems: 'center' }}> 
      <Link to="/join-league" style={{ border: '1px solid #888', padding: '60px', textDecoration: 'none', color: 'inherit' }}>Join Sumo League</Link>
      <Link to="/create-league" style={{ border: '1px solid #888', padding: '60px', textDecoration: 'none', color: 'inherit' }}>Create Sumo League</Link>
    </div>
  </Layout>
)

export default IndexPage
