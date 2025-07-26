// Updated AboutSection with GA4 analytics integration
import React, { useEffect, useState } from 'react'
import { trackSectionView, trackEvent, trackTechnologyFilter } from '../../utils/analytics'

const AboutSection = ({ darkMode = false }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768)
      }
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
      return () => window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  useEffect(() => {
    setIsVisible(true)
    // Track about section view
    trackSectionView('about')
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
  
  const quickFacts = [
    { icon: "📍", label: "Based in India", color: currentTheme.primary },
    { icon: "🎓", label: "Computer Science", color: currentTheme.success },
    { icon: "🤖", label: "Android Enthusiast", color: currentTheme.purple }
  ]

  const expertiseAreas = [
    {
      title: "Native Android",
      description: "Kotlin, Jetpack Compose, Material Design",
      icon: "📱",
      gradient: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`
    },
    {
      title: "Architecture & Tools",
      description: "MVVM, Clean Architecture, Room, Retrofit",
      icon: "🏗️",
      gradient: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.primary} 100%)`
    },
    {
      title: "Backend Integration",
      description: "REST APIs, Firebase, GraphQL, Coroutines",
      icon: "🔄",
      gradient: `linear-gradient(135deg, ${currentTheme.warning} 0%, ${currentTheme.pink} 100%)`
    },
    {
      title: "Testing & CI/CD",
      description: "JUnit, Espresso, GitHub Actions, Play Console",
      icon: "🧪",
      gradient: `linear-gradient(135deg, ${currentTheme.pink} 0%, ${currentTheme.purple} 100%)`
    }
  ]

  // Analytics handlers
  const handleExpertiseClick = (area) => {
    trackEvent('expertise_area_click', {
      area_title: area.title,
      section: 'about',
      event_category: 'engagement'
    })
  }

  const handleQuickFactClick = (fact) => {
    trackEvent('quick_fact_click', {
      fact_label: fact.label,
      section: 'about',
      event_category: 'engagement'
    })
  }

  const handleTechnologyMention = (technology) => {
    trackTechnologyFilter(technology, 'about')
  }

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem",
      height: "100%",
      display: "flex",
      alignItems: "center",
      background: currentTheme.background,
      color: currentTheme.text,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s ease'
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
        gap: isMobile ? "3rem" : "4rem",
        alignItems: "center",
        width: "100%"
      }}>
        <div style={{ 
          order: isMobile ? 2 : 1,
          animation: 'fadeInLeft 0.8s ease'
        }}>
          <h2 
            className={`gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`}
            style={{ 
              fontSize: isMobile ? "2.5rem" : "3.5rem",
              fontWeight: "800",
              marginBottom: "1.5rem",
              animation: 'fadeInUp 0.6s ease 0.2s both'
            }}
          >
            About Me
          </h2>
          
          <div style={{ 
            fontSize: isMobile ? "1.1rem" : "1.2rem",
            color: currentTheme.textSecondary, 
            lineHeight: "1.8", 
            marginBottom: "2.5rem",
            animation: 'fadeInUp 0.6s ease 0.4s both'
          }}>
            <p style={{ marginBottom: "1.5rem" }}>
              I'm a <strong style={{color: currentTheme.text}}>passionate Android developer</strong> with over 5 years of experience building 
              native Android applications. I specialize in <strong 
                style={{color: currentTheme.primary, cursor: 'pointer'}}
                onClick={() => handleTechnologyMention('modern_android')}
              >modern Android development</strong> using 
              Kotlin, Jetpack Compose, and clean architecture patterns.
            </p>
            
            <p style={{ marginBottom: "1.5rem" }}>
              From concept to Play Store, I've guided <strong style={{color: currentTheme.success}}>numerous apps</strong> through their entire 
              lifecycle. I love working with the latest Android technologies and creating 
              smooth, performant user experiences.
            </p>
            
            <p>
              When I'm not coding, you'll find me <strong style={{color: currentTheme.purple}}>writing about Android development</strong>, 
              contributing to open source Android libraries, or exploring new Android features.
            </p>
          </div>

          <div style={{ 
            marginTop: "2.5rem",
            animation: 'fadeInUp 0.6s ease 0.6s both'
          }}>
            <h3 style={{ 
              fontSize: isMobile ? "1.3rem" : "1.5rem",
              fontWeight: "700", 
              color: currentTheme.text, 
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span style={{fontSize: '1.2rem'}}>🚀</span>
              Android Expertise
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "1.5rem"
            }}>
              {expertiseAreas.map((area, index) => (
                <div 
                  key={area.title}
                  onClick={() => handleExpertiseClick(area)}
                  style={{
                    padding: "1.5rem",
                    background: darkMode ? `${area.gradient}20` : `${area.gradient}10`,
                    border: `1px solid ${currentTheme.border}`,
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    animation: `slideInUp 0.5s ease ${index * 0.1 + 0.8}s both`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = darkMode 
                      ? '0 8px 25px rgba(0, 0, 0, 0.3)' 
                      : '0 8px 25px rgba(0, 0, 0, 0.1)'
                    e.currentTarget.style.background = darkMode ? `${area.gradient}30` : `${area.gradient}20`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.background = darkMode ? `${area.gradient}20` : `${area.gradient}10`
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: area.gradient,
                    borderRadius: '16px 16px 0 0'
                  }} />
                  
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem"
                  }}>
                    <span style={{fontSize: '1.5rem'}}>{area.icon}</span>
                    <h4 style={{ 
                      fontSize: "1.1rem", 
                      fontWeight: "600", 
                      color: currentTheme.text, 
                      margin: 0
                    }}>
                      {area.title}
                    </h4>
                  </div>
                  <p style={{ 
                    fontSize: "0.95rem", 
                    color: currentTheme.textSecondary,
                    margin: 0,
                    lineHeight: "1.5"
                  }}>
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div style={{
          background: darkMode 
            ? `linear-gradient(135deg, ${currentTheme.surface} 0%, ${currentTheme.primary}10 100%)`
            : `linear-gradient(135deg, ${currentTheme.surface} 0%, ${currentTheme.primary}05 100%)`,
          borderRadius: "24px",
          padding: isMobile ? "2rem" : "2.5rem",
          border: `1px solid ${currentTheme.border}`,
          textAlign: "center",
          order: isMobile ? 1 : 2,
          position: "relative",
          overflow: "hidden",
          animation: 'fadeInRight 0.8s ease 0.4s both',
          boxShadow: darkMode 
            ? '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
            : '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }}>
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 2px 2px, ${currentTheme.primary}${darkMode ? '15' : '08'} 1px, transparent 0)`,
            backgroundSize: '20px 20px',
            opacity: 0.5
          }} />

          <h3 style={{ 
            fontSize: isMobile ? "1.3rem" : "1.6rem",
            fontWeight: "700", 
            color: currentTheme.text, 
            marginBottom: "2rem",
            position: "relative",
            zIndex: 1
          }}>
            Quick Facts
          </h3>
          
          <div style={{ 
            display: "flex", 
            flexDirection: isMobile ? "row" : "column",
            justifyContent: isMobile ? "space-around" : "center",
            gap: isMobile ? "1rem" : "2rem",
            marginBottom: "2rem",
            position: "relative",
            zIndex: 1
          }}>
            {quickFacts.map((fact, index) => (
              <div 
                key={index} 
                onClick={() => handleQuickFactClick(fact)}
                style={{ 
                  textAlign: "center",
                  padding: "1rem",
                  borderRadius: "16px",
                  background: darkMode ? `${fact.color}20` : `${fact.color}10`,
                  border: `1px solid ${currentTheme.border}`,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  animation: `fadeInUp 0.5s ease ${index * 0.2 + 1}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.background = darkMode ? `${fact.color}30` : `${fact.color}20`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.background = darkMode ? `${fact.color}20` : `${fact.color}10`
                }}
              >
                <div style={{ 
                  fontSize: "2rem", 
                  marginBottom: "0.5rem",
                  animation: 'bounce 2s infinite'
                }}>
                  {fact.icon}
                </div>
                <p style={{ 
                  fontSize: "0.9rem", 
                  color: currentTheme.textSecondary, 
                  fontWeight: "600",
                  margin: 0,
                  whiteSpace: isMobile ? "nowrap" : "normal"
                }}>
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
          
          {/* Android Version Badge */}
          <div 
            onClick={() => trackEvent('android_version_click', {
              version: 'Android 14',
              api_level: 34,
              section: 'about',
              event_category: 'engagement'
            })}
            style={{
            padding: "1.5rem",
            background: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.primary} 100%)`,
            borderRadius: "16px",
            color: "white",
            position: "relative",
            zIndex: 1,
            boxShadow: `0 4px 14px 0 ${currentTheme.success}30`,
            animation: 'fadeInUp 0.6s ease 1.6s both',
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow = `0 8px 20px 0 ${currentTheme.success}40`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = `0 4px 14px 0 ${currentTheme.success}30`
          }}
          >
            <div style={{ 
              fontSize: "1.1rem", 
              fontWeight: "700", 
              marginBottom: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem"
            }}>
              <span style={{fontSize: '1.2rem'}}>🎯</span>
              Latest Target
            </div>
            <div style={{ 
              fontSize: "1rem",
              fontWeight: "600",
              opacity: 0.9
            }}>
              Android 14 (API 34)
            </div>
          </div>

          {/* Floating Elements */}
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            fontSize: '1.2rem',
            opacity: 0.2,
            animation: 'float 3s ease-in-out infinite'
          }}>💻</div>
          <div style={{
            position: 'absolute',
            bottom: '15px',
            left: '15px',
            fontSize: '1.2rem',
            opacity: 0.2,
            animation: 'float 3s ease-in-out infinite 1.5s'
          }}>⚡</div>
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  )
}

export default AboutSection