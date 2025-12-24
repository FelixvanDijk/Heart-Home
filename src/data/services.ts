import { 
  Stethoscope, 
  Syringe, 
  TestTube, 
  HeartPulse, 
  Bird, 
  Car, 
  ArrowLeftRight, 
  Clock 
} from 'lucide-react'

export interface Service {
  id: string
  icon: typeof Stethoscope
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'consultations',
    icon: Stethoscope,
    title: 'Sick Pet Consultations',
    description: 'Full health checks and consultations in the comfort of your home.',
  },
  {
    id: 'vaccinations',
    icon: Syringe,
    title: 'Vaccinations',
    description: 'Primary courses and booster vaccinations for cats, dogs, and rabbits.',
  },
  {
    id: 'blood-sampling',
    icon: TestTube,
    title: 'Blood Sampling',
    description: 'Convenient blood tests without the stress of travelling to a clinic.',
  },
  {
    id: 'blood-pressure',
    icon: HeartPulse,
    title: 'Blood Pressure Measurement',
    description: 'Accurate readings in a calm, familiar environment.',
  },
  {
    id: 'exotics',
    icon: Bird,
    title: 'Exotic Animal Visits',
    description: 'Specialist care for reptiles, birds, small mammals, and more.',
  },
  {
    id: 'transport-practice',
    icon: Car,
    title: 'Pet Transport to Practice',
    description: 'Safe transport between your home and a bricks & mortar practice.',
  },
  {
    id: 'transport-between',
    icon: ArrowLeftRight,
    title: 'Practice-to-Practice Transport',
    description: 'Secure transfers between veterinary practices when needed.',
  },
  {
    id: 'out-of-hours',
    icon: Clock,
    title: 'Out of Hours Referrals',
    description: 'Guidance and connections to emergency service providers.',
  },
]

