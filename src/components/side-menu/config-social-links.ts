import { Github, Instagram, Linkedin, LucideIcon, Pencil, Phone } from 'lucide-react'

import { configLinks } from '../../config/config-links'

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
    href: configLinks.whatsApp,
  },
  {
    name: 'GitHub',
    icon: Github,
    size: 16,
    href: configLinks.gitHub,
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    size: 16,
    href: configLinks.linkedIn,
  },
  {
    name: 'Behance',
    icon: Pencil,
    size: 16,
    href: configLinks.behance,
  },
  {
    name: 'Instagram',
    icon: Instagram,
    size: 16,
    href: configLinks.instagram,
  },
]
