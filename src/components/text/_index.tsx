import { TextStyled } from './text-styled'
import type { TextProps } from './text-types'

export const Text = ({
  as: Tag = 'p',
  variant = 'text',
  size = 'md',
  children,
  ...rest
}: TextProps) => {
  return (
    <TextStyled $variant={variant} $size={size} as={Tag} {...rest}>
      {children}
    </TextStyled>
  )
}
