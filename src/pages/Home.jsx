import React from 'react'
import HeroSection from "../components/HeroSection";
import AboutSection from '../components/AboutSection';
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import FeedbackSection from '../components/FeedbackSection';


const Home = () => {
  return (
     <>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <FeedbackSection />
     </>
  )
}

export default Home
