import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, Heart, MapPin, Clock, Shield } from 'lucide-react'
import { CyclingTextScramble } from './ui/TextScramble'
import { MagneticButton } from './ui/MagneticButton'
import { AnimatedGradient } from './ui/AnimatedGradient'
import logoImg from '/assets/logo.png'

gsap.registerPlugin(ScrollTrigger)

// Service taglines to cycle through
const serviceTaglines = [
  'Mobile Vet Home Visits',
  'Home Vaccinations',
  'Blood Sampling at Home',
  'Pet Transport Services',
  'Exotic Animal Care',
  'Stress-Free Vet Care',
]

// Floating benefit badges
const benefits = [
  { icon: MapPin, text: 'We come to you', delay: 0.2 },
  { icon: Clock, text: 'Flexible scheduling', delay: 0.4 },
  { icon: Shield, text: 'Experienced team', delay: 0.6 },
]

export default function Hero() {
  const [logoLoaded, setLogoLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  // Parallax effect on scroll
  useEffect(() => {
    if (!heroRef.current) return
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Parallax for the whole hero section
    gsap.to('.hero-content', {
      y: 100,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    })

    // Scale down logo on scroll
    gsap.to('.hero-logo', {
      scale: 0.8,
      y: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '50% top',
        scrub: 1,
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Animate headline characters
  useEffect(() => {
    if (!headlineRef.current) return
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const words = headlineRef.current.querySelectorAll('.word')
    
    gsap.fromTo(words,
      { 
        opacity: 0, 
        y: 80,
        rotateX: -80,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        delay: 0.3,
      }
    )
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <AnimatedGradient />
      
      {/* Premium gradient mesh background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-stone-50" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#322918 1px, transparent 1px), linear-gradient(90deg, #322918 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16 hero-content">
        <div className="max-w-5xl mx-auto">
          
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm text-accent font-semibold text-sm rounded-full border border-accent/20 shadow-lg">
              <Sparkles className="w-4 h-4" />
              Launching Soon in Your Area
            </div>
          </motion.div>

          {/* Main content - two column on desktop */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left side - Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Headline with character animation */}
              <h1 
                ref={headlineRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                style={{ perspective: '1000px' }}
              >
                <span className="word inline-block text-text">Professional </span>
                <span className="word inline-block bg-gradient-to-r from-primary via-primary to-deep bg-clip-text text-transparent">
                  Veterinary
                </span>
                <br />
                <span className="word inline-block bg-gradient-to-r from-primary via-primary to-deep bg-clip-text text-transparent">
                  Care
                </span>
                <span className="word inline-block text-text"> at </span>
                <span className="word inline-block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Your
                </span>
                <br />
                <span className="word inline-block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Doorstep
                </span>
              </h1>

              {/* Cycling service text */}
              <motion.div 
                className="mb-6 h-8 flex items-center justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="text-text-muted text-lg mr-2">Currently viewing:</span>
                <CyclingTextScramble
                  texts={serviceTaglines}
                  interval={3500}
                  duration={0.8}
                  speed={0.03}
                  className="text-primary font-semibold text-lg"
                  as="span"
                />
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-xl text-text-muted mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Stress-free veterinary care for small animals and exotic pets. 
                We bring professional medical services directly to your home across 
                <span className="text-text font-medium"> Wrexham, Chester</span> and surrounding areas.
              </motion.p>

              {/* CTA Buttons with Magnetic Effect */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <MagneticButton
                  href="#register"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Register Your Interest</span>
                  <Heart className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </MagneticButton>
                
                <MagneticButton
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text font-semibold text-lg rounded-xl border-2 border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                >
                  Explore Services
                </MagneticButton>
              </motion.div>

              {/* Benefit badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: benefit.delay + 1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm cursor-default"
                  >
                    <benefit.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-text">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side - Logo showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, type: 'spring' }}
              className="relative flex items-center justify-center order-1 lg:order-2 hero-logo"
            >
              {/* Decorative rings with rotation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full border border-primary/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div 
                  className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full border border-primary/5"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                />
              </div>
              
              {/* Floating elements around logo */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-8 sm:top-8 sm:right-12 text-4xl sm:text-5xl drop-shadow-lg"
              >
                🐾
              </motion.div>
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-4 sm:bottom-12 sm:left-8 text-3xl sm:text-4xl drop-shadow-lg"
              >
                ❤️
              </motion.div>
              <motion.div
                animate={{ 
                  x: [-5, 5, -5],
                  y: [-3, 3, -3]
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-0 text-3xl drop-shadow-lg"
              >
                🐕
              </motion.div>
              <motion.div
                animate={{ 
                  x: [5, -5, 5],
                  y: [3, -3, 3]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-0 text-3xl drop-shadow-lg"
              >
                🐈
              </motion.div>

              {/* Logo container with premium styling */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: logoLoaded ? 1 : 0.8, opacity: logoLoaded ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                {/* Glow effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-3xl blur-2xl transform scale-110" />
                
                {/* Logo */}
                <img
                  src={logoImg}
                  alt="Heart @ Home - Mobile Vet"
                  className="relative w-56 sm:w-72 lg:w-80 h-auto drop-shadow-2xl"
                  onLoad={() => setLogoLoaded(true)}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.2, ease: 'easeOut' }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
