import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../data/services'
import { TextReveal } from './ui/TextReveal'

gsap.registerPlugin(ScrollTrigger)

// SVG Scene Components for hover effects
const HomeScene = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
    {/* Sky gradient */}
    <defs>
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#59A5AE" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#D7AF6E" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="sunGlow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
        <stop offset="100%" stopColor="#D7AF6E" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <rect fill="url(#skyGradient)" width="400" height="200" />
    
    {/* Clouds */}
    <ellipse cx="80" cy="40" rx="30" ry="15" fill="white" opacity="0.9" />
    <ellipse cx="100" cy="35" rx="25" ry="12" fill="white" opacity="0.85" />
    <ellipse cx="60" cy="45" rx="20" ry="10" fill="white" opacity="0.8" />
    <ellipse cx="300" cy="50" rx="35" ry="18" fill="white" opacity="0.85" />
    <ellipse cx="330" cy="45" rx="20" ry="10" fill="white" opacity="0.8" />
    
    {/* Sun with glow */}
    <circle cx="340" cy="45" r="35" fill="#FFD700" opacity="0.3" />
    <circle cx="340" cy="45" r="28" fill="url(#sunGlow)" opacity="0.9" />
    
    {/* Hills/Ground */}
    <path d="M0 180 Q50 150 100 165 Q150 180 200 160 Q250 140 300 155 Q350 170 400 150 L400 200 L0 200 Z" fill="#38524B" opacity="0.7" />
    <path d="M0 190 Q100 170 200 180 Q300 190 400 175 L400 200 L0 200 Z" fill="#38524B" opacity="0.9" />
    
    {/* House */}
    <path d="M160 200 L160 130 L200 95 L240 130 L240 200 Z" fill="#8B6914" opacity="0.85" />
    <path d="M160 130 L200 95 L240 130 Z" fill="#5D4E37" opacity="0.9" />
    <rect x="175" y="145" width="20" height="25" fill="#59A5AE" opacity="0.9" />
    <rect x="205" y="145" width="20" height="25" fill="#59A5AE" opacity="0.9" />
    <rect x="185" y="175" width="30" height="25" fill="#5D4E37" opacity="0.8" />
    
    {/* Trees */}
    <path d="M40 200 L40 165 L20 165 L50 125 L30 125 L60 85 L90 125 L70 125 L100 165 L80 165 L80 200 Z" fill="#38524B" opacity="0.85" />
    <rect x="55" y="170" width="10" height="30" fill="#5D4E37" opacity="0.7" />
    
    <path d="M300 200 L300 175 L285 175 L310 145 L295 145 L320 115 L345 145 L330 145 L355 175 L340 175 L340 200 Z" fill="#38524B" opacity="0.8" />
    <rect x="315" y="180" width="10" height="20" fill="#5D4E37" opacity="0.7" />
    
    <path d="M370 200 L370 180 L360 180 L380 155 L370 155 L390 130 L410 155 L400 155 L420 180 L410 180 L410 200 Z" fill="#38524B" opacity="0.75" />
    
    {/* Grass/bushes */}
    <ellipse cx="130" cy="195" rx="25" ry="10" fill="#4A7C59" opacity="0.7" />
    <ellipse cx="270" cy="192" rx="20" ry="8" fill="#4A7C59" opacity="0.65" />
  </svg>
)

// Animated animals that appear on hover
const HoverAnimals = ({ type }: { type: 'dog' | 'cat' | 'rabbit' | 'bird' | 'turtle' | 'lizard' | 'van' | 'clock' }) => {
  const animals: Record<string, React.ReactNode> = {
    dog: (
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute bottom-4 left-4 text-4xl"
      >
        🐕
      </motion.div>
    ),
    cat: (
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="absolute bottom-4 right-4 text-4xl"
      >
        🐈
      </motion.div>
    ),
    rabbit: (
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2, type: 'spring', bounce: 0.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-3xl"
      >
        🐰
      </motion.div>
    ),
    bird: (
      <motion.div
        initial={{ y: -20, opacity: 0, rotate: -20 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute top-16 right-6 text-3xl"
      >
        🦜
      </motion.div>
    ),
    turtle: (
      <motion.div
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-4 left-6 text-3xl"
      >
        🐢
      </motion.div>
    ),
    lizard: (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="absolute bottom-6 right-6 text-3xl"
      >
        🦎
      </motion.div>
    ),
    van: (
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute bottom-4 left-4 text-4xl"
      >
        🚐
      </motion.div>
    ),
    clock: (
      <motion.div
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="absolute top-16 right-4 text-3xl"
      >
        ⏰
      </motion.div>
    ),
  }

  return <>{animals[type]}</>
}

// Map service index to animal type
const getAnimalType = (index: number): 'dog' | 'cat' | 'rabbit' | 'bird' | 'turtle' | 'lizard' | 'van' | 'clock' => {
  const types: ('dog' | 'cat' | 'rabbit' | 'bird' | 'turtle' | 'lizard' | 'van' | 'clock')[] = [
    'dog',    // Health Checks & Vaccinations
    'cat',    // Sick Pet Consultations
    'rabbit', // Diagnostics at Home
    'turtle', // Ongoing & Specialised Care
    'lizard', // Exotic Pet Care
    'dog',    // Pain & Mobility Clinics
    'cat',    // Nurse Clinics
    'rabbit', // Medications Delivered
    'dog',    // End-of-Life Care
    'van',    // Patient Transfers
    'clock',  // Animal Health Certificates
    'bird',   // Parasite Prevention
  ]
  return types[index] || 'dog'
}

// Paw prints that scatter on hover
const PawPrints = () => (
  <>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 0.3, delay: 0 }}
      className="absolute top-8 left-8 text-2xl rotate-[-30deg]"
    >
      🐾
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.25, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="absolute top-20 left-16 text-xl rotate-[-15deg]"
    >
      🐾
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.2, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="absolute top-12 right-12 text-lg rotate-[20deg]"
    >
      🐾
    </motion.div>
  </>
)

// Heart that floats up on hover
const FloatingHearts = () => (
  <>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0, 1, 0], y: -30 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      className="absolute top-1/3 right-1/4 text-xl text-accent"
    >
      ❤️
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0, 1, 0], y: -40 }}
      transition={{ duration: 1.8, delay: 0.5 }}
      className="absolute top-1/2 left-1/3 text-lg text-accent"
    >
      💕
    </motion.div>
  </>
)

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
      {children}
    </motion.div>
  )
}

// Service Card Component with hover scene
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
  const animalType = getAnimalType(index)

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
        {/* Animated gradient border on hover - bottom layer */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary p-[2px]">
            <div className="w-full h-full rounded-2xl" />
          </div>
        </div>

        {/* Background scene that fades in on hover - MAIN VISIBLE LAYER */}
        <div className="absolute inset-0 z-[5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-2xl">
          <HomeScene />
        </div>

        {/* Animated paw prints - above scene */}
        <div className="absolute inset-0 z-[15] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <PawPrints />
        </div>

        {/* Animated animal that appears on hover - above scene */}
        <div className="absolute inset-0 z-[15] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <HoverAnimals type={animalType} />
          <FloatingHearts />
        </div>

        {/* Content - topmost layer */}
        <div className="relative z-[20] h-full flex flex-col" style={{ transform: 'translateZ(60px)' }}>
          {/* Number badge */}
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-gray-100 group-hover:bg-primary group-hover:text-white rounded-full flex items-center justify-center text-sm font-bold text-gray-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
            {(index + 1).toString().padStart(2, '0')}
          </div>

          {/* Icon that transforms on hover */}
          <div className={`${featured ? 'w-20 h-20 mb-6' : 'w-16 h-16 mb-4'} rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-deep relative overflow-hidden`}>
            {/* Original icon */}
            <Icon className={`${featured ? 'w-10 h-10' : 'w-8 h-8'} text-primary group-hover:text-white transition-all duration-300 group-hover:scale-0 group-hover:opacity-0 absolute`} />
            
            {/* Transformed icon on hover */}
            <span className={`${featured ? 'text-3xl' : 'text-2xl'} scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 absolute`}>
              {index === 0 && '💉'}
              {index === 1 && '🩺'}
              {index === 2 && '🧪'}
              {index === 3 && '❤️'}
              {index === 4 && '🦎'}
              {index === 5 && '💊'}
              {index === 6 && '✂️'}
              {index === 7 && '📦'}
              {index === 8 && '🏠'}
              {index === 9 && '🚗'}
              {index === 10 && '📋'}
              {index === 11 && '🛡️'}
            </span>
          </div>

          {/* Title */}
          <h3 
            className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold text-text mb-3 group-hover:text-accent transition-colors duration-300`}
            style={{ 
              textShadow: 'none',
            }}
          >
            <span className="group-hover:[text-shadow:_-1px_-1px_0_#fff,_1px_-1px_0_#fff,_-1px_1px_0_#fff,_1px_1px_0_#fff,_0_0_8px_rgba(255,255,255,0.8)]">
              {service.title}
            </span>
          </h3>

          {/* Description */}
          <p className={`text-text-muted ${featured ? 'text-lg' : 'text-base'} leading-relaxed flex-grow group-hover:text-text transition-colors duration-300`}>
            {service.description}
          </p>

          {/* Bottom section */}
          <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-primary/20 flex items-center justify-end transition-colors duration-300">
            {/* Arrow that appears on hover */}
            <motion.div 
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-primary transition-all duration-300"
              initial={{ x: 20, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
            >
              <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
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

  const featuredIndices = [0, 4] // Health Checks & Exotic Pet Care

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

        {/* Services Grid - All services in one unified layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
