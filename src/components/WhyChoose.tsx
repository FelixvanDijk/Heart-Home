import { motion } from 'framer-motion'
import { Check, Heart, Clock, Home, Users, Shield } from 'lucide-react'
import { TextReveal } from './ui/TextReveal'

const benefits = [
  { icon: Heart, text: 'Less anxiety and fear', description: 'Pets stay calm in their familiar environment' },
  { icon: Home, text: 'No stressful travel or busy waiting rooms', description: 'Skip the car ride and clinic stress' },
  { icon: Shield, text: 'Ideal for elderly, unwell, or anxious pets', description: 'Special consideration for sensitive animals' },
  { icon: Clock, text: 'Longer, unrushed appointments', description: 'We take our time to do things properly' },
  { icon: Users, text: 'One-to-one attention from a familiar team', description: 'Build a relationship with your vet' },
]

export default function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20c-2.5-4-7-6-7-10s4.5-6 7-10c2.5 4 7 6 7 10s-4.5 6-7 10zm-10 10c-2.5-4-7-6-7-10s4.5-6 7-10c2.5 4 7 6 7 10s-4.5 6-7 10zm20 0c-2.5-4-7-6-7-10s4.5-6 7-10c2.5 4 7 6 7 10s-4.5 6-7 10z' fill='%2359A5AE' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary font-semibold text-lg tracking-wide uppercase mb-4"
            >
              The Benefits
            </motion.span>

            <TextReveal 
              as="h2" 
              className="text-4xl md:text-5xl font-bold text-text mb-6"
            >
              Why Choose Home Vet Care?
            </TextReveal>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-muted max-w-2xl mx-auto"
            >
              Continue to work from home — we'll take care of your pet
            </motion.p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group-hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Check className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                        {benefit.text}
                      </h3>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Special CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-primary to-deep rounded-2xl p-6 h-full text-white flex flex-col justify-center items-center text-center">
                <Heart className="w-12 h-12 mb-4 opacity-80" />
                <p className="text-lg font-medium mb-4">
                  Let us care for your pet where they feel safest
                </p>
                <a 
                  href="#register"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-colors"
                >
                  Book your home visit
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

