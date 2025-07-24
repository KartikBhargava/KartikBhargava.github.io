import React, { useState, useEffect, Suspense, lazy } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout/layout"

// Lazy load sections for better performance
const HomeSection = lazy(() => import("../components/sections/homeSection"))
const AboutSection = lazy(() => import("../components/sections/aboutSection"))
const WritingSection = lazy(() => import("../components/sections/writingSection"))
const ContactSection = lazy(() => import("../components/sections/contactSection"))
const PortfolioSection = lazy(() => import("../components/sections/portfolioSection"))

// Loading component
const SectionLoader = ({ darkMode = false }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    color: darkMode ? '#f8fafc' : '#1f2937'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '32px',
        height: '32px',
        border: `2px solid ${darkMode ? '#334155' : '#e5e7eb'}`,
        borderTop: `2px solid ${darkMode ? '#f8fafc' : '#1f2937'}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 1rem'
      }} />
      <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>
        Loading section...
      </p>
    </div>
  </div>
)

const IndexPage = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isClient, setIsClient] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Prevent hydration mismatch and get dark mode state
  useEffect(() => {
    setIsClient(true)
    
    // Get saved theme or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isDark = savedTheme ? JSON.parse(savedTheme) : prefersDark
      setDarkMode(isDark)
    }
  }, [])

  // Listen for dark mode changes from Layout component
  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('darkMode')
        if (savedTheme) {
          setDarkMode(JSON.parse(savedTheme))
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange)
      
      // Also listen for manual updates
      const interval = setInterval(() => {
        const currentTheme = localStorage.getItem('darkMode')
        if (currentTheme) {
          const isDark = JSON.parse(currentTheme)
          if (isDark !== darkMode) {
            setDarkMode(isDark)
          }
        }
      }, 100)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
        clearInterval(interval)
      }
    }
  }, [darkMode])

  // Preload next likely sections
  useEffect(() => {
    const preloadSections = () => {
      if (activeSection === 'home') {
        import("../components/sections/aboutSection")
        import("../components/sections/portfolioSection")
      }
    }
    
    const timer = setTimeout(preloadSections, 2000)
    return () => clearTimeout(timer)
  }, [activeSection])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.altKey || e.ctrlKey) return
      
      const sectionKeys = {
        '1': 'home',
        '2': 'about', 
        '3': 'portfolio',
        '4': 'writing',
        '5': 'contact'
      }
      
      if (sectionKeys[e.key]) {
        setActiveSection(sectionKeys[e.key])
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyPress)
      return () => window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  const sections = {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    writing: 'Writing',
    contact: 'Contact'
  }

  const sectionDescriptions = {
    home: 'Welcome to my tech blog and portfolio',
    about: 'Learn more about my background and expertise',
    portfolio: 'Explore my projects and technical work',
    writing: 'Read my latest blog posts and articles',
    contact: 'Get in touch for collaborations and opportunities'
  }

  const renderContent = () => {
    const commonProps = { 
      setActiveSection, 
      activeSection,
      darkMode  // Make sure to pass darkMode to all sections
    }

    switch(activeSection) {
      case 'home':
        return (
          <Suspense fallback={<SectionLoader darkMode={darkMode} />}>
            <HomeSection {...commonProps} />
          </Suspense>
        )
      case 'about':
        return (
          <Suspense fallback={<SectionLoader darkMode={darkMode} />}>
            <AboutSection {...commonProps} />
          </Suspense>
        )
      case 'portfolio':
        return (
          <Suspense fallback={<SectionLoader darkMode={darkMode} />}>
            <PortfolioSection {...commonProps} />
          </Suspense>
        )
      case 'writing':
        return (
          <Suspense fallback={<SectionLoader darkMode={darkMode} />}>
            <WritingSection {...commonProps} />
          </Suspense>
        )
      case 'contact':
        return (
          <Suspense fallback={<SectionLoader darkMode={darkMode} />}>
            <ContactSection {...commonProps} />
          </Suspense>
        )
      default:
        return (
          <Suspense fallback={<SectionLoader darkMode={darkMode} />}>
            <HomeSection {...commonProps} />
          </Suspense>
        )
    }
  }

  // Don't render until client-side to prevent hydration issues
  if (!isClient) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fafafa',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif"
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #e5e7eb',
            borderTop: '3px solid #1f2937',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }} />
          <p style={{ color: '#6b7280' }}>Loading Kartik's Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{sections[activeSection]} - Kartik Bhargava</title>
        <meta name="description" content={sectionDescriptions[activeSection]} />
        <meta property="og:title" content={`${sections[activeSection]} - Kartik Bhargava`} />
        <meta property="og:description" content={sectionDescriptions[activeSection]} />
        <link rel="canonical" href={`https://kartikbhargava.github.io#${activeSection}`} />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kartik Bhargava",
            "jobTitle": "Android Developer",
            "url": "https://kartikbhargava.github.io",
            "sameAs": [
              "https://github.com/KartikBhargava",
              "https://linkedin.com/in/kartik-bhargava-39586611b"
            ],
            "knowsAbout": ["Android", "Kotlin", "Jetpack Compose", "Mobile Development"]
          })}
        </script>
      </Helmet>

      <Layout 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        sections={sections}
        // Pass dark mode state to Layout
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      >
        <div 
          style={{ 
            minHeight: '100%',
            animation: 'fadeIn 0.5s ease-in-out' 
          }}
          key={activeSection} // Force re-render with animation
        >
          {renderContent()}
        </div>
      </Layout>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}

export default IndexPage

export const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Kartik Bhargava" />
  </Helmet>
)