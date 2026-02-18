import { motion } from 'framer-motion'
import { Calendar, Clock, Stethoscope, FileText } from 'lucide-react'
import { TextReveal } from './ui/TextReveal'

// LupaPets booking/registration link
const BOOKING_URL = 'https://store.lupapets.com/booking/37e5721f-f7e1-405f-ab07-8abf7337e66e'

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Book your appointment',
    description: 'Contact us via phone, email, or our online form with your pet details and reason for visit.',
  },
  {
    number: '02',
    icon: Clock,
    title: 'We arrive on time',
    description: 'Our team arrives at your home ready with all the equipment needed for your pet\'s care.',
  },
  {
    number: '03',
    icon: Stethoscope,
    title: 'Calm, unrushed consultation',
    description: 'We take our time to examine your pet thoroughly in their relaxed home environment.',
  },
  {
    number: '04',
    icon: FileText,
    title: 'Clear plan & follow-up',
    description: 'You receive a clear treatment plan with guidance, and we\'ll follow up as needed.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-lg tracking-wide uppercase mb-4"
          >
            Simple Process
          </motion.span>

          <TextReveal 
            as="h2" 
            className="text-4xl md:text-5xl font-bold text-text mb-6"
          >
            How Home Visits Work
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            From booking to follow-up, we make veterinary care simple and stress-free
          </motion.p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}

                <div className="text-center">
                  {/* Number and Icon */}
                  <div className="relative inline-block mb-6">
                    <motion.div 
                      className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center group-hover:from-primary group-hover:to-deep transition-all duration-500"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                    </motion.div>
                    <span className="absolute -top-3 -right-3 w-10 h-10 bg-accent text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
          >
            Book Your Home Visit
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

