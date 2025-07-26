// Updated PortfolioSection with GA4 analytics integration
import React, { useState, useEffect } from "react"
import Button from "../ui/buttons"
import { trackSectionView, trackProjectInteraction, trackTechnologyFilter, trackEvent } from '../../utils/analytics'

const PortfolioSection = ({ darkMode = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768)
      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  useEffect(() => {
    // Track portfolio section view
    trackSectionView('portfolio')
  }, [])

  // Modern theme colors
  const theme = {
    light: {
      background: '#ffffff',
      surface: '#ffffff',
      text: '#0f172a',
      textSecondary: '#64748b',
      textLight: '#94a3b8',
      border: '#e2e8f0',
      primary: '#3b82f6',
      success: '#10b981',
      warning: '#f59e0b',
      purple: '#8b5cf6',
      pink: '#ec4899'
    },
    dark: {
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f8fafc',
      textSecondary: '#cbd5e1',
      textLight: '#94a3b8',
      border: '#334155',
      primary: '#60a5fa',
      success: '#34d399',
      warning: '#fbbf24',
      purple: '#a78bfa',
      pink: '#f472b6'
    }
  }

  const currentTheme = darkMode ? theme.dark : theme.light

  const categories = {
    all: 'All Projects',
    featured: 'Featured',
    learning: 'Learning',
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
      ],
      gradient: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`
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
      ],
      gradient: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.primary} 100%)`
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
      ],
      gradient: `linear-gradient(135deg, ${currentTheme.warning} 0%, ${currentTheme.pink} 100%)`
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getStatusColor = (status) => {
    switch(status) {
      case 'Completed': return currentTheme.success
      case 'In Development': return currentTheme.primary
      case 'Ongoing': return currentTheme.warning
      case 'Experimental': return currentTheme.purple
      case 'Learning Project': return currentTheme.pink
      default: return currentTheme.textLight
    }
  }

  // Analytics handlers
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    trackTechnologyFilter(categories[category], 'portfolio')
    trackEvent('portfolio_filter', {
      filter_type: 'category',
      filter_value: category,
      section: 'portfolio',
      event_category: 'filter'
    })
  }

  const handleProjectView = (project) => {
    trackProjectInteraction('view_project', project.title, project.category)
  }

  const handleGithubClick = (project) => {
    trackProjectInteraction('click_github', project.title, project.category)
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank')
    }
  }

  const handleDemoClick = (project) => {
    trackProjectInteraction('click_demo', project.title, project.category)
  }

  const handleTechnologyClick = (technology, projectName) => {
    trackEvent('technology_click', {
      technology: technology,
      project: projectName,
      section: 'portfolio',
      event_category: 'engagement'
    })
  }

  const handleFeatureExpand = (project, expanded) => {
    trackEvent('project_feature_expand', {
      project_name: project.title,
      expanded: expanded,
      section: 'portfolio',
      event_category: 'engagement'
    })
  }

  // Enhanced ProjectCard Component with Analytics
  const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [hasViewed, setHasViewed] = useState(false)

    // Track when project comes into view
    useEffect(() => {
      if (!hasViewed) {
        const timer = setTimeout(() => {
          handleProjectView(project)
          setHasViewed(true)
        }, 1000) // Track after 1 second of being mounted

        return () => clearTimeout(timer)
      }
    }, [])

    const handleExpandToggle = () => {
      const newExpanded = !isExpanded
      setIsExpanded(newExpanded)
      handleFeatureExpand(project, newExpanded)
    }

    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${currentTheme.surface} 0%, ${project.gradient}05 100%)`,
          borderRadius: "20px",
          padding: isMobile ? "2rem" : "2.5rem",
          border: `1px solid ${currentTheme.border}`,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: isHovered 
            ? (darkMode ? "0 20px 40px rgba(0,0,0,0.3)" : "0 20px 40px rgba(0,0,0,0.1)")
            : (darkMode ? "0 4px 6px rgba(0,0,0,0.2)" : "0 4px 6px rgba(0,0,0,0.05)"),
          position: "relative",
          overflow: "hidden",
          animation: `slideInUp 0.6s ease ${index * 0.1}s both`
        }}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top gradient border */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: project.gradient,
          borderRadius: '20px 20px 0 0'
        }} />

        {/* Background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 2px 2px, ${currentTheme.primary}${darkMode ? '08' : '03'} 1px, transparent 0)`,
          backgroundSize: '20px 20px',
          opacity: 0.5
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Project Header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "1.5rem"
          }}>
            <div 
              style={{ 
                fontSize: isMobile ? "3rem" : "3.5rem",
                flexShrink: 0,
                transition: "transform 0.3s ease",
                cursor: "pointer",
                transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
                animation: 'bounce 2s infinite'
              }}
              onClick={() => handleProjectView(project)}
            >
              {project.image}
            </div>
            
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: isMobile ? "1.4rem" : "1.6rem",
                fontWeight: "700",
                color: currentTheme.text,
                marginBottom: "0.75rem",
                lineHeight: "1.3"
              }}>
                {project.title}
              </h3>
              
              <div style={{
                display: "inline-block",
                background: getStatusColor(project.status),
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "25px",
                fontSize: "0.8rem",
                fontWeight: "600",
                boxShadow: `0 2px 8px ${getStatusColor(project.status)}30`
              }}>
                {project.status}
              </div>
            </div>
          </div>

          {/* Description */}
          <p style={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            color: currentTheme.textSecondary,
            lineHeight: "1.7",
            marginBottom: "2rem"
          }}>
            {project.description}
          </p>

          {/* Highlights */}
          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{
              fontSize: "1rem",
              fontWeight: "700",
              color: currentTheme.text,
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span style={{fontSize: '1.1rem'}}>✨</span>
              Project Highlights
            </h4>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem"
            }}>
              {project.highlights.map((highlight, highlightIndex) => (
                <span 
                  key={highlight} 
                  style={{
                    background: project.gradient,
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "25px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    cursor: "default",
                    display: "inline-block",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    animation: `fadeInUp 0.5s ease ${highlightIndex * 0.1 + 0.2}s both`
                  }}
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{
              fontSize: "1rem",
              fontWeight: "700",
              color: currentTheme.text,
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span style={{fontSize: '1.1rem'}}>🛠️</span>
              Technologies Used
            </h4>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem"
            }}>
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={tech} 
                  onClick={() => handleTechnologyClick(tech, project.title)}
                  style={{
                    background: darkMode ? `${currentTheme.primary}15` : `${currentTheme.primary}10`,
                    color: currentTheme.text,
                    border: `1px solid ${currentTheme.border}`,
                    padding: "0.4rem 0.8rem",
                    borderRadius: "12px",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    display: "inline-block",
                    transition: "all 0.2s ease",
                    animation: `slideInUp 0.3s ease ${techIndex * 0.05 + 0.4}s both`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = darkMode ? `${currentTheme.primary}25` : `${currentTheme.primary}20`
                    e.target.style.transform = "scale(1.05)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = darkMode ? `${currentTheme.primary}15` : `${currentTheme.primary}10`
                    e.target.style.transform = "scale(1)"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div style={{ marginBottom: "2rem", flex: 1 }}>
            <button
              onClick={handleExpandToggle}
              style={{
                background: "none",
                border: "none",
                fontSize: "1rem",
                fontWeight: "700",
                color: currentTheme.text,
                marginBottom: "1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: 0,
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.color = currentTheme.primary
              }}
              onMouseLeave={(e) => {
                e.target.style.color = currentTheme.text
              }}
            >
              <span style={{fontSize: '1.1rem'}}>🔧</span>
              Key Features
              <span style={{
                transition: "transform 0.3s ease",
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                fontSize: "0.8rem"
              }}>
                ▼
              </span>
            </button>
            
            <div style={{
              maxHeight: isExpanded ? "300px" : "120px",
              overflow: "hidden",
              transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            }}>
              <ul style={{
                fontSize: "0.95rem",
                color: currentTheme.textSecondary,
                lineHeight: "1.6",
                paddingLeft: "1.5rem",
                margin: 0
              }}>
                {project.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    style={{ 
                      marginBottom: "0.5rem",
                      opacity: isExpanded ? 1 : (featureIndex < 3 ? 1 : 0.3),
                      transition: `opacity 0.3s ease ${featureIndex * 0.1}s`
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
                background: project.gradient,
                border: "none",
                flex: 1,
                padding: "0.75rem 1.5rem",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: "600",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
                color: "white",
                transition: "all 0.3s ease"
              }}
              onClick={() => handleGithubClick(project)}
              analyticsLabel="view_code"
              analyticsSection="portfolio"
            >
              <span style={{marginRight: '0.5rem'}}>🐙</span>
              View Code
            </Button>
            <Button
              variant="outline"
              style={{ 
                flex: 1,
                border: `2px solid ${currentTheme.primary}`,
                color: currentTheme.primary,
                padding: "0.75rem 1.5rem",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: "600",
                background: "transparent",
                transition: "all 0.3s ease"
              }}
              onClick={() => handleDemoClick(project)}
              analyticsLabel="view_demo"
              analyticsSection="portfolio"
            >
              <span style={{marginRight: '0.5rem'}}>📱</span>
              Preview
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      background: currentTheme.background,
      color: currentTheme.text,
      minHeight: "100vh",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: "center",
          marginBottom: isMobile ? "3rem" : "4rem",
          animation: 'fadeInUp 0.6s ease'
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.primary} 100%)`,
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "50px",
            fontSize: "0.9rem",
            fontWeight: "600",
            marginBottom: "2rem",
            boxShadow: `0 4px 14px 0 ${currentTheme.success}39`
          }}>
            <span style={{ fontSize: '1.1rem' }}>💼</span>
            My Work Portfolio
          </div>

          <h2 
            className={`gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`}
            style={{ 
              fontSize: isMobile ? "2.5rem" : "3.5rem",
              fontWeight: "800",
              marginBottom: "1.5rem",
              lineHeight: "1.2"
            }}
          >
            My Android Projects
          </h2>
          <p style={{ 
            fontSize: isMobile ? "1.1rem" : "1.3rem",
            color: currentTheme.textSecondary,
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.7"
          }}>
            Personal projects showcasing <strong style={{color: currentTheme.text}}>Android development skills</strong>, learning journey, 
            and exploration of modern Android technologies
          </p>
        </div>

        {/* Category Filter */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: isMobile ? "0.5rem" : "1rem",
          marginBottom: isMobile ? "3rem" : "4rem",
          flexWrap: "wrap",
          padding: isMobile ? "0 0.5rem" : "0",
          animation: 'fadeInUp 0.6s ease 0.2s both'
        }}>
          <div style={{
            display: "flex",
            gap: "0.5rem",
            background: currentTheme.surface,
            padding: "0.5rem",
            borderRadius: "50px",
            border: `1px solid ${currentTheme.border}`,
            boxShadow: darkMode 
              ? "0 4px 6px rgba(0, 0, 0, 0.2)" 
              : "0 4px 6px rgba(0, 0, 0, 0.05)",
            flexWrap: "wrap",
            justifyContent: "center"
          }}>
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleCategoryFilter(key)}
                style={{
                  background: selectedCategory === key 
                    ? `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`
                    : "transparent",
                  color: selectedCategory === key ? "white" : currentTheme.text,
                  border: "none",
                  padding: isMobile ? "0.75rem 1.25rem" : "0.75rem 1.5rem",
                  borderRadius: "25px",
                  fontSize: isMobile ? "0.85rem" : "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  minWidth: isMobile ? "auto" : "120px",
                  textAlign: "center",
                  boxShadow: selectedCategory === key 
                    ? `0 4px 12px ${currentTheme.primary}30` 
                    : "none"
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
          gap: isMobile ? "2rem" : "2.5rem",
          marginBottom: "4rem"
        }}>
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Global CSS Animations */}
      <style jsx global>{`
        .gradient-title {
          transition: color 0.3s ease !important;
        }
        
        .gradient-title.light-mode {
          color: #3b82f6 !important;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-title.dark-mode {
          color: #60a5fa !important;
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @supports not (background-clip: text) {
          .gradient-title {
            background: none !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: unset !important;
          }
          
          .gradient-title.light-mode {
            color: #3b82f6 !important;
          }
          
          .gradient-title.dark-mode {
            color: #60a5fa !important;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </div>
  )
}

export default PortfolioSection