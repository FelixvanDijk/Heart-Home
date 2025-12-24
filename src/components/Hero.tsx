import { useState } from 'react'
import { Sparkles, Heart } from 'lucide-react'
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

// Floating decorative elements
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating paw prints */}
      <div className="absolute top-20 left-[10%] text-primary/20 text-4xl animate-float-slow">🐾</div>
      <div className="absolute top-40 right-[15%] text-accent/20 text-3xl animate-float-medium">🐾</div>
      <div className="absolute bottom-32 left-[20%] text-secondary/30 text-5xl animate-float-fast">🐾</div>
      <div className="absolute bottom-20 right-[25%] text-primary/15 text-4xl animate-float-slow">❤️</div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
    </div>
  )
}

export default function Hero() {
  const [logoLoaded, setLogoLoaded] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23322918' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <FloatingElements />

      <div className="container-custom relative z-10 text-center py-8">
        {/* Logo with scale-in animation */}
        <div 
          className={`mb-8 transition-all duration-700 ease-out ${
            logoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <img
            src={logoImg}
            alt="Heart @ Home - Mobile Vet"
            className="mx-auto h-36 md:h-48 lg:h-56 w-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
            onLoad={() => setLogoLoaded(true)}
          />
        </div>

        {/* Coming Soon Badge with pulse */}
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-accent/10 text-accent font-bold text-lg rounded-full border-2 border-accent/20 animate-pulse-badge">
          <Sparkles className="w-5 h-5" />
          Coming Soon!
        </div>

        {/* Animated Headline with Text Scramble */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 min-h-[1.2em]">
          <CyclingTextScramble
            texts={serviceTaglines}
            interval={3500}
            duration={1}
            speed={0.03}
            className="inline-block"
            as="span"
          />
        </h1>

        {/* Handwritten-style tagline */}
        <p className="text-2xl md:text-3xl text-primary font-medium mb-4 italic" style={{ fontFamily: 'Georgia, serif' }}>
          "Where care comes to you"
        </p>

        {/* Subheading with highlight effect */}
        <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Caring, stress-free veterinary care for{' '}
          <span className="text-primary font-semibold relative inline-block group">
            small animals
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded" />
          </span>{' '}
          &{' '}
          <span className="text-primary font-semibold relative inline-block">
            exotic pets
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded" />
          </span>{' '}
          — in the comfort of your home.
          <br />
          <span className="text-lg flex items-center justify-center gap-2 mt-2">
            <Heart className="w-4 h-4 text-accent" />
            Serving Wrexham, Chester & surrounding areas
            <Heart className="w-4 h-4 text-accent" />
          </span>
        </p>

        {/* CTA Buttons with enhanced hover */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#register" 
            className="btn-primary text-xl px-8 py-4 w-full sm:w-auto group relative overflow-hidden"
          >
            <span className="relative z-10">Register Your Interest</span>
            <div className="absolute inset-0 bg-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a 
            href="#services" 
            className="btn-secondary text-xl px-8 py-4 w-full sm:w-auto hover:shadow-lg"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}
