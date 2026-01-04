import { useState, FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { areas } from '../data/areas'
import { services } from '../data/services'
import TermsModal from './TermsModal'

interface FormData {
  title: string
  firstName: string
  surname: string
  email: string
  phone: string
  area: string
  services: string[]
  otherServices: string
  consent: boolean
  termsAccepted: boolean
}

interface FormErrors {
  firstName?: string
  surname?: string
  email?: string
  area?: string
  consent?: string
  termsAccepted?: string
}

const titles = ['Mr', 'Mrs', 'Ms', 'Mx', 'Dr', 'Prefer not to say']

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    firstName: '',
    surname: '',
    email: '',
    phone: '',
    area: '',
    services: [],
    otherServices: '',
    consent: false,
    termsAccepted: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isTermsOpen, setIsTermsOpen] = useState(false)

  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your first name'
    }

    if (!formData.surname.trim()) {
      newErrors.surname = 'Please enter your surname'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.area) {
      newErrors.area = 'Please select your area'
    }

    if (!formData.consent) {
      newErrors.consent = 'Please agree to be contacted'
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted = 'Please accept the Terms & Conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // If no Formspree endpoint, fall back to mailto
    if (!formspreeEndpoint) {
      const subject = encodeURIComponent('Heart @ Home - Interest Registration')
      const body = encodeURIComponent(`
Name: ${formData.title} ${formData.firstName} ${formData.surname}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Area: ${formData.area}
Interested Services: ${formData.services.join(', ') || 'None selected'}
Other Services Requested: ${formData.otherServices || 'None'}
      `.trim())
      
      window.location.href = `mailto:info@heartathome.co.uk?subject=${subject}&body=${body}`
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          firstName: formData.firstName,
          surname: formData.surname,
          email: formData.email,
          phone: formData.phone,
          area: formData.area,
          interestedServices: formData.services.join(', '),
          otherServicesRequested: formData.otherServices,
          consentGiven: formData.consent,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const resetForm = () => {
    setFormData({
      title: '',
      firstName: '',
      surname: '',
      email: '',
      phone: '',
      area: '',
      services: [],
      otherServices: '',
      consent: false,
      termsAccepted: false,
    })
    setErrors({})
    setSubmitStatus('idle')
  }

  if (submitStatus === 'success') {
    return (
      <section id="register" className="section bg-primary/5">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="card text-center py-12">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-text mb-4">Thank You!</h2>
              <p className="text-xl text-text-muted mb-8">
                We've received your registration. We'll be in touch as soon as we're ready to launch!
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="btn-secondary"
              >
                Submit another response
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="register" className="section bg-primary/5">
      {/* Terms Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />

      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-title">Register Your Interest</h2>
            <p className="section-subtitle mx-auto">
              Be the first to know when we launch. Fill in your details and we'll keep you updated.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card" noValidate>
            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800">Something went wrong</p>
                  <p className="text-red-700">
                    Please try again, or email us directly at{' '}
                    <a href="mailto:info@heartathome.co.uk" className="underline">
                      info@heartathome.co.uk
                    </a>
                  </p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="md:col-span-2 md:w-1/3">
                <label htmlFor="title" className="form-label">
                  Title <span className="text-text-muted font-normal">(optional)</span>
                </label>
                <select
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="form-input"
                >
                  <option value="">Select...</option>
                  {titles.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>

              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="form-label">
                  First Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={`form-input ${errors.firstName ? 'border-accent' : ''}`}
                  aria-invalid={!!errors.firstName}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="form-error">
                    {errors.firstName}
                  </p>
                )}
              </div>

              {/* Surname */}
              <div>
                <label htmlFor="surname" className="form-label">
                  Surname <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="surname"
                  value={formData.surname}
                  onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                  className={`form-input ${errors.surname ? 'border-accent' : ''}`}
                  aria-invalid={!!errors.surname}
                  aria-describedby={errors.surname ? 'surname-error' : undefined}
                />
                {errors.surname && (
                  <p id="surname-error" className="form-error">
                    {errors.surname}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="form-label">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`form-input ${errors.email ? 'border-accent' : ''}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="form-error">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="form-label">
                  Phone <span className="text-text-muted font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="form-input"
                />
              </div>

              {/* Area */}
              <div className="md:col-span-2">
                <label htmlFor="area" className="form-label">
                  Your Area <span className="text-accent">*</span>
                </label>
                <select
                  id="area"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className={`form-input ${errors.area ? 'border-accent' : ''}`}
                  aria-invalid={!!errors.area}
                  aria-describedby={errors.area ? 'area-error' : undefined}
                >
                  <option value="">Select your area...</option>
                  {areas.map((area) => (
                    <option key={area.id} value={area.name}>
                      {area.name}
                    </option>
                  ))}
                </select>
                {errors.area && (
                  <p id="area-error" className="form-error">
                    {errors.area}
                  </p>
                )}
              </div>

              {/* Services */}
              <div className="md:col-span-2">
                <fieldset>
                  <legend className="form-label mb-4">
                    Which services interest you?{' '}
                    <span className="text-text-muted font-normal">(select all that apply)</span>
                  </legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          formData.services.includes(service.id)
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-primary/40'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-text font-medium">{service.title}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* Other Services */}
              <div className="md:col-span-2">
                <label htmlFor="otherServices" className="form-label">
                  Anything else you'd like us to offer?{' '}
                  <span className="text-text-muted font-normal">(optional)</span>
                </label>
                <textarea
                  id="otherServices"
                  rows={3}
                  value={formData.otherServices}
                  onChange={(e) => setFormData({ ...formData, otherServices: e.target.value })}
                  className="form-input resize-none"
                  placeholder="Tell us about any other services you'd find helpful..."
                />
              </div>

              {/* Terms & Conditions */}
              <div className="md:col-span-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                    className="w-5 h-5 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                    aria-invalid={!!errors.termsAccepted}
                    aria-describedby={errors.termsAccepted ? 'terms-error' : undefined}
                  />
                  <span className="text-text">
                    I have read and agree to the{' '}
                    <button
                      type="button"
                      onClick={() => setIsTermsOpen(true)}
                      className="text-primary hover:text-primary/80 underline underline-offset-2 font-medium"
                    >
                      Terms & Conditions
                    </button>
                    .{' '}
                    <span className="text-accent">*</span>
                  </span>
                </label>
                {errors.termsAccepted && (
                  <p id="terms-error" className="form-error mt-2">
                    {errors.termsAccepted}
                  </p>
                )}
              </div>

              {/* Consent to Contact */}
              <div className="md:col-span-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="w-5 h-5 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? 'consent-error' : 'consent-note'}
                  />
                  <span className="text-text">
                    I agree to be contacted about Heart @ Home launching and services.{' '}
                    <span className="text-accent">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <p id="consent-error" className="form-error mt-2">
                    {errors.consent}
                  </p>
                )}
                <p id="consent-note" className="text-text-muted text-sm mt-3 ml-8">
                  We'll only use your information to contact you about Heart @ Home. 
                  We won't share your details with third parties. You can unsubscribe at any time.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 pt-8 border-t border-gray-100 text-center md:text-left">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-accent w-full md:w-auto text-xl px-10 py-4 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    Register My Interest
                  </>
                )}
              </button>
              
              {!formspreeEndpoint && (
                <p className="text-text-muted text-sm mt-4">
                  Note: This will open your email client to send the registration.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

