import React from "react"

const AboutSection = () => {
  const quickFacts = [
    { icon: "📍", label: "Based in India" },
    { icon: "🎓", label: "Computer Science" },
    { icon: "☕", label: "Coffee Enthusiast" }
  ]

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "3rem 2rem",
      height: "100%",
      display: "flex",
      alignItems: "center"
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "4rem",
        alignItems: "center",
        width: "100%"
      }}>
        <div>
          <h2 style={{ 
            fontSize: "3rem", 
            marginBottom: "2rem",
            fontWeight: "700",
            color: "#1f2937"
          }}>
            About Me
          </h2>
          
          <div style={{ fontSize: "1.2rem", color: "#4b5563", lineHeight: "1.7", marginBottom: "2rem" }}>
            <p style={{ marginBottom: "1.5rem" }}>
              I'm a passionate full-stack developer with over 5 years of experience building 
              scalable web applications and digital solutions. I love working with modern 
              technologies and helping businesses transform their ideas into reality.
            </p>
            
            <p style={{ marginBottom: "1.5rem" }}>
              When I'm not coding, you'll find me writing technical articles, contributing 
              to open source projects, or exploring the latest trends in web development.
            </p>
            
            <p>
              I believe in writing clean, maintainable code and creating user experiences 
              that truly matter.
            </p>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ 
              fontSize: "1.3rem", 
              fontWeight: "600", 
              color: "#1f2937", 
              marginBottom: "1rem" 
            }}>
              Skills & Expertise
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem"
            }}>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#374151", marginBottom: "0.5rem" }}>
                  Frontend
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#374151", marginBottom: "0.5rem" }}>
                  Backend
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  Node.js, Python, PostgreSQL, MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          background: "#f8fafc",
          borderRadius: "16px",
          padding: "2rem",
          border: "1px solid #e2e8f0",
          textAlign: "center"
        }}>
          <h3 style={{ 
            fontSize: "1.5rem", 
            fontWeight: "600", 
            color: "#1f2937", 
            marginBottom: "2rem" 
          }}>
            Quick Facts
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {quickFacts.map((fact, index) => (
              <div key={index}>
                <div style={{ fontSize: "1.8rem", fontWeight: "700", color: "#3b82f6" }}>
                  {fact.icon}
                </div>
                <p style={{ fontSize: "0.9rem", color: "#6b7280", marginTop: "0.5rem" }}>
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection