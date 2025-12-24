import { MapPin } from 'lucide-react'
import { areas } from '../data/areas'
import { useInView } from '../hooks/useInView'

export default function ServiceArea() {
  const { ref, isVisible } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section bg-gradient-to-b from-white to-primary/5">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-10 h-10 text-primary" />
          </div>

          {/* Title */}
          <h2 className="section-title">Areas We'll Cover</h2>
          <p className="section-subtitle mx-auto mb-10">
            We're planning to serve the following areas and their surroundings. 
            Not sure if we'll reach you? Register your interest and let us know!
          </p>

          {/* Area Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {areas.map((area) => (
              <span
                key={area.id}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-text font-medium text-lg rounded-full shadow-soft border border-gray-100 hover:border-primary/30 hover:shadow-card transition-all cursor-default"
              >
                <MapPin className="w-4 h-4 text-primary" />
                {area.name}
              </span>
            ))}
          </div>

          {/* Note */}
          <p className="text-text-muted">
            Can't see your area?{' '}
            <a href="#register" className="text-primary font-medium hover:underline">
              Tell us where you are
            </a>{' '}
            — we may be able to help.
          </p>
        </div>
      </div>
    </section>
  )
}

