import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface AnimatedGradientProps {
  className?: string
  colors?: string[]
}

export function AnimatedGradient({ 
  className = '',
  colors = ['#59A5AE', '#DB6435', '#D7AF6E', '#38524B']
}: AnimatedGradientProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Animate the gradient position
    gsap.to(ref.current, {
      '--gradient-x': '100%',
      '--gradient-y': '100%',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    return () => {
      gsap.killTweensOf(ref.current)
    }
  }, [])

  return (
    <div 
      ref={ref}
      className={`absolute inset-0 opacity-30 ${className}`}
      style={{
        '--gradient-x': '0%',
        '--gradient-y': '0%',
        background: `
          radial-gradient(circle at var(--gradient-x) var(--gradient-y), ${colors[0]}40 0%, transparent 50%),
          radial-gradient(circle at calc(100% - var(--gradient-x)) var(--gradient-y), ${colors[1]}30 0%, transparent 50%),
          radial-gradient(circle at var(--gradient-x) calc(100% - var(--gradient-y)), ${colors[2]}25 0%, transparent 50%),
          radial-gradient(circle at calc(100% - var(--gradient-x)) calc(100% - var(--gradient-y)), ${colors[3]}35 0%, transparent 50%)
        `
      } as React.CSSProperties}
    />
  )
}

