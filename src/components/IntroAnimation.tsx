import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '/assets/logo.png'

// Import animal images
import catImg from '/assets/cat.png'
import dogImg from '/assets/dog.png'
import lizardImg from '/assets/lizard.png'
import parrotImg from '/assets/parrot.png'
import rabbitImg from '/assets/rabbit.png'
import tortoiseImg from '/assets/tortoise.png'
import heartImg from '/assets/red heart.png'

// Simple house outline SVG (like the logo)
const HouseOutline = ({ isVisible }: { isVisible: boolean }) => (
  <motion.svg
    viewBox="0 0 200 180"
    className="w-64 h-56 absolute"
    initial={{ opacity: 0 }}
    animate={{ opacity: isVisible ? 1 : 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Roof */}
    <motion.path
      d="M100 10 L190 80 L10 80 Z"
      fill="none"
      stroke="#59A5AE"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isVisible ? 1 : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
    {/* Left wall */}
    <motion.line
      x1="30" y1="80"
      x2="30" y2="170"
      stroke="#59A5AE"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
    />
    {/* Right wall */}
    <motion.line
      x1="170" y1="80"
      x2="170" y2="170"
      stroke="#59A5AE"
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isVisible ? 1 : 0 }}
      transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
    />
  </motion.svg>
)

// Animal data with positions - using actual images
// Positions calibrated to match the logo layout precisely
const animals = [
  { 
    id: 'lizard',
    image: lizardImg,
    size: 'w-14 h-8',
    startPos: { x: -300, y: -120 },
    endPos: { x: -55, y: -82 },  // Roof top-left, sitting on roof line
    delay: 0,
  },
  { 
    id: 'parrot',
    image: parrotImg,
    size: 'w-12 h-14',
    startPos: { x: 300, y: -150 },
    endPos: { x: 72, y: -72 },  // Roof top-right, perched on edge
    delay: 0.15,
  },
  { 
    id: 'cat',
    image: catImg,
    size: 'w-16 h-18',
    startPos: { x: -350, y: 10 },
    endPos: { x: -42, y: 8 },  // Left side, leaning into heart
    delay: 0.2,
  },
  { 
    id: 'dog',
    image: dogImg,
    size: 'w-20 h-18',
    startPos: { x: 350, y: 0 },
    endPos: { x: 28, y: -8 },  // Right side, head behind/above heart
    delay: 0.3,
  },
  { 
    id: 'tortoise',
    image: tortoiseImg,
    size: 'w-18 h-12',
    startPos: { x: -280, y: 200 },
    endPos: { x: -58, y: 48 },  // Bottom-left, below cat
    delay: 0.45,
  },
  { 
    id: 'rabbit',
    image: rabbitImg,
    size: 'w-12 h-14',
    startPos: { x: 280, y: 200 },
    endPos: { x: 52, y: 32 },  // Bottom-right, next to dog
    delay: 0.35,
  },
]

interface IntroAnimationProps {
  onComplete: () => void
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'house' | 'animals' | 'gathered' | 'heart' | 'logo' | 'done'>('house')
  
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete()
      return
    }

    // Timeline
    const timers = [
      setTimeout(() => setPhase('animals'), 800),      // House draws, then animals start
      setTimeout(() => setPhase('gathered'), 2800),    // Animals arrive
      setTimeout(() => setPhase('heart'), 3300),       // Heart appears
      setTimeout(() => setPhase('logo'), 4000),        // Logo appears
      setTimeout(() => setPhase('done'), 5200),        // Start fade
      setTimeout(() => onComplete(), 5800),            // Complete
    ]

    return () => timers.forEach(clearTimeout)
  }, [onComplete, prefersReducedMotion])

  if (prefersReducedMotion) return null

  const showHouse = phase !== 'done'
  const showAnimals = phase === 'animals' || phase === 'gathered' || phase === 'heart'
  const animalsGathered = phase === 'gathered' || phase === 'heart'
  const showHeart = phase === 'heart'
  const showLogo = phase === 'logo' || phase === 'done'

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div 
          className="fixed inset-0 z-[200] bg-background flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          
          {/* Background pattern */}
          <motion.div 
            className="absolute inset-0 opacity-[0.02]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23322918' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative flex items-center justify-center">
            {/* House outline that draws itself */}
            <HouseOutline isVisible={showHouse && !showLogo} />

            {/* Animals */}
            <AnimatePresence>
              {showAnimals && animals.map((animal) => (
                <motion.div
                  key={animal.id}
                  className={`absolute ${animal.size}`}
                  initial={{ 
                    x: animal.startPos.x, 
                    y: animal.startPos.y,
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{ 
                    x: animalsGathered ? animal.endPos.x : animal.startPos.x * 0.3,
                    y: animalsGathered ? animal.endPos.y : animal.startPos.y * 0.3,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ 
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    delay: animal.delay,
                  }}
                >
                  <img 
                    src={animal.image} 
                    alt={animal.id} 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Heart in center */}
            <AnimatePresence>
              {showHeart && (
                <motion.div
                  className="absolute w-16 h-16"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                  }}
                >
                  <img 
                    src={heartImg} 
                    alt="Heart" 
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Full Logo with Welcome text beneath */}
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 0.8,
                  }}
                >
                  <motion.img 
                    src={logoImg} 
                    alt="Heart @ Home Mobile Vet" 
                    className="w-80 h-80 md:w-96 md:h-96 object-contain drop-shadow-2xl"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  />
                  <motion.div 
                    className="text-center mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                  >
                    <motion.p 
                      className="text-3xl md:text-4xl font-bold text-primary"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Welcome!
                    </motion.p>
                    <motion.p 
                      className="text-text-muted mt-2 text-lg md:text-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      Veterinary care with heart — at home
                    </motion.p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Floating paw prints in background */}
          {(phase === 'animals' || phase === 'gathered') && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(12)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-2xl drop-shadow-md"
                  style={{ 
                    color: i % 3 === 0 ? '#59A5AE' : i % 3 === 1 ? '#8B6914' : '#38524B',
                    opacity: 0.7,
                  }}
                  initial={{ 
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                    y: typeof window !== 'undefined' ? window.innerHeight + 50 : 800,
                    rotate: Math.random() * 360,
                    scale: 0.8 + Math.random() * 0.6,
                  }}
                  animate={{ 
                    y: -100,
                    rotate: Math.random() * 360 + 180,
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: i * 0.2,
                    ease: "linear",
                  }}
                >
                  🐾
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
