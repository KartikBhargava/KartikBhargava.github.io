// src/components/Sections/PortfolioSection.js
import React, { useState, useRef, useEffect } from "react"
import Card from "../ui/card"
import Button from "../ui/buttons"

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false
  const isTablet = typeof window !== 'undefined' ? window.innerWidth < 1024 : false

  const categories = {
    all: 'All Projects',
    featured: 'Featured',
    learning: 'Learning Projects',
    experimental: 'Experiments'
  }

  const projects = [
    {
      id: 1,
      title: "TaskMaster",
      category: "featured",
      description: "A modern task management app built with Jetpack Compose and MVVM architecture. Features include task categories, reminders, and clean Material Design 3 UI.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Material Design 3", "Coroutines"],
      image: "📋",
      githubUrl: "https://github.com/kartik/taskmaster-android",
      status: "In Development",
      highlights: ["100% Jetpack Compose", "Clean Architecture", "Material Design 3"],
      features: [
        "Task management with categories and priorities",
        "Local storage with Room database",
        "Material Design 3 theming with dynamic colors",
        "Smooth animations and transitions"
      ]
    },
    {
      id: 2,
      title: "WeatherNow",
      category: "featured",
      description: "Beautiful weather app showcasing advanced UI animations and API integration. Built to explore Jetpack Compose animations and weather data visualization.",
      technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Animations", "Weather API", "Location Services"],
      image: "🌤️",
      githubUrl: "https://github.com/kartik/weather-now",
      status: "Completed",
      highlights: ["Advanced Animations", "API Integration", "Location Services"],
      features: [
        "Real-time weather data from OpenWeather API",
        "Animated weather backgrounds and transitions",
        "Location-based weather updates",
        "7-day forecast with detailed view"
      ]
    },
    {
      id: 3,
      title: "ComposePlayground",
      category: "learning",
      description: "A collection of Jetpack Compose experiments and UI components. This project serves as my learning sandbox for exploring Compose capabilities.",
      technologies: ["Kotlin", "Jetpack Compose", "Custom Layouts", "Animations", "State Management"],
      image: "🎨",
      githubUrl: "https://github.com/kartik/compose-playground",
      status: "Ongoing",
      highlights: ["UI Experiments", "Custom Components", "Learning Journey"],
      features: [
        "Custom UI components and layouts",
        "Animation experiments and prototypes",
        "State management patterns exploration",
        "Performance optimization techniques"
      ]
    },
    {
      id: 4,
      title: "RecipeBook",
      category: "featured",
      description: "Recipe management app with search, favorites, and meal planning. Built to practice Room database relationships and complex UI patterns.",
      technologies: ["Kotlin", "Room", "Search", "Image Handling", "Data Persistence"],
      image: "👨‍🍳",
      githubUrl: "https://github.com/kartik/recipe-book",
      status: "Completed",
      highlights: ["Complex Database Relations", "Search Implementation", "Image Management"],
      features: [
        "Recipe storage with ingredients and steps",
        "Advanced search and filtering",
        "Favorites and meal planning",
        "Image handling and storage"
      ]
    },
    {
      id: 5,
      title: "AndroidMLKit",
      category: "experimental",
      description: "Exploring Android's ML Kit capabilities with text recognition, face detection, and barcode scanning. A hands-on project to learn machine learning on mobile.",
      technologies: ["Kotlin", "ML Kit", "Camera2", "Image Processing", "Machine Learning"],
      image: "🤖",
      githubUrl: "https://github.com/kartik/android-mlkit",
      status: "Experimental",
      highlights: ["Machine Learning", "Camera Integration", "Real-time Processing"],
      features: [
        "Text recognition from camera and images",
        "Face detection and analysis",
        "Barcode and QR code scanning",
        "Real-time processing optimization"
      ]
    },
    {
      id: 6,
      title: "QuoteDaily",
      category: "learning",
      description: "Daily quotes app built while learning Clean Architecture principles. Features motivational quotes with sharing capabilities and daily notifications.",
      technologies: ["Kotlin", "Clean Architecture", "UseCase Pattern", "Notifications", "SharedPreferences"],
      image: "💭",
      githubUrl: "https://github.com/kartik/quote-daily",
      status: "Learning Project",
      highlights: ["Clean Architecture", "Notification System", "Best Practices"],
      features: [
        "Daily quote delivery with notifications",
        "Quote sharing and favorites",
        "Clean Architecture implementation",
        "Offline quote storage and caching"
      ]
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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

  // Simple ProjectCard Component
  const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    return (
      <Card
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          padding: isMobile ? "1.5rem" : "2rem",
          transition: "all 0.3s ease",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered 
            ? "0 12px 40px rgba(0,0,0,0.15)" 
            : "0 4px 6px rgba(0,0,0,0.05)"
        }}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Header */}
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
            {/* Project Icon */}
            <div 
              style={{ 
                fontSize: isMobile ? "2.5rem" : "3rem",
                flexShrink: 0,
                transition: "transform 0.3s ease",
                cursor: "pointer",
                transform: isHovered ? "scale(1.1)" : "scale(1)"
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
                lineHeight: "1.2"
              }}>
                {project.title}
              </h3>
              
              {/* Status Badge */}
              <div style={{
                display: "inline-block",
                background: getStatusColor(project.status),
                color: "white",
                padding: "0.25rem 0.75rem",
                borderRadius: "12px",
                fontSize: "0.75rem",
                fontWeight: "600",
                position: "relative"
              }}>
                {project.status}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: isMobile ? "0.9rem" : "1rem",
          color: "#4b5563",
          lineHeight: "1.6",
          marginBottom: "1.5rem"
        }}>
          {project.description}
        </p>

        {/* Highlights */}
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
            {project.highlights.map((highlight) => (
              <span 
                key={highlight} 
                style={{
                  background: "#34a853",
                  color: "white",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  cursor: "default",
                  display: "inline-block"
                }}
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem"
          }}>
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                style={{
                  background: "#f3f4f6",
                  color: "#374151",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "12px",
                  fontSize: "0.75rem",
                  fontWeight: "500",
                  cursor: "default",
                  display: "inline-block"
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Section */}
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
              padding: 0
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
            transition: "max-height 0.4s ease"
          }}>
            <ul style={{
              fontSize: "0.85rem",
              color: "#6b7280",
              lineHeight: "1.5",
              paddingLeft: "1rem",
              margin: 0
            }}>
              {project.features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex} 
                  style={{ 
                    marginBottom: "0.25rem",
                    opacity: isExpanded ? 1 : (featureIndex < 2 ? 1 : 0.3),
                    transition: "opacity 0.3s ease"
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
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
      </Card>
    )
  }

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem 2rem",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{ 
        textAlign: "center",
        marginBottom: isMobile ? "2rem" : "3rem"
      }}>
        <h2 style={{ 
          fontSize: isMobile ? "2rem" : "3rem",
          marginBottom: "1rem",
          fontWeight: "700",
          color: "#1f2937"
        }}>
          My Android Projects
        </h2>
        <p style={{ 
          fontSize: isMobile ? "1rem" : "1.2rem",
          color: "#6b7280",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          Personal projects showcasing Android development skills, learning journey, 
          and exploration of modern Android technologies
        </p>
      </div>

      {/* Category Filter */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: isMobile ? "0.5rem" : "1rem",
        marginBottom: isMobile ? "2rem" : "3rem",
        flexWrap: "wrap",
        padding: isMobile ? "0 0.5rem" : "0"
      }}>
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            style={{
              background: selectedCategory === key ? "#34a853" : "transparent",
              color: selectedCategory === key ? "white" : "#6b7280",
              border: selectedCategory === key ? "none" : "2px solid #e5e7eb",
              padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
              borderRadius: "25px",
              fontSize: isMobile ? "0.8rem" : "0.9rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              minWidth: isMobile ? "auto" : "120px",
              textAlign: "center",
              boxShadow: selectedCategory === key ? "0 4px 12px rgba(52, 168, 83, 0.3)" : "none"
            }}
            onMouseEnter={(e) => {
              if (!isMobile && selectedCategory !== key) {
                e.target.style.transform = "translateY(-2px)"
                e.target.style.borderColor = "#34a853"
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== key) {
                e.target.style.transform = "translateY(0)"
                e.target.style.borderColor = "#e5e7eb"
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : 
                            isTablet ? "1fr" : 
                            "repeat(auto-fit, minmax(400px, 1fr))",
        gap: isMobile ? "1.5rem" : "2rem",
        marginBottom: "3rem"
      }}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Learning Journey Stats */}
      <div style={{
        marginTop: "3rem",
        background: "#f8fafc",
        borderRadius: "16px",
        padding: isMobile ? "1.5rem" : "2rem",
        border: "1px solid #e2e8f0"
      }}>
        <h3 style={{
          fontSize: isMobile ? "1.2rem" : "1.5rem",
          fontWeight: "600",
          color: "#1f2937",
          textAlign: "center",
          marginBottom: "2rem"
        }}>
          My Android Learning Journey
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: isMobile ? "1.5rem" : "2rem",
          textAlign: "center"
        }}>
          {[
            { number: "6", label: "Projects Built" },
            { number: "8+", label: "Technologies Learned" },
            { number: "2+", label: "Years Learning" },
            { number: "100%", label: "Passion Driven" }
          ].map((stat, index) => (
            <div key={index}>
              <div style={{
                fontSize: isMobile ? "2rem" : "2.5rem",
                fontWeight: "700",
                color: "#34a853",
                marginBottom: "0.5rem",
                transition: "transform 0.3s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.target.style.transform = "scale(1.1)"
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)"
              }}
              >
                {stat.number}
              </div>
              <div style={{
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                color: "#6b7280",
                fontWeight: "500"
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection