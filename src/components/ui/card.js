import React, { useState, useEffect, useRef } from "react"

const Card = ({ 
  children, 
  hover = false,
  animateOnScroll = false,
  variant = "default",
  padding = "default",
  onClick,
  style = {},
  className = "",
  darkMode = false,
  gradient = false,
  blur = false,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(!animateOnScroll)
  const [isPressed, setIsPressed] = useState(false)
  const cardRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (!animateOnScroll || !cardRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "50px"
      }
    )

    observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [animateOnScroll])

  // Theme colors
  const themes = {
    light: {
      bg: "#ffffff",
      border: "#e5e7eb",
      shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      hoverShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      pressedShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    dark: {
      bg: "#1e293b",
      border: "#334155",
      shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)",
      hoverShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
      pressedShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)"
    }
  }

  const currentTheme = darkMode ? themes.dark : themes.light

  const variants = {
    default: {
      background: currentTheme.bg,
      border: `1px solid ${currentTheme.border}`,
      borderRadius: "12px"
    },
    elevated: {
      background: currentTheme.bg,
      border: "none",
      borderRadius: "16px",
      boxShadow: currentTheme.shadow
    },
    outlined: {
      background: "transparent",
      border: `2px solid ${currentTheme.border}`,
      borderRadius: "12px"
    },
    glass: {
      background: darkMode 
        ? "rgba(30, 41, 59, 0.8)" 
        : "rgba(255, 255, 255, 0.8)",
      border: `1px solid ${darkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.1)"}`,
      borderRadius: "16px",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)"
    },
    gradient: {
      background: darkMode
        ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
        : "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
      border: `1px solid ${currentTheme.border}`,
      borderRadius: "16px"
    }
  }

  const paddings = {
    none: "0",
    small: "1rem",
    default: "1.5rem",
    large: "2rem",
    extraLarge: "2.5rem"
  }

  const currentVariant = variants[variant] || variants.default
  const currentPadding = paddings[padding] || paddings.default

  const getTransform = () => {
    if (isPressed) return "translateY(2px) scale(0.98)"
    if (isHovered && hover) return "translateY(-4px) scale(1.02)"
    return "translateY(0) scale(1)"
  }

  const getShadow = () => {
    if (isPressed) return currentTheme.pressedShadow
    if (isHovered && hover) return currentTheme.hoverShadow
    if (variant === "elevated") return currentTheme.shadow
    return "none"
  }

  const baseStyles = {
    position: "relative",
    overflow: "hidden",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: onClick ? "pointer" : "default",
    userSelect: "none",
    padding: currentPadding,
    transform: getTransform(),
    boxShadow: getShadow(),
    opacity: isVisible ? 1 : 0,
    ...currentVariant,
    ...style
  }

  // Animation styles for scroll reveal
  const animationStyles = animateOnScroll ? {
    transform: `${getTransform()} ${isVisible ? "translateY(0)" : "translateY(30px)"}`,
    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${Math.random() * 0.2}s`
  } : {}

  const handleMouseEnter = () => {
    if (hover) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsPressed(false)
  }

  const handleMouseDown = () => {
    if (onClick) setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      className={className}
      style={{
        ...baseStyles,
        ...animationStyles
      }}
      {...props}
    >
      {/* Gradient overlay for gradient variant */}
      {gradient && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
            borderRadius: "inherit",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }}
        />
      )}

      {/* Shimmer effect on hover */}
      {hover && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            transform: isHovered ? "translateX(200%)" : "translateX(-100%)",
            transition: "transform 0.6s ease",
            pointerEvents: "none"
          }}
        />
      )}

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>

      {/* Background pattern for glass variant */}
      {variant === "glass" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: darkMode
              ? "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)"
              : "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)",
            backgroundSize: "24px 24px",
            opacity: 0.5,
            pointerEvents: "none"
          }}
        />
      )}
    </div>
  )
}

// Preset card components
export const ElevatedCard = (props) => <Card variant="elevated" {...props} />
export const GlassCard = (props) => <Card variant="glass" {...props} />
export const OutlinedCard = (props) => <Card variant="outlined" {...props} />
export const GradientCard = (props) => <Card variant="gradient" gradient={true} {...props} />

// Interactive card with built-in states
export const InteractiveCard = ({ children, ...props }) => (
  <Card 
    hover={true}
    animateOnScroll={true}
    variant="elevated"
    {...props}
  >
    {children}
  </Card>
)

// Project card wrapper
export const ProjectCard = ({ children, ...props }) => (
  <Card
    hover={true}
    animateOnScroll={true}
    variant="elevated"
    padding="large"
    style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      ...props.style
    }}
    {...props}
  >
    {children}
  </Card>
)

export default Card