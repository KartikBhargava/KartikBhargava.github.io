import React, { useState } from "react"
import Layout from "../components/layout/layout"
import HomeSection from "../components/sections/homeSection"
import AboutSection from "../components/sections/aboutSection"
import WritingSection from "../components/sections/writingSection"
import ContactSection from "../components/sections/contactSection"
import PortfolioSection from "../components/sections/portfolioSection"

const IndexPage = () => {
  const [activeSection, setActiveSection] = useState('home')

  const sections = {
    home: 'Home',
    about: 'About',
    writing: 'Writing',
    contact: 'Contact',
    portfolio: "Portfolio"
  }

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return <HomeSection setActiveSection={setActiveSection} />
      case 'about':
        return <AboutSection />
      case 'writing':
        return <WritingSection />
      case 'contact':
        return <ContactSection />
      case 'portfolio':
       return <PortfolioSection />
      default:
        return <HomeSection setActiveSection={setActiveSection} />
    }
  }

  return (
    <Layout 
      activeSection={activeSection} 
      setActiveSection={setActiveSection} 
      sections={sections}
    >
      {renderContent()}
    </Layout>
  )
}

export default IndexPage