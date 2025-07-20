import React, { useState, useEffect } from "react"

const Header = ({ activeSection, setActiveSection, sections }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on the client side
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkScreenSize()

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize)

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <header style={{
      background: "white",
      borderBottom: "1px solid #e2e8f0",
      padding: "1rem 0",
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ 
          fontSize: "1.25rem",
          fontWeight: "700",
          color: "#1f2937",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem"
        }}>
          <span>🤖</span>
          <span style={{ 
            display: isMobile ? "none" : "inline"
          }}>
            Kartik Bhargava
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav style={{ 
          display: isMobile ? "none" : "flex",
          gap: "0.5rem" 
        }}>
          {Object.entries(sections).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              style={{ 
                color: activeSection === key ? "#34a853" : "#6b7280",
                background: activeSection === key ? "rgba(52, 168, 83, 0.1)" : "transparent",
                border: "none",
                padding: "0.75rem 1rem",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: isMobile ? "block" : "none",
            background: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            padding: "0.5rem"
          }}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && isMobile && (
        <div style={{
          background: "white",
          borderTop: "1px solid #e2e8f0",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem"
        }}>
          {Object.entries(sections).map(([key, label]) => (
            <button
              key={key}
              onClick={() => {
                setActiveSection(key)
                setMobileMenuOpen(false)
              }}
              style={{ 
                color: activeSection === key ? "#34a853" : "#6b7280",
                background: activeSection === key ? "rgba(52, 168, 83, 0.1)" : "transparent",
                border: "none",
                padding: "1rem",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease",
                textAlign: "left"
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header