// Import photos
import michelePhoto from '/assets/michelle.png'
import timPhoto from '/assets/tim.png'

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  initials: string
  photo?: string // Optional photo path
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
  {
    id: 'michele',
    name: 'Michele Jenkins',
    role: 'Registered Veterinary Nurse',
    bio: 'With over 40 years of hands-on experience and a special passion for wildlife, reptiles, birds, and exotic pets, Michele brings warmth and expertise to every home visit. She holds additional qualifications across multiple species alongside her lifelong love of cats and dogs.\n\nMichele is excited to be part of this independent mobile service, bringing a more traditional, personal approach to veterinary care. By offering care in a pet\'s own home, she helps reduce stress and create a calmer experience for both pets and owners. She has a particular passion for supporting senior pets, helping families make practical changes that improve comfort, mobility, and quality of life as pets age.\n\nHaving lived and worked in the local area for over 20 years, Michele looks forward to becoming a familiar, friendly, and trusted face — building long-term relationships based on care, understanding, and respect.',
    initials: 'MJ',
    photo: michelePhoto,
    color: 'secondary',
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
