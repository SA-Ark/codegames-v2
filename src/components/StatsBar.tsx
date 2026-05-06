import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1500
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export function StatsBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center gap-10 md:gap-20"
    >
      {[
        { target: 8, suffix: '', label: 'AI Courses' },
        { target: 500, suffix: '+', label: 'Students Enrolled' },
        { target: 95, suffix: '%', label: 'Parent Satisfaction' },
        { target: 1200, suffix: '+', label: 'Projects Built' },
      ].map(stat => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            <AnimatedCounter target={stat.target} suffix={stat.suffix} />
          </div>
          <div className="text-[12px] text-gray-600 mt-1.5 tracking-wide">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  )
}
