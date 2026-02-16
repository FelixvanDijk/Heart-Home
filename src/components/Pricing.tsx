import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CreditCard, Heart, Map, Shield, Sparkles, X } from 'lucide-react'
import { TextReveal } from './ui/TextReveal'
import visitZonesMap from '/assets/Visit zones revision.jpg'

const careClubs = [
  { name: 'Preventative Care', description: 'Regular check-ups and preventative treatments' },
  { name: 'Arthritis Care', description: 'Ongoing support for pets with arthritis' },
  { name: 'Feline Renal Care', description: 'Specialised care for cats with kidney conditions' },
  { name: 'Feline Hyperthyroid Care', description: 'Management for hyperthyroid cats' },
]

const pricingItems = [
  {
    name: 'Vet Visit',
    description: 'Vet visit, including consultation',
    zone1: '\u00A380',
    zone2Extra: '+\u00A310',
    zone3Extra: '+\u00A320',
  },
  {
    name: 'Nurse Visit',
    description: 'Nurse visit',
    zone1: '\u00A345',
    zone2Extra: '+\u00A310',
    zone3Extra: '+\u00A320',
  },
  {
    name: 'Exotic Visit',
    description: 'Exotic visit, including consultation',
    zone1: '\u00A380',
    zone2Extra: '+\u00A310',
    zone3Extra: '+\u00A320',
  },
]

export default function Pricing() {
  const [isZoneMapOpen, setIsZoneMapOpen] = useState(false)

  return (
    <>
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
              Clear, zone-based pricing for at-home visits with no hidden extras.
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
                    className="p-5 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <p className="font-semibold text-text text-lg">{item.name}</p>
                          <p className="text-sm text-text-muted">{item.description}</p>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-3 py-1.5 rounded-full text-sm w-fit">
                          Zone 1 {item.zone1}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full bg-secondary/15 text-text text-sm font-semibold">
                          Zone 2 {item.zone2Extra}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-accent/15 text-text text-sm font-semibold">
                          Zone 3 {item.zone3Extra}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-secondary/10 rounded-xl p-4 text-sm text-text-muted">
                <p className="font-medium text-text mb-1">Additional costs may include:</p>
                <p>Medications, diagnostics, and extended travel</p>
                <p className="mt-2 font-medium text-text">Payment is due at the time of the visit.</p>
              </div>

              <div className="mt-6 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-white to-secondary/10 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Map className="w-5 h-5 text-primary" />
                  <p className="font-semibold text-text">Not sure which zone you are in?</p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsZoneMapOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                  <Map className="w-4 h-4" />
                  Open Visit Zone Map
                </button>

                <button
                  type="button"
                  onClick={() => setIsZoneMapOpen(true)}
                  className="mt-3 w-full rounded-xl overflow-hidden border border-white/70 hover:border-primary/30 transition-colors bg-white"
                >
                  <img
                    src={visitZonesMap}
                    alt="Preview of visit zones map"
                    className="w-full h-48 sm:h-56 object-contain"
                    loading="lazy"
                  />
                </button>
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

      <AnimatePresence>
        {isZoneMapOpen && (
          <motion.div
            className="fixed inset-0 z-[120] bg-text/70 backdrop-blur-sm p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoneMapOpen(false)}
          >
            <motion.div
              className="relative max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/80 max-h-[92vh] flex flex-col"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-gray-100 bg-gradient-to-r from-primary/10 via-secondary/10 to-white">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">Visit Zone Map</p>
                  <p className="text-text font-medium">Find your service area quickly</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsZoneMapOpen(false)}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 text-text-muted hover:text-text hover:border-primary/30 transition-colors flex items-center justify-center"
                  aria-label="Close zone map"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto">
                <img
                  src={visitZonesMap}
                  alt="Heart At Home visit zone map showing Zone 1, Zone 2, and Zone 3 coverage areas."
                  className="w-full h-auto max-h-[68vh] object-contain rounded-2xl border border-gray-200 bg-gray-50"
                />

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">Zone 1 base fee</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/15 text-text text-sm font-semibold">Zone 2 {'+\u00A310'}</span>
                  <span className="px-3 py-1 rounded-full bg-accent/15 text-text text-sm font-semibold">Zone 3 {'+\u00A320'}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
