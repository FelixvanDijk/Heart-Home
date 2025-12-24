import { useState, useEffect } from 'react'
import logoImg from '/assets/logo.png'

// Simple SVG animal silhouettes inspired by the logo
const DogSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 80" className={className} fill="currentColor">
    {/* Simple dog shape */}
    <ellipse cx="60" cy="55" rx="25" ry="18" /> {/* Body */}
    <circle cx="30" cy="45" r="15" /> {/* Head */}
    <ellipse cx="22" cy="35" rx="5" ry="8" /> {/* Ear */}
    <ellipse cx="38" cy="35" rx="5" ry="8" /> {/* Ear */}
    <ellipse cx="25" cy="48" rx="4" ry="3" fill="#322918" /> {/* Nose */}
    <circle cx="24" cy="42" r="2" fill="#322918" /> {/* Eye */}
    <rect x="45" y="60" width="6" height="15" rx="3" /> {/* Front leg */}
    <rect x="55" y="60" width="6" height="15" rx="3" /> {/* Front leg */}
    <rect x="70" y="60" width="6" height="15" rx="3" /> {/* Back leg */}
    <rect x="80" y="60" width="6" height="15" rx="3" /> {/* Back leg */}
    <ellipse cx="90" cy="45" rx="8" ry="4" /> {/* Tail */}
  </svg>
)

const CatSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 80 80" className={className} fill="currentColor">
    {/* Simple cat shape */}
    <ellipse cx="45" cy="55" rx="20" ry="15" /> {/* Body */}
    <circle cx="25" cy="40" r="12" /> {/* Head */}
    <polygon points="15,30 20,15 25,30" /> {/* Ear */}
    <polygon points="25,30 30,15 35,30" /> {/* Ear */}
    <circle cx="21" cy="38" r="2" fill="#322918" /> {/* Eye */}
    <circle cx="29" cy="38" r="2" fill="#322918" /> {/* Eye */}
    <ellipse cx="25" cy="44" rx="2" ry="1.5" fill="#322918" /> {/* Nose */}
    <rect x="35" y="58" width="5" height="12" rx="2" /> {/* Front leg */}
    <rect x="42" y="58" width="5" height="12" rx="2" /> {/* Front leg */}
    <rect x="52" y="58" width="5" height="12" rx="2" /> {/* Back leg */}
    <rect x="59" y="58" width="5" height="12" rx="2" /> {/* Back leg */}
    <path d="M65,50 Q80,40 75,55" strokeWidth="4" stroke="currentColor" fill="none" /> {/* Tail */}
  </svg>
)

const RabbitSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 80" className={className} fill="currentColor">
    {/* Simple rabbit shape */}
    <ellipse cx="30" cy="55" rx="18" ry="15" /> {/* Body */}
    <circle cx="30" cy="35" r="12" /> {/* Head */}
    <ellipse cx="24" cy="15" rx="4" ry="15" /> {/* Ear */}
    <ellipse cx="36" cy="15" rx="4" ry="15" /> {/* Ear */}
    <circle cx="26" cy="33" r="2" fill="#322918" /> {/* Eye */}
    <circle cx="34" cy="33" r="2" fill="#322918" /> {/* Eye */}
    <ellipse cx="30" cy="40" rx="2" ry="1.5" fill="#322918" /> {/* Nose */}
    <rect x="22" y="62" width="5" height="10" rx="2" /> {/* Leg */}
    <rect x="33" y="62" width="5" height="10" rx="2" /> {/* Leg */}
    <circle cx="48" cy="55" r="6" /> {/* Tail puff */}
  </svg>
)

interface IntroAnimationProps {
  onComplete: () => void
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'walking' | 'gathered' | 'logo' | 'done'>('walking')
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) {
      // Skip animation for reduced motion
      onComplete()
      return
    }

    // Phase 1: Animals walk in (1.5s)
    const timer1 = setTimeout(() => setPhase('gathered'), 1500)
    
    // Phase 2: Animals gathered, pause (0.5s)
    const timer2 = setTimeout(() => setPhase('logo'), 2000)
    
    // Phase 3: Logo appears (1s)
    const timer3 = setTimeout(() => setPhase('done'), 3000)
    
    // Phase 4: Complete and fade out
    const timer4 = setTimeout(() => onComplete(), 3500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete, prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <div 
      className={`fixed inset-0 z-[200] bg-background flex items-center justify-center transition-opacity duration-500 ${
        phase === 'done' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23322918' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* Dog - walks in from left */}
        <div 
          className={`absolute transition-all duration-1000 ease-out ${
            phase === 'walking' 
              ? '-translate-x-[200px] opacity-100' 
              : phase === 'gathered'
              ? '-translate-x-12 -translate-y-4 opacity-100'
              : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: phase === 'logo' ? '0ms' : '0ms' }}
        >
          <DogSilhouette className="w-24 h-20 text-[#8B6914]" />
        </div>

        {/* Cat - walks in from right */}
        <div 
          className={`absolute transition-all duration-1000 ease-out ${
            phase === 'walking' 
              ? 'translate-x-[200px] opacity-100' 
              : phase === 'gathered'
              ? 'translate-x-8 translate-y-2 opacity-100'
              : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: phase === 'logo' ? '100ms' : '100ms' }}
        >
          <CatSilhouette className="w-20 h-20 text-gray-500" />
        </div>

        {/* Rabbit - hops in from bottom */}
        <div 
          className={`absolute transition-all duration-1000 ease-out ${
            phase === 'walking' 
              ? 'translate-y-[200px] opacity-100' 
              : phase === 'gathered'
              ? 'translate-x-16 translate-y-8 opacity-100'
              : 'scale-0 opacity-0'
          }`}
          style={{ transitionDelay: phase === 'logo' ? '50ms' : '200ms' }}
        >
          <RabbitSilhouette className="w-16 h-20 text-[#C4A574]" />
        </div>

        {/* Paw prints trail effect */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          phase === 'walking' || phase === 'gathered' ? 'opacity-30' : 'opacity-0'
        }`}>
          <span className="absolute left-0 top-1/2 text-2xl animate-pulse">🐾</span>
          <span className="absolute left-8 top-1/2 translate-y-2 text-xl animate-pulse" style={{ animationDelay: '100ms' }}>🐾</span>
          <span className="absolute right-0 top-1/2 text-2xl animate-pulse" style={{ animationDelay: '200ms' }}>🐾</span>
          <span className="absolute right-8 top-1/2 -translate-y-2 text-xl animate-pulse" style={{ animationDelay: '300ms' }}>🐾</span>
          <span className="absolute bottom-4 left-1/2 text-xl animate-pulse" style={{ animationDelay: '400ms' }}>🐾</span>
        </div>

        {/* Logo - fades in and scales up */}
        <div 
          className={`absolute transition-all duration-700 ease-out ${
            phase === 'logo' || phase === 'done'
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-75'
          }`}
        >
          <img 
            src={logoImg} 
            alt="Heart @ Home" 
            className="w-64 h-64 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Welcome text */}
        <div 
          className={`absolute -bottom-20 text-center transition-all duration-500 ${
            phase === 'logo' || phase === 'done'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-2xl font-bold text-primary">Welcome!</p>
        </div>
      </div>
    </div>
  )
}

