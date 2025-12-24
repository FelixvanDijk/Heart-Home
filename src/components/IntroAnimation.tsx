import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '/assets/logo.png'

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

// Animal SVG components
const DogSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 80" className={className} fill="currentColor">
    <ellipse cx="60" cy="55" rx="25" ry="18" />
    <circle cx="30" cy="45" r="15" />
    <ellipse cx="22" cy="35" rx="5" ry="8" />
    <ellipse cx="38" cy="35" rx="5" ry="8" />
    <ellipse cx="25" cy="48" rx="4" ry="3" fill="#322918" />
    <circle cx="24" cy="42" r="2" fill="#322918" />
    <rect x="45" y="60" width="6" height="15" rx="3" />
    <rect x="55" y="60" width="6" height="15" rx="3" />
    <rect x="70" y="60" width="6" height="15" rx="3" />
    <rect x="80" y="60" width="6" height="15" rx="3" />
    <ellipse cx="90" cy="45" rx="8" ry="4" />
  </svg>
)

const CatSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 80" className={className} fill="currentColor">
    <ellipse cx="45" cy="55" rx="20" ry="15" />
    <circle cx="25" cy="40" r="12" />
    <polygon points="15,30 20,15 25,30" />
    <polygon points="25,30 30,15 35,30" />
    <circle cx="21" cy="38" r="2" fill="#322918" />
    <circle cx="29" cy="38" r="2" fill="#322918" />
    <ellipse cx="25" cy="44" rx="2" ry="1.5" fill="#322918" />
    <rect x="35" y="58" width="5" height="12" rx="2" />
    <rect x="42" y="58" width="5" height="12" rx="2" />
    <rect x="52" y="58" width="5" height="12" rx="2" />
    <rect x="59" y="58" width="5" height="12" rx="2" />
    <path d="M65,50 Q80,40 75,55" strokeWidth="4" stroke="currentColor" fill="none" />
  </svg>
)

const RabbitSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 80" className={className} fill="currentColor">
    <ellipse cx="30" cy="55" rx="18" ry="15" />
    <circle cx="30" cy="35" r="12" />
    <ellipse cx="24" cy="15" rx="4" ry="15" />
    <ellipse cx="36" cy="15" rx="4" ry="15" />
    <circle cx="26" cy="33" r="2" fill="#322918" />
    <circle cx="34" cy="33" r="2" fill="#322918" />
    <ellipse cx="30" cy="40" rx="2" ry="1.5" fill="#322918" />
    <rect x="22" y="62" width="5" height="10" rx="2" />
    <rect x="33" y="62" width="5" height="10" rx="2" />
    <circle cx="48" cy="55" r="6" />
  </svg>
)

const TurtleSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 90 60" className={className} fill="currentColor">
    <ellipse cx="45" cy="35" rx="30" ry="20" />
    <ellipse cx="45" cy="35" rx="20" ry="12" fill="none" stroke="#322918" strokeWidth="2" opacity="0.3" />
    <ellipse cx="12" cy="35" rx="10" ry="8" />
    <circle cx="8" cy="33" r="1.5" fill="#322918" />
    <ellipse cx="25" cy="50" rx="6" ry="8" />
    <ellipse cx="65" cy="50" rx="6" ry="8" />
    <ellipse cx="25" cy="22" rx="5" ry="6" />
    <ellipse cx="65" cy="22" rx="5" ry="6" />
    <ellipse cx="78" cy="38" rx="6" ry="3" />
  </svg>
)

const ParrotSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 80" className={className} fill="currentColor">
    <ellipse cx="25" cy="45" rx="15" ry="20" />
    <circle cx="25" cy="20" r="12" />
    <path d="M37,18 Q45,22 38,28 Q35,25 37,18" fill="#DB6435" />
    <circle cx="30" cy="18" r="2" fill="#322918" />
    <ellipse cx="18" cy="45" rx="8" ry="15" opacity="0.7" />
    <rect x="20" y="60" width="4" height="18" rx="2" />
    <rect x="26" y="62" width="4" height="16" rx="2" />
    <rect x="20" y="58" width="3" height="6" rx="1" fill="#322918" />
    <rect x="27" y="58" width="3" height="6" rx="1" fill="#322918" />
  </svg>
)

const LizardSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 40" className={className} fill="currentColor">
    <ellipse cx="50" cy="20" rx="25" ry="8" />
    <ellipse cx="20" cy="18" rx="12" ry="7" />
    <circle cx="14" cy="16" r="2" fill="#322918" />
    <path d="M35,22 L25,35 M27,35 L35,35" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M40,15 L30,5 M32,5 L40,5" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M65,22 L75,35 M73,35 L65,35" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M60,15 L70,5 M68,5 L60,5" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M75,20 Q90,15 95,25" strokeWidth="5" stroke="currentColor" fill="none" strokeLinecap="round" />
  </svg>
)

// Animal data with positions
const animals = [
  { 
    id: 'lizard',
    Component: LizardSilhouette,
    color: 'text-[#4A7C59]',
    size: 'w-14 h-7',
    startPos: { x: -300, y: -120 },
    endPos: { x: -70, y: -75 },
    delay: 0,
  },
  { 
    id: 'parrot',
    Component: ParrotSilhouette,
    color: 'text-[#E07020]',
    size: 'w-10 h-14',
    startPos: { x: 300, y: -150 },
    endPos: { x: 65, y: -65 },
    delay: 0.15,
  },
  { 
    id: 'dog',
    Component: DogSilhouette,
    color: 'text-[#8B6914]',
    size: 'w-20 h-16',
    startPos: { x: -350, y: 0 },
    endPos: { x: -45, y: 15 },
    delay: 0.3,
  },
  { 
    id: 'cat',
    Component: CatSilhouette,
    color: 'text-gray-500',
    size: 'w-16 h-16',
    startPos: { x: 350, y: 10 },
    endPos: { x: 10, y: 25 },
    delay: 0.2,
  },
  { 
    id: 'turtle',
    Component: TurtleSilhouette,
    color: 'text-[#5D7E5E]',
    size: 'w-16 h-11',
    startPos: { x: -280, y: 200 },
    endPos: { x: -55, y: 50 },
    delay: 0.45,
  },
  { 
    id: 'rabbit',
    Component: RabbitSilhouette,
    color: 'text-[#C4A574]',
    size: 'w-12 h-15',
    startPos: { x: 280, y: 200 },
    endPos: { x: 45, y: 40 },
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
                  className={`absolute ${animal.size} ${animal.color}`}
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
                  <animal.Component className="w-full h-full" />
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Heart in center */}
            <AnimatePresence>
              {showHeart && (
                <motion.div
                  className="absolute text-5xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                  }}
                >
                  ❤️
                </motion.div>
              )}
            </AnimatePresence>

            {/* Logo */}
            <AnimatePresence>
              {showLogo && (
                <motion.div
                  className="absolute"
                  initial={{ scale: 0.3, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    duration: 0.8,
                  }}
                >
                  <img 
                    src={logoImg} 
                    alt="Heart @ Home" 
                    className="w-72 h-72 object-contain drop-shadow-2xl"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Welcome text */}
            <AnimatePresence>
              {showLogo && (
                <motion.div 
                  className="absolute -bottom-24 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                >
                  <motion.p 
                    className="text-3xl font-bold text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Welcome!
                  </motion.p>
                  <motion.p 
                    className="text-text-muted mt-2 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Mobile Vet Home Visits
                  </motion.p>
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
