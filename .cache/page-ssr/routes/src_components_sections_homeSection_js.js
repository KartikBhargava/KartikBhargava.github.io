"use strict";
exports.id = "src_components_sections_homeSection_js";
exports.ids = ["src_components_sections_homeSection_js"];
exports.modules = {

/***/ "./src/components/sections/homeSection.js":
/*!************************************************!*\
  !*** ./src/components/sections/homeSection.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/buttons */ "./src/components/ui/buttons.js");
/* harmony import */ var _ui_techPill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/techPill */ "./src/components/ui/techPill.js");
// Updated Home Section with CSS class approach



const HomeSection = ({
  setActiveSection,
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
  }, []);

  // Theme colors
  const theme = {
    light: {
      background: '#ffffff',
      surface: '#ffffff',
      text: '#0f172a',
      textSecondary: '#64748b',
      border: '#e2e8f0',
      primary: '#3b82f6',
      success: '#10b981',
      purple: '#8b5cf6',
      buttonGradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      badgeGradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)'
    },
    dark: {
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f8fafc',
      textSecondary: '#cbd5e1',
      border: '#334155',
      primary: '#60a5fa',
      success: '#34d399',
      purple: '#a78bfa',
      buttonGradient: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
      badgeGradient: 'linear-gradient(135deg, #34d399 0%, #60a5fa 100%)'
    }
  };
  const currentTheme = darkMode ? theme.dark : theme.light;
  const androidTechnologies = ["Kotlin", "Java", "Jetpack Compose", "Android Studio", "Firebase", "Room", "Retrofit", "Coroutines"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "3rem" : "4rem",
      alignItems: "center",
      height: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "2rem",
      background: currentTheme.background,
      color: currentTheme.text,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s ease'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      order: isMobile ? 2 : 1,
      animation: 'fadeInLeft 0.8s ease'
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
  }, "\uD83E\uDD16"), "Open to Android Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: `gradient-title ${darkMode ? 'dark-mode' : 'light-mode'}`,
    style: {
      fontSize: isMobile ? "3rem" : "4rem",
      fontWeight: "800",
      lineHeight: "1.1",
      marginBottom: "1rem",
      animation: 'fadeInUp 0.6s ease 0.2s both'
    }
  }, "Hi, I'm Kartik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: isMobile ? "1.5rem" : "2.2rem",
      marginBottom: "1.5rem",
      fontWeight: "600",
      color: currentTheme.textSecondary,
      lineHeight: "1.3",
      animation: 'fadeInUp 0.6s ease 0.4s both'
    }
  }, "Android Developer & Mobile App Architect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      marginBottom: "2.5rem",
      color: currentTheme.textSecondary,
      lineHeight: "1.7",
      animation: 'fadeInUp 0.6s ease 0.6s both'
    }
  }, "I craft ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    style: {
      color: currentTheme.text
    }
  }, "native Android applications"), " that deliver exceptional user experiences. Passionate about ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", {
    style: {
      color: currentTheme.primary
    }
  }, "clean architecture"), ", modern Android development, and building apps that users love."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      marginBottom: "3rem",
      flexDirection: isMobile ? "column" : "row",
      animation: 'fadeInUp 0.6s ease 0.8s both'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "primary",
    style: {
      background: currentTheme.buttonGradient,
      border: 'none',
      width: isMobile ? "100%" : "auto",
      padding: '1rem 2rem',
      fontSize: '1rem',
      fontWeight: '600',
      borderRadius: '12px',
      boxShadow: `0 4px 14px 0 ${currentTheme.primary}39`,
      transition: 'all 0.3s ease',
      color: 'white'
    },
    onClick: () => setActiveSection('portfolio')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      marginRight: '0.5rem'
    }
  }, "\uD83D\uDCF1"), "View My Apps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "outline",
    onClick: () => setActiveSection('writing'),
    style: {
      width: isMobile ? "100%" : "auto",
      border: `2px solid ${currentTheme.primary}`,
      color: currentTheme.primary,
      padding: '1rem 2rem',
      fontSize: '1rem',
      fontWeight: '600',
      borderRadius: '12px',
      background: 'transparent',
      transition: 'all 0.3s ease'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      marginRight: '0.5rem'
    }
  }, "\u270D\uFE0F"), "Read Android Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "2rem",
      animation: 'fadeInUp 0.6s ease 1s both'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1rem",
      color: currentTheme.textSecondary,
      marginBottom: "1rem",
      fontWeight: "600"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: currentTheme.text
    }
  }, "\uD83D\uDE80 Technologies I work with:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem"
    }
  }, androidTechnologies.map((tech, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    key: tech,
    style: {
      background: darkMode ? `linear-gradient(135deg, ${currentTheme.primary}20 0%, ${currentTheme.purple}20 100%)` : `linear-gradient(135deg, ${currentTheme.primary}15 0%, ${currentTheme.purple}15 100%)`,
      color: currentTheme.text,
      border: `1px solid ${currentTheme.border}`,
      padding: "0.5rem 1rem",
      borderRadius: "25px",
      fontSize: "0.9rem",
      fontWeight: "500",
      transition: "all 0.3s ease",
      cursor: "default",
      animation: `slideInUp 0.5s ease ${index * 0.1}s both`
    }
  }, tech))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: darkMode ? `linear-gradient(135deg, ${currentTheme.surface} 0%, ${currentTheme.primary}10 100%)` : `linear-gradient(135deg, ${currentTheme.surface} 0%, ${currentTheme.primary}05 100%)`,
      borderRadius: "24px",
      padding: isMobile ? "2.5rem" : "3rem",
      textAlign: "center",
      border: `1px solid ${currentTheme.border}`,
      order: isMobile ? 1 : 2,
      position: 'relative',
      overflow: 'hidden',
      animation: 'fadeInRight 0.8s ease 0.4s both',
      boxShadow: darkMode ? '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)' : '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "4rem" : "5rem",
      marginBottom: "1.5rem",
      position: 'relative',
      zIndex: 1,
      animation: 'bounce 2s infinite'
    }
  }, "\uD83D\uDCF1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: isMobile ? "1.5rem" : "2rem",
      textAlign: "center",
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '1rem',
      borderRadius: '16px',
      background: currentTheme.badgeGradient,
      color: '#ffffff',
      boxShadow: `0 4px 14px 0 ${currentTheme.success}30`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "2rem" : "2.5rem",
      fontWeight: "800",
      marginBottom: "0.5rem"
    }
  }, "5+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.9rem",
      fontWeight: "600",
      opacity: 0.9
    }
  }, "Years Android Dev")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '1rem',
      borderRadius: '16px',
      background: currentTheme.buttonGradient,
      color: '#ffffff',
      boxShadow: `0 4px 14px 0 ${currentTheme.primary}30`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "2rem" : "2.5rem",
      fontWeight: "800",
      marginBottom: "0.5rem"
    }
  }, "25+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.9rem",
      fontWeight: "600",
      opacity: 0.9
    }
  }, "Apps Published")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style", {
    jsx: true,
    global: true
  }, `
        /* BULLETPROOF gradient text styles */
        .gradient-title {
          /* Always ensure text is visible with solid color */
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
        
        /* Force fallback during transitions to prevent strip bug */
        .gradient-title.transitioning {
          -webkit-text-fill-color: unset !important;
          background: none !important;
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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
      `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeSection);

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

/***/ }),

/***/ "./src/components/ui/techPill.js":
/*!***************************************!*\
  !*** ./src/components/ui/techPill.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TechPill = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      background: "#f3f4f6",
      color: "#374151",
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      fontSize: "0.85rem",
      fontWeight: "500"
    }
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TechPill);

/***/ })

};
;
//# sourceMappingURL=src_components_sections_homeSection_js.js.map