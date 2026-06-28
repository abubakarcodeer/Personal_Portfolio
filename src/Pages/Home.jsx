import React, { Suspense, lazy } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

const About = lazy(() => import('../components/About'))
const SkillsSection = lazy(() => import('../components/SkillsSection'))
const ProjectsSection = lazy(() => import('../components/ProjectsSection'))
const ContactSection = lazy(() => import('../components/ContactSection'))
const Footer = lazy(() => import('../components/Footer'))

const LoadingFallback = () => (
  <div className="w-full h-20 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
)

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        <Navbar />
        <main>
          <HeroSection />
          <Suspense fallback={<LoadingFallback />}>
            <About />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
          </Suspense>
        </main>
    </div>
  )
}

export default Home
