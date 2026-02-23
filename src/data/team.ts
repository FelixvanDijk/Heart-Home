// Import photos
import timPhoto from '/assets/tim.png'

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  initials: string
  photo?: string // Optional photo path
  photoPosition?: string // Custom object-position for photo (e.g., 'top', 'center 30%')
  color: 'primary' | 'accent' | 'secondary'
}

export const team: TeamMember[] = [
  {
    id: 'timothy',
    name: 'Timothy Dale',
    role: 'Veterinary Surgeon',
    bio: 'Timothy brings a calm, practical approach to every home visit. With extensive experience across multiple species, he has a special love for exotic animals. Whether it\'s a bearded dragon, a house rabbit, or a nervous cat, Timothy takes the time to understand each pet\'s unique needs.',
    initials: 'TD',
    photo: timPhoto,
    color: 'primary',
  },
  // TEMPORARILY HIDDEN - Uncomment when ready to add Sandra to website
  // {
  //   id: 'sandra',
  //   name: 'Sandra van Dijk Sheils',
  //   role: 'Veterinary Surgeon',
  //   bio: 'Sandra brings warmth and decades of experience to every home visit. She believes that pets recover better in familiar surroundings and is passionate about stress-free veterinary care. Her calm approach puts both pets and their owners at ease.',
  //   initials: 'SvDS',
  //   color: 'accent',
  // },
]


