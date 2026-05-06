import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { CourseGrid } from './components/CourseGrid'
import { MinecraftRoblox } from './components/MinecraftRoblox'
import { WhyAI } from './components/WhyAI'
import { Instructors } from './components/Instructors'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { GlobalEffects } from './components/GlobalEffects'
import { StickyMobileCTA } from './components/StickyMobileCTA'

function Divider() {
  return <div className="section-divider" />
}

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white custom-cursor">
      <GlobalEffects />
      <StickyMobileCTA />
      <Navbar />
      <Hero />
      <Divider />
      <HowItWorks />
      <Divider />
      <MinecraftRoblox />
      <Divider />
      <CourseGrid />
      <Divider />
      <WhyAI />
      <Divider />
      <Instructors />
      <Divider />
      <Testimonials />
      <Divider />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
