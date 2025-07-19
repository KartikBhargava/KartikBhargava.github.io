import React from "react"

const TechPill = ({ children }) => {
  return (
    <span style={{
      background: "#f3f4f6",
      color: "#374151",
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      fontSize: "0.85rem",
      fontWeight: "500"
    }}>
      {children}
    </span>
  )
}

export default TechPill