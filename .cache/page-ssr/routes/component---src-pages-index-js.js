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
      padding: "0 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#1f2937",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\uD83E\uDD16"), "Kartik Bhargava"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    style: {
      display: "flex",
      gap: "0.5rem"
    }
  }, Object.entries(sections).map(([key, label]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    key: key,
    onClick: () => setActiveSection(key),
    style: {
      color: activeSection === key ? "#34a853" : "#6b7280",
      background: activeSection === key ? "rgba(52, 168, 83, 0.1)" : "transparent",
      border: "none",
      padding: "0.75rem 1.5rem",
      borderRadius: "8px",
      fontSize: "0.95rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease"
    }
  }, label)))));
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
      background: "#fafafa"
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
      padding: "3rem 2rem",
      height: "100%",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "4rem",
      alignItems: "center",
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: "3rem",
      marginBottom: "2rem",
      fontWeight: "700",
      color: "#1f2937"
    }
  }, "About Me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "1.2rem",
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
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "1rem"
    }
  }, "Android Expertise"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
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
      padding: "2rem",
      border: "1px solid #e2e8f0",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "2rem"
    }
  }, "Quick Facts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }
  }, quickFacts.map((fact, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "1.8rem",
      fontWeight: "700",
      color: "#34a853"
    }
  }, fact.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280",
      marginTop: "0.5rem"
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
      fontSize: "1.2rem",
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
  const contactMethods = [{
    icon: "📧",
    title: "Email",
    description: "bhargava.kartik07@gmail.com",
    href: "mailto:bhargava.kartik07@gmail.com"
  }, {
    icon: "💼",
    title: "LinkedIn",
    description: "Connect professionally",
    href: "www.linkedin.com/in/kartik-bhargava-39586611b"
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
      padding: "3rem 2rem",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: "3rem",
      marginBottom: "1.5rem",
      fontWeight: "700",
      color: "#1f2937"
    }
  }, "Let's Build Something Amazing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1.2rem",
      marginBottom: "3rem",
      color: "#6b7280",
      lineHeight: "1.6"
    }
  }, "Looking for an Android developer for your next project? I'm always interested in exciting Android opportunities and challenging mobile app projects."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2rem",
      marginBottom: "3rem"
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
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      transition: "all 0.2s ease"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2.5rem",
      marginBottom: "1rem"
    }
  }, method.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "1.1rem",
      fontWeight: "600",
      marginBottom: "0.5rem"
    }
  }, method.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280"
    }
  }, method.description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      background: "#f8fafc",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "1rem"
    }
  }, "Response Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1rem",
      color: "#6b7280"
    }
  }, "I typically respond within 24 hours. For urgent Android projects, LinkedIn is the fastest way to reach me.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      background: "#34a853",
      color: "white",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "1.3rem",
      fontWeight: "600",
      marginBottom: "1rem"
    }
  }, "Availability"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1rem",
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4rem",
      alignItems: "center",
      height: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "inline-block",
      background: "#34a853",
      // Android green
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      fontSize: "0.85rem",
      fontWeight: "600",
      marginBottom: "2rem"
    }
  }, "\uD83E\uDD16 Open to Android Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    style: {
      fontSize: "3.5rem",
      marginBottom: "1.5rem",
      fontWeight: "700",
      lineHeight: "1.1",
      color: "#1f2937"
    }
  }, "Hi, I'm Kartik"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: "2rem",
      marginBottom: "2rem",
      fontWeight: "400",
      color: "#6b7280",
      lineHeight: "1.3"
    }
  }, "Android Developer & Mobile App Architect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1.2rem",
      marginBottom: "3rem",
      color: "#4b5563",
      lineHeight: "1.6",
      maxWidth: "500px"
    }
  }, "I craft native Android applications that deliver exceptional user experiences. Passionate about clean architecture, modern Android development, and building apps that users love."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "primary",
    style: {
      background: "#34a853"
    }
  }, "View My Apps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "secondary",
    onClick: () => setActiveSection('writing')
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
      padding: "3rem",
      textAlign: "center",
      border: "1px solid #e2e8f0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "6rem",
      marginBottom: "2rem"
    }
  }, "\uD83D\uDCF1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "2rem",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#34a853",
      marginBottom: "0.5rem"
    }
  }, "5+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280",
      fontWeight: "500"
    }
  }, "Years Android Dev")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#34a853",
      marginBottom: "0.5rem"
    }
  }, "25+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.9rem",
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
  const ProjectCard = ({
    project
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      height: "auto",
      display: "flex",
      flexDirection: "column",
      transition: "all 0.2s ease"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "3rem"
    }
  }, project.image), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "#1f2937",
      marginBottom: "0.5rem"
    }
  }, project.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "inline-block",
      background: getStatusColor(project.status),
      color: "white",
      padding: "0.25rem 0.75rem",
      borderRadius: "12px",
      fontSize: "0.75rem",
      fontWeight: "600"
    }
  }, project.status)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1rem",
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
      fontWeight: "500"
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
      fontWeight: "500"
    }
  }, tech)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: "1.5rem",
      flex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: {
      fontSize: "0.9rem",
      fontWeight: "600",
      color: "#374151",
      marginBottom: "0.75rem"
    }
  }, "Key Features:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: {
      fontSize: "0.85rem",
      color: "#6b7280",
      lineHeight: "1.5",
      paddingLeft: "1rem",
      margin: 0
    }
  }, project.features.slice(0, 3).map((feature, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    key: index,
    style: {
      marginBottom: "0.25rem"
    }
  }, feature)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      marginTop: "auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "primary",
    style: {
      background: "#1f2937",
      padding: "0.75rem 1.5rem",
      fontSize: "0.9rem",
      flex: 1
    },
    onClick: () => window.open(project.githubUrl, '_blank')
  }, "\uD83D\uDC19 View Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "secondary",
    style: {
      padding: "0.75rem 1.5rem",
      fontSize: "0.9rem",
      flex: 1
    },
    onClick: () => {/* Handle demo/preview */}
  }, "\uD83D\uDCF1 Preview")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "3rem 2rem",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "3rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: "3rem",
      marginBottom: "1rem",
      fontWeight: "700",
      color: "#1f2937"
    }
  }, "My Android Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1.2rem",
      color: "#6b7280",
      maxWidth: "600px",
      margin: "0 auto"
    }
  }, "Personal projects showcasing Android development skills, learning journey, and exploration of modern Android technologies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      marginBottom: "3rem"
    }
  }, Object.entries(categories).map(([key, label]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    key: key,
    onClick: () => setSelectedCategory(key),
    style: {
      background: selectedCategory === key ? "#34a853" : "transparent",
      color: selectedCategory === key ? "white" : "#6b7280",
      border: selectedCategory === key ? "none" : "2px solid #e5e7eb",
      padding: "0.75rem 1.5rem",
      borderRadius: "25px",
      fontSize: "0.9rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease"
    }
  }, label))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "2rem",
      flex: 1,
      alignContent: "start"
    }
  }, filteredProjects.map(project => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectCard, {
    key: project.id,
    project: project
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: "3rem",
      background: "#f8fafc",
      borderRadius: "16px",
      padding: "2rem",
      border: "1px solid #e2e8f0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      fontSize: "1.5rem",
      fontWeight: "600",
      color: "#1f2937",
      textAlign: "center",
      marginBottom: "2rem"
    }
  }, "My Android Learning Journey"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "2rem",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#34a853",
      marginBottom: "0.5rem"
    }
  }, "6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280",
      fontWeight: "500"
    }
  }, "Projects Built")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#34a853",
      marginBottom: "0.5rem"
    }
  }, "8+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280",
      fontWeight: "500"
    }
  }, "Technologies Learned")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#34a853",
      marginBottom: "0.5rem"
    }
  }, "2+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280",
      fontWeight: "500"
    }
  }, "Years Learning")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#34a853",
      marginBottom: "0.5rem"
    }
  }, "100%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280",
      fontWeight: "500"
    }
  }, "Passion Driven")))));
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
      padding: "3rem 2rem",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "3rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      fontSize: "3rem",
      marginBottom: "1rem",
      fontWeight: "700",
      color: "#1f2937"
    }
  }, "Android Development Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1.2rem",
      color: "#6b7280"
    }
  }, "Tutorials, tips, and insights from Android development")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "2rem"
    }
  }, androidBlogPosts.map((post, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    onClick: () => {/* Handle blog post click */},
    style: {
      height: "250px",
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
      fontSize: "1.3rem",
      marginBottom: "1rem",
      fontWeight: "600",
      color: "#1f2937",
      lineHeight: "1.3"
    }
  }, post.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      color: "#6b7280",
      lineHeight: "1.5",
      fontSize: "1rem"
    }
  }, post.excerpt)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "0.85rem",
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

const Button = ({
  children,
  variant = "primary",
  onClick,
  style = {},
  ...props
}) => {
  const baseStyle = {
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.2s ease",
    ...style
  };
  const variants = {
    primary: {
      background: "#3b82f6",
      color: "white"
    },
    secondary: {
      background: "transparent",
      color: "#374151",
      border: "2px solid #d1d5db"
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", Object.assign({
    onClick: onClick,
    style: {
      ...baseStyle,
      ...variants[variant]
    }
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

const Card = ({
  children,
  style = {},
  onClick,
  ...props
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", Object.assign({
    onClick: onClick,
    style: {
      background: "white",
      padding: "2rem",
      borderRadius: "12px",
      border: "1px solid #e2e8f0",
      cursor: onClick ? "pointer" : "default",
      transition: "all 0.2s ease",
      ...style
    }
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