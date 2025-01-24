import { FileUser, GithubIcon, InstagramIcon, LinkedinIcon, type LucideIcon } from 'lucide-react'

import { configLinks } from '../../config/config-links'

export interface ConfigFooter {
  title: {
    text: string
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

export const configFooter: ConfigFooter[] = [
  {
    title: {
      text: 'find me in:',
    },
    tabs: [
      {
        icon: InstagramIcon,
        href: configLinks.instagram,
      },
      {
        icon: LinkedinIcon,
        href: configLinks.linkedIn,
      },
      {
        icon: GithubIcon,
        href: configLinks.gitHub,
      },
    ],
    curriculum: {
      text: 'curriculum.pdf',
      icon: FileUser,
    },
  },
]
