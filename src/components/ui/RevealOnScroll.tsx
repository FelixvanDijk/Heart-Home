import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type AnimationType = 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale' | 'rotate'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  stagger?: number
  once?: boolean
}

const animations: Record<AnimationType, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
  'fade': {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  'slide-up': {
    from: { opacity: 0, y: 80 },
    to: { opacity: 1, y: 0 }
  },
  'slide-left': {
    from: { opacity: 0, x: 80 },
    to: { opacity: 1, x: 0 }
  },
  'slide-right': {
    from: { opacity: 0, x: -80 },
    to: { opacity: 1, x: 0 }
  },
  'scale': {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1 }
  },
  'rotate': {
    from: { opacity: 0, rotate: -10, y: 50 },
    to: { opacity: 1, rotate: 0, y: 0 }
  }
}

export function RevealOnScroll({ 
  children, 
  className = '',
  animation = 'slide-up',
  delay = 0,
  duration = 1,
  stagger = 0.1,
  once = false
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const anim = animations[animation]
    const elements = ref.current.children.length > 0 
      ? ref.current.children 
      : [ref.current]

    gsap.fromTo(elements,
      anim.from,
      {
        ...anim.to,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: once ? 'play none none none' : 'play reverse play reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, delay, duration, stagger, once])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

