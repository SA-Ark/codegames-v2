import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SUBSCRIBE_URL } from '../data/config'

const links = [
  { label: 'Courses', href: '#courses' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/70 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_1px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-base font-bold">
          <span className="text-lg">🎮</span>
          <span className="bg-gradient-to-r from-neon-orange to-neon-pink bg-clip-text text-transparent font-extrabold tracking-tight">
            AI Games Academy
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href} className="px-3.5 py-1.5 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04]">
              {l.label}
            </a>
          ))}
          <div className="w-px h-4 bg-white/[0.06] mx-2" />
          <a
            href={SUBSCRIBE_URL}
            className="ml-1 px-5 py-1.5 rounded-lg bg-neon-green text-dark-900 text-sm font-bold hover:bg-green-400 transition-all shadow-md shadow-neon-green/20"
          >
            Start Learning
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/[0.04] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-900/95 backdrop-blur-2xl border-b border-white/[0.04]"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2.5 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.04] text-sm">
                  {l.label}
                </a>
              ))}
              <a href={SUBSCRIBE_URL} onClick={() => setOpen(false)} className="mt-2 px-4 py-2.5 rounded-lg bg-neon-green text-dark-900 text-sm font-bold text-center hover:bg-green-400 transition-all">
                Start Learning
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
