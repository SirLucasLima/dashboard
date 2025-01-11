import type { LucideIcon } from 'lucide-react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonStylesProps {
  $variant: ButtonVariant
  $disabled: boolean
  $loading: boolean
  $size: ButtonSize
}

export interface ButtonProps {
  variant?: ButtonVariant
  disabled?: boolean
  loading?: boolean
  size?: ButtonSize
  icon?: LucideIcon
  text?: string
}
