import { MapPin, Check } from 'lucide-react'
import { areas } from '../data/areas'
import { useInView } from '../hooks/useInView'

export default function ServiceArea() {
  const { ref, isVisible } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section bg-gradient-to-r from-primary via-primary to-deep relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">📍</div>
        <div className="absolute bottom-10 right-10 text-8xl">🏠</div>
        <div className="absolute top-1/3 right-1/4 text-6xl">🚐</div>
      </div>
      
      <div className="container-custom relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-white transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <span className="text-white/80 font-medium text-lg uppercase tracking-wide">
                Service Area
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where We'll Visit
            </h2>
            
            <p className="text-white/90 text-xl leading-relaxed mb-8">
              We're planning to cover a wide area across North Wales and the borders. 
              Select your location when registering interest and we'll let you know 
              when we're ready to serve your area!
            </p>

            {/* Quick facts */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Check className="w-5 h-5 text-accent" />
                <span>Home visits only</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Check className="w-5 h-5 text-accent" />
                <span>No travel stress</span>
              </div>
            </div>
          </div>

          {/* Right Content - Area Chips */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-white text-2xl font-bold mb-6">Areas we plan to cover:</h3>
              
              <div className="flex flex-wrap gap-3">
                {areas.map((area, index) => (
                  <span
                    key={area.id}
                    className={`inline-flex items-center gap-2 px-5 py-3 bg-white text-primary font-semibold rounded-full text-lg shadow-lg hover:scale-105 transition-all duration-300 cursor-default ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: isVisible ? `${300 + index * 50}ms` : '0ms' }}
                  >
                    <MapPin className="w-4 h-4" />
                    {area.name}
                  </span>
                ))}
              </div>

              <p className="text-white/70 mt-6 text-base">
                Don't see your area? Register anyway — we're always looking to expand!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
