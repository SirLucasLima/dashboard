import type { LucideIcon } from 'lucide-react'

export interface StyledMenuButtonProps {
  $isActive: boolean
}

export interface MenuButtonProps {
  icon: LucideIcon
  isActive?: boolean
  onClick?: () => void
}

export interface StyledSocialLinksProps {
  $isOpen: boolean
}
