import React from "react"

const Card = ({ children, style = {}, onClick, ...props }) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: "white",
        padding: "2rem",
        borderRadius: "12px",
        border: "1px solid #e2e8f0",
        cursor: onClick ? "pointer" : "default",
        transition: "all 0.2s ease",
        ...style
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card