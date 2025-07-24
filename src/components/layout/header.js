import React, { useState, useEffect } from "react"

const Header = ({ 
  activeSection, 
  setActiveSection, 
  sections, 
  darkMode = false, 
  toggleDarkMode,
  theme,
  isMobile = false 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileState, setIsMobileState] = useState(false)

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Handle mobile detection
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkScreenSize = () => {
        setIsMobileState(window.innerWidth < 768)
      }
      checkScreenSize()
      window.addEventListener('resize', checkScreenSize)
      return () => window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  // Close menu when section changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [activeSection])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleEscape)
      return () => window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Modern theme colors - fallback if theme prop not provided
  const defaultTheme = {
    light: {
      bg: '#ffffff',
      surface: '#ffffff',
      text: '#0f172a',
      textSecondary: '#64748b',
      border: '#e2e8f0',
      primary: '#3b82f6',
      success: '#10b981',
      purple: '#8b5cf6'
    },
    dark: {
      bg: '#0f172a',
      surface: '#1e293b',
      text: '#f8fafc',
      textSecondary: '#cbd5e1',
      border: '#334155',
      primary: '#60a5fa',
      success: '#34d399',
      purple: '#a78bfa'
    }
  }

  const currentTheme = theme || (darkMode ? defaultTheme.dark : defaultTheme.light)
  const mobile = isMobile || isMobileState

  const handleSectionClick = (section) => {
    setActiveSection(section)
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const headerStyles = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: darkMode 
      ? `rgba(15, 23, 42, ${isScrolled ? '0.95' : '0.9'})` 
      : `rgba(255, 255, 255, ${isScrolled ? '0.95' : '0.9'})`,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: `1px solid ${currentTheme.border}`,
    transition: 'all 0.3s ease',
    boxShadow: isScrolled 
      ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      : 'none'
  }

  return (
    <>
      <header style={headerStyles}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: mobile ? '1rem' : '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo/Brand */}
          <div 
            onClick={() => handleSectionClick('home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`,
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.3rem',
              color: 'white',
              fontWeight: 'bold',
              boxShadow: `0 4px 14px 0 ${currentTheme.primary}39`,
              transition: 'all 0.3s ease'
            }}>
              🤖
            </div>
            {!mobile && (
              <div>
                {/* FIXED header title using CSS classes */}
                <h1 
                  className={`header-gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`}
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: '800',
                    margin: 0,
                    lineHeight: '1.2'
                  }}
                >
                  Kartik Bhargava
                </h1>
                <p style={{
                  fontSize: '0.8rem',
                  color: currentTheme.textSecondary,
                  margin: 0,
                  fontWeight: '600'
                }}>
                  Android Developer
                </p>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          {!mobile && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: currentTheme.surface,
              padding: '0.5rem',
              borderRadius: '16px',
              border: `1px solid ${currentTheme.border}`,
              boxShadow: darkMode 
                ? '0 4px 6px rgba(0, 0, 0, 0.2)' 
                : '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}>
              {Object.entries(sections).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => handleSectionClick(key)}
                  style={{
                    padding: '0.75rem 1.25rem',
                    border: 'none',
                    borderRadius: '12px',
                    background: activeSection === key 
                      ? `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`
                      : 'transparent',
                    color: activeSection === key 
                      ? '#ffffff' 
                      : currentTheme.text,
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: activeSection === key 
                      ? `0 4px 12px ${currentTheme.primary}30` 
                      : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== key) {
                      e.target.style.background = `${currentTheme.primary}10`
                      e.target.style.transform = 'translateY(-1px)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== key) {
                      e.target.style.background = 'transparent'
                      e.target.style.transform = 'translateY(0)'
                    }
                  }}
                >
                  {label}
                  
                  {/* Active indicator */}
                  {activeSection === key && (
                    <div style={{
                      position: 'absolute',
                      bottom: '6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '16px',
                      height: '2px',
                      background: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: '2px'
                    }} />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Right side controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            {/* Dark mode toggle */}
            {toggleDarkMode && (
              <button
                onClick={toggleDarkMode}
                style={{
                  width: '44px',
                  height: '44px',
                  border: `1px solid ${currentTheme.border}`,
                  borderRadius: '12px',
                  background: currentTheme.surface,
                  color: currentTheme.text,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  transition: 'all 0.2s ease',
                  boxShadow: darkMode 
                    ? '0 2px 4px rgba(0, 0, 0, 0.2)' 
                    : '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'
                  e.target.style.boxShadow = darkMode 
                    ? '0 4px 12px rgba(0, 0, 0, 0.3)' 
                    : '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                  e.target.style.boxShadow = darkMode 
                    ? '0 2px 4px rgba(0, 0, 0, 0.2)' 
                    : '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
                aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              >
                {darkMode ? '🌞' : '🌙'}
              </button>
            )}

            {/* Mobile menu button */}
            {mobile && (
              <button
                onClick={toggleMenu}
                style={{
                  width: '44px',
                  height: '44px',
                  border: `1px solid ${currentTheme.border}`,
                  borderRadius: '12px',
                  background: currentTheme.surface,
                  color: currentTheme.text,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '3px',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Toggle menu"
              >
                <div style={{
                  width: '18px',
                  height: '2px',
                  background: currentTheme.text,
                  borderRadius: '1px',
                  transform: isMenuOpen ? 'rotate(45deg) translateY(5px)' : 'none',
                  transition: 'all 0.2s ease'
                }} />
                <div style={{
                  width: '18px',
                  height: '2px',
                  background: currentTheme.text,
                  borderRadius: '1px',
                  opacity: isMenuOpen ? 0 : 1,
                  transition: 'all 0.2s ease'
                }} />
                <div style={{
                  width: '18px',
                  height: '2px',
                  background: currentTheme.text,
                  borderRadius: '1px',
                  transform: isMenuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none',
                  transition: 'all 0.2s ease'
                }} />
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {mobile && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999,
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease'
        }}
        onClick={() => setIsMenuOpen(false)}
        >
          <div style={{
            position: 'absolute',
            top: '80px',
            right: '1rem',
            background: currentTheme.surface,
            borderRadius: '20px',
            border: `1px solid ${currentTheme.border}`,
            boxShadow: darkMode 
              ? '0 20px 40px rgba(0, 0, 0, 0.3)' 
              : '0 20px 40px rgba(0, 0, 0, 0.1)',
            padding: '1.5rem',
            minWidth: '220px',
            transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)',
            transition: 'all 0.3s ease'
          }}
          onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile menu header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: `1px solid ${currentTheme.border}`
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                color: 'white'
              }}>
                🤖
              </div>
              <div>
                {/* FIXED mobile menu title using CSS classes */}
                <div 
                  className={`mobile-header-gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: '700'
                  }}
                >
                  Kartik Bhargava
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  color: currentTheme.textSecondary
                }}>
                  Android Developer
                </div>
              </div>
            </div>

            {/* Navigation items */}
            {Object.entries(sections).map(([key, label], index) => (
              <button
                key={key}
                onClick={() => handleSectionClick(key)}
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: 'none',
                  borderRadius: '12px',
                  background: activeSection === key 
                    ? `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`
                    : 'transparent',
                  color: activeSection === key 
                    ? '#ffffff' 
                    : currentTheme.text,
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  marginBottom: '0.5rem',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  animation: `slideInRight 0.3s ease ${index * 0.05}s both`
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== key) {
                    e.target.style.background = `${currentTheme.primary}10`
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== key) {
                    e.target.style.background = 'transparent'
                  }
                }}
              >
                <span style={{fontSize: '1rem'}}>
                  {key === 'home' && '🏠'}
                  {key === 'about' && '👨‍💻'}
                  {key === 'portfolio' && '💼'}
                  {key === 'writing' && '✍️'}
                  {key === 'contact' && '📧'}
                </span>
                {label}
              </button>
            ))}

            {/* Mobile menu footer */}
            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1rem',
              borderTop: `1px solid ${currentTheme.border}`,
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '0.8rem',
                color: currentTheme.textSecondary,
                marginBottom: '0.5rem'
              }}>
                Available for projects
              </div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: `${currentTheme.success}15`,
                color: currentTheme.success,
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                <span style={{fontSize: '0.7rem'}}>🟢</span>
                Open to work
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global styles for animations and FIXED gradient text */}
      <style jsx global>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* BULLETPROOF gradient text styles for header */
        .header-gradient-title {
          transition: color 0.3s ease !important;
        }
        
        .header-gradient-title.light-mode {
          color: #3b82f6 !important;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .header-gradient-title.dark-mode {
          color: #60a5fa !important;
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Mobile menu gradient text */
        .mobile-header-gradient-title {
          transition: color 0.3s ease !important;
        }
        
        .mobile-header-gradient-title.light-mode {
          color: #3b82f6 !important;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .mobile-header-gradient-title.dark-mode {
          color: #60a5fa !important;
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Fallback for browsers that don't support background-clip */
        @supports not (background-clip: text) {
          .header-gradient-title, .mobile-header-gradient-title {
            background: none !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: unset !important;
          }
          
          .header-gradient-title.light-mode, .mobile-header-gradient-title.light-mode {
            color: #3b82f6 !important;
          }
          
          .header-gradient-title.dark-mode, .mobile-header-gradient-title.dark-mode {
            color: #60a5fa !important;
          }
        }
      `}</style>
    </>
  )
}

export default Header