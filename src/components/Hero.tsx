import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let time = 0
    const mouse = { x: 0.5, y: 0.5 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth
      mouse.y = e.clientY / window.innerHeight
    }
    window.addEventListener('mousemove', handleMouse)

    const dots: { x: number; y: number; baseAlpha: number }[] = []
    const spacing = 40
    for (let x = 0; x < 60; x++) {
      for (let y = 0; y < 40; y++) {
        dots.push({ x: x * spacing, y: y * spacing, baseAlpha: 0.08 + Math.random() * 0.04 })
      }
    }

    const animate = () => {
      time += 0.005
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const mx = mouse.x * width
      const my = mouse.y * height

      for (const dot of dots) {
        const dx = dot.x - mx
        const dy = dot.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Proximity glow — dots near cursor brighten and shift color
        const proximity = Math.max(0, 1 - dist / 250)
        const wave = Math.sin(time * 2 + dot.x * 0.01 + dot.y * 0.01) * 0.5 + 0.5

        const alpha = dot.baseAlpha + proximity * 0.4 + wave * 0.02
        const size = 1 + proximity * 2.5

        // Color shifts — purple near cursor, cyan in waves
        const r = 168 * proximity + 40 * (1 - proximity)
        const g = 85 * proximity + 40 * (1 - proximity) + 100 * wave * proximity
        const b = 247 * proximity + 60 * (1 - proximity)

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`
        ctx.fill()

        // Draw faint connection lines to nearby dots when cursor is close
        if (proximity > 0.3) {
          for (const other of dots) {
            const odx = dot.x - other.x
            const ody = dot.y - other.y
            const odist = Math.sqrt(odx * odx + ody * ody)
            if (odist > 0 && odist < spacing * 1.5) {
              ctx.beginPath()
              ctx.moveTo(dot.x, dot.y)
              ctx.lineTo(other.x, other.y)
              ctx.strokeStyle = `rgba(168,85,247,${proximity * 0.08})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        }
      }

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

function CursorGlow() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 40, damping: 15 })
  const springY = useSpring(y, { stiffness: 40, damping: 15 })

  useEffect(() => {
    const handler = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY) }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [x, y])

  return (
    <motion.div
      className="pointer-events-none fixed z-20"
      style={{
        x: springX, y: springY,
        width: 500, height: 500, marginLeft: -250, marginTop: -250,
        background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, rgba(6,182,212,0.03) 30%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <GridBackground />
      <CursorGlow />

      {/* Gradient beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[40vh] bg-gradient-to-b from-neon-purple/40 via-neon-purple/10 to-transparent" />
      <div className="absolute top-[10vh] left-[30%] w-[1px] h-[25vh] bg-gradient-to-b from-neon-cyan/20 via-neon-cyan/5 to-transparent rotate-[15deg]" />
      <div className="absolute top-[10vh] right-[30%] w-[1px] h-[25vh] bg-gradient-to-b from-neon-pink/20 via-neon-pink/5 to-transparent -rotate-[15deg]" />

      {/* Soft ambient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.6), transparent 70%)', top: '10%', left: '20%' }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.6), transparent 70%)', bottom: '10%', right: '15%' }}
        animate={{ x: [0, -25, 15, 0], y: [0, 15, -25, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm text-[13px] text-gray-400 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            Now Enrolling — Limited Spots
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-[1.0] mb-7 tracking-[-0.03em]"
        >
          Build Epic Games
          <br />
          <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            With AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[clamp(1rem,1.8vw,1.25rem)] text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          The future isn't about memorizing code — it's about{' '}
          <span className="text-white font-medium">building with AI</span>.
          <br className="hidden md:block" />
          Minecraft mods, Roblox games, chatbots, and more. Ages 8–16.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#courses"
            className="group relative px-8 py-3.5 rounded-full text-white font-semibold text-base overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            {/* Animated gradient border */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan animate-gradient bg-[length:200%_200%]" />
            <span className="absolute inset-[1px] rounded-full bg-dark-900" />
            <span className="absolute inset-[1px] rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Explore Courses →</span>
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-white font-semibold text-base hover:bg-white/[0.06] hover:border-white/[0.12] transition-all"
          >
            How It Works
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-24 flex flex-wrap justify-center gap-16"
        >
          {[
            { value: '8', label: 'AI Courses' },
            { value: '500+', label: 'Students' },
            { value: '95%', label: 'Love It' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-extrabold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-[13px] text-gray-600 mt-1.5 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  )
}
