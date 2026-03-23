import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Calendar, MessageCircle, Smartphone } from 'lucide-react'

const APP_PROMPT_STORAGE_KEY = 'heart-at-home-app-prompt-dismissed'

interface AppSpotlightPromptProps {
  enabled: boolean
}

export default function AppSpotlightPrompt({ enabled }: AppSpotlightPromptProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    try {
      if (window.sessionStorage.getItem(APP_PROMPT_STORAGE_KEY) === 'true') return
    } catch {
      // Ignore storage access issues and continue showing the prompt.
    }

    const timer = window.setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [enabled])

  const dismissPrompt = () => {
    if (typeof window !== 'undefined') {
      try {
        window.sessionStorage.setItem(APP_PROMPT_STORAGE_KEY, 'true')
      } catch {
        // Ignore storage access issues; the prompt can reappear on refresh.
      }
    }
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {enabled && isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="fixed inset-x-4 bottom-4 z-[110] sm:left-auto sm:right-6 sm:max-w-md"
          aria-label="Lupa app prompt"
        >
          <div className="rounded-[2rem] border border-primary/15 bg-white/95 p-6 shadow-2xl shadow-primary/10 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
              <Smartphone className="w-4 h-4" />
              Lupa app
            </div>

            <h2 className="mt-4 text-2xl font-bold text-text">
              Best way to book and message us on the move
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              Use the Lupa app to request appointments and send direct messages to the vets when you are away from home.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-text">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-3 py-1.5">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                Faster booking
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-accent" />
                Direct vet messaging
              </span>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={dismissPrompt}
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 font-semibold text-text transition-colors hover:border-primary/20 hover:bg-primary/5"
              >
                No thanks
              </button>
              <a
                href="#app"
                onClick={dismissPrompt}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
              >
                Download now
              </a>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
