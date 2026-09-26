import type { Project } from '../types/portfolio'

export const projectsData: Project[] = [
  {
    name: 'mini-bitcoin',
    slug: 'mini-bitcoin',
    description: 'Bitcoin-like blockchain prototype written for learning blockchain fundamentals. Includes basic P2P networking and proof-of-work.',
    technologies: ['Go', 'Pebble', 'Cryptography', 'P2P'],
    githubUrl: 'https://github.com/kyyyyyyyyyyyyyy/mini-btckyu',
    featured: true
  },
  {
    name: 'go-fnb backend',
    slug: 'go-fnb',
    description: 'sytem for mangaging a restaurant, including menu management, order processing, and payment handling. Built with Go and PostgreSQL for high performance and scalability.',
    technologies: ['Rust', 'PostgreSQL'],
    githubUrl: 'https://github.com/kyyyyyyyyyyyyyy/go-fnb-backend',
  },
  {
    name: 'landingpage generator backend',
    slug: 'landingpage-generator-backend',
    description: 'A simple tool for generating responsive landing pages with customizable components, themes, and integrated with payment gateway.',
    technologies: ['TypeScript', 'Hono', 'PostgreSQL'],
    githubUrl: 'https://github.com/kyyyyyyyyyyyyyy/landingpage-hono'
  }
]
