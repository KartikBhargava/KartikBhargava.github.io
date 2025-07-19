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
      color: "#1f2937"
    }
  }, "Kartik Bhargava"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    style: {
      display: "flex",
      gap: "0.5rem"
    }
  }, Object.entries(sections).map(([key, label]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    key: key,
    onClick: () => setActiveSection(key),
    style: {
      color: activeSection === key ? "#3b82f6" : "#6b7280",
      background: activeSection === key ? "#eff6ff" : "transparent",
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
    icon: "☕",
    label: "Coffee Enthusiast"
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
  }, "I'm a passionate full-stack developer with over 5 years of experience building scalable web applications and digital solutions. I love working with modern technologies and helping businesses transform their ideas into reality."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      marginBottom: "1.5rem"
    }
  }, "When I'm not coding, you'll find me writing technical articles, contributing to open source projects, or exploring the latest trends in web development."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "I believe in writing clean, maintainable code and creating user experiences that truly matter.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Skills & Expertise"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Frontend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280"
    }
  }, "React, Next.js, TypeScript, Tailwind CSS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    style: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "#374151",
      marginBottom: "0.5rem"
    }
  }, "Backend"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280"
    }
  }, "Node.js, Python, PostgreSQL, MongoDB"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
      color: "#3b82f6"
    }
  }, fact.icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280",
      marginTop: "0.5rem"
    }
  }, fact.label)))))));
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
    description: "kartik@example.com",
    href: "mailto:kartik@example.com"
  }, {
    icon: "💼",
    title: "LinkedIn",
    description: "Connect with me",
    href: "https://linkedin.com/in/kartikbhargava"
  }, {
    icon: "🐙",
    title: "GitHub",
    description: "See my projects",
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
  }, "Let's Work Together"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1.2rem",
      marginBottom: "3rem",
      color: "#6b7280",
      lineHeight: "1.6"
    }
  }, "I'm always interested in new opportunities and interesting projects. Feel free to reach out if you'd like to collaborate or just say hello!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, method.description))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  }, "I typically respond to emails within 24 hours. For urgent matters, feel free to reach out on LinkedIn.")));
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
  const technologies = ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker"];
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
      background: "#3b82f6",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      fontSize: "0.85rem",
      fontWeight: "600",
      marginBottom: "2rem"
    }
  }, "\u2728 Available for work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
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
  }, "Full Stack Developer & Tech Enthusiast"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1.2rem",
      marginBottom: "3rem",
      color: "#4b5563",
      lineHeight: "1.6",
      maxWidth: "500px"
    }
  }, "I build digital experiences that matter. Passionate about clean code, user-centered design, and sharing knowledge with the developer community."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      gap: "1rem",
      marginBottom: "2rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "primary"
  }, "View My Work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "secondary",
    onClick: () => setActiveSection('writing')
  }, "Read Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Technologies I work with:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.75rem"
    }
  }, technologies.map(tech => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_techPill__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, "\uD83D\uDC68\u200D\uD83D\uDCBB"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
      color: "#3b82f6",
      marginBottom: "0.5rem"
    }
  }, "5+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280",
      fontWeight: "500"
    }
  }, "Years Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#3b82f6",
      marginBottom: "0.5rem"
    }
  }, "50+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: "0.9rem",
      color: "#6b7280",
      fontWeight: "500"
    }
  }, "Projects Built")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeSection);

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
  const blogPosts = [{
    title: "Understanding Modern React Patterns",
    excerpt: "A comprehensive guide to the latest React patterns and best practices for building scalable applications.",
    date: "Dec 15, 2024",
    readTime: "8 min read"
  }, {
    title: "Building Performant Node.js APIs",
    excerpt: "Essential techniques for creating fast, scalable, and maintainable backend services with Node.js.",
    date: "Nov 28, 2024",
    readTime: "12 min read"
  }, {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends, tools, and methodologies shaping the next generation of web applications.",
    date: "Nov 15, 2024",
    readTime: "6 min read"
  }, {
    title: "Microservices Architecture Guide",
    excerpt: "Lessons learned from implementing microservices at scale, including common pitfalls and solutions.",
    date: "Oct 30, 2024",
    readTime: "15 min read"
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
  }, "Latest Writing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "1.2rem",
      color: "#6b7280"
    }
  }, "Thoughts on technology, development, and design")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "2rem"
    }
  }, blogPosts.map((post, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ui_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: index,
    onClick: () => {/* Handle blog post click */},
    style: {
      height: "220px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
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
      color: "#3b82f6"
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






const IndexPage = () => {
  const {
    0: activeSection,
    1: setActiveSection
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('home');
  const sections = {
    home: 'Home',
    about: 'About',
    writing: 'Writing',
    contact: 'Contact'
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