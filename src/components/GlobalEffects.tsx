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

    // Click ripple effect — ring pulse around cursor only
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div')
      ripple.style.cssText = `
        position: fixed; left: ${e.clientX}px; top: ${e.clientY}px;
        width: 0; height: 0; border-radius: 50%; pointer-events: none; z-index: 9998;
        border: 1.5px solid rgba(249, 115, 22, 0.5);
        transform: translate(-50%, -50%);
        animation: ripple-expand 0.5s ease-out forwards;
      `
      container.appendChild(ripple)

      // Brief ring scale pulse on the cursor ring
      if (ring) {
        ring.style.transform = `translate(${cx}px, ${cy}px) scale(1.4)`
        ring.style.borderColor = 'rgba(249, 115, 22, 0.5)'
        setTimeout(() => {
          ring.style.transform = `translate(${cx}px, ${cy}px) scale(1)`
          ring.style.borderColor = 'rgba(255, 255, 255, 0.12)'
        }, 200)
      }

      // Haptic on mobile only
      if (navigator.vibrate) navigator.vibrate(8)

      setTimeout(() => ripple.remove(), 700)
    }

    // Cursor state changes on interactive elements
    const handleHover = () => {
      ring.style.width = '52px'
      ring.style.height = '52px'
      ring.style.marginLeft = '-26px'
      ring.style.marginTop = '-26px'
      ring.style.borderColor = 'rgba(249, 115, 22, 0.4)'
      cursor.style.opacity = '0.5'
    }
    const handleLeave = () => {
      ring.style.width = '40px'
      ring.style.height = '40px'
      ring.style.marginLeft = '-20px'
      ring.style.marginTop = '-20px'
      ring.style.borderColor = 'rgba(255, 255, 255, 0.12)'
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
      {/* Custom cursor — arrow-like shape */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ transition: 'opacity 0.2s' }}
      >
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L1 19L6 14L11 22L14 20.5L9 12.5L16 11L1 1Z" fill="rgba(249,115,22,0.9)" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* Cursor ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] -ml-[20px] -mt-[20px] rounded-full border-2 border-white/[0.12] pointer-events-none z-[9999] hidden md:block"
        style={{ transition: 'width 0.25s, height 0.25s, border-color 0.25s, margin 0.25s' }}
      />
      {/* Ripple container */}
      <div ref={rippleContainerRef} className="fixed inset-0 pointer-events-none z-[9998]" />
    </>
  )
}
