"use strict";
exports.id = "src_components_sections_writingSection_js";
exports.ids = ["src_components_sections_writingSection_js"];
exports.modules = {

/***/ "./src/components/sections/writingSection.js":
/*!***************************************************!*\
  !*** ./src/components/sections/writingSection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/buttons */ "./src/components/ui/buttons.js");


const WritingSection = ({
  darkMode = false
}) => {
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

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
  };
  const currentTheme = darkMode ? theme.dark : theme.light;
  const categories = {
    all: 'All Posts',
    android: 'Android',
    architecture: 'Architecture',
    tutorials: 'Tutorials',
    thoughts: 'Thoughts'
  };
  const blogPosts = [{
    id: 1,
    title: "Building Modern Android Apps with Jetpack Compose",
    category: "android",
    excerpt: "Explore how Jetpack Compose revolutionizes Android UI development with declarative programming, making it easier to build beautiful and responsive user interfaces.",
    content: "In this comprehensive guide, we'll dive deep into Jetpack Compose and learn how to build modern Android applications...",
    tags: ["Jetpack Compose", "Android", "UI/UX", "Kotlin"],
    readTime: "8 min read",
    publishDate: "2024-01-15",
    featured: true,
    image: "📱",
    gradient: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`
  }, {
    id: 2,
    title: "Clean Architecture in Android: A Practical Guide",
    category: "architecture",
    excerpt: "Learn how to implement Clean Architecture principles in Android applications to create maintainable, testable, and scalable codebases.",
    content: "Clean Architecture has become a cornerstone of modern Android development. In this article, we'll explore...",
    tags: ["Clean Architecture", "MVVM", "Design Patterns", "Best Practices"],
    readTime: "12 min read",
    publishDate: "2024-01-10",
    featured: true,
    image: "🏗️",
    gradient: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.primary} 100%)`
  }, {
    id: 3,
    title: "Mastering Room Database: Tips and Tricks",
    category: "tutorials",
    excerpt: "Discover advanced Room database techniques, including complex queries, migrations, and performance optimization strategies for Android apps.",
    content: "Room is Android's recommended database solution. Let's explore advanced techniques that will make you a Room expert...",
    tags: ["Room", "Database", "SQLite", "Android"],
    readTime: "10 min read",
    publishDate: "2024-01-05",
    featured: false,
    image: "🗄️",
    gradient: `linear-gradient(135deg, ${currentTheme.warning} 0%, ${currentTheme.pink} 100%)`
  }, {
    id: 4,
    title: "The Future of Android Development",
    category: "thoughts",
    excerpt: "My thoughts on where Android development is heading, including emerging technologies, new frameworks, and industry trends to watch.",
    content: "As we look ahead to the future of Android development, several exciting trends are emerging...",
    tags: ["Future Tech", "Android", "Industry Trends", "Opinion"],
    readTime: "6 min read",
    publishDate: "2024-01-01",
    featured: false,
    image: "🔮",
    gradient: `linear-gradient(135deg, ${currentTheme.purple} 0%, ${currentTheme.pink} 100%)`
  }, {
    id: 5,
    title: "State Management in Jetpack Compose",
    category: "android",
    excerpt: "Understanding state management patterns in Jetpack Compose, from simple local state to complex app-wide state solutions.",
    content: "State management is crucial in Jetpack Compose applications. Let's explore different approaches and when to use them...",
    tags: ["State Management", "Jetpack Compose", "Architecture", "Kotlin"],
    readTime: "9 min read",
    publishDate: "2023-12-28",
    featured: true,
    image: "⚡",
    gradient: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.success} 100%)`
  }, {
    id: 6,
    title: "Testing Android Apps: A Complete Guide",
    category: "tutorials",
    excerpt: "Comprehensive guide to testing Android applications, covering unit tests, integration tests, and UI tests with modern testing frameworks.",
    content: "Testing is essential for robust Android applications. This guide covers everything from basic unit tests to advanced UI testing...",
    tags: ["Testing", "JUnit", "Espresso", "Quality Assurance"],
    readTime: "15 min read",
    publishDate: "2023-12-20",
    featured: false,
    image: "🧪",
    gradient: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.warning} 100%)`
  }];
  const filteredPosts = selectedCategory === 'all' ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);
  const featuredPosts = blogPosts.filter(post => post.featured);
  const getCategoryColor = category => {
    switch (category) {
      case 'android':
        return currentTheme.primary;
      case 'architecture':
        return currentTheme.success;
      case 'tutorials':
        return currentTheme.warning;
      case 'thoughts':
        return currentTheme.purple;
      default:
        return currentTheme.textLight;
    }
  };
  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Blog Post Card Component
  const BlogPostCard = ({
    post,
    index,
    featured = false
  }) => {
    const {
      0: isHovered,
      1: setIsHovered
    } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
      style: {
        background: `linear-gradient(135deg, ${currentTheme.surface} 0%, ${post.gradient}05 100%)`,
        borderRadius: featured ? "24px" : "20px",
        padding: featured ? isMobile ? "2.5rem" : "3rem" : isMobile ? "2rem" : "2.5rem",
        border: `1px solid ${currentTheme.border}`,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered ? darkMode ? "0 20px 40px rgba(0,0,0,0.3)" : "0 20px 40px rgba(0,0,0,0.1)" : darkMode ? "0 4px 6px rgba(0,0,0,0.2)" : "0 4px 6px rgba(0,0,0,0.05)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        animation: `slideInUp 0.6s ease ${index * 0.1}s both`
      },
      onMouseEnter: () => !isMobile && setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: featured ? '4px' : '3px',
        background: post.gradient,
        borderRadius: featured ? '24px 24px 0 0' : '20px 20px 0 0'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 2px 2px, ${currentTheme.primary}${darkMode ? '05' : '03'} 1px, transparent 0)`,
        backgroundSize: '20px 20px',
        opacity: 0.3
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: "1rem",
        marginBottom: "1.5rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontSize: featured ? isMobile ? "3rem" : "3.5rem" : isMobile ? "2.5rem" : "3rem",
        flexShrink: 0,
        transition: "transform 0.3s ease",
        transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)"
      }
    }, post.image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "inline-block",
        background: getCategoryColor(post.category),
        color: "white",
        padding: "0.5rem 1rem",
        borderRadius: "25px",
        fontSize: "0.8rem",
        fontWeight: "600",
        marginBottom: "1rem",
        textTransform: "capitalize"
      }
    }, post.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      style: {
        fontSize: featured ? isMobile ? "1.6rem" : "2rem" : isMobile ? "1.3rem" : "1.5rem",
        fontWeight: "700",
        color: currentTheme.text,
        marginBottom: "0.75rem",
        lineHeight: "1.3",
        transition: "color 0.2s ease"
      }
    }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        fontSize: "0.85rem",
        color: currentTheme.textSecondary,
        marginBottom: "1rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, formatDate(post.publishDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, post.readTime), featured && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        background: `${currentTheme.warning}20`,
        color: currentTheme.warning,
        padding: "0.25rem 0.5rem",
        borderRadius: "12px",
        fontSize: "0.75rem",
        fontWeight: "600"
      }
    }, "\u2B50 Featured"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontSize: isMobile ? "1rem" : "1.1rem",
        color: currentTheme.textSecondary,
        lineHeight: "1.7",
        marginBottom: "1.5rem"
      }
    }, post.excerpt), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        marginBottom: "1.5rem"
      }
    }, post.tags.map((tag, tagIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: tag,
      style: {
        background: darkMode ? `${currentTheme.primary}15` : `${currentTheme.primary}10`,
        color: currentTheme.text,
        border: `1px solid ${currentTheme.border}`,
        padding: "0.4rem 0.8rem",
        borderRadius: "12px",
        fontSize: "0.8rem",
        fontWeight: "500",
        transition: "all 0.2s ease",
        animation: `fadeInUp 0.3s ease ${tagIndex * 0.05 + 0.2}s both`
      },
      onMouseEnter: e => {
        e.target.style.background = darkMode ? `${currentTheme.primary}25` : `${currentTheme.primary}20`;
        e.target.style.transform = "scale(1.05)";
      },
      onMouseLeave: e => {
        e.target.style.background = darkMode ? `${currentTheme.primary}15` : `${currentTheme.primary}10`;
        e.target.style.transform = "scale(1)";
      }
    }, tag))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "outline",
      style: {
        border: `2px solid ${currentTheme.primary}`,
        color: currentTheme.primary,
        padding: "0.75rem 1.5rem",
        borderRadius: "12px",
        fontSize: "0.9rem",
        fontWeight: "600",
        background: "transparent",
        transition: "all 0.3s ease",
        width: isMobile ? "100%" : "auto"
      },
      onMouseEnter: e => {
        e.target.style.background = currentTheme.primary;
        e.target.style.color = "#ffffff";
        e.target.style.transform = "translateY(-2px)";
      },
      onMouseLeave: e => {
        e.target.style.background = "transparent";
        e.target.style.color = currentTheme.primary;
        e.target.style.transform = "translateY(0)";
      },
      onClick: () => {/* Handle read more */}
    }, "Read Article \u2192")));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: currentTheme.background,
      color: currentTheme.text,
      minHeight: "100vh",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: isMobile ? "3rem" : "4rem",
      animation: 'fadeInUp 0.6s ease'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
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
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '1.1rem'
    }
  }, "\u270D\uFE0F"), "Tech Blog & Articles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: `gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`,
    style: {
      fontSize: isMobile ? "2.5rem" : "3.5rem",
      fontWeight: "800",
      marginBottom: "1.5rem",
      lineHeight: "1.2"
    }
  }, "Android Development Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      color: currentTheme.textSecondary,
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: "1.7"
    }
  }, "Insights, tutorials, and thoughts on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    style: {
      color: currentTheme.text
    }
  }, "Android development"), ", mobile architecture, and the latest in mobile technology")), featuredPosts.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: isMobile ? "3rem" : "4rem",
      animation: 'fadeInUp 0.6s ease 0.2s both'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: isMobile ? "1.5rem" : "1.8rem",
      fontWeight: "700",
      color: currentTheme.text,
      marginBottom: "2rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '1.2rem'
    }
  }, "\u2B50"), "Featured Articles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
      gap: isMobile ? "2rem" : "2.5rem"
    }
  }, featuredPosts.slice(0, 2).map((post, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlogPostCard, {
    key: post.id,
    post: post,
    index: index,
    featured: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: isMobile ? "0.5rem" : "1rem",
      marginBottom: isMobile ? "2rem" : "3rem",
      flexWrap: "wrap",
      animation: 'fadeInUp 0.6s ease 0.4s both'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      gap: "0.5rem",
      background: currentTheme.surface,
      padding: "0.5rem",
      borderRadius: "50px",
      border: `1px solid ${currentTheme.border}`,
      boxShadow: darkMode ? "0 4px 6px rgba(0, 0, 0, 0.2)" : "0 4px 6px rgba(0, 0, 0, 0.05)",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, Object.entries(categories).map(([key, label]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    key: key,
    onClick: () => setSelectedCategory(key),
    style: {
      background: selectedCategory === key ? `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)` : "transparent",
      color: selectedCategory === key ? "white" : currentTheme.text,
      border: "none",
      padding: isMobile ? "0.75rem 1rem" : "0.75rem 1.25rem",
      borderRadius: "25px",
      fontSize: isMobile ? "0.8rem" : "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      textAlign: "center",
      boxShadow: selectedCategory === key ? `0 4px 12px ${currentTheme.primary}30` : "none"
    },
    onMouseEnter: e => {
      if (!isMobile && selectedCategory !== key) {
        e.target.style.transform = "translateY(-2px)";
        e.target.style.background = `${currentTheme.primary}10`;
      }
    },
    onMouseLeave: e => {
      if (selectedCategory !== key) {
        e.target.style.transform = "translateY(0)";
        e.target.style.background = "transparent";
      }
    }
  }, label)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: "4rem",
      animation: 'fadeInUp 0.6s ease 0.6s both'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: isMobile ? "1.3rem" : "1.6rem",
      fontWeight: "700",
      color: currentTheme.text,
      marginBottom: "2rem",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '1.1rem'
    }
  }, "\uD83D\uDCDA"), selectedCategory === 'all' ? 'All Articles' : `${categories[selectedCategory]} Articles`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(350px, 1fr))",
      gap: isMobile ? "1.5rem" : "2rem"
    }
  }, filteredPosts.map((post, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlogPostCard, {
    key: post.id,
    post: post,
    index: index
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`,
      borderRadius: "24px",
      padding: isMobile ? "2.5rem" : "3rem",
      textAlign: "center",
      color: "white",
      position: "relative",
      overflow: "hidden",
      animation: 'fadeInUp 0.6s ease 0.8s both'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
      backgroundSize: '24px 24px',
      opacity: 0.3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "3rem" : "4rem",
      marginBottom: "1.5rem"
    }
  }, "\uD83D\uDCE7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: isMobile ? "1.5rem" : "2rem",
      fontWeight: "700",
      marginBottom: "1rem"
    }
  }, "Stay Updated"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      opacity: 0.9,
      marginBottom: "2rem",
      maxWidth: "500px",
      margin: "0 auto 2rem"
    }
  }, "Get the latest Android development insights, tutorials, and tips delivered directly to your inbox."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      maxWidth: "400px",
      margin: "0 auto",
      flexDirection: isMobile ? "column" : "row"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    placeholder: "your.email@example.com",
    style: {
      flex: 1,
      padding: "1rem",
      borderRadius: "12px",
      border: "none",
      fontSize: "1rem",
      background: "rgba(255, 255, 255, 0.9)",
      color: currentTheme.text
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "primary",
    style: {
      background: "rgba(255, 255, 255, 0.2)",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      color: "white",
      padding: "1rem 1.5rem",
      borderRadius: "12px",
      fontSize: "1rem",
      fontWeight: "600",
      transition: "all 0.3s ease",
      whiteSpace: "nowrap"
    },
    onMouseEnter: e => {
      e.target.style.background = "rgba(255, 255, 255, 0.3)";
      e.target.style.transform = "translateY(-2px)";
    },
    onMouseLeave: e => {
      e.target.style.background = "rgba(255, 255, 255, 0.2)";
      e.target.style.transform = "translateY(0)";
    }
  }, "Subscribe"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
    jsx: true,
    global: true
  }, `
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
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-2px);
          }
        }
      `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WritingSection);

/***/ }),

/***/ "./src/components/ui/buttons.js":
/*!**************************************!*\
  !*** ./src/components/ui/buttons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DangerButton: () => (/* binding */ DangerButton),
/* harmony export */   GhostButton: () => (/* binding */ GhostButton),
/* harmony export */   IconButton: () => (/* binding */ IconButton),
/* harmony export */   OutlineButton: () => (/* binding */ OutlineButton),
/* harmony export */   PrimaryButton: () => (/* binding */ PrimaryButton),
/* harmony export */   SecondaryButton: () => (/* binding */ SecondaryButton),
/* harmony export */   SuccessButton: () => (/* binding */ SuccessButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  loading = false,
  icon,
  fullWidth = false,
  style = {},
  className = "",
  type = "button",
  ariaLabel,
  ...props
}) => {
  const {
    0: isPressed,
    1: setIsPressed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const variants = {
    primary: {
      background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      color: "#ffffff",
      border: "none",
      hoverBg: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
      activeBg: "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%)",
      shadow: "0 4px 14px 0 rgba(59, 130, 246, 0.39)"
    },
    secondary: {
      background: "transparent",
      color: "#374151",
      border: "2px solid #e5e7eb",
      hoverBg: "#f9fafb",
      activeBg: "#f3f4f6",
      shadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)"
    },
    outline: {
      background: "transparent",
      color: "#3b82f6",
      border: "2px solid #3b82f6",
      hoverBg: "#3b82f6",
      hoverColor: "#ffffff",
      activeBg: "#1d4ed8",
      shadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "#6b7280",
      border: "none",
      hoverBg: "#f3f4f6",
      activeBg: "#e5e7eb",
      shadow: "none"
    },
    danger: {
      background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      color: "#ffffff",
      border: "none",
      hoverBg: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
      activeBg: "linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)",
      shadow: "0 4px 14px 0 rgba(239, 68, 68, 0.39)"
    },
    success: {
      background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      color: "#ffffff",
      border: "none",
      hoverBg: "linear-gradient(135deg, #059669 0%, #047857 100%)",
      activeBg: "linear-gradient(135deg, #047857 0%, #065f46 100%)",
      shadow: "0 4px 14px 0 rgba(16, 185, 129, 0.39)"
    }
  };
  const sizes = {
    small: {
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
      borderRadius: "6px",
      height: "36px"
    },
    medium: {
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
      borderRadius: "8px",
      height: "44px"
    },
    large: {
      padding: "1rem 2rem",
      fontSize: "1.125rem",
      borderRadius: "10px",
      height: "52px"
    }
  };
  const currentVariant = variants[variant];
  const currentSize = sizes[size];
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontWeight: "600",
    fontFamily: "inherit",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    overflow: "hidden",
    userSelect: "none",
    textDecoration: "none",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.6 : 1,
    transform: isPressed && !disabled && !loading ? "translateY(1px)" : "translateY(0)",
    ...currentSize,
    ...style
  };
  const getStyles = () => {
    if (loading || disabled) {
      return {
        ...baseStyles,
        background: currentVariant.background,
        color: currentVariant.color,
        border: currentVariant.border || "none",
        boxShadow: "none"
      };
    }
    return {
      ...baseStyles,
      background: currentVariant.background,
      color: currentVariant.color,
      border: currentVariant.border || "none",
      boxShadow: currentVariant.shadow || "none"
    };
  };
  const handleMouseDown = () => {
    if (!disabled && !loading) {
      setIsPressed(true);
    }
  };
  const handleMouseUp = () => {
    setIsPressed(false);
  };
  const handleMouseLeave = () => {
    setIsPressed(false);
  };
  const handleClick = e => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", Object.assign({
    type: type,
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseLeave,
    disabled: disabled || loading,
    "aria-label": ariaLabel || (typeof children === 'string' ? children : undefined),
    className: className,
    style: getStyles()
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: currentVariant.hoverBg || currentVariant.background,
      opacity: 0,
      transition: "opacity 0.2s ease",
      pointerEvents: "none"
    },
    className: "button-hover-overlay"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden",
      borderRadius: "inherit"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
      transform: isPressed ? "scale(1)" : "scale(0)",
      transition: "transform 0.3s ease",
      pointerEvents: "none"
    }
  })), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: "absolute",
      width: "16px",
      height: "16px",
      border: `2px solid transparent`,
      borderTop: `2px solid currentColor`,
      borderRadius: "50%",
      animation: "spin 1s linear infinite"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      opacity: loading ? 0 : 1,
      transition: "opacity 0.2s ease"
    }
  }, icon && !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, icon), children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
    jsx: true
  }, `
        button:hover .button-hover-overlay {
          opacity: 1;
        }
        
        button:focus .button-hover-overlay {
          opacity: 0.8;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `));
};

// Preset button components for common use cases
const PrimaryButton = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, Object.assign({
  variant: "primary"
}, props));
const SecondaryButton = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, Object.assign({
  variant: "secondary"
}, props));
const OutlineButton = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, Object.assign({
  variant: "outline"
}, props));
const GhostButton = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, Object.assign({
  variant: "ghost"
}, props));
const DangerButton = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, Object.assign({
  variant: "danger"
}, props));
const SuccessButton = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, Object.assign({
  variant: "success"
}, props));

// Icon button component
const IconButton = ({
  icon,
  ...props
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Button, Object.assign({
  style: {
    padding: "0.75rem",
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    ...props.style
  }
}, props), icon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ })

};
;
//# sourceMappingURL=src_components_sections_writingSection_js.js.map