import { CardStyled } from './card-styled'
import type { CardProps } from './card-types'

export const Card = ({
  variant = 'secondary',
  overflow = 'hidden',
  padding = true,
  children,
}: CardProps) => {
  return (
    <CardStyled $variant={variant} $overflow={overflow} $padding={padding}>
      {children}
    </CardStyled>
  )
}
