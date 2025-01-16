import { TextStyled } from './text-styled'
import type { TextProps } from './text-types'

export const Text = ({
  as: Tag = 'p',
  variant = 'text',
  size = 'md',
  children,
  prependIcon,
  appendIcon,
  fullWidth = false,
  ...rest
}: TextProps) => {
  return (
    <TextStyled $variant={variant} $size={size} $fullWidth={fullWidth} as={Tag} {...rest}>
      {prependIcon && <div className="content prependIcon">{prependIcon}</div>}
      <div className="content middle">{children}</div>
      {appendIcon && <div className="content appendIcon">{appendIcon}</div>}
    </TextStyled>
  )
}
