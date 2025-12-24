export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  initials: string
  // PLACEHOLDER: Replace with actual photo paths when available
  // photo: string
  color: 'primary' | 'accent' | 'secondary'
}

export const team: TeamMember[] = [
  {
    id: 'sandra',
    name: 'Sandra Sheils',
    role: 'Veterinary Surgeon',
    bio: 'Sandra brings warmth and decades of experience to every home visit. She believes that pets recover better in familiar surroundings and is passionate about stress-free veterinary care. Her calm approach puts both pets and their owners at ease.',
    initials: 'SS',
    color: 'primary',
  },
  {
    id: 'tim',
    name: 'Tim',
    role: 'Veterinary Surgeon',
    bio: 'Tim is known for his calm, practical approach and has a special love for exotic animals. Whether it\'s a bearded dragon, a house rabbit, or a nervous cat, Tim takes the time to understand each pet\'s unique needs.',
    initials: 'T',
    color: 'accent',
  },
  {
    id: 'michelle',
    name: 'Michelle',
    role: 'Veterinary Nurse',
    bio: 'Michelle\'s friendly, reassuring presence makes every visit feel comfortable. She coordinates our transport services and ensures everything runs smoothly behind the scenes. Pets and owners alike love her gentle, caring nature.',
    initials: 'M',
    color: 'secondary',
  },
]

