import { useState } from 'react'
import { Heart, Mail, Phone, Facebook, Instagram, MessageCircle, FileText, Shield } from 'lucide-react'
import logoImg from '/assets/logo.png'
import TermsModal from './TermsModal'
import PrivacyModal from './PrivacyModal'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  return (
    <footer className="bg-deep text-white">
      {/* Terms Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      {/* Privacy Modal */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

      {/* Contact Section */}
      <div id="contact" className="bg-gradient-to-r from-primary to-deep py-16 border-b border-white/10">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Speak to the Team</h2>
            <p className="text-white/80 text-lg mb-8">
              Have questions? Want to know if we cover your area? We'd love to hear from you.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:hello@heartathomevets.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold text-lg rounded-xl hover:bg-white/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImg}
                alt="Heart @ Home"
                className="h-16 w-auto bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-white/80 text-lg">
              Mobile Vet Home Visits
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@heartathomevets.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  hello@heartathomevets.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447942146677"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  07942 146677
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/people/Heart-at-home-vets/61582877040325/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Meet the Team
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Shop Essentials
                </a>
              </li>
              <li>
                <a
                  href="#app"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Download App
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Register Interest
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#end-of-life"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  End-of-Life Care
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => setIsTermsOpen(true)}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </button>
              </li>
            </ul>
            <p className="text-white/50 text-sm mt-4">
              Heart at Home Vets Ltd<br />
              Registered in England & Wales
            </p>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="bg-accent/20 rounded-xl p-4 mb-8">
            <p className="text-center text-white/90">
              <strong>Emergency?</strong> If your pet is unwell urgently, please contact your 
              nearest emergency or out-of-hours veterinary provider immediately.
            </p>
            <p className="text-center text-white mt-3">
              <strong>Out-of-hours provider:</strong> VetsNow{' '}
              <a
                href="tel:01978253101"
                className="underline underline-offset-2 hover:text-white/80 transition-colors"
              >
                01978 253 101
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
            <p className="flex items-center gap-1">
              © {currentYear} Heart @ Home Vets Ltd. Made with <Heart className="w-4 h-4 text-accent" /> for pets.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
              <button
                onClick={() => setIsTermsOpen(true)}
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                Terms & Conditions
              </button>
              <span>•</span>
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-white transition-colors underline underline-offset-2"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <p>
                Built by{' '}
                <a 
                  href="https://felixvandijk.dev/business.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
                >
                  F van Dijk Ltd
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
