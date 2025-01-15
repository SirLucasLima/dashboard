import { SpinningLoader } from '../spinning-loader/_index'
import { ButtonStyled } from './button-styled'
import type { ButtonProps } from './button-types'
import { getIconSize } from './utils/get-icon-size'

export const Button = ({
  variant = 'primary',
  hover = undefined,
  disabled = false,
  loading = false,
  size = 'md',
  icon: Icon,
  children,
  href,
  target,
}: ButtonProps) => {
  const iconSize = getIconSize(size)
  const isLink = Boolean(href)
  return (
    <ButtonStyled
      as={isLink ? 'a' : 'button'}
      href={isLink ? href : undefined}
      target={isLink ? target : undefined}
      $variant={variant}
      $hover={hover}
      $disabled={disabled}
      $loading={loading}
      $size={size}
    >
      {loading ? <SpinningLoader size={iconSize} /> : Icon && <Icon size={iconSize} />}
      {children}
    </ButtonStyled>
  )
}
