import { motion } from 'framer-motion'
import { Heart, Home, Clock, MessageSquare, Sparkles } from 'lucide-react'
import { TextReveal } from './ui/TextReveal'

const approach = [
  { icon: Home, text: 'Calm arrival at your home' },
  { icon: Heart, text: 'Gentle handling throughout' },
  { icon: MessageSquare, text: 'Clear explanation of the process' },
  { icon: Clock, text: 'Time before and after' },
]

export default function EndOfLifeCare() {
  return (
    <section id="end-of-life" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary font-semibold text-lg tracking-wide uppercase mb-4"
            >
              With Compassion
            </motion.span>

            <TextReveal 
              as="h2" 
              className="text-4xl md:text-5xl font-bold text-text mb-6"
            >
              Gentle End-of-Life Care at Home
            </TextReveal>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-muted"
            >
              Familiar surroundings. No stressful journeys. Time and privacy for goodbyes.
            </motion.p>
          </div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12"
          >
            <h3 className="text-2xl font-bold text-text mb-8 text-center">Our Approach</h3>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {approach.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-text font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-8">
              <p className="text-text-muted text-lg leading-relaxed mb-4">
                <span className="font-semibold text-text">Palliative support</span> is also available 
                for pets who are nearing the end of their life but are not yet ready to say goodbye.
              </p>
              <p className="text-text-muted leading-relaxed">
                We can help with quality-of-life assessments and ongoing comfort care to ensure your 
                pet's remaining time is as comfortable as possible.
              </p>
            </div>
          </motion.div>

          {/* Aftercare Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-3xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
            
            <h4 className="text-xl font-bold text-text mb-4">Aftercare</h4>
            
            <p className="text-text-muted leading-relaxed mb-4">
              <a 
                href="https://petfuneralservices.co.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
              >
                Pet Funeral Services, Holywell
              </a>{' '}
              provides our aftercare services.
            </p>
            
            <p className="text-text-muted leading-relaxed text-sm">
              We do not believe in placing our companions in a cold store or freezer. 
              Either Holywell can collect the same or next day, or we can transport your pet 
              there the same or following day.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

