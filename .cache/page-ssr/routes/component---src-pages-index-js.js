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
    className: `header-gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`,
    style: {
      fontSize: '1.3rem',
      fontWeight: '800',
      margin: 0,
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
      boxShadow: darkMode ? '0 4px 6px rgba(0, 0, 0, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
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
      boxShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.05)'
    },
    onMouseEnter: e => {
      e.target.style.transform = 'scale(1.1)';
      e.target.style.boxShadow = darkMode ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(0, 0, 0, 0.1)';
    },
    onMouseLeave: e => {
      e.target.style.transform = 'scale(1)';
      e.target.style.boxShadow = darkMode ? '0 2px 4px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.05)';
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
      boxShadow: darkMode ? '0 20px 40px rgba(0, 0, 0, 0.3)' : '0 20px 40px rgba(0, 0, 0, 0.1)',
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
    className: `mobile-header-gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`,
    style: {
      fontSize: '0.9rem',
      fontWeight: '700'
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

  // SIMPLE WHITE BORDER REMOVAL
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window !== 'undefined') {
      // Simple approach - just set body and html styles
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.body.style.width = '100vw';
      document.body.style.minHeight = '100vh';
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.margin = '0';
      document.documentElement.style.padding = '0';
      document.documentElement.style.width = '100%';
      document.documentElement.style.height = '100%';

      // Gatsby specific elements
      const gatsbyWrapper = document.getElementById('___gatsby');
      if (gatsbyWrapper) {
        gatsbyWrapper.style.margin = '0';
        gatsbyWrapper.style.padding = '0';
        gatsbyWrapper.style.width = '100vw';
        gatsbyWrapper.style.minHeight = '100vh';
      }
      const focusWrapper = document.getElementById('gatsby-focus-wrapper');
      if (focusWrapper) {
        focusWrapper.style.margin = '0';
        focusWrapper.style.padding = '0';
        focusWrapper.style.width = '100%';
        focusWrapper.style.minHeight = '100vh';
      }
    }
  }, []);

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
        color: currentTheme.text,
        margin: 0,
        padding: 0
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
      width: '100vw',
      minHeight: "100vh",
      background: currentTheme.bg,
      color: currentTheme.text,
      display: "flex",
      flexDirection: "column",
      transition: 'all 0.3s ease',
      margin: 0,
      padding: 0,
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
      WebkitOverflowScrolling: 'touch',
      width: '100%',
      margin: 0,
      padding: 0
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
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/analytics */ "./src/utils/analytics.js");





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
    0: previousSection,
    1: setPreviousSection
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: isClient,
    1: setIsClient
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: darkMode,
    1: setDarkMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: analyticsInitialized,
    1: setAnalyticsInitialized
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // Initialize Google Analytics
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window !== 'undefined' && !analyticsInitialized) {
      // Initialize GA4
      (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.initGA4)();
      setAnalyticsInitialized(true);

      // Track initial page load
      (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackEvent)('page_load', {
        initial_section: activeSection,
        user_agent: navigator.userAgent,
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        event_category: 'system'
      });

      // Track page performance after load
      const handleLoad = () => {
        setTimeout(() => {
          (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackPagePerformance)();
        }, 1000);
      };
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }

      // Global error tracking
      const handleError = event => {
        (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackError)(event.error, 'global_error_handler');
      };
      const handleUnhandledRejection = event => {
        (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackError)(new Error(event.reason), 'unhandled_promise_rejection');
      };
      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);

      // Track page visibility changes
      const handleVisibilityChange = () => {
        if (document.hidden) {
          (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackEvent)('page_hidden', {
            section: activeSection,
            time_on_section: Date.now() - window.sectionStartTime,
            event_category: 'engagement'
          });
        } else {
          (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackEvent)('page_visible', {
            section: activeSection,
            event_category: 'engagement'
          });
          window.sectionStartTime = Date.now();
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      // Track scroll depth
      let maxScrollDepth = 0;
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollDepth = Math.round((scrollTop + windowHeight) / documentHeight * 100);
        if (scrollDepth > maxScrollDepth && scrollDepth % 25 === 0) {
          maxScrollDepth = scrollDepth;
          (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackEvent)('scroll_depth', {
            depth: scrollDepth,
            section: activeSection,
            event_category: 'engagement'
          });
        }
      };
      window.addEventListener('scroll', handleScroll, {
        passive: true
      });
      return () => {
        window.removeEventListener('load', handleLoad);
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [analyticsInitialized]);

  // Track section changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (analyticsInitialized && previousSection !== null) {
      // Track section navigation
      (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackSectionView)(activeSection, previousSection);

      // Track time spent on previous section
      if (window.sectionStartTime) {
        const timeOnSection = Date.now() - window.sectionStartTime;
        (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackEvent)('section_time_spent', {
          section: previousSection,
          time_spent: timeOnSection,
          next_section: activeSection,
          event_category: 'engagement'
        });
      }
    }

    // Update section tracking
    setPreviousSection(activeSection);
    window.sectionStartTime = Date.now();
  }, [activeSection, analyticsInitialized]);

  // Prevent hydration mismatch and get dark mode state
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsClient(true);

    // Get saved theme or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = savedTheme ? JSON.parse(savedTheme) : prefersDark;
      setDarkMode(isDark);

      // Track initial theme preference
      if (analyticsInitialized) {
        (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackEvent)('initial_theme_preference', {
          theme: isDark ? 'dark' : 'light',
          source: savedTheme ? 'saved_preference' : 'system_preference',
          event_category: 'ui_interaction'
        });
      }
    }
  }, [analyticsInitialized]); // Only depend on analyticsInitialized

  // Listen for dark mode changes from Layout component
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleStorageChange = () => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme) {
          const newDarkMode = JSON.parse(savedTheme);
          if (newDarkMode !== darkMode) {
            setDarkMode(newDarkMode);
            // Track theme toggle
            if (analyticsInitialized) {
              (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackThemeToggle)(newDarkMode ? 'dark' : 'light');
            }
          }
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
            if (analyticsInitialized) {
              (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackThemeToggle)(isDark ? 'dark' : 'light');
            }
          }
        }
      }, 100);
      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(interval);
      };
    }
  }, [darkMode, analyticsInitialized]); // Dependencies are correct

  // Preload next likely sections
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const preloadSections = () => {
      if (activeSection === 'home') {
        __webpack_require__.e(/*! import() */ "src_components_sections_aboutSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/sections/aboutSection */ "./src/components/sections/aboutSection.js"));
        __webpack_require__.e(/*! import() */ "src_components_sections_portfolioSection_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/sections/portfolioSection */ "./src/components/sections/portfolioSection.js"));

        // Track preloading
        if (analyticsInitialized) {
          (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackEvent)('section_preload', {
            sections: ['about', 'portfolio'],
            trigger_section: 'home',
            event_category: 'performance'
          });
        }
      }
    };
    const timer = setTimeout(preloadSections, 2000);
    return () => clearTimeout(timer);
  }, [activeSection, analyticsInitialized]); // Added activeSection dependency

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
        const newSection = sectionKeys[e.key];
        setActiveSection(newSection);

        // Track keyboard navigation
        if (analyticsInitialized) {
          (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackEvent)('keyboard_navigation', {
            key_pressed: e.key,
            from_section: activeSection,
            to_section: newSection,
            event_category: 'navigation'
          });
        }
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [activeSection, analyticsInitialized]);

  // Track user engagement metrics
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window !== 'undefined' && analyticsInitialized) {
      // Track mouse movement to detect user engagement
      let mouseMovements = 0;
      const handleMouseMove = () => {
        mouseMovements++;
        if (mouseMovements === 10) {
          // Track after 10 mouse movements
          (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackEvent)('user_engaged', {
            section: activeSection,
            mouse_movements: mouseMovements,
            event_category: 'engagement'
          });
        }
      };

      // Track clicks for engagement
      const handleClick = e => {
        (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackEvent)('page_click', {
          section: activeSection,
          element_tag: e.target.tagName.toLowerCase(),
          element_class: e.target.className,
          event_category: 'engagement'
        });
      };
      window.addEventListener('mousemove', handleMouseMove, {
        passive: true
      });
      window.addEventListener('click', handleClick, {
        passive: true
      });
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('click', handleClick);
      };
    }
  }, [activeSection, analyticsInitialized]);
  const sections = {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    writing: 'Writing',
    contact: 'Contact'
  };
  const sectionDescriptions = {
    home: 'Welcome to my tech blog and portfolio - Android Developer & Mobile App Architect',
    about: 'Learn about my Android development background, expertise in Kotlin, Jetpack Compose, and mobile architecture',
    portfolio: 'Explore my Android projects, apps, and technical work showcasing modern mobile development',
    writing: 'Read my latest blog posts about Android development, mobile architecture, and tech insights',
    contact: 'Get in touch for Android development collaborations, freelance projects, and career opportunities'
  };

  // Enhanced section change handler with analytics
  const handleSectionChange = newSection => {
    if (newSection !== activeSection && analyticsInitialized) {
      (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_3__.trackEvent)('manual_section_change', {
        from_section: activeSection,
        to_section: newSection,
        method: 'navigation_click',
        event_category: 'navigation'
      });
    }
    setActiveSection(newSection);
  };
  const renderContent = () => {
    const commonProps = {
      setActiveSection: handleSectionChange,
      activeSection,
      darkMode
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, sections[activeSection], " - Kartik Bhargava | Android Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "description",
    content: sectionDescriptions[activeSection]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:title",
    content: `${sections[activeSection]} - Kartik Bhargava | Android Developer`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:description",
    content: sectionDescriptions[activeSection]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:url",
    content: `https://kartikbhargava.github.io#${activeSection}`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    property: "og:image",
    content: "https://kartikbhargava.github.io/og-image.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "twitter:title",
    content: `${sections[activeSection]} - Kartik Bhargava`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "twitter:description",
    content: sectionDescriptions[activeSection]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
    rel: "canonical",
    href: `https://kartikbhargava.github.io#${activeSection}`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
    name: "keywords",
    content: "Android Developer, Kotlin, Jetpack Compose, Mobile App Development, Android Architecture, MVVM, Clean Architecture, Firebase, Room Database, Material Design"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "application/ld+json"
  }, JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kartik Bhargava",
    "jobTitle": "Android Developer & Mobile App Architect",
    "description": "Experienced Android developer specializing in Kotlin, Jetpack Compose, and modern mobile architecture",
    "url": "https://kartikbhargava.github.io",
    "sameAs": ["https://github.com/KartikBhargava", "https://linkedin.com/in/kartik-bhargava-39586611b"],
    "knowsAbout": ["Android Development", "Kotlin", "Jetpack Compose", "Mobile Development", "MVVM Architecture", "Clean Architecture", "Firebase", "Room Database", "Material Design"],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Android Developer"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeSection: activeSection,
    setActiveSection: handleSectionChange,
    sections: sections,
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
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {
  name: "theme-color",
  content: "#3b82f6"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
  rel: "icon",
  href: "/favicon.ico"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("link", {
  rel: "apple-touch-icon",
  href: "/apple-touch-icon.png"
}));

/***/ }),

/***/ "./src/utils/analytics.js":
/*!********************************!*\
  !*** ./src/utils/analytics.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GA_TRACKING_ID: () => (/* binding */ GA_TRACKING_ID),
/* harmony export */   initGA4: () => (/* binding */ initGA4),
/* harmony export */   trackBlogInteraction: () => (/* binding */ trackBlogInteraction),
/* harmony export */   trackButtonClick: () => (/* binding */ trackButtonClick),
/* harmony export */   trackContactAttempt: () => (/* binding */ trackContactAttempt),
/* harmony export */   trackDownload: () => (/* binding */ trackDownload),
/* harmony export */   trackError: () => (/* binding */ trackError),
/* harmony export */   trackEvent: () => (/* binding */ trackEvent),
/* harmony export */   trackExternalLink: () => (/* binding */ trackExternalLink),
/* harmony export */   trackPagePerformance: () => (/* binding */ trackPagePerformance),
/* harmony export */   trackProjectInteraction: () => (/* binding */ trackProjectInteraction),
/* harmony export */   trackScrollDepth: () => (/* binding */ trackScrollDepth),
/* harmony export */   trackSearch: () => (/* binding */ trackSearch),
/* harmony export */   trackSectionView: () => (/* binding */ trackSectionView),
/* harmony export */   trackTechnologyFilter: () => (/* binding */ trackTechnologyFilter),
/* harmony export */   trackThemeToggle: () => (/* binding */ trackThemeToggle)
/* harmony export */ });
const GA_TRACKING_ID = 'G-3TK5H4EPYR'; // Replace with your actual GA4 tracking ID

// Initialize Google Analytics 4
const initGA4 = () => {
  // Only initialize if we're in the browser and haven't already loaded
  if (typeof window === 'undefined' || window.gtag) return;

  // Load the Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  // Initialize the dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  // Configure GA4
  gtag('js', new Date());
  gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
    // Enhanced measurement settings
    send_page_view: true,
    allow_google_signals: true,
    allow_ad_personalization_signals: false // Set to true if you want ad personalization
  });
  console.log('GA4 initialized successfully');
};

// Generic event tracking function
const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      // Add default parameters
      timestamp: new Date().toISOString(),
      page_location: window.location.href,
      page_title: document.title,
      ...parameters
    });
    console.log('GA4 Event:', eventName, parameters);
  }
};

// Section Navigation Tracking
const trackSectionView = (sectionName, fromSection = null) => {
  trackEvent('section_view', {
    section_name: sectionName,
    from_section: fromSection,
    event_category: 'navigation'
  });
};

// Button Click Tracking
const trackButtonClick = (buttonName, section, buttonType = 'primary') => {
  trackEvent('button_click', {
    button_name: buttonName,
    section: section,
    button_type: buttonType,
    event_category: 'engagement'
  });
};

// Project Interaction Tracking
const trackProjectInteraction = (action, projectName, projectCategory = '') => {
  trackEvent('project_interaction', {
    action: action,
    // 'view', 'click_github', 'click_demo', 'expand_details'
    project_name: projectName,
    project_category: projectCategory,
    event_category: 'portfolio'
  });
};

// Blog Interaction Tracking
const trackBlogInteraction = (action, postTitle = '', category = '') => {
  trackEvent('blog_interaction', {
    action: action,
    // 'read_article', 'filter_category', 'subscribe'
    post_title: postTitle,
    blog_category: category,
    event_category: 'blog'
  });
};

// Contact Method Tracking
const trackContactAttempt = (method, destination = '') => {
  trackEvent('contact_attempt', {
    contact_method: method,
    // 'email', 'linkedin', 'github'
    destination: destination,
    event_category: 'contact'
  });
};

// External Link Tracking
const trackExternalLink = (linkType, destination, context = '') => {
  trackEvent('external_link_click', {
    link_type: linkType,
    destination: destination,
    context: context,
    event_category: 'outbound'
  });
};

// Technology Filter Tracking
const trackTechnologyFilter = (technology, section) => {
  trackEvent('technology_filter', {
    technology: technology,
    section: section,
    event_category: 'filter'
  });
};

// Search Tracking (if you add search functionality)
const trackSearch = (searchTerm, section, resultsCount = 0) => {
  trackEvent('search', {
    search_term: searchTerm,
    section: section,
    results_count: resultsCount,
    event_category: 'search'
  });
};

// Download/Resume Tracking
const trackDownload = (fileName, fileType = '') => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    event_category: 'download'
  });
};

// Theme Toggle Tracking
const trackThemeToggle = newTheme => {
  trackEvent('theme_toggle', {
    theme: newTheme,
    // 'dark' or 'light'
    event_category: 'ui_interaction'
  });
};

// Scroll Depth Tracking
const trackScrollDepth = (depth, section) => {
  trackEvent('scroll_depth', {
    scroll_depth: depth,
    // percentage
    section: section,
    event_category: 'engagement'
  });
};

// Page Performance Tracking
const trackPagePerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    var _performance$getEntri;
    const navigation = performance.getEntriesByType('navigation')[0];
    trackEvent('page_performance', {
      load_time: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
      dom_content_loaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
      first_contentful_paint: Math.round(((_performance$getEntri = performance.getEntriesByName('first-contentful-paint')[0]) === null || _performance$getEntri === void 0 ? void 0 : _performance$getEntri.startTime) || 0),
      event_category: 'performance'
    });
  }
};

// Error Tracking
const trackError = (error, errorContext = '') => {
  trackEvent('javascript_error', {
    error_message: error.message,
    error_context: errorContext,
    user_agent: navigator.userAgent,
    event_category: 'error'
  });
};

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map