import { Heart, Mail, Phone, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="./assets/logo.png"
                alt="Heart @ Home"
                className="h-16 w-auto bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-white/80 text-lg mb-4">
              Mobile Vet Home Visits
            </p>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent font-semibold rounded-full">
              Coming Soon!
            </span>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@heartathome.co.uk"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {/* PLACEHOLDER: Update with real email */}
                  info@heartathome.co.uk
                </a>
              </li>
              <li>
                <a
                  href="tel:+441onal"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {/* PLACEHOLDER: Update with real phone */}
                  Coming soon
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook (coming soon)"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram (coming soon)"
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
                  href="#register"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Register Interest
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="bg-accent/20 rounded-xl p-4 mb-8">
            <p className="text-center text-white/90">
              <strong>Emergency?</strong> If your pet is unwell urgently, please contact your 
              nearest emergency or out-of-hours veterinary provider immediately.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
            <p className="flex items-center gap-1">
              © {currentYear} Heart @ Home. Made with <Heart className="w-4 h-4 text-accent" /> for pets.
            </p>
            <p>Mobile veterinary services coming soon.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

