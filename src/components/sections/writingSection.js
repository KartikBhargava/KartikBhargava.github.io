// Updated WritingSection with GA4 analytics integration
import React, { useState, useEffect } from "react"
import Button from "../ui/buttons"
import { trackSectionView, trackBlogInteraction, trackTechnologyFilter, trackEvent } from '../../utils/analytics'

const WritingSection = ({ darkMode = false }) => {
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
    // Track writing section view
    trackSectionView('writing')
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
    all: 'All Posts',
    android: 'Android',
    architecture: 'Architecture',
    tutorials: 'Tutorials',
    thoughts: 'Thoughts'
  }

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern Android Apps with Jetpack Compose",
      category: "android",
      excerpt: "Explore how Jetpack Compose revolutionizes Android UI development with declarative programming, making it easier to build beautiful and responsive user interfaces.",
      tags: ["Jetpack Compose", "Android", "UI/UX", "Kotlin"],
      readTime: "8 min read",
      publishDate: "2024-01-15",
      featured: true,
      image: "📱",
      gradient: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`
    },
    {
      id: 2,
      title: "Clean Architecture in Android: A Practical Guide",
      category: "architecture",
      excerpt: "Learn how to implement Clean Architecture principles in Android applications to create maintainable, testable, and scalable codebases.",
      tags: ["Clean Architecture", "MVVM", "Design Patterns", "Best Practices"],
      readTime: "12 min read",
      publishDate: "2024-01-10",
      featured: true,
      image: "🏗️",
      gradient: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.primary} 100%)`
    },
    {
      id: 3,
      title: "Mastering Room Database: Tips and Tricks",
      category: "tutorials",
      excerpt: "Discover advanced Room database techniques, including complex queries, migrations, and performance optimization strategies for Android apps.",
      tags: ["Room", "Database", "SQLite", "Android"],
      readTime: "10 min read",
      publishDate: "2024-01-05",
      featured: false,
      image: "🗄️",
      gradient: `linear-gradient(135deg, ${currentTheme.warning} 0%, ${currentTheme.pink} 100%)`
    }
  ]

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)

  const getCategoryColor = (category) => {
    switch(category) {
      case 'android': return currentTheme.primary
      case 'architecture': return currentTheme.success
      case 'tutorials': return currentTheme.warning
      case 'thoughts': return currentTheme.purple
      default: return currentTheme.textLight
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  // Analytics handlers
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    trackBlogInteraction('filter_category', '', category)
    trackTechnologyFilter(categories[category], 'blog')
  }

  const handleReadArticle = (post) => {
    trackBlogInteraction('read_article', post.title, post.category)
    trackEvent('blog_article_click', {
      article_title: post.title,
      article_category: post.category,
      read_time: post.readTime,
      is_featured: post.featured,
      section: 'blog',
      event_category: 'content'
    })
  }

  const handleTagClick = (tag, postTitle) => {
    trackEvent('blog_tag_click', {
      tag: tag,
      post_title: postTitle,
      section: 'blog',
      event_category: 'engagement'
    })
  }

  const handleNewsletterSubscribe = (email) => {
    trackBlogInteraction('newsletter_subscribe', '', '')
    trackEvent('newsletter_subscription', {
      email_provided: !!email,
      section: 'blog',
      event_category: 'conversion'
    })
  }

  // Blog Post Card Component with Analytics
  const BlogPostCard = ({ post, index, featured = false }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [hasViewed, setHasViewed] = useState(false)

    // Track when blog post comes into view
    useEffect(() => {
      if (!hasViewed) {
        const timer = setTimeout(() => {
          trackEvent('blog_post_viewed', {
            post_title: post.title,
            post_category: post.category,
            is_featured: featured,
            view_time: 2000, // 2 seconds
            section: 'blog',
            event_category: 'engagement'
          })
          setHasViewed(true)
        }, 2000)

        return () => clearTimeout(timer)
      }
    }, [])

    return (
      <article
        style={{
          background: `linear-gradient(135deg, ${currentTheme.surface} 0%, ${post.gradient}05 100%)`,
          borderRadius: featured ? "24px" : "20px",
          padding: featured ? (isMobile ? "2.5rem" : "3rem") : (isMobile ? "2rem" : "2.5rem"),
          border: `1px solid ${currentTheme.border}`,
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: isHovered 
            ? (darkMode ? "0 20px 40px rgba(0,0,0,0.3)" : "0 20px 40px rgba(0,0,0,0.1)")
            : (darkMode ? "0 4px 6px rgba(0,0,0,0.2)" : "0 4px 6px rgba(0,0,0,0.05)"),
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
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
          height: featured ? '4px' : '3px',
          background: post.gradient,
          borderRadius: featured ? '24px 24px 0 0' : '20px 20px 0 0'
        }} />

        {/* Background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 2px 2px, ${currentTheme.primary}${darkMode ? '05' : '03'} 1px, transparent 0)`,
          backgroundSize: '20px 20px',
          opacity: 0.3
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Post Header */}
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            marginBottom: "1.5rem"
          }}>
            {/* Post Icon */}
            <div style={{
              fontSize: featured ? (isMobile ? "3rem" : "3.5rem") : (isMobile ? "2.5rem" : "3rem"),
              flexShrink: 0,
              transition: "transform 0.3s ease",
              transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)"
            }}>
              {post.image}
            </div>

            <div style={{ flex: 1 }}>
              {/* Category Badge */}
              <div 
                onClick={() => handleCategoryFilter(post.category)}
                style={{
                display: "inline-block",
                background: getCategoryColor(post.category),
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "25px",
                fontSize: "0.8rem",
                fontWeight: "600",
                marginBottom: "1rem",
                textTransform: "capitalize",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
              >
                {post.category}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: featured ? (isMobile ? "1.6rem" : "2rem") : (isMobile ? "1.3rem" : "1.5rem"),
                fontWeight: "700",
                color: currentTheme.text,
                marginBottom: "0.75rem",
                lineHeight: "1.3",
                transition: "color 0.2s ease"
              }}>
                {post.title}
              </h3>

              {/* Meta Info */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "0.85rem",
                color: currentTheme.textSecondary,
                marginBottom: "1rem"
              }}>
                <span>{formatDate(post.publishDate)}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                {featured && (
                  <>
                    <span>•</span>
                    <span style={{
                      background: `${currentTheme.warning}20`,
                      color: currentTheme.warning,
                      padding: "0.25rem 0.5rem",
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: "600"
                    }}>
                      ⭐ Featured
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <p style={{
            fontSize: isMobile ? "1rem" : "1.1rem",
            color: currentTheme.textSecondary,
            lineHeight: "1.7",
            marginBottom: "1.5rem"
          }}>
            {post.excerpt}
          </p>

          {/* Tags */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1.5rem"
          }}>
            {post.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                onClick={() => handleTagClick(tag, post.title)}
                style={{
                  background: darkMode ? `${currentTheme.primary}15` : `${currentTheme.primary}10`,
                  color: currentTheme.text,
                  border: `1px solid ${currentTheme.border}`,
                  padding: "0.4rem 0.8rem",
                  borderRadius: "12px",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  animation: `fadeInUp 0.3s ease ${tagIndex * 0.05 + 0.2}s both`
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
                {tag}
              </span>
            ))}
          </div>

          {/* Read More Button */}
          <Button
            variant="outline"
            style={{
              border: `2px solid ${currentTheme.primary}`,
              color: currentTheme.primary,
              padding: "0.75rem 1.5rem",
              borderRadius: "12px",
              fontSize: "0.9rem",
              fontWeight: "600",
              background: "transparent",
              transition: "all 0.3s ease",
              width: isMobile ? "100%" : "auto"
            }}
            onClick={() => handleReadArticle(post)}
            analyticsLabel="read_article"
            analyticsSection="blog"
          >
            Read Article →
          </Button>
        </div>
      </article>
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
            <span style={{ fontSize: '1.1rem' }}>✍️</span>
            Tech Blog & Articles
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
            Android Development Blog
          </h2>
          
          <p style={{ 
            fontSize: isMobile ? "1.1rem" : "1.3rem",
            color: currentTheme.textSecondary,
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.7"
          }}>
            Insights, tutorials, and thoughts on <strong style={{color: currentTheme.text}}>Android development</strong>, 
            mobile architecture, and the latest in mobile technology
          </p>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <div style={{
            marginBottom: isMobile ? "3rem" : "4rem",
            animation: 'fadeInUp 0.6s ease 0.2s both'
          }}>
            <h3 style={{
              fontSize: isMobile ? "1.5rem" : "1.8rem",
              fontWeight: "700",
              color: currentTheme.text,
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <span style={{fontSize: '1.2rem'}}>⭐</span>
              Featured Articles
            </h3>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
              gap: isMobile ? "2rem" : "2.5rem"
            }}>
              {featuredPosts.slice(0, 2).map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: isMobile ? "0.5rem" : "1rem",
          marginBottom: isMobile ? "2rem" : "3rem",
          flexWrap: "wrap",
          animation: 'fadeInUp 0.6s ease 0.4s both'
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
                  padding: isMobile ? "0.75rem 1rem" : "0.75rem 1.25rem",
                  borderRadius: "25px",
                  fontSize: isMobile ? "0.8rem" : "0.9rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
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

        {/* All Posts Grid */}
        <div style={{
          marginBottom: "4rem",
          animation: 'fadeInUp 0.6s ease 0.6s both'
        }}>
          <h3 style={{
            fontSize: isMobile ? "1.3rem" : "1.6rem",
            fontWeight: "700",
            color: currentTheme.text,
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            <span style={{fontSize: '1.1rem'}}>📚</span>
            {selectedCategory === 'all' ? 'All Articles' : `${categories[selectedCategory]} Articles`}
          </h3>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(350px, 1fr))",
            gap: isMobile ? "1.5rem" : "2rem"
          }}>
            {filteredPosts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div style={{
          background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`,
          borderRadius: "24px",
          padding: isMobile ? "2.5rem" : "3rem",
          textAlign: "center",
          color: "white",
          position: "relative",
          overflow: "hidden",
          animation: 'fadeInUp 0.6s ease 0.8s both'
        }}>
          {/* Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
            backgroundSize: '24px 24px',
            opacity: 0.3
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              fontSize: isMobile ? "3rem" : "4rem",
              marginBottom: "1.5rem"
            }}>📧</div>
            
            <h3 style={{
              fontSize: isMobile ? "1.5rem" : "2rem",
              fontWeight: "700",
              marginBottom: "1rem"
            }}>
              Stay Updated
            </h3>
            
            <p style={{
              fontSize: isMobile ? "1rem" : "1.1rem",
              opacity: 0.9,
              marginBottom: "2rem",
              maxWidth: "500px",
              margin: "0 auto 2rem"
            }}>
              Get the latest Android development insights, tutorials, and tips delivered directly to your inbox.
            </p>
            
            <div style={{
              display: "flex",
              gap: "1rem",
              maxWidth: "400px",
              margin: "0 auto",
              flexDirection: isMobile ? "column" : "row"
            }}>
              <input
                type="email"
                placeholder="your.email@example.com"
                style={{
                  flex: 1,
                  padding: "1rem",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "1rem",
                  background: "rgba(255, 255, 255, 0.9)",
                  color: currentTheme.text
                }}
                onChange={(e) => {
                  trackEvent('newsletter_email_input', {
                    has_content: e.target.value.length > 0,
                    section: 'blog',
                    event_category: 'engagement'
                  })
                }}
              />
              <Button
                variant="primary"
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  padding: "1rem 1.5rem",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap"
                }}
                onClick={(e) => {
                  const email = e.target.closest('div').querySelector('input').value
                  handleNewsletterSubscribe(email)
                }}
                analyticsLabel="newsletter_subscribe"
                analyticsSection="blog"
              >
                Subscribe
              </Button>
            </div>
          </div>
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

export default WritingSection