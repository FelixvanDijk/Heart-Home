import { motion } from 'framer-motion'
import { ExternalLink, Heart, Shield, ShoppingBag, Stethoscope, Truck } from 'lucide-react'

// Replace with the final affiliate shop URL when provided by the client.
const SHOP_URL = '#'

const shopBenefits = [
  {
    icon: Stethoscope,
    title: 'Vet-Informed Choices',
    description: 'Products selected with pet comfort, safety, and quality in mind.',
  },
  {
    icon: Truck,
    title: 'Easy Ordering',
    description: 'Browse online and order directly from a trusted partner site.',
  },
  {
    icon: Heart,
    title: 'Supports Local Care',
    description: 'Purchases help support Heart @ Home and future community care.',
  },
]

export default function PartnerShop() {
  return (
    <section id="shop" className="py-24 bg-gradient-to-b from-white via-primary/5 to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-10 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl border border-primary/15 shadow-xl p-8 md:p-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-5">
              <ShoppingBag className="w-4 h-4" />
              Pet Essentials Shop
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-text mb-5 leading-tight">
              Shop trusted pet products and support Heart @ Home
            </h2>

            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              We are partnering with an online store for products your pet needs every day.
              Every purchase through our shop link helps support the care we provide locally.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Visit the Shop
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-colors"
              >
                See Our Services
              </a>
            </div>

            <p className="text-sm text-text-muted">
              We may receive a small commission from qualifying purchases at no extra cost to you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-deep to-primary rounded-3xl p-8 md:p-10 text-white shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Why this works</h3>
            </div>

            <div className="space-y-4">
              {shopBenefits.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="rounded-2xl bg-white/10 border border-white/10 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">{item.title}</p>
                        <p className="text-white/85 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

