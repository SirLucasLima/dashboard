import type { AnchorHTMLAttributes } from 'react'

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
}

export interface TextStyledProps {
  $variant: TextVariant
  $size: TextSize
}
