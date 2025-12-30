import { motion } from 'framer-motion'
import { BookOpen, Dog, Rabbit, Clock, AlertTriangle, Heart, ShoppingBag } from 'lucide-react'
import { TextReveal } from './ui/TextReveal'

const guides = [
  { icon: BookOpen, title: 'Preparing for visits', description: 'How to get ready for your home appointment' },
  { icon: Dog, title: 'Puppy & kitten care', description: 'Essential care for young pets' },
  { icon: Rabbit, title: 'Rabbit care', description: 'Keeping your rabbits happy and healthy' },
  { icon: Clock, title: 'Senior pets', description: 'Supporting your older companions' },
  { icon: Heart, title: 'Arthritis guide', description: 'Managing mobility and comfort' },
  { icon: AlertTriangle, title: 'Common poisons', description: 'What to avoid and what to do' },
  { icon: BookOpen, title: 'Health plans', description: 'Understanding preventative care' },
  { icon: ShoppingBag, title: 'Online shop', description: 'Quality products for your pets' },
]

export default function Guides() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-accent font-semibold text-lg tracking-wide uppercase mb-4"
          >
            <BookOpen className="w-5 h-5" />
            Coming Soon
          </motion.span>

          <TextReveal 
            as="h2" 
            className="text-4xl md:text-5xl font-bold text-text mb-6"
          >
            Pet Care Guides
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted max-w-2xl mx-auto"
          >
            We're preparing helpful resources to support you and your pets
          </motion.p>
        </div>

        {/* Guides Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-default"
            >
              <div className="bg-gray-50 rounded-2xl p-6 h-full border-2 border-dashed border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">
                  <guide.icon className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-text mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-text-muted">
                  {guide.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-text-muted mt-12"
        >
          Register your interest to be notified when our guides are ready!
        </motion.p>
      </div>
    </section>
  )
}

