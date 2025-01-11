import { SpinningLoader } from '../spinning-loader/_index'
import { ButtonStyled } from './button-styled'
import type { ButtonProps } from './button-types'
import { getIconSize } from './utils/get-icon-size'

export const Button = ({
  variant = 'primary',
  disabled = false,
  loading = false,
  size = 'md',
  icon: Icon,
  text,
}: ButtonProps) => {
  const iconSize = getIconSize(size)
  return (
    <ButtonStyled $variant={variant} $disabled={disabled} $loading={loading} $size={size}>
      {loading ? <SpinningLoader size={iconSize} /> : Icon && <Icon size={iconSize} />}
      {text}
    </ButtonStyled>
  )
}
