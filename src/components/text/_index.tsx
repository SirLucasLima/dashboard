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
  const ContentTag = Tag === 'span' ? 'span' : 'div'
  return (
    <TextStyled $variant={variant} $size={size} $fullWidth={fullWidth} as={Tag} {...rest}>
      {prependIcon && <div className="content prependIcon">{prependIcon}</div>}
      <ContentTag className="content middle">{children}</ContentTag>
      {appendIcon && <div className="content appendIcon">{appendIcon}</div>}
    </TextStyled>
  )
}
