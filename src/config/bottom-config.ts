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
  language: {
    text: string
    icon: LucideIcon
  }
}

export const bottomConfig: BottomConfig[] = [
  {
    title: {
      text: '/dev-lucas-lima',
      href: '/',
    },
    tabs: [
      {
        icon: GithubIcon,
        href: globalLinksConfig.github,
      },
      {
        icon: LinkedinIcon,
        href: globalLinksConfig.linkedIn,
      },
      {
        icon: InstagramIcon,
        href: globalLinksConfig.instagram,
      },
    ],
    language: {
      text: 'curriculum.pdf',
      icon: FileUser,
    },
  },
]
