import React from "react"
import Card from "../ui/card"

const WritingSection = () => {
  const androidBlogPosts = [
    {
      title: "Building Custom Views with Jetpack Compose",
      excerpt: "Learn how to create reusable custom UI components using Jetpack Compose's powerful composition model.",
      date: "Dec 15, 2024",
      readTime: "10 min read",
      category: "Jetpack Compose"
    },
    {
      title: "Clean Architecture in Android Apps",
      excerpt: "Implementing MVVM pattern with Repository and UseCase layers for maintainable Android applications.",
      date: "Nov 28, 2024",
      readTime: "15 min read",
      category: "Architecture"
    },
    {
      title: "Advanced Kotlin Coroutines in Android",
      excerpt: "Mastering async programming with coroutines, flows, and structured concurrency in Android development.",
      date: "Nov 15, 2024",
      readTime: "12 min read",
      category: "Kotlin"
    },
    {
      title: "Room Database Best Practices",
      excerpt: "Efficient local data storage with Room, including migrations, relationships, and performance optimization.",
      date: "Oct 30, 2024",
      readTime: "8 min read",
      category: "Database"
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
          Android Development Blog
        </h2>
        <p style={{ 
          fontSize: "1.2rem", 
          color: "#6b7280"
        }}>
          Tutorials, tips, and insights from Android development
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2rem"
      }}>
        {androidBlogPosts.map((post, index) => (
          <Card 
            key={index}
            onClick={() => {/* Handle blog post click */}}
            style={{
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{
                display: "inline-block",
                background: "#34a853",
                color: "white",
                padding: "0.25rem 0.75rem",
                borderRadius: "4px",
                fontSize: "0.75rem",
                fontWeight: "600",
                marginBottom: "1rem"
              }}>
                {post.category}
              </div>
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
              <span style={{ fontSize: "1.2rem", color: "#34a853" }}>→</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default WritingSection