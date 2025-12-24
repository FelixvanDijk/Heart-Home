import { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { services } from '../data/services'

// 3D Tilt Card Component
function TiltCard({ 
  children, 
  className = '',
  glareColor = 'rgba(255,255,255,0.1)'
}: { 
  children: React.ReactNode
  className?: string
  glareColor?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    
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
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%'])} ${useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%'])}, ${glareColor}, transparent 80%)`,
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
      className={`group cursor-default ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div 
        className={`relative h-full bg-white rounded-2xl overflow-hidden transition-all duration-500 ${
          featured 
            ? 'p-8 md:p-10' 
            : 'p-6'
        }`}
        style={{
          boxShadow: '0 4px 30px -10px rgba(50, 41, 24, 0.08)',
        }}
      >
        {/* Animated gradient border on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-secondary p-[2px]">
            <div className="w-full h-full bg-white rounded-2xl" />
          </div>
        </div>

        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Number badge */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-100 group-hover:bg-primary group-hover:text-white rounded-full flex items-center justify-center text-sm font-bold text-gray-400 transition-all duration-300">
            {(index + 1).toString().padStart(2, '0')}
          </div>

          {/* Icon with animation */}
          <div className={`${featured ? 'w-20 h-20 mb-6' : 'w-14 h-14 mb-4'} rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
            <Icon className={`${featured ? 'w-10 h-10' : 'w-7 h-7'} text-primary group-hover:scale-110 transition-transform duration-300`} />
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
            <span className="inline-flex items-center text-sm font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-full group-hover:bg-accent group-hover:text-white transition-all duration-300">
              Coming soon
            </span>
            
            {/* Arrow that appears on hover */}
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  // Define which services are featured (larger cards)
  const featuredIndices = [0, 4] // First and fifth service are featured

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block text-primary font-semibold text-lg mb-3 tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            What We Offer
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          
          <motion.p 
            className="text-xl text-text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Professional veterinary care delivered to your doorstep. 
            Here's what we'll offer when we launch.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.4 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className={featuredIndices.includes(index) ? 'md:col-span-2' : ''}
            >
              <ServiceCard 
                service={service} 
                index={index}
                featured={featuredIndices.includes(index)}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <p className="text-lg text-text">
              Interested in a service not listed here?
            </p>
            <a 
              href="#register" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors group"
            >
              Let us know
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
