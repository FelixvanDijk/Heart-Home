"use client"

import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { cn } from '../lib/utils'

// Placeholder testimonials - factual statements about home vet care benefits
const testimonials = [
  {
    id: 1,
    quote: "Home visits eliminate the stress of car journeys for pets. Animals often feel more relaxed and comfortable in familiar surroundings.",
    name: "Coming Soon!",
    location: "Placeholder Testimonial",
    pet: "Your Pet Here",
    avatar: "✨",
    rating: 5,
  },
  {
    id: 2,
    quote: "Elderly and unwell pets benefit greatly from home veterinary care, avoiding the physical strain of travelling to a clinic.",
    name: "Coming Soon!",
    location: "Placeholder Testimonial",
    pet: "Your Pet Here",
    avatar: "✨",
    rating: 5,
  },
  {
    id: 3,
    quote: "Exotic pets like reptiles and birds can be safely examined at home, where temperature and environment are already optimised.",
    name: "Coming Soon!",
    location: "Placeholder Testimonial",
    pet: "Your Pet Here",
    avatar: "✨",
    rating: 5,
  },
  {
    id: 4,
    quote: "Multi-pet households save time and stress when the vet comes to them — no need for multiple car journeys or carriers.",
    name: "Coming Soon!",
    location: "Placeholder Testimonial",
    pet: "Your Pet Here",
    avatar: "✨",
    rating: 5,
  },
  {
    id: 5,
    quote: "Nervous and anxious animals often respond better to veterinary care when they're in their own home environment.",
    name: "Coming Soon!",
    location: "Placeholder Testimonial",
    pet: "Your Pet Here",
    avatar: "✨",
    rating: 5,
  },
  {
    id: 6,
    quote: "Pet transport services are convenient when owners are unable to drive or when pets need transferring between veterinary practices.",
    name: "Coming Soon!",
    location: "Placeholder Testimonial",
    pet: "Your Pet Here",
    avatar: "✨",
    rating: 5,
  },
]

// Avatar colors based on brand palette
const avatarColors = [
  'from-primary to-deep',
  'from-accent to-secondary',
  'from-secondary to-primary',
  'from-deep to-primary',
  'from-primary to-accent',
  'from-accent to-deep',
]

interface TestimonialCardProps {
  testimonial: typeof testimonials[0]
  position: number
  handleMove: (steps: number) => void
  cardSize: number
  colorIndex: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  position, 
  handleMove, 
  cardSize,
  colorIndex,
}) => {
  const isCenter = position === 0
  const isVisible = Math.abs(position) <= 2

  if (!isVisible) return null

  return (
    <motion.div
      layout
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-500 ease-out",
        isCenter 
          ? "z-10 bg-white shadow-2xl border-2 border-primary/20" 
          : "z-0 bg-white/80 shadow-lg border border-gray-100 hover:border-primary/30"
      )}
      style={{
        width: cardSize,
        minHeight: cardSize * 0.85,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.4) * position}px)
          translateY(${isCenter ? -20 : position % 2 ? 20 : -10}px)
          rotate(${isCenter ? 0 : position % 2 ? 3 : -3}deg)
          scale(${isCenter ? 1 : 0.9})
        `,
        opacity: isCenter ? 1 : 0.7,
      }}
    >
      {/* Quote icon */}
      <div className={cn(
        "absolute -top-4 -left-2 w-10 h-10 rounded-full flex items-center justify-center",
        isCenter ? "bg-primary text-white" : "bg-gray-100 text-gray-400"
      )}>
        <Quote className="w-5 h-5" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "w-5 h-5",
              isCenter ? "text-accent fill-accent" : "text-gray-300 fill-gray-300"
            )} 
          />
        ))}
      </div>

      {/* Quote */}
      <p className={cn(
        "text-base sm:text-lg leading-relaxed mb-6",
        isCenter ? "text-text" : "text-text-muted"
      )}>
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br",
          avatarColors[colorIndex % avatarColors.length]
        )}>
          {testimonial.avatar}
        </div>
        <div>
          <p className={cn(
            "font-semibold",
            isCenter ? "text-text" : "text-text-muted"
          )}>
            {testimonial.name}
          </p>
          <p className="text-sm text-text-muted">
            {testimonial.pet} • {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const [cardSize, setCardSize] = useState(340)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const handleMove = (steps: number) => {
    if (steps === 0) return
    
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, id: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, id: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 380 : 300)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleMove(1)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonialsList])

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-primary/5 overflow-hidden" ref={containerRef}>
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary font-semibold text-lg mb-3 tracking-wide uppercase">
            Benefits of Home Vet Care
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-4">
            Why Pets Love Home Visits
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Here's why home veterinary care makes a difference for pets and their owners.
          </p>
          
          {/* Placeholder notice */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Real testimonials coming soon!
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative w-full"
          style={{ height: 500 }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {testimonialsList.map((testimonial, index) => {
            const position = testimonialsList.length % 2
              ? index - (testimonialsList.length + 1) / 2
              : index - testimonialsList.length / 2
            return (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                handleMove={handleMove}
                position={Math.round(position)}
                cardSize={cardSize}
                colorIndex={index}
              />
            )
          })}

          {/* Navigation buttons */}
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-3 z-20">
            <button
              onClick={() => handleMove(-1)}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-gray-200 text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleMove(1)}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white border-2 border-gray-200 text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

