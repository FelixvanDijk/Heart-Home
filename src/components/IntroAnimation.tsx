import { useState, useEffect } from 'react'
import logoImg from '/assets/logo.png'

// Simple SVG animal silhouettes inspired by the logo
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
    {/* Shell */}
    <ellipse cx="45" cy="35" rx="30" ry="20" />
    {/* Shell pattern */}
    <ellipse cx="45" cy="35" rx="20" ry="12" fill="none" stroke="#322918" strokeWidth="2" opacity="0.3" />
    {/* Head */}
    <ellipse cx="12" cy="35" rx="10" ry="8" />
    <circle cx="8" cy="33" r="1.5" fill="#322918" />
    {/* Legs */}
    <ellipse cx="25" cy="50" rx="6" ry="8" />
    <ellipse cx="65" cy="50" rx="6" ry="8" />
    <ellipse cx="25" cy="22" rx="5" ry="6" />
    <ellipse cx="65" cy="22" rx="5" ry="6" />
    {/* Tail */}
    <ellipse cx="78" cy="38" rx="6" ry="3" />
  </svg>
)

const ParrotSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 80" className={className} fill="currentColor">
    {/* Body */}
    <ellipse cx="25" cy="45" rx="15" ry="20" />
    {/* Head */}
    <circle cx="25" cy="20" r="12" />
    {/* Beak */}
    <path d="M37,18 Q45,22 38,28 Q35,25 37,18" fill="#DB6435" />
    {/* Eye */}
    <circle cx="30" cy="18" r="2" fill="#322918" />
    {/* Wing */}
    <ellipse cx="18" cy="45" rx="8" ry="15" opacity="0.7" />
    {/* Tail feathers */}
    <rect x="20" y="60" width="4" height="18" rx="2" />
    <rect x="26" y="62" width="4" height="16" rx="2" />
    {/* Feet */}
    <rect x="20" y="58" width="3" height="6" rx="1" fill="#322918" />
    <rect x="27" y="58" width="3" height="6" rx="1" fill="#322918" />
  </svg>
)

const LizardSilhouette = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 40" className={className} fill="currentColor">
    {/* Body */}
    <ellipse cx="50" cy="20" rx="25" ry="8" />
    {/* Head */}
    <ellipse cx="20" cy="18" rx="12" ry="7" />
    {/* Eye */}
    <circle cx="14" cy="16" r="2" fill="#322918" />
    {/* Front legs */}
    <path d="M35,22 L25,35 M27,35 L35,35" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M40,15 L30,5 M32,5 L40,5" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" />
    {/* Back legs */}
    <path d="M65,22 L75,35 M73,35 L65,35" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" />
    <path d="M60,15 L70,5 M68,5 L60,5" strokeWidth="4" stroke="currentColor" fill="none" strokeLinecap="round" />
    {/* Tail */}
    <path d="M75,20 Q90,15 95,25" strokeWidth="5" stroke="currentColor" fill="none" strokeLinecap="round" />
  </svg>
)

interface IntroAnimationProps {
  onComplete: () => void
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'walking' | 'gathered' | 'logo' | 'done'>('walking')
  
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) {
      onComplete()
      return
    }

    // Phase 1: Animals walk in (2s)
    const timer1 = setTimeout(() => setPhase('gathered'), 2000)
    
    // Phase 2: Animals gathered, pause (1s)
    const timer2 = setTimeout(() => setPhase('logo'), 3000)
    
    // Phase 3: Logo appears (1.2s)
    const timer3 = setTimeout(() => setPhase('done'), 4200)
    
    // Phase 4: Complete and fade out
    const timer4 = setTimeout(() => onComplete(), 4800)

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
      className={`fixed inset-0 z-[200] bg-background flex items-center justify-center transition-opacity duration-600 ${
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

      <div className="relative w-[400px] h-[400px] flex items-center justify-center">
        
        {/* Lizard - walks in from top left */}
        <div 
          className={`absolute transition-all ease-out ${
            phase === 'walking' 
              ? '-translate-x-[250px] -translate-y-[150px] opacity-100 duration-[2000ms]' 
              : phase === 'gathered'
              ? '-translate-x-20 -translate-y-24 opacity-100 duration-700'
              : 'scale-0 opacity-0 duration-300'
          }`}
        >
          <LizardSilhouette className="w-16 h-8 text-[#4A7C59]" />
        </div>

        {/* Parrot - flies in from top right */}
        <div 
          className={`absolute transition-all ease-out ${
            phase === 'walking' 
              ? 'translate-x-[250px] -translate-y-[150px] opacity-100 duration-[2000ms]' 
              : phase === 'gathered'
              ? 'translate-x-24 -translate-y-20 opacity-100 duration-700'
              : 'scale-0 opacity-0 duration-300'
          }`}
          style={{ transitionDelay: phase === 'walking' ? '100ms' : '0ms' }}
        >
          <ParrotSilhouette className="w-12 h-16 text-[#E07020]" />
        </div>

        {/* Dog - walks in from left */}
        <div 
          className={`absolute transition-all ease-out ${
            phase === 'walking' 
              ? '-translate-x-[280px] opacity-100 duration-[2000ms]' 
              : phase === 'gathered'
              ? '-translate-x-16 translate-y-4 opacity-100 duration-700'
              : 'scale-0 opacity-0 duration-300'
          }`}
          style={{ transitionDelay: phase === 'walking' ? '200ms' : '50ms' }}
        >
          <DogSilhouette className="w-24 h-20 text-[#8B6914]" />
        </div>

        {/* Cat - walks in from right */}
        <div 
          className={`absolute transition-all ease-out ${
            phase === 'walking' 
              ? 'translate-x-[280px] opacity-100 duration-[2000ms]' 
              : phase === 'gathered'
              ? 'translate-x-2 translate-y-8 opacity-100 duration-700'
              : 'scale-0 opacity-0 duration-300'
          }`}
          style={{ transitionDelay: phase === 'walking' ? '150ms' : '100ms' }}
        >
          <CatSilhouette className="w-20 h-20 text-gray-500" />
        </div>

        {/* Turtle - walks in from bottom left */}
        <div 
          className={`absolute transition-all ease-out ${
            phase === 'walking' 
              ? '-translate-x-[200px] translate-y-[180px] opacity-100 duration-[2000ms]' 
              : phase === 'gathered'
              ? '-translate-x-24 translate-y-16 opacity-100 duration-700'
              : 'scale-0 opacity-0 duration-300'
          }`}
          style={{ transitionDelay: phase === 'walking' ? '300ms' : '150ms' }}
        >
          <TurtleSilhouette className="w-20 h-14 text-[#5D7E5E]" />
        </div>

        {/* Rabbit - hops in from bottom right */}
        <div 
          className={`absolute transition-all ease-out ${
            phase === 'walking' 
              ? 'translate-x-[200px] translate-y-[180px] opacity-100 duration-[2000ms]' 
              : phase === 'gathered'
              ? 'translate-x-20 translate-y-12 opacity-100 duration-700'
              : 'scale-0 opacity-0 duration-300'
          }`}
          style={{ transitionDelay: phase === 'walking' ? '250ms' : '200ms' }}
        >
          <RabbitSilhouette className="w-14 h-18 text-[#C4A574]" />
        </div>

        {/* Paw prints trail effect */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${
          phase === 'walking' || phase === 'gathered' ? 'opacity-20' : 'opacity-0'
        }`}>
          <span className="absolute left-0 top-1/2 text-2xl animate-pulse">🐾</span>
          <span className="absolute left-12 top-1/2 translate-y-3 text-xl animate-pulse" style={{ animationDelay: '100ms' }}>🐾</span>
          <span className="absolute right-0 top-1/2 text-2xl animate-pulse" style={{ animationDelay: '200ms' }}>🐾</span>
          <span className="absolute right-12 top-1/2 -translate-y-3 text-xl animate-pulse" style={{ animationDelay: '300ms' }}>🐾</span>
          <span className="absolute bottom-8 left-1/3 text-xl animate-pulse" style={{ animationDelay: '400ms' }}>🐾</span>
          <span className="absolute bottom-12 right-1/3 text-lg animate-pulse" style={{ animationDelay: '500ms' }}>🐾</span>
        </div>

        {/* Heart that appears when gathered */}
        <div 
          className={`absolute transition-all duration-500 ${
            phase === 'gathered'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-0'
          }`}
        >
          <span className="text-5xl">❤️</span>
        </div>

        {/* Logo - fades in and scales up */}
        <div 
          className={`absolute transition-all duration-700 ease-out ${
            phase === 'logo' || phase === 'done'
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-50'
          }`}
        >
          <img 
            src={logoImg} 
            alt="Heart @ Home" 
            className="w-72 h-72 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Welcome text */}
        <div 
          className={`absolute -bottom-16 text-center transition-all duration-500 ${
            phase === 'logo' || phase === 'done'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-2xl font-bold text-primary">Welcome!</p>
          <p className="text-text-muted mt-1">Mobile Vet Home Visits</p>
        </div>
      </div>
    </div>
  )
}
