import { FileUser, GithubIcon, InstagramIcon, LinkedinIcon, type LucideIcon } from 'lucide-react'

import { globalLinksConfig } from '../../config/global-links-config'

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
        href: globalLinksConfig.instagram,
      },
      {
        icon: LinkedinIcon,
        href: globalLinksConfig.linkedIn,
      },
      {
        icon: GithubIcon,
        href: globalLinksConfig.gitHub,
      },
    ],
    curriculum: {
      text: 'curriculum.pdf',
      icon: FileUser,
    },
  },
]
