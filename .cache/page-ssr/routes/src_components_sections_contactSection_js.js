"use strict";
exports.id = "src_components_sections_contactSection_js";
exports.ids = ["src_components_sections_contactSection_js"];
exports.modules = {

/***/ "./src/components/sections/contactSection.js":
/*!***************************************************!*\
  !*** ./src/components/sections/contactSection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/buttons */ "./src/components/ui/buttons.js");
/* harmony import */ var _utils_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/analytics */ "./src/utils/analytics.js");
// Updated ContactSection with GA4 analytics integration



const ContactSection = ({
  darkMode = false
}) => {
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isVisible,
    1: setIsVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof window !== 'undefined') {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsVisible(true);
    // Track contact section view
    (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_2__.trackSectionView)('contact');
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
      pink: '#ec4899',
      badgeGradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
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
      pink: '#f472b6',
      badgeGradient: 'linear-gradient(135deg, #34d399 0%, #60a5fa 100%)'
    }
  };
  const currentTheme = darkMode ? theme.dark : theme.light;
  const contactMethods = [{
    icon: "📧",
    title: "Email",
    description: "officialkartik07@gmail.com",
    href: "mailto:officialkartik07@gmail.com",
    gradient: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.purple} 100%)`,
    hoverColor: currentTheme.primary
  }, {
    icon: "💼",
    title: "LinkedIn",
    description: "Connect professionally",
    href: "https://linkedin.com/in/kartik-bhargava-39586611b",
    gradient: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.primary} 100%)`,
    hoverColor: currentTheme.success
  }, {
    icon: "🐙",
    title: "GitHub",
    description: "Android projects & libraries",
    href: "https://github.com/KartikBhargava",
    gradient: `linear-gradient(135deg, ${currentTheme.purple} 0%, ${currentTheme.pink} 100%)`,
    hoverColor: currentTheme.purple
  }];

  // Analytics handlers
  const handleContactClick = (method, url) => {
    // Track the contact attempt
    (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_2__.trackContactAttempt)(method.title.toLowerCase(), url);

    // Track as external link
    (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_2__.trackExternalLink)(method.title.toLowerCase(), url, 'contact_section');

    // Track specific contact method
    (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_2__.trackEvent)('contact_method_click', {
      method: method.title.toLowerCase(),
      description: method.description,
      section: 'contact',
      event_category: 'contact'
    });

    // Open the link
    window.open(url, '_blank');
  };
  const handleResponseTimeClick = () => {
    (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_2__.trackEvent)('response_time_info_click', {
      section: 'contact',
      info_type: 'response_time',
      event_category: 'engagement'
    });
  };
  const handleAvailabilityClick = () => {
    (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_2__.trackEvent)('availability_info_click', {
      section: 'contact',
      info_type: 'availability',
      event_category: 'engagement'
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: "900px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      background: currentTheme.background,
      color: currentTheme.text,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s ease'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: "3rem",
      animation: 'fadeInUp 0.6s ease'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      background: currentTheme.badgeGradient,
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
  }, "\uD83D\uDE80"), "Available for Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: `gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`,
    style: {
      fontSize: isMobile ? "2.5rem" : "3.5rem",
      fontWeight: "800",
      marginBottom: "1.5rem",
      lineHeight: "1.2",
      animation: 'fadeInUp 0.6s ease 0.2s both'
    }
  }, "Let's Build Something Amazing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      marginBottom: "0",
      color: currentTheme.textSecondary,
      lineHeight: "1.7",
      maxWidth: "600px",
      margin: "0 auto",
      animation: 'fadeInUp 0.6s ease 0.4s both'
    }
  }, "Looking for an ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    style: {
      color: currentTheme.text
    }
  }, "Android developer"), " for your next project? I'm always interested in exciting Android opportunities and challenging mobile app projects.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: isMobile ? "1.5rem" : "2rem",
      marginBottom: isMobile ? "3rem" : "4rem",
      animation: 'fadeInUp 0.6s ease 0.6s both'
    }
  }, contactMethods.map((method, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    onClick: () => handleContactClick(method, method.href),
    style: {
      textDecoration: "none",
      color: "inherit",
      display: "block",
      cursor: "pointer"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexDirection: isMobile ? "row" : "column",
      alignItems: "center",
      textAlign: isMobile ? "left" : "center",
      gap: isMobile ? "1.5rem" : "0",
      padding: isMobile ? "2rem" : "2.5rem",
      background: darkMode ? `${method.gradient}15` : `${method.gradient}10`,
      border: `1px solid ${currentTheme.border}`,
      borderRadius: "20px",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
      animation: `slideInUp 0.5s ease ${index * 0.1 + 0.8}s both`
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
      e.currentTarget.style.boxShadow = darkMode ? '0 15px 35px rgba(0, 0, 0, 0.2)' : '0 15px 35px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.background = darkMode ? `${method.gradient}25` : `${method.gradient}20`;
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.background = darkMode ? `${method.gradient}15` : `${method.gradient}10`;
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: method.gradient,
      borderRadius: '20px 20px 0 0'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "3rem",
      marginBottom: isMobile ? "0" : "1.5rem",
      flexShrink: 0,
      animation: 'bounce 2s infinite'
    }
  }, method.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "1.2rem",
      fontWeight: "700",
      marginBottom: "0.75rem",
      color: currentTheme.text
    }
  }, method.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1rem",
      color: currentTheme.textSecondary,
      margin: 0,
      fontWeight: "500"
    }
  }, method.description)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "1.5rem" : "2rem",
      animation: 'fadeInUp 0.6s ease 1.2s both'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: handleResponseTimeClick,
    style: {
      background: darkMode ? `linear-gradient(135deg, ${currentTheme.surface} 0%, ${currentTheme.primary}10 100%)` : `linear-gradient(135deg, ${currentTheme.surface} 0%, ${currentTheme.primary}05 100%)`,
      textAlign: "center",
      padding: isMobile ? "2rem" : "2.5rem",
      borderRadius: "20px",
      border: `1px solid ${currentTheme.border}`,
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
      cursor: "pointer"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = darkMode ? '0 10px 25px rgba(0, 0, 0, 0.2)' : '0 10px 25px rgba(0, 0, 0, 0.1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `radial-gradient(circle at 2px 2px, ${currentTheme.primary}${darkMode ? '10' : '05'} 1px, transparent 0)`,
      backgroundSize: '16px 16px',
      opacity: 0.5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
      animation: 'pulse 2s infinite'
    }
  }, "\u23F1\uFE0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: isMobile ? "1.2rem" : "1.4rem",
      fontWeight: "700",
      color: currentTheme.text,
      marginBottom: "1rem"
    }
  }, "Response Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      color: currentTheme.textSecondary,
      lineHeight: "1.6",
      margin: 0
    }
  }, "I typically respond within ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    style: {
      color: currentTheme.primary
    }
  }, "12 hours"), ". For urgent Android projects, LinkedIn is the fastest way to reach me."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: handleAvailabilityClick,
    style: {
      background: `linear-gradient(135deg, ${currentTheme.success} 0%, ${currentTheme.primary} 100%)`,
      color: "white",
      textAlign: "center",
      padding: isMobile ? "2rem" : "2.5rem",
      borderRadius: "20px",
      position: "relative",
      overflow: "hidden",
      boxShadow: `0 4px 14px 0 ${currentTheme.success}30`,
      transition: "all 0.3s ease",
      cursor: "pointer"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
      e.currentTarget.style.boxShadow = `0 15px 35px 0 ${currentTheme.success}40`;
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
      e.currentTarget.style.boxShadow = `0 4px 14px 0 ${currentTheme.success}30`;
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)',
      backgroundSize: '16px 16px',
      opacity: 0.3
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
      animation: 'bounce 2s infinite'
    }
  }, "\u2705"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: isMobile ? "1.2rem" : "1.4rem",
      fontWeight: "700",
      marginBottom: "1rem"
    }
  }, "Availability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      opacity: "0.95",
      lineHeight: "1.6",
      margin: 0
    }
  }, "Open to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "freelance Android projects"), " and full-time opportunities. Remote work preferred.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "3rem",
      animation: 'fadeInUp 0.6s ease 1.6s both'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1.1rem",
      color: currentTheme.textSecondary,
      marginBottom: "1.5rem"
    }
  }, "Ready to start your Android project? Let's discuss your ideas!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: () => (0,_utils_analytics__WEBPACK_IMPORTED_MODULE_2__.trackEvent)('cta_response_time_click', {
      section: 'contact',
      cta_type: 'response_time_info',
      event_category: 'engagement'
    }),
    style: {
      display: "inline-flex",
      gap: "0.5rem",
      background: darkMode ? `linear-gradient(135deg, ${currentTheme.primary}15 0%, ${currentTheme.purple}15 100%)` : `linear-gradient(135deg, ${currentTheme.primary}10 0%, ${currentTheme.purple}10 100%)`,
      padding: "1rem 2rem",
      borderRadius: "50px",
      border: `1px solid ${currentTheme.border}`,
      animation: 'pulse 3s infinite',
      cursor: "pointer",
      transition: "all 0.3s ease"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.05)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '1.2rem'
    }
  }, "\uD83D\uDCAC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: currentTheme.textSecondary,
      fontWeight: '500'
    }
  }, "Average response: 12 hours"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
    jsx: true,
    global: true
  }, `
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
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.02);
          }
        }
      `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactSection);

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
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const {
    0: isPressed,
    1: setIsPressed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isHovered,
    1: setIsHovered
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
  const getButtonStyles = () => {
    let background = currentVariant.background;
    let color = currentVariant.color;
    if (disabled || loading) {
      // Keep original styles when disabled/loading
    } else if (isPressed) {
      background = currentVariant.activeBg || currentVariant.hoverBg || background;
    } else if (isHovered) {
      background = currentVariant.hoverBg || background;
      if (currentVariant.hoverColor) {
        color = currentVariant.hoverColor;
      }
    }
    return {
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
      background,
      color,
      border: currentVariant.border || "none",
      boxShadow: disabled || loading ? "none" : currentVariant.shadow || "none",
      ...currentSize,
      ...style
    };
  };
  const handleMouseEnter = e => {
    if (!disabled && !loading) {
      setIsHovered(true);
    }
    // Call any external onMouseEnter handler
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  };
  const handleMouseLeave = e => {
    setIsHovered(false);
    setIsPressed(false);
    // Call any external onMouseLeave handler
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  };
  const handleMouseDown = () => {
    if (!disabled && !loading) {
      setIsPressed(true);
    }
  };
  const handleMouseUp = () => {
    setIsPressed(false);
  };
  const handleClick = e => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
    jsx: true
  }, `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", Object.assign({
    type: type,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    disabled: disabled || loading,
    "aria-label": ariaLabel || (typeof children === 'string' ? children : undefined),
    className: className,
    style: getButtonStyles()
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden",
      borderRadius: "inherit",
      pointerEvents: "none"
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
      transition: "opacity 0.2s ease",
      pointerEvents: "none"
    }
  }, icon && !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, icon), children)));
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
//# sourceMappingURL=src_components_sections_contactSection_js.js.map