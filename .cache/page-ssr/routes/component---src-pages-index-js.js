"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/components/layout/header.js":
/*!*****************************************!*\
  !*** ./src/components/layout/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Header = ({
  activeSection,
  setActiveSection,
  sections,
  darkMode = false,
  toggleDarkMode,
  theme,
  isMobile = false
}) => {
  const {
    0: isMenuOpen,
    1: setIsMenuOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isScrolled,
    1: setIsScrolled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isMobileState,
    1: setIsMobileState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Handle scroll effect for header background
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Handle mobile detection
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window !== 'undefined') {
      const checkScreenSize = () => {
        setIsMobileState(window.innerWidth < 768);
      };
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, []);

  // Close menu when section changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsMenuOpen(false);
  }, [activeSection]);

  // Close menu on escape key
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, []);

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
  };
  const currentTheme = theme || (darkMode ? defaultTheme.dark : defaultTheme.light);
  const mobile = isMobile || isMobileState;
  const handleSectionClick = section => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const headerStyles = {
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    background: darkMode ? `rgba(15, 23, 42, ${isScrolled ? '0.95' : '0.9'})` : `rgba(255, 255, 255, ${isScrolled ? '0.95' : '0.9'})`,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: `1px solid ${currentTheme.border}`,
    transition: 'all 0.3s ease',
    boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    style: headerStyles
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    style: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: mobile ? '1rem' : '1rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: () => handleSectionClick('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.05)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
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
    }
  }, "\uD83E\uDD16"), !mobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: {
      fontSize: '1.3rem',
      fontWeight: '800',
      color: currentTheme.text,
      margin: 0,
      background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      lineHeight: '1.2'
    }
  }, "Kartik Bhargava"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: '0.8rem',
      color: currentTheme.textSecondary,
      margin: 0,
      fontWeight: '600'
    }
  }, "Android Developer"))), !mobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: currentTheme.surface,
      padding: '0.5rem',
      borderRadius: '16px',
      border: `1px solid ${currentTheme.border}`,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
    }
  }, Object.entries(sections).map(([key, label]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    key: key,
    onClick: () => handleSectionClick(key),
    style: {
      padding: '0.75rem 1.25rem',
      border: 'none',
      borderRadius: '12px',
      background: activeSection === key ? `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)` : 'transparent',
      color: activeSection === key ? '#ffffff' : currentTheme.text,
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: activeSection === key ? `0 4px 12px ${currentTheme.primary}30` : 'none'
    },
    onMouseEnter: e => {
      if (activeSection !== key) {
        e.target.style.background = `${currentTheme.primary}10`;
        e.target.style.transform = 'translateY(-1px)';
      }
    },
    onMouseLeave: e => {
      if (activeSection !== key) {
        e.target.style.background = 'transparent';
        e.target.style.transform = 'translateY(0)';
      }
    }
  }, label, activeSection === key && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'absolute',
      bottom: '6px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '16px',
      height: '2px',
      background: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '2px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }
  }, toggleDarkMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleDarkMode,
    style: {
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
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
    },
    onMouseEnter: e => {
      e.target.style.transform = 'scale(1.1)';
      e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    },
    onMouseLeave: e => {
      e.target.style.transform = 'scale(1)';
      e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    },
    "aria-label": `Switch to ${darkMode ? 'light' : 'dark'} mode`
  }, darkMode ? '🌞' : '🌙'), mobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleMenu,
    style: {
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
    },
    "aria-label": "Toggle menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '18px',
      height: '2px',
      background: currentTheme.text,
      borderRadius: '1px',
      transform: isMenuOpen ? 'rotate(45deg) translateY(5px)' : 'none',
      transition: 'all 0.2s ease'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '18px',
      height: '2px',
      background: currentTheme.text,
      borderRadius: '1px',
      opacity: isMenuOpen ? 0 : 1,
      transition: 'all 0.2s ease'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '18px',
      height: '2px',
      background: currentTheme.text,
      borderRadius: '1px',
      transform: isMenuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none',
      transition: 'all 0.2s ease'
    }
  }))))), mobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
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
    },
    onClick: () => setIsMenuOpen(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'absolute',
      top: '80px',
      right: '1rem',
      background: currentTheme.surface,
      borderRadius: '20px',
      border: `1px solid ${currentTheme.border}`,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      padding: '1.5rem',
      minWidth: '220px',
      transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)',
      transition: 'all 0.3s ease'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '1.5rem',
      paddingBottom: '1rem',
      borderBottom: `1px solid ${currentTheme.border}`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '32px',
      height: '32px',
      background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`,
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      color: 'white'
    }
  }, "\uD83E\uDD16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.9rem',
      fontWeight: '700',
      color: currentTheme.text
    }
  }, "Kartik Bhargava"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.7rem',
      color: currentTheme.textSecondary
    }
  }, "Android Developer"))), Object.entries(sections).map(([key, label], index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    key: key,
    onClick: () => handleSectionClick(key),
    style: {
      width: '100%',
      padding: '1rem',
      border: 'none',
      borderRadius: '12px',
      background: activeSection === key ? `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)` : 'transparent',
      color: activeSection === key ? '#ffffff' : currentTheme.text,
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
    },
    onMouseEnter: e => {
      if (activeSection !== key) {
        e.target.style.background = `${currentTheme.primary}10`;
      }
    },
    onMouseLeave: e => {
      if (activeSection !== key) {
        e.target.style.background = 'transparent';
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '1rem'
    }
  }, key === 'home' && '🏠', key === 'about' && '👨‍💻', key === 'portfolio' && '💼', key === 'writing' && '✍️', key === 'contact' && '📧'), label)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '1.5rem',
      paddingTop: '1rem',
      borderTop: `1px solid ${currentTheme.border}`,
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: currentTheme.textSecondary,
      marginBottom: '0.5rem'
    }
  }, "Available for projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: `${currentTheme.success}15`,
      color: currentTheme.success,
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '600'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '0.7rem'
    }
  }, "\uD83D\uDFE2"), "Open to work")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
    jsx: true,
    global: true
  }, `
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
      `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/layout.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/components/layout/header.js");



const Layout = ({
  children,
  activeSection,
  setActiveSection,
  sections,
  darkMode,
  setDarkMode
}) => {
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: internalDarkMode,
    1: setInternalDarkMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Use props if provided, otherwise use internal state
  const currentDarkMode = darkMode !== undefined ? darkMode : internalDarkMode;
  const toggleDarkMode = setDarkMode || setInternalDarkMode;

  // Initialize dark mode if not controlled by parent
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window !== 'undefined') {
      if (darkMode === undefined) {
        const savedTheme = localStorage.getItem('darkMode');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setInternalDarkMode(savedTheme ? JSON.parse(savedTheme) : prefersDark);
      }
      setIsLoading(false);

      // Check mobile
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, [darkMode]);

  // Save theme preference
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(currentDarkMode));
      document.documentElement.classList.toggle('dark', currentDarkMode);
    }
  }, [currentDarkMode]);
  const handleToggleDarkMode = () => {
    const newMode = !currentDarkMode;
    if (setDarkMode) {
      setDarkMode(newMode);
    } else {
      setInternalDarkMode(newMode);
    }
  };

  // Determine which sections need scrolling
  const scrollableSections = ['portfolio', 'writing'];
  const needsScrolling = scrollableSections.includes(activeSection);

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
  };
  const currentTheme = currentDarkMode ? theme.dark : theme.light;
  if (isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: currentTheme.bg,
        color: currentTheme.text
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: '40px',
        height: '40px',
        border: `3px solid ${currentTheme.border}`,
        borderTop: `3px solid ${currentTheme.text}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 1rem'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Loading...")));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html", {
    lang: "en",
    className: currentDarkMode ? 'dark' : ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Kartik Bhargava - Tech Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: "Technology, programming, and development insights"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "theme-color",
    content: currentDarkMode ? '#0f172a' : '#ffffff'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:title",
    content: "Kartik Bhargava - Tech Blog"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:description",
    content: "Technology, programming, and development insights"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:url",
    content: "https://kartikbhargava.github.io"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "twitter:title",
    content: "Kartik Bhargava - Tech Blog"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "twitter:description",
    content: "Technology, programming, and development insights"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif",
      minHeight: "100vh",
      background: currentTheme.bg,
      color: currentTheme.text,
      display: "flex",
      flexDirection: "column",
      transition: 'all 0.3s ease',
      // Ensure proper overflow handling for mobile
      overflow: isMobile ? 'auto' : 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeSection: activeSection,
    setActiveSection: setActiveSection,
    sections: sections,
    darkMode: currentDarkMode,
    toggleDarkMode: handleToggleDarkMode,
    theme: currentTheme,
    isMobile: isMobile
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    style: {
      flex: 1,
      background: currentTheme.bg,
      // Mobile-first overflow strategy
      overflow: isMobile ? 'auto' // Always allow scrolling on mobile
      : needsScrolling ? "auto" : "hidden",
      display: isMobile ? "block" // Always use block display on mobile
      : needsScrolling ? "block" : "flex",
      position: 'relative',
      // Ensure minimum height for mobile
      minHeight: isMobile ? 'calc(100vh - 80px)' : 'auto',
      // Enable momentum scrolling on iOS
      WebkitOverflowScrolling: 'touch'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: currentDarkMode ? 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)' : 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)',
      backgroundSize: '20px 20px',
      pointerEvents: 'none',
      zIndex: 0
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      width: '100%',
      // Ensure content takes full height on mobile
      minHeight: isMobile ? '100%' : 'auto'
    }
  }, children)), (needsScrolling || isMobile) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => {
      const main = document.querySelector('main');
      if (main) {
        main.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    style: {
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
    },
    onMouseEnter: e => {
      e.target.style.transform = 'scale(1.1)';
    },
    onMouseLeave: e => {
      e.target.style.transform = 'scale(1)';
    }
  }, "\u2191")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
    jsx: true,
    global: true
  }, `
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
      `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/layout */ "./src/components/layout/layout.js");




// Lazy load sections for better performance
const HomeSection = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_components_sections_homeSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/sections/homeSection */ "./src/components/sections/homeSection.js")));
const AboutSection = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_components_sections_aboutSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/sections/aboutSection */ "./src/components/sections/aboutSection.js")));
const WritingSection = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_components_sections_writingSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/sections/writingSection */ "./src/components/sections/writingSection.js")));
const ContactSection = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_components_sections_contactSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/sections/contactSection */ "./src/components/sections/contactSection.js")));
const PortfolioSection = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => __webpack_require__.e(/*! import() */ "src_components_sections_portfolioSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/sections/portfolioSection */ "./src/components/sections/portfolioSection.js")));

// Loading component
const SectionLoader = ({
  darkMode = false
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
    color: darkMode ? '#f8fafc' : '#1f2937'
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: {
    textAlign: 'center'
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: {
    width: '32px',
    height: '32px',
    border: `2px solid ${darkMode ? '#334155' : '#e5e7eb'}`,
    borderTop: `2px solid ${darkMode ? '#f8fafc' : '#1f2937'}`,
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 1rem'
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
  style: {
    margin: 0,
    fontSize: '0.9rem',
    opacity: 0.7
  }
}, "Loading section...")));
const IndexPage = () => {
  const {
    0: activeSection,
    1: setActiveSection
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('home');
  const {
    0: isClient,
    1: setIsClient
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: darkMode,
    1: setDarkMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Prevent hydration mismatch and get dark mode state
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsClient(true);

    // Get saved theme or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = savedTheme ? JSON.parse(savedTheme) : prefersDark;
      setDarkMode(isDark);
    }
  }, []);

  // Listen for dark mode changes from Layout component
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleStorageChange = () => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme) {
          setDarkMode(JSON.parse(savedTheme));
        }
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);

      // Also listen for manual updates
      const interval = setInterval(() => {
        const currentTheme = localStorage.getItem('darkMode');
        if (currentTheme) {
          const isDark = JSON.parse(currentTheme);
          if (isDark !== darkMode) {
            setDarkMode(isDark);
          }
        }
      }, 100);
      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(interval);
      };
    }
  }, [darkMode]);

  // Preload next likely sections
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const preloadSections = () => {
      if (activeSection === 'home') {
        __webpack_require__.e(/*! import() */ "src_components_sections_aboutSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/sections/aboutSection */ "./src/components/sections/aboutSection.js"));
        __webpack_require__.e(/*! import() */ "src_components_sections_portfolioSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/sections/portfolioSection */ "./src/components/sections/portfolioSection.js"));
      }
    };
    const timer = setTimeout(preloadSections, 2000);
    return () => clearTimeout(timer);
  }, [activeSection]);

  // Handle keyboard navigation
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleKeyPress = e => {
      if (e.altKey || e.ctrlKey) return;
      const sectionKeys = {
        '1': 'home',
        '2': 'about',
        '3': 'portfolio',
        '4': 'writing',
        '5': 'contact'
      };
      if (sectionKeys[e.key]) {
        setActiveSection(sectionKeys[e.key]);
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, []);
  const sections = {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    writing: 'Writing',
    contact: 'Contact'
  };
  const sectionDescriptions = {
    home: 'Welcome to my tech blog and portfolio',
    about: 'Learn more about my background and expertise',
    portfolio: 'Explore my projects and technical work',
    writing: 'Read my latest blog posts and articles',
    contact: 'Get in touch for collaborations and opportunities'
  };
  const renderContent = () => {
    const commonProps = {
      setActiveSection,
      activeSection,
      darkMode // Make sure to pass darkMode to all sections
    };
    switch (activeSection) {
      case 'home':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
          fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionLoader, {
            darkMode: darkMode
          })
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HomeSection, commonProps));
      case 'about':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
          fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionLoader, {
            darkMode: darkMode
          })
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AboutSection, commonProps));
      case 'portfolio':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
          fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionLoader, {
            darkMode: darkMode
          })
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PortfolioSection, commonProps));
      case 'writing':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
          fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionLoader, {
            darkMode: darkMode
          })
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WritingSection, commonProps));
      case 'contact':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
          fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionLoader, {
            darkMode: darkMode
          })
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ContactSection, commonProps));
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
          fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionLoader, {
            darkMode: darkMode
          })
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HomeSection, commonProps));
    }
  };

  // Don't render until client-side to prevent hydration issues
  if (!isClient) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fafafa',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        width: '40px',
        height: '40px',
        border: '3px solid #e5e7eb',
        borderTop: '3px solid #1f2937',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 1rem'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        color: '#6b7280'
      }
    }, "Loading Kartik's Portfolio...")));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, sections[activeSection], " - Kartik Bhargava"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: sectionDescriptions[activeSection]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:title",
    content: `${sections[activeSection]} - Kartik Bhargava`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:description",
    content: sectionDescriptions[activeSection]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "canonical",
    href: `https://kartikbhargava.github.io#${activeSection}`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kartik Bhargava",
    "jobTitle": "Android Developer",
    "url": "https://kartikbhargava.github.io",
    "sameAs": ["https://github.com/KartikBhargava", "https://linkedin.com/in/kartik-bhargava"],
    "knowsAbout": ["Android", "Kotlin", "Jetpack Compose", "Mobile Development"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeSection: activeSection,
    setActiveSection: setActiveSection,
    sections: sections
    // Pass dark mode state to Layout
    ,
    darkMode: darkMode,
    setDarkMode: setDarkMode
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      minHeight: '100%',
      animation: 'fadeIn 0.5s ease-in-out'
    },
    key: activeSection // Force re-render with animation
  }, renderContent())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
    jsx: true,
    global: true
  }, `
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
      `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
  charSet: "utf-8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
  name: "robots",
  content: "index, follow"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
  name: "author",
  content: "Kartik Bhargava"
}));

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map