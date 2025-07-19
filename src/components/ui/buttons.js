import React from "react"

const Button = ({ 
  children, 
  variant = "primary", 
  onClick, 
  style = {},
  ...props 
}) => {
  const baseStyle = {
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.2s ease",
    ...style
  }

  const variants = {
    primary: {
      background: "#3b82f6",
      color: "white"
    },
    secondary: {
      background: "transparent",
      color: "#374151",
      border: "2px solid #d1d5db"
    }
  }

  return (
    <button
      onClick={onClick}
      style={{ ...baseStyle, ...variants[variant] }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button