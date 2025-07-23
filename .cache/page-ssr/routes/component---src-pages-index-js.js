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
  sections
}) => {
  const {
    0: mobileMenuOpen,
    1: setMobileMenuOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Check if we're on the client side
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    style: {
      background: "white",
      borderBottom: "1px solid #e2e8f0",
      padding: "1rem 0",
      zIndex: 1000
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "1.25rem",
      fontWeight: "700",
      color: "#1f2937",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uD83E\uDD16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      display: isMobile ? "none" : "inline"
    }
  }, "Kartik Bhargava")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    style: {
      display: isMobile ? "none" : "flex",
      gap: "0.5rem"
    }
  }, Object.entries(sections).map(([key, label]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    key: key,
    onClick: () => setActiveSection(key),
    style: {
      color: activeSection === key ? "#34a853" : "#6b7280",
      background: activeSection === key ? "rgba(52, 168, 83, 0.1)" : "transparent",
      border: "none",
      padding: "0.75rem 1rem",
      borderRadius: "8px",
      fontSize: "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease"
    }
  }, label))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setMobileMenuOpen(!mobileMenuOpen),
    style: {
      display: isMobile ? "block" : "none",
      background: "transparent",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
      padding: "0.5rem"
    }
  }, mobileMenuOpen ? "✕" : "☰")), mobileMenuOpen && isMobile && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: "white",
      borderTop: "1px solid #e2e8f0",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }
  }, Object.entries(sections).map(([key, label]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    key: key,
    onClick: () => {
      setActiveSection(key);
      setMobileMenuOpen(false);
    },
    style: {
      color: activeSection === key ? "#34a853" : "#6b7280",
      background: activeSection === key ? "rgba(52, 168, 83, 0.1)" : "transparent",
      border: "none",
      padding: "1rem",
      borderRadius: "8px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease",
      textAlign: "left"
    }
  }, label))));
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
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/components/layout/header.js");


const Layout = ({
  children,
  activeSection,
  setActiveSection,
  sections
}) => {
  // Portfolio section needs scrolling, others don't
  const needsScrolling = activeSection === 'portfolio';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif",
      height: "100vh",
      background: "#fafafa",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeSection: activeSection,
    setActiveSection: setActiveSection,
    sections: sections
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    style: {
      flex: 1,
      background: "#fafafa",
      overflow: needsScrolling ? "auto" : "hidden",
      display: needsScrolling ? "block" : "flex"
    }
  }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/sections/aboutSection.js":
/*!*************************************************!*\
  !*** ./src/components/sections/aboutSection.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const AboutSection = () => {
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Check if we're on the client side
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const quickFacts = [{
    icon: "📍",
    label: "Based in India"
  }, {
    icon: "🎓",
    label: "Computer Science"
  }, {
    icon: "🤖",
    label: "Android Enthusiast"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem",
      height: "100%",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
      gap: isMobile ? "2rem" : "4rem",
      alignItems: "center",
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      order: isMobile ? 2 : 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: isMobile ? "2rem" : "3rem",
      marginBottom: "1.5rem",
      fontWeight: "700",
      color: "#1f2937"
    }
  }, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "1rem" : "1.2rem",
      color: "#4b5563",
      lineHeight: "1.7",
      marginBottom: "2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      marginBottom: "1.5rem"
    }
  }, "I'm a passionate Android developer with over 5 years of experience building native Android applications. I specialize in modern Android development using Kotlin, Jetpack Compose, and clean architecture patterns."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      marginBottom: "1.5rem"
    }
  }, "From concept to Play Store, I've guided numerous apps through their entire lifecycle. I love working with the latest Android technologies and creating smooth, performant user experiences."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "When I'm not coding, you'll find me writing about Android development, contributing to open source Android libraries, or exploring new Android features.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "1rem"
    }
  }, "Android Expertise"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "#374151",
      marginBottom: "0.5rem"
    }
  }, "Native Android"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280"
    }
  }, "Kotlin, Jetpack Compose, Material Design")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "#374151",
      marginBottom: "0.5rem"
    }
  }, "Architecture & Tools"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280"
    }
  }, "MVVM, Clean Architecture, Room, Retrofit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "#374151",
      marginBottom: "0.5rem"
    }
  }, "Backend Integration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280"
    }
  }, "REST APIs, Firebase, GraphQL, Coroutines")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "#374151",
      marginBottom: "0.5rem"
    }
  }, "Testing & CI/CD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280"
    }
  }, "JUnit, Espresso, GitHub Actions, Play Console"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: "#f8fafc",
      borderRadius: "16px",
      padding: isMobile ? "1.5rem" : "2rem",
      border: "1px solid #e2e8f0",
      textAlign: "center",
      order: isMobile ? 1 : 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: isMobile ? "1.2rem" : "1.5rem",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "1.5rem"
    }
  }, "Quick Facts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexDirection: isMobile ? "row" : "column",
      justifyContent: isMobile ? "space-around" : "center",
      gap: isMobile ? "1rem" : "1.5rem"
    }
  }, quickFacts.map((fact, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#34a853"
    }
  }, fact.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.8rem",
      color: "#6b7280",
      marginTop: "0.5rem",
      whiteSpace: isMobile ? "nowrap" : "normal"
    }
  }, fact.label)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "2rem",
      padding: "1rem",
      background: "#34a853",
      borderRadius: "8px",
      color: "white"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "1rem",
      fontWeight: "600",
      marginBottom: "0.5rem"
    }
  }, "Latest Target"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.9rem"
    }
  }, "Android 14 (API 34)")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutSection);

/***/ }),

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
/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/card */ "./src/components/ui/card.js");



const ContactSection = () => {
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Check if we're on the client side
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const contactMethods = [{
    icon: "📧",
    title: "Email",
    description: "kartik.android@example.com",
    href: "mailto:kartik.android@example.com"
  }, {
    icon: "💼",
    title: "LinkedIn",
    description: "Connect professionally",
    href: "https://linkedin.com/in/kartikbhargava"
  }, {
    icon: "🐙",
    title: "GitHub",
    description: "Android projects & libraries",
    href: "https://github.com/KartikBhargava"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: isMobile ? "2rem" : "3rem",
      marginBottom: "1.5rem",
      fontWeight: "700",
      color: "#1f2937"
    }
  }, "Let's Build Something Amazing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "1rem" : "1.2rem",
      marginBottom: "2rem",
      color: "#6b7280",
      lineHeight: "1.6"
    }
  }, "Looking for an Android developer for your next project? I'm always interested in exciting Android opportunities and challenging mobile app projects."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: isMobile ? "1rem" : "2rem",
      marginBottom: isMobile ? "2rem" : "3rem"
    }
  }, contactMethods.map((method, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    key: index,
    href: method.href,
    style: {
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      display: "flex",
      flexDirection: isMobile ? "row" : "column",
      alignItems: "center",
      textAlign: isMobile ? "left" : "center",
      gap: isMobile ? "1rem" : "0",
      padding: isMobile ? "1.5rem" : "2rem",
      transition: "all 0.2s ease"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2rem",
      marginBottom: isMobile ? "0" : "1rem",
      flexShrink: 0
    }
  }, method.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "1.1rem",
      fontWeight: "600",
      marginBottom: "0.5rem"
    }
  }, method.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280",
      margin: 0
    }
  }, method.description)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "1rem" : "2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      background: "#f8fafc",
      textAlign: "center",
      padding: isMobile ? "1.5rem" : "2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "1rem"
    }
  }, "Response Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "0.9rem" : "1rem",
      color: "#6b7280"
    }
  }, "I typically respond within 24 hours. For urgent Android projects, LinkedIn is the fastest way to reach me.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      background: "#34a853",
      color: "white",
      textAlign: "center",
      padding: isMobile ? "1.5rem" : "2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      fontWeight: "600",
      marginBottom: "1rem"
    }
  }, "Availability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "0.9rem" : "1rem",
      opacity: "0.9"
    }
  }, "Open to freelance Android projects and full-time opportunities. Remote work preferred."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactSection);

/***/ }),

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




const HomeSection = ({
  setActiveSection
}) => {
  const androidTechnologies = ["Kotlin", "Java", "Jetpack Compose", "Android Studio", "Firebase", "Room", "Retrofit", "Coroutines"];
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Check if we're on the client side
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "2rem" : "4rem",
      alignItems: "center",
      height: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      order: isMobile ? 2 : 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "inline-block",
      background: "#34a853",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      fontSize: "0.85rem",
      fontWeight: "600",
      marginBottom: "1.5rem"
    }
  }, "\uD83E\uDD16 Open to Android Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: {
      fontSize: isMobile ? "2.5rem" : "3.5rem",
      marginBottom: "1rem",
      fontWeight: "700",
      lineHeight: "1.1",
      color: "#1f2937"
    }
  }, "Hi, I'm Kartik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: isMobile ? "1.5rem" : "2rem",
      marginBottom: "1.5rem",
      fontWeight: "400",
      color: "#6b7280",
      lineHeight: "1.3"
    }
  }, "Android Developer & Mobile App Architect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "1rem" : "1.2rem",
      marginBottom: "2rem",
      color: "#4b5563",
      lineHeight: "1.6"
    }
  }, "I craft native Android applications that deliver exceptional user experiences. Passionate about clean architecture, modern Android development, and building apps that users love."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem",
      flexDirection: isMobile ? "column" : "row"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "primary",
    style: {
      background: "#34a853",
      width: isMobile ? "100%" : "auto"
    }
  }, "View My Apps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "secondary",
    onClick: () => setActiveSection('writing'),
    style: {
      width: isMobile ? "100%" : "auto"
    }
  }, "Read Android Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280",
      marginBottom: "1rem",
      fontWeight: "600"
    }
  }, "Android technologies I work with:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem"
    }
  }, androidTechnologies.map(tech => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_techPill__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: tech
  }, tech))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: "#f8fafc",
      borderRadius: "16px",
      padding: isMobile ? "2rem" : "3rem",
      textAlign: "center",
      border: "1px solid #e2e8f0",
      order: isMobile ? 1 : 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "4rem" : "6rem",
      marginBottom: "1.5rem"
    }
  }, "\uD83D\uDCF1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: isMobile ? "1rem" : "2rem",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "2rem" : "2.5rem",
      fontWeight: "700",
      color: "#34a853",
      marginBottom: "0.5rem"
    }
  }, "5+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.8rem",
      color: "#6b7280",
      fontWeight: "500"
    }
  }, "Years Android Dev")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "2rem" : "2.5rem",
      fontWeight: "700",
      color: "#34a853",
      marginBottom: "0.5rem"
    }
  }, "25+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.8rem",
      color: "#6b7280",
      fontWeight: "500"
    }
  }, "Apps Published")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeSection);

/***/ }),

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
/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/card */ "./src/components/ui/card.js");
/* harmony import */ var _ui_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/buttons */ "./src/components/ui/buttons.js");
// src/components/Sections/PortfolioSection.js



const PortfolioSection = () => {
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const isTablet = typeof window !== 'undefined' ? window.innerWidth < 1024 : false;
  const categories = {
    all: 'All Projects',
    featured: 'Featured',
    learning: 'Learning Projects',
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
    features: ["Task management with categories and priorities", "Local storage with Room database", "Material Design 3 theming with dynamic colors", "Smooth animations and transitions"]
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
    features: ["Real-time weather data from OpenWeather API", "Animated weather backgrounds and transitions", "Location-based weather updates", "7-day forecast with detailed view"]
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
    features: ["Custom UI components and layouts", "Animation experiments and prototypes", "State management patterns exploration", "Performance optimization techniques"]
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
    features: ["Recipe storage with ingredients and steps", "Advanced search and filtering", "Favorites and meal planning", "Image handling and storage"]
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
    features: ["Text recognition from camera and images", "Face detection and analysis", "Barcode and QR code scanning", "Real-time processing optimization"]
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
    features: ["Daily quote delivery with notifications", "Quote sharing and favorites", "Clean Architecture implementation", "Offline quote storage and caching"]
  }];
  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);
  const getStatusColor = status => {
    switch (status) {
      case 'Completed':
        return '#10b981';
      case 'In Development':
        return '#3b82f6';
      case 'Ongoing':
        return '#f59e0b';
      case 'Experimental':
        return '#8b5cf6';
      case 'Learning Project':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  // Simple ProjectCard Component
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      style: {
        height: "auto",
        display: "flex",
        flexDirection: "column",
        padding: isMobile ? "1.5rem" : "2rem",
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered ? "0 12px 40px rgba(0,0,0,0.15)" : "0 4px 6px rgba(0,0,0,0.05)"
      },
      onMouseEnter: () => !isMobile && setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1rem",
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
        fontSize: isMobile ? "2.5rem" : "3rem",
        flexShrink: 0,
        transition: "transform 0.3s ease",
        cursor: "pointer",
        transform: isHovered ? "scale(1.1)" : "scale(1)"
      }
    }, project.image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      style: {
        fontSize: isMobile ? "1.2rem" : "1.4rem",
        fontWeight: "600",
        color: "#1f2937",
        marginBottom: "0.5rem",
        lineHeight: "1.2"
      }
    }, project.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "inline-block",
        background: getStatusColor(project.status),
        color: "white",
        padding: "0.25rem 0.75rem",
        borderRadius: "12px",
        fontSize: "0.75rem",
        fontWeight: "600",
        position: "relative"
      }
    }, project.status)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        fontSize: isMobile ? "0.9rem" : "1rem",
        color: "#4b5563",
        lineHeight: "1.6",
        marginBottom: "1.5rem"
      }
    }, project.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: "1.5rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
      style: {
        fontSize: "0.9rem",
        fontWeight: "600",
        color: "#374151",
        marginBottom: "0.75rem"
      }
    }, "Project Highlights:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem"
      }
    }, project.highlights.map(highlight => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: highlight,
      style: {
        background: "#34a853",
        color: "white",
        padding: "0.25rem 0.75rem",
        borderRadius: "12px",
        fontSize: "0.75rem",
        fontWeight: "500",
        cursor: "default",
        display: "inline-block"
      }
    }, highlight)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: "1.5rem"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem"
      }
    }, project.technologies.map(tech => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      key: tech,
      style: {
        background: "#f3f4f6",
        color: "#374151",
        padding: "0.25rem 0.75rem",
        borderRadius: "12px",
        fontSize: "0.75rem",
        fontWeight: "500",
        cursor: "default",
        display: "inline-block"
      }
    }, tech)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        marginBottom: "1.5rem",
        flex: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => setIsExpanded(!isExpanded),
      style: {
        background: "none",
        border: "none",
        fontSize: "0.9rem",
        fontWeight: "600",
        color: "#374151",
        marginBottom: "0.75rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: 0
      }
    }, "Key Features:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        transition: "transform 0.3s ease",
        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)"
      }
    }, "\u25BC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxHeight: isExpanded ? "200px" : "80px",
        overflow: "hidden",
        transition: "max-height 0.4s ease"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      style: {
        fontSize: "0.85rem",
        color: "#6b7280",
        lineHeight: "1.5",
        paddingLeft: "1rem",
        margin: 0
      }
    }, project.features.map((feature, featureIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: featureIndex,
      style: {
        marginBottom: "0.25rem",
        opacity: isExpanded ? 1 : featureIndex < 2 ? 1 : 0.3,
        transition: "opacity 0.3s ease"
      }
    }, feature))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        gap: "1rem",
        marginTop: "auto",
        flexDirection: isMobile ? "column" : "row"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "primary",
      style: {
        background: "#1f2937",
        flex: 1
      },
      onClick: () => window.open(project.githubUrl, '_blank')
    }, "\uD83D\uDC19 View Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: "secondary",
      style: {
        flex: 1
      },
      onClick: () => {/* Handle demo/preview */}
    }, "\uD83D\uDCF1 Preview")));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem 2rem",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: isMobile ? "2rem" : "3rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: isMobile ? "2rem" : "3rem",
      marginBottom: "1rem",
      fontWeight: "700",
      color: "#1f2937"
    }
  }, "My Android Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "1rem" : "1.2rem",
      color: "#6b7280",
      maxWidth: "600px",
      margin: "0 auto",
      lineHeight: "1.6"
    }
  }, "Personal projects showcasing Android development skills, learning journey, and exploration of modern Android technologies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: isMobile ? "0.5rem" : "1rem",
      marginBottom: isMobile ? "2rem" : "3rem",
      flexWrap: "wrap",
      padding: isMobile ? "0 0.5rem" : "0"
    }
  }, Object.entries(categories).map(([key, label]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    key: key,
    onClick: () => setSelectedCategory(key),
    style: {
      background: selectedCategory === key ? "#34a853" : "transparent",
      color: selectedCategory === key ? "white" : "#6b7280",
      border: selectedCategory === key ? "none" : "2px solid #e5e7eb",
      padding: isMobile ? "0.5rem 1rem" : "0.75rem 1.5rem",
      borderRadius: "25px",
      fontSize: isMobile ? "0.8rem" : "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      minWidth: isMobile ? "auto" : "120px",
      textAlign: "center",
      boxShadow: selectedCategory === key ? "0 4px 12px rgba(52, 168, 83, 0.3)" : "none"
    },
    onMouseEnter: e => {
      if (!isMobile && selectedCategory !== key) {
        e.target.style.transform = "translateY(-2px)";
        e.target.style.borderColor = "#34a853";
      }
    },
    onMouseLeave: e => {
      if (selectedCategory !== key) {
        e.target.style.transform = "translateY(0)";
        e.target.style.borderColor = "#e5e7eb";
      }
    }
  }, label))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "repeat(auto-fit, minmax(400px, 1fr))",
      gap: isMobile ? "1.5rem" : "2rem",
      marginBottom: "3rem"
    }
  }, filteredProjects.map((project, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectCard, {
    key: project.id,
    project: project,
    index: index
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "3rem",
      background: "#f8fafc",
      borderRadius: "16px",
      padding: isMobile ? "1.5rem" : "2rem",
      border: "1px solid #e2e8f0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: isMobile ? "1.2rem" : "1.5rem",
      fontWeight: "600",
      color: "#1f2937",
      textAlign: "center",
      marginBottom: "2rem"
    }
  }, "My Android Learning Journey"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
      gap: isMobile ? "1.5rem" : "2rem",
      textAlign: "center"
    }
  }, [{
    number: "6",
    label: "Projects Built"
  }, {
    number: "8+",
    label: "Technologies Learned"
  }, {
    number: "2+",
    label: "Years Learning"
  }, {
    number: "100%",
    label: "Passion Driven"
  }].map((stat, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "2rem" : "2.5rem",
      fontWeight: "700",
      color: "#34a853",
      marginBottom: "0.5rem",
      transition: "transform 0.3s ease",
      cursor: "default"
    },
    onMouseEnter: e => {
      if (!isMobile) {
        e.target.style.transform = "scale(1.1)";
      }
    },
    onMouseLeave: e => {
      e.target.style.transform = "scale(1)";
    }
  }, stat.number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: isMobile ? "0.8rem" : "0.9rem",
      color: "#6b7280",
      fontWeight: "500"
    }
  }, stat.label))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioSection);

/***/ }),

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
/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/card */ "./src/components/ui/card.js");



const WritingSection = () => {
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Check if we're on the client side
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  const androidBlogPosts = [{
    title: "Building Custom Views with Jetpack Compose",
    excerpt: "Learn how to create reusable custom UI components using Jetpack Compose's powerful composition model.",
    date: "Dec 15, 2024",
    readTime: "10 min read",
    category: "Jetpack Compose"
  }, {
    title: "Clean Architecture in Android Apps",
    excerpt: "Implementing MVVM pattern with Repository and UseCase layers for maintainable Android applications.",
    date: "Nov 28, 2024",
    readTime: "15 min read",
    category: "Architecture"
  }, {
    title: "Advanced Kotlin Coroutines in Android",
    excerpt: "Mastering async programming with coroutines, flows, and structured concurrency in Android development.",
    date: "Nov 15, 2024",
    readTime: "12 min read",
    category: "Kotlin"
  }, {
    title: "Room Database Best Practices",
    excerpt: "Efficient local data storage with Room, including migrations, relationships, and performance optimization.",
    date: "Oct 30, 2024",
    readTime: "8 min read",
    category: "Database"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: isMobile ? "2rem" : "3rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: isMobile ? "2rem" : "3rem",
      marginBottom: "1rem",
      fontWeight: "700",
      color: "#1f2937"
    }
  }, "Android Development Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: isMobile ? "1rem" : "1.2rem",
      color: "#6b7280"
    }
  }, "Tutorials, tips, and insights from Android development")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: isMobile ? "1.5rem" : "2rem"
    }
  }, androidBlogPosts.map((post, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    onClick: () => {/* Handle blog post click */},
    style: {
      height: "auto",
      minHeight: isMobile ? "auto" : "250px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "inline-block",
      background: "#34a853",
      color: "white",
      padding: "0.25rem 0.75rem",
      borderRadius: "4px",
      fontSize: "0.75rem",
      fontWeight: "600",
      marginBottom: "1rem"
    }
  }, post.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: {
      fontSize: isMobile ? "1.1rem" : "1.3rem",
      marginBottom: "1rem",
      fontWeight: "600",
      color: "#1f2937",
      lineHeight: "1.3"
    }
  }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      color: "#6b7280",
      lineHeight: "1.5",
      fontSize: isMobile ? "0.9rem" : "1rem"
    }
  }, post.excerpt)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "0.8rem",
      color: "#9ca3af",
      fontWeight: "500",
      marginTop: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, post.date, " \u2022 ", post.readTime), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: "1.2rem",
      color: "#34a853"
    }
  }, "\u2192"))))));
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// src/components/UI/Button.js

const Button = ({
  children,
  variant = "primary",
  onClick,
  style = {},
  disabled = false,
  ...props
}) => {
  const {
    0: isHovered,
    1: setIsHovered
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isPressed,
    1: setIsPressed
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const handleMouseEnter = () => {
    if (!isMobile && !disabled) {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };
  const handleMouseDown = () => {
    if (!disabled) {
      setIsPressed(true);
    }
  };
  const handleMouseUp = () => {
    setIsPressed(false);
  };

  // Define base styles that don't change
  const baseStyle = {
    border: "none",
    padding: isMobile ? "0.75rem 1.5rem" : "1rem 2rem",
    fontSize: isMobile ? "0.9rem" : "1rem",
    borderRadius: "8px",
    cursor: disabled ? "not-allowed" : "pointer",
    fontWeight: "600",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    userSelect: "none",
    outline: "none",
    textDecoration: "none",
    // Smooth transition for all properties
    transition: "all 0.2s ease-in-out",
    opacity: disabled ? 0.6 : 1,
    // Transform for press effect
    transform: isPressed ? "translateY(1px) scale(0.98)" : isHovered ? "translateY(-1px)" : "translateY(0px)",
    // Shadow effects
    boxShadow: isPressed ? "0 2px 4px rgba(0,0,0,0.1)" : isHovered ? "0 6px 20px rgba(0,0,0,0.15)" : "0 2px 8px rgba(0,0,0,0.1)",
    ...style
  };

  // Define variant styles with consistent colors
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: isHovered && !disabled ? "#2563eb" : "#3b82f6",
          color: "white",
          border: "2px solid transparent"
        };
      case 'secondary':
        return {
          backgroundColor: isHovered && !disabled ? "#f9fafb" : "transparent",
          color: isHovered && !disabled ? "#1f2937" : "#374151",
          border: `2px solid ${isHovered && !disabled ? "#9ca3af" : "#d1d5db"}`
        };
      case 'android':
        return {
          backgroundColor: isHovered && !disabled ? "#16a34a" : "#22c55e",
          color: "white",
          border: "2px solid transparent"
        };
      default:
        return {
          backgroundColor: isHovered && !disabled ? "#2563eb" : "#3b82f6",
          color: "white",
          border: "2px solid transparent"
        };
    }
  };
  const variantStyles = getVariantStyles();
  const finalStyles = {
    ...baseStyle,
    ...variantStyles
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", Object.assign({
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onFocus: handleMouseEnter,
    onBlur: handleMouseLeave,
    onClick: onClick,
    disabled: disabled,
    style: finalStyles
  }, props), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/ui/card.js":
/*!***********************************!*\
  !*** ./src/components/ui/card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// src/components/UI/Card.js

const Card = ({
  children,
  style = {},
  onClick,
  hover = true,
  ...props
}) => {
  const {
    0: isHovered,
    1: setIsHovered
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const handleMouseEnter = () => {
    if (hover && !isMobile) {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const baseStyle = {
    background: "white",
    padding: isMobile ? "1.5rem" : "2rem",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    cursor: onClick ? "pointer" : "default",
    position: "relative",
    // Smooth transitions
    transition: "all 0.3s ease",
    // Transform and shadow effects
    transform: isHovered ? "translateY(-4px)" : "translateY(0px)",
    boxShadow: isHovered ? "0 12px 40px rgba(0,0,0,0.15)" : "0 2px 8px rgba(0,0,0,0.08)",
    // Border color change on hover
    borderColor: isHovered ? "#d1d5db" : "#e2e8f0",
    ...style
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", Object.assign({
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: onClick,
    style: baseStyle
  }, props), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

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

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/layout */ "./src/components/layout/layout.js");
/* harmony import */ var _components_sections_homeSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sections/homeSection */ "./src/components/sections/homeSection.js");
/* harmony import */ var _components_sections_aboutSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sections/aboutSection */ "./src/components/sections/aboutSection.js");
/* harmony import */ var _components_sections_writingSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections/writingSection */ "./src/components/sections/writingSection.js");
/* harmony import */ var _components_sections_contactSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/contactSection */ "./src/components/sections/contactSection.js");
/* harmony import */ var _components_sections_portfolioSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/sections/portfolioSection */ "./src/components/sections/portfolioSection.js");







const IndexPage = () => {
  const {
    0: activeSection,
    1: setActiveSection
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('home');
  const sections = {
    home: 'Home',
    about: 'About',
    writing: 'Writing',
    contact: 'Contact',
    portfolio: "Portfolio"
  };
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_homeSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
          setActiveSection: setActiveSection
        });
      case 'about':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_aboutSection__WEBPACK_IMPORTED_MODULE_3__["default"], null);
      case 'writing':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_writingSection__WEBPACK_IMPORTED_MODULE_4__["default"], null);
      case 'contact':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_contactSection__WEBPACK_IMPORTED_MODULE_5__["default"], null);
      case 'portfolio':
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_portfolioSection__WEBPACK_IMPORTED_MODULE_6__["default"], null);
      default:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_sections_homeSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
          setActiveSection: setActiveSection
        });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activeSection: activeSection,
    setActiveSection: setActiveSection,
    sections: sections
  }, renderContent());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map