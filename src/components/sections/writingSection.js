import React from "react"
import Card from "../ui/card"

const WritingSection = () => {
  const blogPosts = [
    {
      title: "Understanding Modern React Patterns",
      excerpt: "A comprehensive guide to the latest React patterns and best practices for building scalable applications.",
      date: "Dec 15, 2024",
      readTime: "8 min read"
    },
    {
      title: "Building Performant Node.js APIs",
      excerpt: "Essential techniques for creating fast, scalable, and maintainable backend services with Node.js.",
      date: "Nov 28, 2024",
      readTime: "12 min read"
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends, tools, and methodologies shaping the next generation of web applications.",
      date: "Nov 15, 2024",
      readTime: "6 min read"
    },
    {
      title: "Microservices Architecture Guide",
      excerpt: "Lessons learned from implementing microservices at scale, including common pitfalls and solutions.",
      date: "Oct 30, 2024",
      readTime: "15 min read"
    }
  ]

  return (
    <div style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "3rem 2rem",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <div style={{ 
        textAlign: "center",
        marginBottom: "3rem"
      }}>
        <h2 style={{ 
          fontSize: "3rem", 
          marginBottom: "1rem",
          fontWeight: "700",
          color: "#1f2937"
        }}>
          Latest Writing
        </h2>
        <p style={{ 
          fontSize: "1.2rem", 
          color: "#6b7280"
        }}>
          Thoughts on technology, development, and design
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2rem"
      }}>
        {blogPosts.map((post, index) => (
          <Card 
            key={index}
            onClick={() => {/* Handle blog post click */}}
            style={{
              height: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <h4 style={{ 
                fontSize: "1.3rem", 
                marginBottom: "1rem",
                fontWeight: "600",
                color: "#1f2937",
                lineHeight: "1.3"
              }}>
                {post.title}
              </h4>
              <p style={{ 
                color: "#6b7280",
                lineHeight: "1.5",
                fontSize: "1rem"
              }}>
                {post.excerpt}
              </p>
            </div>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.85rem",
              color: "#9ca3af",
              fontWeight: "500",
              marginTop: "1rem"
            }}>
              <span>{post.date} • {post.readTime}</span>
              <span style={{ fontSize: "1.2rem", color: "#3b82f6" }}>→</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default WritingSection