export type ProfileType = 'linkedin' | 'website' | 'x'

export const profileTypeName: Record<string, string> = {
  linkedin: 'LinkedIn',
  website: 'Website',
  x: 'X',
}

export type Testimonial = {
  content: string
  name: string
  profileUrl: string
  profileType: ProfileType
  imageUrl: string
  position: string
}
