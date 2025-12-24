export interface FAQ {
  id: string
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    id: 'launch',
    question: 'When are you launching?',
    answer: "We're working hard to launch soon! Register your interest and we'll let you know as soon as we're ready to start booking appointments. We can't wait to meet you and your pets.",
  },
  {
    id: 'areas',
    question: 'What areas do you cover?',
    answer: 'We plan to cover Wrexham, Chester, Ellesmere Port, Whitchurch, Mold, Oswestry, and surrounding areas. If you\'re unsure whether we\'ll reach you, please register your interest and let us know your location.',
  },
  {
    id: 'exotics',
    question: 'Do you treat exotic pets?',
    answer: 'Yes! We love exotic pets. Our team has experience with reptiles, birds, small mammals like rabbits and guinea pigs, and other non-traditional pets. Home visits can be especially beneficial for exotics who may find travel stressful.',
  },
  {
    id: 'emergency',
    question: 'What if my pet has an emergency?',
    answer: 'For emergencies, please contact your nearest emergency or out-of-hours veterinary provider immediately. Our service is not designed for emergencies, but we can help with routine and non-urgent care once we launch.',
  },
  {
    id: 'transport',
    question: 'How does the transport service work?',
    answer: 'We can safely transport your pet between your home and a veterinary practice, or between two practices. This is ideal if you can\'t drive, don\'t have a car, or if your pet needs to see a specialist. We\'ll handle everything with care.',
  },
  {
    id: 'vaccinations',
    question: 'Can you do vaccinations and boosters?',
    answer: 'Absolutely! We offer full vaccination services including primary courses for puppies, kittens, and rabbits, as well as annual boosters. Getting vaccinated at home can be much less stressful for nervous pets.',
  },
  {
    id: 'cost',
    question: 'How much do home visits cost?',
    answer: 'Our pricing will be competitive and transparent. Home visits do involve a call-out fee to cover travel, but many clients find the convenience and reduced stress well worth it. Full pricing will be available when we launch.',
  },
  {
    id: 'booking',
    question: 'How do I book an appointment?',
    answer: 'We\'re not taking bookings just yet, but if you register your interest, you\'ll be among the first to know when we open our diary. We\'ll make booking as easy as possible.',
  },
]

