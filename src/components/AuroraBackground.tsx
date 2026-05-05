import { useEffect, useRef, useCallback } from 'react'

/**
 * Interactive aurora/mesh gradient canvas that responds to mouse movement.
 * Colors shift and glow follows cursor. Subtle enough to not overwhelm content.
 */
export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const animRef = useRef<number>(0)
  const blobsRef = useRef<Array<{
    x: number; y: number; vx: number; vy: number;
    radius: number; color: [number, number, number]; phase: number
  }>>([])

  const initBlobs = useCallback(() => {
    const colors: [number, number, number][] = [
      [168, 85, 247],   // purple
      [6, 182, 212],    // cyan
      [236, 72, 153],   // pink
      [34, 197, 94],    // green
      [99, 102, 241],   // indigo
      [245, 158, 11],   // amber
    ]
    blobsRef.current = colors.map((color, i) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      radius: 0.2 + Math.random() * 0.15,
      color,
      phase: (i / colors.length) * Math.PI * 2,
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    initBlobs()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Recalculate height periodically as content loads
    const resizeInterval = setInterval(resize, 2000)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: (e.clientY + window.scrollY) / document.documentElement.scrollHeight,
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    let time = 0
    const animate = () => {
      time += 0.003
      const { width, height } = canvas
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      ctx.clearRect(0, 0, width, height)

      // Draw each blob
      for (const blob of blobsRef.current) {
        // Organic movement
        blob.x += blob.vx + Math.sin(time + blob.phase) * 0.0002
        blob.y += blob.vy + Math.cos(time * 0.7 + blob.phase) * 0.0002

        // Bounce off edges
        if (blob.x < -0.1 || blob.x > 1.1) blob.vx *= -1
        if (blob.y < -0.1 || blob.y > 1.1) blob.vy *= -1

        // Mouse attraction — subtle pull toward cursor
        const dx = mx - blob.x
        const dy = my - blob.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 0.4) {
          blob.x += dx * 0.002
          blob.y += dy * 0.002
        }

        // Pulsing radius
        const r = blob.radius + Math.sin(time * 2 + blob.phase) * 0.03
        const px = blob.x * width
        const py = blob.y * height
        const pr = r * Math.min(width, height)

        // Draw radial gradient blob
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, pr)
        const [cr, cg, cb] = blob.color

        // Mouse proximity brightens the blob
        const brightness = dist < 0.3 ? 0.12 + (0.3 - dist) * 0.15 : 0.08
        gradient.addColorStop(0, `rgba(${cr},${cg},${cb},${brightness})`)
        gradient.addColorStop(0.5, `rgba(${cr},${cg},${cb},${brightness * 0.4})`)
        gradient.addColorStop(1, `rgba(${cr},${cg},${cb},0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      // Mouse spotlight — subtle glow that follows cursor
      const spotX = mx * width
      const spotY = (mouseRef.current.y) * height
      const spotGrad = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, 200)
      spotGrad.addColorStop(0, 'rgba(168, 85, 247, 0.06)')
      spotGrad.addColorStop(0.5, 'rgba(6, 182, 212, 0.03)')
      spotGrad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = spotGrad
      ctx.fillRect(0, 0, width, height)

      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(resizeInterval)
    }
  }, [initBlobs])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
