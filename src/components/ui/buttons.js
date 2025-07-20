// src/components/UI/Button.js
import React, { useState } from "react"

const Button = ({ 
  children, 
  variant = "primary", 
  onClick, 
  style = {},
  disabled = false,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false

  const handleMouseEnter = () => {
    if (!isMobile && !disabled) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsPressed(false)
  }

  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true)
    }
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  // Define base styles that don't change
  const baseStyle = {
    border: "none",
    padding: isMobile ? "0.75rem 1.5rem" : "1rem 2rem",
    fontSize: isMobile ? "0.9rem" : "1rem",
    borderRadius: "8px",
    cursor: disabled ? "not-allowed" : "pointer",
    fontWeight: "600",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    userSelect: "none",
    outline: "none",
    textDecoration: "none",
    // Smooth transition for all properties
    transition: "all 0.2s ease-in-out",
    opacity: disabled ? 0.6 : 1,
    // Transform for press effect
    transform: isPressed ? "translateY(1px) scale(0.98)" : 
               isHovered ? "translateY(-1px)" : "translateY(0px)",
    // Shadow effects
    boxShadow: isPressed ? "0 2px 4px rgba(0,0,0,0.1)" :
               isHovered ? "0 6px 20px rgba(0,0,0,0.15)" : 
               "0 2px 8px rgba(0,0,0,0.1)",
    ...style
  }

  // Define variant styles with consistent colors
  const getVariantStyles = () => {
    switch(variant) {
      case 'primary':
        return {
          backgroundColor: isHovered && !disabled ? "#2563eb" : "#3b82f6",
          color: "white",
          border: "2px solid transparent"
        }
      
      case 'secondary':
        return {
          backgroundColor: isHovered && !disabled ? "#f9fafb" : "transparent",
          color: isHovered && !disabled ? "#1f2937" : "#374151",
          border: `2px solid ${isHovered && !disabled ? "#9ca3af" : "#d1d5db"}`
        }
      
      case 'android':
        return {
          backgroundColor: isHovered && !disabled ? "#16a34a" : "#22c55e",
          color: "white",
          border: "2px solid transparent"
        }
      
      default:
        return {
          backgroundColor: isHovered && !disabled ? "#2563eb" : "#3b82f6",
          color: "white",
          border: "2px solid transparent"
        }
    }
  }

  const variantStyles = getVariantStyles()
  const finalStyles = { ...baseStyle, ...variantStyles }

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      style={finalStyles}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button