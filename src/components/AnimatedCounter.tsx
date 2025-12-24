import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration = 2, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!ref.current || hasAnimated.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 80%',
      onEnter: () => {
        if (hasAnimated.current) return
        hasAnimated.current = true

        if (prefersReducedMotion) {
          setCount(end)
          return
        }

        gsap.to({ val: 0 }, {
          val: end,
          duration: duration,
          ease: 'power2.out',
          onUpdate: function() {
            setCount(Math.floor(this.targets()[0].val))
          }
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [end, duration])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

const stats = [
  { value: 25, suffix: '+', label: 'Years Combined Experience', icon: '🏆' },
  { value: 3, suffix: '', label: 'Dedicated Team Members', icon: '👩‍⚕️' },
  { value: 7, suffix: '+', label: 'Areas We Cover', icon: '📍' },
  { value: 100, suffix: '%', label: 'Home Visit Focused', icon: '🏠' },
]

export default function AnimatedCounter() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Animate the stats in with stagger
    gsap.fromTo('.stat-item',
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-primary via-primary to-deep relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-10 text-6xl animate-float-slow">🐾</div>
        <div className="absolute bottom-4 right-10 text-6xl animate-float-medium">❤️</div>
        <div className="absolute top-1/2 left-1/4 text-4xl animate-float-fast">🐕</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl animate-float-slow">🐈</div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-item group"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <Counter end={stat.value} suffix={stat.suffix} duration={2.5} />
              </div>
              <div className="text-white/80 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
