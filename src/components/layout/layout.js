import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import Header from "./header"

const Layout = ({ children, activeSection, setActiveSection, sections, darkMode, setDarkMode }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [internalDarkMode, setInternalDarkMode] = useState(false)

  // Use props if provided, otherwise use internal state
  const currentDarkMode = darkMode !== undefined ? darkMode : internalDarkMode
  const toggleDarkMode = setDarkMode || setInternalDarkMode

  // Initialize dark mode if not controlled by parent
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode === undefined) {
        const savedTheme = localStorage.getItem('darkMode')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setInternalDarkMode(savedTheme ? JSON.parse(savedTheme) : prefersDark)
      }
      setIsLoading(false)

      // Check mobile
      const checkMobile = () => setIsMobile(window.innerWidth < 768)
      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [darkMode])

  // Save theme preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(currentDarkMode))
      document.documentElement.classList.toggle('dark', currentDarkMode)
    }
  }, [currentDarkMode])

  const handleToggleDarkMode = () => {
    const newMode = !currentDarkMode
    if (setDarkMode) {
      setDarkMode(newMode)
    } else {
      setInternalDarkMode(newMode)
    }
  }

  // Determine which sections need scrolling
  const scrollableSections = ['portfolio', 'writing']
  const needsScrolling = scrollableSections.includes(activeSection)
  
  // Theme colors
  const theme = {
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

  const currentTheme = currentDarkMode ? theme.dark : theme.light

  if (isLoading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: currentTheme.bg,
        color: currentTheme.text
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: `3px solid ${currentTheme.border}`,
            borderTop: `3px solid ${currentTheme.text}`,
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }} />
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <html lang="en" className={currentDarkMode ? 'dark' : ''} />
        <title>Kartik Bhargava - Tech Blog</title>
        <meta name="description" content="Technology, programming, and development insights" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={currentDarkMode ? '#0f172a' : '#ffffff'} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Kartik Bhargava - Tech Blog" />
        <meta property="og:description" content="Technology, programming, and development insights" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kartikbhargava.github.io" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kartik Bhargava - Tech Blog" />
        <meta name="twitter:description" content="Technology, programming, and development insights" />
      </Helmet>

      <div style={{ 
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif",
        minHeight: "100vh",
        background: currentTheme.bg,
        color: currentTheme.text,
        display: "flex",
        flexDirection: "column",
        transition: 'all 0.3s ease',
        // Ensure proper overflow handling for mobile
        overflow: isMobile ? 'auto' : 'hidden'
      }}>
        
        <Header 
          activeSection={activeSection} 
          setActiveSection={setActiveSection} 
          sections={sections}
          darkMode={currentDarkMode}
          toggleDarkMode={handleToggleDarkMode}
          theme={currentTheme}
          isMobile={isMobile}
        />
        
        <main style={{
          flex: 1,
          background: currentTheme.bg,
          // Mobile-first overflow strategy
          overflow: isMobile 
            ? 'auto'  // Always allow scrolling on mobile
            : needsScrolling 
              ? "auto" 
              : "hidden",
          display: isMobile 
            ? "block"  // Always use block display on mobile
            : needsScrolling 
              ? "block" 
              : "flex",
          position: 'relative',
          // Ensure minimum height for mobile
          minHeight: isMobile ? 'calc(100vh - 80px)' : 'auto',
          // Enable momentum scrolling on iOS
          WebkitOverflowScrolling: 'touch'
        }}>
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: currentDarkMode 
              ? 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)'
              : 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)',
            backgroundSize: '20px 20px',
            pointerEvents: 'none',
            zIndex: 0
          }} />
          
          {/* Content */}
          <div style={{ 
            position: 'relative', 
            zIndex: 1, 
            width: '100%',
            // Ensure content takes full height on mobile
            minHeight: isMobile ? '100%' : 'auto'
          }}>
            {children}
          </div>
        </main>

        {/* Scroll to top button for scrollable sections */}
        {(needsScrolling || isMobile) && (
          <button
            onClick={() => {
              const main = document.querySelector('main')
              if (main) {
                main.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              background: currentTheme.text,
              color: currentTheme.bg,
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              cursor: 'pointer',
              fontSize: '1.2rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transform: 'scale(0.8)',
              animation: 'fadeInScale 0.5s ease 1s forwards'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'
            }}
          >
            ↑
          </button>
        )}
      </div>

      {/* CSS for animations and mobile optimizations */}
      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Mobile-optimized scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${currentTheme.bg};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${currentTheme.border};
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${currentTheme.textSecondary};
        }
        
        /* Focus styles for accessibility */
        *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
        
        /* Disable outline for mouse users */
        .js-focus-visible *:focus:not(.focus-visible) {
          outline: none;
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          /* Prevent horizontal scroll */
          html, body {
            overflow-x: hidden;
          }
          
          /* Optimize touch targets */
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Improve text selection on mobile */
          * {
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: transparent;
          }
          
          /* Enable momentum scrolling on iOS */
          * {
            -webkit-overflow-scrolling: touch;
          }
        }
        
        /* Ensure sections are properly sized on mobile */
        @media (max-width: 768px) {
          main > div {
            min-height: calc(100vh - 80px);
            padding-bottom: 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Layout