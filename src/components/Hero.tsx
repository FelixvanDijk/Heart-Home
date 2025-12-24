import { ChevronDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        {/* Abstract shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23322918' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-center py-16">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img
            src="./assets/logo.png"
            alt="Heart @ Home - Mobile Vet"
            className="mx-auto h-40 md:h-52 lg:h-64 w-auto drop-shadow-lg"
          />
        </div>

        {/* Coming Soon Badge */}
        <div 
          className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-accent/10 text-accent font-bold text-lg rounded-full border-2 border-accent/20 animate-slide-up"
          style={{ animationDelay: '0.1s' }}
        >
          <Sparkles className="w-5 h-5" />
          Coming Soon!
        </div>

        {/* Headline */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 animate-slide-up"
          style={{ animationDelay: '0.2s' }}
        >
          Mobile Vet Home Visits
        </h1>

        {/* Subheading */}
        <p 
          className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed"
          style={{ animationDelay: '0.3s' }}
        >
          Caring, stress-free veterinary care for{' '}
          <span className="text-primary font-semibold">small animals</span> &{' '}
          <span className="text-primary font-semibold">exotic pets</span> — in the comfort of your home.
          <br />
          <span className="text-lg">Serving Wrexham, Chester & surrounding areas.</span>
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          <a href="#register" className="btn-primary text-xl px-8 py-4 w-full sm:w-auto">
            Register Your Interest
          </a>
          <a href="#services" className="btn-secondary text-xl px-8 py-4 w-full sm:w-auto">
            View Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
          style={{ animationDelay: '1s' }}
        >
          <a
            href="#services"
            className="flex flex-col items-center text-text-muted hover:text-primary transition-colors"
            aria-label="Scroll to services"
          >
            <span className="text-sm font-medium mb-2">Learn more</span>
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

