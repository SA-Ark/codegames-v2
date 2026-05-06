import { useState, useEffect } from 'react'

/**
 * Sticky mobile CTA bar that appears after scrolling past the hero.
 * Shows on mobile only (md:hidden).
 */
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-dark-900/90 backdrop-blur-xl border-t border-white/[0.06] px-4 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs text-gray-400 truncate">Summer cohort filling fast</p>
          <p className="text-sm font-semibold text-white truncate">Courses from $199</p>
        </div>
        <a
          href="#courses"
          className="flex-shrink-0 px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white text-sm font-semibold whitespace-nowrap"
        >
          Enroll Now
        </a>
      </div>
    </div>
  )
}
