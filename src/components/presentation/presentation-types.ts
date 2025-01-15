export type CardVariant =
  | 'primary'
  | 'secondary'
  | 'green'
  | 'blue'
  | 'cyan'
  | 'yellow'
  | 'orange'
  | 'rose'
  | 'purple'

// export type CardSize = 'sm' | 'md' | 'lg'
export type CardOverflow = 'hidden' | 'scroll' | 'auto'
export interface CardStylesProps {
  $variant: CardVariant
  $overflow: CardOverflow
  $padding: boolean
  // $size: CardSize
}
export interface CardProps {
  variant?: CardVariant
  overflow?: CardOverflow
  padding?: boolean
  // size: CardSize
  children: React.ReactNode
}
