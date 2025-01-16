import { FileUser, GithubIcon, InstagramIcon, LinkedinIcon, type LucideIcon } from 'lucide-react'

import { globalLinksConfig } from './globa-links-config'

export interface BottomConfig {
  title: {
    text: string
    href: string
  }
  tabs: {
    icon: LucideIcon
    href: string
  }[]
  curriculum: {
    text: string
    icon: LucideIcon
  }
}

export const bottomConfig: BottomConfig[] = [
  {
    title: {
      text: 'find me in:',
      href: '/about',
    },
    tabs: [
      {
        icon: InstagramIcon,
        href: globalLinksConfig.instagram,
      },
      {
        icon: LinkedinIcon,
        href: globalLinksConfig.linkedIn,
      },
      {
        icon: GithubIcon,
        href: globalLinksConfig.github,
      },
    ],
    curriculum: {
      text: 'curriculum.pdf',
      icon: FileUser,
    },
  },
]
