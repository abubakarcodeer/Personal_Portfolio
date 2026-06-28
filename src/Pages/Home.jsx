import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        <Navbar />
        <main>
          <HeroSection />
          <About />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </main>
    </div>
  )
}

export default Home