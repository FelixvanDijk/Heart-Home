import { services } from '../data/services'
import { useInView } from '../hooks/useInView'

export default function Services() {
  const { ref, isVisible } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            Professional veterinary care delivered to your doorstep. 
            Here's what we'll offer when we launch.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`card-hover group ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 75}ms` : '0ms',
                transitionDuration: '500ms',
                transitionProperty: 'opacity, transform',
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-text mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-muted text-base leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Coming Soon Tag */}
              <span className="inline-flex items-center text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                Coming soon
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-8 border-t border-gray-100">
          <p className="text-xl text-text mb-4">
            Interested in a service not listed here?
          </p>
          <a 
            href="#register" 
            className="inline-flex items-center text-primary font-semibold text-lg hover:underline underline-offset-4"
          >
            Let us know what you need →
          </a>
        </div>
      </div>
    </section>
  )
}

