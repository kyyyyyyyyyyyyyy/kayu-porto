export type Profile = {
  name: string
  username: string
  role: string
  description: string
  location?: string
  email: string
  github?: string
  linkedin?: string
  resumeUrl?: string
  focus?: string
  experience?: string
  status?: string
}

export type Project = {
  name: string
  slug: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  featured?: boolean
}

export type Experience = {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
}

export type SkillCategory = {
  name: string
  skills: string[]
}
