import React from "react"

const Header = ({ activeSection, setActiveSection, sections }) => {
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
        padding: "0 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ 
          fontSize: "1.5rem",
          fontWeight: "700",
          color: "#1f2937"
        }}>
          Kartik Bhargava
        </div>
        <nav style={{ display: "flex", gap: "0.5rem" }}>
          {Object.entries(sections).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              style={{ 
                color: activeSection === key ? "#3b82f6" : "#6b7280",
                background: activeSection === key ? "#eff6ff" : "transparent",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header