import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-[101] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
              <h2 className="text-2xl font-bold text-text">Privacy Policy</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-text" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-3xl mx-auto prose prose-lg">
                <p className="text-text-muted text-sm mb-6">
                  <strong>Heart at Home Vets Ltd</strong><br />
                  Effective Date: To be confirmed
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">1. Introduction</h3>
                <p className="text-text-muted mb-6">
                  Heart at Home Vets Ltd ("we," "us," or "our") is committed to protecting your privacy and 
                  handling personal data responsibly and transparently.
                </p>
                <p className="text-text-muted mb-6">
                  This Privacy Policy explains how we collect, use, store, and protect personal data in 
                  accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">2. Who We Are</h3>
                <p className="text-text-muted mb-4">
                  <strong>Data Controller:</strong> Heart at Home Vets Ltd
                </p>
                <p className="text-text-muted mb-6">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:hello@heartathomevets.com" className="text-primary hover:underline">
                    hello@heartathomevets.com
                  </a>
                </p>
                <p className="text-text-muted mb-6">
                  We are responsible for deciding how and why your personal data is processed.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">3. What Personal Data We Collect</h3>
                <p className="text-text-muted mb-4">We may collect and process the following information:</p>
                
                <h4 className="text-lg font-semibold text-text mt-4 mb-2">Client Information</h4>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Name</li>
                  <li>Address</li>
                  <li>Email address</li>
                  <li>Telephone number</li>
                </ul>

                <h4 className="text-lg font-semibold text-text mt-4 mb-2">Pet Information</h4>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Pet name, species, breed, age</li>
                  <li>Medical history and clinical records</li>
                  <li>Treatment notes and prescriptions</li>
                </ul>

                <h4 className="text-lg font-semibold text-text mt-4 mb-2">Administrative Information</h4>
                <ul className="list-disc pl-6 text-text-muted mb-6">
                  <li>Appointment details</li>
                  <li>Payment and invoicing information</li>
                  <li>Communication records (emails, messages, calls)</li>
                  <li>Website enquiry form submissions</li>
                </ul>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">4. How We Use Your Personal Data</h3>
                <p className="text-text-muted mb-4">We use personal data to:</p>
                <ul className="list-disc pl-6 text-text-muted mb-6">
                  <li>Provide veterinary services to your pet</li>
                  <li>Arrange and manage appointments</li>
                  <li>Maintain accurate medical records</li>
                  <li>Communicate about your pet's care</li>
                  <li>Process payments</li>
                  <li>Meet legal, regulatory, and professional obligations</li>
                  <li>Improve our services</li>
                </ul>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">5. Lawful Basis for Processing</h3>
                <p className="text-text-muted mb-4">
                  Under UK GDPR, we process your personal data on the following lawful bases:
                </p>
                <ul className="list-disc pl-6 text-text-muted mb-6">
                  <li><strong>Performance of a contract</strong> (providing veterinary services)</li>
                  <li><strong>Legal obligation</strong> (record keeping and regulatory compliance)</li>
                  <li><strong>Legitimate interests</strong> (practice administration and service improvement)</li>
                  <li><strong>Consent</strong>, where required (e.g. marketing communications)</li>
                </ul>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">6. Sharing Your Personal Data</h3>
                <p className="text-text-muted mb-4">We may share personal data with:</p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Other veterinary practices (with your consent or where clinically necessary)</li>
                  <li>Diagnostic laboratories</li>
                  <li>Referral centres</li>
                  <li>Regulatory or professional bodies (e.g. RCVS)</li>
                  <li>Payment service providers</li>
                </ul>
                <p className="text-text-muted mb-6 font-medium">
                  We do not sell or rent your personal data to third parties.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">7. Data Storage & Security</h3>
                <ul className="list-disc pl-6 text-text-muted mb-6">
                  <li>Personal data is stored securely in electronic and/or paper records.</li>
                  <li>Access is restricted to authorised personnel only.</li>
                  <li>We take appropriate technical and organisational measures to protect data against loss, 
                      misuse, unauthorised access, or disclosure.</li>
                </ul>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">8. Data Retention</h3>
                <p className="text-text-muted mb-6">
                  We retain client and patient records for as long as required by law and professional guidelines, 
                  typically a minimum of 7 years from the last interaction.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">9. Your Rights Under UK GDPR</h3>
                <p className="text-text-muted mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request erasure of data (where applicable)</li>
                  <li>Restrict or object to processing</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent (where consent is the lawful basis)</li>
                </ul>
                <p className="text-text-muted mb-6">
                  You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) 
                  if you believe your data has been mishandled.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">10. Cookies & Website Use</h3>
                <p className="text-text-muted mb-6">
                  Our website may use cookies to ensure functionality and collect anonymous analytics data. 
                  You can manage or disable cookies through your browser settings.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">11. Changes to This Privacy Policy</h3>
                <p className="text-text-muted mb-6">
                  We may update this Privacy Policy from time to time. Any changes will be published on our website.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">12. Contact Us</h3>
                <p className="text-text-muted mb-4">
                  For questions about this Privacy Policy or to exercise your data protection rights, please contact:
                </p>
                <p className="text-text-muted mb-2">
                  <strong>Heart at Home Vets Ltd</strong>
                </p>
                <p className="text-text-muted">
                  Email:{' '}
                  <a href="mailto:hello@heartathomevets.com" className="text-primary hover:underline">
                    hello@heartathomevets.com
                  </a>
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

