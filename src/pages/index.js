import React, { useState, useEffect, Suspense, lazy } from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout/layout"
import { 
  initGA4, 
  trackSectionView, 
  trackPagePerformance, 
  trackError, 
  trackThemeToggle,
  trackEvent
} from "../utils/analytics"

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
  const [previousSection, setPreviousSection] = useState(null)
  const [isClient, setIsClient] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [analyticsInitialized, setAnalyticsInitialized] = useState(false)

  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && !analyticsInitialized) {
      // Initialize GA4
      initGA4()
      setAnalyticsInitialized(true)
      
      // Track initial page load
      trackEvent('page_load', {
        initial_section: activeSection,
        user_agent: navigator.userAgent,
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        event_category: 'system'
      })

      // Track page performance after load
      const handleLoad = () => {
        setTimeout(() => {
          trackPagePerformance()
        }, 1000)
      }
      
      if (document.readyState === 'complete') {
        handleLoad()
      } else {
        window.addEventListener('load', handleLoad)
      }

      // Global error tracking
      const handleError = (event) => {
        trackError(event.error, 'global_error_handler')
      }
      
      const handleUnhandledRejection = (event) => {
        trackError(new Error(event.reason), 'unhandled_promise_rejection')
      }
      
      window.addEventListener('error', handleError)
      window.addEventListener('unhandledrejection', handleUnhandledRejection)

      // Track page visibility changes
      const handleVisibilityChange = () => {
        if (document.hidden) {
          trackEvent('page_hidden', {
            section: activeSection,
            time_on_section: Date.now() - window.sectionStartTime,
            event_category: 'engagement'
          })
        } else {
          trackEvent('page_visible', {
            section: activeSection,
            event_category: 'engagement'
          })
          window.sectionStartTime = Date.now()
        }
      }
      
      document.addEventListener('visibilitychange', handleVisibilityChange)

      // Track scroll depth
      let maxScrollDepth = 0
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollDepth = Math.round(((scrollTop + windowHeight) / documentHeight) * 100)
        
        if (scrollDepth > maxScrollDepth && scrollDepth % 25 === 0) {
          maxScrollDepth = scrollDepth
          trackEvent('scroll_depth', {
            depth: scrollDepth,
            section: activeSection,
            event_category: 'engagement'
          })
        }
      }
      
      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
        window.removeEventListener('load', handleLoad)
        window.removeEventListener('error', handleError)
        window.removeEventListener('unhandledrejection', handleUnhandledRejection)
        document.removeEventListener('visibilitychange', handleVisibilityChange)
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [analyticsInitialized])

  // Track section changes
  useEffect(() => {
    if (analyticsInitialized && previousSection !== null) {
      // Track section navigation
      trackSectionView(activeSection, previousSection)
      
      // Track time spent on previous section
      if (window.sectionStartTime) {
        const timeOnSection = Date.now() - window.sectionStartTime
        trackEvent('section_time_spent', {
          section: previousSection,
          time_spent: timeOnSection,
          next_section: activeSection,
          event_category: 'engagement'
        })
      }
    }
    
    // Update section tracking
    setPreviousSection(activeSection)
    window.sectionStartTime = Date.now()
  }, [activeSection, analyticsInitialized])

  // Prevent hydration mismatch and get dark mode state
  useEffect(() => {
    setIsClient(true)
    
    // Get saved theme or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isDark = savedTheme ? JSON.parse(savedTheme) : prefersDark
      setDarkMode(isDark)
      
      // Track initial theme preference
      if (analyticsInitialized) {
        trackEvent('initial_theme_preference', {
          theme: isDark ? 'dark' : 'light',
          source: savedTheme ? 'saved_preference' : 'system_preference',
          event_category: 'ui_interaction'
        })
      }
    }
  }, [analyticsInitialized]) // Only depend on analyticsInitialized

  // Listen for dark mode changes from Layout component
  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('darkMode')
        if (savedTheme) {
          const newDarkMode = JSON.parse(savedTheme)
          if (newDarkMode !== darkMode) {
            setDarkMode(newDarkMode)
            // Track theme toggle
            if (analyticsInitialized) {
              trackThemeToggle(newDarkMode ? 'dark' : 'light')
            }
          }
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
            if (analyticsInitialized) {
              trackThemeToggle(isDark ? 'dark' : 'light')
            }
          }
        }
      }, 100)

      return () => {
        window.removeEventListener('storage', handleStorageChange)
        clearInterval(interval)
      }
    }
  }, [darkMode, analyticsInitialized]) // Dependencies are correct

  // Preload next likely sections
  useEffect(() => {
    const preloadSections = () => {
      if (activeSection === 'home') {
        import("../components/sections/aboutSection")
        import("../components/sections/portfolioSection")
        
        // Track preloading
        if (analyticsInitialized) {
          trackEvent('section_preload', {
            sections: ['about', 'portfolio'],
            trigger_section: 'home',
            event_category: 'performance'
          })
        }
      }
    }
    
    const timer = setTimeout(preloadSections, 2000)
    return () => clearTimeout(timer)
  }, [activeSection, analyticsInitialized]) // Added activeSection dependency

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
        const newSection = sectionKeys[e.key]
        setActiveSection(newSection)
        
        // Track keyboard navigation
        if (analyticsInitialized) {
          trackEvent('keyboard_navigation', {
            key_pressed: e.key,
            from_section: activeSection,
            to_section: newSection,
            event_category: 'navigation'
          })
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyPress)
      return () => window.removeEventListener('keydown', handleKeyPress)
    }
  }, [activeSection, analyticsInitialized])

  // Track user engagement metrics
  useEffect(() => {
    if (typeof window !== 'undefined' && analyticsInitialized) {
      // Track mouse movement to detect user engagement
      let mouseMovements = 0
      const handleMouseMove = () => {
        mouseMovements++
        if (mouseMovements === 10) { // Track after 10 mouse movements
          trackEvent('user_engaged', {
            section: activeSection,
            mouse_movements: mouseMovements,
            event_category: 'engagement'
          })
        }
      }

      // Track clicks for engagement
      const handleClick = (e) => {
        trackEvent('page_click', {
          section: activeSection,
          element_tag: e.target.tagName.toLowerCase(),
          element_class: e.target.className,
          event_category: 'engagement'
        })
      }

      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      window.addEventListener('click', handleClick, { passive: true })

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('click', handleClick)
      }
    }
  }, [activeSection, analyticsInitialized])

  const sections = {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    writing: 'Writing',
    contact: 'Contact'
  }

  const sectionDescriptions = {
    home: 'Welcome to my tech blog and portfolio - Android Developer & Mobile App Architect',
    about: 'Learn about my Android development background, expertise in Kotlin, Jetpack Compose, and mobile architecture',
    portfolio: 'Explore my Android projects, apps, and technical work showcasing modern mobile development',
    writing: 'Read my latest blog posts about Android development, mobile architecture, and tech insights',
    contact: 'Get in touch for Android development collaborations, freelance projects, and career opportunities'
  }

  // Enhanced section change handler with analytics
  const handleSectionChange = (newSection) => {
    if (newSection !== activeSection && analyticsInitialized) {
      trackEvent('manual_section_change', {
        from_section: activeSection,
        to_section: newSection,
        method: 'navigation_click',
        event_category: 'navigation'
      })
    }
    setActiveSection(newSection)
  }

  const renderContent = () => {
    const commonProps = { 
      setActiveSection: handleSectionChange, 
      activeSection,
      darkMode
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
        <title>{sections[activeSection]} - Kartik Bhargava | Android Developer</title>
        <meta name="description" content={sectionDescriptions[activeSection]} />
        <meta property="og:title" content={`${sections[activeSection]} - Kartik Bhargava | Android Developer`} />
        <meta property="og:description" content={sectionDescriptions[activeSection]} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://kartikbhargava.github.io#${activeSection}`} />
        <meta property="og:image" content="https://kartikbhargava.github.io/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${sections[activeSection]} - Kartik Bhargava`} />
        <meta name="twitter:description" content={sectionDescriptions[activeSection]} />
        <link rel="canonical" href={`https://kartikbhargava.github.io#${activeSection}`} />
        
        {/* Keywords for better SEO */}
        <meta name="keywords" content="Android Developer, Kotlin, Jetpack Compose, Mobile App Development, Android Architecture, MVVM, Clean Architecture, Firebase, Room Database, Material Design" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Kartik Bhargava",
            "jobTitle": "Android Developer & Mobile App Architect",
            "description": "Experienced Android developer specializing in Kotlin, Jetpack Compose, and modern mobile architecture",
            "url": "https://kartikbhargava.github.io",
            "sameAs": [
              "https://github.com/KartikBhargava",
              "https://linkedin.com/in/kartik-bhargava-39586611b"
            ],
            "knowsAbout": [
              "Android Development", 
              "Kotlin", 
              "Jetpack Compose", 
              "Mobile Development",
              "MVVM Architecture",
              "Clean Architecture",
              "Firebase",
              "Room Database",
              "Material Design"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance Android Developer"
            }
          })}
        </script>
        
        {/* Google Analytics 4 Script - This will be handled by initGA4() but adding for completeness */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      </Helmet>

      <Layout 
        activeSection={activeSection} 
        setActiveSection={handleSectionChange}
        sections={sections}
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
    <meta name="theme-color" content="#3b82f6" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  </Helmet>
)