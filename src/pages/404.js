import React from "react"

const NotFoundPage = () => {
  return (
    <div style={{ 
      padding: "2rem", 
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <a href="/" style={{ color: "#0066cc" }}>← Go back home</a>
    </div>
  )
}

export default NotFoundPage