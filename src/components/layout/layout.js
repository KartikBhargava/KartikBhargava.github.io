import React from "react"
import Header from "./header"

const Layout = ({ children, activeSection, setActiveSection, sections }) => {
  return (
    <div style={{ 
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif",
      height: "100vh",
      background: "#fafafa",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }}>
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        sections={sections} 
      />
      <main style={{
        flex: 1,
        background: "#fafafa"
      }}>
        {children}
      </main>
    </div>
  )
}

export default Layout