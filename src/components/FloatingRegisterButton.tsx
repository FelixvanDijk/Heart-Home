import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PawPrint, X, Calendar } from 'lucide-react'

// LupaPets booking/registration link
const BOOKING_URL = 'https://store.lupapets.com/booking/37e5721f-f7e1-405f-ab07-8abf7337e66e'

export default function FloatingRegisterButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the hero section (roughly 80% of viewport height)
      const scrollThreshold = window.innerHeight * 0.8
      setIsVisible(window.scrollY > scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Don't render if dismissed
  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
        >
          {/* Dismiss button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsDismissed(true)}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 text-text-muted hover:text-text hover:bg-white transition-colors"
            aria-label="Dismiss buttons"
          >
            <X className="w-4 h-4" />
          </motion.button>

          {/* Book Now floating button */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-primary hover:bg-deep text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Book Now</span>
            <span className="sm:hidden">Book</span>
          </a>

          {/* Register floating button */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-[#D47B4A] text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <PawPrint className="w-4 h-4" />
            <span className="hidden sm:inline">Register</span>
            <span className="sm:hidden">Register</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
