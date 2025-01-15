import type { RemixiconComponentType } from '@remixicon/react'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'icon'

export type HoverVariant = 'instagram' | 'linkedIn' | 'github' | undefined

export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonStylesProps {
  $variant: ButtonVariant
  $hover: HoverVariant
  $disabled: boolean
  $loading: boolean
  $size: ButtonSize
}

export interface ButtonProps {
  variant?: ButtonVariant
  hover?: HoverVariant
  disabled?: boolean
  loading?: boolean
  size?: ButtonSize
  icon?: RemixiconComponentType
  children?: React.ReactNode
  href?: string
  target?: React.HTMLAttributeAnchorTarget
}
