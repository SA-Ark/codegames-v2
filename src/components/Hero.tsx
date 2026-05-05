import { motion } from 'framer-motion'
import { useState } from 'react'

const floatingIcons = ['🤖', '🎮', '⛏️', '🎨', '🚀', '🎵', '👾', '🎬', '💡', '⚡']

function Particle({ emoji }: { emoji: string; index: number }) {
  const x = Math.random() * 100
  const delay = Math.random() * 5
  const duration = 15 + Math.random() * 10
  const size = 20 + Math.random() * 24

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{ left: `${x}%`, fontSize: size }}
      initial={{ y: '110vh', opacity: 0, rotate: 0 }}
      animate={{ y: '-10vh', opacity: [0, 0.6, 0.6, 0], rotate: 360 }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    >
      {emoji}
    </motion.div>
  )
}

export function Hero() {
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      emoji: floatingIcons[i % floatingIcons.length],
      index: i
    }))
  )

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-purple-950/30 to-dark-900 animate-gradient" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <Particle key={i} emoji={p.emoji} index={p.index} />
        ))}
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            Now Enrolling — Limited Spots
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Build Epic Games
          <br />
          <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">
            With AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          The future isn't about memorizing code — it's about{' '}
          <span className="text-white font-medium">building with AI</span>.
          Learn to create Minecraft mods, Roblox games, chatbots, and more. Ages 8-16.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#courses"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold text-lg hover:scale-105 transition-transform shadow-lg shadow-neon-purple/25"
          >
            Explore Courses →
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            How It Works
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: '8', label: 'AI Courses' },
            { value: '500+', label: 'Students' },
            { value: '95%', label: 'Love It' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
