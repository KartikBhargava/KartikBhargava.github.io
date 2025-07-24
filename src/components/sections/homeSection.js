// Updated Home Section with CSS class approach
import React, { useEffect, useState } from 'react'
import Button from "../ui/buttons"
import TechPill from "../ui/techPill"

const HomeSection = ({ setActiveSection, darkMode = false }) => {
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
  }, [])

  // Theme colors
  const theme = {
    light: {
      background: '#ffffff',
      surface: '#ffffff',
      text: '#0f172a',
      textSecondary: '#64748b',
      border: '#e2e8f0',
      primary: '#3b82f6',
      success: '#10b981',
      purple: '#8b5cf6',
      buttonGradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      badgeGradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
    },
    dark: {
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f8fafc',
      textSecondary: '#cbd5e1',
      border: '#334155',
      primary: '#60a5fa',
      success: '#34d399',
      purple: '#a78bfa',
      buttonGradient: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
      badgeGradient: 'linear-gradient(135deg, #34d399 0%, #60a5fa 100%)'
    }
  }

  const currentTheme = darkMode ? theme.dark : theme.light

  const androidTechnologies = [
    "Kotlin", "Java", "Jetpack Compose", "Android Studio", 
    "Firebase", "Room", "Retrofit", "Coroutines"
  ]

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "3rem" : "4rem",
      alignItems: "center",
      height: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "2rem",
      background: currentTheme.background,
      color: currentTheme.text,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s ease'
    }}>
      
      {/* Text Content */}
      <div style={{ 
        order: isMobile ? 2 : 1,
        animation: 'fadeInLeft 0.8s ease'
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: currentTheme.badgeGradient,
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "50px",
          fontSize: "0.9rem",
          fontWeight: "600",
          marginBottom: "2rem",
          boxShadow: `0 4px 14px 0 ${currentTheme.success}39`
        }}>
          <span style={{ fontSize: '1.1rem' }}>🤖</span>
          Open to Android Projects
        </div>
        
        {/* FIXED title using CSS classes */}
        <h1 
          className={`gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`}
          style={{
            fontSize: isMobile ? "3rem" : "4rem",
            fontWeight: "800",
            lineHeight: "1.1",
            marginBottom: "1rem",
            animation: 'fadeInUp 0.6s ease 0.2s both'
          }}
        >
          Hi, I'm Kartik
        </h1>
        
        <h2 style={{
          fontSize: isMobile ? "1.5rem" : "2.2rem",
          marginBottom: "1.5rem",
          fontWeight: "600",
          color: currentTheme.textSecondary,
          lineHeight: "1.3",
          animation: 'fadeInUp 0.6s ease 0.4s both'
        }}>
          Android Developer & Mobile App Architect
        </h2>
        
        <p style={{ 
          fontSize: isMobile ? "1.1rem" : "1.3rem",
          marginBottom: "2.5rem",
          color: currentTheme.textSecondary,
          lineHeight: "1.7",
          animation: 'fadeInUp 0.6s ease 0.6s both'
        }}>
          I craft <strong style={{color: currentTheme.text}}>native Android applications</strong> that deliver exceptional user experiences. 
          Passionate about <strong style={{color: currentTheme.primary}}>clean architecture</strong>, modern Android development, and building 
          apps that users love.
        </p>
        
        <div style={{ 
          display: "flex", 
          gap: "1rem",
          marginBottom: "3rem",
          flexDirection: isMobile ? "column" : "row",
          animation: 'fadeInUp 0.6s ease 0.8s both'
        }}>
          <Button 
            variant="primary" 
            style={{ 
              background: currentTheme.buttonGradient,
              border: 'none',
              width: isMobile ? "100%" : "auto",
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '12px',
              boxShadow: `0 4px 14px 0 ${currentTheme.primary}39`,
              transition: 'all 0.3s ease',
              color: 'white'
            }}
            onClick={() => setActiveSection('portfolio')}
          >
            <span style={{marginRight: '0.5rem'}}>📱</span>
            View My Apps
          </Button>
          <Button 
            variant="outline"
            onClick={() => setActiveSection('writing')}
            style={{ 
              width: isMobile ? "100%" : "auto",
              border: `2px solid ${currentTheme.primary}`,
              color: currentTheme.primary,
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              borderRadius: '12px',
              background: 'transparent',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{marginRight: '0.5rem'}}>✍️</span>
            Read Android Blog
          </Button>
        </div>

        {/* Tech Stack */}
        <div style={{ 
          marginTop: "2rem",
          animation: 'fadeInUp 0.6s ease 1s both'
        }}>
          <p style={{ 
            fontSize: "1rem", 
            color: currentTheme.textSecondary, 
            marginBottom: "1rem",
            fontWeight: "600"
          }}>
            <span style={{color: currentTheme.text}}>🚀 Technologies I work with:</span>
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem"
          }}>
            {androidTechnologies.map((tech, index) => (
              <span
                key={tech}
                style={{
                  background: darkMode 
                    ? `linear-gradient(135deg, ${currentTheme.primary}20 0%, ${currentTheme.purple}20 100%)`
                    : `linear-gradient(135deg, ${currentTheme.primary}15 0%, ${currentTheme.purple}15 100%)`,
                  color: currentTheme.text,
                  border: `1px solid ${currentTheme.border}`,
                  padding: "0.5rem 1rem",
                  borderRadius: "25px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  animation: `slideInUp 0.5s ease ${index * 0.1}s both`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Visual Element */}
      <div style={{
        background: darkMode 
          ? `linear-gradient(135deg, ${currentTheme.surface} 0%, ${currentTheme.primary}10 100%)`
          : `linear-gradient(135deg, ${currentTheme.surface} 0%, ${currentTheme.primary}05 100%)`,
        borderRadius: "24px",
        padding: isMobile ? "2.5rem" : "3rem",
        textAlign: "center",
        border: `1px solid ${currentTheme.border}`,
        order: isMobile ? 1 : 2,
        position: 'relative',
        overflow: 'hidden',
        animation: 'fadeInRight 0.8s ease 0.4s both',
        boxShadow: darkMode 
          ? '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)'
          : '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}>
        {/* Phone Icon */}
        <div style={{ 
          fontSize: isMobile ? "4rem" : "5rem",
          marginBottom: "1.5rem",
          position: 'relative',
          zIndex: 1,
          animation: 'bounce 2s infinite'
        }}>
          📱
        </div>
        
        {/* Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: isMobile ? "1.5rem" : "2rem",
          textAlign: "center",
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            padding: '1rem',
            borderRadius: '16px',
            background: currentTheme.badgeGradient,
            color: '#ffffff',
            boxShadow: `0 4px 14px 0 ${currentTheme.success}30`
          }}>
            <div style={{ 
              fontSize: isMobile ? "2rem" : "2.5rem",
              fontWeight: "800",
              marginBottom: "0.5rem"
            }}>
              5+
            </div>
            <div style={{ 
              fontSize: "0.9rem", 
              fontWeight: "600",
              opacity: 0.9
            }}>
              Years Android Dev
            </div>
          </div>
          <div style={{
            padding: '1rem',
            borderRadius: '16px',
            background: currentTheme.buttonGradient,
            color: '#ffffff',
            boxShadow: `0 4px 14px 0 ${currentTheme.primary}30`
          }}>
            <div style={{ 
              fontSize: isMobile ? "2rem" : "2.5rem",
              fontWeight: "800",
              marginBottom: "0.5rem"
            }}>
              25+
            </div>
            <div style={{ 
              fontSize: "0.9rem", 
              fontWeight: "600",
              opacity: 0.9
            }}>
              Apps Published
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles - FIXED gradient classes */}
      <style jsx global>{`
        /* BULLETPROOF gradient text styles */
        .gradient-title {
          /* Always ensure text is visible with solid color */
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
        
        /* Fallback for browsers that don't support background-clip */
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
        
        /* Force fallback during transitions to prevent strip bug */
        .gradient-title.transitioning {
          -webkit-text-fill-color: unset !important;
          background: none !important;
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
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  )
}

export default HomeSection