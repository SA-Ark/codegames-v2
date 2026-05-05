import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Courses', href: '#courses' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">🎮</span>
          <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            AI Games Academy
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-gray-400 hover:text-white transition-colors text-sm">
              {l.label}
            </a>
          ))}
          <a
            href="#courses"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Start Learning
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800 border-b border-white/5"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#courses" onClick={() => setOpen(false)} className="px-5 py-2 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white text-sm font-semibold text-center">
                Start Learning
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
