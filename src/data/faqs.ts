export interface FAQ {
  id: string
  question: string
  answer: string
  answerLink?: { href: string; label: string }
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
    id: 'cost',
    question: 'How much do home visits cost?',
    answer: 'Please see the pricing section above for our current home visit fees and services.',
    answerLink: { href: '#pricing', label: 'View pricing' },
  },
  {
    id: 'booking',
    question: 'How do I book an appointment?',
    answer: 'You can contact us via phone, email, or our online booking form. Include your location, pet details, reason for visit, and any relevant history. We\'ll get back to you promptly to arrange your home visit.',
  },
]
