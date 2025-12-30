import { 
  Stethoscope, 
  Syringe, 
  TestTube, 
  HeartPulse, 
  Bird, 
  Car,
  Pill,
  Activity,
  Scissors,
  FileText,
  Heart,
  Home
} from 'lucide-react'

export interface Service {
  id: string
  icon: typeof Stethoscope
  title: string
  description: string
  category: string
}

export const services: Service[] = [
  // General Veterinary Care
  {
    id: 'health-checks',
    icon: Stethoscope,
    title: 'Health Checks & Vaccinations',
    description: 'Puppy, kitten & rabbit vaccinations, annual boosters, rabies vaccination, and microchipping.',
    category: 'General Care',
  },
  {
    id: 'sick-pet',
    icon: HeartPulse,
    title: 'Sick Pet Consultations',
    description: 'Calm assessment for dogs, cats, rabbits, small mammals, reptiles, and birds.',
    category: 'General Care',
  },
  {
    id: 'diagnostics',
    icon: TestTube,
    title: 'Diagnostics at Home',
    description: 'Blood, urine & faecal tests, skin diagnostics, ultrasound scans, BP measurement, and health screening.',
    category: 'Diagnostics',
  },
  {
    id: 'chronic-care',
    icon: Activity,
    title: 'Ongoing & Specialised Care',
    description: 'Chronic disease management, senior pet care, behaviour-friendly consultations, palliative & quality-of-life support.',
    category: 'Ongoing Care',
  },
  {
    id: 'exotic',
    icon: Bird,
    title: 'Exotic Pet Care',
    description: 'Health checks, husbandry guidance, and welfare optimisation for reptiles, birds, and small mammals.',
    category: 'Specialist',
  },
  {
    id: 'pain-mobility',
    icon: Heart,
    title: 'Pain & Mobility Clinics',
    description: 'Pain assessments, long-term plans, arthritis support, acupuncture, and laser therapy where appropriate.',
    category: 'Specialist',
  },
  {
    id: 'nurse-clinics',
    icon: Scissors,
    title: 'Nurse Clinics',
    description: 'Nail clipping, anal glands, ear care, weight clinics, dental checks, medication administration, and more.',
    category: 'Nursing',
  },
  {
    id: 'medications',
    icon: Pill,
    title: 'Medications Delivered',
    description: 'Transparent pricing, delivered to your door with clear guidance.',
    category: 'Convenience',
  },
  {
    id: 'end-of-life',
    icon: Home,
    title: 'End-of-Life Care',
    description: 'Quality-of-life assessments, gentle end-of-life care at home, aftercare via Holywell Pet Crematorium.',
    category: 'Palliative',
  },
  {
    id: 'transport',
    icon: Car,
    title: 'Patient Transfers & Referrals',
    description: 'Safe transport between your home and veterinary practices when needed.',
    category: 'Additional',
  },
  {
    id: 'certificates',
    icon: FileText,
    title: 'Animal Health Certificates',
    description: 'Official documentation for travel and regulatory requirements.',
    category: 'Additional',
  },
  {
    id: 'parasites',
    icon: Syringe,
    title: 'Parasite Prevention & Treatment',
    description: 'Comprehensive parasite control and prevention plans for your pets.',
    category: 'General Care',
  },
]

// Categories for filtering/grouping
export const serviceCategories = [
  'General Care',
  'Diagnostics',
  'Ongoing Care',
  'Specialist',
  'Nursing',
  'Palliative',
  'Additional',
  'Convenience',
]
