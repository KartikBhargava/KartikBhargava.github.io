import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header style={{
      background: `#663399`,
      marginBottom: `1.45rem`,
    }}>
      <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Your Tech Blog
          </Link>
        </h1>
        <nav style={{ marginTop: `1rem` }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              marginRight: `1rem`,
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header