import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, HelpCircle, MessageCircle, Shield } from 'lucide-react'

import vidiVetLogo from '/assets/Vidivet logo_master.png'
import vidiVetIcon from '/assets/VidiVet icon circle orange.png'

const VIDIVET_SIGNUP_URL = 'https://vidivet.com/practices-createaccount/?partner=heartathome'

const benefits = [
  'Answers from a UK-registered vet in minutes',
  'Free access for Heart at Home registered clients',
  'Helpful when you are unsure if your pet needs to be seen in person',
  'Photo, video, and message-based advice from your phone or tablet',
]

const faqs = [
  {
    question: 'When should I use VidiVet?',
    answer:
      'Use VidiVet when you need quick veterinary guidance, especially outside normal hours or when you are unsure whether your pet needs an appointment.',
  },
  {
    question: 'Can VidiVet replace an emergency vet?',
    answer:
      'No. If your pet is seriously unwell, in pain, collapsed, struggling to breathe, bleeding heavily, or you suspect poisoning, contact an emergency provider immediately.',
  },
  {
    question: 'Can VidiVet prescribe medication?',
    answer:
      'No. Prescribing usually requires an in-person examination. VidiVet can advise on next steps and help you decide how urgent the situation is.',
  },
]

export default function VidiVetSection() {
  return (
    <section id="vidivet" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-5">
              <MessageCircle className="w-4 h-4" />
              24/7 vet advice
            </div>

            <img
              src={vidiVetLogo}
              alt="VidiVet"
              className="w-64 max-w-full h-auto mb-8 drop-shadow-sm"
              loading="lazy"
            />

            <h2 className="text-4xl md:text-5xl font-bold text-text mb-5 leading-tight">
              Vet support in your pocket, whenever you need reassurance
            </h2>

            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Heart at Home has partnered with VidiVet to give registered clients access to digital vet support
              24/7. Send a question, photo, or video and receive practical guidance on what to do next.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-text font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              <div className="rounded-2xl bg-primary/10 p-4">
                <Clock className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm font-semibold text-text">Available 24/7</p>
              </div>
              <div className="rounded-2xl bg-secondary/15 p-4">
                <Shield className="w-5 h-5 text-secondary mb-2" />
                <p className="text-sm font-semibold text-text">RCVS-registered vets</p>
              </div>
              <div className="rounded-2xl bg-accent/10 p-4">
                <HelpCircle className="w-5 h-5 text-accent mb-2" />
                <p className="text-sm font-semibold text-text">Clear next steps</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl bg-gradient-to-br from-accent to-accent-light p-1 shadow-2xl shadow-accent/20"
            >
              <div className="rounded-[1.35rem] bg-white overflow-hidden">
                <div className="flex items-center gap-4 border-b border-gray-100 p-5">
                  <img src={vidiVetIcon} alt="" className="w-14 h-14 rounded-full" loading="lazy" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-accent">Get free access</p>
                    <h3 className="text-2xl font-bold text-text">Create your VidiVet account</h3>
                  </div>
                </div>

                <iframe
                  title="Create your VidiVet account"
                  src={VIDIVET_SIGNUP_URL}
                  className="w-full h-[640px] border-0 bg-white"
                  scrolling="no"
                  sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation allow-top-navigation-by-user-activation"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-4"
            >
              {faqs.map((item) => (
                <div key={item.question} className="rounded-2xl border border-gray-100 bg-gray-50/70 p-5">
                  <h4 className="text-lg font-bold text-text mb-2">{item.question}</h4>
                  <p className="text-text-muted leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </motion.div>

            <a
              href={VIDIVET_SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-text px-6 py-3 font-semibold text-white transition-colors hover:bg-text/90"
            >
              Open signup in a new window
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
