import { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { CourseGrid } from './components/CourseGrid'
import { MinecraftRoblox } from './components/MinecraftRoblox'
import { WhyAI } from './components/WhyAI'
import { OldVsNew } from './components/OldVsNew'
import { WhatYoullBuild } from './components/WhatYoullBuild'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { GlobalEffects } from './components/GlobalEffects'
import { StickyMobileCTA } from './components/StickyMobileCTA'
import { SubscribePage } from './components/SubscribePage'

function Divider() {
  return <div className="section-divider" />
}

function App() {
  const [page, setPage] = useState(window.location.pathname)

  useEffect(() => {
    const handler = () => setPage(window.location.pathname)
    window.addEventListener('popstate', handler)
    // Handle clicks on internal links
    const clickHandler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (target && target.getAttribute('href') === '/subscribe') {
        e.preventDefault()
        window.history.pushState({}, '', '/subscribe')
        setPage('/subscribe')
        window.scrollTo(0, 0)
      }
    }
    document.addEventListener('click', clickHandler)
    return () => {
      window.removeEventListener('popstate', handler)
      document.removeEventListener('click', clickHandler)
    }
  }, [])

  if (page === '/subscribe') {
    return (
      <div className="custom-cursor">
        <GlobalEffects />
        <SubscribePage />
      </div>
    )
  }

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
      <WhatYoullBuild />
      <Divider />
      <OldVsNew />
      <Divider />
      <WhyAI />
      <Divider />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
