import { useState, useEffect } from 'react'
import { SUBSCRIBE_URL } from '../data/config'

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
          <p className="text-sm text-gray-400 truncate">All courses included</p>
          <p className="text-sm font-semibold text-white truncate">Subscribe & start building</p>
        </div>
        <a
          href={SUBSCRIBE_URL}
          className="flex-shrink-0 px-5 py-2.5 rounded-full bg-neon-green text-dark-900 text-sm font-bold whitespace-nowrap"
        >
          Start Learning
        </a>
      </div>
    </div>
  )
}
