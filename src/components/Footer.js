import React from "react"

const Footer = () => {
  return (
    <footer style={{
      background: `#f8f9fa`,
      padding: `2rem 1rem`,
      textAlign: `center`,
      marginTop: `auto`,
      borderTop: `1px solid #e9ecef`,
    }}>
      <p style={{ margin: 0, color: `#6c757d` }}>
        © {new Date().getFullYear()} Your Tech Blog. Built with{" "}
        <a 
          href="https://www.gatsbyjs.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: `#663399` }}
        >
          Gatsby
        </a>
      </p>
    </footer>
  )
}

export default Footer