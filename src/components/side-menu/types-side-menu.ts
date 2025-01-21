import type { LucideIcon } from 'lucide-react'

export interface SideMenuButtonTypes {
  $isActive: boolean
}

export interface MenuButtonProps {
  icon: LucideIcon
  isActive?: boolean
  onClick?: () => void
}
