import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoImg from '/assets/logo.png'

const navLinks = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#services', label: 'Services', id: 'services' },
  { href: '#testimonials', label: 'Testimonials', id: 'testimonials' },
  { href: '#register', label: 'Register Interest', id: 'register' },
  { href: '#team', label: 'Meet the Team', id: 'team' },
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
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
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
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-text font-medium hover:text-primary transition-colors py-2 relative group ${
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

          {/* CTA Button (Desktop) */}
          <a
            href="#register"
            className="hidden lg:inline-flex btn-primary text-base px-5 py-2.5 min-h-0"
          >
            Register Interest
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-text hover:text-primary transition-colors"
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
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
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
            <li className="pt-2">
              <a
                href="#register"
                className="btn-primary w-full text-base"
                onClick={handleNavClick}
              >
                Register Interest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

