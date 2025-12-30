import { motion } from 'framer-motion'
import { Heart, Shield, MessageSquare, Users, Clock } from 'lucide-react'
import { TextReveal } from './ui/TextReveal'

const values = [
  { icon: Heart, title: 'Compassion first', description: 'Every decision is guided by what\'s best for your pet' },
  { icon: Shield, title: 'Gentle, low-stress handling', description: 'We use techniques that keep pets calm and comfortable' },
  { icon: MessageSquare, title: 'Honest communication', description: 'Clear, straightforward advice you can trust' },
  { icon: Users, title: 'Respect for pets and owners', description: 'We listen to your concerns and preferences' },
  { icon: Clock, title: 'Continuity of care over time', description: 'Building lasting relationships with your family' },
]

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-primary font-semibold text-lg tracking-wide uppercase mb-4"
          >
            About Us
          </motion.span>

          <TextReveal 
            as="h2" 
            className="text-4xl md:text-5xl font-bold text-text mb-8"
          >
            A Kinder Way to Care
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-muted leading-relaxed"
          >
            With each vet or nurse having at least <span className="text-primary font-semibold">20 years of experience</span>, 
            our team provides expert veterinary care across multiple species — delivered calmly and thoughtfully in your home.
          </motion.p>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text mb-6 flex items-center gap-3">
              <span className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </span>
              Our Story
            </h3>
            <p className="text-lg text-text-muted leading-relaxed mb-4">
              Heart at Home Vets was created to offer a kinder, calmer way to deliver veterinary care.
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-4">
              We believe pets receive the best care when they are relaxed — and owners feel supported and heard.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              Working as a mobile service allows us to take our time, reduce fear and stress, and focus on 
              what truly matters: <span className="text-text font-medium">compassionate care tailored to every animal and family</span>.
            </p>
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-text text-center mb-12"
          >
            Our Values
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 group-hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-deep transition-all duration-300">
                    <value.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-text mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Independent badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/20 text-secondary font-semibold rounded-full text-lg">
              <Shield className="w-5 h-5" />
              Proudly Independent
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

