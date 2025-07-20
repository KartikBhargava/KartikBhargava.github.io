import React from "react"
import Card from "../ui/card"

const ContactSection = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "bhargava.kartik07@gmail.com",
      href: "mailto:bhargava.kartik07@gmail.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Connect professionally",
      href: "https://linkedin.com/in/kartik-bhargava-39586611b"
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
      padding: "3rem 2rem",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center"
    }}>
      <h2 style={{ 
        fontSize: "3rem", 
        marginBottom: "1.5rem",
        fontWeight: "700",
        color: "#1f2937"
      }}>
        Let's Build Something Amazing
      </h2>
      <p style={{ 
        fontSize: "1.2rem", 
        marginBottom: "3rem",
        color: "#6b7280",
        lineHeight: "1.6"
      }}>
        Looking for an Android developer for your next project? I'm always interested 
        in exciting Android opportunities and challenging mobile app projects.
      </p>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
        marginBottom: "3rem"
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
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.2s ease"
            }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                {method.icon}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                {method.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                {method.description}
              </p>
            </Card>
          </a>
        ))}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem"
      }}>
        <Card style={{
          background: "#f8fafc",
          textAlign: "center"
        }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#1f2937", marginBottom: "1rem" }}>
            Response Time
          </h3>
          <p style={{ fontSize: "1rem", color: "#6b7280" }}>
            I typically respond within 24 hours. For urgent Android projects, 
            LinkedIn is the fastest way to reach me.
          </p>
        </Card>
        
        <Card style={{
          background: "#34a853",
          color: "white",
          textAlign: "center"
        }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "1rem" }}>
            Availability
          </h3>
          <p style={{ fontSize: "1rem", opacity: "0.9" }}>
            Open to freelance Android projects. 
            Remote work preferred.
          </p>
        </Card>
      </div>
    </div>
  )
}

export default ContactSection