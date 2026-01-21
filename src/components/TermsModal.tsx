import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
              <h2 className="text-2xl font-bold text-text">Terms & Conditions</h2>
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

                <p className="text-text-muted mb-4">
                  These Terms and Conditions apply to all veterinary services provided by Heart at Home Vets Ltd 
                  ("Heart at Home Vets", "we", "us", "our"), including all subsidiaries, veterinary practices 
                  operating under the Heart at Home Vets brand, Heart@Home Mobile Vet and any other veterinary 
                  practices operated by Heart at Home Vets Ltd and trading under a different name.
                </p>

                <p className="text-text-muted mb-8">
                  They apply to you ("you", "your"), being the registered pet owner or individual requesting our 
                  services. By booking or using our services, you agree to be bound by these Terms & Conditions. 
                  Please read them carefully.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">1. About Us & Regulatory Information</h3>
                <p className="text-text-muted mb-4">
                  We provide mobile veterinary services within our designated service areas in the United Kingdom.
                </p>
                <p className="text-text-muted mb-4">
                  All veterinary services are delivered by veterinary surgeons registered with the Royal College 
                  of Veterinary Surgeons (RCVS) and are provided in accordance with:
                </p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>The RCVS Code of Professional Conduct</li>
                  <li>Applicable UK legislation</li>
                </ul>
                <p className="text-text-muted mb-6">
                  A copy of the RCVS Code of Professional Conduct is available on request or at{' '}
                  <a href="https://www.rcvs.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.rcvs.org.uk
                  </a>.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">2. Our Contract with You</h3>
                <p className="text-text-muted mb-4">
                  Your contract with us begins when we confirm your registration as a client, either verbally, 
                  electronically, or in writing.
                </p>
                <p className="text-text-muted mb-6">
                  These Terms & Conditions, together with any signed consent forms, estimates, or other 
                  documentation, form the entire agreement between you and us.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">3. Our Services</h3>
                <p className="text-text-muted mb-4">
                  We provide non-emergency mobile veterinary services delivered in your home by qualified 
                  veterinary professionals.
                </p>
                <p className="text-text-muted mb-6">
                  We will treat your pet with reasonable care and skill during normal business hours and in 
                  accordance with professional standards. Where clinically appropriate, we may recommend referral 
                  to a bricks-and-mortar veterinary practice or emergency provider.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">4. Scope & Limitations of Mobile Veterinary Care</h3>
                <p className="text-text-muted mb-4">
                  Due to the nature of mobile veterinary practice, our services are limited. We do not provide:
                </p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Surgical procedures</li>
                  <li>X-rays or advanced diagnostic imaging</li>
                  <li>Hospitalisation or overnight care</li>
                  <li>Emergency or out-of-hours services</li>
                </ul>
                <p className="text-text-muted mb-6">
                  These services must be provided by a fixed-location veterinary practice. We accept no liability 
                  for limitations inherent to mobile veterinary care.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">5. Emergencies</h3>
                <p className="text-text-muted mb-4">
                  Heart at Home Vets is not an emergency service.
                </p>
                <p className="text-text-muted mb-6">
                  If your pet requires urgent or emergency treatment, you must contact a local veterinary practice 
                  or emergency provider immediately. We accept no liability for delays in emergency treatment 
                  arising from the nature of mobile services.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">6. Responsible Pet Ownership</h3>
                <p className="text-text-muted mb-4">
                  We support responsible pet ownership and preventative healthcare, including:
                </p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Vaccination</li>
                  <li>Parasite control</li>
                  <li>Microchipping</li>
                  <li>Regular health checks</li>
                </ul>
                <p className="text-text-muted mb-6">
                  Our Health Care Plans may help spread the cost of routine care and support long-term pet health.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">7. Appointments & Scheduling</h3>
                <ul className="list-disc pl-6 text-text-muted mb-6">
                  <li>All consultations are by appointment only</li>
                  <li>Appointment times are approximate and may be affected by traffic, weather, emergencies, or clinical needs</li>
                  <li>We reserve the right to delay or reschedule appointments due to circumstances beyond our control</li>
                  <li>You must provide accurate contact details and remain contactable on the day of your appointment</li>
                </ul>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">8. Preparation for Home Visits</h3>
                <p className="text-text-muted mb-4">
                  Clients must comply with our Home Visit Preparation Protocol, provided at booking or available 
                  on our website. This includes, but is not limited to:
                </p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Providing a clean, quiet, well-lit examination area</li>
                  <li>Securing pets before our arrival</li>
                  <li>Keeping children and other animals separate</li>
                  <li>Ensuring safe access and suitable parking</li>
                </ul>
                <p className="text-text-muted mb-6">
                  Failure to comply may result in the visit being delayed, curtailed, or cancelled, and a fee may still apply.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">9. Aggressive or Nervous Pets</h3>
                <p className="text-text-muted mb-4">
                  The safety of pets, owners, and our team is paramount.
                </p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Owners must inform us in advance of any behavioural concerns</li>
                  <li>Aggressive or nervous dogs must be fitted with a secure muzzle by the owner before examination or treatment can be carried out</li>
                </ul>
                <p className="text-text-muted mb-4">If a pet cannot be safely examined or treated, we may:</p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Recommend sedation</li>
                  <li>Terminate the visit</li>
                  <li>Refer your pet to a bricks & mortar veterinary practice</li>
                </ul>
                <p className="text-text-muted mb-6">
                  No refunds will be issued where treatment cannot proceed due to safety concerns, and additional fees may apply.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">10. Client Responsibilities</h3>
                <p className="text-text-muted mb-4">You agree to:</p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Ensure a responsible adult (18+) is present throughout the visit</li>
                  <li>Provide accurate medical and behavioural history</li>
                  <li>Secure pets appropriately</li>
                  <li>Follow veterinary advice and treatment instructions</li>
                  <li>Provide a safe working environment</li>
                </ul>
                <p className="text-text-muted mb-6">
                  We reserve the right to refuse or discontinue services if professional, safety, or welfare concerns arise.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">11. Fees</h3>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>All fees are subject to VAT</li>
                  <li>Fees are based on time, expertise, medications, equipment, consumables, and travel</li>
                  <li>Additional charges may apply for reports, repeat prescriptions, out-of-hours administration, or extended visits</li>
                  <li>Prices may change without notice</li>
                </ul>
                <p className="text-text-muted mb-6">
                  You are responsible for all costs incurred on your pet's behalf.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">12. Payment Methods</h3>
                <p className="text-text-muted mb-4">
                  Payment is due at the time of consultation or service delivery. We accept:
                </p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Debit and credit cards</li>
                  <li>Bank transfer</li>
                  <li>Cash</li>
                </ul>
                <p className="text-text-muted mb-6">
                  We do not accept cheques. Deposits may be required in advance for certain treatments or procedures.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">13. Estimates of Treatment Costs</h3>
                <p className="text-text-muted mb-4">
                  Written estimates are available upon request. Estimates are approximate only, as clinical conditions may change.
                </p>
                <p className="text-text-muted mb-6">
                  If costs are likely to exceed the estimate, we will advise you. If you are unreachable, we will act in 
                  your pet's best interests to prevent unnecessary suffering.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">14. Settlement Terms & Non-Payment</h3>
                <ul className="list-disc pl-6 text-text-muted mb-6">
                  <li>Accounts unpaid after 7 days may incur a £15 administration fee</li>
                  <li>Unpaid accounts may be referred to a debt collection agency</li>
                  <li>Failed or returned payments may incur additional charges</li>
                  <li>Non-payment may result in refusal of future services</li>
                </ul>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">15. Cancellations & No-Shows</h3>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>A minimum of 24 hours' notice is required for cancellations or rescheduling</li>
                  <li>Late cancellations or missed appointments may incur a fee</li>
                  <li>Repeated no-shows may result in termination of services and your contract</li>
                </ul>
                <p className="text-text-muted mb-6">
                  Exceptions may be made at our discretion in cases of genuine emergencies.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">16. Pet Insurance</h3>
                <p className="text-text-muted mb-4">
                  We strongly recommend pet insurance to cover unexpected veterinary costs.
                </p>
                <p className="text-text-muted mb-6">
                  In order to keep our costs as low as possible, we do not offer direct insurance claims. 
                  Fees must be paid at the time of service, and you may then claim reimbursement from your insurer.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">17. Medications & Prescriptions</h3>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Prescriptions (POM-V) may only be issued where a valid Veterinary-Client-Patient Relationship (VCPR) exists</li>
                  <li>Re-examinations may be required every 3–6 months for ongoing prescriptions</li>
                  <li>Charges apply for re-examinations and written prescriptions</li>
                  <li>Clients are responsible for administering medications as directed</li>
                </ul>
                <p className="text-text-muted mb-6">
                  We are not responsible for adverse outcomes resulting from failure to follow instructions.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">18. Medical Records</h3>
                <p className="text-text-muted mb-6">
                  Clinical records remain the property of Heart at Home Vets Ltd and are maintained in accordance with 
                  UK law and RCVS requirements. Copies or summaries may be provided upon written request and may be 
                  shared with another veterinary practice upon request.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">19. Behaviour & Zero-Tolerance Policy</h3>
                <p className="text-text-muted mb-4">
                  We operate a zero-tolerance policy towards abusive, threatening, discriminatory, or inappropriate behaviour.
                </p>
                <p className="text-text-muted mb-6">
                  We reserve the right to refuse service or terminate your contract if such behaviour occurs. 
                  We are equally committed to treating clients with respect.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">20. Termination of Contract</h3>
                <p className="text-text-muted mb-4">
                  You may terminate your contract with us at any time, subject to payment of all outstanding fees.
                </p>
                <p className="text-text-muted mb-6">
                  We may terminate the agreement for non-payment, breach of these terms, safety concerns, or inappropriate conduct.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">21. Liability</h3>
                <p className="text-text-muted mb-4">
                  Veterinary medicine is not an exact science, and outcomes cannot be guaranteed. We are not liable for:
                </p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Pre-existing or underlying conditions</li>
                  <li>Conditions not detectable during a home visit</li>
                  <li>Failure to follow veterinary advice</li>
                </ul>
                <p className="text-text-muted mb-6">
                  Our liability is limited to the cost of services provided, except where liability cannot be excluded 
                  by law (including death or personal injury caused by negligence or fraud).
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">22. Privacy</h3>
                <p className="text-text-muted mb-6">
                  We collect and process personal data in accordance with our Privacy Policy, including client contact 
                  details and pet information. We may contact you with reminders, updates, and service-related communications.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">23. Complaints Procedure</h3>
                <p className="text-text-muted mb-4">If you are unhappy with any aspect of our service:</p>
                <ol className="list-decimal pl-6 text-text-muted mb-4">
                  <li>Please raise your concern with your attending vet or nurse</li>
                  <li>If unresolved, submit a formal complaint by email</li>
                </ol>
                <p className="text-text-muted mb-4">We aim to:</p>
                <ul className="list-disc pl-6 text-text-muted mb-4">
                  <li>Acknowledge complaints within 5 working days</li>
                  <li>Complete investigations within 15 working days</li>
                </ul>
                <p className="text-text-muted mb-6">
                  If you remain dissatisfied, you may escalate your complaint to the Royal College of Veterinary Surgeons (RCVS).
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">24. Governing Law</h3>
                <p className="text-text-muted mb-6">
                  These Terms & Conditions are governed by the laws of England and Wales.
                </p>

                <h3 className="text-xl font-bold text-text mt-8 mb-4">25. Contact Details</h3>
                <p className="text-text-muted mb-2">
                  <strong>Heart at Home Vets Ltd</strong>
                </p>
                <p className="text-text-muted mb-2">Phone: Coming soon</p>
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
