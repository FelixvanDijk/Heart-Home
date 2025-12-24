import { useState, useEffect, useCallback, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { team, TeamMember } from '../data/team'
import { useInView } from '../hooks/useInView'

// Avatar component with initials
function Avatar({ member, size = 'md' }: { member: TeamMember; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-lg',
    md: 'w-20 h-20 text-2xl',
    lg: 'w-32 h-32 text-4xl',
  }

  const colorClasses = {
    primary: 'bg-primary/20 text-primary',
    accent: 'bg-accent/20 text-accent',
    secondary: 'bg-secondary/30 text-secondary',
  }

  return (
    <div
      className={`${sizeClasses[size]} ${colorClasses[member.color]} rounded-full flex items-center justify-center font-bold`}
    >
      {member.initials}
    </div>
  )
}

// Team Card
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
      className={`card-hover text-left p-6 w-full group cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      aria-label={`Learn more about ${member.name}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <Avatar member={member} />
        <div>
          <h3 className="text-xl font-semibold text-text group-hover:text-primary transition-colors">
            {member.name}
          </h3>
          <p className="text-text-muted">{member.role}</p>
        </div>
      </div>
      <p className="text-text-muted line-clamp-2">{member.bio}</p>
      <span className="inline-block mt-4 text-primary font-medium group-hover:underline">
        Read more →
      </span>
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
        className={`absolute inset-0 bg-deep/80 backdrop-blur-sm ${
          prefersReducedMotion ? '' : 'animate-fade-in'
        }`}
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className={`relative bg-white rounded-3xl shadow-elevated max-w-lg w-full p-8 ${
          prefersReducedMotion ? '' : 'animate-scale-in'
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-muted hover:text-text hover:bg-gray-100 rounded-full transition-colors"
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
            className={`p-2 rounded-full bg-white shadow-lg pointer-events-auto transition-all ${
              hasPrev
                ? 'text-text hover:text-primary hover:scale-110'
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
            className={`p-2 rounded-full bg-white shadow-lg pointer-events-auto transition-all ${
              hasNext
                ? 'text-text hover:text-primary hover:scale-110'
                : 'text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Next team member"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Avatar member={member} size="lg" />
          </div>
          <h2 id="team-member-name" className="text-2xl font-bold text-text mb-1">
            {member.name}
          </h2>
          <p className="text-primary font-medium text-lg mb-6">{member.role}</p>
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
    <section id="team" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Meet the Team</h2>
          <p className="section-subtitle mx-auto">
            Our friendly, experienced team is dedicated to providing the best care 
            for your pets in the comfort of your home.
          </p>
        </div>

        {/* Team Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {team.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              onClick={() => openLightbox(index)}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Note about placeholder photos */}
        <p className="text-center text-text-muted mt-10">
          Team photos coming soon!
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

