import { Github, Instagram, Linkedin, LucideIcon, Pencil, Phone } from 'lucide-react'

import { globalLinksConfig } from '../../config/global-links-config'

export type SocialLink = {
  icon: LucideIcon
  size: number
  href: string
  name: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'WhatsApp',
    icon: Phone,
    size: 16,
    href: globalLinksConfig.whatsApp,
  },
  {
    name: 'GitHub',
    icon: Github,
    size: 16,
    href: globalLinksConfig.gitHub,
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    size: 16,
    href: globalLinksConfig.linkedIn,
  },
  {
    name: 'Behance',
    icon: Pencil,
    size: 16,
    href: globalLinksConfig.behance,
  },
  {
    name: 'Instagram',
    icon: Instagram,
    size: 16,
    href: globalLinksConfig.instagram,
  },
]
