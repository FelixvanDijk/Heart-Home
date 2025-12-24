import { services } from '../data/services'
import { useInView } from '../hooks/useInView'

export default function Services() {
  const { ref, isVisible } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-lg mb-2 tracking-wide uppercase">
            What We Offer
          </span>
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
              className={`group relative bg-white rounded-2xl p-6 border-2 border-transparent hover:border-primary/20 transition-all duration-500 cursor-default ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 75}ms` : '0ms',
                boxShadow: '0 4px 20px -5px rgba(50, 41, 24, 0.08)',
              }}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-base leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Coming Soon Tag */}
                <span className="inline-flex items-center text-sm font-semibold text-accent bg-accent/10 px-4 py-1.5 rounded-full group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  Coming soon
                </span>
              </div>

              {/* Corner decoration on hover */}
              <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
              </div>
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
            className="inline-flex items-center text-primary font-semibold text-lg hover:underline underline-offset-4 group"
          >
            Let us know what you need 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
