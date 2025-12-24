import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../data/services'
import { TextReveal } from './ui/TextReveal'

gsap.registerPlugin(ScrollTrigger)

// 3D Tilt Card Component
function TiltCard({ 
  children, 
  className = '',
}: { 
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg'])
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%'])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative ${className}`}
    >
      {/* Glare effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15), transparent 60%)`,
        }}
      />
      {children}
    </motion.div>
  )
}

// Service Card Component
function ServiceCard({ 
  service, 
  index, 
  featured = false 
}: { 
  service: typeof services[0]
  index: number
  featured?: boolean
}) {
  const Icon = service.icon

  return (
    <TiltCard 
      className={`service-card group cursor-default ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div 
        className={`relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 ${
          featured 
            ? 'p-8 md:p-10' 
            : 'p-6'
        }`}
        style={{
          boxShadow: '0 4px 30px -10px rgba(50, 41, 24, 0.1)',
          transform: 'translateZ(50px)',
        }}
      >
        {/* Animated gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary p-[2px] animate-gradient-rotate">
            <div className="w-full h-full bg-white rounded-2xl" />
          </div>
        </div>

        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col" style={{ transform: 'translateZ(60px)' }}>
          {/* Number badge */}
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-gray-100 group-hover:bg-primary group-hover:text-white rounded-full flex items-center justify-center text-sm font-bold text-gray-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
            {(index + 1).toString().padStart(2, '0')}
          </div>

          {/* Icon with animation */}
          <div className={`${featured ? 'w-20 h-20 mb-6' : 'w-16 h-16 mb-4'} rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20`}>
            <Icon className={`${featured ? 'w-10 h-10' : 'w-8 h-8'} text-primary group-hover:scale-110 transition-transform duration-300`} />
          </div>

          {/* Title */}
          <h3 className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300`}>
            {service.title}
          </h3>

          {/* Description */}
          <p className={`text-text-muted ${featured ? 'text-lg' : 'text-base'} leading-relaxed flex-grow`}>
            {service.description}
          </p>

          {/* Bottom section */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="inline-flex items-center text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full group-hover:bg-accent group-hover:text-white transition-all duration-300">
              Coming soon
            </span>
            
            {/* Arrow that appears on hover */}
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  )
}

export default function Services() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Animate cards in with stagger and 3D effect
    gsap.fromTo('.service-card',
      { 
        opacity: 0, 
        y: 100,
        rotateX: -15,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.8,
        stagger: {
          each: 0.1,
          from: 'start',
        },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  // Define which services are featured (larger cards)
  const featuredIndices = [0, 4]

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-lg mb-3 tracking-wide uppercase">
            What We Offer
          </span>
          
          <TextReveal 
            as="h2" 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6"
          >
            Our Services
          </TextReveal>
          
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Professional veterinary care delivered to your doorstep. 
            Here's what we'll offer when we launch.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={featuredIndices.includes(index) ? 'md:col-span-2' : ''}
            >
              <ServiceCard 
                service={service} 
                index={index}
                featured={featuredIndices.includes(index)}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <motion.div 
            className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg text-text">
              Interested in a service not listed here?
            </p>
            <motion.a 
              href="#register" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let us know
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
