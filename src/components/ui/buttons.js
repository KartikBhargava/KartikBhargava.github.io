import React, { useState } from "react"

const Button = ({ 
  children, 
  variant = "primary", 
  size = "medium",
  onClick, 
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
  style = {},
  className = "",
  type = "button",
  ariaLabel,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false)

  const variants = {
    primary: {
      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      color: "#ffffff",
      border: "none",
      hoverBg: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
      activeBg: "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)",
      shadow: "0 4px 14px 0 rgba(59, 130, 246, 0.39)"
    },
    secondary: {
      background: "transparent",
      color: "#374151",
      border: "2px solid #e5e7eb",
      hoverBg: "#f9fafb",
      activeBg: "#f3f4f6",
      shadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)"
    },
    outline: {
      background: "transparent",
      color: "#3b82f6",
      border: "2px solid #3b82f6",
      hoverBg: "#3b82f6",
      hoverColor: "#ffffff",
      activeBg: "#1d4ed8",
      shadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "#6b7280",
      border: "none",
      hoverBg: "#f3f4f6",
      activeBg: "#e5e7eb",
      shadow: "none"
    },
    danger: {
      background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      color: "#ffffff",
      border: "none",
      hoverBg: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
      activeBg: "linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)",
      shadow: "0 4px 14px 0 rgba(239, 68, 68, 0.39)"
    },
    success: {
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      color: "#ffffff", 
      border: "none",
      hoverBg: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      activeBg: "linear-gradient(135deg, #047857 0%, #065f46 100%)",
      shadow: "0 4px 14px 0 rgba(16, 185, 129, 0.39)"
    }
  }

  const sizes = {
    small: {
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
      borderRadius: "6px",
      height: "36px"
    },
    medium: {
      padding: "0.75rem 1.5rem", 
      fontSize: "1rem",
      borderRadius: "8px",
      height: "44px"
    },
    large: {
      padding: "1rem 2rem",
      fontSize: "1.125rem", 
      borderRadius: "10px",
      height: "52px"
    }
  }

  const currentVariant = variants[variant]
  const currentSize = sizes[size]

  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontWeight: "600",
    fontFamily: "inherit",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    userSelect: "none",
    textDecoration: "none",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.6 : 1,
    transform: isPressed && !disabled && !loading ? "translateY(1px)" : "translateY(0)",
    ...currentSize,
    ...style
  }

  const getStyles = () => {
    if (loading || disabled) {
      return {
        ...baseStyles,
        background: currentVariant.background,
        color: currentVariant.color,
        border: currentVariant.border || "none",
        boxShadow: "none"
      }
    }

    return {
      ...baseStyles,
      background: currentVariant.background,
      color: currentVariant.color,
      border: currentVariant.border || "none",
      boxShadow: currentVariant.shadow || "none"
    }
  }

  const handleMouseDown = () => {
    if (!disabled && !loading) {
      setIsPressed(true)
    }
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  const handleMouseLeave = () => {
    setIsPressed(false)
  }

  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled || loading}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      className={className}
      style={getStyles()}
      {...props}
    >
      {/* Hover effect overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: currentVariant.hoverBg || currentVariant.background,
          opacity: 0,
          transition: "opacity 0.2s ease",
          pointerEvents: "none"
        }}
        className="button-hover-overlay"
      />

      {/* Ripple effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          borderRadius: "inherit"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
            transform: isPressed ? "scale(1)" : "scale(0)",
            transition: "transform 0.3s ease",
            pointerEvents: "none"
          }}
        />
      </div>

      {/* Loading spinner */}
      {loading && (
        <div
          style={{
            position: "absolute",
            width: "16px",
            height: "16px",
            border: `2px solid transparent`,
            borderTop: `2px solid currentColor`,
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.2s ease"
        }}
      >
        {icon && !loading && (
          <span style={{ display: "flex", alignItems: "center" }}>
            {icon}
          </span>
        )}
        {children}
      </div>

      {/* Global styles for hover effects */}
      <style jsx>{`
        button:hover .button-hover-overlay {
          opacity: 1;
        }
        
        button:focus .button-hover-overlay {
          opacity: 0.8;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </button>
  )
}

// Preset button components for common use cases
export const PrimaryButton = (props) => <Button variant="primary" {...props} />
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />
export const OutlineButton = (props) => <Button variant="outline" {...props} />
export const GhostButton = (props) => <Button variant="ghost" {...props} />
export const DangerButton = (props) => <Button variant="danger" {...props} />
export const SuccessButton = (props) => <Button variant="success" {...props} />

// Icon button component
export const IconButton = ({ icon, ...props }) => (
  <Button
    style={{
      padding: "0.75rem",
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      ...props.style
    }}
    {...props}
  >
    {icon}
  </Button>
)

export default Button