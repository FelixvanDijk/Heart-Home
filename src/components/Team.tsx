import { useState, useEffect, useCallback, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { team, TeamMember } from '../data/team'
import { useInView } from '../hooks/useInView'

// Avatar component with initials
function Avatar({ member, size = 'md' }: { member: TeamMember; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-lg',
    md: 'w-24 h-24 text-3xl',
    lg: 'w-36 h-36 text-5xl',
  }

  const colorClasses = {
    primary: 'bg-gradient-to-br from-primary/20 to-primary/40 text-primary',
    accent: 'bg-gradient-to-br from-accent/20 to-accent/40 text-accent',
    secondary: 'bg-gradient-to-br from-secondary/30 to-secondary/50 text-secondary',
  }

  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[member.color]} rounded-full flex items-center justify-center font-bold shadow-lg`}
    >
      {member.initials}
    </div>
  )
}

// Team Card with enhanced hover
function TeamCard({ 
  member, 
  onClick,
  isVisible,
  delay,
}: { 
  member: TeamMember
  onClick: () => void
  isVisible: boolean
  delay: number
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative text-left p-8 w-full cursor-pointer transition-all duration-700 bg-white rounded-3xl overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        boxShadow: '0 4px 30px -10px rgba(50, 41, 24, 0.1)',
      }}
      aria-label={`Learn more about ${member.name}`}
    >
      {/* Hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative corner */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-5 mb-5">
          <div className="transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
            <Avatar member={member} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-primary font-medium text-lg">{member.role}</p>
          </div>
        </div>
        
        <p className="text-text-muted line-clamp-3 leading-relaxed mb-4">{member.bio}</p>
        
        <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
          Read more 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </button>
  )
}

// Lightbox Modal
function TeamLightbox({
  member,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}: {
  member: TeamMember
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  hasNext: boolean
  hasPrev: boolean
}) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowRight':
          if (hasNext) onNext()
          break
        case 'ArrowLeft':
          if (hasPrev) onPrev()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    // Focus the modal
    modalRef.current?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrev, hasNext, hasPrev])

  // Check for reduced motion
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-member-name"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-deep/90 backdrop-blur-md ${
          prefersReducedMotion ? '' : 'animate-fade-in'
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className={`relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 ${
          prefersReducedMotion ? '' : 'animate-scale-in'
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-text-muted hover:text-text hover:bg-gray-100 rounded-full transition-all duration-200 hover:rotate-90"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrev}
            className={`p-3 rounded-full bg-white shadow-xl pointer-events-auto transition-all ${
              hasPrev
                ? 'text-text hover:text-primary hover:scale-110 hover:-translate-x-1'
                : 'text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            className={`p-3 rounded-full bg-white shadow-xl pointer-events-auto transition-all ${
              hasNext
                ? 'text-text hover:text-primary hover:scale-110 hover:translate-x-1'
                : 'text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Next team member"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Avatar member={member} size="lg" />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <h2 id="team-member-name" className="text-3xl font-bold text-text mb-2">
            {member.name}
          </h2>
          <p className="text-primary font-semibold text-xl mb-6">{member.role}</p>
          <p className="text-text-muted text-lg leading-relaxed">{member.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  const [selectedMemberIndex, setSelectedMemberIndex] = useState<number | null>(null)
  const { ref, isVisible } = useInView({ threshold: 0.1, triggerOnce: true })

  const openLightbox = useCallback((index: number) => {
    setSelectedMemberIndex(index)
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedMemberIndex(null)
  }, [])

  const goToNext = useCallback(() => {
    if (selectedMemberIndex !== null && selectedMemberIndex < team.length - 1) {
      setSelectedMemberIndex(selectedMemberIndex + 1)
    }
  }, [selectedMemberIndex])

  const goToPrev = useCallback(() => {
    if (selectedMemberIndex !== null && selectedMemberIndex > 0) {
      setSelectedMemberIndex(selectedMemberIndex - 1)
    }
  }, [selectedMemberIndex])

  return (
    <section id="team" className="section bg-gradient-to-b from-white to-primary/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-lg mb-2 tracking-wide uppercase">
            The Heart Behind the Name
          </span>
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle mx-auto">
            Our friendly, experienced team is dedicated to providing the best care 
            for your pets in the comfort of your home.
          </p>
        </div>

        {/* Team Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {team.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              onClick={() => openLightbox(index)}
              isVisible={isVisible}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Note about placeholder photos */}
        <p className="text-center text-text-muted mt-12 text-lg">
          ✨ Team photos coming soon!
        </p>
      </div>

      {/* Lightbox */}
      {selectedMemberIndex !== null && (
        <TeamLightbox
          member={team[selectedMemberIndex]}
          onClose={closeLightbox}
          onNext={goToNext}
          onPrev={goToPrev}
          hasNext={selectedMemberIndex < team.length - 1}
          hasPrev={selectedMemberIndex > 0}
        />
      )}
    </section>
  )
}
