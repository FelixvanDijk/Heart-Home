import { motion } from 'framer-motion'
import { CreditCard, Heart, Shield, Sparkles } from 'lucide-react'
import { TextReveal } from './ui/TextReveal'

const careClubs = [
  { name: 'Preventative Care', description: 'Regular check-ups and preventative treatments' },
  { name: 'Arthritis Care', description: 'Ongoing support for pets with arthritis' },
  { name: 'Feline Renal Care', description: 'Specialised care for cats with kidney conditions' },
  { name: 'Feline Hyperthyroid Care', description: 'Management for hyperthyroid cats' },
]

const pricingItems = [
  { name: 'Home consultation', description: 'Standard vet appointment at home' },
  { name: 'Extended consultation', description: 'For complex cases requiring more time' },
  { name: 'Nurse appointment', description: 'Routine nursing care and checks' },
  { name: 'Exotic consultation', description: 'Specialist exotic pet appointments' },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
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
            Pricing
          </motion.span>

          <TextReveal 
            as="h2" 
            className="text-4xl md:text-5xl font-bold text-text mb-6"
          >
            Transparent, Compassionate Care
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            Our pricing will be finalized soon. Here's what to expect.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text">Consultation Fees</h3>
            </div>

            <div className="space-y-4 mb-8">
              {pricingItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <div>
                    <p className="font-semibold text-text">{item.name}</p>
                    <p className="text-sm text-text-muted">{item.description}</p>
                  </div>
                  <span className="text-primary font-bold bg-primary/10 px-3 py-1 rounded-full text-sm">
                    Coming soon
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="bg-secondary/10 rounded-xl p-4 text-sm text-text-muted">
              <p className="font-medium text-text mb-1">Additional costs may include:</p>
              <p>Medications, diagnostics, and extended travel</p>
              <p className="mt-2 font-medium text-text">Payment is due at the time of the visit.</p>
            </div>
          </motion.div>

          {/* Heart@Home Care Club */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-deep rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">Heart@Home Care Club</h3>
            </div>

            <p className="text-white/90 mb-8 text-lg">
              Join our care club for ongoing support and savings on regular treatments.
            </p>

            <div className="space-y-4 mb-8">
              {careClubs.map((club, index) => (
                <motion.div
                  key={club.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                >
                  <Shield className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{club.name}</p>
                    <p className="text-sm text-white/80">{club.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Full details coming when we launch</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

