import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Phone, X } from 'lucide-react'

import vidiVetIcon from '/assets/VidiVet icon circle orange.png'

const EMERGENCY_TEL_LINK = 'tel:01978253101'

export default function VidiVetWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-5 left-4 z-[90] sm:left-6">
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="mb-3 w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-accent/20 bg-white p-5 shadow-2xl shadow-accent/15"
            aria-label="VidiVet quick access"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src={vidiVetIcon} alt="" className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-sm font-semibold text-accent">VidiVet</p>
                  <h2 className="text-xl font-bold text-text">Chat with a vet</h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full border border-gray-200 text-text-muted hover:text-text hover:border-accent/30 transition-colors flex items-center justify-center"
                aria-label="Close VidiVet widget"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Not sure if your pet needs to be seen? Heart at Home registered clients can use VidiVet
              for 24/7 digital veterinary advice.
            </p>

            <div className="mt-5 grid gap-2">
              <a
                href="#vidivet"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 font-semibold text-white transition-colors hover:bg-accent-light"
              >
                Get VidiVet
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={EMERGENCY_TEL_LINK}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-semibold text-red-700 transition-colors hover:bg-red-100"
              >
                <Phone className="w-4 h-4" />
                Emergency care
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 font-semibold text-white shadow-xl shadow-accent/30 transition-all hover:bg-accent-light"
        aria-expanded={isOpen}
        aria-label="Open VidiVet chat with a vet options"
      >
        <img src={vidiVetIcon} alt="" className="w-8 h-8 rounded-full bg-white/10" />
        <span className="hidden sm:inline">Chat with a vet</span>
        <MessageCircle className="w-5 h-5 sm:hidden" />
      </button>
    </div>
  )
}
