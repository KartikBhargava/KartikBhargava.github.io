// src/components/Sections/PortfolioSection.js
import React, { useState } from "react"
import Card from "../ui/card"
import Button from "../ui/buttons"

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

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

  const ProjectCard = ({ project }) => (
    <Card style={{
      height: "auto",
      display: "flex",
      flexDirection: "column",
      transition: "all 0.2s ease"
    }}>
      {/* Project Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem"
        }}>
          <div style={{ fontSize: "3rem" }}>
            {project.image}
          </div>
          <div>
            <h3 style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              color: "#1f2937",
              marginBottom: "0.5rem"
            }}>
              {project.title}
            </h3>
            <div style={{
              display: "inline-block",
              background: getStatusColor(project.status),
              color: "white",
              padding: "0.25rem 0.75rem",
              borderRadius: "12px",
              fontSize: "0.75rem",
              fontWeight: "600"
            }}>
              {project.status}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontSize: "1rem",
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
          {project.highlights.map(highlight => (
            <span key={highlight} style={{
              background: "#34a853",
              color: "white",
              padding: "0.25rem 0.75rem",
              borderRadius: "12px",
              fontSize: "0.75rem",
              fontWeight: "500"
            }}>
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
          {project.technologies.map(tech => (
            <span key={tech} style={{
              background: "#f3f4f6",
              color: "#374151",
              padding: "0.25rem 0.75rem",
              borderRadius: "12px",
              fontSize: "0.75rem",
              fontWeight: "500"
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div style={{ marginBottom: "1.5rem", flex: 1 }}>
        <h4 style={{
          fontSize: "0.9rem",
          fontWeight: "600",
          color: "#374151",
          marginBottom: "0.75rem"
        }}>
          Key Features:
        </h4>
        <ul style={{
          fontSize: "0.85rem",
          color: "#6b7280",
          lineHeight: "1.5",
          paddingLeft: "1rem",
          margin: 0
        }}>
          {project.features.slice(0, 3).map((feature, index) => (
            <li key={index} style={{ marginBottom: "0.25rem" }}>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: "flex",
        gap: "1rem",
        marginTop: "auto"
      }}>
        <Button
          variant="primary"
          style={{
            background: "#1f2937",
            padding: "0.75rem 1.5rem",
            fontSize: "0.9rem",
            flex: 1
          }}
          onClick={() => window.open(project.githubUrl, '_blank')}
        >
          🐙 View Code
        </Button>
        <Button
          variant="secondary"
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "0.9rem",
            flex: 1
          }}
          onClick={() => {/* Handle demo/preview */}}
        >
          📱 Preview
        </Button>
      </div>
    </Card>
  )

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "3rem 2rem 2rem",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{ 
        textAlign: "center",
        marginBottom: "3rem"
      }}>
        <h2 style={{ 
          fontSize: "3rem", 
          marginBottom: "1rem",
          fontWeight: "700",
          color: "#1f2937"
        }}>
          My Android Projects
        </h2>
        <p style={{ 
          fontSize: "1.2rem", 
          color: "#6b7280",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Personal projects showcasing Android development skills, learning journey, 
          and exploration of modern Android technologies
        </p>
      </div>

      {/* Category Filter */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "3rem"
      }}>
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            style={{
              background: selectedCategory === key ? "#34a853" : "transparent",
              color: selectedCategory === key ? "white" : "#6b7280",
              border: selectedCategory === key ? "none" : "2px solid #e5e7eb",
              padding: "0.75rem 1.5rem",
              borderRadius: "25px",
              fontSize: "0.9rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Learning Journey Stats */}
      <div style={{
        marginTop: "3rem",
        background: "#f8fafc",
        borderRadius: "16px",
        padding: "2rem",
        border: "1px solid #e2e8f0"
      }}>
        <h3 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#1f2937",
          textAlign: "center",
          marginBottom: "2rem"
        }}>
          My Android Learning Journey
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
          textAlign: "center"
        }}>
          <div>
            <div style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#34a853",
              marginBottom: "0.5rem"
            }}>
              6
            </div>
            <div style={{
              fontSize: "0.9rem",
              color: "#6b7280",
              fontWeight: "500"
            }}>
              Projects Built
            </div>
          </div>
          <div>
            <div style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#34a853",
              marginBottom: "0.5rem"
            }}>
              8+
            </div>
            <div style={{
              fontSize: "0.9rem",
              color: "#6b7280",
              fontWeight: "500"
            }}>
              Technologies Learned
            </div>
          </div>
          <div>
            <div style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#34a853",
              marginBottom: "0.5rem"
            }}>
              2+
            </div>
            <div style={{
              fontSize: "0.9rem",
              color: "#6b7280",
              fontWeight: "500"
            }}>
              Years Learning
            </div>
          </div>
          <div>
            <div style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#34a853",
              marginBottom: "0.5rem"
            }}>
              100%
            </div>
            <div style={{
              fontSize: "0.9rem",
              color: "#6b7280",
              fontWeight: "500"
            }}>
              Passion Driven
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection