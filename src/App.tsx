import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { CourseGrid } from './components/CourseGrid'
import { MinecraftRoblox } from './components/MinecraftRoblox'
import { WhyAI } from './components/WhyAI'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MinecraftRoblox />
      <CourseGrid />
      <WhyAI />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
