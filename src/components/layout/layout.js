import React from "react"
import Header from "./header"

const Layout = ({ children, activeSection, setActiveSection, sections }) => {
  // Portfolio section needs scrolling, others don't
  const needsScrolling = activeSection === 'portfolio'
  
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
        background: "#fafafa",
        overflow: needsScrolling ? "auto" : "hidden",
        display: needsScrolling ? "block" : "flex"
      }}>
        {children}
      </main>
    </div>
  )
}

export default Layout