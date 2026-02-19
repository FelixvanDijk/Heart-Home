import { useState, useEffect } from 'react'
import { Menu, X, PawPrint, Calendar } from 'lucide-react'
import logoImg from '/assets/logo.png'

// LupaPets booking/registration link
const BOOKING_URL = 'https://store.lupapets.com/booking/37e5721f-f7e1-405f-ab07-8abf7337e66e'

const navLinks = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#pricing', label: 'Pricing', id: 'pricing' },
  { href: '#about', label: 'About Us', id: 'about' },
  { href: '#testimonials', label: 'Testimonials', id: 'testimonials' },
  { href: '#team', label: 'Meet the Team', id: 'team' },
  { href: '#end-of-life', label: 'End-of-Life Care', id: 'end-of-life' },
  { href: '#faq', label: 'FAQs', id: 'faq' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPos = window.scrollY + 150 // Offset for header height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group shrink-0"
            onClick={handleNavClick}
          >
            <img
              src={logoImg}
              alt="Heart @ Home"
              className="h-12 md:h-14 w-auto transition-transform group-hover:scale-105"
            />
            <span className="sr-only">Heart @ Home</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden xl:flex items-center justify-center flex-1 gap-4 2xl:gap-6 min-w-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-text text-[0.95rem] 2xl:text-[1.05rem] font-medium hover:text-primary transition-colors py-2 relative group whitespace-nowrap ${
                    activeSection === link.id ? 'text-primary' : ''
                  }`}
                >
                  {link.label}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} 
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Buttons (Desktop) - Links to LupaPets */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Now
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent hover:bg-accent/90 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <PawPrint className="w-3.5 h-3.5" />
              Register
            </a>
          </div>

          {/* Mobile: Book Now + Register Button + Menu Button */}
          <div className="flex items-center gap-1.5 xl:hidden">
            {/* Mobile Book Now Button - Always visible */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-primary hover:bg-primary/90 text-white font-semibold text-xs rounded-full shadow-md transition-all"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </a>

            {/* Mobile Register Button - Always visible */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-accent hover:bg-accent/90 text-white font-semibold text-xs rounded-full shadow-md transition-all"
            >
              <PawPrint className="w-3 h-3" />
              <span>Register</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="p-2 -mr-2 text-text hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-[32rem] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-2 pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 px-4 text-lg font-medium text-text hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3 flex gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-primary hover:bg-primary/90 text-white text-base font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
                onClick={handleNavClick}
              >
                <Calendar className="w-4 h-4" />
                Book Now
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-accent hover:bg-accent/90 text-white text-base font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all"
                onClick={handleNavClick}
              >
                <PawPrint className="w-4 h-4" />
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
