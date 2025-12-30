import { motion } from 'framer-motion'
import { Dog, Cat, Bird } from 'lucide-react'
import { TextReveal } from './ui/TextReveal'

const whoWeHelp = [
  { icon: Dog, label: 'Dogs of all ages' },
  { icon: Cat, label: 'Cats — including nervous or indoor cats' },
  { icon: Bird, label: 'Exotic pets (small mammals, reptiles, birds — suitability assessed)' },
]

export default function Introduction() {
  return (
    <section id="introduction" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Main Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block text-primary font-semibold text-lg tracking-wide uppercase">
              Welcome to Heart at Home
            </span>
          </motion.div>

          <TextReveal 
            as="h2" 
            className="text-4xl md:text-5xl font-bold text-text mb-8"
          >
            Compassionate care where pets feel safest
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-muted leading-relaxed"
          >
            At Heart at Home Vets, we provide compassionate, high-quality veterinary care 
            where pets feel safest — <span className="text-text font-medium">their own home</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-text-muted leading-relaxed mt-4"
          >
            By removing car journeys, waiting rooms, and unfamiliar surroundings, we create 
            a <span className="text-primary font-medium">calmer experience for pets</span> and 
            a <span className="text-primary font-medium">more personal one for owners</span>.
          </motion.p>
        </div>

        {/* Who We Help */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-text text-center mb-12"
          >
            Who We Help
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {whoWeHelp.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 h-full border border-primary/10 group-hover:border-primary/20">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-lg text-text font-medium leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

