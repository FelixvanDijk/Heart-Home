import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqs } from '../data/faqs'
import { useInView } from '../hooks/useInView'

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  isVisible,
  delay,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  isVisible: boolean
  delay: number
}) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden transition-all duration-700 ${
        isOpen ? 'shadow-xl ring-2 ring-primary/20' : 'shadow-subtle hover:shadow-lg'
      } ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset group"
        aria-expanded={isOpen}
      >
        <span className="text-xl md:text-2xl font-bold text-text pr-4 group-hover:text-primary transition-colors">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-primary text-white rotate-180'
              : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
          }`}
        >
          <ChevronDown className="w-6 h-6" />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4" />
          <p className="text-text-muted text-lg md:text-xl leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, isVisible } = useInView({ threshold: 0.1, triggerOnce: true })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section bg-gradient-to-b from-primary/5 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 text-primary/10 text-9xl">?</div>
      <div className="absolute bottom-20 left-10 text-accent/10 text-9xl rotate-12">?</div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-primary font-semibold text-lg mb-2 tracking-wide uppercase">
            <HelpCircle className="w-5 h-5" />
            Got Questions?
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about Heart @ Home mobile vet services.
          </p>
        </div>

        {/* FAQ List */}
        <div ref={ref} className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-white rounded-3xl shadow-subtle max-w-2xl mx-auto">
          <p className="text-xl text-text mb-4">
            Still have questions? We'd love to hear from you!
          </p>
          <a 
            href="mailto:hello@heartathomevets.com" 
            className="btn-primary inline-flex"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
