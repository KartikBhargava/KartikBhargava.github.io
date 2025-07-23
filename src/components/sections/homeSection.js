import React from "react"
import Button from "../ui/buttons"
import TechPill from "../ui/techPill"
import { useEffect, useState } from 'react'

const HomeSection = ({ setActiveSection }) => {
  const androidTechnologies = [
    "Kotlin", "Java", "Jetpack Compose", "Android Studio", 
    "Firebase", "Room", "Retrofit", "Coroutines"
  ]

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

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
      gap: isMobile ? "2rem" : "4rem",
      alignItems: "center",
      height: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "2rem"
    }}>
      {/* Text Content */}
      <div style={{ order: isMobile ? 2 : 1 }}>
        <div style={{
          display: "inline-block",
          background: "#34a853",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          fontSize: "0.85rem",
          fontWeight: "600",
          marginBottom: "1.5rem"
        }}>
          🤖 Open to Android Projects
        </div>
        
        <h1 style={{ 
          fontSize: isMobile ? "2.5rem" : "3.5rem",
          marginBottom: "1rem",
          fontWeight: "700",
          lineHeight: "1.1",
          color: "#1f2937"
        }}>
          Hi, I'm Kartik
        </h1>
        
        <h2 style={{
          fontSize: isMobile ? "1.5rem" : "2rem",
          marginBottom: "1.5rem",
          fontWeight: "400",
          color: "#6b7280",
          lineHeight: "1.3"
        }}>
          Android Developer & Mobile App Architect
        </h2>
        
        <p style={{ 
          fontSize: isMobile ? "1rem" : "1.2rem",
          marginBottom: "2rem",
          color: "#4b5563",
          lineHeight: "1.6"
        }}>
          I craft native Android applications that deliver exceptional user experiences. 
          Passionate about clean architecture, modern Android development, and building 
          apps that users love.
        </p>
        
        <div style={{ 
          display: "flex", 
          gap: "1rem",
          marginBottom: "2rem",
          flexDirection: isMobile ? "column" : "row"
        }}>
          <Button variant="primary" style={{ 
            background: "#34a853",
            width: isMobile ? "100%" : "auto"
          }}>
            View My Apps
          </Button>
          <Button 
            variant="secondary"
            onClick={() => setActiveSection('writing')}
            style={{ width: isMobile ? "100%" : "auto" }}
          >
            Read Android Blog
          </Button>
        </div>

        {/* Android Tech Stack */}
        <div style={{ marginTop: "2rem" }}>
          <p style={{ 
            fontSize: "0.9rem", 
            color: "#6b7280", 
            marginBottom: "1rem",
            fontWeight: "600"
          }}>
            Android technologies I work with:
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem"
          }}>
            {androidTechnologies.map(tech => (
              <TechPill key={tech}>{tech}</TechPill>
            ))}
          </div>
        </div>
      </div>
      
      {/* Visual Element */}
      <div style={{
        background: "#f8fafc",
        borderRadius: "16px",
        padding: isMobile ? "2rem" : "3rem",
        textAlign: "center",
        border: "1px solid #e2e8f0",
        order: isMobile ? 1 : 2
      }}>
        <div style={{ 
          fontSize: isMobile ? "4rem" : "6rem",
          marginBottom: "1.5rem"
        }}>
          📱
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: isMobile ? "1rem" : "2rem",
          textAlign: "center"
        }}>
          <div>
            <div style={{ 
              fontSize: isMobile ? "2rem" : "2.5rem",
              fontWeight: "700",
              color: "#34a853",
              marginBottom: "0.5rem"
            }}>
              5+
            </div>
            <div style={{ 
              fontSize: "0.8rem", 
              color: "#6b7280",
              fontWeight: "500"
            }}>
              Years Android Dev
            </div>
          </div>
          <div>
            <div style={{ 
              fontSize: isMobile ? "2rem" : "2.5rem",
              fontWeight: "700",
              color: "#34a853",
              marginBottom: "0.5rem"
            }}>
              25+
            </div>
            <div style={{ 
              fontSize: "0.8rem", 
              color: "#6b7280",
              fontWeight: "500"
            }}>
              Apps Published
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection