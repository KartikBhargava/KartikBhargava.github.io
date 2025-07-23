import React from "react"
import { useEffect, useState } from 'react'

const AboutSection = () => {
   const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
      // Check if we're on the client side
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768)
      }
  
      // Initial check
      checkScreenSize()
  
      // Add event listener for window resize
      window.addEventListener('resize', checkScreenSize)
  
      // Cleanup
      return () => window.removeEventListener('resize', checkScreenSize)
    }, [])
  
  const quickFacts = [
    { icon: "📍", label: "Based in India" },
    { icon: "🎓", label: "Computer Science" },
    { icon: "🤖", label: "Android Enthusiast" }
  ]

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem",
      height: "100%",
      display: "flex",
      alignItems: "center"
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
        gap: isMobile ? "2rem" : "4rem",
        alignItems: "center",
        width: "100%"
      }}>
        <div style={{ order: isMobile ? 2 : 1 }}>
          <h2 style={{ 
            fontSize: isMobile ? "2rem" : "3rem",
            marginBottom: "1.5rem",
            fontWeight: "700",
            color: "#1f2937"
          }}>
            About Me
          </h2>
          
          <div style={{ 
            fontSize: isMobile ? "1rem" : "1.2rem",
            color: "#4b5563", 
            lineHeight: "1.7", 
            marginBottom: "2rem" 
          }}>
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
              fontSize: isMobile ? "1.1rem" : "1.3rem",
              fontWeight: "600", 
              color: "#1f2937", 
              marginBottom: "1rem" 
            }}>
              Android Expertise
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
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
          padding: isMobile ? "1.5rem" : "2rem",
          border: "1px solid #e2e8f0",
          textAlign: "center",
          order: isMobile ? 1 : 2
        }}>
          <h3 style={{ 
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            fontWeight: "600", 
            color: "#1f2937", 
            marginBottom: "1.5rem" 
          }}>
            Quick Facts
          </h3>
          <div style={{ 
            display: "flex", 
            flexDirection: isMobile ? "row" : "column",
            justifyContent: isMobile ? "space-around" : "center",
            gap: isMobile ? "1rem" : "1.5rem"
          }}>
            {quickFacts.map((fact, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#34a853" }}>
                  {fact.icon}
                </div>
                <p style={{ 
                  fontSize: "0.8rem", 
                  color: "#6b7280", 
                  marginTop: "0.5rem",
                  whiteSpace: isMobile ? "nowrap" : "normal"
                }}>
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
            <div style={{ fontSize: "1rem", fontWeight: "600", marginBottom: "0.5rem" }}>
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