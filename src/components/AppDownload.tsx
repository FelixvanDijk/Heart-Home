import { motion } from 'framer-motion'
import { ArrowRight, Download, Smartphone, Star } from 'lucide-react'

const APP_STORE_URL = 'https://apps.apple.com/gb/app/lupa-ai-powered-petcare/id6449440240'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.petsai&hl=en_GB'

const steps = [
  {
    icon: Download,
    title: 'Download Lupa',
    description: 'Install Lupa - AI Powered Petcare from the App Store or Google Play.',
  },
  {
    icon: Smartphone,
    title: 'Sign in with existing details',
    description: 'Use the same login you already created on the website.',
  },
  {
    icon: Star,
    title: 'Find and favourite Heart At Home Vets',
    description: 'Search for Heart At Home Vets and add us to favourites for faster booking.',
  },
]

export default function AppDownload() {
  return (
    <section id="app" className="py-24 bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-primary/15 shadow-xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5">
              <Smartphone className="w-4 h-4" />
              Mobile App Booking
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-5">
              Book on the move with the Lupa app
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Download <strong>Lupa - AI Powered Petcare</strong> on your phone or tablet to request appointments,
              manage pets, and access booking faster wherever you are.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-10">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-text hover:bg-text/90 text-white font-semibold transition-colors shadow-lg"
            >
              Download on App Store
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold transition-colors shadow-lg"
            >
              Get it on Google Play
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-gray-100 bg-gradient-to-b from-white to-gray-50 p-5 text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-text text-lg mb-2">{step.title}</p>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-accent/10 border border-accent/20 p-4 text-center">
            <p className="text-text font-medium">
              Use your existing Heart @ Home website login details inside the app.
            </p>
            <p className="text-text-muted text-sm mt-1">
              Add your pets and request appointments in just a few taps.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
