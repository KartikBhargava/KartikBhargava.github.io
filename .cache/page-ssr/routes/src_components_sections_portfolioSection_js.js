"use strict";
exports.id = "src_components_sections_portfolioSection_js";
exports.ids = ["src_components_sections_portfolioSection_js"];
exports.modules = {

/***/ "./src/components/sections/portfolioSection.js":
/*!*****************************************************!*\
  !*** ./src/components/sections/portfolioSection.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/buttons */ "./src/components/ui/buttons.js");


const PortfolioSection = ({
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
    all: 'All Projects',
    featured: 'Featured',
    learning: 'Learning',
    experimental: 'Experiments'
  };
  const projects = [{
    id: 1,
    title: "TaskMaster",
    category: "featured",
    description: "A modern task management app built with Jetpack Compose and MVVM architecture. Features include task categories, reminders, and clean Material Design 3 UI.",
    technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Material Design 3", "Coroutines"],
    image: "📋",
    githubUrl: "https://github.com/kartik/taskmaster-android",
    status: "In Development",
    highlights: ["100% Jetpack Compose", "Clean Architecture", "Material Design 3"],
    features: ["Task management with categories and priorities", "Local storage with Room database", "Material Design 3 theming with dynamic colors", "Smooth animations and transitions"],
    gradient: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`
  }, {
    id: 2,
    title: "WeatherNow",
    category: "featured",
    description: "Beautiful weather app showcasing advanced UI animations and API integration. Built to explore Jetpack Compose animations and weather data visualization.",
    technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Animations", "Weather API", "Location Services"],
    image: "🌤️",
    githubUrl: "https://github.com/kartik/weather-now",
    status: "Completed",
    highlights: ["Advanced Animations", "API Integration", "Location Services"],
    features: ["Real-time weather data from OpenWeather API", "Animated weather backgrounds and transitions", "Location-based weather updates", "7-day forecast with detailed view"],
    gradient: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.primary} 100%)`
  }, {
    id: 3,
    title: "ComposePlayground",
    category: "learning",
    description: "A collection of Jetpack Compose experiments and UI components. This project serves as my learning sandbox for exploring Compose capabilities.",
    technologies: ["Kotlin", "Jetpack Compose", "Custom Layouts", "Animations", "State Management"],
    image: "🎨",
    githubUrl: "https://github.com/kartik/compose-playground",
    status: "Ongoing",
    highlights: ["UI Experiments", "Custom Components", "Learning Journey"],
    features: ["Custom UI components and layouts", "Animation experiments and prototypes", "State management patterns exploration", "Performance optimization techniques"],
    gradient: `linear-gradient(135deg, ${currentTheme.warning} 0%, ${currentTheme.pink} 100%)`
  }, {
    id: 4,
    title: "RecipeBook",
    category: "featured",
    description: "Recipe management app with search, favorites, and meal planning. Built to practice Room database relationships and complex UI patterns.",
    technologies: ["Kotlin", "Room", "Search", "Image Handling", "Data Persistence"],
    image: "👨‍🍳",
    githubUrl: "https://github.com/kartik/recipe-book",
    status: "Completed",
    highlights: ["Complex Database Relations", "Search Implementation", "Image Management"],
    features: ["Recipe storage with ingredients and steps", "Advanced search and filtering", "Favorites and meal planning", "Image handling and storage"],
    gradient: `linear-gradient(135deg, ${currentTheme.pink} 0%, ${currentTheme.purple} 100%)`
  }, {
    id: 5,
    title: "AndroidMLKit",
    category: "experimental",
    description: "Exploring Android's ML Kit capabilities with text recognition, face detection, and barcode scanning. A hands-on project to learn machine learning on mobile.",
    technologies: ["Kotlin", "ML Kit", "Camera2", "Image Processing", "Machine Learning"],
    image: "🤖",
    githubUrl: "https://github.com/kartik/android-mlkit",
    status: "Experimental",
    highlights: ["Machine Learning", "Camera Integration", "Real-time Processing"],
    features: ["Text recognition from camera and images", "Face detection and analysis", "Barcode and QR code scanning", "Real-time processing optimization"],
    gradient: `linear-gradient(135deg, ${currentTheme.purple} 0%, ${currentTheme.primary} 100%)`
  }, {
    id: 6,
    title: "QuoteDaily",
    category: "learning",
    description: "Daily quotes app built while learning Clean Architecture principles. Features motivational quotes with sharing capabilities and daily notifications.",
    technologies: ["Kotlin", "Clean Architecture", "UseCase Pattern", "Notifications", "SharedPreferences"],
    image: "💭",
    githubUrl: "https://github.com/kartik/quote-daily",
    status: "Learning Project",
    highlights: ["Clean Architecture", "Notification System", "Best Practices"],
    features: ["Daily quote delivery with notifications", "Quote sharing and favorites", "Clean Architecture implementation", "Offline quote storage and caching"],
    gradient: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.warning} 100%)`
  }];
  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);
  const getStatusColor = status => {
    switch (status) {
      case 'Completed':
        return currentTheme.success;
      case 'In Development':
        return currentTheme.primary;
      case 'Ongoing':
        return currentTheme.warning;
      case 'Experimental':
        return currentTheme.purple;
      case 'Learning Project':
        return currentTheme.pink;
      default:
        return currentTheme.textLight;
    }
  };

  // Enhanced ProjectCard Component
  const ProjectCard = ({
    project,
    index
  }) => {
    const {
      0: isExpanded,
      1: setIsExpanded
    } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const {
      0: isHovered,
      1: setIsHovered
    } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const handleGithubClick = () => {
      if (typeof window !== 'undefined' && project.githubUrl) {
        window.open(project.githubUrl, '_blank');
      }
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        background: `linear-gradient(135deg, ${currentTheme.surface} 0%, ${project.gradient}05 100%)`,
        borderRadius: "20px",
        padding: isMobile ? "2rem" : "2.5rem",
        border: `1px solid ${currentTheme.border}`,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered ? darkMode ? "0 20px 40px rgba(0,0,0,0.3)" : "0 20px 40px rgba(0,0,0,0.1)" : darkMode ? "0 4px 6px rgba(0,0,0,0.2)" : "0 4px 6px rgba(0,0,0,0.05)",
        position: "relative",
        overflow: "hidden",
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
        height: '4px',
        background: project.gradient,
        borderRadius: '20px 20px 0 0'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 2px 2px, ${currentTheme.primary}${darkMode ? '08' : '03'} 1px, transparent 0)`,
        backgroundSize: '20px 20px',
        opacity: 0.5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        position: 'relative',
        zIndex: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1.5rem",
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? "1rem" : "0"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        fontSize: isMobile ? "3rem" : "3.5rem",
        flexShrink: 0,
        transition: "transform 0.3s ease",
        cursor: "pointer",
        transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
        animation: 'bounce 2s infinite'
      }
    }, project.image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      style: {
        fontSize: isMobile ? "1.4rem" : "1.6rem",
        fontWeight: "700",
        color: currentTheme.text,
        marginBottom: "0.75rem",
        lineHeight: "1.3"
      }
    }, project.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "inline-block",
        background: getStatusColor(project.status),
        color: "white",
        padding: "0.5rem 1rem",
        borderRadius: "25px",
        fontSize: "0.8rem",
        fontWeight: "600",
        position: "relative",
        boxShadow: `0 2px 8px ${getStatusColor(project.status)}30`
      }
    }, project.status)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontSize: isMobile ? "1rem" : "1.1rem",
        color: currentTheme.textSecondary,
        lineHeight: "1.7",
        marginBottom: "2rem"
      }
    }, project.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: "2rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      style: {
        fontSize: "1rem",
        fontWeight: "700",
        color: currentTheme.text,
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '1.1rem'
      }
    }, "\u2728"), "Project Highlights"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem"
      }
    }, project.highlights.map((highlight, highlightIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: highlight,
      style: {
        background: project.gradient,
        color: "white",
        padding: "0.5rem 1rem",
        borderRadius: "25px",
        fontSize: "0.85rem",
        fontWeight: "600",
        cursor: "default",
        display: "inline-block",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        animation: `fadeInUp 0.5s ease ${highlightIndex * 0.1 + 0.2}s both`
      }
    }, highlight)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: "2rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      style: {
        fontSize: "1rem",
        fontWeight: "700",
        color: currentTheme.text,
        marginBottom: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '1.1rem'
      }
    }, "\uD83D\uDEE0\uFE0F"), "Technologies Used"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem"
      }
    }, project.technologies.map((tech, techIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: tech,
      style: {
        background: darkMode ? `${currentTheme.primary}15` : `${currentTheme.primary}10`,
        color: currentTheme.text,
        border: `1px solid ${currentTheme.border}`,
        padding: "0.4rem 0.8rem",
        borderRadius: "12px",
        fontSize: "0.8rem",
        fontWeight: "500",
        cursor: "default",
        display: "inline-block",
        transition: "all 0.2s ease",
        animation: `slideInUp 0.3s ease ${techIndex * 0.05 + 0.4}s both`
      },
      onMouseEnter: e => {
        e.target.style.background = darkMode ? `${currentTheme.primary}25` : `${currentTheme.primary}20`;
        e.target.style.transform = "scale(1.05)";
      },
      onMouseLeave: e => {
        e.target.style.background = darkMode ? `${currentTheme.primary}15` : `${currentTheme.primary}10`;
        e.target.style.transform = "scale(1)";
      }
    }, tech)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: "2rem",
        flex: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => setIsExpanded(!isExpanded),
      style: {
        background: "none",
        border: "none",
        fontSize: "1rem",
        fontWeight: "700",
        color: currentTheme.text,
        marginBottom: "1rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: 0,
        transition: "color 0.2s ease"
      },
      onMouseEnter: e => {
        e.target.style.color = currentTheme.primary;
      },
      onMouseLeave: e => {
        e.target.style.color = currentTheme.text;
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: '1.1rem'
      }
    }, "\uD83D\uDD27"), "Key Features", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        transition: "transform 0.3s ease",
        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
        fontSize: "0.8rem"
      }
    }, "\u25BC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxHeight: isExpanded ? "300px" : "120px",
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      style: {
        fontSize: "0.95rem",
        color: currentTheme.textSecondary,
        lineHeight: "1.6",
        paddingLeft: "1.5rem",
        margin: 0
      }
    }, project.features.map((feature, featureIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: featureIndex,
      style: {
        marginBottom: "0.5rem",
        opacity: isExpanded ? 1 : featureIndex < 3 ? 1 : 0.3,
        transition: `opacity 0.3s ease ${featureIndex * 0.1}s`
      }
    }, feature))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        gap: "1rem",
        marginTop: "auto",
        flexDirection: isMobile ? "column" : "row"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "primary",
      style: {
        background: project.gradient,
        border: "none",
        flex: 1,
        padding: "0.75rem 1.5rem",
        borderRadius: "12px",
        fontSize: "1rem",
        fontWeight: "600",
        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
        color: "white",
        transition: "all 0.3s ease"
      },
      onClick: handleGithubClick,
      onMouseEnter: e => {
        e.target.style.transform = "translateY(-2px)";
        e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
      },
      onMouseLeave: e => {
        e.target.style.transform = "translateY(0)";
        e.target.style.boxShadow = "0 4px 14px rgba(0, 0, 0, 0.1)";
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        marginRight: '0.5rem'
      }
    }, "\uD83D\uDC19"), "View Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: "outline",
      style: {
        flex: 1,
        border: `2px solid ${currentTheme.primary}`,
        color: currentTheme.primary,
        padding: "0.75rem 1.5rem",
        borderRadius: "12px",
        fontSize: "1rem",
        fontWeight: "600",
        background: "transparent",
        transition: "all 0.3s ease"
      },
      onClick: () => {/* Handle demo/preview */},
      onMouseEnter: e => {
        e.target.style.background = currentTheme.primary;
        e.target.style.color = "#ffffff";
        e.target.style.transform = "translateY(-2px)";
      },
      onMouseLeave: e => {
        e.target.style.background = "transparent";
        e.target.style.color = currentTheme.primary;
        e.target.style.transform = "translateY(0)";
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        marginRight: '0.5rem'
      }
    }, "\uD83D\uDCF1"), "Preview"))));
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
  }, "\uD83D\uDCBC"), "My Work Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: `gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`,
    style: {
      fontSize: isMobile ? "2.5rem" : "3.5rem",
      fontWeight: "800",
      marginBottom: "1.5rem",
      lineHeight: "1.2"
    }
  }, "My Android Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      color: currentTheme.textSecondary,
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: "1.7"
    }
  }, "Personal projects showcasing ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    style: {
      color: currentTheme.text
    }
  }, "Android development skills"), ", learning journey, and exploration of modern Android technologies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: isMobile ? "0.5rem" : "1rem",
      marginBottom: isMobile ? "3rem" : "4rem",
      flexWrap: "wrap",
      padding: isMobile ? "0 0.5rem" : "0",
      animation: 'fadeInUp 0.6s ease 0.2s both'
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
      padding: isMobile ? "0.75rem 1.25rem" : "0.75rem 1.5rem",
      borderRadius: "25px",
      fontSize: isMobile ? "0.85rem" : "0.95rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      minWidth: isMobile ? "auto" : "120px",
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
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
      gap: isMobile ? "2rem" : "2.5rem",
      marginBottom: "4rem"
    }
  }, filteredProjects.map((project, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectCard, {
    key: project.id,
    project: project,
    index: index
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: `linear-gradient(135deg, ${currentTheme.surface} 0%, ${currentTheme.primary}03 100%)`,
      borderRadius: "24px",
      padding: isMobile ? "2rem" : "3rem",
      border: `1px solid ${currentTheme.border}`,
      textAlign: "center",
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
      backgroundImage: `radial-gradient(circle at 2px 2px, ${currentTheme.primary}${darkMode ? '08' : '05'} 1px, transparent 0)`,
      backgroundSize: '24px 24px',
      opacity: 0.5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: isMobile ? "1.5rem" : "2rem",
      fontWeight: "700",
      color: currentTheme.text,
      marginBottom: "2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '1.2rem'
    }
  }, "\uD83D\uDCCA"), "My Android Learning Journey"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
      gap: isMobile ? "2rem" : "3rem",
      textAlign: "center"
    }
  }, [{
    number: "6",
    label: "Projects Built",
    icon: "📱",
    color: currentTheme.primary
  }, {
    number: "8+",
    label: "Technologies Learned",
    icon: "🛠️",
    color: currentTheme.success
  }, {
    number: "2+",
    label: "Years Learning",
    icon: "📚",
    color: currentTheme.warning
  }, {
    number: "100%",
    label: "Passion Driven",
    icon: "❤️",
    color: currentTheme.pink
  }].map((stat, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    style: {
      padding: "1.5rem",
      background: darkMode ? `${stat.color}15` : `${stat.color}10`,
      borderRadius: "16px",
      border: `1px solid ${currentTheme.border}`,
      transition: "all 0.3s ease",
      cursor: "default",
      animation: `slideInUp 0.5s ease ${index * 0.1 + 1}s both`
    },
    onMouseEnter: e => {
      if (!isMobile) {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.background = darkMode ? `${stat.color}25` : `${stat.color}20`;
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.background = darkMode ? `${stat.color}15` : `${stat.color}10`;
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2rem",
      marginBottom: "0.5rem"
    }
  }, stat.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "2rem" : "2.5rem",
      fontWeight: "800",
      color: stat.color,
      marginBottom: "0.5rem"
    }
  }, stat.number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "0.85rem" : "0.95rem",
      color: currentTheme.textSecondary,
      fontWeight: "600"
    }
  }, stat.label))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioSection);

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
//# sourceMappingURL=src_components_sections_portfolioSection_js.js.map