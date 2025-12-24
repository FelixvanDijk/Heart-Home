import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, MapPin, Clock, Shield } from 'lucide-react'
import { CyclingTextScramble } from './ui/TextScramble'
import logoImg from '/assets/logo.png'

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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Premium gradient mesh background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-stone-50" />
        
        {/* Gradient orbs for depth */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#322918 1px, transparent 1px), linear-gradient(90deg, #322918 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm text-accent font-semibold text-sm rounded-full border border-accent/20">
              <Sparkles className="w-4 h-4" />
              Launching Soon in Your Area
            </div>
          </motion.div>

          {/* Main content - two column on desktop */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Headline with gradient */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-text">Professional </span>
                <span className="bg-gradient-to-r from-primary via-primary to-deep bg-clip-text text-transparent">
                  Veterinary Care
                </span>
                <br />
                <span className="text-text">at </span>
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Your Doorstep
                </span>
              </h1>

              {/* Cycling service text */}
              <div className="mb-6 h-8 flex items-center justify-center lg:justify-start">
                <span className="text-text-muted text-lg mr-2">Currently viewing:</span>
                <CyclingTextScramble
                  texts={serviceTaglines}
                  interval={3500}
                  duration={0.8}
                  speed={0.03}
                  className="text-primary font-semibold text-lg"
                  as="span"
                />
              </div>

              {/* Description */}
              <p className="text-xl text-text-muted mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Stress-free veterinary care for small animals and exotic pets. 
                We bring professional medical services directly to your home across 
                <span className="text-text font-medium"> Wrexham, Chester</span> and surrounding areas.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <motion.a
                  href="#register"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Register Your Interest</span>
                  <Heart className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-text font-semibold text-lg rounded-xl border-2 border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                >
                  Explore Services
                </motion.a>
              </div>

              {/* Benefit badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {benefits.map((benefit) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: benefit.delay + 0.5 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm"
                  >
                    <benefit.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-text">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Logo showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex items-center justify-center order-1 lg:order-2"
            >
              {/* Decorative rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full border border-primary/10" />
                <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full border border-primary/5" />
              </div>
              
              {/* Floating elements around logo */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-8 sm:top-8 sm:right-12 text-3xl sm:text-4xl"
              >
                🐾
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-4 sm:bottom-12 sm:left-8 text-2xl sm:text-3xl"
              >
                ❤️
              </motion.div>
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-0 text-2xl"
              >
                🐕
              </motion.div>
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-0 text-2xl"
              >
                🐈
              </motion.div>

              {/* Logo container with premium styling */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: logoLoaded ? 1 : 0.9, opacity: logoLoaded ? 1 : 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative z-10"
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
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />
        </div>
      </div>
    </section>
  )
}
