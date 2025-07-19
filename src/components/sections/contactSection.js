import React from "react"
import Card from "../ui/card"

const ContactSection = () => {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      description: "kartik@example.com",
      href: "mailto:kartik@example.com"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Connect with me",
      href: "https://linkedin.com/in/kartikbhargava"
    },
    {
      icon: "🐙",
      title: "GitHub",
      description: "See my projects",
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
        Let's Work Together
      </h2>
      <p style={{ 
        fontSize: "1.2rem", 
        marginBottom: "3rem",
        color: "#6b7280",
        lineHeight: "1.6"
      }}>
        I'm always interested in new opportunities and interesting projects. 
        Feel free to reach out if you'd like to collaborate or just say hello!
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

      <Card style={{
        background: "#f8fafc",
        textAlign: "center"
      }}>
        <h3 style={{ fontSize: "1.3rem", fontWeight: "600", color: "#1f2937", marginBottom: "1rem" }}>
          Response Time
        </h3>
        <p style={{ fontSize: "1rem", color: "#6b7280" }}>
          I typically respond to emails within 24 hours. For urgent matters, 
          feel free to reach out on LinkedIn.
        </p>
      </Card>
    </div>
  )
}

export default ContactSection