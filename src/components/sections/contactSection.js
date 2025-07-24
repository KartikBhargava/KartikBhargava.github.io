import React, { useEffect, useState } from 'react'

const ContactSection = ({ darkMode = false }) => {
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
      pink: '#ec4899',
      badgeGradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
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
      pink: '#f472b6',
      badgeGradient: 'linear-gradient(135deg, #34d399 0%, #60a5fa 100%)'
    }
  }

  const currentTheme = darkMode ? theme.dark : theme.light
  
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "officialkartik07@gmail.com",
      href: "mailto:officialkartik07@gmail.com",
      gradient: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`,
      hoverColor: currentTheme.primary
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Connect professionally",
      href: "https://linkedin.com/in/kartik-bhargava-39586611b",
      gradient: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.primary} 100%)`,
      hoverColor: currentTheme.success
    },
    {
      icon: "🐙",
      title: "GitHub",
      description: "Android projects & libraries",
      href: "https://github.com/KartikBhargava",
      gradient: `linear-gradient(135deg, ${currentTheme.purple} 0%, ${currentTheme.pink} 100%)`,
      hoverColor: currentTheme.purple
    }
  ]

  return (
    <div style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      background: currentTheme.background,
      color: currentTheme.text,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s ease'
    }}>
      {/* Header */}
      <div style={{ 
        marginBottom: "3rem",
        animation: 'fadeInUp 0.6s ease'
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
          <span style={{ fontSize: '1.1rem' }}>🚀</span>
          Available for Projects
        </div>

        {/* FIXED title using CSS classes */}
        <h2 
          className={`gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`}
          style={{ 
            fontSize: isMobile ? "2.5rem" : "3.5rem",
            fontWeight: "800",
            marginBottom: "1.5rem",
            lineHeight: "1.2",
            animation: 'fadeInUp 0.6s ease 0.2s both'
          }}
        >
          Let's Build Something Amazing
        </h2>
        
        <p style={{ 
          fontSize: isMobile ? "1.1rem" : "1.3rem",
          marginBottom: "0",
          color: currentTheme.textSecondary,
          lineHeight: "1.7",
          maxWidth: "600px",
          margin: "0 auto",
          animation: 'fadeInUp 0.6s ease 0.4s both'
        }}>
          Looking for an <strong style={{color: currentTheme.text}}>Android developer</strong> for your next project? I'm always interested 
          in exciting Android opportunities and challenging mobile app projects.
        </p>
      </div>
      
      {/* Contact Methods */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: isMobile ? "1.5rem" : "2rem",
        marginBottom: isMobile ? "3rem" : "4rem",
        animation: 'fadeInUp 0.6s ease 0.6s both'
      }}>
        {contactMethods.map((method, index) => (
          <a 
            key={index}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block"
            }}
          >
            <div style={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              alignItems: "center",
              textAlign: isMobile ? "left" : "center",
              gap: isMobile ? "1.5rem" : "0",
              padding: isMobile ? "2rem" : "2.5rem",
              background: darkMode ? `${method.gradient}15` : `${method.gradient}10`,
              border: `1px solid ${currentTheme.border}`,
              borderRadius: "20px",
              transition: "all 0.3s ease",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              animation: `slideInUp 0.5s ease ${index * 0.1 + 0.8}s both`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
              e.currentTarget.style.boxShadow = darkMode 
                ? '0 15px 35px rgba(0, 0, 0, 0.2)' 
                : '0 15px 35px rgba(0, 0, 0, 0.1)'
              e.currentTarget.style.background = darkMode ? `${method.gradient}25` : `${method.gradient}20`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.background = darkMode ? `${method.gradient}15` : `${method.gradient}10`
            }}
            >
              {/* Top Border Gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: method.gradient,
                borderRadius: '20px 20px 0 0'
              }} />

              <div style={{ 
                fontSize: "3rem", 
                marginBottom: isMobile ? "0" : "1.5rem",
                flexShrink: 0,
                animation: 'bounce 2s infinite'
              }}>
                {method.icon}
              </div>
              <div>
                <h3 style={{ 
                  fontSize: "1.2rem", 
                  fontWeight: "700", 
                  marginBottom: "0.75rem",
                  color: currentTheme.text
                }}>
                  {method.title}
                </h3>
                <p style={{ 
                  fontSize: "1rem", 
                  color: currentTheme.textSecondary,
                  margin: 0,
                  fontWeight: "500"
                }}>
                  {method.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Info Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "1.5rem" : "2rem",
        animation: 'fadeInUp 0.6s ease 1.2s both'
      }}>
        <div style={{
          background: darkMode 
            ? `linear-gradient(135deg, ${currentTheme.surface} 0%, ${currentTheme.primary}10 100%)`
            : `linear-gradient(135deg, ${currentTheme.surface} 0%, ${currentTheme.primary}05 100%)`,
          textAlign: "center",
          padding: isMobile ? "2rem" : "2.5rem",
          borderRadius: "20px",
          border: `1px solid ${currentTheme.border}`,
          position: "relative",
          overflow: "hidden",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = darkMode 
            ? '0 10px 25px rgba(0, 0, 0, 0.2)' 
            : '0 10px 25px rgba(0, 0, 0, 0.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 2px 2px, ${currentTheme.primary}${darkMode ? '10' : '05'} 1px, transparent 0)`,
            backgroundSize: '16px 16px',
            opacity: 0.5
          }} />

          <div style={{
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              animation: 'pulse 2s infinite'
            }}>⏱️</div>
            <h3 style={{ 
              fontSize: isMobile ? "1.2rem" : "1.4rem",
              fontWeight: "700", 
              color: currentTheme.text, 
              marginBottom: "1rem" 
            }}>
              Response Time
            </h3>
            <p style={{ 
              fontSize: isMobile ? "1rem" : "1.1rem",
              color: currentTheme.textSecondary,
              lineHeight: "1.6",
              margin: 0
            }}>
              I typically respond within <strong style={{color: currentTheme.primary}}>24 hours</strong>. For urgent Android projects, 
              LinkedIn is the fastest way to reach me.
            </p>
          </div>
        </div>
        
        <div style={{
          background: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.primary} 100%)`,
          color: "white",
          textAlign: "center",
          padding: isMobile ? "2rem" : "2.5rem",
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
          boxShadow: `0 4px 14px 0 ${currentTheme.success}30`,
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'
          e.currentTarget.style.boxShadow = `0 15px 35px 0 ${currentTheme.success}40`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)'
          e.currentTarget.style.boxShadow = `0 4px 14px 0 ${currentTheme.success}30`
        }}
        >
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '16px 16px',
            opacity: 0.3
          }} />

          <div style={{
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              animation: 'bounce 2s infinite'
            }}>✅</div>
            <h3 style={{ 
              fontSize: isMobile ? "1.2rem" : "1.4rem",
              fontWeight: "700", 
              marginBottom: "1rem" 
            }}>
              Availability
            </h3>
            <p style={{ 
              fontSize: isMobile ? "1rem" : "1.1rem",
              opacity: "0.95",
              lineHeight: "1.6",
              margin: 0
            }}>
              Open to <strong>freelance Android projects</strong> and full-time opportunities. 
              Remote work preferred.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        marginTop: "3rem",
        animation: 'fadeInUp 0.6s ease 1.6s both'
      }}>
        <p style={{
          fontSize: "1.1rem",
          color: currentTheme.textSecondary,
          marginBottom: "1.5rem"
        }}>
          Ready to start your Android project? Let's discuss your ideas!
        </p>
        <div style={{
          display: "inline-flex",
          gap: "0.5rem",
          background: darkMode 
            ? `linear-gradient(135deg, ${currentTheme.primary}15 0%, ${currentTheme.purple}15 100%)`
            : `linear-gradient(135deg, ${currentTheme.primary}10 0%, ${currentTheme.purple}10 100%)`,
          padding: "1rem 2rem",
          borderRadius: "50px",
          border: `1px solid ${currentTheme.border}`,
          animation: 'pulse 3s infinite'
        }}>
          <span style={{fontSize: '1.2rem'}}>💬</span>
          <span style={{color: currentTheme.textSecondary, fontWeight: '500'}}>
            Average response: 12 hours
          </span>
        </div>
      </div>

      {/* Global CSS Animations */}
      <style jsx global>{`
        /* BULLETPROOF gradient text styles */
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
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  )
}

export default ContactSection