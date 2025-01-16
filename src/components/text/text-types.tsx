import type { LucideIcon } from 'lucide-react'
import type { AnchorHTMLAttributes, ReactElement } from 'react'

export type TextVariant =
  | 'text'
  | 'variable'
  | 'tag'
  | 'comment'
  | 'title'
  | 'subtitle'
  | 'list'
  | 'link'

export type TextSize = 'sm' | 'md' | 'lg' | 'xl'

export interface TextProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: React.ElementType
  variant?: TextVariant
  size?: TextSize
  children: React.ReactNode
  prependIcon?: ReactElement<LucideIcon>
  appendIcon?: ReactElement<LucideIcon>
  fullWidth?: boolean
}

export interface TextStyledProps {
  $variant: TextVariant
  $size: TextSize
  $fullWidth: boolean
}
