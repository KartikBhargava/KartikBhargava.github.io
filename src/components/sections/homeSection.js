import React from "react"
import Button from "../ui/buttons"
import TechPill from "../ui/techPill"

const HomeSection = ({ setActiveSection }) => {
  const technologies = ["React", "Node.js", "TypeScript", "Python", "AWS", "Docker"]

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4rem",
      alignItems: "center",
      height: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem"
    }}>
      {/* Left Column - Text Content */}
      <div>
        <div style={{
          display: "inline-block",
          background: "#3b82f6",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          fontSize: "0.85rem",
          fontWeight: "600",
          marginBottom: "2rem"
        }}>
          ✨ Available for work
        </div>
        
        <h1 style={{ 
          fontSize: "3.5rem", 
          marginBottom: "1.5rem",
          fontWeight: "700",
          lineHeight: "1.1",
          color: "#1f2937"
        }}>
          Hi, I'm Kartik
        </h1>
        
        <h2 style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          fontWeight: "400",
          color: "#6b7280",
          lineHeight: "1.3"
        }}>
          Full Stack Developer & Tech Enthusiast
        </h2>
        
        <p style={{ 
          fontSize: "1.2rem", 
          marginBottom: "3rem",
          color: "#4b5563",
          lineHeight: "1.6",
          maxWidth: "500px"
        }}>
          I build digital experiences that matter. Passionate about clean code, 
          user-centered design, and sharing knowledge with the developer community.
        </p>
        
        <div style={{ 
          display: "flex", 
          gap: "1rem",
          marginBottom: "2rem"
        }}>
          <Button variant="primary">
            View My Work
          </Button>
          <Button 
            variant="secondary"
            onClick={() => setActiveSection('writing')}
          >
            Read Blog
          </Button>
        </div>

        {/* Tech Stack */}
        <div style={{ marginTop: "2rem" }}>
          <p style={{ 
            fontSize: "0.9rem", 
            color: "#6b7280", 
            marginBottom: "1rem",
            fontWeight: "600"
          }}>
            Technologies I work with:
          </p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem"
          }}>
            {technologies.map(tech => (
              <TechPill key={tech}>{tech}</TechPill>
            ))}
          </div>
        </div>
      </div>
      
      {/* Right Column - Visual Element */}
      <div style={{
        background: "#f8fafc",
        borderRadius: "16px",
        padding: "3rem",
        textAlign: "center",
        border: "1px solid #e2e8f0"
      }}>
        <div style={{ 
          fontSize: "6rem", 
          marginBottom: "2rem"
        }}>
          👨‍💻
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          textAlign: "center"
        }}>
          <div>
            <div style={{ 
              fontSize: "2.5rem", 
              fontWeight: "700",
              color: "#3b82f6",
              marginBottom: "0.5rem"
            }}>
              5+
            </div>
            <div style={{ 
              fontSize: "0.9rem", 
              color: "#6b7280",
              fontWeight: "500"
            }}>
              Years Experience
            </div>
          </div>
          <div>
            <div style={{ 
              fontSize: "2.5rem", 
              fontWeight: "700",
              color: "#3b82f6",
              marginBottom: "0.5rem"
            }}>
              50+
            </div>
            <div style={{ 
              fontSize: "0.9rem", 
              color: "#6b7280",
              fontWeight: "500"
            }}>
              Projects Built
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection