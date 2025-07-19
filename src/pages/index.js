import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Welcome to Your Tech Blog</h1>
        <p>This is a Gatsby-powered tech blog. Start writing your first post!</p>
        <p>
          Your blog is now successfully deployed and ready for content. 
          Add your blog posts in the <code>content/blog/</code> directory.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage