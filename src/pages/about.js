import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div>
        <h1>About</h1>
        <p>
          Welcome to my tech blog! I'm passionate about technology, programming, 
          and sharing knowledge with the developer community.
        </p>
        <p>
          This blog covers topics including web development, software engineering, 
          and the latest trends in technology.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage