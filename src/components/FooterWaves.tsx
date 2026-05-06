import { useEffect, useRef } from 'react'

/**
 * Flowing wave/aurora animation for the bottom of the page.
 * Different feel from the dot grid — organic, flowing waves.
 */
export function FooterWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio > 1 ? 2 : 1)
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio > 1 ? 2 : 1)
      ctx.scale(window.devicePixelRatio > 1 ? 2 : 1, window.devicePixelRatio > 1 ? 2 : 1)
    }
    resize()
    window.addEventListener('resize', resize)

    const waves = [
      { amplitude: 20, wavelength: 300, speed: 0.015, color: 'rgba(168, 85, 247, 0.06)', yOffset: 0.3 },
      { amplitude: 15, wavelength: 200, speed: 0.02, color: 'rgba(6, 182, 212, 0.04)', yOffset: 0.5 },
      { amplitude: 25, wavelength: 400, speed: 0.01, color: 'rgba(236, 72, 153, 0.03)', yOffset: 0.7 },
    ]

    const animate = () => {
      time += 1
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      for (const wave of waves) {
        ctx.beginPath()
        const baseY = h * wave.yOffset

        for (let x = 0; x <= w; x += 2) {
          const y = baseY + Math.sin((x / wave.wavelength + time * wave.speed) * Math.PI * 2) * wave.amplitude
            + Math.sin((x / (wave.wavelength * 1.5) + time * wave.speed * 0.7) * Math.PI * 2) * wave.amplitude * 0.5
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }

        ctx.lineTo(w, h)
        ctx.lineTo(0, h)
        ctx.closePath()

        const gradient = ctx.createLinearGradient(0, baseY - wave.amplitude, 0, h)
        gradient.addColorStop(0, wave.color)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fill()
      }

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}
