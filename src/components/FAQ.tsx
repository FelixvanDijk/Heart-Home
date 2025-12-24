import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faqs'
import { useInView } from '../hooks/useInView'

interface AccordionItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-xl font-semibold text-text group-hover:text-primary transition-colors pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 ${
            isOpen ? 'rotate-180 bg-primary/20' : ''
          }`}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-text-muted text-lg leading-relaxed pr-14">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, isVisible } = useInView({ threshold: 0.1, triggerOnce: true })

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section bg-gradient-to-b from-white to-primary/5">
      <div className="container-custom">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Got questions? We've got answers. If you don't see what you're looking for, 
              feel free to get in touch.
            </p>
          </div>

          {/* Accordion */}
          <div className="card">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-text-muted mb-6">
              Still have questions?
            </p>
            <a href="#register" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

