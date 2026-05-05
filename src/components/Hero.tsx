import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

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
      animate={{ y: '-10vh', opacity: [0, 0.4, 0.4, 0], rotate: 360 }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    >
      {emoji}
    </motion.div>
  )
}

function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 50, damping: 20 })
  const springY = useSpring(y, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [x, y])

  return (
    <motion.div
      ref={glowRef}
      className="pointer-events-none fixed z-20"
      style={{
        x: springX,
        y: springY,
        width: 400,
        height: 400,
        marginLeft: -200,
        marginTop: -200,
        background: 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  )
}

export function Hero() {
  const [particles] = useState(() =>
    Array.from({ length: 15 }, (_, i) => ({
      emoji: floatingIcons[i % floatingIcons.length],
      index: i
    }))
  )

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <MouseGlow />

      {/* Animated mesh lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating particles — reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <Particle key={i} emoji={p.emoji} index={p.index} />
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.4), transparent)' }}
        animate={{
          x: ['-10%', '10%', '-5%'],
          y: ['-10%', '5%', '-10%'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4), transparent)', right: '10%', top: '20%' }}
        animate={{
          x: ['5%', '-10%', '5%'],
          y: ['5%', '-5%', '5%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-[100px] opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.4), transparent)', left: '20%', bottom: '10%' }}
        animate={{
          x: ['-5%', '8%', '-5%'],
          y: ['3%', '-8%', '3%'],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm text-sm text-gray-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            Now Enrolling — Limited Spots
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] mb-6 tracking-tight"
        >
          Build Epic Games
          <br />
          <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            With AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          The future isn't about memorizing code — it's about{' '}
          <span className="text-white font-semibold">building with AI</span>.
          Learn to create Minecraft mods, Roblox games, chatbots, and more. Ages 8–16.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#courses"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-semibold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-105"
          >
            <span className="relative z-10">Explore Courses →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/[0.08] hover:border-white/[0.15] transition-all"
          >
            How It Works
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20"
        >
          {[
            { value: '8', label: 'AI Courses' },
            { value: '500+', label: 'Students' },
            { value: '95%', label: 'Love It' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  )
}
