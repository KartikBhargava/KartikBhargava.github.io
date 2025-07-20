import React, { useState } from "react"
import Card from "../ui/card"
import Button from "../ui/buttons"

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const isMobile = window.innerWidth < 768

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return '#10b981'
      case 'In Development': return '#3b82f6'
      case 'Ongoing': return '#f59e0b'
      case 'Experimental': return '#8b5cf6'
      case 'Learning Project': return '#ef4444'
      default: return '#6b7280'
    }
  }

  return (
    <Card 
      style={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        padding: isMobile ? "1.5rem" : "2rem"
      }}
      animateOnScroll={true}
      hover={true}
    >
      {/* Project Header with Bounce Animation */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "1rem" : "0"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: "100%"
        }}>
          {/* Animated Project Icon */}
          <div style={{ 
            fontSize: isMobile ? "2.5rem" : "3rem",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1) rotate(5deg)"
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1) rotate(0deg)"
          }}
          >
            {project.image}
          </div>
          
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: isMobile ? "1.2rem" : "1.4rem",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "0.5rem",
              lineHeight: "1.2",
              transition: "color 0.2s ease"
            }}>
              {project.title}
            </h3>
            
            {/* Animated Status Badge */}
            <div style={{
              display: "inline-block",
              background: getStatusColor(project.status),
              color: "white",
              padding: "0.25rem 0.75rem",
              borderRadius: "12px",
              fontSize: "0.75rem",
              fontWeight: "600",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease"
            }}>
              {/* Pulse animation for active projects */}
              {(project.status === 'In Development' || project.status === 'Ongoing') && (
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(255,255,255,0.3)",
                  animation: "pulse 2s infinite",
                  borderRadius: "12px"
                }} />
              )}
              <span style={{ position: "relative", zIndex: 1 }}>
                {project.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description with Fade Animation */}
      <div style={{
        transition: "all 0.3s ease",
        opacity: 1
      }}>
        <p style={{
          fontSize: isMobile ? "0.9rem" : "1rem",
          color: "#4b5563",
          lineHeight: "1.6",
          marginBottom: "1.5rem"
        }}>
          {project.description}
        </p>
      </div>

      {/* Animated Highlights */}
      <div style={{ marginBottom: "1.5rem" }}>
        <h4 style={{
          fontSize: "0.9rem",
          fontWeight: "600",
          color: "#374151",
          marginBottom: "0.75rem"
        }}>
          Project Highlights:
        </h4>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem"
        }}>
          {project.highlights.map((highlight, index) => (
            <span 
              key={highlight} 
              style={{
                background: "#34a853",
                color: "white",
                padding: "0.25rem 0.75rem",
                borderRadius: "12px",
                fontSize: "0.75rem",
                fontWeight: "500",
                transition: "all 0.2s ease",
                cursor: "default",
                animation: `fadeInUp 0.6s ease ${index * 0.1}s both`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)"
                e.target.style.boxShadow = "0 4px 12px rgba(52, 168, 83, 0.3)"
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "none"
              }}
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>

      {/* Animated Technologies */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem"
        }}>
          {project.technologies.map((tech, index) => (
            <span 
              key={tech} 
              style={{
                background: "#f3f4f6",
                color: "#374151",
                padding: "0.25rem 0.75rem",
                borderRadius: "12px",
                fontSize: "0.75rem",
                fontWeight: "500",
                transition: "all 0.2s ease",
                cursor: "default",
                animation: `fadeInUp 0.4s ease ${index * 0.05}s both`
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#e5e7eb"
                e.target.style.transform = "scale(1.05)"
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#f3f4f6"
                e.target.style.transform = "scale(1)"
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Expandable Features Section */}
      <div style={{ marginBottom: "1.5rem", flex: 1 }}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: "none",
            border: "none",
            fontSize: "0.9rem",
            fontWeight: "600",
            color: "#374151",
            marginBottom: "0.75rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "color 0.2s ease"
          }}
        >
          Key Features:
          <span style={{
            transition: "transform 0.3s ease",
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)"
          }}>
            ▼
          </span>
        </button>
        
        <div style={{
          maxHeight: isExpanded ? "200px" : "80px",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        }}>
          <ul style={{
            fontSize: "0.85rem",
            color: "#6b7280",
            lineHeight: "1.5",
            paddingLeft: "1rem",
            margin: 0
          }}>
            {project.features.map((feature, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: "0.25rem",
                  opacity: isExpanded ? 1 : (index < 2 ? 1 : 0),
                  transition: `opacity 0.3s ease ${index * 0.1}s`
                }}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Enhanced Action Buttons */}
      <div style={{
        display: "flex",
        gap: "1rem",
        marginTop: "auto",
        flexDirection: isMobile ? "column" : "row"
      }}>
        <Button
          variant="primary"
          style={{
            background: "#1f2937",
            flex: 1
          }}
          onClick={() => window.open(project.githubUrl, '_blank')}
        >
          🐙 View Code
        </Button>
        <Button
          variant="secondary"
          style={{ flex: 1 }}
          onClick={() => {/* Handle demo/preview */}}
        >
          📱 Preview
        </Button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </Card>
  )
}

export default ProjectCard