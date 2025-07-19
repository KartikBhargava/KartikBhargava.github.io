import React from "react"
import Header from "./header"
import Footer from "./Footer"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div style={{
      minHeight: `100vh`,
      display: `flex`,
      flexDirection: `column`,
    }}>
      <Header />
      <main style={{
        flex: 1,
        maxWidth: `800px`,
        margin: `0 auto`,
        padding: `2rem 1rem`,
      }}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout