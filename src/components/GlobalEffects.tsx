import { useEffect, useRef } from 'react'

/**
 * Global micro-interactions:
 * 1. Custom cursor dot that follows mouse with spring physics
 * 2. Click ripple/vibration effect anywhere on the page
 */
export function GlobalEffects() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)
  const rippleContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = cursorRingRef.current
    const container = rippleContainerRef.current
    if (!cursor || !ring || !container) return

    let cx = 0, cy = 0, tx = 0, ty = 0

    // Smooth cursor follow
    const moveCursor = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const animate = () => {
      cx += (tx - cx) * 0.15
      cy += (ty - cy) * 0.15
      cursor.style.transform = `translate(${tx}px, ${ty}px)`
      ring.style.transform = `translate(${cx}px, ${cy}px)`
      requestAnimationFrame(animate)
    }

    // Click ripple effect
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div')
      ripple.style.cssText = `
        position: fixed; left: ${e.clientX}px; top: ${e.clientY}px;
        width: 0; height: 0; border-radius: 50%; pointer-events: none; z-index: 9998;
        border: 1px solid rgba(168, 85, 247, 0.4);
        transform: translate(-50%, -50%);
        animation: ripple-expand 0.6s ease-out forwards;
      `
      container.appendChild(ripple)

      // Vibrate on supported devices
      if (navigator.vibrate) navigator.vibrate(10)

      // Subtle screen shake
      document.body.style.transform = 'translate(0.5px, 0.5px)'
      setTimeout(() => { document.body.style.transform = 'translate(-0.5px, -0.5px)' }, 30)
      setTimeout(() => { document.body.style.transform = 'translate(0.5px, -0.5px)' }, 60)
      setTimeout(() => { document.body.style.transform = '' }, 90)

      setTimeout(() => ripple.remove(), 700)
    }

    // Cursor state changes on interactive elements
    const handleHover = () => {
      ring.style.width = '44px'
      ring.style.height = '44px'
      ring.style.borderColor = 'rgba(168, 85, 247, 0.5)'
      cursor.style.opacity = '0'
    }
    const handleLeave = () => {
      ring.style.width = '32px'
      ring.style.height = '32px'
      ring.style.borderColor = 'rgba(255, 255, 255, 0.15)'
      cursor.style.opacity = '1'
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('click', handleClick)
    requestAnimationFrame(animate)

    // Watch for interactive elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [class*="cursor-pointer"]').forEach(el => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('mouseleave', handleLeave)
        el.addEventListener('mouseenter', handleHover)
        el.addEventListener('mouseleave', handleLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })
    // Initial bind
    document.querySelectorAll('a, button, [class*="cursor-pointer"]').forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('click', handleClick)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Custom cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[5px] h-[5px] -ml-[2.5px] -mt-[2.5px] rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ transition: 'opacity 0.2s' }}
      />
      {/* Cursor ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-[32px] h-[32px] -ml-[16px] -mt-[16px] rounded-full border border-white/[0.15] pointer-events-none z-[9999] hidden md:block"
        style={{ transition: 'width 0.2s, height 0.2s, border-color 0.2s, margin 0.2s' }}
      />
      {/* Ripple container */}
      <div ref={rippleContainerRef} className="fixed inset-0 pointer-events-none z-[9998]" />
    </>
  )
}
