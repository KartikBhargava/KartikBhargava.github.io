import React from "react"
import { useEffect, useState } from 'react'
import Card from "../ui/card"

const ContactSection = () => {
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
  
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "kartik.android@example.com",
      href: "mailto:kartik.android@example.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Connect professionally",
      href: "https://linkedin.com/in/kartikbhargava"
    },
    {
      icon: "🐙",
      title: "GitHub",
      description: "Android projects & libraries",
      href: "https://github.com/KartikBhargava"
    }
  ]

  return (
    <div style={{
      maxWidth: "800px",
      margin: "0 auto",
      padding: isMobile ? "2rem 1rem" : "3rem 2rem",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center"
    }}>
      <h2 style={{ 
        fontSize: isMobile ? "2rem" : "3rem",
        marginBottom: "1.5rem",
        fontWeight: "700",
        color: "#1f2937"
      }}>
        Let's Build Something Amazing
      </h2>
      <p style={{ 
        fontSize: isMobile ? "1rem" : "1.2rem",
        marginBottom: "2rem",
        color: "#6b7280",
        lineHeight: "1.6"
      }}>
        Looking for an Android developer for your next project? I'm always interested 
        in exciting Android opportunities and challenging mobile app projects.
      </p>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: isMobile ? "1rem" : "2rem",
        marginBottom: isMobile ? "2rem" : "3rem"
      }}>
        {contactMethods.map((method, index) => (
          <a 
            key={index}
            href={method.href}
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <Card style={{
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              alignItems: "center",
              textAlign: isMobile ? "left" : "center",
              gap: isMobile ? "1rem" : "0",
              padding: isMobile ? "1.5rem" : "2rem",
              transition: "all 0.2s ease"
            }}>
              <div style={{ 
                fontSize: "2rem", 
                marginBottom: isMobile ? "0" : "1rem",
                flexShrink: 0
              }}>
                {method.icon}
              </div>
              <div>
                <h3 style={{ 
                  fontSize: "1.1rem", 
                  fontWeight: "600", 
                  marginBottom: "0.5rem" 
                }}>
                  {method.title}
                </h3>
                <p style={{ 
                  fontSize: "0.9rem", 
                  color: "#6b7280",
                  margin: 0
                }}>
                  {method.description}
                </p>
              </div>
            </Card>
          </a>
        ))}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "1rem" : "2rem"
      }}>
        <Card style={{
          background: "#f8fafc",
          textAlign: "center",
          padding: isMobile ? "1.5rem" : "2rem"
        }}>
          <h3 style={{ 
            fontSize: isMobile ? "1.1rem" : "1.3rem",
            fontWeight: "600", 
            color: "#1f2937", 
            marginBottom: "1rem" 
          }}>
            Response Time
          </h3>
          <p style={{ 
            fontSize: isMobile ? "0.9rem" : "1rem",
            color: "#6b7280" 
          }}>
            I typically respond within 24 hours. For urgent Android projects, 
            LinkedIn is the fastest way to reach me.
          </p>
        </Card>
        
        <Card style={{
          background: "#34a853",
          color: "white",
          textAlign: "center",
          padding: isMobile ? "1.5rem" : "2rem"
        }}>
          <h3 style={{ 
            fontSize: isMobile ? "1.1rem" : "1.3rem",
            fontWeight: "600", 
            marginBottom: "1rem" 
          }}>
            Availability
          </h3>
          <p style={{ 
            fontSize: isMobile ? "0.9rem" : "1rem",
            opacity: "0.9" 
          }}>
            Open to freelance Android projects and full-time opportunities. 
            Remote work preferred.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default ContactSection