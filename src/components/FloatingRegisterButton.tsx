import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PawPrint, X } from 'lucide-react'

// LupaPets pre-registration link
const REGISTRATION_URL = 'https://store.lupapets.com/booking/37e5721f-f7e1-405f-ab07-8abf7337e66e'

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
            aria-label="Dismiss registration button"
          >
            <X className="w-4 h-4" />
          </motion.button>

          {/* Main floating button */}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-accent to-[#E8825A] text-white font-bold text-base rounded-full shadow-2xl shadow-accent/40 hover:shadow-accent/50 transition-all duration-300 overflow-hidden transform hover:scale-105 active:scale-95"
          >
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-full animate-pulse-badge" />
            
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            
            <PawPrint className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
            <span className="relative z-10 hidden sm:inline">Register Your Pet</span>
            <span className="relative z-10 sm:hidden">Register</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
