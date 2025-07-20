import React from "react"

const AboutSection = () => {
  const quickFacts = [
    { icon: "📍", label: "Based in India" },
    { icon: "🎓", label: "Computer Science" },
    { icon: "🤖", label: "Android Enthusiast" }
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
              I'm a passionate Android developer with over 5 years of experience building 
              native Android applications. I specialize in modern Android development using 
              Kotlin, Jetpack Compose, and clean architecture patterns.
            </p>
            
            <p style={{ marginBottom: "1.5rem" }}>
              From concept to Play Store, I've guided numerous apps through their entire 
              lifecycle. I love working with the latest Android technologies and creating 
              smooth, performant user experiences.
            </p>
            
            <p>
              When I'm not coding, you'll find me writing about Android development, 
              contributing to open source Android libraries, or exploring new Android features.
            </p>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ 
              fontSize: "1.3rem", 
              fontWeight: "600", 
              color: "#1f2937", 
              marginBottom: "1rem" 
            }}>
              Android Expertise
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem"
            }}>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#374151", marginBottom: "0.5rem" }}>
                  Native Android
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  Kotlin, Jetpack Compose, Material Design
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#374151", marginBottom: "0.5rem" }}>
                  Architecture & Tools
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  MVVM, Clean Architecture, Room, Retrofit
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#374151", marginBottom: "0.5rem" }}>
                  Backend Integration
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  REST APIs, Firebase, GraphQL, Coroutines
                </p>
              </div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: "600", color: "#374151", marginBottom: "0.5rem" }}>
                  Testing & CI/CD
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  JUnit, Espresso, GitHub Actions, Play Console
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
                <div style={{ fontSize: "1.8rem", fontWeight: "700", color: "#34a853" }}>
                  {fact.icon}
                </div>
                <p style={{ fontSize: "0.9rem", color: "#6b7280", marginTop: "0.5rem" }}>
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
          
          {/* Android Version Badge */}
          <div style={{
            marginTop: "2rem",
            padding: "1rem",
            background: "#34a853",
            borderRadius: "8px",
            color: "white"
          }}>
            <div style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem" }}>
              Latest Target
            </div>
            <div style={{ fontSize: "0.9rem" }}>
              Android 14 (API 34)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection