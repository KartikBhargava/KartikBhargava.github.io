export const GA_TRACKING_ID = 'G-3TK5H4EPYR' // Replace with your actual GA4 tracking ID

// Initialize Google Analytics 4
export const initGA4 = () => {
  // Only initialize if we're in the browser and haven't already loaded
  if (typeof window === 'undefined' || window.gtag) return

  // Load the Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
  document.head.appendChild(script)

  // Initialize the dataLayer and gtag function
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag

  // Configure GA4
  gtag('js', new Date())
  gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
    // Enhanced measurement settings
    send_page_view: true,
    allow_google_signals: true,
    allow_ad_personalization_signals: false, // Set to true if you want ad personalization
  })

  console.log('GA4 initialized successfully')
}

// Generic event tracking function
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      // Add default parameters
      timestamp: new Date().toISOString(),
      page_location: window.location.href,
      page_title: document.title,
      ...parameters
    })
    console.log('GA4 Event:', eventName, parameters)
  }
}

// Section Navigation Tracking
export const trackSectionView = (sectionName, fromSection = null) => {
  trackEvent('section_view', {
    section_name: sectionName,
    from_section: fromSection,
    event_category: 'navigation'
  })
}

// Button Click Tracking
export const trackButtonClick = (buttonName, section, buttonType = 'primary') => {
  trackEvent('button_click', {
    button_name: buttonName,
    section: section,
    button_type: buttonType,
    event_category: 'engagement'
  })
}

// Project Interaction Tracking
export const trackProjectInteraction = (action, projectName, projectCategory = '') => {
  trackEvent('project_interaction', {
    action: action, // 'view', 'click_github', 'click_demo', 'expand_details'
    project_name: projectName,
    project_category: projectCategory,
    event_category: 'portfolio'
  })
}

// Blog Interaction Tracking
export const trackBlogInteraction = (action, postTitle = '', category = '') => {
  trackEvent('blog_interaction', {
    action: action, // 'read_article', 'filter_category', 'subscribe'
    post_title: postTitle,
    blog_category: category,
    event_category: 'blog'
  })
}

// Contact Method Tracking
export const trackContactAttempt = (method, destination = '') => {
  trackEvent('contact_attempt', {
    contact_method: method, // 'email', 'linkedin', 'github'
    destination: destination,
    event_category: 'contact'
  })
}

// External Link Tracking
export const trackExternalLink = (linkType, destination, context = '') => {
  trackEvent('external_link_click', {
    link_type: linkType,
    destination: destination,
    context: context,
    event_category: 'outbound'
  })
}

// Technology Filter Tracking
export const trackTechnologyFilter = (technology, section) => {
  trackEvent('technology_filter', {
    technology: technology,
    section: section,
    event_category: 'filter'
  })
}

// Search Tracking (if you add search functionality)
export const trackSearch = (searchTerm, section, resultsCount = 0) => {
  trackEvent('search', {
    search_term: searchTerm,
    section: section,
    results_count: resultsCount,
    event_category: 'search'
  })
}

// Download/Resume Tracking
export const trackDownload = (fileName, fileType = '') => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    event_category: 'download'
  })
}

// Theme Toggle Tracking
export const trackThemeToggle = (newTheme) => {
  trackEvent('theme_toggle', {
    theme: newTheme, // 'dark' or 'light'
    event_category: 'ui_interaction'
  })
}

// Scroll Depth Tracking
export const trackScrollDepth = (depth, section) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth, // percentage
    section: section,
    event_category: 'engagement'
  })
}

// Page Performance Tracking
export const trackPagePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0]
    
    trackEvent('page_performance', {
      load_time: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
      dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
      first_contentful_paint: Math.round(performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0),
      event_category: 'performance'
    })
  }
}

// Error Tracking
export const trackError = (error, errorContext = '') => {
  trackEvent('javascript_error', {
    error_message: error.message,
    error_context: errorContext,
    user_agent: navigator.userAgent,
    event_category: 'error'
  })
}
