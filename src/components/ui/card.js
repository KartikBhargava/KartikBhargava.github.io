// src/components/UI/Card.js
import React, { useState } from "react"

const Card = ({ 
  children, 
  style = {}, 
  onClick, 
  hover = true,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false

  const handleMouseEnter = () => {
    if (hover && !isMobile) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const baseStyle = {
    background: "white",
    padding: isMobile ? "1.5rem" : "2rem",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    cursor: onClick ? "pointer" : "default",
    position: "relative",
    
    // Smooth transitions
    transition: "all 0.3s ease",
    
    // Transform and shadow effects
    transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
    boxShadow: isHovered ? 
      "0 12px 40px rgba(0,0,0,0.15)" : 
      "0 2px 8px rgba(0,0,0,0.08)",
    
    // Border color change on hover
    borderColor: isHovered ? "#d1d5db" : "#e2e8f0",
    
    ...style
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={baseStyle}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card