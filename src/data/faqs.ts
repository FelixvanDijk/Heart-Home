export interface FAQ {
  id: string
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: 'nervous-pets',
    question: 'Do you treat nervous pets?',
    answer: 'Yes — home visits are often ideal for nervous pets. However, in certain circumstances for animals that are particularly anxious, we can administer medication to help them feel even more relaxed in their own home.',
  },
  {
    id: 'emergency',
    question: 'Do you offer emergency services?',
    answer: 'While we can deal with some emergencies, our options are often limited in the home setting. In such circumstances, it is often best to be seen at a vet with hospital facilities. Please contact us and we will advise whether it is likely something we can deal with or whether your pet is better seen at a practice with hospital facilities.',
  },
  {
    id: 'what-pets',
    question: 'What pets do you see?',
    answer: 'We see dogs, cats, and exotic species including small mammals (rabbits, guinea pigs, hamsters), reptiles, and birds. Suitability for exotic pet visits is assessed on a case-by-case basis.',
  },
  {
    id: 'prepare',
    question: 'Do I need to prepare anything?',
    answer: 'Usually just a quiet, confined space where we can examine your pet, and any relevant medical history or previous vet records. We\'ll let you know if anything specific is needed when you book.',
  },
  {
    id: 'areas',
    question: 'What areas do you cover?',
    answer: 'We plan to cover Wrexham, Chester, Ellesmere Port, Whitchurch, Mold, Oswestry, and surrounding areas. If you\'re unsure whether we\'ll reach you, please contact us — we\'re happy to help.',
  },
  {
    id: 'launch',
    question: 'When are you launching?',
    answer: 'We\'re working hard to launch soon! Register your interest and we\'ll let you know as soon as we\'re ready to start booking appointments. We can\'t wait to meet you and your pets.',
  },
  {
    id: 'cost',
    question: 'How much do home visits cost?',
    answer: 'Our pricing will be transparent and competitive. Home visits do involve a call-out fee to cover travel, but many clients find the convenience and reduced stress well worth it. Full pricing will be available when we launch, and payment is due at the time of the visit.',
  },
  {
    id: 'booking',
    question: 'How do I book an appointment?',
    answer: 'You can contact us via phone, email, or our online booking form. Include your location, pet details, reason for visit, and any relevant history. We\'ll get back to you promptly to arrange your home visit.',
  },
]
