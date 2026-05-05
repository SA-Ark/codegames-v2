import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * Interactive card wrapper that creates a spotlight/tilt effect on hover.
 * The card glows with a gradient that follows the mouse position.
 */
export function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(168, 85, 247, 0.15)',
  onClick,
}: {
  children: React.ReactNode
  className?: string
  glowColor?: string
  onClick?: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    const glow = glowRef.current
    if (!card || !glow) return

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      glow.style.background = `radial-gradient(300px circle at ${x}px ${y}px, ${glowColor}, transparent 70%)`

      // Subtle 3D tilt
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -3
      const rotateY = ((x - centerX) / centerX) * 3
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    }

    const handleLeave = () => {
      glow.style.background = 'transparent'
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)'
    }

    card.addEventListener('mousemove', handleMove)
    card.addEventListener('mouseleave', handleLeave)
    return () => {
      card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [glowColor])

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden transition-transform duration-200 ease-out ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Glow overlay */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-10"
      />
      {/* Border glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${glowColor}, 0 0 30px ${glowColor}` }}
      />
      {children}
    </motion.div>
  )
}
