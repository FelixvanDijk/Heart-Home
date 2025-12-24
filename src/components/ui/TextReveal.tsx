import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface TextRevealProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  delay?: number
  stagger?: number
  scrub?: boolean
}

export function TextReveal({ 
  children, 
  className = '', 
  as: Component = 'span',
  delay = 0,
  stagger = 0.02,
  scrub = false
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    hasAnimated.current = true
    const chars = containerRef.current.querySelectorAll('.char')

    if (scrub) {
      gsap.fromTo(chars,
        { 
          opacity: 0.2,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
          }
        }
      )
    } else {
      gsap.fromTo(chars,
        { 
          opacity: 0,
          y: 50,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: stagger,
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [delay, stagger, scrub])

  // Split text into characters
  const words = children.split(' ')
  
  return (
    <Component 
      ref={containerRef as any} 
      className={`${className} overflow-hidden`}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="char inline-block"
              style={{ transformOrigin: 'center bottom' }}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && <span className="char inline-block">&nbsp;</span>}
        </span>
      ))}
    </Component>
  )
}

