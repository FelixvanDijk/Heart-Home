import { useEffect, useState, useRef } from 'react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          // Check for reduced motion
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          if (prefersReducedMotion) {
            setCount(end)
            return
          }

          let startTime: number
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * end))
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

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
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-deep relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-10 text-6xl">🐾</div>
        <div className="absolute bottom-4 right-10 text-6xl">❤️</div>
        <div className="absolute top-1/2 left-1/4 text-4xl">🐕</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl">🐈</div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
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

