import type { LucideIcon } from 'lucide-react'

export interface MenuButtonProps {
  icon: LucideIcon
  isOpen?: boolean
  onClick?: () => void
}

export interface StyledMenuButtonProps {
  $isOpen: boolean
}

export interface StyledSocialLinksProps {
  $isOpen: boolean
}
