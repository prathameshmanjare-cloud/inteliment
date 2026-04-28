import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const CONSENT_KEY = 'inteliment_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) {
      // Slight delay so the banner doesn't flash immediately on load
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'all')
    setVisible(false)
  }

  const necessaryOnly = () => {
    localStorage.setItem(CONSENT_KEY, 'necessary')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div className="glass-dark rounded-2xl p-5 border border-white/10 shadow-glass">
            <div className="flex items-start justify-between gap-3 mb-3">
              <p className="text-sm font-display font-bold text-white">We use cookies</p>
              <button
                onClick={necessaryOnly}
                aria-label="Dismiss"
                className="text-white/40 hover:text-white/70 transition-colors shrink-0 mt-0.5"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-xs text-white/60 font-body leading-relaxed mb-4">
              We use cookies to improve your experience and analyse site traffic. See our{' '}
              <Link to="/cookies" className="text-teal hover:underline">
                Cookie Policy
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-teal hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex gap-2">
              <button
                onClick={accept}
                className="flex-1 py-2 px-4 rounded-lg bg-teal text-navy font-display font-bold text-xs hover:bg-teal-light transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={necessaryOnly}
                className="flex-1 py-2 px-4 rounded-lg glass border border-white/10 text-white/70 font-display font-semibold text-xs hover:border-teal/30 hover:text-white transition-colors"
              >
                Necessary Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
