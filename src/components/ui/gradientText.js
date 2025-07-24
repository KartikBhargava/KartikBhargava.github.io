// src/components/ui/gradientText.js
import React from 'react'

const GradientText = ({ 
  children, 
  darkMode = false, 
  size = "3rem", 
  weight = "800",
  style = {},
  className = "",
  as = "h1",
  marginBottom = "1rem"
}) => {
  
  // Define WORKING gradients that are visible in both modes
  const getTextStyle = () => {
    if (darkMode) {
      return {
        fontSize: size,
        fontWeight: weight,
        lineHeight: "1.2",
        marginBottom: marginBottom,
        // SOLID COLOR FIRST - this ensures text is always visible
        color: '#60a5fa',
        // Gradient overlay
        background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        transition: 'all 0.3s ease',
        ...style
      }
    } else {
      return {
        fontSize: size,
        fontWeight: weight,
        lineHeight: "1.2",
        marginBottom: marginBottom,
        // SOLID COLOR FIRST - this ensures text is always visible
        color: '#3b82f6',
        // Gradient overlay
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        transition: 'all 0.3s ease',
        ...style
      }
    }
  }
  
  const Component = as
  
  return (
    <Component 
      className={className}
      style={getTextStyle()}
    >
      {children}
    </Component>
  )
}

export default GradientText